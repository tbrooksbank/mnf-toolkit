goog.provide('mnf_toolkit.frontend.tables');
mnf_toolkit.frontend.tables.format_value = (function mnf_toolkit$frontend$tables$format_value(v){
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
mnf_toolkit.frontend.tables.sort_by_key = (function mnf_toolkit$frontend$tables$sort_by_key(data,key_name,ascending_QMARK_){
var comparator = (cljs.core.truth_(ascending_QMARK_)?cljs.core.compare:cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.compare));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__13263_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__13263_SHARP_,key_name);
}),comparator,data);
});
mnf_toolkit.frontend.tables.league_columns = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"played","played",-1713723590),new cljs.core.Keyword(null,"won","won",910394405),new cljs.core.Keyword(null,"drawn","drawn",2034398063),new cljs.core.Keyword(null,"lost","lost",-744692984),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"gf","gf",-2141204266),new cljs.core.Keyword(null,"ga","ga",-1797526459),new cljs.core.Keyword(null,"gd","gd",-246467758)], null);
mnf_toolkit.frontend.tables.player_columns = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"current-rating","current-rating",649409374),new cljs.core.Keyword(null,"lifetime-rating","lifetime-rating",1495253321),new cljs.core.Keyword(null,"baseline-rating","baseline-rating",1442819916)], null);
mnf_toolkit.frontend.tables.data_table = (function mnf_toolkit$frontend$tables$data_table(data,table_type){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),null,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null));
var columns = (function (){var G__13264 = table_type;
var G__13264__$1 = (((G__13264 instanceof cljs.core.Keyword))?G__13264.fqn:null);
switch (G__13264__$1) {
case "league":
return mnf_toolkit.frontend.tables.league_columns;

break;
case "player":
return mnf_toolkit.frontend.tables.player_columns;

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-table","table.data-table",98624197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function mnf_toolkit$frontend$tables$data_table_$_iter__13265(s__13266){
return (new cljs.core.LazySeq(null,(function (){
var s__13266__$1 = s__13266;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13266__$1);
if(temp__5804__auto__){
var s__13266__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13266__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13266__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13268 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13267 = (0);
while(true){
if((i__13267 < size__5479__auto__)){
var header = cljs.core._nth(c__5478__auto__,i__13267);
cljs.core.chunk_append(b__13268,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sortable","th.sortable",-1132266161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13267,header,c__5478__auto__,size__5479__auto__,b__13268,s__13266__$2,temp__5804__auto__,state,columns){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (i__13267,header,c__5478__auto__,size__5479__auto__,b__13268,s__13266__$2,temp__5804__auto__,state,columns){
return (function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(s),header)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),cljs.core.not);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),header,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null);
}
});})(i__13267,header,c__5478__auto__,size__5479__auto__,b__13268,s__13266__$2,temp__5804__auto__,state,columns))
);
});})(i__13267,header,c__5478__auto__,size__5479__auto__,b__13268,s__13266__$2,temp__5804__auto__,state,columns))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(cljs.core.truth_(new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"sort-asc":"sort-desc"):null)], null),cljs.core.name(header)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)));

var G__13284 = (i__13267 + (1));
i__13267 = G__13284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13268),mnf_toolkit$frontend$tables$data_table_$_iter__13265(cljs.core.chunk_rest(s__13266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13268),null);
}
} else {
var header = cljs.core.first(s__13266__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.sortable","th.sortable",-1132266161),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (header,s__13266__$2,temp__5804__auto__,state,columns){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(s),header)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),cljs.core.not);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),header,new cljs.core.Keyword(null,"ascending?","ascending?",715983116),true], null);
}
}));
});})(header,s__13266__$2,temp__5804__auto__,state,columns))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?(cljs.core.truth_(new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"sort-asc":"sort-desc"):null)], null),cljs.core.name(header)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),header], null)),mnf_toolkit$frontend$tables$data_table_$_iter__13265(cljs.core.rest(s__13266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(columns);
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var sorted_data = (cljs.core.truth_(new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?mnf_toolkit.frontend.tables.sort_by_key(data__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"ascending?","ascending?",715983116).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))):data__$1);
var iter__5480__auto__ = (function mnf_toolkit$frontend$tables$data_table_$_iter__13269(s__13270){
return (new cljs.core.LazySeq(null,(function (){
var s__13270__$1 = s__13270;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13270__$1);
if(temp__5804__auto__){
var s__13270__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13270__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13270__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13272 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13271 = (0);
while(true){
if((i__13271 < size__5479__auto__)){
var row = cljs.core._nth(c__5478__auto__,i__13271);
cljs.core.chunk_append(b__13272,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = ((function (i__13271,row,c__5478__auto__,size__5479__auto__,b__13272,s__13270__$2,temp__5804__auto__,sorted_data,state,columns){
return (function mnf_toolkit$frontend$tables$data_table_$_iter__13269_$_iter__13273(s__13274){
return (new cljs.core.LazySeq(null,((function (i__13271,row,c__5478__auto__,size__5479__auto__,b__13272,s__13270__$2,temp__5804__auto__,sorted_data,state,columns){
return (function (){
var s__13274__$1 = s__13274;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13274__$1);
if(temp__5804__auto____$1){
var s__13274__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13274__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__13274__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__13276 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__13275 = (0);
while(true){
if((i__13275 < size__5479__auto____$1)){
var header = cljs.core._nth(c__5478__auto____$1,i__13275);
cljs.core.chunk_append(b__13276,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.tables.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)));

var G__13285 = (i__13275 + (1));
i__13275 = G__13285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13276),mnf_toolkit$frontend$tables$data_table_$_iter__13269_$_iter__13273(cljs.core.chunk_rest(s__13274__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13276),null);
}
} else {
var header = cljs.core.first(s__13274__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.tables.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)),mnf_toolkit$frontend$tables$data_table_$_iter__13269_$_iter__13273(cljs.core.rest(s__13274__$2)));
}
} else {
return null;
}
break;
}
});})(i__13271,row,c__5478__auto__,size__5479__auto__,b__13272,s__13270__$2,temp__5804__auto__,sorted_data,state,columns))
,null,null));
});})(i__13271,row,c__5478__auto__,size__5479__auto__,b__13272,s__13270__$2,temp__5804__auto__,sorted_data,state,columns))
;
return iter__5480__auto__(columns);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)));

var G__13286 = (i__13271 + (1));
i__13271 = G__13286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13272),mnf_toolkit$frontend$tables$data_table_$_iter__13269(cljs.core.chunk_rest(s__13270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13272),null);
}
} else {
var row = cljs.core.first(s__13270__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = ((function (row,s__13270__$2,temp__5804__auto__,sorted_data,state,columns){
return (function mnf_toolkit$frontend$tables$data_table_$_iter__13269_$_iter__13277(s__13278){
return (new cljs.core.LazySeq(null,(function (){
var s__13278__$1 = s__13278;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__13278__$1);
if(temp__5804__auto____$1){
var s__13278__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13278__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13278__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13280 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13279 = (0);
while(true){
if((i__13279 < size__5479__auto__)){
var header = cljs.core._nth(c__5478__auto__,i__13279);
cljs.core.chunk_append(b__13280,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.tables.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)));

var G__13287 = (i__13279 + (1));
i__13279 = G__13287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13280),mnf_toolkit$frontend$tables$data_table_$_iter__13269_$_iter__13277(cljs.core.chunk_rest(s__13278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13280),null);
}
} else {
var header = cljs.core.first(s__13278__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),mnf_toolkit.frontend.tables.format_value(cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,header))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(row)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(header)].join('')], null)),mnf_toolkit$frontend$tables$data_table_$_iter__13269_$_iter__13277(cljs.core.rest(s__13278__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__13270__$2,temp__5804__auto__,sorted_data,state,columns))
;
return iter__5480__auto__(columns);
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.hash(row)], null)),mnf_toolkit$frontend$tables$data_table_$_iter__13269(cljs.core.rest(s__13270__$2)));
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
mnf_toolkit.frontend.tables.format_date = (function mnf_toolkit$frontend$tables$format_date(date_str){
return (new Date(date_str)).toLocaleDateString();
});
mnf_toolkit.frontend.tables.format_match_row = (function mnf_toolkit$frontend$tables$format_match_row(match){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"bibs-score","bibs-score",2103443587),new cljs.core.Keyword(null,"railway","railway",-266707930),new cljs.core.Keyword(null,"bibs-team","bibs-team",-920438233),new cljs.core.Keyword(null,"colours-team","colours-team",1934672045),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bibs-players","bibs-players",1024450679),new cljs.core.Keyword(null,"colours-score","colours-score",728181084),new cljs.core.Keyword(null,"colours-players","colours-players",1361985950)],[mnf_toolkit.frontend.tables.format_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(match)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-bibs-data","team-bibs-data",560126712),new cljs.core.Keyword(null,"goals","goals",-1712076283)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-bibs-data","team-bibs-data",560126712),new cljs.core.Keyword(null,"railway","railway",-266707930)], null)),"Team Bibs","Team Colours",new cljs.core.Keyword(null,"match-id","match-id",-2079885155).cljs$core$IFn$_invoke$arity$1(match),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-bibs-data","team-bibs-data",560126712),new cljs.core.Keyword(null,"players","players",-1361554569)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-colours-data","team-colours-data",960006669),new cljs.core.Keyword(null,"goals","goals",-1712076283)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-colours-data","team-colours-data",960006669),new cljs.core.Keyword(null,"players","players",-1361554569)], null))]);
});
mnf_toolkit.frontend.tables.match_detail = (function mnf_toolkit$frontend$tables$match_detail(p__13281){
var map__13282 = p__13281;
var map__13282__$1 = cljs.core.__destructure_map(map__13282);
var bibs_players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13282__$1,new cljs.core.Keyword(null,"bibs-players","bibs-players",1024450679));
var colours_players = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13282__$1,new cljs.core.Keyword(null,"colours-players","colours-players",1361985950));
var railway = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13282__$1,new cljs.core.Keyword(null,"railway","railway",-266707930));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.match-detail","div.match-detail",-1345643966),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team-detail","div.team-detail",1497017328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Team Bibs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Players: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",bibs_players)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Railway End: ",(cljs.core.truth_(railway)?"Yes":"No")].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.team-detail","div.team-detail",1497017328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Team Colours"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Players: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours_players)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Railway End: ",((cljs.core.not(railway))?"Yes":"No")].join('')], null)], null)], null);
});

//# sourceMappingURL=mnf_toolkit.frontend.tables.js.map
