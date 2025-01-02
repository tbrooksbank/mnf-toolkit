goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21459 = arguments.length;
var i__5727__auto___21460 = (0);
while(true){
if((i__5727__auto___21460 < len__5726__auto___21459)){
args__5732__auto__.push((arguments[i__5727__auto___21460]));

var G__21461 = (i__5727__auto___21460 + (1));
i__5727__auto___21460 = G__21461;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21021){
var G__21022 = cljs.core.first(seq21021);
var seq21021__$1 = cljs.core.next(seq21021);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21022,seq21021__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21074 = cljs.core.seq(sources);
var chunk__21075 = null;
var count__21076 = (0);
var i__21077 = (0);
while(true){
if((i__21077 < count__21076)){
var map__21101 = chunk__21075.cljs$core$IIndexed$_nth$arity$2(null, i__21077);
var map__21101__$1 = cljs.core.__destructure_map(map__21101);
var src = map__21101__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21102){var e_21462 = e21102;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21462);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21462.message)].join('')));
}

var G__21463 = seq__21074;
var G__21464 = chunk__21075;
var G__21465 = count__21076;
var G__21466 = (i__21077 + (1));
seq__21074 = G__21463;
chunk__21075 = G__21464;
count__21076 = G__21465;
i__21077 = G__21466;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21074);
if(temp__5804__auto__){
var seq__21074__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21074__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21074__$1);
var G__21467 = cljs.core.chunk_rest(seq__21074__$1);
var G__21468 = c__5525__auto__;
var G__21469 = cljs.core.count(c__5525__auto__);
var G__21470 = (0);
seq__21074 = G__21467;
chunk__21075 = G__21468;
count__21076 = G__21469;
i__21077 = G__21470;
continue;
} else {
var map__21108 = cljs.core.first(seq__21074__$1);
var map__21108__$1 = cljs.core.__destructure_map(map__21108);
var src = map__21108__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21109){var e_21471 = e21109;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21471);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21471.message)].join('')));
}

var G__21472 = cljs.core.next(seq__21074__$1);
var G__21473 = null;
var G__21474 = (0);
var G__21475 = (0);
seq__21074 = G__21472;
chunk__21075 = G__21473;
count__21076 = G__21474;
i__21077 = G__21475;
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
var seq__21110 = cljs.core.seq(js_requires);
var chunk__21111 = null;
var count__21112 = (0);
var i__21113 = (0);
while(true){
if((i__21113 < count__21112)){
var js_ns = chunk__21111.cljs$core$IIndexed$_nth$arity$2(null, i__21113);
var require_str_21478 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21478);


var G__21479 = seq__21110;
var G__21480 = chunk__21111;
var G__21481 = count__21112;
var G__21482 = (i__21113 + (1));
seq__21110 = G__21479;
chunk__21111 = G__21480;
count__21112 = G__21481;
i__21113 = G__21482;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21110);
if(temp__5804__auto__){
var seq__21110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21110__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21110__$1);
var G__21483 = cljs.core.chunk_rest(seq__21110__$1);
var G__21484 = c__5525__auto__;
var G__21485 = cljs.core.count(c__5525__auto__);
var G__21486 = (0);
seq__21110 = G__21483;
chunk__21111 = G__21484;
count__21112 = G__21485;
i__21113 = G__21486;
continue;
} else {
var js_ns = cljs.core.first(seq__21110__$1);
var require_str_21487 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21487);


var G__21488 = cljs.core.next(seq__21110__$1);
var G__21489 = null;
var G__21490 = (0);
var G__21491 = (0);
seq__21110 = G__21488;
chunk__21111 = G__21489;
count__21112 = G__21490;
i__21113 = G__21491;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21125){
var map__21126 = p__21125;
var map__21126__$1 = cljs.core.__destructure_map(map__21126);
var msg = map__21126__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127(s__21128){
return (new cljs.core.LazySeq(null,(function (){
var s__21128__$1 = s__21128;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21128__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21133 = cljs.core.first(xs__6360__auto__);
var map__21133__$1 = cljs.core.__destructure_map(map__21133);
var src = map__21133__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21128__$1,map__21133,map__21133__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21126,map__21126__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127_$_iter__21129(s__21130){
return (new cljs.core.LazySeq(null,((function (s__21128__$1,map__21133,map__21133__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21126,map__21126__$1,msg,info,reload_info){
return (function (){
var s__21130__$1 = s__21130;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21130__$1);
if(temp__5804__auto____$1){
var s__21130__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21130__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21130__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21132 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21131 = (0);
while(true){
if((i__21131 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21131);
cljs.core.chunk_append(b__21132,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21492 = (i__21131 + (1));
i__21131 = G__21492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21132),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127_$_iter__21129(cljs.core.chunk_rest(s__21130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21132),null);
}
} else {
var warning = cljs.core.first(s__21130__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127_$_iter__21129(cljs.core.rest(s__21130__$2)));
}
} else {
return null;
}
break;
}
});})(s__21128__$1,map__21133,map__21133__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21126,map__21126__$1,msg,info,reload_info))
,null,null));
});})(s__21128__$1,map__21133,map__21133__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21126,map__21126__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21127(cljs.core.rest(s__21128__$1)));
} else {
var G__21493 = cljs.core.rest(s__21128__$1);
s__21128__$1 = G__21493;
continue;
}
} else {
var G__21494 = cljs.core.rest(s__21128__$1);
s__21128__$1 = G__21494;
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
var seq__21135_21495 = cljs.core.seq(warnings);
var chunk__21136_21496 = null;
var count__21137_21497 = (0);
var i__21138_21498 = (0);
while(true){
if((i__21138_21498 < count__21137_21497)){
var map__21142_21499 = chunk__21136_21496.cljs$core$IIndexed$_nth$arity$2(null, i__21138_21498);
var map__21142_21500__$1 = cljs.core.__destructure_map(map__21142_21499);
var w_21501 = map__21142_21500__$1;
var msg_21502__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21142_21500__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21142_21500__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21142_21500__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21142_21500__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21505)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21503),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21504),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21502__$1)].join(''));


var G__21506 = seq__21135_21495;
var G__21507 = chunk__21136_21496;
var G__21508 = count__21137_21497;
var G__21509 = (i__21138_21498 + (1));
seq__21135_21495 = G__21506;
chunk__21136_21496 = G__21507;
count__21137_21497 = G__21508;
i__21138_21498 = G__21509;
continue;
} else {
var temp__5804__auto___21510 = cljs.core.seq(seq__21135_21495);
if(temp__5804__auto___21510){
var seq__21135_21511__$1 = temp__5804__auto___21510;
if(cljs.core.chunked_seq_QMARK_(seq__21135_21511__$1)){
var c__5525__auto___21512 = cljs.core.chunk_first(seq__21135_21511__$1);
var G__21513 = cljs.core.chunk_rest(seq__21135_21511__$1);
var G__21514 = c__5525__auto___21512;
var G__21515 = cljs.core.count(c__5525__auto___21512);
var G__21516 = (0);
seq__21135_21495 = G__21513;
chunk__21136_21496 = G__21514;
count__21137_21497 = G__21515;
i__21138_21498 = G__21516;
continue;
} else {
var map__21147_21517 = cljs.core.first(seq__21135_21511__$1);
var map__21147_21518__$1 = cljs.core.__destructure_map(map__21147_21517);
var w_21519 = map__21147_21518__$1;
var msg_21520__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21518__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21518__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21518__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147_21518__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21523)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21521),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21522),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21520__$1)].join(''));


var G__21524 = cljs.core.next(seq__21135_21511__$1);
var G__21525 = null;
var G__21526 = (0);
var G__21527 = (0);
seq__21135_21495 = G__21524;
chunk__21136_21496 = G__21525;
count__21137_21497 = G__21526;
i__21138_21498 = G__21527;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21120_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21120_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21158){
var map__21159 = p__21158;
var map__21159__$1 = cljs.core.__destructure_map(map__21159);
var msg = map__21159__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21159__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21159__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21160 = cljs.core.seq(updates);
var chunk__21162 = null;
var count__21163 = (0);
var i__21164 = (0);
while(true){
if((i__21164 < count__21163)){
var path = chunk__21162.cljs$core$IIndexed$_nth$arity$2(null, i__21164);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21285_21532 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21289_21533 = null;
var count__21290_21534 = (0);
var i__21291_21535 = (0);
while(true){
if((i__21291_21535 < count__21290_21534)){
var node_21536 = chunk__21289_21533.cljs$core$IIndexed$_nth$arity$2(null, i__21291_21535);
if(cljs.core.not(node_21536.shadow$old)){
var path_match_21537 = shadow.cljs.devtools.client.browser.match_paths(node_21536.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21537)){
var new_link_21538 = (function (){var G__21324 = node_21536.cloneNode(true);
G__21324.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21537),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21324;
})();
(node_21536.shadow$old = true);

(new_link_21538.onload = ((function (seq__21285_21532,chunk__21289_21533,count__21290_21534,i__21291_21535,seq__21160,chunk__21162,count__21163,i__21164,new_link_21538,path_match_21537,node_21536,path,map__21159,map__21159__$1,msg,updates,reload_info){
return (function (e){
var seq__21325_21541 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21327_21542 = null;
var count__21328_21543 = (0);
var i__21329_21544 = (0);
while(true){
if((i__21329_21544 < count__21328_21543)){
var map__21336_21545 = chunk__21327_21542.cljs$core$IIndexed$_nth$arity$2(null, i__21329_21544);
var map__21336_21546__$1 = cljs.core.__destructure_map(map__21336_21545);
var task_21547 = map__21336_21546__$1;
var fn_str_21548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21336_21546__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21336_21546__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21550 = goog.getObjectByName(fn_str_21548,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21549)].join(''));

(fn_obj_21550.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21550.cljs$core$IFn$_invoke$arity$2(path,new_link_21538) : fn_obj_21550.call(null, path,new_link_21538));


var G__21551 = seq__21325_21541;
var G__21552 = chunk__21327_21542;
var G__21553 = count__21328_21543;
var G__21554 = (i__21329_21544 + (1));
seq__21325_21541 = G__21551;
chunk__21327_21542 = G__21552;
count__21328_21543 = G__21553;
i__21329_21544 = G__21554;
continue;
} else {
var temp__5804__auto___21555 = cljs.core.seq(seq__21325_21541);
if(temp__5804__auto___21555){
var seq__21325_21556__$1 = temp__5804__auto___21555;
if(cljs.core.chunked_seq_QMARK_(seq__21325_21556__$1)){
var c__5525__auto___21557 = cljs.core.chunk_first(seq__21325_21556__$1);
var G__21558 = cljs.core.chunk_rest(seq__21325_21556__$1);
var G__21559 = c__5525__auto___21557;
var G__21560 = cljs.core.count(c__5525__auto___21557);
var G__21561 = (0);
seq__21325_21541 = G__21558;
chunk__21327_21542 = G__21559;
count__21328_21543 = G__21560;
i__21329_21544 = G__21561;
continue;
} else {
var map__21337_21562 = cljs.core.first(seq__21325_21556__$1);
var map__21337_21563__$1 = cljs.core.__destructure_map(map__21337_21562);
var task_21564 = map__21337_21563__$1;
var fn_str_21565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21337_21563__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21337_21563__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21567 = goog.getObjectByName(fn_str_21565,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21566)].join(''));

(fn_obj_21567.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21567.cljs$core$IFn$_invoke$arity$2(path,new_link_21538) : fn_obj_21567.call(null, path,new_link_21538));


var G__21568 = cljs.core.next(seq__21325_21556__$1);
var G__21569 = null;
var G__21570 = (0);
var G__21571 = (0);
seq__21325_21541 = G__21568;
chunk__21327_21542 = G__21569;
count__21328_21543 = G__21570;
i__21329_21544 = G__21571;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21536);
});})(seq__21285_21532,chunk__21289_21533,count__21290_21534,i__21291_21535,seq__21160,chunk__21162,count__21163,i__21164,new_link_21538,path_match_21537,node_21536,path,map__21159,map__21159__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21537], 0));

goog.dom.insertSiblingAfter(new_link_21538,node_21536);


var G__21572 = seq__21285_21532;
var G__21573 = chunk__21289_21533;
var G__21574 = count__21290_21534;
var G__21575 = (i__21291_21535 + (1));
seq__21285_21532 = G__21572;
chunk__21289_21533 = G__21573;
count__21290_21534 = G__21574;
i__21291_21535 = G__21575;
continue;
} else {
var G__21576 = seq__21285_21532;
var G__21577 = chunk__21289_21533;
var G__21578 = count__21290_21534;
var G__21579 = (i__21291_21535 + (1));
seq__21285_21532 = G__21576;
chunk__21289_21533 = G__21577;
count__21290_21534 = G__21578;
i__21291_21535 = G__21579;
continue;
}
} else {
var G__21580 = seq__21285_21532;
var G__21581 = chunk__21289_21533;
var G__21582 = count__21290_21534;
var G__21583 = (i__21291_21535 + (1));
seq__21285_21532 = G__21580;
chunk__21289_21533 = G__21581;
count__21290_21534 = G__21582;
i__21291_21535 = G__21583;
continue;
}
} else {
var temp__5804__auto___21584 = cljs.core.seq(seq__21285_21532);
if(temp__5804__auto___21584){
var seq__21285_21585__$1 = temp__5804__auto___21584;
if(cljs.core.chunked_seq_QMARK_(seq__21285_21585__$1)){
var c__5525__auto___21586 = cljs.core.chunk_first(seq__21285_21585__$1);
var G__21587 = cljs.core.chunk_rest(seq__21285_21585__$1);
var G__21588 = c__5525__auto___21586;
var G__21589 = cljs.core.count(c__5525__auto___21586);
var G__21590 = (0);
seq__21285_21532 = G__21587;
chunk__21289_21533 = G__21588;
count__21290_21534 = G__21589;
i__21291_21535 = G__21590;
continue;
} else {
var node_21591 = cljs.core.first(seq__21285_21585__$1);
if(cljs.core.not(node_21591.shadow$old)){
var path_match_21592 = shadow.cljs.devtools.client.browser.match_paths(node_21591.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21592)){
var new_link_21593 = (function (){var G__21339 = node_21591.cloneNode(true);
G__21339.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21592),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21339;
})();
(node_21591.shadow$old = true);

(new_link_21593.onload = ((function (seq__21285_21532,chunk__21289_21533,count__21290_21534,i__21291_21535,seq__21160,chunk__21162,count__21163,i__21164,new_link_21593,path_match_21592,node_21591,seq__21285_21585__$1,temp__5804__auto___21584,path,map__21159,map__21159__$1,msg,updates,reload_info){
return (function (e){
var seq__21342_21594 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21344_21595 = null;
var count__21345_21596 = (0);
var i__21346_21597 = (0);
while(true){
if((i__21346_21597 < count__21345_21596)){
var map__21352_21598 = chunk__21344_21595.cljs$core$IIndexed$_nth$arity$2(null, i__21346_21597);
var map__21352_21599__$1 = cljs.core.__destructure_map(map__21352_21598);
var task_21600 = map__21352_21599__$1;
var fn_str_21601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352_21599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352_21599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21603 = goog.getObjectByName(fn_str_21601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21602)].join(''));

(fn_obj_21603.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21603.cljs$core$IFn$_invoke$arity$2(path,new_link_21593) : fn_obj_21603.call(null, path,new_link_21593));


var G__21604 = seq__21342_21594;
var G__21605 = chunk__21344_21595;
var G__21606 = count__21345_21596;
var G__21607 = (i__21346_21597 + (1));
seq__21342_21594 = G__21604;
chunk__21344_21595 = G__21605;
count__21345_21596 = G__21606;
i__21346_21597 = G__21607;
continue;
} else {
var temp__5804__auto___21608__$1 = cljs.core.seq(seq__21342_21594);
if(temp__5804__auto___21608__$1){
var seq__21342_21609__$1 = temp__5804__auto___21608__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21342_21609__$1)){
var c__5525__auto___21610 = cljs.core.chunk_first(seq__21342_21609__$1);
var G__21611 = cljs.core.chunk_rest(seq__21342_21609__$1);
var G__21612 = c__5525__auto___21610;
var G__21613 = cljs.core.count(c__5525__auto___21610);
var G__21614 = (0);
seq__21342_21594 = G__21611;
chunk__21344_21595 = G__21612;
count__21345_21596 = G__21613;
i__21346_21597 = G__21614;
continue;
} else {
var map__21353_21615 = cljs.core.first(seq__21342_21609__$1);
var map__21353_21616__$1 = cljs.core.__destructure_map(map__21353_21615);
var task_21617 = map__21353_21616__$1;
var fn_str_21618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353_21616__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353_21616__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21620 = goog.getObjectByName(fn_str_21618,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21619)].join(''));

(fn_obj_21620.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21620.cljs$core$IFn$_invoke$arity$2(path,new_link_21593) : fn_obj_21620.call(null, path,new_link_21593));


var G__21621 = cljs.core.next(seq__21342_21609__$1);
var G__21622 = null;
var G__21623 = (0);
var G__21624 = (0);
seq__21342_21594 = G__21621;
chunk__21344_21595 = G__21622;
count__21345_21596 = G__21623;
i__21346_21597 = G__21624;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21591);
});})(seq__21285_21532,chunk__21289_21533,count__21290_21534,i__21291_21535,seq__21160,chunk__21162,count__21163,i__21164,new_link_21593,path_match_21592,node_21591,seq__21285_21585__$1,temp__5804__auto___21584,path,map__21159,map__21159__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21592], 0));

goog.dom.insertSiblingAfter(new_link_21593,node_21591);


var G__21625 = cljs.core.next(seq__21285_21585__$1);
var G__21626 = null;
var G__21627 = (0);
var G__21628 = (0);
seq__21285_21532 = G__21625;
chunk__21289_21533 = G__21626;
count__21290_21534 = G__21627;
i__21291_21535 = G__21628;
continue;
} else {
var G__21629 = cljs.core.next(seq__21285_21585__$1);
var G__21630 = null;
var G__21631 = (0);
var G__21632 = (0);
seq__21285_21532 = G__21629;
chunk__21289_21533 = G__21630;
count__21290_21534 = G__21631;
i__21291_21535 = G__21632;
continue;
}
} else {
var G__21633 = cljs.core.next(seq__21285_21585__$1);
var G__21634 = null;
var G__21635 = (0);
var G__21636 = (0);
seq__21285_21532 = G__21633;
chunk__21289_21533 = G__21634;
count__21290_21534 = G__21635;
i__21291_21535 = G__21636;
continue;
}
}
} else {
}
}
break;
}


var G__21637 = seq__21160;
var G__21638 = chunk__21162;
var G__21639 = count__21163;
var G__21640 = (i__21164 + (1));
seq__21160 = G__21637;
chunk__21162 = G__21638;
count__21163 = G__21639;
i__21164 = G__21640;
continue;
} else {
var G__21641 = seq__21160;
var G__21642 = chunk__21162;
var G__21643 = count__21163;
var G__21644 = (i__21164 + (1));
seq__21160 = G__21641;
chunk__21162 = G__21642;
count__21163 = G__21643;
i__21164 = G__21644;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21160);
if(temp__5804__auto__){
var seq__21160__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21160__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21160__$1);
var G__21645 = cljs.core.chunk_rest(seq__21160__$1);
var G__21646 = c__5525__auto__;
var G__21647 = cljs.core.count(c__5525__auto__);
var G__21648 = (0);
seq__21160 = G__21645;
chunk__21162 = G__21646;
count__21163 = G__21647;
i__21164 = G__21648;
continue;
} else {
var path = cljs.core.first(seq__21160__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21357_21649 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21361_21650 = null;
var count__21362_21651 = (0);
var i__21363_21652 = (0);
while(true){
if((i__21363_21652 < count__21362_21651)){
var node_21653 = chunk__21361_21650.cljs$core$IIndexed$_nth$arity$2(null, i__21363_21652);
if(cljs.core.not(node_21653.shadow$old)){
var path_match_21654 = shadow.cljs.devtools.client.browser.match_paths(node_21653.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21654)){
var new_link_21655 = (function (){var G__21408 = node_21653.cloneNode(true);
G__21408.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21654),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21408;
})();
(node_21653.shadow$old = true);

(new_link_21655.onload = ((function (seq__21357_21649,chunk__21361_21650,count__21362_21651,i__21363_21652,seq__21160,chunk__21162,count__21163,i__21164,new_link_21655,path_match_21654,node_21653,path,seq__21160__$1,temp__5804__auto__,map__21159,map__21159__$1,msg,updates,reload_info){
return (function (e){
var seq__21409_21656 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21411_21657 = null;
var count__21412_21658 = (0);
var i__21413_21659 = (0);
while(true){
if((i__21413_21659 < count__21412_21658)){
var map__21420_21660 = chunk__21411_21657.cljs$core$IIndexed$_nth$arity$2(null, i__21413_21659);
var map__21420_21661__$1 = cljs.core.__destructure_map(map__21420_21660);
var task_21662 = map__21420_21661__$1;
var fn_str_21663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21420_21661__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21420_21661__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21665 = goog.getObjectByName(fn_str_21663,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21664)].join(''));

(fn_obj_21665.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21665.cljs$core$IFn$_invoke$arity$2(path,new_link_21655) : fn_obj_21665.call(null, path,new_link_21655));


var G__21666 = seq__21409_21656;
var G__21667 = chunk__21411_21657;
var G__21668 = count__21412_21658;
var G__21669 = (i__21413_21659 + (1));
seq__21409_21656 = G__21666;
chunk__21411_21657 = G__21667;
count__21412_21658 = G__21668;
i__21413_21659 = G__21669;
continue;
} else {
var temp__5804__auto___21670__$1 = cljs.core.seq(seq__21409_21656);
if(temp__5804__auto___21670__$1){
var seq__21409_21671__$1 = temp__5804__auto___21670__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21409_21671__$1)){
var c__5525__auto___21672 = cljs.core.chunk_first(seq__21409_21671__$1);
var G__21673 = cljs.core.chunk_rest(seq__21409_21671__$1);
var G__21674 = c__5525__auto___21672;
var G__21675 = cljs.core.count(c__5525__auto___21672);
var G__21676 = (0);
seq__21409_21656 = G__21673;
chunk__21411_21657 = G__21674;
count__21412_21658 = G__21675;
i__21413_21659 = G__21676;
continue;
} else {
var map__21422_21677 = cljs.core.first(seq__21409_21671__$1);
var map__21422_21678__$1 = cljs.core.__destructure_map(map__21422_21677);
var task_21679 = map__21422_21678__$1;
var fn_str_21680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21422_21678__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21422_21678__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21682 = goog.getObjectByName(fn_str_21680,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21681)].join(''));

(fn_obj_21682.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21682.cljs$core$IFn$_invoke$arity$2(path,new_link_21655) : fn_obj_21682.call(null, path,new_link_21655));


var G__21683 = cljs.core.next(seq__21409_21671__$1);
var G__21684 = null;
var G__21685 = (0);
var G__21686 = (0);
seq__21409_21656 = G__21683;
chunk__21411_21657 = G__21684;
count__21412_21658 = G__21685;
i__21413_21659 = G__21686;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21653);
});})(seq__21357_21649,chunk__21361_21650,count__21362_21651,i__21363_21652,seq__21160,chunk__21162,count__21163,i__21164,new_link_21655,path_match_21654,node_21653,path,seq__21160__$1,temp__5804__auto__,map__21159,map__21159__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21654], 0));

goog.dom.insertSiblingAfter(new_link_21655,node_21653);


var G__21687 = seq__21357_21649;
var G__21688 = chunk__21361_21650;
var G__21689 = count__21362_21651;
var G__21690 = (i__21363_21652 + (1));
seq__21357_21649 = G__21687;
chunk__21361_21650 = G__21688;
count__21362_21651 = G__21689;
i__21363_21652 = G__21690;
continue;
} else {
var G__21691 = seq__21357_21649;
var G__21692 = chunk__21361_21650;
var G__21693 = count__21362_21651;
var G__21694 = (i__21363_21652 + (1));
seq__21357_21649 = G__21691;
chunk__21361_21650 = G__21692;
count__21362_21651 = G__21693;
i__21363_21652 = G__21694;
continue;
}
} else {
var G__21695 = seq__21357_21649;
var G__21696 = chunk__21361_21650;
var G__21697 = count__21362_21651;
var G__21698 = (i__21363_21652 + (1));
seq__21357_21649 = G__21695;
chunk__21361_21650 = G__21696;
count__21362_21651 = G__21697;
i__21363_21652 = G__21698;
continue;
}
} else {
var temp__5804__auto___21699__$1 = cljs.core.seq(seq__21357_21649);
if(temp__5804__auto___21699__$1){
var seq__21357_21700__$1 = temp__5804__auto___21699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21357_21700__$1)){
var c__5525__auto___21701 = cljs.core.chunk_first(seq__21357_21700__$1);
var G__21702 = cljs.core.chunk_rest(seq__21357_21700__$1);
var G__21703 = c__5525__auto___21701;
var G__21704 = cljs.core.count(c__5525__auto___21701);
var G__21705 = (0);
seq__21357_21649 = G__21702;
chunk__21361_21650 = G__21703;
count__21362_21651 = G__21704;
i__21363_21652 = G__21705;
continue;
} else {
var node_21706 = cljs.core.first(seq__21357_21700__$1);
if(cljs.core.not(node_21706.shadow$old)){
var path_match_21707 = shadow.cljs.devtools.client.browser.match_paths(node_21706.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21707)){
var new_link_21708 = (function (){var G__21424 = node_21706.cloneNode(true);
G__21424.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21707),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21424;
})();
(node_21706.shadow$old = true);

(new_link_21708.onload = ((function (seq__21357_21649,chunk__21361_21650,count__21362_21651,i__21363_21652,seq__21160,chunk__21162,count__21163,i__21164,new_link_21708,path_match_21707,node_21706,seq__21357_21700__$1,temp__5804__auto___21699__$1,path,seq__21160__$1,temp__5804__auto__,map__21159,map__21159__$1,msg,updates,reload_info){
return (function (e){
var seq__21425_21709 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21427_21710 = null;
var count__21428_21711 = (0);
var i__21429_21712 = (0);
while(true){
if((i__21429_21712 < count__21428_21711)){
var map__21433_21713 = chunk__21427_21710.cljs$core$IIndexed$_nth$arity$2(null, i__21429_21712);
var map__21433_21714__$1 = cljs.core.__destructure_map(map__21433_21713);
var task_21715 = map__21433_21714__$1;
var fn_str_21716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21433_21714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21433_21714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21718 = goog.getObjectByName(fn_str_21716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21717)].join(''));

(fn_obj_21718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21718.cljs$core$IFn$_invoke$arity$2(path,new_link_21708) : fn_obj_21718.call(null, path,new_link_21708));


var G__21719 = seq__21425_21709;
var G__21720 = chunk__21427_21710;
var G__21721 = count__21428_21711;
var G__21722 = (i__21429_21712 + (1));
seq__21425_21709 = G__21719;
chunk__21427_21710 = G__21720;
count__21428_21711 = G__21721;
i__21429_21712 = G__21722;
continue;
} else {
var temp__5804__auto___21723__$2 = cljs.core.seq(seq__21425_21709);
if(temp__5804__auto___21723__$2){
var seq__21425_21724__$1 = temp__5804__auto___21723__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21425_21724__$1)){
var c__5525__auto___21725 = cljs.core.chunk_first(seq__21425_21724__$1);
var G__21726 = cljs.core.chunk_rest(seq__21425_21724__$1);
var G__21727 = c__5525__auto___21725;
var G__21728 = cljs.core.count(c__5525__auto___21725);
var G__21729 = (0);
seq__21425_21709 = G__21726;
chunk__21427_21710 = G__21727;
count__21428_21711 = G__21728;
i__21429_21712 = G__21729;
continue;
} else {
var map__21435_21730 = cljs.core.first(seq__21425_21724__$1);
var map__21435_21731__$1 = cljs.core.__destructure_map(map__21435_21730);
var task_21732 = map__21435_21731__$1;
var fn_str_21733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435_21731__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435_21731__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21735 = goog.getObjectByName(fn_str_21733,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21734)].join(''));

(fn_obj_21735.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21735.cljs$core$IFn$_invoke$arity$2(path,new_link_21708) : fn_obj_21735.call(null, path,new_link_21708));


var G__21736 = cljs.core.next(seq__21425_21724__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21425_21709 = G__21736;
chunk__21427_21710 = G__21737;
count__21428_21711 = G__21738;
i__21429_21712 = G__21739;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21706);
});})(seq__21357_21649,chunk__21361_21650,count__21362_21651,i__21363_21652,seq__21160,chunk__21162,count__21163,i__21164,new_link_21708,path_match_21707,node_21706,seq__21357_21700__$1,temp__5804__auto___21699__$1,path,seq__21160__$1,temp__5804__auto__,map__21159,map__21159__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21707], 0));

goog.dom.insertSiblingAfter(new_link_21708,node_21706);


var G__21740 = cljs.core.next(seq__21357_21700__$1);
var G__21741 = null;
var G__21742 = (0);
var G__21743 = (0);
seq__21357_21649 = G__21740;
chunk__21361_21650 = G__21741;
count__21362_21651 = G__21742;
i__21363_21652 = G__21743;
continue;
} else {
var G__21744 = cljs.core.next(seq__21357_21700__$1);
var G__21745 = null;
var G__21746 = (0);
var G__21747 = (0);
seq__21357_21649 = G__21744;
chunk__21361_21650 = G__21745;
count__21362_21651 = G__21746;
i__21363_21652 = G__21747;
continue;
}
} else {
var G__21748 = cljs.core.next(seq__21357_21700__$1);
var G__21749 = null;
var G__21750 = (0);
var G__21751 = (0);
seq__21357_21649 = G__21748;
chunk__21361_21650 = G__21749;
count__21362_21651 = G__21750;
i__21363_21652 = G__21751;
continue;
}
}
} else {
}
}
break;
}


var G__21752 = cljs.core.next(seq__21160__$1);
var G__21753 = null;
var G__21754 = (0);
var G__21755 = (0);
seq__21160 = G__21752;
chunk__21162 = G__21753;
count__21163 = G__21754;
i__21164 = G__21755;
continue;
} else {
var G__21756 = cljs.core.next(seq__21160__$1);
var G__21757 = null;
var G__21758 = (0);
var G__21759 = (0);
seq__21160 = G__21756;
chunk__21162 = G__21757;
count__21163 = G__21758;
i__21164 = G__21759;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21441){
var map__21442 = p__21441;
var map__21442__$1 = cljs.core.__destructure_map(map__21442);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21443,done,error){
var map__21444 = p__21443;
var map__21444__$1 = cljs.core.__destructure_map(map__21444);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21445,done,error){
var map__21446 = p__21445;
var map__21446__$1 = cljs.core.__destructure_map(map__21446);
var msg = map__21446__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21447){
var map__21448 = p__21447;
var map__21448__$1 = cljs.core.__destructure_map(map__21448);
var src = map__21448__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21448__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21449 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21449) : done.call(null, G__21449));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21450){
var map__21451 = p__21450;
var map__21451__$1 = cljs.core.__destructure_map(map__21451);
var msg__$1 = map__21451__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21451__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21452){var ex = e21452;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21453){
var map__21454 = p__21453;
var map__21454__$1 = cljs.core.__destructure_map(map__21454);
var env = map__21454__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21454__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21455){
var map__21456 = p__21455;
var map__21456__$1 = cljs.core.__destructure_map(map__21456);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21456__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21456__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21457){
var map__21458 = p__21457;
var map__21458__$1 = cljs.core.__destructure_map(map__21458);
var svc = map__21458__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21458__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
