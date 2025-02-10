(ns mnf-toolkit.frontend.tables
  (:require [reagent.core :as r]
            [clojure.string :as clojure.string]))

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