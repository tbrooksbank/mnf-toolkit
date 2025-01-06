(ns mnf-toolkit.data.output-tables
  (:require [mnf-toolkit.calcs :as calcs]))

(defn league-table [player-stats]
  (->> player-stats
       (map (fn [stat]
              (let [processed-stat (-> stat
                                       (select-keys [:player :recent-player-score :player-score :games-won :games-drawn :games-lost
                                                     :goals-for :goals-against :goal-difference :bibs-ratio :railway-ratio])
                                       (assoc :points (+ (* 3 (:games-won stat))
                                                         (:games-drawn stat))
                                              :games-played (+ (:games-won stat)
                                                               (:games-drawn stat)
                                                               (:games-lost stat))))]
                (array-map
                 :player (:player processed-stat)
                 :played (:games-played processed-stat)
                 :won (:games-won processed-stat)
                 :drawn (:games-drawn processed-stat)
                 :lost (:games-lost processed-stat)
                 :points (:points processed-stat)
                 :gf (:goals-for processed-stat)
                 :ga (:goals-against processed-stat)
                 :gd (:goal-difference processed-stat)))))
       (sort-by :gf >)
       (sort-by :gd >)
       (sort-by :points >)))

(defn get-year-from-date [date]
  (if (instance? java.util.Date date)
    (+ 1900 (.getYear date))  ; Java Date years are 1900-based
    (.getYear (java.time.LocalDateTime/parse
               (str date)
               java.time.format.DateTimeFormatter/ISO_DATE_TIME))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn current-year-league-table [players matches]
  (let [current-year-matches (filter #(= 2025 (get-year-from-date (:date %))) matches)
        current-year-player-stats (calcs/calculate-player-stats current-year-matches players)]
    (league-table current-year-player-stats)))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defn player-info [player-stats]
  (->> player-stats
       (map (fn [stat]
              (let [processed-stat (-> stat
                                       (select-keys [:player :recent-player-score :player-score :manager-rating])
                                       (update :recent-player-score calcs/normalize-to-fifa)
                                       (update :player-score calcs/normalize-to-fifa)
                                       (update :manager-rating calcs/normalize-to-fifa))]
                (array-map
                 :player (:player processed-stat)
                 :current-rating (:recent-player-score processed-stat)
                 :lifetime-rating (:player-score processed-stat)
                 :baseline-rating (:manager-rating processed-stat)))))
       (sort-by :current-rating >)))