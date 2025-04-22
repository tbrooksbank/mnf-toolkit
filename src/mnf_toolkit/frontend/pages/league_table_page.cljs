(ns mnf-toolkit.frontend.pages.league-table-page
  (:require 
   [reagent.core :as r]
   [mnf-toolkit.frontend.tables :as t]
   [mnf-toolkit.frontend.states :as s]
   [mnf-toolkit.frontend.calcs :as calcs]))

(defonce league-config (r/atom {:time-frame :all-time}))

(defn league-table-page-builder []
  [:div.section
   [:h2 "League Tables"]
   [:div.btn-group {:style {:margin "-8px"  ; Compensate for card margins 
                            :width "100%"}}
    [:button.btn.btn-default {:key :all-time
                              :on-click #(swap! league-config assoc :time-frame :all-time)
                              :style (merge
                                      {:cursor "pointer"
                                       :background-color (if (= (:time-frame @league-config) :all-time)
                                                           "#d1e7dd" ; Highlight color for selected
                                                           "white")})}
     "All Time"]
    [:button.btn.btn-default {:key :2025
                              :on-click #(swap! league-config assoc :time-frame :2025)
                              :style (merge
                                      {:cursor "pointer"
                                       :background-color (if (= (:time-frame @league-config) :2025)
                                                           "#d1e7dd" ; Highlight color for selected
                                                           "white")})}
     "2025"]]
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