(ns mnf-toolkit.calcs
  (:require [clojure.math.combinatorics :as combo]
            [clojure.math :as math]))

(defn extract-player-results
  "First extract individual player results from match data"
  [matches]
  (reduce
   (fn [acc match]
     (let [{:keys [match-id date team-colours-data team-bibs-data]} match
           colours-result {:won (> (:goals team-colours-data) (:goals team-bibs-data))
                           :drawn (= (:goals team-colours-data) (:goals team-bibs-data))
                           :lost (< (:goals team-colours-data) (:goals team-bibs-data))
                           :goals-for (:goals team-colours-data)
                           :goals-against (:goals team-bibs-data)
                           :date date}
           bibs-result {:won (> (:goals team-bibs-data) (:goals team-colours-data))
                        :drawn (= (:goals team-bibs-data) (:goals team-colours-data))
                        :lost (< (:goals team-bibs-data) (:goals team-colours-data))
                        :goals-for (:goals team-bibs-data)
                        :goals-against (:goals team-colours-data)
                        :date date}]
       (-> acc
           (into (map #(assoc colours-result :player % :match-id match-id)
                      (:players team-colours-data)))
           (into (map #(assoc bibs-result :player % :match-id match-id)
                      (:players team-bibs-data))))))
   []
   matches))

(defn normalize-value
  "Normalize a value between min and max thresholds to 0-1 range"
  [value min-threshold max-threshold]
  (let [normalized (/ (- value min-threshold)
                      (- max-threshold min-threshold))]
    (max 0.0 (min 1.0 normalized))))

(defn round-4dp [n]
  (Double/parseDouble (format "%.4f" n)))

(defn calculate-player-stats
  "Calculate statistics for all players and enrich with player attributes"
  [matches players]
  (let [all-player-results (extract-player-results matches)]
    (->> all-player-results
         (group-by :player)
         (map (fn [[player player-matches]]
                (let [player-in-bibs? (fn [match]
                                        (contains?
                                         (get-in match [:team-bibs-data :players])
                                         player))
                      railway-games (reduce +
                                            (for [match matches]
                                              (if (contains? (get-in match [:team-colours-data :players]) player)
                                                (:shooting-at-railway (:team-colours-data match))
                                                (:shooting-at-railway (:team-bibs-data match)))))
                      total-games (count player-matches)
                      wins (count (filter :won player-matches))
                      draws (count (filter :drawn player-matches))
                      losses (count (filter :lost player-matches))
                      total-goals-for (reduce + (map :goals-for player-matches))
                      total-goals-against (reduce + (map :goals-against player-matches))
                      total-goal-diff (reduce + (map #(- (:goals-for %) (:goals-against %))
                                                     player-matches))
                      bibs-games (count (filter player-in-bibs? matches))
                      win-ratio (float (/ wins total-games))
                      avg-goal-diff (float (/ total-goal-diff total-games))
                      win-score (normalize-value win-ratio 0.25 0.75)
                      goal-score (normalize-value avg-goal-diff -2.0 2.0)

                      ;; Recent form calculation (last 5 games)
                      recent-matches (take 5 (reverse (sort-by :date player-matches)))
                      recent-wins (count (filter :won recent-matches))
                      recent-win-ratio (if (seq recent-matches)
                                         (float (/ recent-wins (count recent-matches)))
                                         0.0)
                      recent-goal-diff (if (seq recent-matches)
                                         (float (/ (reduce + (map #(- (:goals-for %) (:goals-against %))
                                                                  recent-matches))
                                                   (count recent-matches)))
                                         0.0)
                      recent-win-score (normalize-value recent-win-ratio 0.25 0.75)
                      recent-goal-score (normalize-value recent-goal-diff -2.0 2.0)

                      base-stats {:player player
                                  :games-played total-games
                                  :games-won wins
                                  :games-drawn draws
                                  :games-lost losses
                                  :goals-for total-goals-for
                                  :goals-against total-goals-against
                                  :goal-difference total-goal-diff
                                  :win-ratio (round-4dp win-ratio)
                                  :avg-goal-diff (round-4dp avg-goal-diff)
                                  :bibs-ratio (round-4dp (if (pos? total-games)
                                                           (float (/ bibs-games total-games))
                                                           0.0))
                                  :railway-ratio (if (pos? total-games)
                                                   (float (/ railway-games total-games))
                                                   0.0)
                                  :win-score (round-4dp win-score)
                                  :goal-score (round-4dp goal-score)
                                  :recent-win-ratio (round-4dp recent-win-ratio)
                                  :recent-win-score (round-4dp recent-win-score)
                                  :recent-goal-diff (round-4dp recent-goal-diff)
                                  :recent-goal-score (round-4dp recent-goal-score)}
                      player-data (some #(when (= player (:name %))
                                           (select-keys % [:attacking-bias :defensive-bias :manager-rating]))
                                        players)
                      merged-stats (merge base-stats player-data)]
                  (assoc merged-stats
                         :player-score (round-4dp (+ (* 0.5 (:manager-rating merged-stats 0.5))
                                                     (* 0.4 (:win-score merged-stats))
                                                     (* 0.1 (:goal-score merged-stats))))
                         :recent-player-score (round-4dp (+ (* 0.5 (:manager-rating merged-stats))
                                                            (* 0.4 (:recent-win-score merged-stats))
                                                            (* 0.1 (:recent-goal-score merged-stats))))))))
         (sort-by :games-played >))))

(defn generate-team-combinations
  "Generate all possible combinations of two 8-person teams from 16 players.
   Returns a sequence of maps, each containing :team1 and :team2"
  [players]
  (when (= 16 (count players))
    (let [all-team1-combinations (combo/combinations players 8)]
      (->> all-team1-combinations
           ;; Only take half to avoid duplicate combinations (reversed teams)
           (take (/ (count all-team1-combinations) 2))
           (map (fn [team1]
                  (let [team2 (vec (remove (set team1) players))]
                    {:team1 (vec team1)
                     :team2 team2})))))))

(def default-player-stats
  {:player-score 0
   :win-ratio 0.5
   :avg-goal-diff 0
   :bibs-ratio 0.5
   :railway-ratio 0.5})

(defn calculate-team-averages
  "Calculate average metrics for a team, using defaults for new players"
  [team player-stats]
  (let [team-stats (map (fn [player-name]
                          (let [filtered-stats (filter #(= (:player %) player-name) player-stats)
                                first-stat (first filtered-stats)
                                result (or first-stat
                                           (assoc default-player-stats
                                                  :player player-name
                                                  :player-score 0.5
                                                  :recent-player-score 0.5
                                                  :win-ratio 0.5
                                                  :goal-score 0.5
                                                  :bibs-ratio 0.5
                                                  :railway-ratio 0.5
                                                  :attacking-bias 0.5
                                                  :defensive-bias 0.5
                                                  :recent-win-ratio 0.5
                                                  :recent-goal-score 0.5))]
                            (when (nil? result)
                              (println "Warning: nil result for player" player-name))
                            result))
                        team)
        player-count (count team-stats)]
    (when (pos? player-count)
      {:avg-player-score (round-4dp (/ (reduce + (map :player-score team-stats)) player-count))
       :avg-recent-player-score (round-4dp (/ (reduce + (map :recent-player-score team-stats)) player-count))
       :avg-win-ratio (round-4dp (/ (reduce + (map :win-ratio team-stats)) player-count))
       :avg-goal-score (round-4dp (/ (reduce + (map :goal-score team-stats)) player-count))
       :avg-bibs-ratio (round-4dp (/ (reduce + (map :bibs-ratio team-stats)) player-count))
       :avg-railway-ratio (round-4dp (/ (reduce + (map :railway-ratio team-stats)) player-count))
       :avg-attacking-bias (round-4dp (/ (reduce + (map :attacking-bias team-stats)) player-count))
       :avg-defensive-bias (round-4dp (/ (reduce + (map :defensive-bias team-stats)) player-count))
       :avg-recent-win-ratio (round-4dp (/ (reduce + (map :recent-win-ratio team-stats)) player-count))
       :avg-recent-goal-score (round-4dp (/ (reduce + (map :recent-goal-score team-stats)) player-count))})))

(defn calculate-balance-score
  "Calculate how balanced two teams are (1.0 is perfect balance, >1 favors team1, <1 favors team2)"
  [team1-stats team2-stats]
  (let [score-diff (- (:avg-recent-player-score team1-stats)
                      (:avg-recent-player-score team2-stats))
        win-diff (- (:avg-win-ratio team1-stats)
                    (:avg-win-ratio team2-stats))
        recent-win-diff (- (:avg-recent-win-ratio team1-stats)
                           (:avg-recent-win-ratio team2-stats))
        recent-goal-score-diff (- (:avg-recent-goal-score team1-stats)
                                  (:avg-recent-goal-score team2-stats))
        chemistry-diff (- (:avg-attacking-bias team1-stats)
                          (:avg-attacking-bias team2-stats))

        ;; Calculate weighted composite difference
        weighted-diff (+ (* chemistry-diff 0.5)
                         (* score-diff 0.325)
                         (* recent-win-diff 0.075)
                         (* win-diff 0.05)
                         (* recent-goal-score-diff 0.05))

        ;; Transform to 1-centered scale using exponential
        ;; This will give us 1 for perfect balance,
        ;; >1 if team1 is stronger, <1 if team2 is stronger
        balance-score (round-4dp (math/exp weighted-diff))]

    ;; Optional: cap extreme values
    (max 0.5 (min 1.5 balance-score))))

(defn analyze-team-combinations
  "Analyze all combinations and return top 5 most balanced teams"
  [teams player-stats] 
  (let [teams-seq (if (map? teams) [teams] teams)]  ;; wrap in vector if single map
    (->> teams-seq
         (map (fn [{:keys [team1 team2]}]
                (let [team1-stats (calculate-team-averages team1 player-stats)
                      team2-stats (calculate-team-averages team2 player-stats)]
                  {:team1 team1
                   :team2 team2
                   :team1-stats team1-stats
                   :team2-stats team2-stats
                   :balance-score (calculate-balance-score team1-stats team2-stats)})))
         (sort-by #(abs (- 1 (:balance-score %))))
         (take 5)
         vec)))

(defn normalize-to-fifa
  "Convert a normalized score (0-1) to FIFA rating (60-99)
   Calibrated so that 0.25 -> 70 and 0.75 -> 90"
  [score]
  (let [fifa-score (+ (* 40 score) 60)]
    (-> fifa-score
        Math/round
        (max 60)
        (min 99))))