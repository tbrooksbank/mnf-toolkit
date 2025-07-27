(ns mnf-toolkit.frontend.calcs)

(defn create-player-result
  "Creates a player result map by merging team result data with player and match ID."
  [team-result player match-id]
  (assoc team-result :player player :match-id match-id))

(defn process-team-results
  "Processes results for a single team and associates them with players."
  [team-result players match-id]
  (map #(create-player-result team-result % match-id) players))

(defn process-match
  "Processes a single match to extract player results for both teams."
  [acc {:keys [match-id date team-colours-data team-bibs-data]}]
  (let [colours-result {:shooting-at-railway (:shooting-at-railway team-colours-data)
                        :bibs 0
                        :won (> (:goals team-colours-data) (:goals team-bibs-data))
                        :drawn (= (:goals team-colours-data) (:goals team-bibs-data))
                        :lost (< (:goals team-colours-data) (:goals team-bibs-data))
                        :goals-for (:goals team-colours-data)
                        :goals-against (:goals team-bibs-data)
                        :date date}
        bibs-result {:shooting-at-railway (:shooting-at-railway team-bibs-data)
                     :bibs 1
                     :won (> (:goals team-bibs-data) (:goals team-colours-data))
                     :drawn (= (:goals team-bibs-data) (:goals team-colours-data))
                     :lost (< (:goals team-bibs-data) (:goals team-colours-data))
                     :goals-for (:goals team-bibs-data)
                     :goals-against (:goals team-colours-data)
                     :date date}]
    (-> acc
        (into (process-team-results colours-result (:players team-colours-data) match-id))
        (into (process-team-results bibs-result (:players team-bibs-data) match-id)))))

(defn extract-player-results
  "First extract individual player results from match data"
  [matches]
  (reduce process-match [] matches))

(defn calculate-player-summary
  "Calculates the total games and wins for a single player."
  [[player results]]
  (let [total-games (count results)
        wins (count (filter :won results))
        draws (count (filter :drawn results))
        losses (count (filter :lost results))
        goals-for (reduce + (map :goals-for results))
        goals-against (reduce + (map :goals-against results)) 
        shooting-at-railway-games (reduce + (map :shooting-at-railway results))
        bibs-games (reduce + (map :bibs results))]
  {:player player
   :total-games total-games
   :wins wins
   :draws draws
   :losses losses
   :goals-for goals-for
   :goals-against goals-against
   :shooting-at-railway-games shooting-at-railway-games
   :bibs-games bibs-games}))

(defn calculate-player-stats*
  [matches]
  (let [results-per-match-and-player (extract-player-results matches)]
    (->> results-per-match-and-player
         (group-by :player)
         (map calculate-player-summary))))

(defn calculate-player-stats
  ([matches]
  (calculate-player-stats* matches))
  ([matches opts]
   (let [{:keys [from to]} opts
         filtered-matches (filter (fn [{:keys [date]}]
                                    (let [match-time (.getTime date)
                                          from-time (if from (.getTime from) ##-Inf)
                                          to-time (if to (.getTime to) ##Inf)]
                                      (and (>= match-time from-time)
                                           (<= match-time to-time))))
                                  matches)]
     (calculate-player-stats* filtered-matches))))

(defn calculate-league-stats
  "Calculates points and goal difference for a single player's stats."
  [player]
  (let [points (+ (* 3 (:wins player)) (:draws player))
        goal-difference (- (:goals-for player) (:goals-against player))]
    {:player (:player player)
     :played (:total-games player)
     :won (:wins player)
     :drawn (:draws player)
     :lost (:losses player)
     :points points
     :gf (:goals-for player)
     :ga (:goals-against player)
     :gd goal-difference}))

(defn league-table*
  "Calculates points and goal difference for a single player's stats and adds position."
  [player-stats]
  (->> player-stats
       (map calculate-league-stats)
       (sort-by :gf >)
       (sort-by :gd >)
       (sort-by :points >)
       (map-indexed (fn [index player]
                      (assoc player :position (inc index))))))

(defn league-table
  ([matches]
   (->> matches 
        calculate-player-stats
        league-table*))
  ([matches opts]
   (let [{:keys [from to]} opts
         filtered-matches (filter (fn [{:keys [date]}]
                                    (let [match-time (.getTime date)
                                          from-time (if from (.getTime from) ##-Inf)
                                          to-time (if to (.getTime to) ##Inf)]
                                      (and (>= match-time from-time)
                                           (<= match-time to-time))))
                                  matches)]
     (->> filtered-matches 
          calculate-player-stats
          league-table*))))

(defn add-ratio-stats
  "Adds ratio statistics to each player's stats map."
  [player-stats]
  (map (fn [player]
         (let [{:keys [wins losses goals-for goals-against total-games
                       shooting-at-railway-games bibs-games]} player]
           (assoc player
                  :win-ratio (if (and (number? wins) (number? total-games) (not (zero? total-games)))
                               (/ (* 1.0 wins) total-games)
                               0)
                  :loss-ratio (if (and (number? losses) (number? total-games) (not (zero? total-games)))
                                (/ (* 1.0 losses) total-games)
                                0)
                  :goals-scored-per-game (if (and (number? goals-for) (number? total-games) (not (zero? total-games)))
                                           (/ (* 1.0 goals-for) total-games)
                                           0)
                  :goals-conceded-per-game (if (and (number? goals-against) (number? total-games) (not (zero? total-games)))
                                             (/ (* 1.0 goals-against) total-games)
                                             0)
                  :railway-per-game (if (and (number? shooting-at-railway-games) (number? total-games) (not (zero? total-games)))
                                       (/ (* 1.0 shooting-at-railway-games) total-games)
                                       0)
                  :bibs-per-game (if (and (number? bibs-games) (number? total-games) (not (zero? total-games)))
                                   (/ (* 1.0 bibs-games) total-games)
                                   0))))
       player-stats))

(defn hall-of-fame*
  "Calculates various hall of fame statistics from player stats."
  [player-stats number-of-games]
  (let [modified-stats (add-ratio-stats player-stats)
        filtered-stats (filter #(>= (:total-games %) number-of-games) modified-stats)
        appearances (sort-by :total-games > filtered-stats)
        win-ratios (sort-by :win-ratio > filtered-stats)
        loss-ratios (sort-by :loss-ratio > filtered-stats)
        goals-scored (sort-by :goals-scored-per-game > filtered-stats)
        goals-conceded (sort-by :goals-conceded-per-game < filtered-stats)
        league-positions (league-table* player-stats)
        railway-lover (sort-by :railway-per-game > filtered-stats)
        bibs-lover (sort-by :bibs-per-game > filtered-stats)]

    {:appearances {:player (:player (first appearances))
                   :value (:total-games (first appearances))}
     :best-win-ratio {:player (:player (first win-ratios))
                      :value (:win-ratio (first win-ratios))}
     :highest-loss-ratio {:player (:player (first loss-ratios))
                          :value (:loss-ratio (first loss-ratios))}
     :highest-avg-goals-scored {:player (:player (first goals-scored))
                                :total (:goals-for (first goals-scored))
                                :per-game (:goals-scored-per-game (first goals-scored))}
     :lowest-avg-goals-conceded {:player (:player (first goals-conceded))
                                 :total (:goals-against (first goals-conceded))
                                 :per-game (:goals-conceded-per-game (first goals-conceded))}
     :top-of-the-table {:player (:player (first league-positions))
                        :points (:points (first league-positions))
                        :goal-difference (:gd (first league-positions))}
     :railway-lover {:player (:player (first railway-lover))
                     :value (:railway-per-game (first railway-lover))}
     :bibs-lover {:player (:player (first bibs-lover))
                  :value (:bibs-per-game (first bibs-lover))}
     :filtered-stats railway-lover}))

(defn hall-of-fame
  ([matches] 
  (let [number-of-games-for-calcs (max 3 (inc (quot (count matches) 2)))]
   (-> matches
       calculate-player-stats
       (hall-of-fame* number-of-games-for-calcs))))
  ([matches opts]
   (let [{:keys [from to]} opts
         filtered-matches (filter (fn [{:keys [date]}]
                                    (let [match-time (.getTime date)
                                          from-time (if from (.getTime from) ##-Inf)
                                          to-time (if to (.getTime to) ##Inf)]
                                      (and (>= match-time from-time)
                                           (<= match-time to-time))))
                                  matches)
         number-of-games-for-calcs (max 3 (inc (quot (count matches) 2)))]
     (-> filtered-matches
          calculate-player-stats
         (hall-of-fame* number-of-games-for-calcs)))))