(ns mnf-toolkit.frontend.pages.league-table-page
  (:require 
   [reagent.core :as r]
   [mnf-toolkit.frontend.tables :as t]
   [mnf-toolkit.frontend.states :as s]
   [mnf-toolkit.frontend.calcs :as calcs]
   [mnf-toolkit.frontend.pages.utils :as utils]))

(defonce league-config (r/atom {:time-frame :all-time}))
(defonce league-version (r/atom {:version :per-game}))

(defn league-table-page-builder []
  [:div.section
   [:h2 "League Tables"]
   [utils/selector-button-group league-config [[:all-time "All Time"] [:2025 "2025"]]]
   [utils/selector-button-group league-version [[:total "Total Points"] [:per-game "Points Per Game"]] {:key-path :version}]
   (let [start-date (js/Date. "2025-01-01")
         end-date (js/Date. "2025-12-31")
         league-2025 (calcs/league-table (:raw-match-data @s/app-state) {:from start-date :to end-date})
         league-2025-per-game (calcs/league-table-per-game (:raw-match-data @s/app-state) {:from start-date :to end-date})
         league-all-time (calcs/league-table (:raw-match-data @s/app-state))
         league-all-time-per-game (calcs/league-table-per-game (:raw-match-data @s/app-state))
         data (condp = [(:time-frame @league-config) (:version @league-version)]
                [:all-time :total] league-all-time
                [:all-time :per-game] league-all-time-per-game
                [:2025 :total] league-2025
                [:2025 :per-game] league-2025-per-game)]
     (if (nil? data)
       [:div "Loading league table..."]
       [t/data-table data :league]))])