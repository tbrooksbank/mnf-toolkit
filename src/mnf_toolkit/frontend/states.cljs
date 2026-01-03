(ns mnf-toolkit.frontend.states
  (:require ; Internal Deps
   [mnf-toolkit.frontend.data-sourcing :as ds]
   [cljs.reader :as reader]
   [reagent.core :as r]))

;; State
(defonce root-atom (atom nil))

(def app-state
  (r/atom {:active-tab "team-sheet"
           :tab-params nil
           :admin-view false
           :admin-token nil
           :raw-player-info nil
           :raw-match-data nil
           :last-5-games-date-bounds nil
           :last-10-games-date-bounds nil}))

(defn get-date-bounds-last-n-matches
  "Takes a collection of match maps and an integer n.
   Returns a map with :start-date and :end-date for the n most recent matches.
   Suitable for Clojure and ClojureScript."
  [matches n]
  (when (and (seq matches) (> n 0))
    (let [sorted-matches (sort-by :date #(compare %2 %1) matches) 
          last-n-matches (vec (take n sorted-matches))]
      (when (seq last-n-matches) 
        {:start-date (-> last-n-matches last :date) 
         :end-date   (-> last-n-matches first :date)}))))

(defn load-data! []
  (println "Loading data...")
  (ds/load-edn-file ds/GIST-URL
                    #(do
                       (println "Data loaded")
                       (swap! app-state assoc 
                              :raw-player-info (:raw-players %)
                              :raw-match-data (:raw-match-data %)
                              :last-5-games (get-date-bounds-last-n-matches (:raw-match-data %) 5)
                              :last-10-games (get-date-bounds-last-n-matches (:raw-match-data %) 10)))))

(def nav-state (r/atom {:menu-open? false}))

;; This stuff all covers the local loading of data for offline development
(goog-define BASE-PATH "")  ; This will be set by shadow-cljs based on environment

(defn load-edn-file [file-path callback]
  (js/console.log "Attempting to load:" (str BASE-PATH file-path))
  (-> (js/fetch (str BASE-PATH file-path))
      (.then (fn [response]
               (js/console.log "Response status:" (.-status response))
               (if (.-ok response)
                 (.text response)
                 (throw (js/Error. (str "Failed to load " file-path ": " (.-status response)))))))
      (.then (fn [text]
               (js/console.log "Loaded text from" file-path ":" (subs text 0 100))
               (callback (reader/read-string text))))
      (.catch (fn [error]
                (js/console.error "Error loading" file-path ":" error)))))

(defn local-load-data! []
 (println "Loading data...")
 (load-edn-file "/data/mnf-data.edn"
                #(do
                   (println "Data loaded")
                   (swap! app-state assoc
                          :league-table (:league-table %)
                          :current-league-table (:current-year-table %)
                          :player-info (:player-info %)
                          :match-data (:match-data %)))))