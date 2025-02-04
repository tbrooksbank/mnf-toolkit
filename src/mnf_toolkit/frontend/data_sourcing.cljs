(ns mnf-toolkit.frontend.data-sourcing
  (:require [cljs.reader :as reader]
            [clojure.string :as clojure.string]))

;; Data Loading
(def GIST-URL "https://gist.githubusercontent.com/tbrooksbank/f1a200002e540a23bb6915472198cd7e/raw")

(defn load-edn-file [file-path callback]
  (js/console.log "Attempting to load:" file-path)
  (-> (js/fetch file-path)
      (.then (fn [response]
               (js/console.log "Response status:" (.-status response))
               (if (.-ok response)
                 (.text response)
                 (throw (js/Error. (str "Failed to load " file-path ": " (.-status response)))))))
      (.then (fn [text]
               (js/console.log "Loaded text from" file-path ":" (subs text 0 100))
               (callback (reader/read-string text))))
      (.catch (fn [error]
                (js/console.error "Error loading:" file-path ":" error)))))

;; Team Sheets - Sourced from google sheets
(def sheet-id "1qWimpverGPBkExhEkStyoUYsejExo6iqMW6AdDV0Q_g")

(defn clean-google-response [response]
  (-> response
      (clojure.string/replace "/*O_o*/\n" "")
      (clojure.string/replace "google.visualization.Query.setResponse(" "")
      (clojure.string/replace-first ");" "")))

(defn parse-google-response [response]
  (try
    (let [cleaned-json (clean-google-response (:body response))
          data (js->clj (js/JSON.parse cleaned-json) :keywordize-keys true)
          rows (get-in data [:table :rows])
          date-cell (get-in (second rows) [:c 3])
          formatted-date (get date-cell :v)
          teams-final-cell (get-in rows [8 :c 3 :v])

          ; Extract flags for team1 (from column B, rows 11-12)
          team1-bibs-flag (get-in rows [9 :c 0 :v])
          team1-railway-flag (get-in rows [10 :c 0 :v])

          ; Extract flags for team2 (from column C, rows 11-12)
          team2-bibs-flag (get-in rows [9 :c 1 :v])
          team2-railway-flag (get-in rows [10 :c 1 :v])]

      {:team1 {:players (->> rows
                             rest
                             (take 8)
                             (map #(get-in % [:c 0 :v]))
                             (filter identity))
               :Bibs team1-bibs-flag
               :Railway team1-railway-flag}

       :team2 {:players (->> rows
                             rest
                             (take 8)
                             (map #(get-in % [:c 1 :v]))
                             (filter identity))
               :Bibs team2-bibs-flag
               :Railway team2-railway-flag}

       :match-date formatted-date
       :teams-finalised teams-final-cell})

    (catch js/Error e
      (js/console.error "Error during parsing:" e)
      {:team1 {:players [] :Bibs nil :Railway nil}
       :team2 {:players [] :Bibs nil :Railway nil}
       :match-date nil})))