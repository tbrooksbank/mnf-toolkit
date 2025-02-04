goog.provide('mnf_toolkit.frontend.states');
if((typeof mnf_toolkit !== 'undefined') && (typeof mnf_toolkit.frontend !== 'undefined') && (typeof mnf_toolkit.frontend.states !== 'undefined') && (typeof mnf_toolkit.frontend.states.root_atom !== 'undefined')){
} else {
mnf_toolkit.frontend.states.root_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
mnf_toolkit.frontend.states.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"team-sheet"], null),new cljs.core.Keyword(null,"league-table","league-table",-204591893),null,new cljs.core.Keyword(null,"current-league-table","current-league-table",-1575985728),null,new cljs.core.Keyword(null,"match-data","match-data",151938970),null,new cljs.core.Keyword(null,"player-info","player-info",-859643705),null], null));
mnf_toolkit.frontend.states.load_data_BANG_ = (function mnf_toolkit$frontend$states$load_data_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading data..."], 0));

return mnf_toolkit.frontend.data_sourcing.load_edn_file(mnf_toolkit.frontend.data_sourcing.GIST_URL,(function (p1__13716_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data loaded"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mnf_toolkit.frontend.states.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"league-table","league-table",-204591893),new cljs.core.Keyword(null,"league-table","league-table",-204591893).cljs$core$IFn$_invoke$arity$1(p1__13716_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-league-table","current-league-table",-1575985728),new cljs.core.Keyword(null,"current-year-table","current-year-table",1412899577).cljs$core$IFn$_invoke$arity$1(p1__13716_SHARP_),new cljs.core.Keyword(null,"player-info","player-info",-859643705),new cljs.core.Keyword(null,"player-info","player-info",-859643705).cljs$core$IFn$_invoke$arity$1(p1__13716_SHARP_),new cljs.core.Keyword(null,"match-data","match-data",151938970),new cljs.core.Keyword(null,"match-data","match-data",151938970).cljs$core$IFn$_invoke$arity$1(p1__13716_SHARP_)], 0));
}));
});
mnf_toolkit.frontend.states.nav_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false], null));

//# sourceMappingURL=mnf_toolkit.frontend.states.js.map
