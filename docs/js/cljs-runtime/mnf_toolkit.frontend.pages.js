goog.provide('mnf_toolkit.frontend.pages');
mnf_toolkit.frontend.pages.team_sheet = (function mnf_toolkit$frontend$pages$team_sheet(){
var teams = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"team1","team1",-1475026514),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"team2","team2",228351662),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"match-date","match-date",-652150414),null,new cljs.core.Keyword(null,"teams-finalised","teams-finalised",-1213879732),null], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var c__11669__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11670__auto__ = (function (){var switch__11505__auto__ = (function (state_13486){
var state_val_13487 = (state_13486[(1)]);
if((state_val_13487 === (1))){
var inst_13465 = ["https://docs.google.com/spreadsheets/d/",mnf_toolkit.frontend.data_sourcing.sheet_id,"/gviz/tq?","tqx=out:json","&sheet=team-sheet","&range=B1:E12","&headers=0"].join('');
var inst_13466 = console.log("Fetching team sheet data from:",inst_13465);
var inst_13467 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_13468 = [false];
var inst_13469 = cljs.core.PersistentHashMap.fromArrays(inst_13467,inst_13468);
var inst_13470 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_13465,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_13469], 0));
var state_13486__$1 = (function (){var statearr_13488 = state_13486;
(statearr_13488[(7)] = inst_13466);

return statearr_13488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13486__$1,(2),inst_13470);
} else {
if((state_val_13487 === (2))){
var inst_13472 = (state_13486[(2)]);
var state_13486__$1 = (function (){var statearr_13489 = state_13486;
(statearr_13489[(8)] = inst_13472);

return statearr_13489;
})();
var statearr_13490_13516 = state_13486__$1;
(statearr_13490_13516[(2)] = null);

(statearr_13490_13516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13487 === (3))){
var inst_13472 = (state_13486[(8)]);
var _ = (function (){var statearr_13491 = state_13486;
(statearr_13491[(4)] = cljs.core.cons((6),(state_13486[(4)])));

return statearr_13491;
})();
var inst_13480 = mnf_toolkit.frontend.data_sourcing.parse_google_response(inst_13472);
var inst_13481 = cljs.core.reset_BANG_(teams,inst_13480);
var ___$1 = (function (){var statearr_13492 = state_13486;
(statearr_13492[(4)] = cljs.core.rest((state_13486[(4)])));

return statearr_13492;
})();
var state_13486__$1 = state_13486;
var statearr_13493_13517 = state_13486__$1;
(statearr_13493_13517[(2)] = inst_13481);

(statearr_13493_13517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13487 === (4))){
var inst_13484 = (state_13486[(2)]);
var state_13486__$1 = state_13486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13486__$1,inst_13484);
} else {
if((state_val_13487 === (5))){
var inst_13473 = (state_13486[(2)]);
var inst_13474 = console.error("Error parsing response:",inst_13473);
var state_13486__$1 = state_13486;
var statearr_13495_13518 = state_13486__$1;
(statearr_13495_13518[(2)] = inst_13474);

(statearr_13495_13518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13487 === (6))){
var _ = (function (){var statearr_13496 = state_13486;
(statearr_13496[(4)] = cljs.core.rest((state_13486[(4)])));

return statearr_13496;
})();
var state_13486__$1 = state_13486;
var ex13494 = (state_13486__$1[(2)]);
var statearr_13497_13519 = state_13486__$1;
(statearr_13497_13519[(5)] = ex13494);


if((ex13494 instanceof Error)){
var statearr_13498_13520 = state_13486__$1;
(statearr_13498_13520[(1)] = (5));

(statearr_13498_13520[(5)] = null);

} else {
throw ex13494;

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
var mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto__ = null;
var mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto____0 = (function (){
var statearr_13499 = [null,null,null,null,null,null,null,null,null];
(statearr_13499[(0)] = mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto__);

(statearr_13499[(1)] = (1));

return statearr_13499;
});
var mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto____1 = (function (state_13486){
while(true){
var ret_value__11507__auto__ = (function (){try{while(true){
var result__11508__auto__ = switch__11505__auto__(state_13486);
if(cljs.core.keyword_identical_QMARK_(result__11508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11508__auto__;
}
break;
}
}catch (e13500){var ex__11509__auto__ = e13500;
var statearr_13501_13521 = state_13486;
(statearr_13501_13521[(2)] = ex__11509__auto__);


if(cljs.core.seq((state_13486[(4)]))){
var statearr_13502_13522 = state_13486;
(statearr_13502_13522[(1)] = cljs.core.first((state_13486[(4)])));

} else {
throw ex__11509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13523 = state_13486;
state_13486 = G__13523;
continue;
} else {
return ret_value__11507__auto__;
}
break;
}
});
mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto__ = function(state_13486){
switch(arguments.length){
case 0:
return mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto____0.call(this);
case 1:
return mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto____1.call(this,state_13486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$0 = mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto____0;
mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto__.cljs$core$IFn$_invoke$arity$1 = mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto____1;
return mnf_toolkit$frontend$pages$team_sheet_$_state_machine__11506__auto__;
})()
})();
var state__11671__auto__ = (function (){var statearr_13503 = f__11670__auto__();
(statearr_13503[(6)] = c__11669__auto__);

return statearr_13503;
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
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"teams-finalised","teams-finalised",-1213879732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(teams)),"Yes"))?"Teams Finalised":"Teams Not Yet Decided, Check Back Later")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"team-sheet-row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"team-sheet-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Team 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),(function (){var iter__5480__auto__ = (function mnf_toolkit$frontend$pages$team_sheet_$_iter__13504(s__13505){
return (new cljs.core.LazySeq(null,(function (){
var s__13505__$1 = s__13505;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13505__$1);
if(temp__5804__auto__){
var s__13505__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13505__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13505__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13507 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13506 = (0);
while(true){
if((i__13506 < size__5479__auto__)){
var player = cljs.core._nth(c__5478__auto__,i__13506);
cljs.core.chunk_append(b__13507,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416)], null)),"Yes"))?"bibs-player-box":"colours-player-box"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.Keyword(null,"Railway","Railway",453188964)], null)),"Yes"))?"railway-background":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416)], null)),"Yes"))?"bibs-player-text":"colours-player-text")], null),player], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),player], null)));

var G__13524 = (i__13506 + (1));
i__13506 = G__13524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13507),mnf_toolkit$frontend$pages$team_sheet_$_iter__13504(cljs.core.chunk_rest(s__13505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13507),null);
}
} else {
var player = cljs.core.first(s__13505__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416)], null)),"Yes"))?"bibs-player-box":"colours-player-box"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.Keyword(null,"Railway","Railway",453188964)], null)),"Yes"))?"railway-background":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416)], null)),"Yes"))?"bibs-player-text":"colours-player-text")], null),player], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),player], null)),mnf_toolkit$frontend$pages$team_sheet_$_iter__13504(cljs.core.rest(s__13505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.Keyword(null,"players","players",-1361554569)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"team-sheet-column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Team 2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),(function (){var iter__5480__auto__ = (function mnf_toolkit$frontend$pages$team_sheet_$_iter__13508(s__13509){
return (new cljs.core.LazySeq(null,(function (){
var s__13509__$1 = s__13509;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13509__$1);
if(temp__5804__auto__){
var s__13509__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13509__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13509__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13511 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13510 = (0);
while(true){
if((i__13510 < size__5479__auto__)){
var player = cljs.core._nth(c__5478__auto__,i__13510);
cljs.core.chunk_append(b__13511,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416)], null)),"Yes"))?"bibs-player-box":"colours-player-box"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.Keyword(null,"Railway","Railway",453188964)], null)),"Yes"))?"railway-background":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416)], null)),"Yes"))?"bibs-player-text":"colours-player-text")], null),player], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),player], null)));

var G__13525 = (i__13510 + (1));
i__13510 = G__13525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13511),mnf_toolkit$frontend$pages$team_sheet_$_iter__13508(cljs.core.chunk_rest(s__13509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13511),null);
}
} else {
var player = cljs.core.first(s__13509__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416)], null)),"Yes"))?"bibs-player-box":"colours-player-box"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.Keyword(null,"Railway","Railway",453188964)], null)),"Yes"))?"railway-background":null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416)], null)),"Yes"))?"bibs-player-text":"colours-player-text")], null),player], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),player], null)),mnf_toolkit$frontend$pages$team_sheet_$_iter__13508(cljs.core.rest(s__13509__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(teams),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.Keyword(null,"players","players",-1361554569)], null)));
})()], null)], null)], null)], null);
})], null));
});
mnf_toolkit.frontend.pages.league_table_component = (function mnf_toolkit$frontend$pages$league_table_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"2025 League Table"], null),(function (){var data = new cljs.core.Keyword(null,"current-league-table","current-league-table",-1575985728).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.states.app_state));
if((data == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading league table..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.tables.data_table,data,new cljs.core.Keyword(null,"league","league",-1135910659)], null);
}
})()], null);
});
mnf_toolkit.frontend.pages.league_history_component = (function mnf_toolkit$frontend$pages$league_history_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"All Time League Table"], null),(function (){var data = new cljs.core.Keyword(null,"league-table","league-table",-204591893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.states.app_state));
if((data == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading league table..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mnf_toolkit.frontend.tables.data_table,data,new cljs.core.Keyword(null,"league","league",-1135910659)], null);
}
})()], null);
});
mnf_toolkit.frontend.pages.player_info = (function mnf_toolkit$frontend$pages$player_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Player Info"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Coming soon"], null)], null);
});
mnf_toolkit.frontend.pages.match_results = (function mnf_toolkit$frontend$pages$match_results(){
var matches = new cljs.core.Keyword(null,"match-data","match-data",151938970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mnf_toolkit.frontend.states.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Match Results"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.data-table","table.data-table",98624197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Team"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Score"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Score"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Team"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function mnf_toolkit$frontend$pages$match_results_$_iter__13512(s__13513){
return (new cljs.core.LazySeq(null,(function (){
var s__13513__$1 = s__13513;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13513__$1);
if(temp__5804__auto__){
var s__13513__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13513__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__13513__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__13515 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__13514 = (0);
while(true){
if((i__13514 < size__5479__auto__)){
var match = cljs.core._nth(c__5478__auto__,i__13514);
cljs.core.chunk_append(b__13515,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"bibs-team","bibs-team",-920438233).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"bibs-score","bibs-score",2103443587).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"colours-score","colours-score",728181084).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"colours-team","colours-team",1934672045).cljs$core$IFn$_invoke$arity$1(match)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match)], null)));

var G__13526 = (i__13514 + (1));
i__13514 = G__13526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13515),mnf_toolkit$frontend$pages$match_results_$_iter__13512(cljs.core.chunk_rest(s__13513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13515),null);
}
} else {
var match = cljs.core.first(s__13513__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"bibs-team","bibs-team",-920438233).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"bibs-score","bibs-score",2103443587).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"colours-score","colours-score",728181084).cljs$core$IFn$_invoke$arity$1(match)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"colours-team","colours-team",1934672045).cljs$core$IFn$_invoke$arity$1(match)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match)], null)),mnf_toolkit$frontend$pages$match_results_$_iter__13512(cljs.core.rest(s__13513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mnf_toolkit.frontend.tables.format_match_row,matches));
})()], null)], null)], null);
});

//# sourceMappingURL=mnf_toolkit.frontend.pages.js.map
