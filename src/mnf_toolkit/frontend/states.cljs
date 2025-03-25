(ns mnf-toolkit.frontend.states
  (:require ; Internal Deps
            [mnf-toolkit.frontend.data-sourcing :as ds]
            ; External Deps
            [cljs.reader :as reader]
            [reagent.core :as r]))

;; State
(defonce root-atom (atom nil))

(def app-state
  (r/atom {:active-tab "team-sheet"
           :tab-params nil
           :league-table nil
           :current-league-table nil
           :match-data nil
           :raw-player-stats nil}))

(defn load-data! []
  (println "Loading data...")
  (ds/load-edn-file ds/GIST-URL
                    #(do
                       (println "Data loaded")
                       (swap! app-state assoc
                              :league-table (:league-table %)
                              :current-league-table (:current-year-table %)
                              :raw-player-stats (:raw-player-stats %)
                              :match-data (:match-data %)))))

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