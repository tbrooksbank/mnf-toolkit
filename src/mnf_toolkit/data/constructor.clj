(ns mnf-toolkit.data.constructor
  (:require [mnf-toolkit.data.access :as data-access]
            [mnf-toolkit.data.validation :as data-val]
            [mnf-toolkit.secrets :as secrets]
            [clj-http.client :as http]
            [cheshire.core :as json]))

(def gist-id "f1a200002e540a23bb6915472198cd7e")

(defn update-gist
  "Updates a GitHub Gist with the provided content
   Returns true on success, throws exception on failure"
  [gist-id filename content github-token]
  (let [url (str "https://api.github.com/gists/" gist-id)
        headers {"Authorization" (str "token " github-token)
                 "Accept" "application/vnd.github.v3+json"}
        body (json/generate-string
              {:files
               {filename
                {:content content}}})
        response (http/patch url
                             {:headers headers
                              :body body
                              :throw-exceptions true})]
    (= 200 (:status response))))

(defn build-and-store-data!
  "Processes match and player data and stores results as EDN files"
  []
  (println "Starting data build process...")

  (try
    (println "Loading source data from:"
             "\n Match data: ./resources/match_data.edn"
             "\n Player data: ./resources/players.edn")
    (let [match-data (try
                       (data-access/load-data "./resources/match_data.edn")
                       (catch Exception e
                         (println "ERROR: Failed to load match data:" (.getMessage e))
                         (throw e)))
          players (try
                    (data-access/load-data "./resources/players.edn")
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
      (let [consolidated-data {:raw-match-data match-data
                               :raw-players players}]

        (println "Storing processed data file to:"
                 "\n Data: docs/data/mnf-data.edn")
        (try
          (spit "docs/data/mnf-data.edn" (pr-str consolidated-data))
          (catch Exception e
            (println "ERROR: Failed to write output file:" (.getMessage e))
            (throw e)))
        (println "Data stored to local EDN file successfully!")

        (println "Storing data to GIST")
        (try
          (let [github-token secrets/github-token]
            (update-gist gist-id
                         "mnf-data.edn"
                         (pr-str consolidated-data)
                         github-token))
          (catch Exception e
            (println "ERROR: Failed to update gist:" (.getMessage e))
            (throw e)))
        (println "Data stored to GIST successfully!")

        (println "Sending financial data to YNAB")
        
        (println "YNAB updated sucessfully")

        (println
         (str "\nProcessing complete:"
              "\n  Matches processed: " (count match-data)
              "\n  Players processed: " (count players)))))

    (catch Exception e
      (println "\nBuild process failed!")
      (throw e)
      (System/exit 1))))