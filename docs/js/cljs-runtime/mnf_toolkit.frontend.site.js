goog.provide('mnf_toolkit.frontend.site');
/**
 * @define {string}
 */
mnf_toolkit.frontend.site.BASE_PATH = goog.define("mnf_toolkit.frontend.site.BASE_PATH","");
if((typeof mnf_toolkit !== 'undefined') && (typeof mnf_toolkit.frontend !== 'undefined') && (typeof mnf_toolkit.frontend.site !== 'undefined') && (typeof mnf_toolkit.frontend.site.root_atom !== 'undefined')){
} else {
mnf_toolkit.frontend.site.root_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
mnf_toolkit.frontend.site.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),"team-sheet",new cljs.core.Keyword(null,"league-table","league-table",-204591893),null,new cljs.core.Keyword(null,"current-league-table","current-league-table",-1575985728),null,new cljs.core.Keyword(null,"match-data","match-data",151938970),null,new cljs.core.Keyword(null,"player-info","player-info",-859643705),null], null));
mnf_toolkit.frontend.site.nav_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false], null));
mnf_toolkit.frontend.site.handle_hash_change = (function mnf_toolkit$frontend$site$handle_hash_change(_){
var hash = window.location.hash;
var tab = ((cljs.core.empty_QMARK_(hash))?"team-sheet":cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(1)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf_toolkit.frontend.site.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),tab);
});
mnf_toolkit.frontend.site.init_routing_BANG_ = (function mnf_toolkit$frontend$site$init_routing_BANG_(){
window.addEventListener("hashchange",mnf_toolkit.frontend.site.handle_hash_change);

return mnf_toolkit.frontend.site.handle_hash_change(null);
});
mnf_toolkit.frontend.site.load_edn_file = (function mnf_toolkit$frontend$site$load_edn_file(file_path,callback){
console.log("Attempting to load:",[mnf_toolkit.frontend.site.BASE_PATH,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_path)].join(''));

return fetch([mnf_toolkit.frontend.site.BASE_PATH,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_path)].join('')).then((function (response){
console.log("Response status:",response.status);

if(cljs.core.truth_(response.ok)){
return response.text();
} else {
throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_path),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response.status)].join('')));
}
})).then((function (text){
console.log("Loaded text from",file_path,":",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),(100)));

var G__13523 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__13523) : callback.call(null, G__13523));
})).catch((function (error){
return console.error("Error loading",file_path,":",error);
}));
});
mnf_toolkit.frontend.site.load_data_BANG_ = (function mnf_toolkit$frontend$site$load_data_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading data..."], 0));

return mnf_toolkit.frontend.site.load_edn_file("/data/mnf-data.edn",(function (p1__13524_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data loaded"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mnf_toolkit.frontend.site.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"league-table","league-table",-204591893),new cljs.core.Keyword(null,"league-table","league-table",-204591893).cljs$core$IFn$_invoke$arity$1(p1__13524_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-league-table","current-league-table",-1575985728),new cljs.core.Keyword(null,"current-year-table","current-year-table",1412899577).cljs$core$IFn$_invoke$arity$1(p1__13524_SHARP_),new cljs.core.Keyword(null,"player-info","player-info",-859643705),new cljs.core.Keyword(null,"player-info","player-info",-859643705).cljs$core$IFn$_invoke$arity$1(p1__13524_SHARP_),new cljs.core.Keyword(null,"match-data","match-data",151938970),new cljs.core.Keyword(null,"match-data","match-data",151938970).cljs$core$IFn$_invoke$arity$1(p1__13524_SHARP_)], 0));
}));
});
mnf_toolkit.frontend.site.format_value = (function mnf_toolkit$frontend$site$format_value(v){
if((v instanceof Date)){
return v.toLocaleDateString();
} else {
if(typeof v === 'number'){
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
return v.toFixed((2));
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
});
mnf_toolkit.frontend.site.sort_by_key = (function mnf_toolkit$frontend$site$sort_by_key(data,key_name,ascending_QMARK_){
var comparator = (cljs.core.truth_(ascending_QMARK_)?cljs.core.compare:cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__13525_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__13525_SHARP_,key_name);
}),comparator,data);
});
mnf_toolkit.frontend.site.league_columns = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"played","played",-1713723590),new cljs.core.Keyword(null,"won","won",910394405),new cljs.core.Keyword(null,"drawn","drawn",2034398063),new cljs.core.Keyword(null,"lost","lost",-744692984),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"gf","gf",-2141204266),new cljs.core.Keyword(null,"ga","ga",-1797526459),new cljs.core.Keyword(null,"gd","gd",-246467758)], null);
mnf_toolkit.frontend.site.player_columns = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-rating","current-rating",649409374),new cljs.core.Keyword(null,"lifetime-rating","lifetime-rating",1495253321),new cljs.core.Keyword(null,"baseline-rating","baseline-rating",1442819916)], null);
mnf_toolkit.frontend.site.data_table = (function mnf_toolkit$frontend$site$data_table(data,table_type){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),null,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null));
var columns = (function (){var G__13526 = table_type;
var G__13526__$1 = (((G__13526 instanceof cljs.core.Keyword))?G__13526.fqn:null);
switch (G__13526__$1) {
case "league":
return mnf_toolkit.frontend.site.league_columns;

break;
case "player":
return mnf_toolkit.frontend.site.player_columns;

break;
default:
return cljs.core.vec(cljs.core.keys(cljs.core.first(data)));

}
})();
return (function (data__$1,_){
if(cljs.core.truth_((function (){var and__5000__auto__ = data__$1;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(data__$1);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-table","table.data-table",98624197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function mnf_toolkit$frontend$site$data_table_$_iter__13527(s__13528){
return (new cljs.core.LazySeq(null,(function (){
var s__13528__$1 = s__13528;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13528__$1);
if(temp__5804__auto__){
var s__13528__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13528__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13528__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13530 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13529 = (0);
while(true){
if((i__13529 < size__5479__auto__)){
var header = cljs.core._nth(c__5478__auto__,i__13529);
cljs.core.chunk_append(b__13530,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sortable","th.sortable",-1132266161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13529,header,c__5478__auto__,size__5479__auto__,b__13530,s__13528__$2,temp__5804__auto__,state,columns){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (i__13529,header,c__5478__auto__,size__5479__auto__,b__13530,s__13528__$2,temp__5804__auto__,state,columns){
return (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(s),header)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),cljs.core.not);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),header,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null);
}
});})(i__13529,header,c__5478__auto__,size__5479__auto__,b__13530,s__13528__$2,temp__5804__auto__,state,columns))
);
});})(i__13529,header,c__5478__auto__,size__5479__auto__,b__13530,s__13528__$2,temp__5804__auto__,state,columns))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(cljs.core.truth_(new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"sort-asc":"sort-desc"):null)], null),cljs.core.name(header)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)));

var G__13607 = (i__13529 + (1));
i__13529 = G__13607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13530),mnf_toolkit$frontend$site$data_table_$_iter__13527(cljs.core.chunk_rest(s__13528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13530),null);
}
} else {
var header = cljs.core.first(s__13528__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sortable","th.sortable",-1132266161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (header,s__13528__$2,temp__5804__auto__,state,columns){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(s),header)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),cljs.core.not);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),header,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null);
}
}));
});})(header,s__13528__$2,temp__5804__auto__,state,columns))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(cljs.core.truth_(new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"sort-asc":"sort-desc"):null)], null),cljs.core.name(header)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)),mnf_toolkit$frontend$site$data_table_$_iter__13527(cljs.core.rest(s__13528__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(columns);
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var sorted_data = (cljs.core.truth_(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?mnf_toolkit.frontend.site.sort_by_key(data__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))):data__$1);
var iter__5480__auto__ = (function mnf_toolkit$frontend$site$data_table_$_iter__13531(s__13532){
return (new cljs.core.LazySeq(null,(function (){
var s__13532__$1 = s__13532;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13532__$1);
if(temp__5804__auto__){
var s__13532__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13532__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13532__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13534 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13533 = (0);
while(true){
if((i__13533 < size__5479__auto__)){
var row = cljs.core._nth(c__5478__auto__,i__13533);
cljs.core.chunk_append(b__13534,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = ((function (i__13533,row,c__5478__auto__,size__5479__auto__,b__13534,s__13532__$2,temp__5804__auto__,sorted_data,state,columns){
return (function mnf_toolkit$frontend$site$data_table_$_iter__13531_$_iter__13535(s__13536){
return (new cljs.core.LazySeq(null,((function (i__13533,row,c__5478__auto__,size__5479__auto__,b__13534,s__13532__$2,temp__5804__auto__,sorted_data,state,columns){
return (function (){
var s__13536__$1 = s__13536;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13536__$1);
if(temp__5804__auto____$1){
var s__13536__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13536__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__13536__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__13538 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__13537 = (0);
while(true){
if((i__13537 < size__5479__auto____$1)){
var header = cljs.core._nth(c__5478__auto____$1,i__13537);
cljs.core.chunk_append(b__13538,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)));

var G__13608 = (i__13537 + (1));
i__13537 = G__13608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13538),mnf_toolkit$frontend$site$data_table_$_iter__13531_$_iter__13535(cljs.core.chunk_rest(s__13536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13538),null);
}
} else {
var header = cljs.core.first(s__13536__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)),mnf_toolkit$frontend$site$data_table_$_iter__13531_$_iter__13535(cljs.core.rest(s__13536__$2)));
}
} else {
return null;
}
break;
}
});})(i__13533,row,c__5478__auto__,size__5479__auto__,b__13534,s__13532__$2,temp__5804__auto__,sorted_data,state,columns))
,null,null));
});})(i__13533,row,c__5478__auto__,size__5479__auto__,b__13534,s__13532__$2,temp__5804__auto__,sorted_data,state,columns))
;
return iter__5480__auto__(columns);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__13609 = (i__13533 + (1));
i__13533 = G__13609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13534),mnf_toolkit$frontend$site$data_table_$_iter__13531(cljs.core.chunk_rest(s__13532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13534),null);
}
} else {
var row = cljs.core.first(s__13532__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = ((function (row,s__13532__$2,temp__5804__auto__,sorted_data,state,columns){
return (function mnf_toolkit$frontend$site$data_table_$_iter__13531_$_iter__13539(s__13540){
return (new cljs.core.LazySeq(null,(function (){
var s__13540__$1 = s__13540;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13540__$1);
if(temp__5804__auto____$1){
var s__13540__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13540__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13540__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13542 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13541 = (0);
while(true){
if((i__13541 < size__5479__auto__)){
var header = cljs.core._nth(c__5478__auto__,i__13541);
cljs.core.chunk_append(b__13542,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)));

var G__13610 = (i__13541 + (1));
i__13541 = G__13610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13542),mnf_toolkit$frontend$site$data_table_$_iter__13531_$_iter__13539(cljs.core.chunk_rest(s__13540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13542),null);
}
} else {
var header = cljs.core.first(s__13540__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)),mnf_toolkit$frontend$site$data_table_$_iter__13531_$_iter__13539(cljs.core.rest(s__13540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__13532__$2,temp__5804__auto__,sorted_data,state,columns))
;
return iter__5480__auto__(columns);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),mnf_toolkit$frontend$site$data_table_$_iter__13531(cljs.core.rest(s__13532__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(sorted_data);
})())], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No data available"], null);
}
});
});
mnf_toolkit.frontend.site.sheet_id = "1qWimpverGPBkExhEkStyoUYsejExo6iqMW6AdDV0Q_g";
mnf_toolkit.frontend.site.clean_google_response = (function mnf_toolkit$frontend$site$clean_google_response(response){
return clojure.string.replace_first(clojure.string.replace(clojure.string.replace(response,"/*O_o*/\n",""),"google.visualization.Query.setResponse(",""),");","");
});
mnf_toolkit.frontend.site.parse_google_response = (function mnf_toolkit$frontend$site$parse_google_response(response){
try{var cleaned_json = mnf_toolkit.frontend.site.clean_google_response(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response));
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(cleaned_json),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var rows = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"rows","rows",850049680)], null));
var date_cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.second(rows),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null));
var formatted_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(date_cell,new cljs.core.Keyword(null,"v","v",21465059));
var teams_final_cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.last(rows),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3),new cljs.core.Keyword(null,"v","v",21465059)], null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"team1","team1",-1475026514),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13543_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__13543_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(0),new cljs.core.Keyword(null,"v","v",21465059)], null));
}),cljs.core.rest(rows))),new cljs.core.Keyword(null,"team2","team2",228351662),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13544_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__13544_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(1),new cljs.core.Keyword(null,"v","v",21465059)], null));
}),cljs.core.rest(rows))),new cljs.core.Keyword(null,"match-date","match-date",-652150414),formatted_date,new cljs.core.Keyword(null,"teams-finalised","teams-finalised",-1213879732),teams_final_cell], null);
}catch (e13545){if((e13545 instanceof Error)){
var e = e13545;
console.error("Error during parsing:",e);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"team1","team1",-1475026514),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"team2","team2",228351662),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"match-date","match-date",-652150414),null], null);
} else {
throw e13545;

}
}});
mnf_toolkit.frontend.site.team_sheet = (function mnf_toolkit$frontend$site$team_sheet(){
var teams = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"team1","team1",-1475026514),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"team2","team2",228351662),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"match-date","match-date",-652150414),null,new cljs.core.Keyword(null,"teams-finalised","teams-finalised",-1213879732),null], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var c__11669__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11670__auto__ = (function (){var switch__11505__auto__ = (function (state_13569){
var state_val_13570 = (state_13569[(1)]);
if((state_val_13570 === (1))){
var inst_13548 = ["https://docs.google.com/spreadsheets/d/",mnf_toolkit.frontend.site.sheet_id,"/gviz/tq?","tqx=out:json","&sheet=team-sheet","&range=B1:E9","&headers=0"].join('');
var inst_13549 = console.log("Fetching team sheet data from:",inst_13548);
var inst_13550 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_13551 = [false];
var inst_13552 = cljs.core.PersistentHashMap.fromArrays(inst_13550,inst_13551);
var inst_13553 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_13548,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_13552], 0));
var state_13569__$1 = (function (){var statearr_13571 = state_13569;
(statearr_13571[(7)] = inst_13549);

return statearr_13571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13569__$1,(2),inst_13553);
} else {
if((state_val_13570 === (2))){
var inst_13555 = (state_13569[(2)]);
var state_13569__$1 = (function (){var statearr_13572 = state_13569;
(statearr_13572[(8)] = inst_13555);

return statearr_13572;
})();
var statearr_13573_13611 = state_13569__$1;
(statearr_13573_13611[(2)] = null);

(statearr_13573_13611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (3))){
var inst_13555 = (state_13569[(8)]);
var _ = (function (){var statearr_13574 = state_13569;
(statearr_13574[(4)] = cljs.core.cons((6),(state_13569[(4)])));

return statearr_13574;
})();
var inst_13563 = mnf_toolkit.frontend.site.parse_google_response(inst_13555);
var inst_13564 = cljs.core.reset_BANG_(teams,inst_13563);
var ___$1 = (function (){var statearr_13575 = state_13569;
(statearr_13575[(4)] = cljs.core.rest((state_13569[(4)])));

return statearr_13575;
})();
var state_13569__$1 = state_13569;
var statearr_13576_13612 = state_13569__$1;
(statearr_13576_13612[(2)] = inst_13564);

(statearr_13576_13612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (4))){
var inst_13567 = (state_13569[(2)]);
var state_13569__$1 = state_13569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13569__$1,inst_13567);
} else {
if((state_val_13570 === (5))){
var inst_13556 = (state_13569[(2)]);
var inst_13557 = console.error("Error parsing response:",inst_13556);
var state_13569__$1 = state_13569;
var statearr_13578_13613 = state_13569__$1;
(statearr_13578_13613[(2)] = inst_13557);

(statearr_13578_13613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (6))){
var _ = (function (){var statearr_13579 = state_13569;
(statearr_13579[(4)] = cljs.core.rest((state_13569[(4)])));

return statearr_13579;
})();
var state_13569__$1 = state_13569;
var ex13577 = (state_13569__$1[(2)]);
var statearr_13580_13614 = state_13569__$1;
(statearr_13580_13614[(5)] = ex13577);


if((ex13577 instanceof Error)){
var statearr_13581_13615 = state_13569__$1;
(statearr_13581_13615[(1)] = (5));

(statearr_13581_13615[(5)] = null);

} else {
throw ex13577;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto__ = null;
var mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto____0 = (function (){
var statearr_13582 = [null,null,null,null,null,null,null,null,null];
(statearr_13582[(0)] = mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto__);

(statearr_13582[(1)] = (1));

return statearr_13582;
});
var mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto____1 = (function (state_13569){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_13569);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e13583){var ex__11509__auto__ = e13583;
var statearr_13584_13616 = state_13569;
(statearr_13584_13616[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_13569[(4)]))){
var statearr_13585_13617 = state_13569;
(statearr_13585_13617[(1)] = cljs.core.first((state_13569[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13618 = state_13569;
state_13569 = G__13618;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto__ = function(state_13569){
switch(arguments.length){
case 0:
return mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto____0.call(this);
case 1:
return mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto____1.call(this,state_13569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto____0;
mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto____1;
return mnf_toolkit$frontend$site$team_sheet_$_state_machine__11506__auto__;
})()
})();
var state__11671__auto__ = (function (){var statearr_13586 = f__11670__auto__();
(statearr_13586[(6)] = c__11669__auto__);

return statearr_13586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11671__auto__);
}));

return c__11669__auto__;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"team-sheet-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"match-date","match-date",-652150414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(teams));
if(cljs.core.truth_(temp__5802__auto__)){
var date = temp__5802__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)," - Match Teams"].join('');
} else {
return "Unspecified Match Date - Teams";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"teams-finalised","teams-finalised",-1213879732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(teams)),"Yes"))?"Teams Finalised":"Teams Not Yet Decided, Check Back Later")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"team-sheet-row"], null),(function (){var iter__5480__auto__ = (function mnf_toolkit$frontend$site$team_sheet_$_iter__13587(s__13588){
return (new cljs.core.LazySeq(null,(function (){
var s__13588__$1 = s__13588;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13588__$1);
if(temp__5804__auto__){
var s__13588__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13588__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13588__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13590 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13589 = (0);
while(true){
if((i__13589 < size__5479__auto__)){
var team_info = cljs.core._nth(c__5478__auto__,i__13589);
cljs.core.chunk_append(b__13590,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"team-sheet-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team_info)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),(function (){var iter__5480__auto__ = ((function (i__13589,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams){
return (function mnf_toolkit$frontend$site$team_sheet_$_iter__13587_$_iter__13591(s__13592){
return (new cljs.core.LazySeq(null,((function (i__13589,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams){
return (function (){
var s__13592__$1 = s__13592;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13592__$1);
if(temp__5804__auto____$1){
var s__13592__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13592__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__13592__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__13594 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__13593 = (0);
while(true){
if((i__13593 < size__5479__auto____$1)){
var player = cljs.core._nth(c__5478__auto____$1,i__13593);
cljs.core.chunk_append(b__13594,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.p-2","li.p-2",-299966012),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f5f5f5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.1s ease-in-out"], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__13593,i__13589,player,c__5478__auto____$1,size__5479__auto____$1,b__13594,s__13592__$2,temp__5804__auto____$1,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams){
return (function (p1__13546_SHARP_){
return p1__13546_SHARP_.target.style.setProperty("background-color","#e8e8e8");
});})(i__13593,i__13589,player,c__5478__auto____$1,size__5479__auto____$1,b__13594,s__13592__$2,temp__5804__auto____$1,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__13593,i__13589,player,c__5478__auto____$1,size__5479__auto____$1,b__13594,s__13592__$2,temp__5804__auto____$1,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams){
return (function (p1__13547_SHARP_){
return p1__13547_SHARP_.target.style.setProperty("background-color","#f5f5f5");
});})(i__13593,i__13589,player,c__5478__auto____$1,size__5479__auto____$1,b__13594,s__13592__$2,temp__5804__auto____$1,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams))
], null),player], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),player], null)));

var G__13619 = (i__13593 + (1));
i__13593 = G__13619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13594),mnf_toolkit$frontend$site$team_sheet_$_iter__13587_$_iter__13591(cljs.core.chunk_rest(s__13592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13594),null);
}
} else {
var player = cljs.core.first(s__13592__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.p-2","li.p-2",-299966012),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f5f5f5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.1s ease-in-out"], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__13589,player,s__13592__$2,temp__5804__auto____$1,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams){
return (function (p1__13546_SHARP_){
return p1__13546_SHARP_.target.style.setProperty("background-color","#e8e8e8");
});})(i__13589,player,s__13592__$2,temp__5804__auto____$1,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__13589,player,s__13592__$2,temp__5804__auto____$1,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams){
return (function (p1__13547_SHARP_){
return p1__13547_SHARP_.target.style.setProperty("background-color","#f5f5f5");
});})(i__13589,player,s__13592__$2,temp__5804__auto____$1,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams))
], null),player], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),player], null)),mnf_toolkit$frontend$site$team_sheet_$_iter__13587_$_iter__13591(cljs.core.rest(s__13592__$2)));
}
} else {
return null;
}
break;
}
});})(i__13589,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams))
,null,null));
});})(i__13589,team_info,c__5478__auto__,size__5479__auto__,b__13590,s__13588__$2,temp__5804__auto__,teams))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(team_info));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team_info)], null)));

var G__13620 = (i__13589 + (1));
i__13589 = G__13620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13590),mnf_toolkit$frontend$site$team_sheet_$_iter__13587(cljs.core.chunk_rest(s__13588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13590),null);
}
} else {
var team_info = cljs.core.first(s__13588__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"team-sheet-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team_info)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),(function (){var iter__5480__auto__ = ((function (team_info,s__13588__$2,temp__5804__auto__,teams){
return (function mnf_toolkit$frontend$site$team_sheet_$_iter__13587_$_iter__13595(s__13596){
return (new cljs.core.LazySeq(null,(function (){
var s__13596__$1 = s__13596;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13596__$1);
if(temp__5804__auto____$1){
var s__13596__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13596__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13596__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13598 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13597 = (0);
while(true){
if((i__13597 < size__5479__auto__)){
var player = cljs.core._nth(c__5478__auto__,i__13597);
cljs.core.chunk_append(b__13598,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.p-2","li.p-2",-299966012),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f5f5f5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.1s ease-in-out"], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__13597,player,c__5478__auto__,size__5479__auto__,b__13598,s__13596__$2,temp__5804__auto____$1,team_info,s__13588__$2,temp__5804__auto__,teams){
return (function (p1__13546_SHARP_){
return p1__13546_SHARP_.target.style.setProperty("background-color","#e8e8e8");
});})(i__13597,player,c__5478__auto__,size__5479__auto__,b__13598,s__13596__$2,temp__5804__auto____$1,team_info,s__13588__$2,temp__5804__auto__,teams))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__13597,player,c__5478__auto__,size__5479__auto__,b__13598,s__13596__$2,temp__5804__auto____$1,team_info,s__13588__$2,temp__5804__auto__,teams){
return (function (p1__13547_SHARP_){
return p1__13547_SHARP_.target.style.setProperty("background-color","#f5f5f5");
});})(i__13597,player,c__5478__auto__,size__5479__auto__,b__13598,s__13596__$2,temp__5804__auto____$1,team_info,s__13588__$2,temp__5804__auto__,teams))
], null),player], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),player], null)));

var G__13621 = (i__13597 + (1));
i__13597 = G__13621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13598),mnf_toolkit$frontend$site$team_sheet_$_iter__13587_$_iter__13595(cljs.core.chunk_rest(s__13596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13598),null);
}
} else {
var player = cljs.core.first(s__13596__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.p-2","li.p-2",-299966012),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f5f5f5",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 4px rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.1s ease-in-out"], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (player,s__13596__$2,temp__5804__auto____$1,team_info,s__13588__$2,temp__5804__auto__,teams){
return (function (p1__13546_SHARP_){
return p1__13546_SHARP_.target.style.setProperty("background-color","#e8e8e8");
});})(player,s__13596__$2,temp__5804__auto____$1,team_info,s__13588__$2,temp__5804__auto__,teams))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (player,s__13596__$2,temp__5804__auto____$1,team_info,s__13588__$2,temp__5804__auto__,teams){
return (function (p1__13547_SHARP_){
return p1__13547_SHARP_.target.style.setProperty("background-color","#f5f5f5");
});})(player,s__13596__$2,temp__5804__auto____$1,team_info,s__13588__$2,temp__5804__auto__,teams))
], null),player], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),player], null)),mnf_toolkit$frontend$site$team_sheet_$_iter__13587_$_iter__13595(cljs.core.rest(s__13596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(team_info,s__13588__$2,temp__5804__auto__,teams))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(team_info));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team_info)], null)),mnf_toolkit$frontend$site$team_sheet_$_iter__13587(cljs.core.rest(s__13588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.Keyword(null,"name","name",1843675177),"Team 1",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"team1","team1",-1475026514).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(teams))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.Keyword(null,"name","name",1843675177),"Team 2",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"team2","team2",228351662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(teams))], null)], null));
})()], null)], null);
})], null));
});
mnf_toolkit.frontend.site.league_table_component = (function mnf_toolkit$frontend$site$league_table_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"2025 League Table"], null),(function (){var data = new cljs.core.Keyword(null,"current-league-table","current-league-table",-1575985728).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.site.app_state));
if((data == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading league table..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.data_table,data,new cljs.core.Keyword(null,"league","league",-1135910659)], null);
}
})()], null);
});
mnf_toolkit.frontend.site.league_history_component = (function mnf_toolkit$frontend$site$league_history_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"All Time League Table"], null),(function (){var data = new cljs.core.Keyword(null,"league-table","league-table",-204591893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.site.app_state));
if((data == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading league table..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.data_table,data,new cljs.core.Keyword(null,"league","league",-1135910659)], null);
}
})()], null);
});
mnf_toolkit.frontend.site.format_date = (function mnf_toolkit$frontend$site$format_date(date_str){
return (new Date(date_str)).toLocaleDateString();
});
mnf_toolkit.frontend.site.format_match_row = (function mnf_toolkit$frontend$site$format_match_row(match){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"bibs-score","bibs-score",2103443587),new cljs.core.Keyword(null,"railway","railway",-266707930),new cljs.core.Keyword(null,"bibs-team","bibs-team",-920438233),new cljs.core.Keyword(null,"colours-team","colours-team",1934672045),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bibs-players","bibs-players",1024450679),new cljs.core.Keyword(null,"colours-score","colours-score",728181084),new cljs.core.Keyword(null,"colours-players","colours-players",1361985950)],[mnf_toolkit.frontend.site.format_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(match)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-bibs-data","team-bibs-data",560126712),new cljs.core.Keyword(null,"goals","goals",-1712076283)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-bibs-data","team-bibs-data",560126712),new cljs.core.Keyword(null,"railway","railway",-266707930)], null)),"Team Bibs","Team Colours",new cljs.core.Keyword(null,"match-id","match-id",-2079885155).cljs$core$IFn$_invoke$arity$1(match),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-bibs-data","team-bibs-data",560126712),new cljs.core.Keyword(null,"players","players",-1361554569)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-colours-data","team-colours-data",960006669),new cljs.core.Keyword(null,"goals","goals",-1712076283)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-colours-data","team-colours-data",960006669),new cljs.core.Keyword(null,"players","players",-1361554569)], null))]);
});
mnf_toolkit.frontend.site.match_detail = (function mnf_toolkit$frontend$site$match_detail(p__13599){
var map__13600 = p__13599;
var map__13600__$1 = cljs.core.__destructure_map(map__13600);
var bibs_players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13600__$1,new cljs.core.Keyword(null,"bibs-players","bibs-players",1024450679));
var colours_players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13600__$1,new cljs.core.Keyword(null,"colours-players","colours-players",1361985950));
var railway = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13600__$1,new cljs.core.Keyword(null,"railway","railway",-266707930));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.match-detail","div.match-detail",-1345643966),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team-detail","div.team-detail",1497017328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Team Bibs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Players: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",bibs_players)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Railway End: ",(cljs.core.truth_(railway)?"Yes":"No")].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team-detail","div.team-detail",1497017328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Team Colours"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Players: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours_players)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Railway End: ",((cljs.core.not(railway))?"Yes":"No")].join('')], null)], null)], null);
});
mnf_toolkit.frontend.site.match_results = (function mnf_toolkit$frontend$site$match_results(){
var matches = new cljs.core.Keyword(null,"match-data","match-data",151938970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.site.app_state));
var expanded_id = new cljs.core.Keyword(null,"expanded-match","expanded-match",1731234760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.site.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Match Results"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-table","table.data-table",98624197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Team"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Score"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Score"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Team"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function mnf_toolkit$frontend$site$match_results_$_iter__13601(s__13602){
return (new cljs.core.LazySeq(null,(function (){
var s__13602__$1 = s__13602;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13602__$1);
if(temp__5804__auto__){
var s__13602__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13602__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13602__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13604 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13603 = (0);
while(true){
if((i__13603 < size__5479__auto__)){
var match = cljs.core._nth(c__5478__auto__,i__13603);
cljs.core.chunk_append(b__13604,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.clickable","tr.clickable",-520940596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13603,match,c__5478__auto__,size__5479__auto__,b__13604,s__13602__$2,temp__5804__auto__,matches,expanded_id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf_toolkit.frontend.site.app_state,cljs.core.update,new cljs.core.Keyword(null,"expanded-match","expanded-match",1731234760),((function (i__13603,match,c__5478__auto__,size__5479__auto__,b__13604,s__13602__$2,temp__5804__auto__,matches,expanded_id){
return (function (curr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match))){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match);
}
});})(i__13603,match,c__5478__auto__,size__5479__auto__,b__13604,s__13602__$2,temp__5804__auto__,matches,expanded_id))
);
});})(i__13603,match,c__5478__auto__,size__5479__auto__,b__13604,s__13602__$2,temp__5804__auto__,matches,expanded_id))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"bibs-team","bibs-team",-920438233).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"bibs-score","bibs-score",2103443587).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"colours-score","colours-score",728181084).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"colours-team","colours-team",1934672045).cljs$core$IFn$_invoke$arity$1(match)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expanded_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.match-detail-cell","td.match-detail-cell",-1221357208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.match_detail,match], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match)], null)));

var G__13622 = (i__13603 + (1));
i__13603 = G__13622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13604),mnf_toolkit$frontend$site$match_results_$_iter__13601(cljs.core.chunk_rest(s__13602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13604),null);
}
} else {
var match = cljs.core.first(s__13602__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.clickable","tr.clickable",-520940596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (match,s__13602__$2,temp__5804__auto__,matches,expanded_id){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf_toolkit.frontend.site.app_state,cljs.core.update,new cljs.core.Keyword(null,"expanded-match","expanded-match",1731234760),(function (curr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match))){
return null;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match);
}
}));
});})(match,s__13602__$2,temp__5804__auto__,matches,expanded_id))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"bibs-team","bibs-team",-920438233).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"bibs-score","bibs-score",2103443587).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"colours-score","colours-score",728181084).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"colours-team","colours-team",1934672045).cljs$core$IFn$_invoke$arity$1(match)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expanded_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.match-detail-cell","td.match-detail-cell",-1221357208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.match_detail,match], null)], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match)], null)),mnf_toolkit$frontend$site$match_results_$_iter__13601(cljs.core.rest(s__13602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mnf_toolkit.frontend.site.format_match_row,matches));
})()], null)], null)], null);
});
mnf_toolkit.frontend.site.player_info = (function mnf_toolkit$frontend$site$player_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Player Info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Coming soon"], null)], null);
});
mnf_toolkit.frontend.site.nav_link = (function mnf_toolkit$frontend$site$nav_link(id,label,active_tab){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,id))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf_toolkit.frontend.site.nav_state,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),false);
})], null),label], null);
});
mnf_toolkit.frontend.site.navigation = (function mnf_toolkit$frontend$site$navigation(){
var active_tab = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.site.app_state));
var menu_open_QMARK_ = new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.site.nav_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-brand","div.nav-brand",2139201221),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hamburger","button.hamburger",1646581668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mnf_toolkit.frontend.site.nav_state,cljs.core.update,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hamburger-box","span.hamburger-box",-43903964),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hamburger-inner","span.hamburger-inner",-740803414)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-menu","div.nav-menu",2129544906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(menu_open_QMARK_)?"is-open":null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-left","div.nav-left",-1707614279),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"team-sheet","Team Sheet",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"league-table","League Table",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"all-time-league-table","All Time League Table",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"match-results","Match Results",active_tab], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.nav_link,"players","Player Info",active_tab], null)], null)], null)], null);
});
mnf_toolkit.frontend.site.main_content = (function mnf_toolkit$frontend$site$main_content(){
var active_tab = new cljs.core.Keyword(null,"active-tab","active-tab",1102432568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.site.app_state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var G__13605 = active_tab;
switch (G__13605) {
case "team-sheet":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.team_sheet], null);

break;
case "league-table":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.league_table_component], null);

break;
case "all-time-league-table":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.league_history_component], null);

break;
case "match-results":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.match_results], null);

break;
case "players":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.player_info], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.team_sheet], null);

}
})()], null);
});
mnf_toolkit.frontend.site.app = (function mnf_toolkit$frontend$site$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.navigation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.main_content], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/tbrooksbank/mnf-toolkit",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),"Source Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," | "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tom Brooksbank \u00A9 2025"], null)], null)], null);
});
mnf_toolkit.frontend.site.init_BANG_ = (function mnf_toolkit$frontend$site$init_BANG_(){
mnf_toolkit.frontend.site.load_data_BANG_();

if(cljs.core.truth_(cljs.core.deref(mnf_toolkit.frontend.site.root_atom))){
} else {
cljs.core.reset_BANG_(mnf_toolkit.frontend.site.root_atom,reagent.dom.client.create_root(document.getElementById("app")));
}

mnf_toolkit.frontend.site.init_routing_BANG_();

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mnf_toolkit.frontend.site.root_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.site.app], null));
});
if((typeof mnf_toolkit !== 'undefined') && (typeof mnf_toolkit.frontend !== 'undefined') && (typeof mnf_toolkit.frontend.site !== 'undefined') && (typeof mnf_toolkit.frontend.site.start !== 'undefined')){
} else {
mnf_toolkit.frontend.site.start = mnf_toolkit.frontend.site.init_BANG_();
}

//# sourceMappingURL=mnf_toolkit.frontend.site.js.map
