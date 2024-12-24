(ns mnf-toolkit.data.output-tables
  (:require [mnf-toolkit.calcs :as calcs]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
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