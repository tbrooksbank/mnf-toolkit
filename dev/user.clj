(ns user
  (:require [org.httpkit.server :as server]
            [clojure.java.io :as io]))

(defn handler [req]
  (let [uri (if (= "/" (:uri req)) "/index.html" (:uri req))
        ;; Use dev/index.html for index, everything else from docs
        file (if (= uri "/index.html")
               (io/file "dev/index.html")
               (io/file "public" (subs uri 1)))]
    (if (.exists file)
      {:status 200
       :headers {"Content-Type" (cond
                                  (.endsWith uri ".html") "text/html"
                                  (.endsWith uri ".css") "text/css"
                                  (.endsWith uri ".js") "application/javascript"
                                  (.endsWith uri ".edn") "application/edn"
                                  (.endsWith uri ".svg") "image/svg+xml"
                                  :else "text/plain")}
       :body file}
      {:status 404
       :body (str "Not found: " uri)})))

(defonce server-instance (atom nil))

(defn start-server []
  (when-not @server-instance
    (let [stop-fn (server/run-server handler {:port 3000})]
      (reset! server-instance stop-fn)
      (println "Server started on localhost:3000"))))

(defn stop-server []
  (when @server-instance
    (@server-instance)
    (reset! server-instance nil)
    (println "Server stopped")))

(comment
  (start-server)   ; Start the server
  (stop-server)    ; Stop the server
  )