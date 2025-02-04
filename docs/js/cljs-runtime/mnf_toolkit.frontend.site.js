goog.provide('mnf_toolkit.frontend.site');
mnf_toolkit.frontend.site.handle_hash_change = (function mnf_toolkit$frontend$site$handle_hash_change(_){
var hash = window.location.hash;
var tab = ((cljs.core.empty_QMARK_(hash))?"team-sheet":cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf_toolkit.frontend.states.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),tab);
});
mnf_toolkit.frontend.site.init_routing_BANG_ = (function mnf_toolkit$frontend$site$init_routing_BANG_(){
window.addEventListener("hashchange",mnf_toolkit.frontend.site.handle_hash_change);

return mnf_toolkit.frontend.site.handle_hash_change(null);
});
mnf_toolkit.frontend.site.nav_link = (function mnf_toolkit$frontend$site$nav_link(id,label,active_tab){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,id))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf_toolkit.frontend.states.nav_state,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false);
})], null),label], null);
});
mnf_toolkit.frontend.site.navigation = (function mnf_toolkit$frontend$site$navigation(){
var active_tab = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.states.app_state));
var menu_open_QMARK_ = new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.states.nav_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-brand","div.nav-brand",2139201221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hamburger","button.hamburger",1646581668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf_toolkit.frontend.states.nav_state,cljs.core.update,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hamburger-box","span.hamburger-box",-43903964),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hamburger-inner","span.hamburger-inner",-740803414)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-menu","div.nav-menu",2129544906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(menu_open_QMARK_)?"is-open":null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-left","div.nav-left",-1707614279),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"team-sheet","Team Sheet",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"league-table","League Table",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"all-time-league-table","All Time League Table",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"match-results","Match Results",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"players","Player Info",active_tab], null)], null)], null)], null);
});
mnf_toolkit.frontend.site.main_content = (function mnf_toolkit$frontend$site$main_content(){
var active_tab = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.states.app_state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var G__13529 = active_tab;
switch (G__13529) {
case "team-sheet":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.pages.team_sheet], null);

break;
case "league-table":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.pages.league_table_component], null);

break;
case "all-time-league-table":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.pages.league_history_component], null);

break;
case "match-results":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.pages.match_results], null);

break;
case "players":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.pages.player_info], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.pages.team_sheet], null);

}
})()], null);
});
mnf_toolkit.frontend.site.app = (function mnf_toolkit$frontend$site$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.navigation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.main_content], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/tbrooksbank/mnf-toolkit",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),"Source Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," | "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tom Brooksbank \u00A9 2025"], null)], null)], null);
});
mnf_toolkit.frontend.site.init_BANG_ = (function mnf_toolkit$frontend$site$init_BANG_(){
mnf_toolkit.frontend.states.load_data_BANG_();

if(cljs.core.truth_(cljs.core.deref(mnf_toolkit.frontend.states.root_atom))){
} else {
cljs.core.reset_BANG_(mnf_toolkit.frontend.states.root_atom,reagent.dom.client.create_root(document.getElementById("app")));
}

mnf_toolkit.frontend.site.init_routing_BANG_();

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mnf_toolkit.frontend.states.root_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.app], null));
});
if((typeof mnf_toolkit !== 'undefined') && (typeof mnf_toolkit.frontend !== 'undefined') && (typeof mnf_toolkit.frontend.site !== 'undefined') && (typeof mnf_toolkit.frontend.site.start !== 'undefined')){
} else {
mnf_toolkit.frontend.site.start = mnf_toolkit.frontend.site.init_BANG_();
}

//# sourceMappingURL=mnf_toolkit.frontend.site.js.map
