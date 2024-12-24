(ns mnf-toolkit.data.constructor
  (:require [mnf-toolkit.calcs :as mnf]
            [mnf-toolkit.data.validation :as data-val]
            [mnf-toolkit.data.output-tables :as tables]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn build-and-store-data!
  "Processes match and player data and stores results as EDN files"
  []
  (println "Starting data build process...")

  (try
    (println "Loading source data from:"
             "\n Match data: ./resources/match_data.edn"
             "\n Player data: ./resources/players.edn")
    (let [match-data (try
                       (mnf/load-data "./resources/match_data.edn")
                       (catch Exception e
                         (println "ERROR: Failed to load match data:" (.getMessage e))
                         (throw e)))
          players (try
                    (mnf/load-data "./resources/players.edn")
                    (catch Exception e
                      (println "ERROR: Failed to load player data:" (.getMessage e))
                      (throw e)))]

      (println "Validating data...")
      (try
        (data-val/validate-all-data match-data players)
        (catch Exception e
          (println "ERROR: Data validation failed:" (.getMessage e))
          (throw e)))

      (println "Calculating stats...")
      (let [raw-player-stats (try
                               (mnf/calculate-player-stats match-data players)
                               (catch Exception e
                                 (println "ERROR: Failed to calculate player stats:" (.getMessage e))
                                 (throw e)))

            league-table (try
                           (tables/league-table raw-player-stats)
                           (catch Exception e
                             (println "Error: Failed to generate league table from player stats:" (.getMessage e))
                             (throw e)))

            player-info (try
                          (tables/player-info raw-player-stats)
                          (catch Exception e
                            (println "Error: Failed to generate player info from player stats:" (.getMessage e))
                            (throw e)))

            consolidated-data {:raw-player-stats raw-player-stats
                               :league-table league-table
                               :player-info player-info}]

        (println "Storing processed data file to:"
                 "\n Data: docs/data/mnf-data.edn")
        (try
          (spit "docs/data/mnf-data.edn" (pr-str consolidated-data))
          (catch Exception e
            (println "ERROR: Failed to write output file:" (.getMessage e))
            (throw e)))

        (println
         (str "\nProcessing complete:"
              "\n  Matches processed: " (count match-data)
              "\n  Players processed: " (count players)))))

    (catch Exception e
      (println "\nBuild process failed!")
      (throw e)
      (System/exit 1))))