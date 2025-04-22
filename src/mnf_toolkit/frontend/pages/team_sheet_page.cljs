(ns mnf-toolkit.frontend.pages.team-sheet-page
  (:require 
   [mnf-toolkit.frontend.calcs :as calcs]
   [mnf-toolkit.frontend.pages.utils :as utils]
   [mnf-toolkit.frontend.states :as s] 
   [reagent.core :as r]
   [reagent.ratom :as reagent.ratom]))

(defn calculate-team-stats[player-stats]
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
  [team]
  (let [all-player-stats (calcs/calculate-player-stats (:raw-match-data @s/app-state))
        filtered-stats (filter (fn [player-stat]
                                  (contains? (set (:players team)) (:player player-stat)))
                                all-player-stats)
        team-stats (calculate-team-stats filtered-stats)]
    team-stats))

(defn team-sheet-page-builder []
  (let [teams (r/atom {:team1 []
                       :team2 []
                       :match-date nil
                       :teams-finalised nil})
        team1-cursor (r/cursor teams [:team1])
        team2-cursor (r/cursor teams [:team2])
        team-1-stats (r/reaction (team-stats @team1-cursor))
        team-2-stats (r/reaction (team-stats @team2-cursor))]
    (r/create-class
     {:component-did-mount
      (fn []
        (utils/load-team-data teams))

      :reagent-render
      (fn []
        [:div {:class "team-sheet-container"}
         [:h2 (if-let [date (:match-date @teams)]
                (str date " - Match Teams")
                "Unspecified Match Date - Teams")]
         [:h3 (if (= (:teams-finalised @teams) "Yes")
                "Teams Finalised"
                "Teams Not Yet Decided, Check Back Later")]

         ;; New Stats Flexbox Container
         ;[:div {:style {:display "flex"
         ;               :flex-wrap "wrap"
         ;               :justify-content "center"}}
         ; [stat-card "Team 1 xG" 4.3]
         ; [stat-card "Predicted Score" "4-5"]
         ; [stat-card "Team 2 xG" 5.4]]
         
         [:div {:class "team-sheet-row"}
          ; Team 1
          [:div {:class "team-sheet-column"}
           [:h3 "Team 1"]
           [:ul {:style {:list-style-type "none"}}
            (doall (for [player (get-in @teams [:team1 :players])]
              ^{:key player}
              [:li
               {:on-click #(js/window.location.assign (str "/#/player/" player))
                :style {:cursor "pointer"}
                :role "link"
                :tab-index "0"
                :class [(if (< (:bibs-ratio @team-1-stats) (:bibs-ratio @team-2-stats))
                          "bibs-player-box"
                          "colours-player-box")
                        (when (< (:shooting-at-railway-ratio @team-1-stats) (:shooting-at-railway-ratio @team-2-stats)) "railway-background")]}
               [:span {:class (if (< (:bibs-ratio @team-1-stats) (:bibs-ratio @team-2-stats))
                                "bibs-player-text"
                                "colours-player-text")}
                player]]))]]
          ; Team 2
          [:div {:class "team-sheet-column"}
           [:h3 "Team 2"]
           [:ul {:style {:list-style-type "none"}}
            (doall (for [player (get-in @teams [:team2 :players])]
              ^{:key player}
              [:li
               {:on-click #(js/window.location.assign (str "/#/player/" player))
                :style {:cursor "pointer"}
                :role "link"
                :tab-index "0"
                :class [(if (< (:bibs-ratio @team-2-stats) (:bibs-ratio @team-1-stats))
                          "bibs-player-box"
                          "colours-player-box")
                        (when (< (:shooting-at-railway-ratio @team-2-stats) (:shooting-at-railway-ratio @team-1-stats)) "railway-background")]}
               [:span {:class (if (< (:bibs-ratio @team-2-stats) (:bibs-ratio @team-1-stats))
                                "bibs-player-text"
                                "colours-player-text")}
                player]]))]]]

         [:div {:style {:display "flex" 
                        :flex-wrap "wrap"
                        :justify-content "center"}} 
          [:div {:style {:display "flex"
                         :flex-wrap "wrap" 
                         :flex "0 0 33%"}}
           [:h3 "Team 1 Stats"]
           [utils/stat-card "Win Ratio" (.toFixed (:win-ratio @team-1-stats) 4) :width "100%"] 
           [utils/stat-card "Avg Goals For" (.toFixed (:avg-goals-for @team-1-stats) 4) :width "100%"] 
           [utils/stat-card "Avg Goals Against" (.toFixed (:avg-goals-against @team-1-stats) 4) :width "100%"] 
           [utils/stat-card "Bibs Ratio" (.toFixed (:bibs-ratio @team-1-stats) 4) :width "100%"]  
           [utils/stat-card "Railway End Ratio" (.toFixed (:shooting-at-railway-ratio @team-1-stats) 4) :width "100%"]]
          [:div {:style {:display "flex"
                         :flex-wrap "wrap"
                         :flex "0 0 33%"}}
           [:h3 "Differentials"]
           [utils/stat-card "Win Ratio" (.toFixed (- (:win-ratio @team-1-stats)
                                                     (:win-ratio @team-2-stats)) 4) :width "100%"]
           [utils/stat-card "Avg Goals For" (.toFixed (- (:avg-goals-for @team-1-stats)
                                                         (:avg-goals-for @team-2-stats)) 4) :width "100%"]
           [utils/stat-card "Avg Goals Against" (.toFixed (- (:avg-goals-against @team-1-stats)
                                                             (:avg-goals-against @team-2-stats)) 4) :width "100%"]
           [utils/stat-card "Bibs Ratio" (.toFixed (- (:bibs-ratio @team-1-stats)
                                                      (:bibs-ratio @team-2-stats)) 4) :width "100%"]
           [utils/stat-card "Railway End Ratio" (.toFixed (- (:shooting-at-railway-ratio @team-1-stats)
                                                             (:shooting-at-railway-ratio @team-2-stats)) 4) :width "100%"]]
          [:div {:style {:display "flex"
                         :flex-wrap "wrap" 
                         :flex "0 0 33%"}}
           [:h3 "Team 2 Stats"]
           [utils/stat-card "Win Ratio" (.toFixed (:win-ratio @team-2-stats) 4) :width "100%"]
           [utils/stat-card "Avg Goals For" (.toFixed (:avg-goals-for @team-2-stats) 4) :width "100%"]
           [utils/stat-card "Avg Goals Against" (.toFixed (:avg-goals-against @team-2-stats) 4) :width "100%"]
           [utils/stat-card "Bibs Ratio" (.toFixed (:bibs-ratio @team-2-stats) 4) :width "100%"]
           [utils/stat-card "Railway End Ratio" (.toFixed (:shooting-at-railway-ratio @team-2-stats) 4) :width "100%"]]]
         ])})))