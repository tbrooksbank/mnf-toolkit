(ns mnf-toolkit.frontend.site 
    (:require 
     ; Internal Deps 
     [mnf-toolkit.frontend.pages :as p]
     [mnf-toolkit.frontend.states :as s]
     ; External Deps 
     [reagent.dom.client :as rdom]))

(defn parse-route [hash]
  (if (empty? hash)
    {:tab "team-sheet" :params nil}
    (let [parts (-> hash
                    (subs 2)  ; Remove the #/
                    (clojure.string/split #"/"))]
      {:tab (first parts) :params (rest parts)})))

;; Navigation handling
(defn handle-hash-change [_]
  (let [hash (.. js/window -location -hash)
        {:keys [tab params]} (parse-route hash)]  ; remove the # from the hash
    (swap! s/app-state assoc 
           :active-tab tab
           :tab-params params)))

;; Set up hash change listener
(defn init-routing! []
  (.addEventListener js/window "hashchange" handle-hash-change)
  (handle-hash-change nil))  ; Handle initial route

(defn nav-link 
  ([id label active-tab]
   (nav-link id label active-tab nil))
  ([id label active-tab params]
   [:a.nav-link
    {:href (str "#/" id (when params (str "/" (clojure.string/join "/" params))))
    :class (when (= active-tab id) "active")
    :on-click #(swap! s/nav-state assoc :menu-open? false)}  ; Close menu on click
   label]))

(defn navigation []
  (let [admin-view? (:admin-view @s/app-state)
        active-tab (:active-tab @s/app-state)
        menu-open? (:menu-open? @s/nav-state)]
    [:nav.navbar
     [:div.nav-brand
      [:button.hamburger
       {:on-click #(swap! s/nav-state update :menu-open? not)}
       [:span.hamburger-box
        [:span.hamburger-inner]]]]
     [:div.nav-menu {:class (when menu-open? "is-open")}
      (if admin-view?
        [:div.nav-left
         [nav-link "team-sheet" "Team Sheet" active-tab]
         [nav-link "league-table" "League Tables" active-tab]
         [nav-link "match-results" "Match Results" active-tab]
         [nav-link "hall-of-fame" "Hall of Fame" active-tab]
         [nav-link "result-input" "Input Result" active-tab]
         [nav-link "player-input" "Player Register" active-tab]]
        [:div.nav-left
         [nav-link "team-sheet" "Team Sheet" active-tab]
         [nav-link "league-table" "League Tables" active-tab] 
         [nav-link "match-results" "Match Results" active-tab]
         [nav-link "hall-of-fame" "Hall of Fame" active-tab]])
      ]]))

(defn main-content []
  (let [active-tab (:active-tab @s/app-state)
        params (:tab-params @s/app-state)]
    [:div.content
     (case active-tab
       "team-sheet" [p/team-sheet]
       "league-table" [p/league-table]
       "match-results" [p/match-results] 
       "match" [p/match params]
       "player" [p/player params]
       "hall-of-fame" [p/hall-of-fame]
       "result-input" [p/input-result]
       "login" [p/login]
       "api-test" [p/api-test-page]
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
    [:span "Tom Brooksbank © 2025"]
    [:span " | "]
    [:a {:href "#/login"} 
     "Admin"]]])

;; Initialize app
(defn init! []
  (s/load-data!)
  (when-not @s/root-atom
    (reset! s/root-atom (rdom/create-root (.getElementById js/document "app"))))
  (init-routing!)
  (rdom/render @s/root-atom [app]))

;; Initialize once
(defonce start
  (init!))