(ns mnf-toolkit.frontend.states
  (:require ; Internal Deps
            [mnf-toolkit.frontend.data-sourcing :as ds]
            ; External Deps
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