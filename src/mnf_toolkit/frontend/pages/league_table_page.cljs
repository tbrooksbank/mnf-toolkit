(ns mnf-toolkit.frontend.pages.league-table-page
  (:require 
   [reagent.core :as r]
   [mnf-toolkit.frontend.tables :as t]
   [mnf-toolkit.frontend.states :as s]
   [mnf-toolkit.frontend.calcs :as calcs]
   [mnf-toolkit.frontend.pages.utils :as utils]))

(defonce league-config (r/atom {:time-frame :all-time}))

(defn league-table-page-builder []
  [:div.section
   [:h2 "League Tables"]
   [utils/selector-button-group league-config [[:all-time "All Time"] [:2025 "2025"]]] 
   (let [start-date (js/Date. "2025-01-01")
         end-date (js/Date. "2025-12-31")
         league-2025 (calcs/league-table (:raw-match-data @s/app-state) {:from start-date :to end-date})
         league-all-time (calcs/league-table (:raw-match-data @s/app-state))
         data (if (= (:time-frame @league-config) :all-time)
                league-all-time
                league-2025)]
     (if (nil? data)
       [:div "Loading league table..."]
       [t/data-table data :league]))])