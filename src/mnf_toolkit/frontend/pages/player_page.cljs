(ns mnf-toolkit.frontend.pages.player-page
  (:require 
   [reagent.core :as r]
   [mnf-toolkit.frontend.states :as s]
   [mnf-toolkit.frontend.calcs :as calcs]
   [mnf-toolkit.frontend.pages.utils :as utils]))

(defonce page-config (r/atom {:time-frame :all-games}))

(defn player-page-builder
  [player-id]
  (let [player-stats (calcs/calculate-player-stats (:raw-match-data @s/app-state))
        clean-player (js/decodeURIComponent (first player-id))
        player (first (filter #(= (:player %) clean-player) player-stats))
        last-5-player-stats (calcs/calculate-player-stats (:raw-match-data @s/app-state)
                                                          {:from (:start-date (:last-5-games @s/app-state))
                                                           :to (:end-date (:last-5-games @s/app-state))})
        last-5-player (first (filter #(= (:player %) clean-player) last-5-player-stats))
        last-10-player-stats (calcs/calculate-player-stats (:raw-match-data @s/app-state)
                                                           {:from (:start-date (:last-10-games @s/app-state))
                                                            :to (:end-date (:last-10-games @s/app-state))})
        last-10-player (first (filter #(= (:player %) clean-player) last-10-player-stats))]
    [:div
     [:h1 {:style {:font-size "24px"
                   :font-weight "bold"
                   :margin-bottom "24px"}}
      clean-player "'s Stats"]
     [:div.btn-group {:style {:margin "-8px"  ; Compensate for card margins 
                              :width "100%"
                              :display "flex"
                              :flex-wrap "wrap"}}
      [:button.btn.btn-default {:key :all-games
                                :on-click #(swap! page-config assoc :time-frame :all-games)
                                :style (merge
                                        {:cursor "pointer"
                                         :background-color (if (= (:time-frame @page-config) :all-games)
                                                             "#d1e7dd" ; Highlight color for selected
                                                             "white")})}
       "All Games"]
      [:button.btn.btn-default {:key :last-5-games
                                :on-click #(swap! page-config assoc :time-frame :last-5-games)
                                :style (merge
                                        {:cursor "pointer"
                                         :background-color (if (= (:time-frame @page-config) :last-5-games)
                                                             "#d1e7dd" ; Highlight color for selected
                                                             "white")})}
       "Last 5 MNF Fixtures"]
      [:button.btn.btn-default {:key :last-10-games
                                :on-click #(swap! page-config assoc :time-frame :last-10-games)
                                :style (merge
                                        {:cursor "pointer"
                                         :background-color (if (= (:time-frame @page-config) :last-10-games)
                                                             "#d1e7dd" ; Highlight color for selected
                                                             "white")})}
       "Last 10 MNF Fixtures"]]
     (case (:time-frame @page-config)
       :all-games (utils/display-player-stats player)
       :last-5-games (utils/display-player-stats last-5-player)
       :last-10-games (utils/display-player-stats last-10-player)
       nil [:p "Loading..."] ; Optional: handle loading state
       [:p "No data for selected time period"])]))