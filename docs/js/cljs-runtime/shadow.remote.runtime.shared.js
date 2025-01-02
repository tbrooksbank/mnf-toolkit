goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14554){
var map__14555 = p__14554;
var map__14555__$1 = cljs.core.__destructure_map(map__14555);
var runtime = map__14555__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14555__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14733 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14733)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14558 = runtime;
var G__14559 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14733);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14558,G__14559) : shadow.remote.runtime.shared.process.call(null, G__14558,G__14559));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14560,res){
var map__14561 = p__14560;
var map__14561__$1 = cljs.core.__destructure_map(map__14561);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14561__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14561__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14562 = res;
var G__14562__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14562,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14562);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14562__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14562__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14564 = arguments.length;
switch (G__14564) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14566,msg,handlers,timeout_after_ms){
var map__14567 = p__14566;
var map__14567__$1 = cljs.core.__destructure_map(map__14567);
var runtime = map__14567__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14567__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14765 = arguments.length;
var i__5727__auto___14766 = (0);
while(true){
if((i__5727__auto___14766 < len__5726__auto___14765)){
args__5732__auto__.push((arguments[i__5727__auto___14766]));

var G__14768 = (i__5727__auto___14766 + (1));
i__5727__auto___14766 = G__14768;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14574,ev,args){
var map__14575 = p__14574;
var map__14575__$1 = cljs.core.__destructure_map(map__14575);
var runtime = map__14575__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14575__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14576 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14579 = null;
var count__14580 = (0);
var i__14581 = (0);
while(true){
if((i__14581 < count__14580)){
var ext = chunk__14579.cljs$core$IIndexed$_nth$arity$2(null, i__14581);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14778 = seq__14576;
var G__14779 = chunk__14579;
var G__14780 = count__14580;
var G__14781 = (i__14581 + (1));
seq__14576 = G__14778;
chunk__14579 = G__14779;
count__14580 = G__14780;
i__14581 = G__14781;
continue;
} else {
var G__14782 = seq__14576;
var G__14783 = chunk__14579;
var G__14784 = count__14580;
var G__14785 = (i__14581 + (1));
seq__14576 = G__14782;
chunk__14579 = G__14783;
count__14580 = G__14784;
i__14581 = G__14785;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14576);
if(temp__5804__auto__){
var seq__14576__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14576__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14576__$1);
var G__14791 = cljs.core.chunk_rest(seq__14576__$1);
var G__14792 = c__5525__auto__;
var G__14793 = cljs.core.count(c__5525__auto__);
var G__14794 = (0);
seq__14576 = G__14791;
chunk__14579 = G__14792;
count__14580 = G__14793;
i__14581 = G__14794;
continue;
} else {
var ext = cljs.core.first(seq__14576__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14796 = cljs.core.next(seq__14576__$1);
var G__14797 = null;
var G__14798 = (0);
var G__14799 = (0);
seq__14576 = G__14796;
chunk__14579 = G__14797;
count__14580 = G__14798;
i__14581 = G__14799;
continue;
} else {
var G__14801 = cljs.core.next(seq__14576__$1);
var G__14802 = null;
var G__14803 = (0);
var G__14804 = (0);
seq__14576 = G__14801;
chunk__14579 = G__14802;
count__14580 = G__14803;
i__14581 = G__14804;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14569){
var G__14570 = cljs.core.first(seq14569);
var seq14569__$1 = cljs.core.next(seq14569);
var G__14571 = cljs.core.first(seq14569__$1);
var seq14569__$2 = cljs.core.next(seq14569__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14570,G__14571,seq14569__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14584,p__14585){
var map__14586 = p__14584;
var map__14586__$1 = cljs.core.__destructure_map(map__14586);
var runtime = map__14586__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14587 = p__14585;
var map__14587__$1 = cljs.core.__destructure_map(map__14587);
var msg = map__14587__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14587__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14588 = cljs.core.deref(state_ref);
var map__14588__$1 = cljs.core.__destructure_map(map__14588);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14589,msg){
var map__14590 = p__14589;
var map__14590__$1 = cljs.core.__destructure_map(map__14590);
var runtime = map__14590__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14590__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14596,key,p__14597){
var map__14598 = p__14596;
var map__14598__$1 = cljs.core.__destructure_map(map__14598);
var state = map__14598__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14599 = p__14597;
var map__14599__$1 = cljs.core.__destructure_map(map__14599);
var spec = map__14599__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14599__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14599__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14600,key,spec){
var map__14601 = p__14600;
var map__14601__$1 = cljs.core.__destructure_map(map__14601);
var runtime = map__14601__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14601__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14852 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14852 == null)){
} else {
var on_welcome_14853 = temp__5808__auto___14852;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14853.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14853.cljs$core$IFn$_invoke$arity$0() : on_welcome_14853.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14604_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14604_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14605_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14605_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14606_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14606_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14607_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14607_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14608_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14608_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14635,key){
var map__14636 = p__14635;
var map__14636__$1 = cljs.core.__destructure_map(map__14636);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14636__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14639,msg){
var map__14640 = p__14639;
var map__14640__$1 = cljs.core.__destructure_map(map__14640);
var runtime = map__14640__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14640__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14652,p__14653){
var map__14657 = p__14652;
var map__14657__$1 = cljs.core.__destructure_map(map__14657);
var runtime = map__14657__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14657__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14658 = p__14653;
var map__14658__$1 = cljs.core.__destructure_map(map__14658);
var msg = map__14658__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14658__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14690 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14692 = null;
var count__14693 = (0);
var i__14694 = (0);
while(true){
if((i__14694 < count__14693)){
var map__14715 = chunk__14692.cljs$core$IIndexed$_nth$arity$2(null, i__14694);
var map__14715__$1 = cljs.core.__destructure_map(map__14715);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14715__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14905 = seq__14690;
var G__14906 = chunk__14692;
var G__14907 = count__14693;
var G__14908 = (i__14694 + (1));
seq__14690 = G__14905;
chunk__14692 = G__14906;
count__14693 = G__14907;
i__14694 = G__14908;
continue;
} else {
var G__14909 = seq__14690;
var G__14910 = chunk__14692;
var G__14911 = count__14693;
var G__14912 = (i__14694 + (1));
seq__14690 = G__14909;
chunk__14692 = G__14910;
count__14693 = G__14911;
i__14694 = G__14912;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14690);
if(temp__5804__auto__){
var seq__14690__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14690__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14690__$1);
var G__14913 = cljs.core.chunk_rest(seq__14690__$1);
var G__14914 = c__5525__auto__;
var G__14915 = cljs.core.count(c__5525__auto__);
var G__14916 = (0);
seq__14690 = G__14913;
chunk__14692 = G__14914;
count__14693 = G__14915;
i__14694 = G__14916;
continue;
} else {
var map__14721 = cljs.core.first(seq__14690__$1);
var map__14721__$1 = cljs.core.__destructure_map(map__14721);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14721__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14917 = cljs.core.next(seq__14690__$1);
var G__14918 = null;
var G__14919 = (0);
var G__14920 = (0);
seq__14690 = G__14917;
chunk__14692 = G__14918;
count__14693 = G__14919;
i__14694 = G__14920;
continue;
} else {
var G__14921 = cljs.core.next(seq__14690__$1);
var G__14922 = null;
var G__14923 = (0);
var G__14924 = (0);
seq__14690 = G__14921;
chunk__14692 = G__14922;
count__14693 = G__14923;
i__14694 = G__14924;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
