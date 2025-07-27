(ns mnf-toolkit.frontend.pages.hall-of-fame-page
  (:require [reagent.core :as r]
            [mnf-toolkit.frontend.calcs :as calcs]
            [mnf-toolkit.frontend.pages.utils :as utils]
            [mnf-toolkit.frontend.states :as s]))

(defn stat-card [title ref value & {:keys [width]}]
  [:div {:style {:flex (str "0 0 calc(" (or width "33.333%") " - 16px)")
                 :min-width "150px"
                 :margin "8px"
                 :padding "16px"
                 :border "1px solid #e2e8f0"
                 :border-radius "8px"
                 :background-color "white"
                 :cursor "pointer"} ; Make the whole card look clickable
         :on-click #(js/window.location.assign (str "/#/player/" ref))
         :role "link"
         :tab-index "0"}
   [:div {:style {:color "#718096"
                  :font-size "14px"
                  :margin-bottom "4px"}}
    title]
   [:div {:style {:font-size "18px"
                  :font-weight "600"}}
    ref]
   [:div {:style {:font-size "14px"
                  :font-weight "600"}}
    value]])

(defn display-hall-of-fame
  [hof-stats]
  [:div {:style {:display "flex"
                 :flex-wrap "wrap"
                 :margin "-8px"  ; Compensate for card margins
                 :width "100%"}}
   ;; Game Stats
   [stat-card "Top of Table" (:player (:top-of-the-table hof-stats)) (str "Points - " (:points (:top-of-the-table hof-stats)))]
   [stat-card "Most Caps" (:player (:appearances hof-stats)) (str (:value (:appearances hof-stats)) " - Caps")] 
   [stat-card "Most Likely to Win" (:player (:best-win-ratio hof-stats)) (str "Win Ratio - " (.toFixed (:value (:best-win-ratio hof-stats)) 4))]
   [stat-card "Most Likely to Lose" (:player (:highest-loss-ratio hof-stats)) (str "Loss Ratio - " (.toFixed (:value (:highest-loss-ratio hof-stats)) 4))]
   [stat-card "Golden Boot" (:player (:highest-avg-goals-scored hof-stats)) (str "Goals Scored per Game - " (.toFixed (:per-game (:highest-avg-goals-scored hof-stats)) 4))]
   [stat-card "Golden Glove" (:player (:lowest-avg-goals-conceded hof-stats)) (str "Goals Conceded per Game - " (.toFixed (:per-game (:lowest-avg-goals-conceded hof-stats)) 4))]
   [stat-card "Railway Enthusiast" (:player (:railway-lover hof-stats)) (str "Railway Ratio - " (.toFixed (:value (:railway-lover hof-stats)) 4))]
   [stat-card "Bibs Die Hard" (:player (:bibs-lover hof-stats)) (str "Bibs Ratio - " (.toFixed (:value (:bibs-lover hof-stats)) 4))]
   ])

(defonce hall-of-fame-config (r/atom {:time-frame :all-time}))

(defn hall-of-fame-page-builder []
  (let [start-date (js/Date. "2025-01-01")
        end-date (js/Date. "2025-12-31")
        hof-2025 (calcs/hall-of-fame (:raw-match-data @s/app-state)  {:from start-date :to end-date})
        hof-all-time (calcs/hall-of-fame (:raw-match-data @s/app-state))
        data (if (= (:time-frame @hall-of-fame-config) :all-time)
               hof-all-time
               hof-2025)
        message (if (= (:time-frame @hall-of-fame-config) :all-time)
                  "All time hall of fame spots require a player to have played at least 10 games"
                  "2025 hall of fame spots require a player to have played at least 5 games")]
    [:div.section
     [:h2 "Hall of Fame"]
     [utils/selector-button-group hall-of-fame-config [[:all-time "All Time"] [:2025 "2025"]]] 
     [display-hall-of-fame data]
     [:p {:style {:margin "8px"
                  :padding "8px"}}
      message]]))