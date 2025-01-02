goog.provide('mnf_toolkit.frontend.site');
/**
 * @define {string}
 */
mnf_toolkit.frontend.site.BASE_PATH = goog.define("mnf_toolkit.frontend.site.BASE_PATH","");
if((typeof mnf_toolkit !== 'undefined') && (typeof mnf_toolkit.frontend !== 'undefined') && (typeof mnf_toolkit.frontend.site !== 'undefined') && (typeof mnf_toolkit.frontend.site.root_atom !== 'undefined')){
} else {
mnf_toolkit.frontend.site.root_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
mnf_toolkit.frontend.site.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active-tab","active-tab",1102432568),"team-sheet",new cljs.core.Keyword(null,"league-table","league-table",-204591893),null,new cljs.core.Keyword(null,"player-info","player-info",-859643705),null], null));
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

var G__12074 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__12074) : callback.call(null, G__12074));
})).catch((function (error){
return console.error("Error loading",file_path,":",error);
}));
});
mnf_toolkit.frontend.site.load_data_BANG_ = (function mnf_toolkit$frontend$site$load_data_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading data..."], 0));

return mnf_toolkit.frontend.site.load_edn_file("/data/mnf-data.edn",(function (p1__12075_SHARP_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data loaded"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mnf_toolkit.frontend.site.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"league-table","league-table",-204591893),new cljs.core.Keyword(null,"league-table","league-table",-204591893).cljs$core$IFn$_invoke$arity$1(p1__12075_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"player-info","player-info",-859643705),new cljs.core.Keyword(null,"player-info","player-info",-859643705).cljs$core$IFn$_invoke$arity$1(p1__12075_SHARP_)], 0));
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
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__12076_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__12076_SHARP_,key_name);
}),comparator,data);
});
mnf_toolkit.frontend.site.league_columns = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"played","played",-1713723590),new cljs.core.Keyword(null,"won","won",910394405),new cljs.core.Keyword(null,"drawn","drawn",2034398063),new cljs.core.Keyword(null,"lost","lost",-744692984),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"gf","gf",-2141204266),new cljs.core.Keyword(null,"ga","ga",-1797526459),new cljs.core.Keyword(null,"gd","gd",-246467758)], null);
mnf_toolkit.frontend.site.player_columns = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-rating","current-rating",649409374),new cljs.core.Keyword(null,"lifetime-rating","lifetime-rating",1495253321),new cljs.core.Keyword(null,"baseline-rating","baseline-rating",1442819916)], null);
mnf_toolkit.frontend.site.data_table = (function mnf_toolkit$frontend$site$data_table(data,table_type){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),null,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null));
var columns = (function (){var G__12077 = table_type;
var G__12077__$1 = (((G__12077 instanceof cljs.core.Keyword))?G__12077.fqn:null);
switch (G__12077__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-table","table.data-table",98624197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function mnf_toolkit$frontend$site$data_table_$_iter__12078(s__12079){
return (new cljs.core.LazySeq(null,(function (){
var s__12079__$1 = s__12079;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12079__$1);
if(temp__5804__auto__){
var s__12079__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12079__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12079__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12081 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12080 = (0);
while(true){
if((i__12080 < size__5479__auto__)){
var header = cljs.core._nth(c__5478__auto__,i__12080);
cljs.core.chunk_append(b__12081,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sortable","th.sortable",-1132266161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__12080,header,c__5478__auto__,size__5479__auto__,b__12081,s__12079__$2,temp__5804__auto__,state,columns){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (i__12080,header,c__5478__auto__,size__5479__auto__,b__12081,s__12079__$2,temp__5804__auto__,state,columns){
return (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(s),header)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),cljs.core.not);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),header,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null);
}
});})(i__12080,header,c__5478__auto__,size__5479__auto__,b__12081,s__12079__$2,temp__5804__auto__,state,columns))
);
});})(i__12080,header,c__5478__auto__,size__5479__auto__,b__12081,s__12079__$2,temp__5804__auto__,state,columns))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(cljs.core.truth_(new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"sort-asc":"sort-desc"):null)], null),cljs.core.name(header)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)));

var G__12096 = (i__12080 + (1));
i__12080 = G__12096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12081),mnf_toolkit$frontend$site$data_table_$_iter__12078(cljs.core.chunk_rest(s__12079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12081),null);
}
} else {
var header = cljs.core.first(s__12079__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sortable","th.sortable",-1132266161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (header,s__12079__$2,temp__5804__auto__,state,columns){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(s),header)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),cljs.core.not);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),header,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null);
}
}));
});})(header,s__12079__$2,temp__5804__auto__,state,columns))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(cljs.core.truth_(new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"sort-asc":"sort-desc"):null)], null),cljs.core.name(header)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)),mnf_toolkit$frontend$site$data_table_$_iter__12078(cljs.core.rest(s__12079__$2)));
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
var iter__5480__auto__ = (function mnf_toolkit$frontend$site$data_table_$_iter__12082(s__12083){
return (new cljs.core.LazySeq(null,(function (){
var s__12083__$1 = s__12083;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__12083__$1);
if(temp__5804__auto__){
var s__12083__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12083__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12083__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12085 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12084 = (0);
while(true){
if((i__12084 < size__5479__auto__)){
var row = cljs.core._nth(c__5478__auto__,i__12084);
cljs.core.chunk_append(b__12085,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = ((function (i__12084,row,c__5478__auto__,size__5479__auto__,b__12085,s__12083__$2,temp__5804__auto__,sorted_data,state,columns){
return (function mnf_toolkit$frontend$site$data_table_$_iter__12082_$_iter__12086(s__12087){
return (new cljs.core.LazySeq(null,((function (i__12084,row,c__5478__auto__,size__5479__auto__,b__12085,s__12083__$2,temp__5804__auto__,sorted_data,state,columns){
return (function (){
var s__12087__$1 = s__12087;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12087__$1);
if(temp__5804__auto____$1){
var s__12087__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12087__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__12087__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__12089 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__12088 = (0);
while(true){
if((i__12088 < size__5479__auto____$1)){
var header = cljs.core._nth(c__5478__auto____$1,i__12088);
cljs.core.chunk_append(b__12089,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)));

var G__12097 = (i__12088 + (1));
i__12088 = G__12097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12089),mnf_toolkit$frontend$site$data_table_$_iter__12082_$_iter__12086(cljs.core.chunk_rest(s__12087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12089),null);
}
} else {
var header = cljs.core.first(s__12087__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)),mnf_toolkit$frontend$site$data_table_$_iter__12082_$_iter__12086(cljs.core.rest(s__12087__$2)));
}
} else {
return null;
}
break;
}
});})(i__12084,row,c__5478__auto__,size__5479__auto__,b__12085,s__12083__$2,temp__5804__auto__,sorted_data,state,columns))
,null,null));
});})(i__12084,row,c__5478__auto__,size__5479__auto__,b__12085,s__12083__$2,temp__5804__auto__,sorted_data,state,columns))
;
return iter__5480__auto__(columns);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__12098 = (i__12084 + (1));
i__12084 = G__12098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12085),mnf_toolkit$frontend$site$data_table_$_iter__12082(cljs.core.chunk_rest(s__12083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12085),null);
}
} else {
var row = cljs.core.first(s__12083__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = ((function (row,s__12083__$2,temp__5804__auto__,sorted_data,state,columns){
return (function mnf_toolkit$frontend$site$data_table_$_iter__12082_$_iter__12090(s__12091){
return (new cljs.core.LazySeq(null,(function (){
var s__12091__$1 = s__12091;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__12091__$1);
if(temp__5804__auto____$1){
var s__12091__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12091__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12091__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12093 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12092 = (0);
while(true){
if((i__12092 < size__5479__auto__)){
var header = cljs.core._nth(c__5478__auto__,i__12092);
cljs.core.chunk_append(b__12093,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)));

var G__12099 = (i__12092 + (1));
i__12092 = G__12099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12093),mnf_toolkit$frontend$site$data_table_$_iter__12082_$_iter__12090(cljs.core.chunk_rest(s__12091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12093),null);
}
} else {
var header = cljs.core.first(s__12091__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.site.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)),mnf_toolkit$frontend$site$data_table_$_iter__12082_$_iter__12090(cljs.core.rest(s__12091__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__12083__$2,temp__5804__auto__,sorted_data,state,columns))
;
return iter__5480__auto__(columns);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),mnf_toolkit$frontend$site$data_table_$_iter__12082(cljs.core.rest(s__12083__$2)));
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
mnf_toolkit.frontend.site.team_sheet = (function mnf_toolkit$frontend$site$team_sheet(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Team Sheet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Coming soon"], null)], null);
});
mnf_toolkit.frontend.site.league_table_component = (function mnf_toolkit$frontend$site$league_table_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"League Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Coming soon"], null)], null);
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
mnf_toolkit.frontend.site.match_results = (function mnf_toolkit$frontend$site$match_results(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Match Results"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Coming soon"], null)], null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),(function (){var G__12094 = active_tab;
switch (G__12094) {
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
