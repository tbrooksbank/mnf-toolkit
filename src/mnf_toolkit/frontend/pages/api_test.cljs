(ns mnf-toolkit.frontend.pages.api-test
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [go <!]]))

(defonce state (r/atom {:token nil
                        :token-expires nil
                        :test-data nil
                        :messages []}))

(defn log-message [msg]
  (swap! state update :messages conj msg))

(defn get-token []
  (go
    (let [response (<! (http/get "/api.php?action=token"))]
      (if (:success response)
        (let [body (:body response)]
          (swap! state assoc
                 :token (:token body)
                 :token-expires (:expiresAt body))
          (log-message (str "✓ Token generated, expires: " (:expiresAt body))))
        (log-message (str "✗ Failed to get token: " response))))))

(defn read-data [filename]
  (go
    (let [response (<! (http/get (str "/api.php?file=" filename)))]
      (if (:success response)
        (do
          (swap! state assoc :test-data (:body response))
          (log-message (str "✓ Read " filename ": " (pr-str (:body response)))))
        (log-message (str "✗ Failed to read " filename))))))

(defn write-data [filename data]
  (go
    (let [token (:token @state)
          response (<! (http/post (str "/api.php?file=" filename)
                                  {:headers {"Authorization" (str "Bearer " token)
                                             "Content-Type" "application/json"}
                                   :json-params data}))]
      (if (:success response)
        (log-message (str "✓ Wrote to " filename))
        (log-message (str "✗ Failed to write: " (get-in response [:body :error])))))))

(defn write-without-token [filename data]
  (go
    (let [response (<! (http/post (str "/api.php?file=" filename)
                                  {:json-params data}))]
      (log-message (str "✗ Expected failure (no token): " (get-in response [:body :error]))))))

(defn api-tester []
  [:div.api-tester {:style {:padding "20px" :font-family "monospace"}}
   [:h2 "API Tester"]

   [:div {:style {:margin-bottom "20px"}}
    [:h3 "Token"]
    [:button {:on-click #(get-token)} "Get New Token"]
    (when-let [token (:token @state)]
      [:div
       [:p "Token: " [:code token]]
       [:p "Expires: " (:token-expires @state)]])]

   [:div {:style {:margin-bottom "20px"}}
    [:h3 "Read Data (Public)"]
    [:button {:on-click #(read-data "test")} "Read test.json"]
    [:button {:on-click #(read-data "nonexistent")} "Read nonexistent.json"]]

   [:div {:style {:margin-bottom "20px"}}
    [:h3 "Write Data (Protected)"]
    [:button {:on-click #(write-data "test" {:timestamp (js/Date.now)
                                             :message "Hello from ClojureScript!"})}
     "Write to test.json (with token)"]
    [:button {:on-click #(write-without-token "test" {:should "fail"})}
     "Write without token (should fail)"]]

   [:div
    [:h3 "Messages"]
    [:button {:on-click #(swap! state assoc :messages [])} "Clear"]
    [:ul {:style {:background "#f5f5f5" :padding "10px" :max-height "300px" :overflow "auto"}}
     (for [[idx msg] (map-indexed vector (:messages @state))]
       ^{:key idx} [:li msg])]]])