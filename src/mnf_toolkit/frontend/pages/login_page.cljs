(ns mnf-toolkit.frontend.pages.login-page
  (:require [mnf-toolkit.frontend.states :as s]
            [cljs-http.client :as http]
            [cljs.core.async :refer [go <!]]))

(defn get-admin-token []
  (go
    (let [response (<! (http/get "/api.php?action=token"))]
      (if (:success response)
        (let [body (:body response)]
          (swap! s/app-state assoc
                 :admin-token (:token body)))
        (js/console.error (str "✗ Failed to get token: " response))))))

(defn login-page-builder
  []
  [:div.content
   [:div.section
    [:div.login-container

     ;; Header
     [:div.login-header
      [:h1 "Welcome Back"]
      [:p "Sign in to continue to MNF Toolkit"]]

     ;; Login Form
     [:div.login-form

      ;; Email Input
      [:div.form-group
       [:label {:for "user"} "User"]
       [:input.form-input {:id "user"
                           :type "user"
                           :placeholder "your name"}]]

      ;; Password Input
      [:div.form-group
       [:label {:for "password"} "Password"]
       [:input.form-input {:id "password"
                           :type "password"
                           :placeholder "••••••••"}]]

      ;; Login Button
      [:button.btn-primary {:on-click (fn []
                                         (let [email (.-value (.getElementById js/document "user"))
                                               password (.-value (.getElementById js/document "password"))]
                                           (js/console.log "Email:" email)
                                           (js/console.log "Password:" password)
                                           (get-admin-token)
                                           (swap! s/app-state assoc :admin-view true)
                                           (set! (.-location js/window) "/#/result-input")
                                           ))}
       "Sign In"]]]]])