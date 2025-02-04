(ns mnf-toolkit.frontend.site 
    (:require ; Internal Deps 
     [mnf-toolkit.frontend.pages :as p]
     [mnf-toolkit.frontend.states :as s]
            ; External Deps 
     [reagent.dom.client :as rdom]))

;; Navigation handling
(defn handle-hash-change [_]
  (let [hash (.. js/window -location -hash)
        tab (if (empty? hash)
              "team-sheet"  ; default tab
              (subs hash 1))]  ; remove the # from the hash
    (swap! s/app-state assoc :active-tab tab)))

;; Set up hash change listener
(defn init-routing! []
  (.addEventListener js/window "hashchange" handle-hash-change)
  (handle-hash-change nil))  ; Handle initial route

(defn nav-link [id label active-tab]
  [:a.nav-link
    {:href (str "#" id)
    :class (when (= active-tab id) "active")
    :on-click #(swap! s/nav-state assoc :menu-open? false)}  ; Close menu on click
   label])

(defn navigation []
  (let [active-tab (:active-tab @s/app-state)
        menu-open? (:menu-open? @s/nav-state)]
    [:nav.navbar
     [:div.nav-brand
      [:button.hamburger
       {:on-click #(swap! s/nav-state update :menu-open? not)}
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
  (let [active-tab (:active-tab @s/app-state)]
    [:div.content
     (case active-tab
       "team-sheet" [p/team-sheet]
       "league-table" [p/league-table-component]
       "all-time-league-table" [p/league-history-component]
       "match-results" [p/match-results]
       "players" [p/player-info]
       [p/team-sheet])]))

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
  (s/load-data!)
  (when-not @s/root-atom
    (reset! s/root-atom (rdom/create-root (.getElementById js/document "app"))))
  (init-routing!)  ; Initialize routing
  (rdom/render @s/root-atom [app]))

;; Initialize once
(defonce start
  (init!))