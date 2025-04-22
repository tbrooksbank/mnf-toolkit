(ns mnf-toolkit.frontend.pages.utils
  (:require 
   [mnf-toolkit.frontend.data-sourcing :as ds]
   [cljs.core.async :refer [<! go]]
   [cljs-http.client :as http]))

(defn load-team-data [teams]
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

(defn stat-card [title value & {:keys [width info]}]
  [:div {:style {:flex (str "0 0 calc(" (or width "33.333%") " - 16px)")
                 :min-width "150px"
                 :margin "8px"
                 :padding "16px"
                 :border "1px solid #e2e8f0"
                 :border-radius "8px"
                 :background-color "white"
                 :position "relative"}  ; Added for tooltip positioning
         :on-mouse-enter #(when info
                            (-> % .-target (.querySelector ".tooltip") .-style .-display (set! "block")))
         :on-mouse-leave #(when info
                            (-> % .-target (.querySelector ".tooltip") .-style .-display (set! "none")))}
   [:div {:style {:color "#718096"
                  :font-size "14px"
                  :margin-bottom "4px"
                  :display "flex"
                  :align-items "center"}}
    title
    (when info
      [:div.tooltip {:style {:display "none"
                             :position "absolute"
                             :top "100%"
                             :left "50%"
                             :transform "translateX(-50%)"
                             :background-color "#1a1a1a"
                             :color "white"
                             :padding "8px 12px"
                             :border-radius "6px"
                             :font-size "12px"
                             :max-width "200px"
                             :z-index "10"
                             :text-align "center"
                             :box-shadow "0 2px 4px rgba(0,0,0,0.2)"}}
       info])]
   [:div {:style {:font-size "18px"
                  :font-weight "600"}}
    value]])

(defn display-player-stats
  [player-data]
  [:div {:style {:display "flex"
                 :flex-wrap "wrap"
                 :margin "-8px"  ; Compensate for card margins
                 :width "100%"}}
        ;; Game Stats
   [stat-card "Games Played" (:total-games player-data)]
   [stat-card "Games Won" (:wins player-data)]
   [stat-card "Games Lost" (:losses player-data)]

        ;; Goal Stats
   [stat-card "Goals For" (:goals-for player-data)]
   [stat-card "Goals Against" (:goals-against player-data)]
   [stat-card "Goal Difference" (- (:goals-for player-data) (:goals-against player-data))]

        ;; Performance Stats
   [stat-card "Win Ratio" (.toFixed (/ (:wins player-data) (:total-games player-data)) 4)]
   [stat-card "Average Goal Difference" (.toFixed (/ (- (:goals-for player-data) (:goals-against player-data)) (:total-games player-data)) 4)]

        ;; Other Metrics
   [stat-card "Shooting at Railway Games" (:shooting-at-railway-games player-data)]
   [stat-card "Railway Ratio" (.toFixed (/ (:shooting-at-railway-games player-data) (:total-games player-data)) 4)]
   [stat-card "Bibs Games" (:bibs-games player-data)]
   [stat-card "Bibs Ratio" (.toFixed (/ (:bibs-games player-data) (:total-games player-data)) 4)]])