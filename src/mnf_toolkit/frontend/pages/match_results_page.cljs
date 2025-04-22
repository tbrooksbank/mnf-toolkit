(ns mnf-toolkit.frontend.pages.match-results-page
  (:require
   [mnf-toolkit.frontend.calcs :as calcs]
   [mnf-toolkit.frontend.states :as s]
   [mnf-toolkit.frontend.tables :as t]
   [mnf-toolkit.frontend.pages.utils :as utils]))

(defn calculate-team-stats [player-stats]
  (let [total-games (reduce + (map :total-games player-stats))
        total-wins (reduce + (map :wins player-stats))
        goals-for (reduce + (map :goals-for player-stats))
        goals-against (reduce + (map :goals-against player-stats))
        total-bibs-games (reduce + (map :bibs-games player-stats))
        total-shooting-at-railway-games (reduce + (map :shooting-at-railway-games player-stats))]
    {:win-ratio (/ total-wins total-games)
     :avg-goals-for (/ goals-for total-games)
     :avg-goals-against (/ goals-against total-games)
     :bibs-ratio (/ total-bibs-games total-games)
     :shooting-at-railway-ratio (/ total-shooting-at-railway-games total-games)}))

(defn team-stats
  [team match-date]
  (let [all-player-stats (calcs/calculate-player-stats (:raw-match-data @s/app-state) {:to match-date})
        filtered-stats (filter (fn [player-stat]
                                 (contains? (set (:players team)) (:player player-stat)))
                               all-player-stats)
        team-stats (calculate-team-stats filtered-stats)]
    team-stats))

(defn match-results-page-builder []
  (let [matches (reverse (:raw-match-data @s/app-state))]
    [:div.section
     [:h2 "Match Results"]
     [:table.data-table
      [:thead
       [:tr
        [:th "Date"]
        [:th "Team"]
        [:th "Score"]
        [:th ""]
        [:th "Score"]
        [:th "Team"]]]
      [:tbody
       (for [match (map t/format-match-row matches)]
         ^{:key (:id match)}
         [:tr {:on-click #(js/window.location.assign (str "/#/match/" (:id match)))
               :style {:cursor "pointer"}
               :role "link"
               :tab-index "0"}
          [:td (:date match)]
          [:td (:bibs-team match)]
          [:td (:bibs-score match)]
          [:td "-"]
          [:td (:colours-score match)]
          [:td (:colours-team match)]])]]]))

(defn match-page-builder
  [match-id]
  (let [matches (into [] (:raw-match-data @s/app-state))
        clean-id (js/parseInt (first match-id))
        match (first (filter #(= (:match-id %) clean-id) matches))
        original-date (js/Date. (get-in match [:date]))
        match-date (doto (js/Date. original-date)
                     (.setDate (- (.getDate original-date) 1)))
        team-colours (get-in match [:team-colours-data])
        team-colours-players (get-in team-colours [:players])
        team-colours-goals (get-in team-colours [:goals])
        team-colours-railway (get-in team-colours [:shooting-at-railway])
        team-colours-stats (team-stats team-colours match-date)
        team-bibs (get-in match [:team-bibs-data])
        team-bibs-players (get-in team-bibs [:players])
        team-bibs-goals (get-in team-bibs [:goals])
        team-bibs-railway (get-in team-bibs [:shooting-at-railway])
        team-bibs-stats (team-stats team-bibs match-date)]
    [:div {:class "team-sheet-container"}
     [:h2 (str "Match Date: " (.toLocaleDateString (get-in match [:date])))]
     [:div {:style {:display "flex"
                    :flex-wrap "wrap"
                    :justify-content "center"}}
      [utils/stat-card "Team Colours" team-colours-goals]
      [utils/stat-card "Result" (if (= team-colours-goals team-bibs-goals)
                                  "Draw"
                                  (if (> team-colours-goals team-bibs-goals)
                                    "Team Colours Win"
                                    "Team Bibs Win"))]
      [utils/stat-card "Team Bibs" team-bibs-goals]]
     [:div {:class "team-sheet-row"}
    ; Team 1
      [:div {:class "team-sheet-column"}
       [:h3 "Team Colours"]
       [:ul {:style {:list-style-type "none"}}
        (for [player team-colours-players]
          ^{:key player}
          [:li
           {:on-click #(js/window.location.assign (str "/#/player/" player))
            :style {:cursor "pointer"}
            :role "link"
            :tab-index "0"
            :class ["colours-player-box"
                    (when (= team-colours-railway 1) "railway-background")]}
           [:span {:class "colours-player-text"}
            player]])]]
              ; Team 2
      [:div {:class "team-sheet-column"}
       [:h3 "Team Bibs"]
       [:ul {:style {:list-style-type "none"}}
        (for [player team-bibs-players]
          ^{:key player}
          [:li
           {:on-click #(js/window.location.assign (str "/#/player/" player))
            :style {:cursor "pointer"}
            :role "link"
            :tab-index "0"
            :class ["bibs-player-box"
                    (when (= team-bibs-railway 1) "railway-background")]}
           [:span {:class "bibs-player-text"}
            player]])]]]
            [:div {:style {:display "flex"
                           :flex-wrap "wrap"
                           :justify-content "center"}}
             [:div {:style {:display "flex"
                            :flex-wrap "wrap"
                            :flex "0 0 33%"}}
              [:h3 "Team Colours Stats (When game was played)"]
              [utils/stat-card "Win Ratio" (.toFixed (:win-ratio team-colours-stats) 4) :width "100%"]
              [utils/stat-card "Avg Goals For" (.toFixed (:avg-goals-for team-colours-stats) 4) :width "100%"]
              [utils/stat-card "Avg Goals Against" (.toFixed (:avg-goals-against team-colours-stats) 4) :width "100%"]
              [utils/stat-card "Bibs Ratio" (.toFixed (:bibs-ratio team-colours-stats) 4) :width "100%"]
              [utils/stat-card "Railway End Ratio" (.toFixed (:shooting-at-railway-ratio team-colours-stats) 4) :width "100%"]] 
             [:div {:style {:display "flex"
                            :flex-wrap "wrap"
                            :flex "0 0 33%"}}
              [:h3 "Differentials"]
              [utils/stat-card "Win Ratio" (.toFixed (- (:win-ratio team-colours-stats)
                                                        (:win-ratio team-bibs-stats)) 4) :width "100%"]
              [utils/stat-card "Avg Goals For" (.toFixed (- (:avg-goals-for team-colours-stats)
                                                            (:avg-goals-for team-bibs-stats)) 4) :width "100%"]
              [utils/stat-card "Avg Goals Against" (.toFixed (- (:avg-goals-against team-colours-stats)
                                                                (:avg-goals-against team-bibs-stats)) 4) :width "100%"]
              [utils/stat-card "Bibs Ratio" (.toFixed (- (:bibs-ratio team-colours-stats)
                                                         (:bibs-ratio team-bibs-stats)) 4) :width "100%"]
              [utils/stat-card "Railway End Ratio" (.toFixed (- (:shooting-at-railway-ratio team-colours-stats)
                                                                (:shooting-at-railway-ratio team-bibs-stats)) 4) :width "100%"]]
             [:div {:style {:display "flex"
                            :flex-wrap "wrap"
                            :flex "0 0 33%"}}
              [:h3 "Team Bibs Stats (When game was played)"]
              [utils/stat-card "Win Ratio" (.toFixed (:win-ratio team-bibs-stats) 4) :width "100%"]
              [utils/stat-card "Avg Goals For" (.toFixed (:avg-goals-for team-bibs-stats) 4) :width "100%"]
              [utils/stat-card "Avg Goals Against" (.toFixed (:avg-goals-against team-bibs-stats) 4) :width "100%"]
              [utils/stat-card "Bibs Ratio" (.toFixed (:bibs-ratio team-bibs-stats) 4) :width "100%"]
              [utils/stat-card "Railway End Ratio" (.toFixed (:shooting-at-railway-ratio team-bibs-stats) 4) :width "100%"]]]]))