(ns mnf-toolkit.frontend.site
  #_{:clj-kondo/ignore [:unused-namespace]}
  (:require [reagent.core :as r] 
            [reagent.dom.client :as rdom]
            [clojure.string :as clojure.string]
            [cljs.reader :as reader]
            [goog.events :as events]))

(goog-define BASE-PATH "")  ; This will be set by shadow-cljs based on environment

;; State
(defonce root-atom (atom nil))

(def app-state
  (r/atom {:active-tab "team-sheet"
           :league-table nil
           :match-data nil
           :player-info nil}))

(def nav-state (r/atom {:menu-open? false}))

;; Navigation handling
(defn handle-hash-change [_]
  (let [hash (.. js/window -location -hash)
        tab (if (empty? hash)
              "team-sheet"  ; default tab
              (subs hash 1))]  ; remove the # from the hash
    (swap! app-state assoc :active-tab tab)))

;; Set up hash change listener
(defn init-routing! []
  (.addEventListener js/window "hashchange" handle-hash-change)
  (handle-hash-change nil))  ; Handle initial route

;; Data Loading
(defn load-edn-file [file-path callback]
  (js/console.log "Attempting to load:" (str BASE-PATH file-path))
  (-> (js/fetch (str BASE-PATH file-path))
      (.then (fn [response]
               (js/console.log "Response status:" (.-status response))
               (if (.-ok response)
                 (.text response)
                 (throw (js/Error. (str "Failed to load " file-path ": " (.-status response)))))))
      (.then (fn [text]
               (js/console.log "Loaded text from" file-path ":" (subs text 0 100))
               (callback (reader/read-string text))))
      (.catch (fn [error]
                (js/console.error "Error loading" file-path ":" error)))))

(defn load-data! []
  (println "Loading data...")
  (load-edn-file "/data/mnf-data.edn"
                 #(do
                    (println "Data loaded")
                    (swap! app-state assoc
                           :league-table (:league-table %)
                           :player-info (:player-info %)
                           :match-data (:match-data %)))))

;; Components
(defn format-value [v]
  (cond
    (instance? js/Date v) (.toLocaleDateString v)
    (number? v) (if (integer? v) v (.toFixed v 2))  ; Format decimals to 2 places, keep integers as is
    :else (str v)))

(defn sort-by-key [data key-name ascending?]
  (let [comparator (if ascending? compare (comp - compare))]
    (sort-by #(get % key-name) comparator data)))

;; Define the column orders
(def league-columns
  [:player :played :won :drawn :lost :points :gf :ga :gd])

(def player-columns
  [:player :current-rating :lifetime-rating :baseline-rating])

(defn data-table [data table-type]
  (let [state (r/atom {:sort-key nil
                       :ascending? true})
        columns (case table-type
                  :league league-columns
                  :player player-columns
                  (vec (keys (first data))))]
    (fn [data _]
      (if (and data (seq data))
        [:table.data-table
         [:thead
          [:tr
           (doall
            (for [header columns]
              ^{:key header}
              [:th.sortable
               {:on-click #(swap! state (fn [s]
                                          (if (= (:sort-key s) header)
                                            (update s :ascending? not)
                                            {:sort-key header
                                             :ascending? true})))
                :class (when (= header (:sort-key @state))
                         (if (:ascending? @state) "sort-asc" "sort-desc"))}
               (name header)]))]]
         [:tbody
          (doall
           (let [sorted-data (if (:sort-key @state)
                               (sort-by-key data (:sort-key @state) (:ascending? @state))
                               data)]
             (for [row sorted-data]
               ^{:key (hash row)}
               [:tr
                (doall
                 (for [header columns]
                   ^{:key (str (hash row) header)}
                   [:td (format-value (get row header))]))])))]]
        [:div "No data available"]))))

(defn team-sheet []
  [:div.section
   [:h2 "Team Sheet"]
   [:p "Coming soon"]])

(defn league-table-component []
  [:div.section
   [:h2 "2025 League Table"]
   [:p "This years league table will be avalible after the first match on 6th January."]])

(defn league-history-component []
  [:div.section
   [:h2 "All Time League Table"]
   (let [data (:league-table @app-state)]
     (if (nil? data)
       [:div "Loading league table..."]
       [data-table data :league]))])

;; Add data formatting functions
(defn format-date [date-str]
  (.toLocaleDateString (js/Date. date-str)))

(defn format-match-row [match]
  {:id (:match-id match)
   :date (format-date (:date match))
   :bibs-team "Team Bibs"
   :bibs-score (get-in match [:team-bibs-data :goals])
   :colours-score (get-in match [:team-colours-data :goals])
   :colours-team "Team Colours"
   :bibs-players (get-in match [:team-bibs-data :players])
   :colours-players (get-in match [:team-colours-data :players])
   :railway (get-in match [:team-bibs-data :railway])})

;; Add match detail component
(defn match-detail [{:keys [bibs-players colours-players railway]}]
  [:div.match-detail
   [:div.team-detail
    [:h4 "Team Bibs"]
    [:p (str "Players: " (clojure.string/join ", " bibs-players))]
    [:p (str "Railway End: " (if railway "Yes" "No"))]]
   [:div.team-detail
    [:h4 "Team Colours"]
    [:p (str "Players: " (clojure.string/join ", " colours-players))]
    [:p (str "Railway End: " (if (not railway) "Yes" "No"))]]])

(defn match-results []
  (let [matches (:match-data @app-state)
        expanded-id (:expanded-match @app-state)]
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
       (for [match (map format-match-row matches)]
         ^{:key (:id match)}
         [:<>
          [:tr.clickable
           {:on-click #(swap! app-state update :expanded-match
                             (fn [curr] (if (= curr (:id match)) nil (:id match))))}
           [:td (:date match)]
           [:td (:bibs-team match)]
           [:td (:bibs-score match)]
           [:td "-"]
           [:td (:colours-score match)]
           [:td (:colours-team match)]]
          (when (= expanded-id (:id match))
            [:tr
             [:td.match-detail-cell {:col-span 6}
              [match-detail match]]])])]]]))

(defn player-info []
  [:div.section
   [:h2 "Player Info"]
   [:p "Coming soon"]])

(defn nav-link [id label active-tab]
  [:a.nav-link
   {:href (str "#" id)
    :class (when (= active-tab id) "active")
    :on-click #(swap! nav-state assoc :menu-open? false)}  ; Close menu on click
   label])

(defn navigation []
  (let [active-tab (:active-tab @app-state)
        menu-open? (:menu-open? @nav-state)]
    [:nav.navbar
     [:div.nav-brand
      [:button.hamburger
       {:on-click #(swap! nav-state update :menu-open? not)}
       [:span.hamburger-box
        [:span.hamburger-inner]]]]
     [:div.nav-menu {:class (when menu-open? "is-open")}
      [:div.nav-left
       [nav-link "team-sheet" "Team Sheet" active-tab]
       [nav-link "league-table" "League Table" active-tab]
       [nav-link "all-time-league-table" "All Time League Table" active-tab]
       [nav-link "match-results" "Match Results" active-tab]
       [nav-link "players" "Player Info" active-tab]]]]))

(defn main-content []
  (let [active-tab (:active-tab @app-state)]
    [:div.content
     (case active-tab
       "team-sheet" [team-sheet]
       "league-table" [league-table-component]
       "all-time-league-table" [league-history-component]
       "match-results" [match-results]
       "players" [player-info]
       [team-sheet])]))

(defn app []
  [:div
   [navigation]
   [main-content]
   [:footer.footer
    [:a {:href "https://github.com/tbrooksbank/mnf-toolkit"
         :target "_blank"
         :rel "noopener noreferrer"}
     "Source Code"]
    [:span " | "]
    [:span "Tom Brooksbank © 2025"]]])

;; Initialize app
(defn init! []
  (load-data!)
  (when-not @root-atom
    (reset! root-atom (rdom/create-root (.getElementById js/document "app"))))
  (init-routing!)  ; Initialize routing
  (rdom/render @root-atom [app]))

;; Initialize once
#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defonce start
  (init!))