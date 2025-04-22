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