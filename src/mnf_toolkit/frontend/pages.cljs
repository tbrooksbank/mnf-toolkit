(ns mnf-toolkit.frontend.pages
  (:require ;Internal Deps
   [mnf-toolkit.frontend.pages.team-sheet-page :as ts]
   [mnf-toolkit.frontend.pages.league-table-page :as lt]
   [mnf-toolkit.frontend.pages.match-results-page :as mr]
   [mnf-toolkit.frontend.pages.player-page :as pp]
   [mnf-toolkit.frontend.pages.team-builder-page :as tb]
   ; External Deps 
   [clojure.string]))

(defn team-sheet [] (ts/team-sheet-page-builder))

(defn league-table [] (lt/league-table-page-builder))

(defn match-results [] (mr/match-results-page-builder))

(defn match [match-id] (mr/match-page-builder match-id))

(defn player [player-id] (pp/player-page-builder player-id))

(defn team-builder [] (tb/team-builder-page-builder))