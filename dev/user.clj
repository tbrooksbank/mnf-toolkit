(ns user
  (:require [org.httpkit.server :as server]
            [clojure.java.io :as io]))

(defn handler [req]
  (let [uri (if (= "/" (:uri req)) "/index.html" (:uri req))
        ;; Use dev/index.html for index, everything else from docs
        file (if (= uri "/index.html")
               (io/file "dev/index.html")
               (io/file "docs" (subs uri 1)))]
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

(defn start-server []
  (server/run-server handler {:port 3000}))

(comment
  (def stop-server (start-server))  ; Evaluate this to start
  (stop-server)                     ; Evaluate this to stop
  )