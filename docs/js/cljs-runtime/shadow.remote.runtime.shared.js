goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14730){
var map__14733 = p__14730;
var map__14733__$1 = cljs.core.__destructure_map(map__14733);
var runtime = map__14733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14910 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14910)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14774 = runtime;
var G__14775 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14910);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14774,G__14775) : shadow.remote.runtime.shared.process.call(null, G__14774,G__14775));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14784,res){
var map__14785 = p__14784;
var map__14785__$1 = cljs.core.__destructure_map(map__14785);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14785__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14785__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14790 = res;
var G__14790__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14790,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14790);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14790__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14790__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14798 = arguments.length;
switch (G__14798) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14802,msg,handlers,timeout_after_ms){
var map__14803 = p__14802;
var map__14803__$1 = cljs.core.__destructure_map(map__14803);
var runtime = map__14803__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14803__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___14916 = arguments.length;
var i__5727__auto___14917 = (0);
while(true){
if((i__5727__auto___14917 < len__5726__auto___14916)){
args__5732__auto__.push((arguments[i__5727__auto___14917]));

var G__14918 = (i__5727__auto___14917 + (1));
i__5727__auto___14917 = G__14918;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14809,ev,args){
var map__14810 = p__14809;
var map__14810__$1 = cljs.core.__destructure_map(map__14810);
var runtime = map__14810__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14810__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14811 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14814 = null;
var count__14815 = (0);
var i__14816 = (0);
while(true){
if((i__14816 < count__14815)){
var ext = chunk__14814.cljs$core$IIndexed$_nth$arity$2(null, i__14816);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14919 = seq__14811;
var G__14920 = chunk__14814;
var G__14921 = count__14815;
var G__14922 = (i__14816 + (1));
seq__14811 = G__14919;
chunk__14814 = G__14920;
count__14815 = G__14921;
i__14816 = G__14922;
continue;
} else {
var G__14923 = seq__14811;
var G__14924 = chunk__14814;
var G__14925 = count__14815;
var G__14926 = (i__14816 + (1));
seq__14811 = G__14923;
chunk__14814 = G__14924;
count__14815 = G__14925;
i__14816 = G__14926;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14811);
if(temp__5804__auto__){
var seq__14811__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14811__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14811__$1);
var G__14927 = cljs.core.chunk_rest(seq__14811__$1);
var G__14928 = c__5525__auto__;
var G__14929 = cljs.core.count(c__5525__auto__);
var G__14930 = (0);
seq__14811 = G__14927;
chunk__14814 = G__14928;
count__14815 = G__14929;
i__14816 = G__14930;
continue;
} else {
var ext = cljs.core.first(seq__14811__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14932 = cljs.core.next(seq__14811__$1);
var G__14933 = null;
var G__14934 = (0);
var G__14935 = (0);
seq__14811 = G__14932;
chunk__14814 = G__14933;
count__14815 = G__14934;
i__14816 = G__14935;
continue;
} else {
var G__14936 = cljs.core.next(seq__14811__$1);
var G__14937 = null;
var G__14938 = (0);
var G__14939 = (0);
seq__14811 = G__14936;
chunk__14814 = G__14937;
count__14815 = G__14938;
i__14816 = G__14939;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14805){
var G__14806 = cljs.core.first(seq14805);
var seq14805__$1 = cljs.core.next(seq14805);
var G__14807 = cljs.core.first(seq14805__$1);
var seq14805__$2 = cljs.core.next(seq14805__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14806,G__14807,seq14805__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14823,p__14824){
var map__14825 = p__14823;
var map__14825__$1 = cljs.core.__destructure_map(map__14825);
var runtime = map__14825__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14825__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14826 = p__14824;
var map__14826__$1 = cljs.core.__destructure_map(map__14826);
var msg = map__14826__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14826__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14827 = cljs.core.deref(state_ref);
var map__14827__$1 = cljs.core.__destructure_map(map__14827);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14827__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14828,msg){
var map__14829 = p__14828;
var map__14829__$1 = cljs.core.__destructure_map(map__14829);
var runtime = map__14829__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14829__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14832,key,p__14833){
var map__14834 = p__14832;
var map__14834__$1 = cljs.core.__destructure_map(map__14834);
var state = map__14834__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14834__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14835 = p__14833;
var map__14835__$1 = cljs.core.__destructure_map(map__14835);
var spec = map__14835__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14835__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14835__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14843,key,spec){
var map__14844 = p__14843;
var map__14844__$1 = cljs.core.__destructure_map(map__14844);
var runtime = map__14844__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14844__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14983 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14983 == null)){
} else {
var on_welcome_14984 = temp__5808__auto___14983;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14984.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14984.cljs$core$IFn$_invoke$arity$0() : on_welcome_14984.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14849_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14849_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14850_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14850_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14851_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14851_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14852_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14852_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14853_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14853_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14862,key){
var map__14863 = p__14862;
var map__14863__$1 = cljs.core.__destructure_map(map__14863);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14863__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14864,msg){
var map__14865 = p__14864;
var map__14865__$1 = cljs.core.__destructure_map(map__14865);
var runtime = map__14865__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14865__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14867,p__14868){
var map__14869 = p__14867;
var map__14869__$1 = cljs.core.__destructure_map(map__14869);
var runtime = map__14869__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14869__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14870 = p__14868;
var map__14870__$1 = cljs.core.__destructure_map(map__14870);
var msg = map__14870__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14870__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14870__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__14873 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14875 = null;
var count__14876 = (0);
var i__14877 = (0);
while(true){
if((i__14877 < count__14876)){
var map__14881 = chunk__14875.cljs$core$IIndexed$_nth$arity$2(null, i__14877);
var map__14881__$1 = cljs.core.__destructure_map(map__14881);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__15019 = seq__14873;
var G__15020 = chunk__14875;
var G__15021 = count__14876;
var G__15022 = (i__14877 + (1));
seq__14873 = G__15019;
chunk__14875 = G__15020;
count__14876 = G__15021;
i__14877 = G__15022;
continue;
} else {
var G__15025 = seq__14873;
var G__15026 = chunk__14875;
var G__15027 = count__14876;
var G__15028 = (i__14877 + (1));
seq__14873 = G__15025;
chunk__14875 = G__15026;
count__14876 = G__15027;
i__14877 = G__15028;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14873);
if(temp__5804__auto__){
var seq__14873__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14873__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14873__$1);
var G__15038 = cljs.core.chunk_rest(seq__14873__$1);
var G__15039 = c__5525__auto__;
var G__15040 = cljs.core.count(c__5525__auto__);
var G__15041 = (0);
seq__14873 = G__15038;
chunk__14875 = G__15039;
count__14876 = G__15040;
i__14877 = G__15041;
continue;
} else {
var map__14884 = cljs.core.first(seq__14873__$1);
var map__14884__$1 = cljs.core.__destructure_map(map__14884);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14884__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__15042 = cljs.core.next(seq__14873__$1);
var G__15043 = null;
var G__15044 = (0);
var G__15045 = (0);
seq__14873 = G__15042;
chunk__14875 = G__15043;
count__14876 = G__15044;
i__14877 = G__15045;
continue;
} else {
var G__15046 = cljs.core.next(seq__14873__$1);
var G__15047 = null;
var G__15048 = (0);
var G__15049 = (0);
seq__14873 = G__15046;
chunk__14875 = G__15047;
count__14876 = G__15048;
i__14877 = G__15049;
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
