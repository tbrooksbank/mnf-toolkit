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
        start-date (js/Date. "2025-01-01")
        end-date (js/Date. "2025-12-31")
        current-season-stats (calcs/calculate-player-stats (:raw-match-data @s/app-state) 
                                                           {:from start-date 
                                                            :to end-date})
        player-2025-stats (first (filter #(= (:player %) clean-player) current-season-stats))
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
     [utils/selector-button-group page-config [[:all-games "All Time"] 
                                               [:season "2025 Season"]]] 
     [utils/selector-button-group page-config [[:last-5-games "Last 5 MNF Fixtures"]
                                               [:last-10-games "Last 10 MNF Fixtures"]]]
     (case (:time-frame @page-config)
       :all-games (utils/display-player-stats player)
       :last-5-games (utils/display-player-stats last-5-player)
       :last-10-games (utils/display-player-stats last-10-player)
       :season (utils/display-player-stats player-2025-stats)
       nil [:p "Loading..."] ; Optional: handle loading state
       [:p "No data for selected time period"])]))