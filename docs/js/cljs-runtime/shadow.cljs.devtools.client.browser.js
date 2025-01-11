goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21412 = arguments.length;
var i__5727__auto___21413 = (0);
while(true){
if((i__5727__auto___21413 < len__5726__auto___21412)){
args__5732__auto__.push((arguments[i__5727__auto___21413]));

var G__21414 = (i__5727__auto___21413 + (1));
i__5727__auto___21413 = G__21414;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20783){
var G__20784 = cljs.core.first(seq20783);
var seq20783__$1 = cljs.core.next(seq20783);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20784,seq20783__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20788 = cljs.core.seq(sources);
var chunk__20789 = null;
var count__20790 = (0);
var i__20791 = (0);
while(true){
if((i__20791 < count__20790)){
var map__20797 = chunk__20789.cljs$core$IIndexed$_nth$arity$2(null, i__20791);
var map__20797__$1 = cljs.core.__destructure_map(map__20797);
var src = map__20797__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20797__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20799){var e_21430 = e20799;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21430);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21430.message)].join('')));
}

var G__21431 = seq__20788;
var G__21432 = chunk__20789;
var G__21433 = count__20790;
var G__21434 = (i__20791 + (1));
seq__20788 = G__21431;
chunk__20789 = G__21432;
count__20790 = G__21433;
i__20791 = G__21434;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20788);
if(temp__5804__auto__){
var seq__20788__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20788__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20788__$1);
var G__21435 = cljs.core.chunk_rest(seq__20788__$1);
var G__21436 = c__5525__auto__;
var G__21437 = cljs.core.count(c__5525__auto__);
var G__21438 = (0);
seq__20788 = G__21435;
chunk__20789 = G__21436;
count__20790 = G__21437;
i__20791 = G__21438;
continue;
} else {
var map__20801 = cljs.core.first(seq__20788__$1);
var map__20801__$1 = cljs.core.__destructure_map(map__20801);
var src = map__20801__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20802){var e_21441 = e20802;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21441);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21441.message)].join('')));
}

var G__21442 = cljs.core.next(seq__20788__$1);
var G__21443 = null;
var G__21444 = (0);
var G__21445 = (0);
seq__20788 = G__21442;
chunk__20789 = G__21443;
count__20790 = G__21444;
i__20791 = G__21445;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20808 = cljs.core.seq(js_requires);
var chunk__20809 = null;
var count__20810 = (0);
var i__20811 = (0);
while(true){
if((i__20811 < count__20810)){
var js_ns = chunk__20809.cljs$core$IIndexed$_nth$arity$2(null, i__20811);
var require_str_21449 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21449);


var G__21450 = seq__20808;
var G__21451 = chunk__20809;
var G__21452 = count__20810;
var G__21453 = (i__20811 + (1));
seq__20808 = G__21450;
chunk__20809 = G__21451;
count__20810 = G__21452;
i__20811 = G__21453;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20808);
if(temp__5804__auto__){
var seq__20808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20808__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20808__$1);
var G__21460 = cljs.core.chunk_rest(seq__20808__$1);
var G__21461 = c__5525__auto__;
var G__21462 = cljs.core.count(c__5525__auto__);
var G__21463 = (0);
seq__20808 = G__21460;
chunk__20809 = G__21461;
count__20810 = G__21462;
i__20811 = G__21463;
continue;
} else {
var js_ns = cljs.core.first(seq__20808__$1);
var require_str_21466 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21466);


var G__21467 = cljs.core.next(seq__20808__$1);
var G__21468 = null;
var G__21469 = (0);
var G__21470 = (0);
seq__20808 = G__21467;
chunk__20809 = G__21468;
count__20810 = G__21469;
i__20811 = G__21470;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20821){
var map__20822 = p__20821;
var map__20822__$1 = cljs.core.__destructure_map(map__20822);
var msg = map__20822__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843(s__20844){
return (new cljs.core.LazySeq(null,(function (){
var s__20844__$1 = s__20844;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20844__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20849 = cljs.core.first(xs__6360__auto__);
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var src = map__20849__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20844__$1,map__20849,map__20849__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20822,map__20822__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843_$_iter__20845(s__20846){
return (new cljs.core.LazySeq(null,((function (s__20844__$1,map__20849,map__20849__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20822,map__20822__$1,msg,info,reload_info){
return (function (){
var s__20846__$1 = s__20846;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20846__$1);
if(temp__5804__auto____$1){
var s__20846__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20846__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20846__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20848 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20847 = (0);
while(true){
if((i__20847 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20847);
cljs.core.chunk_append(b__20848,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21476 = (i__20847 + (1));
i__20847 = G__21476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20848),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843_$_iter__20845(cljs.core.chunk_rest(s__20846__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20848),null);
}
} else {
var warning = cljs.core.first(s__20846__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843_$_iter__20845(cljs.core.rest(s__20846__$2)));
}
} else {
return null;
}
break;
}
});})(s__20844__$1,map__20849,map__20849__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20822,map__20822__$1,msg,info,reload_info))
,null,null));
});})(s__20844__$1,map__20849,map__20849__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20822,map__20822__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20843(cljs.core.rest(s__20844__$1)));
} else {
var G__21477 = cljs.core.rest(s__20844__$1);
s__20844__$1 = G__21477;
continue;
}
} else {
var G__21478 = cljs.core.rest(s__20844__$1);
s__20844__$1 = G__21478;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20852_21479 = cljs.core.seq(warnings);
var chunk__20853_21480 = null;
var count__20854_21481 = (0);
var i__20855_21482 = (0);
while(true){
if((i__20855_21482 < count__20854_21481)){
var map__20867_21483 = chunk__20853_21480.cljs$core$IIndexed$_nth$arity$2(null, i__20855_21482);
var map__20867_21484__$1 = cljs.core.__destructure_map(map__20867_21483);
var w_21485 = map__20867_21484__$1;
var msg_21486__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20867_21484__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20867_21484__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20867_21484__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20867_21484__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21489)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21487),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21488),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21486__$1)].join(''));


var G__21490 = seq__20852_21479;
var G__21491 = chunk__20853_21480;
var G__21492 = count__20854_21481;
var G__21493 = (i__20855_21482 + (1));
seq__20852_21479 = G__21490;
chunk__20853_21480 = G__21491;
count__20854_21481 = G__21492;
i__20855_21482 = G__21493;
continue;
} else {
var temp__5804__auto___21494 = cljs.core.seq(seq__20852_21479);
if(temp__5804__auto___21494){
var seq__20852_21495__$1 = temp__5804__auto___21494;
if(cljs.core.chunked_seq_QMARK_(seq__20852_21495__$1)){
var c__5525__auto___21496 = cljs.core.chunk_first(seq__20852_21495__$1);
var G__21497 = cljs.core.chunk_rest(seq__20852_21495__$1);
var G__21498 = c__5525__auto___21496;
var G__21499 = cljs.core.count(c__5525__auto___21496);
var G__21500 = (0);
seq__20852_21479 = G__21497;
chunk__20853_21480 = G__21498;
count__20854_21481 = G__21499;
i__20855_21482 = G__21500;
continue;
} else {
var map__20869_21501 = cljs.core.first(seq__20852_21495__$1);
var map__20869_21502__$1 = cljs.core.__destructure_map(map__20869_21501);
var w_21503 = map__20869_21502__$1;
var msg_21504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20869_21502__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20869_21502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20869_21502__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20869_21502__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21507)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21505),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21506),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21504__$1)].join(''));


var G__21508 = cljs.core.next(seq__20852_21495__$1);
var G__21509 = null;
var G__21510 = (0);
var G__21511 = (0);
seq__20852_21479 = G__21508;
chunk__20853_21480 = G__21509;
count__20854_21481 = G__21510;
i__20855_21482 = G__21511;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20816_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20816_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20885){
var map__20886 = p__20885;
var map__20886__$1 = cljs.core.__destructure_map(map__20886);
var msg = map__20886__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20886__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20886__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20887 = cljs.core.seq(updates);
var chunk__20889 = null;
var count__20890 = (0);
var i__20891 = (0);
while(true){
if((i__20891 < count__20890)){
var path = chunk__20889.cljs$core$IIndexed$_nth$arity$2(null, i__20891);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21054_21513 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21058_21514 = null;
var count__21059_21515 = (0);
var i__21060_21516 = (0);
while(true){
if((i__21060_21516 < count__21059_21515)){
var node_21517 = chunk__21058_21514.cljs$core$IIndexed$_nth$arity$2(null, i__21060_21516);
if(cljs.core.not(node_21517.shadow$old)){
var path_match_21518 = shadow.cljs.devtools.client.browser.match_paths(node_21517.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21518)){
var new_link_21519 = (function (){var G__21089 = node_21517.cloneNode(true);
G__21089.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21518),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21089;
})();
(node_21517.shadow$old = true);

(new_link_21519.onload = ((function (seq__21054_21513,chunk__21058_21514,count__21059_21515,i__21060_21516,seq__20887,chunk__20889,count__20890,i__20891,new_link_21519,path_match_21518,node_21517,path,map__20886,map__20886__$1,msg,updates,reload_info){
return (function (e){
var seq__21090_21520 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21092_21521 = null;
var count__21093_21522 = (0);
var i__21094_21523 = (0);
while(true){
if((i__21094_21523 < count__21093_21522)){
var map__21099_21524 = chunk__21092_21521.cljs$core$IIndexed$_nth$arity$2(null, i__21094_21523);
var map__21099_21525__$1 = cljs.core.__destructure_map(map__21099_21524);
var task_21526 = map__21099_21525__$1;
var fn_str_21527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21099_21525__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21099_21525__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21529 = goog.getObjectByName(fn_str_21527,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21528)].join(''));

(fn_obj_21529.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21529.cljs$core$IFn$_invoke$arity$2(path,new_link_21519) : fn_obj_21529.call(null, path,new_link_21519));


var G__21531 = seq__21090_21520;
var G__21532 = chunk__21092_21521;
var G__21533 = count__21093_21522;
var G__21534 = (i__21094_21523 + (1));
seq__21090_21520 = G__21531;
chunk__21092_21521 = G__21532;
count__21093_21522 = G__21533;
i__21094_21523 = G__21534;
continue;
} else {
var temp__5804__auto___21535 = cljs.core.seq(seq__21090_21520);
if(temp__5804__auto___21535){
var seq__21090_21536__$1 = temp__5804__auto___21535;
if(cljs.core.chunked_seq_QMARK_(seq__21090_21536__$1)){
var c__5525__auto___21537 = cljs.core.chunk_first(seq__21090_21536__$1);
var G__21538 = cljs.core.chunk_rest(seq__21090_21536__$1);
var G__21539 = c__5525__auto___21537;
var G__21540 = cljs.core.count(c__5525__auto___21537);
var G__21541 = (0);
seq__21090_21520 = G__21538;
chunk__21092_21521 = G__21539;
count__21093_21522 = G__21540;
i__21094_21523 = G__21541;
continue;
} else {
var map__21100_21542 = cljs.core.first(seq__21090_21536__$1);
var map__21100_21543__$1 = cljs.core.__destructure_map(map__21100_21542);
var task_21544 = map__21100_21543__$1;
var fn_str_21545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21100_21543__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21100_21543__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21547 = goog.getObjectByName(fn_str_21545,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21546)].join(''));

(fn_obj_21547.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21547.cljs$core$IFn$_invoke$arity$2(path,new_link_21519) : fn_obj_21547.call(null, path,new_link_21519));


var G__21548 = cljs.core.next(seq__21090_21536__$1);
var G__21549 = null;
var G__21550 = (0);
var G__21551 = (0);
seq__21090_21520 = G__21548;
chunk__21092_21521 = G__21549;
count__21093_21522 = G__21550;
i__21094_21523 = G__21551;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21517);
});})(seq__21054_21513,chunk__21058_21514,count__21059_21515,i__21060_21516,seq__20887,chunk__20889,count__20890,i__20891,new_link_21519,path_match_21518,node_21517,path,map__20886,map__20886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21518], 0));

goog.dom.insertSiblingAfter(new_link_21519,node_21517);


var G__21556 = seq__21054_21513;
var G__21557 = chunk__21058_21514;
var G__21558 = count__21059_21515;
var G__21559 = (i__21060_21516 + (1));
seq__21054_21513 = G__21556;
chunk__21058_21514 = G__21557;
count__21059_21515 = G__21558;
i__21060_21516 = G__21559;
continue;
} else {
var G__21564 = seq__21054_21513;
var G__21565 = chunk__21058_21514;
var G__21570 = count__21059_21515;
var G__21571 = (i__21060_21516 + (1));
seq__21054_21513 = G__21564;
chunk__21058_21514 = G__21565;
count__21059_21515 = G__21570;
i__21060_21516 = G__21571;
continue;
}
} else {
var G__21572 = seq__21054_21513;
var G__21573 = chunk__21058_21514;
var G__21574 = count__21059_21515;
var G__21575 = (i__21060_21516 + (1));
seq__21054_21513 = G__21572;
chunk__21058_21514 = G__21573;
count__21059_21515 = G__21574;
i__21060_21516 = G__21575;
continue;
}
} else {
var temp__5804__auto___21576 = cljs.core.seq(seq__21054_21513);
if(temp__5804__auto___21576){
var seq__21054_21577__$1 = temp__5804__auto___21576;
if(cljs.core.chunked_seq_QMARK_(seq__21054_21577__$1)){
var c__5525__auto___21578 = cljs.core.chunk_first(seq__21054_21577__$1);
var G__21579 = cljs.core.chunk_rest(seq__21054_21577__$1);
var G__21580 = c__5525__auto___21578;
var G__21581 = cljs.core.count(c__5525__auto___21578);
var G__21582 = (0);
seq__21054_21513 = G__21579;
chunk__21058_21514 = G__21580;
count__21059_21515 = G__21581;
i__21060_21516 = G__21582;
continue;
} else {
var node_21583 = cljs.core.first(seq__21054_21577__$1);
if(cljs.core.not(node_21583.shadow$old)){
var path_match_21584 = shadow.cljs.devtools.client.browser.match_paths(node_21583.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21584)){
var new_link_21585 = (function (){var G__21101 = node_21583.cloneNode(true);
G__21101.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21584),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21101;
})();
(node_21583.shadow$old = true);

(new_link_21585.onload = ((function (seq__21054_21513,chunk__21058_21514,count__21059_21515,i__21060_21516,seq__20887,chunk__20889,count__20890,i__20891,new_link_21585,path_match_21584,node_21583,seq__21054_21577__$1,temp__5804__auto___21576,path,map__20886,map__20886__$1,msg,updates,reload_info){
return (function (e){
var seq__21102_21588 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21104_21589 = null;
var count__21105_21590 = (0);
var i__21106_21591 = (0);
while(true){
if((i__21106_21591 < count__21105_21590)){
var map__21118_21592 = chunk__21104_21589.cljs$core$IIndexed$_nth$arity$2(null, i__21106_21591);
var map__21118_21593__$1 = cljs.core.__destructure_map(map__21118_21592);
var task_21594 = map__21118_21593__$1;
var fn_str_21595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118_21593__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118_21593__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21597 = goog.getObjectByName(fn_str_21595,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21596)].join(''));

(fn_obj_21597.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21597.cljs$core$IFn$_invoke$arity$2(path,new_link_21585) : fn_obj_21597.call(null, path,new_link_21585));


var G__21598 = seq__21102_21588;
var G__21599 = chunk__21104_21589;
var G__21600 = count__21105_21590;
var G__21601 = (i__21106_21591 + (1));
seq__21102_21588 = G__21598;
chunk__21104_21589 = G__21599;
count__21105_21590 = G__21600;
i__21106_21591 = G__21601;
continue;
} else {
var temp__5804__auto___21602__$1 = cljs.core.seq(seq__21102_21588);
if(temp__5804__auto___21602__$1){
var seq__21102_21603__$1 = temp__5804__auto___21602__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21102_21603__$1)){
var c__5525__auto___21604 = cljs.core.chunk_first(seq__21102_21603__$1);
var G__21605 = cljs.core.chunk_rest(seq__21102_21603__$1);
var G__21606 = c__5525__auto___21604;
var G__21607 = cljs.core.count(c__5525__auto___21604);
var G__21608 = (0);
seq__21102_21588 = G__21605;
chunk__21104_21589 = G__21606;
count__21105_21590 = G__21607;
i__21106_21591 = G__21608;
continue;
} else {
var map__21127_21609 = cljs.core.first(seq__21102_21603__$1);
var map__21127_21610__$1 = cljs.core.__destructure_map(map__21127_21609);
var task_21611 = map__21127_21610__$1;
var fn_str_21612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21127_21610__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21127_21610__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21614 = goog.getObjectByName(fn_str_21612,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21613)].join(''));

(fn_obj_21614.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21614.cljs$core$IFn$_invoke$arity$2(path,new_link_21585) : fn_obj_21614.call(null, path,new_link_21585));


var G__21618 = cljs.core.next(seq__21102_21603__$1);
var G__21619 = null;
var G__21620 = (0);
var G__21621 = (0);
seq__21102_21588 = G__21618;
chunk__21104_21589 = G__21619;
count__21105_21590 = G__21620;
i__21106_21591 = G__21621;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21583);
});})(seq__21054_21513,chunk__21058_21514,count__21059_21515,i__21060_21516,seq__20887,chunk__20889,count__20890,i__20891,new_link_21585,path_match_21584,node_21583,seq__21054_21577__$1,temp__5804__auto___21576,path,map__20886,map__20886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21584], 0));

goog.dom.insertSiblingAfter(new_link_21585,node_21583);


var G__21623 = cljs.core.next(seq__21054_21577__$1);
var G__21624 = null;
var G__21625 = (0);
var G__21626 = (0);
seq__21054_21513 = G__21623;
chunk__21058_21514 = G__21624;
count__21059_21515 = G__21625;
i__21060_21516 = G__21626;
continue;
} else {
var G__21627 = cljs.core.next(seq__21054_21577__$1);
var G__21628 = null;
var G__21629 = (0);
var G__21630 = (0);
seq__21054_21513 = G__21627;
chunk__21058_21514 = G__21628;
count__21059_21515 = G__21629;
i__21060_21516 = G__21630;
continue;
}
} else {
var G__21631 = cljs.core.next(seq__21054_21577__$1);
var G__21632 = null;
var G__21633 = (0);
var G__21634 = (0);
seq__21054_21513 = G__21631;
chunk__21058_21514 = G__21632;
count__21059_21515 = G__21633;
i__21060_21516 = G__21634;
continue;
}
}
} else {
}
}
break;
}


var G__21635 = seq__20887;
var G__21636 = chunk__20889;
var G__21637 = count__20890;
var G__21638 = (i__20891 + (1));
seq__20887 = G__21635;
chunk__20889 = G__21636;
count__20890 = G__21637;
i__20891 = G__21638;
continue;
} else {
var G__21639 = seq__20887;
var G__21640 = chunk__20889;
var G__21641 = count__20890;
var G__21642 = (i__20891 + (1));
seq__20887 = G__21639;
chunk__20889 = G__21640;
count__20890 = G__21641;
i__20891 = G__21642;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20887);
if(temp__5804__auto__){
var seq__20887__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20887__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20887__$1);
var G__21645 = cljs.core.chunk_rest(seq__20887__$1);
var G__21646 = c__5525__auto__;
var G__21647 = cljs.core.count(c__5525__auto__);
var G__21648 = (0);
seq__20887 = G__21645;
chunk__20889 = G__21646;
count__20890 = G__21647;
i__20891 = G__21648;
continue;
} else {
var path = cljs.core.first(seq__20887__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21135_21649 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21139_21650 = null;
var count__21140_21651 = (0);
var i__21141_21652 = (0);
while(true){
if((i__21141_21652 < count__21140_21651)){
var node_21653 = chunk__21139_21650.cljs$core$IIndexed$_nth$arity$2(null, i__21141_21652);
if(cljs.core.not(node_21653.shadow$old)){
var path_match_21654 = shadow.cljs.devtools.client.browser.match_paths(node_21653.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21654)){
var new_link_21655 = (function (){var G__21196 = node_21653.cloneNode(true);
G__21196.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21654),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21196;
})();
(node_21653.shadow$old = true);

(new_link_21655.onload = ((function (seq__21135_21649,chunk__21139_21650,count__21140_21651,i__21141_21652,seq__20887,chunk__20889,count__20890,i__20891,new_link_21655,path_match_21654,node_21653,path,seq__20887__$1,temp__5804__auto__,map__20886,map__20886__$1,msg,updates,reload_info){
return (function (e){
var seq__21201_21656 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21204_21657 = null;
var count__21205_21658 = (0);
var i__21206_21659 = (0);
while(true){
if((i__21206_21659 < count__21205_21658)){
var map__21215_21660 = chunk__21204_21657.cljs$core$IIndexed$_nth$arity$2(null, i__21206_21659);
var map__21215_21661__$1 = cljs.core.__destructure_map(map__21215_21660);
var task_21662 = map__21215_21661__$1;
var fn_str_21663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215_21661__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215_21661__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21665 = goog.getObjectByName(fn_str_21663,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21664)].join(''));

(fn_obj_21665.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21665.cljs$core$IFn$_invoke$arity$2(path,new_link_21655) : fn_obj_21665.call(null, path,new_link_21655));


var G__21666 = seq__21201_21656;
var G__21667 = chunk__21204_21657;
var G__21668 = count__21205_21658;
var G__21669 = (i__21206_21659 + (1));
seq__21201_21656 = G__21666;
chunk__21204_21657 = G__21667;
count__21205_21658 = G__21668;
i__21206_21659 = G__21669;
continue;
} else {
var temp__5804__auto___21670__$1 = cljs.core.seq(seq__21201_21656);
if(temp__5804__auto___21670__$1){
var seq__21201_21671__$1 = temp__5804__auto___21670__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21201_21671__$1)){
var c__5525__auto___21672 = cljs.core.chunk_first(seq__21201_21671__$1);
var G__21673 = cljs.core.chunk_rest(seq__21201_21671__$1);
var G__21674 = c__5525__auto___21672;
var G__21675 = cljs.core.count(c__5525__auto___21672);
var G__21676 = (0);
seq__21201_21656 = G__21673;
chunk__21204_21657 = G__21674;
count__21205_21658 = G__21675;
i__21206_21659 = G__21676;
continue;
} else {
var map__21216_21677 = cljs.core.first(seq__21201_21671__$1);
var map__21216_21678__$1 = cljs.core.__destructure_map(map__21216_21677);
var task_21679 = map__21216_21678__$1;
var fn_str_21680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216_21678__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216_21678__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21682 = goog.getObjectByName(fn_str_21680,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21681)].join(''));

(fn_obj_21682.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21682.cljs$core$IFn$_invoke$arity$2(path,new_link_21655) : fn_obj_21682.call(null, path,new_link_21655));


var G__21683 = cljs.core.next(seq__21201_21671__$1);
var G__21684 = null;
var G__21685 = (0);
var G__21686 = (0);
seq__21201_21656 = G__21683;
chunk__21204_21657 = G__21684;
count__21205_21658 = G__21685;
i__21206_21659 = G__21686;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21653);
});})(seq__21135_21649,chunk__21139_21650,count__21140_21651,i__21141_21652,seq__20887,chunk__20889,count__20890,i__20891,new_link_21655,path_match_21654,node_21653,path,seq__20887__$1,temp__5804__auto__,map__20886,map__20886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21654], 0));

goog.dom.insertSiblingAfter(new_link_21655,node_21653);


var G__21687 = seq__21135_21649;
var G__21688 = chunk__21139_21650;
var G__21689 = count__21140_21651;
var G__21690 = (i__21141_21652 + (1));
seq__21135_21649 = G__21687;
chunk__21139_21650 = G__21688;
count__21140_21651 = G__21689;
i__21141_21652 = G__21690;
continue;
} else {
var G__21691 = seq__21135_21649;
var G__21692 = chunk__21139_21650;
var G__21693 = count__21140_21651;
var G__21694 = (i__21141_21652 + (1));
seq__21135_21649 = G__21691;
chunk__21139_21650 = G__21692;
count__21140_21651 = G__21693;
i__21141_21652 = G__21694;
continue;
}
} else {
var G__21695 = seq__21135_21649;
var G__21696 = chunk__21139_21650;
var G__21697 = count__21140_21651;
var G__21698 = (i__21141_21652 + (1));
seq__21135_21649 = G__21695;
chunk__21139_21650 = G__21696;
count__21140_21651 = G__21697;
i__21141_21652 = G__21698;
continue;
}
} else {
var temp__5804__auto___21699__$1 = cljs.core.seq(seq__21135_21649);
if(temp__5804__auto___21699__$1){
var seq__21135_21700__$1 = temp__5804__auto___21699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21135_21700__$1)){
var c__5525__auto___21701 = cljs.core.chunk_first(seq__21135_21700__$1);
var G__21702 = cljs.core.chunk_rest(seq__21135_21700__$1);
var G__21703 = c__5525__auto___21701;
var G__21704 = cljs.core.count(c__5525__auto___21701);
var G__21705 = (0);
seq__21135_21649 = G__21702;
chunk__21139_21650 = G__21703;
count__21140_21651 = G__21704;
i__21141_21652 = G__21705;
continue;
} else {
var node_21706 = cljs.core.first(seq__21135_21700__$1);
if(cljs.core.not(node_21706.shadow$old)){
var path_match_21707 = shadow.cljs.devtools.client.browser.match_paths(node_21706.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21707)){
var new_link_21708 = (function (){var G__21226 = node_21706.cloneNode(true);
G__21226.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21707),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21226;
})();
(node_21706.shadow$old = true);

(new_link_21708.onload = ((function (seq__21135_21649,chunk__21139_21650,count__21140_21651,i__21141_21652,seq__20887,chunk__20889,count__20890,i__20891,new_link_21708,path_match_21707,node_21706,seq__21135_21700__$1,temp__5804__auto___21699__$1,path,seq__20887__$1,temp__5804__auto__,map__20886,map__20886__$1,msg,updates,reload_info){
return (function (e){
var seq__21227_21709 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21229_21710 = null;
var count__21230_21711 = (0);
var i__21231_21712 = (0);
while(true){
if((i__21231_21712 < count__21230_21711)){
var map__21240_21713 = chunk__21229_21710.cljs$core$IIndexed$_nth$arity$2(null, i__21231_21712);
var map__21240_21714__$1 = cljs.core.__destructure_map(map__21240_21713);
var task_21715 = map__21240_21714__$1;
var fn_str_21716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240_21714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240_21714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21718 = goog.getObjectByName(fn_str_21716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21717)].join(''));

(fn_obj_21718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21718.cljs$core$IFn$_invoke$arity$2(path,new_link_21708) : fn_obj_21718.call(null, path,new_link_21708));


var G__21719 = seq__21227_21709;
var G__21720 = chunk__21229_21710;
var G__21721 = count__21230_21711;
var G__21722 = (i__21231_21712 + (1));
seq__21227_21709 = G__21719;
chunk__21229_21710 = G__21720;
count__21230_21711 = G__21721;
i__21231_21712 = G__21722;
continue;
} else {
var temp__5804__auto___21723__$2 = cljs.core.seq(seq__21227_21709);
if(temp__5804__auto___21723__$2){
var seq__21227_21724__$1 = temp__5804__auto___21723__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21227_21724__$1)){
var c__5525__auto___21725 = cljs.core.chunk_first(seq__21227_21724__$1);
var G__21726 = cljs.core.chunk_rest(seq__21227_21724__$1);
var G__21727 = c__5525__auto___21725;
var G__21728 = cljs.core.count(c__5525__auto___21725);
var G__21729 = (0);
seq__21227_21709 = G__21726;
chunk__21229_21710 = G__21727;
count__21230_21711 = G__21728;
i__21231_21712 = G__21729;
continue;
} else {
var map__21245_21730 = cljs.core.first(seq__21227_21724__$1);
var map__21245_21731__$1 = cljs.core.__destructure_map(map__21245_21730);
var task_21732 = map__21245_21731__$1;
var fn_str_21733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245_21731__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21245_21731__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21735 = goog.getObjectByName(fn_str_21733,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21734)].join(''));

(fn_obj_21735.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21735.cljs$core$IFn$_invoke$arity$2(path,new_link_21708) : fn_obj_21735.call(null, path,new_link_21708));


var G__21736 = cljs.core.next(seq__21227_21724__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21227_21709 = G__21736;
chunk__21229_21710 = G__21737;
count__21230_21711 = G__21738;
i__21231_21712 = G__21739;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21706);
});})(seq__21135_21649,chunk__21139_21650,count__21140_21651,i__21141_21652,seq__20887,chunk__20889,count__20890,i__20891,new_link_21708,path_match_21707,node_21706,seq__21135_21700__$1,temp__5804__auto___21699__$1,path,seq__20887__$1,temp__5804__auto__,map__20886,map__20886__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21707], 0));

goog.dom.insertSiblingAfter(new_link_21708,node_21706);


var G__21740 = cljs.core.next(seq__21135_21700__$1);
var G__21741 = null;
var G__21742 = (0);
var G__21743 = (0);
seq__21135_21649 = G__21740;
chunk__21139_21650 = G__21741;
count__21140_21651 = G__21742;
i__21141_21652 = G__21743;
continue;
} else {
var G__21744 = cljs.core.next(seq__21135_21700__$1);
var G__21745 = null;
var G__21746 = (0);
var G__21747 = (0);
seq__21135_21649 = G__21744;
chunk__21139_21650 = G__21745;
count__21140_21651 = G__21746;
i__21141_21652 = G__21747;
continue;
}
} else {
var G__21748 = cljs.core.next(seq__21135_21700__$1);
var G__21749 = null;
var G__21750 = (0);
var G__21751 = (0);
seq__21135_21649 = G__21748;
chunk__21139_21650 = G__21749;
count__21140_21651 = G__21750;
i__21141_21652 = G__21751;
continue;
}
}
} else {
}
}
break;
}


var G__21752 = cljs.core.next(seq__20887__$1);
var G__21753 = null;
var G__21754 = (0);
var G__21755 = (0);
seq__20887 = G__21752;
chunk__20889 = G__21753;
count__20890 = G__21754;
i__20891 = G__21755;
continue;
} else {
var G__21756 = cljs.core.next(seq__20887__$1);
var G__21757 = null;
var G__21758 = (0);
var G__21759 = (0);
seq__20887 = G__21756;
chunk__20889 = G__21757;
count__20890 = G__21758;
i__20891 = G__21759;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21295){
var map__21297 = p__21295;
var map__21297__$1 = cljs.core.__destructure_map(map__21297);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21297__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21302,done,error){
var map__21303 = p__21302;
var map__21303__$1 = cljs.core.__destructure_map(map__21303);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21303__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21308,done,error){
var map__21309 = p__21308;
var map__21309__$1 = cljs.core.__destructure_map(map__21309);
var msg = map__21309__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21315){
var map__21316 = p__21315;
var map__21316__$1 = cljs.core.__destructure_map(map__21316);
var src = map__21316__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21316__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21324 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21324) : done.call(null, G__21324));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21329){
var map__21332 = p__21329;
var map__21332__$1 = cljs.core.__destructure_map(map__21332);
var msg__$1 = map__21332__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21332__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21334){var ex = e21334;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21340){
var map__21342 = p__21340;
var map__21342__$1 = cljs.core.__destructure_map(map__21342);
var env = map__21342__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21342__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21371){
var map__21372 = p__21371;
var map__21372__$1 = cljs.core.__destructure_map(map__21372);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21372__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21383){
var map__21384 = p__21383;
var map__21384__$1 = cljs.core.__destructure_map(map__21384);
var svc = map__21384__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
