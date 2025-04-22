(ns mnf-toolkit.frontend.pages.team-builder-page
  (:require 
   [reagent.core :as r]
   [mnf-toolkit.frontend.states :as s]))

(defn player-selector [team-key index teams]
  (let [players (map :player (:raw-player-stats @s/app-state))]
    [:div.player-select
     [:label (str "Player " (inc index) ": ")]
     [:select
      {:value (get-in @teams [team-key index] "")
       :on-change #(swap! teams assoc-in [team-key index] (.. % -target -value))}
      [:option {:value ""} "-- Select Player --"]
      (for [player players]
        [:option {:key player :value player} player])]]))

(defn team-builder-page-builder []
  (let [teams (r/atom {:team1 nil
                       :team2 nil})]
    (fn []
      [:div.section.team-builder
       [:h2 "Team Builder"]
       [:p (last [:team1 teams])]
       [:p [:team2 teams]]

       ;; Teams container with flexbox for side-by-side layout
       [:div.teams-container {:style {:display "flex"
                                      :flex-direction "row"
                                      :gap "2rem"
                                      :justify-content "space-between"}}

        ;; Team 1
        [:div.team {:style {:flex "1"}}
         [:h3 "Team 1"]
         [:div.selectors
          (for [i (range 8)]
            ^{:key (str "team1-" i)}
            [player-selector :team1 i teams])]]

        ;; Team 2
        [:div.team {:style {:flex "1"}}
         [:h3 "Team 2"]
         [:div.selectors
          (for [i (range 8)]
            ^{:key (str "team2-" i)}
            [player-selector :team2 i teams])]]]

       ;; Placeholder div for stats below the selectors
       [:div.team-stats-placeholder {:style {:margin-top "2rem"
                                             :padding "1.5rem"
                                             :border "1px dashed #ccc"
                                             :border-radius "0.5rem"}}
        [:h3 "Team Statistics"]
        [:p "Player statistics will appear here after team selection."]

        ;; Two columns for team stats
        [:div {:style {:display "flex"
                       :flex-direction "row"
                       :gap "2rem"
                       :margin-top "1rem"}}

         ;; Team 1 stats placeholder
         [:div.team1-stats {:style {:flex "1"
                                    :padding "1rem"
                                    :background-color "#f5f5f5"
                                    :border-radius "0.5rem"}}
          [:h4 "Team 1 Stats"]
          [:p "Statistics for Team 1 players will appear here."]
          [:p]]

         ;; Team 2 stats placeholder
         [:div.team2-stats {:style {:flex "1"
                                    :padding "1rem"
                                    :background-color "#f5f5f5"
                                    :border-radius "0.5rem"}}
          [:h4 "Team 2 Stats"]
          [:p "Statistics for Team 2 players will appear here."]]]]])))