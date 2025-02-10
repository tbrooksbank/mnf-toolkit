(ns mnf-toolkit.frontend.pages
  (:require ;Internal Deps
            [mnf-toolkit.frontend.data-sourcing :as ds]
            [mnf-toolkit.frontend.tables :as t] 
            [mnf-toolkit.frontend.states :as s]
            ; External Deps
            [cljs.core.async :refer [<! go]]
            [reagent.core :as r]
            [cljs-http.client :as http]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn team-sheet []
  (let [teams (r/atom {:team1 []
                       :team2 []
                       :match-date nil
                       :teams-finalised nil})]
    (r/create-class
     {:component-did-mount
      (fn []
        (go
          (let [url (str "https://docs.google.com/spreadsheets/d/"
                         ds/sheet-id
                         "/gviz/tq?"
                         "tqx=out:json"
                         "&sheet=team-sheet"
                         "&range=B1:E12"
                         "&headers=0")
                _ (js/console.log "Fetching team sheet data from:" url)
                response (<! (http/get url {:with-credentials? false}))]
            (try
              (let [parsed-data (ds/parse-google-response response)]
                (reset! teams parsed-data))
              (catch js/Error e
                (js/console.error "Error parsing response:" e))))))

      :reagent-render
      (fn []
        [:div {:class "team-sheet-container"}
         [:h2 (if-let [date (:match-date @teams)]
                (str date " - Match Teams")
                "Unspecified Match Date - Teams")]
         [:h3 (if (= (:teams-finalised @teams) "Yes")
                "Teams Finalised"
                "Teams Not Yet Decided, Check Back Later")]
         [:div {:class "team-sheet-row"}
          ; Team 1
          [:div {:class "team-sheet-column"}
           [:h3 "Team 1"]
            [:ul {:style {:list-style-type "none"}}
             (for [player (get-in @teams [:team1 :players])]
               ^{:key player}
               [:li
                {:class [(if (= (get-in @teams [:team1 :Bibs]) "Yes")
                           "bibs-player-box"
                           "colours-player-box")
                         (when (= (get-in @teams [:team1 :Railway]) "Yes") "railway-background")]}
                [:span {:class (if (= (get-in @teams [:team1 :Bibs]) "Yes")
                                 "bibs-player-text" 
                                 "colours-player-text")}
                 player]])]]
          ; Team 2
          [:div {:class "team-sheet-column"}
           [:h3 "Team 2"]
            [:ul {:style {:list-style-type "none"}}
             (for [player (get-in @teams [:team2 :players])]
               ^{:key player}
               [:li
                {:class [(if (= (get-in @teams [:team2 :Bibs]) "Yes")
                          "bibs-player-box"
                          "colours-player-box")
                         (when (= (get-in @teams [:team2 :Railway]) "Yes") "railway-background")]}
                [:span {:class (if (= (get-in @teams [:team2 :Bibs]) "Yes")
                                  "bibs-player-text"
                                  "colours-player-text")}
                 player]])]]]])})))

(defn league-table-component []
  [:div.section
   [:h2 "2025 League Table"]
   (let [data (:current-league-table @s/app-state)]
     (if (nil? data)
       [:div "Loading league table..."]
       [t/data-table data :league]))])

(defn league-history-component []
  [:div.section
   [:h2 "All Time League Table"]
   (let [data (:league-table @s/app-state)]
     (if (nil? data)
       [:div "Loading league table..."]
       [t/data-table data :league]))])

(defn player-info []
  [:div.section
   [:h2 "Player Info"]
   [:p "Coming soon"]])

(defn match-results []
  (let [matches (:match-data @s/app-state)]
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

(defn match
  [match-id]
  (let [matches (into [] (:match-data @s/app-state))
        clean-id (js/parseInt (first match-id))
        match (first (filter #(= (:match-id %) clean-id) matches))
        team-colours (get-in match [:team-colours-data])
        team-colours-players (get-in team-colours [:players])
        team-colours-goals (get-in team-colours [:goals])
        team-colours-railway (get-in team-colours [:shooting-at-railway])
        team-bibs (get-in match [:team-bibs-data])
        team-bibs-players (get-in team-bibs [:players])
        team-bibs-goals (get-in team-bibs [:goals])
        team-bibs-railway (get-in team-bibs [:shooting-at-railway])] 
    [:div {:class "team-sheet-container"}
     [:div {:class "team-sheet-row"}
      [:h2 {:style {:justify-content "center"}}
       (str "Team Colours " team-colours-goals " - " team-bibs-goals " Team Bibs")]
      [:h2 (str "Match Date: " (.toLocaleDateString (get-in match [:date])))]]
     [:div {:class "team-sheet-row"}
    ; Team 1
     [:div {:class "team-sheet-column"}
      [:h3 "Team Colours"]
      [:ul {:style {:list-style-type "none"}}
       (for [player team-colours-players]
         ^{:key player}
         [:li
          {:class ["colours-player-box"
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
          {:class ["bibs-player-box"
                   (when (= team-bibs-railway 1) "railway-background")]}
          [:span {:class "bibs-player-text"}
           player]])]]]]))