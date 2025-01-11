(ns mnf-toolkit.data.access
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn load-data
  "Load match data from EDN file"
  [file-path]
  (try
    (let [file (io/file file-path)]
      (if (.exists file)
        (-> file
            slurp
            edn/read-string)
        (throw (ex-info (str "File not found: " file-path)
                        {:file-path file-path
                         :absolute-path (.getAbsolutePath file)}))))
    (catch Exception e
      (println "Error loading file:" (.getMessage e))
      (println "Attempted file path:" file-path)
      (println "Working directory:" (System/getProperty "user.dir"))
      (throw e))))