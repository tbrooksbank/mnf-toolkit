(ns mnf-toolkit.frontend.pages.input-result-page
  (:require [reagent.core :as r]))

;; Sample player list - replace with your actual player data
(def all-players
  ["Chris" "Catalin Dominte" "Jonny" "Steve Rowland" "Simon B"
   "Tom Brooksbank" "David Hennessey" "Stace" "Andy Smith" "Gary"
   "Jamie Randell" "Richard Brown" "Tim Konrad" "Steven Lucas"
   "Ian Daley" "Mark Burnage"])

(defn filter-players [search-term selected-players]
  (if (empty? search-term)
    []
    (filter #(and (not (contains? selected-players %))
                  (re-find (re-pattern (str "(?i)" search-term)) %))
            all-players)))

(defn player-autocomplete [team-key state-atom]
  (let [search-term (r/atom "")
        show-dropdown (r/atom false)]
    (fn [team-key state-atom]
      (let [selected-players (get-in @state-atom [team-key :players])
            suggestions (filter-players @search-term selected-players)]
        [:div.form-group
         [:label (str (name team-key) " Players")]
         
         ;; Selected players display
         [:div.selected-players
          (for [player selected-players]
            ^{:key player}
            [:span.player-tag
             player
             [:button.remove-player
              {:on-click #(swap! state-atom update-in [team-key :players] disj player)}
              "×"]])]
         
         ;; Input field
         [:div.autocomplete-wrapper
          [:input.form-input
           {:type "text"
            :placeholder "Type to search players..."
            :value @search-term
            :on-change #(do
                         (reset! search-term (.. % -target -value))
                         (reset! show-dropdown true))
            :on-focus #(reset! show-dropdown true)
            :on-blur #(js/setTimeout (fn [] (reset! show-dropdown false)) 200)}]
          
          ;; Dropdown suggestions
          (when (and @show-dropdown (seq suggestions))
            [:div.autocomplete-dropdown
             (for [player suggestions]
               ^{:key player}
               [:div.autocomplete-item
                {:on-click #(do
                             (swap! state-atom update-in [team-key :players] (fnil conj #{}) player)
                             (reset! search-term "")
                             (reset! show-dropdown false))}
                player])])]]))))

(defn match-results-input-page []
  (let [match-data (r/atom {:match-id nil
                            :date nil
                            :team-bibs-data {:goals 0
                                            :shooting-at-railway nil
                                            :players #{}}
                            :team-colours-data {:goals 0
                                               :shooting-at-railway nil
                                               :players #{}}})]
    (fn []
      [:div.content
       [:div.section
        [:div.match-results-container
         [:div.match-results-header
          [:h1 "Enter Match Results"]]
         
         [:div.match-results-form
          ;; Match ID and Date
          [:div.form-row
           [:div.form-group
            [:label {:for "match-id"} "Match ID"]
            [:input.form-input
             {:id "match-id"
              :type "number"
              :placeholder "52"
              :on-change #(swap! match-data assoc :match-id (js/parseInt (.. % -target -value)))}]]
           
           [:div.form-group
            [:label {:for "match-date"} "Date"]
            [:input.form-input
             {:id "match-date"
              :type "date"
              :on-change #(swap! match-data assoc :date (.. % -target -value))}]]]
          
          ;; Team Bibs Section
          [:div.team-section
           [:h2.team-header.bibs-header "Team Bibs"]
           
           [:div.form-row
            [:div.form-group
             [:label {:for "bibs-goals"} "Goals"]
             [:input.form-input
              {:id "bibs-goals"
               :type "number"
               :min "0"
               :value (get-in @match-data [:team-bibs-data :goals])
               :on-change #(swap! match-data assoc-in [:team-bibs-data :goals] 
                                 (js/parseInt (.. % -target -value)))}]]
            
            [:div.form-group
             [:label {:for "bibs-railway"} "Shooting at Railway"]
             [:select.form-input
              {:id "bibs-railway"
               :value (or (get-in @match-data [:team-bibs-data :shooting-at-railway]) "")
               :on-change #(swap! match-data assoc-in [:team-bibs-data :shooting-at-railway] 
                                 (js/parseInt (.. % -target -value)))}
              [:option {:value ""} "Select..."]
              [:option {:value 0} "0"]
              [:option {:value 1} "1"]]]]
           
           [player-autocomplete :team-bibs-data match-data]]
          
          ;; Team Colours Section
          [:div.team-section
           [:h2.team-header.colours-header "Team Colours"]
           
           [:div.form-row
            [:div.form-group
             [:label {:for "colours-goals"} "Goals"]
             [:input.form-input
              {:id "colours-goals"
               :type "number"
               :min "0"
               :value (get-in @match-data [:team-colours-data :goals])
               :on-change #(swap! match-data assoc-in [:team-colours-data :goals] 
                                 (js/parseInt (.. % -target -value)))}]]
            
            [:div.form-group
             [:label {:for "colours-railway"} "Shooting at Railway"]
             [:select.form-input
              {:id "colours-railway"
               :value (or (get-in @match-data [:team-colours-data :shooting-at-railway]) "")
               :on-change #(swap! match-data assoc-in [:team-colours-data :shooting-at-railway] 
                                 (js/parseInt (.. % -target -value)))}
              [:option {:value ""} "Select..."]
              [:option {:value "0"} "0"]
              [:option {:value "1"} "1"]]]]
           
           [player-autocomplete :team-colours-data match-data]]
          
          ;; Submit Button
          [:button.btn-primary
           {:on-click #(do
                        (js/console.log "Match Data:" (clj->js @match-data))
                        ;; Add your save logic here
                        )}
           "Save Match Results"]
          
          ;; Debug output
          [:div {:style {:white-space "pre-wrap"
                        :word-wrap "break-word"
                        :overflow-wrap "break-word"
                        :margin-top "2rem"
                        :padding "1rem"
                        :background-color "#f5f5f5"
                        :border-radius "4px"
                        :font-family "monospace"
                        :font-size "0.9rem"}}
           [:strong "Current Data:"]
           [:p (pr-str @match-data)]]]]]])))