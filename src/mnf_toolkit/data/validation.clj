(ns mnf-toolkit.data.validation
  (:require [clojure.set :as set]
            [clojure.string :as string]))

(defn validate-player-biases
  "Validates that each player's attacking and defensive biases sum to 1"
  [players]
  (let [invalid-players
        (filter #_{:clj-kondo/ignore [:unused-binding]}
         (fn [{:keys [name attacking-bias defensive-bias]}]
           (not= 1.0 (+ attacking-bias defensive-bias)))
                players)]
    {:valid? (empty? invalid-players)
     :invalid-players (map (fn [{:keys [name attacking-bias defensive-bias]}]
                             {:name name
                              :sum (+ attacking-bias defensive-bias)})
                           invalid-players)}))

(defn validate-players-exist
  "Validates that all players in match data exist in player data"
  [match-data player-data]
  (let [player-names (set (map :name player-data))
        match-players (reduce (fn [acc match]
                                (set/union acc
                                           (get-in match [:team-colours-data :players])
                                           (get-in match [:team-bibs-data :players])))
                              #{}
                              match-data)
        missing-players (set/difference match-players player-names)]
    {:valid? (empty? missing-players)
     :missing-players missing-players}))

(defn validate-shooting-railway
  "Validates that only one team per match is shooting at railway"
  [match-data]
  (let [invalid-matches
        (filter #_{:clj-kondo/ignore [:unused-binding]}
         (fn [{:keys [match-id team-colours-data team-bibs-data]}]
           (not= 1 (+ (:shooting-at-railway team-colours-data)
                      (:shooting-at-railway team-bibs-data))))
                match-data)]
    {:valid? (empty? invalid-matches)
     :invalid-matches (map :match-id invalid-matches)}))

(defn validate-team-sizes
  "Validates that each team has between 6 and 8 players"
  [match-data]
  (let [invalid-matches
        (filter #_{:clj-kondo/ignore [:unused-binding]}
         (fn [{:keys [match-id team-colours-data team-bibs-data]}]
           (let [colours-count (count (:players team-colours-data))
                 bibs-count (count (:players team-bibs-data))]
             (or (< colours-count 6) (> colours-count 8)
                 (< bibs-count 6) (> bibs-count 8))))
                match-data)]
    {:valid? (empty? invalid-matches)
     :invalid-matches (map (fn [{:keys [match-id team-colours-data team-bibs-data]}]
                             {:match-id match-id
                              :colours-count (count (:players team-colours-data))
                              :bibs-count (count (:players team-bibs-data))})
                           invalid-matches)}))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn validate-all-data
  [match-data player-data]
  (let [bias-validation (validate-player-biases player-data)
        existence-validation (validate-players-exist match-data player-data)
        railway-validation (validate-shooting-railway match-data)
        team-size-validation (validate-team-sizes match-data)
        all-valid? (and (:valid? bias-validation)
                        (:valid? existence-validation)
                        (:valid? railway-validation)
                        (:valid? team-size-validation))]
    (if all-valid?
      (println "All validations passed!")
      (doseq [[validation-type result]
              [["Players with invalid bias totals" (:invalid-players bias-validation)]
               ["Players missing from player data" (:missing-players existence-validation)]
               ["Matches with invalid railway shooting" (:invalid-matches railway-validation)]
               ["Matches with invalid team sizes" (:invalid-matches team-size-validation)]]]
        (when (seq result)
          (println (str validation-type ":"))
          (cond
            (map? (first result))
            (doseq [item result]
              (if (:match-id item)
                (println (str "  - Match " (:match-id item)
                              " (colours: " (:colours-count item)
                              ", bibs: " (:bibs-count item) " players)"))
                (println (str "  - " (:name item) " (sum: " (:sum item) "))"))))

            :else
            (println (str "  - " (string/join ", " result)))))))))