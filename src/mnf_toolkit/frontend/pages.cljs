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
         [:tr
          [:td (:date match)]
          [:td (:bibs-team match)]
          [:td (:bibs-score match)]
          [:td "-"]
          [:td (:colours-score match)]
          [:td (:colours-team match)]])]]]))