goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14500 = (function (f,blockable,meta14501){
this.f = f;
this.blockable = blockable;
this.meta14501 = meta14501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14502,meta14501__$1){
var self__ = this;
var _14502__$1 = this;
return (new cljs.core.async.t_cljs$core$async14500(self__.f,self__.blockable,meta14501__$1));
}));

(cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14502){
var self__ = this;
var _14502__$1 = this;
return self__.meta14501;
}));

(cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14501","meta14501",-422570366,null)], null);
}));

(cljs.core.async.t_cljs$core$async14500.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14500");

(cljs.core.async.t_cljs$core$async14500.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14500");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14500.
 */
cljs.core.async.__GT_t_cljs$core$async14500 = (function cljs$core$async$__GT_t_cljs$core$async14500(f,blockable,meta14501){
return (new cljs.core.async.t_cljs$core$async14500(f,blockable,meta14501));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14499 = arguments.length;
switch (G__14499) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14500(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14507 = arguments.length;
switch (G__14507) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14509 = arguments.length;
switch (G__14509) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14517 = arguments.length;
switch (G__14517) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17873 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17873) : fn1.call(null, val_17873));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17873) : fn1.call(null, val_17873));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14522 = arguments.length;
switch (G__14522) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17879 = n;
var x_17880 = (0);
while(true){
if((x_17880 < n__5593__auto___17879)){
(a[x_17880] = x_17880);

var G__17881 = (x_17880 + (1));
x_17880 = G__17881;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14524 = (function (flag,meta14525){
this.flag = flag;
this.meta14525 = meta14525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14526,meta14525__$1){
var self__ = this;
var _14526__$1 = this;
return (new cljs.core.async.t_cljs$core$async14524(self__.flag,meta14525__$1));
}));

(cljs.core.async.t_cljs$core$async14524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14526){
var self__ = this;
var _14526__$1 = this;
return self__.meta14525;
}));

(cljs.core.async.t_cljs$core$async14524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14525","meta14525",581736544,null)], null);
}));

(cljs.core.async.t_cljs$core$async14524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14524");

(cljs.core.async.t_cljs$core$async14524.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14524.
 */
cljs.core.async.__GT_t_cljs$core$async14524 = (function cljs$core$async$__GT_t_cljs$core$async14524(flag,meta14525){
return (new cljs.core.async.t_cljs$core$async14524(flag,meta14525));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14524(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14527 = (function (flag,cb,meta14528){
this.flag = flag;
this.cb = cb;
this.meta14528 = meta14528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14529,meta14528__$1){
var self__ = this;
var _14529__$1 = this;
return (new cljs.core.async.t_cljs$core$async14527(self__.flag,self__.cb,meta14528__$1));
}));

(cljs.core.async.t_cljs$core$async14527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14529){
var self__ = this;
var _14529__$1 = this;
return self__.meta14528;
}));

(cljs.core.async.t_cljs$core$async14527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14528","meta14528",-1883066799,null)], null);
}));

(cljs.core.async.t_cljs$core$async14527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14527");

(cljs.core.async.t_cljs$core$async14527.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14527.
 */
cljs.core.async.__GT_t_cljs$core$async14527 = (function cljs$core$async$__GT_t_cljs$core$async14527(flag,cb,meta14528){
return (new cljs.core.async.t_cljs$core$async14527(flag,cb,meta14528));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14527(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14538_SHARP_){
var G__14548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14538_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14548) : fret.call(null, G__14548));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14539_SHARP_){
var G__14549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14539_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14549) : fret.call(null, G__14549));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17882 = (i + (1));
i = G__17882;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17883 = arguments.length;
var i__5727__auto___17884 = (0);
while(true){
if((i__5727__auto___17884 < len__5726__auto___17883)){
args__5732__auto__.push((arguments[i__5727__auto___17884]));

var G__17885 = (i__5727__auto___17884 + (1));
i__5727__auto___17884 = G__17885;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14556){
var map__14557 = p__14556;
var map__14557__$1 = cljs.core.__destructure_map(map__14557);
var opts = map__14557__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14552){
var G__14553 = cljs.core.first(seq14552);
var seq14552__$1 = cljs.core.next(seq14552);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14553,seq14552__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14573 = arguments.length;
switch (G__14573) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14421__auto___17897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_14633){
var state_val_14634 = (state_14633[(1)]);
if((state_val_14634 === (7))){
var inst_14629 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14643_17898 = state_14633__$1;
(statearr_14643_17898[(2)] = inst_14629);

(statearr_14643_17898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (1))){
var state_14633__$1 = state_14633;
var statearr_14644_17899 = state_14633__$1;
(statearr_14644_17899[(2)] = null);

(statearr_14644_17899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (4))){
var inst_14603 = (state_14633[(7)]);
var inst_14603__$1 = (state_14633[(2)]);
var inst_14609 = (inst_14603__$1 == null);
var state_14633__$1 = (function (){var statearr_14645 = state_14633;
(statearr_14645[(7)] = inst_14603__$1);

return statearr_14645;
})();
if(cljs.core.truth_(inst_14609)){
var statearr_14646_17900 = state_14633__$1;
(statearr_14646_17900[(1)] = (5));

} else {
var statearr_14647_17901 = state_14633__$1;
(statearr_14647_17901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (13))){
var state_14633__$1 = state_14633;
var statearr_14662_17902 = state_14633__$1;
(statearr_14662_17902[(2)] = null);

(statearr_14662_17902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (6))){
var inst_14603 = (state_14633[(7)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14633__$1,(11),to,inst_14603);
} else {
if((state_val_14634 === (3))){
var inst_14631 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14633__$1,inst_14631);
} else {
if((state_val_14634 === (12))){
var state_14633__$1 = state_14633;
var statearr_14687_17903 = state_14633__$1;
(statearr_14687_17903[(2)] = null);

(statearr_14687_17903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (2))){
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14633__$1,(4),from);
} else {
if((state_val_14634 === (11))){
var inst_14622 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14622)){
var statearr_14700_17905 = state_14633__$1;
(statearr_14700_17905[(1)] = (12));

} else {
var statearr_14701_17907 = state_14633__$1;
(statearr_14701_17907[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (9))){
var state_14633__$1 = state_14633;
var statearr_14704_17908 = state_14633__$1;
(statearr_14704_17908[(2)] = null);

(statearr_14704_17908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (5))){
var state_14633__$1 = state_14633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14705_17912 = state_14633__$1;
(statearr_14705_17912[(1)] = (8));

} else {
var statearr_14706_17913 = state_14633__$1;
(statearr_14706_17913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (14))){
var inst_14627 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14709_17914 = state_14633__$1;
(statearr_14709_17914[(2)] = inst_14627);

(statearr_14709_17914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (10))){
var inst_14619 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14713_17915 = state_14633__$1;
(statearr_14713_17915[(2)] = inst_14619);

(statearr_14713_17915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (8))){
var inst_14616 = cljs.core.async.close_BANG_(to);
var state_14633__$1 = state_14633;
var statearr_14718_17916 = state_14633__$1;
(statearr_14718_17916[(2)] = inst_14616);

(statearr_14718_17916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_14720 = [null,null,null,null,null,null,null,null];
(statearr_14720[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_14720[(1)] = (1));

return statearr_14720;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_14633){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_14633);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e14722){var ex__14206__auto__ = e14722;
var statearr_14723_17917 = state_14633;
(statearr_14723_17917[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_14633[(4)]))){
var statearr_14724_17918 = state_14633;
(statearr_14724_17918[(1)] = cljs.core.first((state_14633[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17922 = state_14633;
state_14633 = G__17922;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_14633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_14633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_14727 = f__14422__auto__();
(statearr_14727[(6)] = c__14421__auto___17897);

return statearr_14727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14736){
var vec__14737 = p__14736;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14737,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14737,(1),null);
var job = vec__14737;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14421__auto___17931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_14747){
var state_val_14748 = (state_14747[(1)]);
if((state_val_14748 === (1))){
var state_14747__$1 = state_14747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14747__$1,(2),res,v);
} else {
if((state_val_14748 === (2))){
var inst_14744 = (state_14747[(2)]);
var inst_14745 = cljs.core.async.close_BANG_(res);
var state_14747__$1 = (function (){var statearr_14754 = state_14747;
(statearr_14754[(7)] = inst_14744);

return statearr_14754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14747__$1,inst_14745);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0 = (function (){
var statearr_14755 = [null,null,null,null,null,null,null,null];
(statearr_14755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__);

(statearr_14755[(1)] = (1));

return statearr_14755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1 = (function (state_14747){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_14747);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e14761){var ex__14206__auto__ = e14761;
var statearr_14762_17937 = state_14747;
(statearr_14762_17937[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_14747[(4)]))){
var statearr_14767_17938 = state_14747;
(statearr_14767_17938[(1)] = cljs.core.first((state_14747[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17939 = state_14747;
state_14747 = G__17939;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = function(state_14747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1.call(this,state_14747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_14771 = f__14422__auto__();
(statearr_14771[(6)] = c__14421__auto___17931);

return statearr_14771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14774){
var vec__14775 = p__14774;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14775,(1),null);
var job = vec__14775;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17944 = n;
var __17945 = (0);
while(true){
if((__17945 < n__5593__auto___17944)){
var G__14795_17946 = type;
var G__14795_17947__$1 = (((G__14795_17946 instanceof cljs.core.Keyword))?G__14795_17946.fqn:null);
switch (G__14795_17947__$1) {
case "compute":
var c__14421__auto___17949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17945,c__14421__auto___17949,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async){
return (function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = ((function (__17945,c__14421__auto___17949,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async){
return (function (state_14816){
var state_val_14817 = (state_14816[(1)]);
if((state_val_14817 === (1))){
var state_14816__$1 = state_14816;
var statearr_14820_17950 = state_14816__$1;
(statearr_14820_17950[(2)] = null);

(statearr_14820_17950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14817 === (2))){
var state_14816__$1 = state_14816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14816__$1,(4),jobs);
} else {
if((state_val_14817 === (3))){
var inst_14814 = (state_14816[(2)]);
var state_14816__$1 = state_14816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14816__$1,inst_14814);
} else {
if((state_val_14817 === (4))){
var inst_14806 = (state_14816[(2)]);
var inst_14807 = process__$1(inst_14806);
var state_14816__$1 = state_14816;
if(cljs.core.truth_(inst_14807)){
var statearr_14821_17951 = state_14816__$1;
(statearr_14821_17951[(1)] = (5));

} else {
var statearr_14822_17952 = state_14816__$1;
(statearr_14822_17952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14817 === (5))){
var state_14816__$1 = state_14816;
var statearr_14823_17953 = state_14816__$1;
(statearr_14823_17953[(2)] = null);

(statearr_14823_17953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14817 === (6))){
var state_14816__$1 = state_14816;
var statearr_14824_17954 = state_14816__$1;
(statearr_14824_17954[(2)] = null);

(statearr_14824_17954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14817 === (7))){
var inst_14812 = (state_14816[(2)]);
var state_14816__$1 = state_14816;
var statearr_14826_17955 = state_14816__$1;
(statearr_14826_17955[(2)] = inst_14812);

(statearr_14826_17955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17945,c__14421__auto___17949,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async))
;
return ((function (__17945,switch__14202__auto__,c__14421__auto___17949,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0 = (function (){
var statearr_14828 = [null,null,null,null,null,null,null];
(statearr_14828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__);

(statearr_14828[(1)] = (1));

return statearr_14828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1 = (function (state_14816){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_14816);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e14830){var ex__14206__auto__ = e14830;
var statearr_14831_17957 = state_14816;
(statearr_14831_17957[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_14816[(4)]))){
var statearr_14832_17958 = state_14816;
(statearr_14832_17958[(1)] = cljs.core.first((state_14816[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17960 = state_14816;
state_14816 = G__17960;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = function(state_14816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1.call(this,state_14816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__;
})()
;})(__17945,switch__14202__auto__,c__14421__auto___17949,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async))
})();
var state__14423__auto__ = (function (){var statearr_14834 = f__14422__auto__();
(statearr_14834[(6)] = c__14421__auto___17949);

return statearr_14834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
});})(__17945,c__14421__auto___17949,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async))
);


break;
case "async":
var c__14421__auto___17962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17945,c__14421__auto___17962,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async){
return (function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = ((function (__17945,c__14421__auto___17962,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async){
return (function (state_14849){
var state_val_14850 = (state_14849[(1)]);
if((state_val_14850 === (1))){
var state_14849__$1 = state_14849;
var statearr_14854_17964 = state_14849__$1;
(statearr_14854_17964[(2)] = null);

(statearr_14854_17964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14850 === (2))){
var state_14849__$1 = state_14849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14849__$1,(4),jobs);
} else {
if((state_val_14850 === (3))){
var inst_14847 = (state_14849[(2)]);
var state_14849__$1 = state_14849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14849__$1,inst_14847);
} else {
if((state_val_14850 === (4))){
var inst_14839 = (state_14849[(2)]);
var inst_14840 = async(inst_14839);
var state_14849__$1 = state_14849;
if(cljs.core.truth_(inst_14840)){
var statearr_14859_17968 = state_14849__$1;
(statearr_14859_17968[(1)] = (5));

} else {
var statearr_14860_17969 = state_14849__$1;
(statearr_14860_17969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14850 === (5))){
var state_14849__$1 = state_14849;
var statearr_14861_17971 = state_14849__$1;
(statearr_14861_17971[(2)] = null);

(statearr_14861_17971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14850 === (6))){
var state_14849__$1 = state_14849;
var statearr_14862_17972 = state_14849__$1;
(statearr_14862_17972[(2)] = null);

(statearr_14862_17972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14850 === (7))){
var inst_14845 = (state_14849[(2)]);
var state_14849__$1 = state_14849;
var statearr_14863_17973 = state_14849__$1;
(statearr_14863_17973[(2)] = inst_14845);

(statearr_14863_17973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17945,c__14421__auto___17962,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async))
;
return ((function (__17945,switch__14202__auto__,c__14421__auto___17962,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0 = (function (){
var statearr_14868 = [null,null,null,null,null,null,null];
(statearr_14868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__);

(statearr_14868[(1)] = (1));

return statearr_14868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1 = (function (state_14849){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_14849);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e14869){var ex__14206__auto__ = e14869;
var statearr_14870_17979 = state_14849;
(statearr_14870_17979[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_14849[(4)]))){
var statearr_14871_17980 = state_14849;
(statearr_14871_17980[(1)] = cljs.core.first((state_14849[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17981 = state_14849;
state_14849 = G__17981;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = function(state_14849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1.call(this,state_14849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__;
})()
;})(__17945,switch__14202__auto__,c__14421__auto___17962,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async))
})();
var state__14423__auto__ = (function (){var statearr_14878 = f__14422__auto__();
(statearr_14878[(6)] = c__14421__auto___17962);

return statearr_14878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
});})(__17945,c__14421__auto___17962,G__14795_17946,G__14795_17947__$1,n__5593__auto___17944,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14795_17947__$1)].join('')));

}

var G__17984 = (__17945 + (1));
__17945 = G__17984;
continue;
} else {
}
break;
}

var c__14421__auto___17985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_14903){
var state_val_14904 = (state_14903[(1)]);
if((state_val_14904 === (7))){
var inst_14899 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
var statearr_14925_17987 = state_14903__$1;
(statearr_14925_17987[(2)] = inst_14899);

(statearr_14925_17987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (1))){
var state_14903__$1 = state_14903;
var statearr_14928_17988 = state_14903__$1;
(statearr_14928_17988[(2)] = null);

(statearr_14928_17988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (4))){
var inst_14884 = (state_14903[(7)]);
var inst_14884__$1 = (state_14903[(2)]);
var inst_14885 = (inst_14884__$1 == null);
var state_14903__$1 = (function (){var statearr_14936 = state_14903;
(statearr_14936[(7)] = inst_14884__$1);

return statearr_14936;
})();
if(cljs.core.truth_(inst_14885)){
var statearr_14937_17989 = state_14903__$1;
(statearr_14937_17989[(1)] = (5));

} else {
var statearr_14938_17990 = state_14903__$1;
(statearr_14938_17990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (6))){
var inst_14884 = (state_14903[(7)]);
var inst_14889 = (state_14903[(8)]);
var inst_14889__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14891 = [inst_14884,inst_14889__$1];
var inst_14892 = (new cljs.core.PersistentVector(null,2,(5),inst_14890,inst_14891,null));
var state_14903__$1 = (function (){var statearr_14940 = state_14903;
(statearr_14940[(8)] = inst_14889__$1);

return statearr_14940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14903__$1,(8),jobs,inst_14892);
} else {
if((state_val_14904 === (3))){
var inst_14901 = (state_14903[(2)]);
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14903__$1,inst_14901);
} else {
if((state_val_14904 === (2))){
var state_14903__$1 = state_14903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14903__$1,(4),from);
} else {
if((state_val_14904 === (9))){
var inst_14896 = (state_14903[(2)]);
var state_14903__$1 = (function (){var statearr_14947 = state_14903;
(statearr_14947[(9)] = inst_14896);

return statearr_14947;
})();
var statearr_14948_17991 = state_14903__$1;
(statearr_14948_17991[(2)] = null);

(statearr_14948_17991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (5))){
var inst_14887 = cljs.core.async.close_BANG_(jobs);
var state_14903__$1 = state_14903;
var statearr_14949_17992 = state_14903__$1;
(statearr_14949_17992[(2)] = inst_14887);

(statearr_14949_17992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14904 === (8))){
var inst_14889 = (state_14903[(8)]);
var inst_14894 = (state_14903[(2)]);
var state_14903__$1 = (function (){var statearr_14950 = state_14903;
(statearr_14950[(10)] = inst_14894);

return statearr_14950;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14903__$1,(9),results,inst_14889);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0 = (function (){
var statearr_14954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__);

(statearr_14954[(1)] = (1));

return statearr_14954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1 = (function (state_14903){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_14903);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e14955){var ex__14206__auto__ = e14955;
var statearr_14956_17997 = state_14903;
(statearr_14956_17997[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_14903[(4)]))){
var statearr_14957_17998 = state_14903;
(statearr_14957_17998[(1)] = cljs.core.first((state_14903[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17999 = state_14903;
state_14903 = G__17999;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = function(state_14903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1.call(this,state_14903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_14958 = f__14422__auto__();
(statearr_14958[(6)] = c__14421__auto___17985);

return statearr_14958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


var c__14421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_15001){
var state_val_15003 = (state_15001[(1)]);
if((state_val_15003 === (7))){
var inst_14996 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15005_18000 = state_15001__$1;
(statearr_15005_18000[(2)] = inst_14996);

(statearr_15005_18000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (20))){
var state_15001__$1 = state_15001;
var statearr_15006_18001 = state_15001__$1;
(statearr_15006_18001[(2)] = null);

(statearr_15006_18001[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (1))){
var state_15001__$1 = state_15001;
var statearr_15007_18002 = state_15001__$1;
(statearr_15007_18002[(2)] = null);

(statearr_15007_18002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (4))){
var inst_14961 = (state_15001[(7)]);
var inst_14961__$1 = (state_15001[(2)]);
var inst_14965 = (inst_14961__$1 == null);
var state_15001__$1 = (function (){var statearr_15008 = state_15001;
(statearr_15008[(7)] = inst_14961__$1);

return statearr_15008;
})();
if(cljs.core.truth_(inst_14965)){
var statearr_15009_18013 = state_15001__$1;
(statearr_15009_18013[(1)] = (5));

} else {
var statearr_15013_18014 = state_15001__$1;
(statearr_15013_18014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (15))){
var inst_14977 = (state_15001[(8)]);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15001__$1,(18),to,inst_14977);
} else {
if((state_val_15003 === (21))){
var inst_14991 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15016_18016 = state_15001__$1;
(statearr_15016_18016[(2)] = inst_14991);

(statearr_15016_18016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (13))){
var inst_14993 = (state_15001[(2)]);
var state_15001__$1 = (function (){var statearr_15019 = state_15001;
(statearr_15019[(9)] = inst_14993);

return statearr_15019;
})();
var statearr_15020_18017 = state_15001__$1;
(statearr_15020_18017[(2)] = null);

(statearr_15020_18017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (6))){
var inst_14961 = (state_15001[(7)]);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15001__$1,(11),inst_14961);
} else {
if((state_val_15003 === (17))){
var inst_14986 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
if(cljs.core.truth_(inst_14986)){
var statearr_15021_18018 = state_15001__$1;
(statearr_15021_18018[(1)] = (19));

} else {
var statearr_15022_18019 = state_15001__$1;
(statearr_15022_18019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (3))){
var inst_14998 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15001__$1,inst_14998);
} else {
if((state_val_15003 === (12))){
var inst_14974 = (state_15001[(10)]);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15001__$1,(14),inst_14974);
} else {
if((state_val_15003 === (2))){
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15001__$1,(4),results);
} else {
if((state_val_15003 === (19))){
var state_15001__$1 = state_15001;
var statearr_15023_18024 = state_15001__$1;
(statearr_15023_18024[(2)] = null);

(statearr_15023_18024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (11))){
var inst_14974 = (state_15001[(2)]);
var state_15001__$1 = (function (){var statearr_15024 = state_15001;
(statearr_15024[(10)] = inst_14974);

return statearr_15024;
})();
var statearr_15025_18033 = state_15001__$1;
(statearr_15025_18033[(2)] = null);

(statearr_15025_18033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (9))){
var state_15001__$1 = state_15001;
var statearr_15026_18034 = state_15001__$1;
(statearr_15026_18034[(2)] = null);

(statearr_15026_18034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (5))){
var state_15001__$1 = state_15001;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15027_18035 = state_15001__$1;
(statearr_15027_18035[(1)] = (8));

} else {
var statearr_15029_18036 = state_15001__$1;
(statearr_15029_18036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (14))){
var inst_14977 = (state_15001[(8)]);
var inst_14979 = (state_15001[(11)]);
var inst_14977__$1 = (state_15001[(2)]);
var inst_14978 = (inst_14977__$1 == null);
var inst_14979__$1 = cljs.core.not(inst_14978);
var state_15001__$1 = (function (){var statearr_15032 = state_15001;
(statearr_15032[(8)] = inst_14977__$1);

(statearr_15032[(11)] = inst_14979__$1);

return statearr_15032;
})();
if(inst_14979__$1){
var statearr_15034_18037 = state_15001__$1;
(statearr_15034_18037[(1)] = (15));

} else {
var statearr_15035_18038 = state_15001__$1;
(statearr_15035_18038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (16))){
var inst_14979 = (state_15001[(11)]);
var state_15001__$1 = state_15001;
var statearr_15037_18041 = state_15001__$1;
(statearr_15037_18041[(2)] = inst_14979);

(statearr_15037_18041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (10))){
var inst_14971 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15038_18043 = state_15001__$1;
(statearr_15038_18043[(2)] = inst_14971);

(statearr_15038_18043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (18))){
var inst_14983 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15039_18048 = state_15001__$1;
(statearr_15039_18048[(2)] = inst_14983);

(statearr_15039_18048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (8))){
var inst_14968 = cljs.core.async.close_BANG_(to);
var state_15001__$1 = state_15001;
var statearr_15041_18049 = state_15001__$1;
(statearr_15041_18049[(2)] = inst_14968);

(statearr_15041_18049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0 = (function (){
var statearr_15044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__);

(statearr_15044[(1)] = (1));

return statearr_15044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1 = (function (state_15001){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_15001);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e15047){var ex__14206__auto__ = e15047;
var statearr_15048_18054 = state_15001;
(statearr_15048_18054[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_15001[(4)]))){
var statearr_15049_18056 = state_15001;
(statearr_15049_18056[(1)] = cljs.core.first((state_15001[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18057 = state_15001;
state_15001 = G__18057;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__ = function(state_15001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1.call(this,state_15001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_15054 = f__14422__auto__();
(statearr_15054[(6)] = c__14421__auto__);

return statearr_15054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));

return c__14421__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15060 = arguments.length;
switch (G__15060) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15072 = arguments.length;
switch (G__15072) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15081 = arguments.length;
switch (G__15081) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14421__auto___18088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_15116){
var state_val_15117 = (state_15116[(1)]);
if((state_val_15117 === (7))){
var inst_15111 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
var statearr_15118_18089 = state_15116__$1;
(statearr_15118_18089[(2)] = inst_15111);

(statearr_15118_18089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (1))){
var state_15116__$1 = state_15116;
var statearr_15119_18090 = state_15116__$1;
(statearr_15119_18090[(2)] = null);

(statearr_15119_18090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (4))){
var inst_15092 = (state_15116[(7)]);
var inst_15092__$1 = (state_15116[(2)]);
var inst_15093 = (inst_15092__$1 == null);
var state_15116__$1 = (function (){var statearr_15122 = state_15116;
(statearr_15122[(7)] = inst_15092__$1);

return statearr_15122;
})();
if(cljs.core.truth_(inst_15093)){
var statearr_15125_18091 = state_15116__$1;
(statearr_15125_18091[(1)] = (5));

} else {
var statearr_15126_18092 = state_15116__$1;
(statearr_15126_18092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (13))){
var state_15116__$1 = state_15116;
var statearr_15127_18093 = state_15116__$1;
(statearr_15127_18093[(2)] = null);

(statearr_15127_18093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (6))){
var inst_15092 = (state_15116[(7)]);
var inst_15098 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15092) : p.call(null, inst_15092));
var state_15116__$1 = state_15116;
if(cljs.core.truth_(inst_15098)){
var statearr_15128_18094 = state_15116__$1;
(statearr_15128_18094[(1)] = (9));

} else {
var statearr_15129_18095 = state_15116__$1;
(statearr_15129_18095[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (3))){
var inst_15113 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15116__$1,inst_15113);
} else {
if((state_val_15117 === (12))){
var state_15116__$1 = state_15116;
var statearr_15132_18096 = state_15116__$1;
(statearr_15132_18096[(2)] = null);

(statearr_15132_18096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (2))){
var state_15116__$1 = state_15116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15116__$1,(4),ch);
} else {
if((state_val_15117 === (11))){
var inst_15092 = (state_15116[(7)]);
var inst_15102 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15116__$1,(8),inst_15102,inst_15092);
} else {
if((state_val_15117 === (9))){
var state_15116__$1 = state_15116;
var statearr_15137_18100 = state_15116__$1;
(statearr_15137_18100[(2)] = tc);

(statearr_15137_18100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (5))){
var inst_15095 = cljs.core.async.close_BANG_(tc);
var inst_15096 = cljs.core.async.close_BANG_(fc);
var state_15116__$1 = (function (){var statearr_15141 = state_15116;
(statearr_15141[(8)] = inst_15095);

return statearr_15141;
})();
var statearr_15142_18101 = state_15116__$1;
(statearr_15142_18101[(2)] = inst_15096);

(statearr_15142_18101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (14))){
var inst_15109 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
var statearr_15143_18103 = state_15116__$1;
(statearr_15143_18103[(2)] = inst_15109);

(statearr_15143_18103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (10))){
var state_15116__$1 = state_15116;
var statearr_15144_18105 = state_15116__$1;
(statearr_15144_18105[(2)] = fc);

(statearr_15144_18105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15117 === (8))){
var inst_15104 = (state_15116[(2)]);
var state_15116__$1 = state_15116;
if(cljs.core.truth_(inst_15104)){
var statearr_15145_18106 = state_15116__$1;
(statearr_15145_18106[(1)] = (12));

} else {
var statearr_15146_18107 = state_15116__$1;
(statearr_15146_18107[(1)] = (13));

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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_15148 = [null,null,null,null,null,null,null,null,null];
(statearr_15148[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_15148[(1)] = (1));

return statearr_15148;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_15116){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_15116);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e15149){var ex__14206__auto__ = e15149;
var statearr_15150_18108 = state_15116;
(statearr_15150_18108[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_15116[(4)]))){
var statearr_15151_18109 = state_15116;
(statearr_15151_18109[(1)] = cljs.core.first((state_15116[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18110 = state_15116;
state_15116 = G__18110;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_15116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_15116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_15154 = f__14422__auto__();
(statearr_15154[(6)] = c__14421__auto___18088);

return statearr_15154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_15184){
var state_val_15185 = (state_15184[(1)]);
if((state_val_15185 === (7))){
var inst_15180 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
var statearr_15193_18111 = state_15184__$1;
(statearr_15193_18111[(2)] = inst_15180);

(statearr_15193_18111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (1))){
var inst_15162 = init;
var inst_15163 = inst_15162;
var state_15184__$1 = (function (){var statearr_15199 = state_15184;
(statearr_15199[(7)] = inst_15163);

return statearr_15199;
})();
var statearr_15204_18112 = state_15184__$1;
(statearr_15204_18112[(2)] = null);

(statearr_15204_18112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (4))){
var inst_15166 = (state_15184[(8)]);
var inst_15166__$1 = (state_15184[(2)]);
var inst_15167 = (inst_15166__$1 == null);
var state_15184__$1 = (function (){var statearr_15213 = state_15184;
(statearr_15213[(8)] = inst_15166__$1);

return statearr_15213;
})();
if(cljs.core.truth_(inst_15167)){
var statearr_15214_18113 = state_15184__$1;
(statearr_15214_18113[(1)] = (5));

} else {
var statearr_15215_18114 = state_15184__$1;
(statearr_15215_18114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (6))){
var inst_15163 = (state_15184[(7)]);
var inst_15166 = (state_15184[(8)]);
var inst_15170 = (state_15184[(9)]);
var inst_15170__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15163,inst_15166) : f.call(null, inst_15163,inst_15166));
var inst_15171 = cljs.core.reduced_QMARK_(inst_15170__$1);
var state_15184__$1 = (function (){var statearr_15218 = state_15184;
(statearr_15218[(9)] = inst_15170__$1);

return statearr_15218;
})();
if(inst_15171){
var statearr_15220_18118 = state_15184__$1;
(statearr_15220_18118[(1)] = (8));

} else {
var statearr_15221_18119 = state_15184__$1;
(statearr_15221_18119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (3))){
var inst_15182 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15184__$1,inst_15182);
} else {
if((state_val_15185 === (2))){
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15184__$1,(4),ch);
} else {
if((state_val_15185 === (9))){
var inst_15170 = (state_15184[(9)]);
var inst_15163 = inst_15170;
var state_15184__$1 = (function (){var statearr_15223 = state_15184;
(statearr_15223[(7)] = inst_15163);

return statearr_15223;
})();
var statearr_15224_18125 = state_15184__$1;
(statearr_15224_18125[(2)] = null);

(statearr_15224_18125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (5))){
var inst_15163 = (state_15184[(7)]);
var state_15184__$1 = state_15184;
var statearr_15225_18127 = state_15184__$1;
(statearr_15225_18127[(2)] = inst_15163);

(statearr_15225_18127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (10))){
var inst_15178 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
var statearr_15228_18128 = state_15184__$1;
(statearr_15228_18128[(2)] = inst_15178);

(statearr_15228_18128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (8))){
var inst_15170 = (state_15184[(9)]);
var inst_15174 = cljs.core.deref(inst_15170);
var state_15184__$1 = state_15184;
var statearr_15229_18129 = state_15184__$1;
(statearr_15229_18129[(2)] = inst_15174);

(statearr_15229_18129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14203__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14203__auto____0 = (function (){
var statearr_15230 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15230[(0)] = cljs$core$async$reduce_$_state_machine__14203__auto__);

(statearr_15230[(1)] = (1));

return statearr_15230;
});
var cljs$core$async$reduce_$_state_machine__14203__auto____1 = (function (state_15184){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_15184);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e15231){var ex__14206__auto__ = e15231;
var statearr_15232_18139 = state_15184;
(statearr_15232_18139[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_15184[(4)]))){
var statearr_15234_18140 = state_15184;
(statearr_15234_18140[(1)] = cljs.core.first((state_15184[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18143 = state_15184;
state_15184 = G__18143;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14203__auto__ = function(state_15184){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14203__auto____1.call(this,state_15184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14203__auto____0;
cljs$core$async$reduce_$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14203__auto____1;
return cljs$core$async$reduce_$_state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_15236 = f__14422__auto__();
(statearr_15236[(6)] = c__14421__auto__);

return statearr_15236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));

return c__14421__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_15245){
var state_val_15246 = (state_15245[(1)]);
if((state_val_15246 === (1))){
var inst_15240 = cljs.core.async.reduce(f__$1,init,ch);
var state_15245__$1 = state_15245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15245__$1,(2),inst_15240);
} else {
if((state_val_15246 === (2))){
var inst_15242 = (state_15245[(2)]);
var inst_15243 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15242) : f__$1.call(null, inst_15242));
var state_15245__$1 = state_15245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15245__$1,inst_15243);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14203__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14203__auto____0 = (function (){
var statearr_15255 = [null,null,null,null,null,null,null];
(statearr_15255[(0)] = cljs$core$async$transduce_$_state_machine__14203__auto__);

(statearr_15255[(1)] = (1));

return statearr_15255;
});
var cljs$core$async$transduce_$_state_machine__14203__auto____1 = (function (state_15245){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_15245);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e15256){var ex__14206__auto__ = e15256;
var statearr_15257_18151 = state_15245;
(statearr_15257_18151[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_15245[(4)]))){
var statearr_15261_18152 = state_15245;
(statearr_15261_18152[(1)] = cljs.core.first((state_15245[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18157 = state_15245;
state_15245 = G__18157;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14203__auto__ = function(state_15245){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14203__auto____1.call(this,state_15245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14203__auto____0;
cljs$core$async$transduce_$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14203__auto____1;
return cljs$core$async$transduce_$_state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_15263 = f__14422__auto__();
(statearr_15263[(6)] = c__14421__auto__);

return statearr_15263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));

return c__14421__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15268 = arguments.length;
switch (G__15268) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_15301){
var state_val_15302 = (state_15301[(1)]);
if((state_val_15302 === (7))){
var inst_15279 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
var statearr_15306_18178 = state_15301__$1;
(statearr_15306_18178[(2)] = inst_15279);

(statearr_15306_18178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (1))){
var inst_15273 = cljs.core.seq(coll);
var inst_15274 = inst_15273;
var state_15301__$1 = (function (){var statearr_15315 = state_15301;
(statearr_15315[(7)] = inst_15274);

return statearr_15315;
})();
var statearr_15320_18190 = state_15301__$1;
(statearr_15320_18190[(2)] = null);

(statearr_15320_18190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (4))){
var inst_15274 = (state_15301[(7)]);
var inst_15277 = cljs.core.first(inst_15274);
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15301__$1,(7),ch,inst_15277);
} else {
if((state_val_15302 === (13))){
var inst_15294 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
var statearr_15328_18201 = state_15301__$1;
(statearr_15328_18201[(2)] = inst_15294);

(statearr_15328_18201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (6))){
var inst_15282 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
if(cljs.core.truth_(inst_15282)){
var statearr_15332_18212 = state_15301__$1;
(statearr_15332_18212[(1)] = (8));

} else {
var statearr_15334_18213 = state_15301__$1;
(statearr_15334_18213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (3))){
var inst_15299 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15301__$1,inst_15299);
} else {
if((state_val_15302 === (12))){
var state_15301__$1 = state_15301;
var statearr_15336_18217 = state_15301__$1;
(statearr_15336_18217[(2)] = null);

(statearr_15336_18217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (2))){
var inst_15274 = (state_15301[(7)]);
var state_15301__$1 = state_15301;
if(cljs.core.truth_(inst_15274)){
var statearr_15344_18219 = state_15301__$1;
(statearr_15344_18219[(1)] = (4));

} else {
var statearr_15345_18220 = state_15301__$1;
(statearr_15345_18220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (11))){
var inst_15291 = cljs.core.async.close_BANG_(ch);
var state_15301__$1 = state_15301;
var statearr_15347_18227 = state_15301__$1;
(statearr_15347_18227[(2)] = inst_15291);

(statearr_15347_18227[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (9))){
var state_15301__$1 = state_15301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15354_18228 = state_15301__$1;
(statearr_15354_18228[(1)] = (11));

} else {
var statearr_15355_18233 = state_15301__$1;
(statearr_15355_18233[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (5))){
var inst_15274 = (state_15301[(7)]);
var state_15301__$1 = state_15301;
var statearr_15356_18242 = state_15301__$1;
(statearr_15356_18242[(2)] = inst_15274);

(statearr_15356_18242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (10))){
var inst_15296 = (state_15301[(2)]);
var state_15301__$1 = state_15301;
var statearr_15361_18250 = state_15301__$1;
(statearr_15361_18250[(2)] = inst_15296);

(statearr_15361_18250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15302 === (8))){
var inst_15274 = (state_15301[(7)]);
var inst_15287 = cljs.core.next(inst_15274);
var inst_15274__$1 = inst_15287;
var state_15301__$1 = (function (){var statearr_15362 = state_15301;
(statearr_15362[(7)] = inst_15274__$1);

return statearr_15362;
})();
var statearr_15363_18251 = state_15301__$1;
(statearr_15363_18251[(2)] = null);

(statearr_15363_18251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_15374 = [null,null,null,null,null,null,null,null];
(statearr_15374[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_15374[(1)] = (1));

return statearr_15374;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_15301){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_15301);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e15379){var ex__14206__auto__ = e15379;
var statearr_15382_18252 = state_15301;
(statearr_15382_18252[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_15301[(4)]))){
var statearr_15386_18253 = state_15301;
(statearr_15386_18253[(1)] = cljs.core.first((state_15301[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18254 = state_15301;
state_15301 = G__18254;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_15301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_15301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_15400 = f__14422__auto__();
(statearr_15400[(6)] = c__14421__auto__);

return statearr_15400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));

return c__14421__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15413 = arguments.length;
switch (G__15413) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18256 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18256(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18257 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18257(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18260 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18260(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18278 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18278(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15433 = (function (ch,cs,meta15434){
this.ch = ch;
this.cs = cs;
this.meta15434 = meta15434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15435,meta15434__$1){
var self__ = this;
var _15435__$1 = this;
return (new cljs.core.async.t_cljs$core$async15433(self__.ch,self__.cs,meta15434__$1));
}));

(cljs.core.async.t_cljs$core$async15433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15435){
var self__ = this;
var _15435__$1 = this;
return self__.meta15434;
}));

(cljs.core.async.t_cljs$core$async15433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15433.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15433.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15433.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15433.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15434","meta15434",1976905045,null)], null);
}));

(cljs.core.async.t_cljs$core$async15433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15433");

(cljs.core.async.t_cljs$core$async15433.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15433.
 */
cljs.core.async.__GT_t_cljs$core$async15433 = (function cljs$core$async$__GT_t_cljs$core$async15433(ch,cs,meta15434){
return (new cljs.core.async.t_cljs$core$async15433(ch,cs,meta15434));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15433(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14421__auto___18327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_15666){
var state_val_15670 = (state_15666[(1)]);
if((state_val_15670 === (7))){
var inst_15652 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15677_18330 = state_15666__$1;
(statearr_15677_18330[(2)] = inst_15652);

(statearr_15677_18330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (20))){
var inst_15537 = (state_15666[(7)]);
var inst_15549 = cljs.core.first(inst_15537);
var inst_15550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15549,(0),null);
var inst_15551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15549,(1),null);
var state_15666__$1 = (function (){var statearr_15680 = state_15666;
(statearr_15680[(8)] = inst_15550);

return statearr_15680;
})();
if(cljs.core.truth_(inst_15551)){
var statearr_15681_18331 = state_15666__$1;
(statearr_15681_18331[(1)] = (22));

} else {
var statearr_15682_18332 = state_15666__$1;
(statearr_15682_18332[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (27))){
var inst_15588 = (state_15666[(9)]);
var inst_15505 = (state_15666[(10)]);
var inst_15580 = (state_15666[(11)]);
var inst_15582 = (state_15666[(12)]);
var inst_15588__$1 = cljs.core._nth(inst_15580,inst_15582);
var inst_15589 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15588__$1,inst_15505,done);
var state_15666__$1 = (function (){var statearr_15687 = state_15666;
(statearr_15687[(9)] = inst_15588__$1);

return statearr_15687;
})();
if(cljs.core.truth_(inst_15589)){
var statearr_15688_18333 = state_15666__$1;
(statearr_15688_18333[(1)] = (30));

} else {
var statearr_15689_18334 = state_15666__$1;
(statearr_15689_18334[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (1))){
var state_15666__$1 = state_15666;
var statearr_15695_18335 = state_15666__$1;
(statearr_15695_18335[(2)] = null);

(statearr_15695_18335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (24))){
var inst_15537 = (state_15666[(7)]);
var inst_15556 = (state_15666[(2)]);
var inst_15557 = cljs.core.next(inst_15537);
var inst_15514 = inst_15557;
var inst_15515 = null;
var inst_15516 = (0);
var inst_15517 = (0);
var state_15666__$1 = (function (){var statearr_15696 = state_15666;
(statearr_15696[(13)] = inst_15517);

(statearr_15696[(14)] = inst_15556);

(statearr_15696[(15)] = inst_15514);

(statearr_15696[(16)] = inst_15515);

(statearr_15696[(17)] = inst_15516);

return statearr_15696;
})();
var statearr_15700_18344 = state_15666__$1;
(statearr_15700_18344[(2)] = null);

(statearr_15700_18344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (39))){
var state_15666__$1 = state_15666;
var statearr_15734_18347 = state_15666__$1;
(statearr_15734_18347[(2)] = null);

(statearr_15734_18347[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (4))){
var inst_15505 = (state_15666[(10)]);
var inst_15505__$1 = (state_15666[(2)]);
var inst_15506 = (inst_15505__$1 == null);
var state_15666__$1 = (function (){var statearr_15735 = state_15666;
(statearr_15735[(10)] = inst_15505__$1);

return statearr_15735;
})();
if(cljs.core.truth_(inst_15506)){
var statearr_15736_18349 = state_15666__$1;
(statearr_15736_18349[(1)] = (5));

} else {
var statearr_15737_18350 = state_15666__$1;
(statearr_15737_18350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (15))){
var inst_15517 = (state_15666[(13)]);
var inst_15514 = (state_15666[(15)]);
var inst_15515 = (state_15666[(16)]);
var inst_15516 = (state_15666[(17)]);
var inst_15533 = (state_15666[(2)]);
var inst_15534 = (inst_15517 + (1));
var tmp15731 = inst_15514;
var tmp15732 = inst_15515;
var tmp15733 = inst_15516;
var inst_15514__$1 = tmp15731;
var inst_15515__$1 = tmp15732;
var inst_15516__$1 = tmp15733;
var inst_15517__$1 = inst_15534;
var state_15666__$1 = (function (){var statearr_15739 = state_15666;
(statearr_15739[(13)] = inst_15517__$1);

(statearr_15739[(15)] = inst_15514__$1);

(statearr_15739[(16)] = inst_15515__$1);

(statearr_15739[(17)] = inst_15516__$1);

(statearr_15739[(18)] = inst_15533);

return statearr_15739;
})();
var statearr_15741_18351 = state_15666__$1;
(statearr_15741_18351[(2)] = null);

(statearr_15741_18351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (21))){
var inst_15560 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15746_18352 = state_15666__$1;
(statearr_15746_18352[(2)] = inst_15560);

(statearr_15746_18352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (31))){
var inst_15588 = (state_15666[(9)]);
var inst_15592 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15588);
var state_15666__$1 = state_15666;
var statearr_15747_18354 = state_15666__$1;
(statearr_15747_18354[(2)] = inst_15592);

(statearr_15747_18354[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (32))){
var inst_15581 = (state_15666[(19)]);
var inst_15579 = (state_15666[(20)]);
var inst_15580 = (state_15666[(11)]);
var inst_15582 = (state_15666[(12)]);
var inst_15594 = (state_15666[(2)]);
var inst_15595 = (inst_15582 + (1));
var tmp15743 = inst_15581;
var tmp15744 = inst_15579;
var tmp15745 = inst_15580;
var inst_15579__$1 = tmp15744;
var inst_15580__$1 = tmp15745;
var inst_15581__$1 = tmp15743;
var inst_15582__$1 = inst_15595;
var state_15666__$1 = (function (){var statearr_15750 = state_15666;
(statearr_15750[(21)] = inst_15594);

(statearr_15750[(19)] = inst_15581__$1);

(statearr_15750[(20)] = inst_15579__$1);

(statearr_15750[(11)] = inst_15580__$1);

(statearr_15750[(12)] = inst_15582__$1);

return statearr_15750;
})();
var statearr_15752_18358 = state_15666__$1;
(statearr_15752_18358[(2)] = null);

(statearr_15752_18358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (40))){
var inst_15622 = (state_15666[(22)]);
var inst_15629 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15622);
var state_15666__$1 = state_15666;
var statearr_15754_18366 = state_15666__$1;
(statearr_15754_18366[(2)] = inst_15629);

(statearr_15754_18366[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (33))){
var inst_15603 = (state_15666[(23)]);
var inst_15609 = cljs.core.chunked_seq_QMARK_(inst_15603);
var state_15666__$1 = state_15666;
if(inst_15609){
var statearr_15756_18367 = state_15666__$1;
(statearr_15756_18367[(1)] = (36));

} else {
var statearr_15757_18368 = state_15666__$1;
(statearr_15757_18368[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (13))){
var inst_15526 = (state_15666[(24)]);
var inst_15529 = cljs.core.async.close_BANG_(inst_15526);
var state_15666__$1 = state_15666;
var statearr_15758_18369 = state_15666__$1;
(statearr_15758_18369[(2)] = inst_15529);

(statearr_15758_18369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (22))){
var inst_15550 = (state_15666[(8)]);
var inst_15553 = cljs.core.async.close_BANG_(inst_15550);
var state_15666__$1 = state_15666;
var statearr_15760_18370 = state_15666__$1;
(statearr_15760_18370[(2)] = inst_15553);

(statearr_15760_18370[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (36))){
var inst_15603 = (state_15666[(23)]);
var inst_15613 = cljs.core.chunk_first(inst_15603);
var inst_15614 = cljs.core.chunk_rest(inst_15603);
var inst_15619 = cljs.core.count(inst_15613);
var inst_15579 = inst_15614;
var inst_15580 = inst_15613;
var inst_15581 = inst_15619;
var inst_15582 = (0);
var state_15666__$1 = (function (){var statearr_15762 = state_15666;
(statearr_15762[(19)] = inst_15581);

(statearr_15762[(20)] = inst_15579);

(statearr_15762[(11)] = inst_15580);

(statearr_15762[(12)] = inst_15582);

return statearr_15762;
})();
var statearr_15765_18371 = state_15666__$1;
(statearr_15765_18371[(2)] = null);

(statearr_15765_18371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (41))){
var inst_15603 = (state_15666[(23)]);
var inst_15631 = (state_15666[(2)]);
var inst_15632 = cljs.core.next(inst_15603);
var inst_15579 = inst_15632;
var inst_15580 = null;
var inst_15581 = (0);
var inst_15582 = (0);
var state_15666__$1 = (function (){var statearr_15770 = state_15666;
(statearr_15770[(25)] = inst_15631);

(statearr_15770[(19)] = inst_15581);

(statearr_15770[(20)] = inst_15579);

(statearr_15770[(11)] = inst_15580);

(statearr_15770[(12)] = inst_15582);

return statearr_15770;
})();
var statearr_15771_18374 = state_15666__$1;
(statearr_15771_18374[(2)] = null);

(statearr_15771_18374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (43))){
var state_15666__$1 = state_15666;
var statearr_15772_18376 = state_15666__$1;
(statearr_15772_18376[(2)] = null);

(statearr_15772_18376[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (29))){
var inst_15640 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15775_18379 = state_15666__$1;
(statearr_15775_18379[(2)] = inst_15640);

(statearr_15775_18379[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (44))){
var inst_15649 = (state_15666[(2)]);
var state_15666__$1 = (function (){var statearr_15779 = state_15666;
(statearr_15779[(26)] = inst_15649);

return statearr_15779;
})();
var statearr_15780_18380 = state_15666__$1;
(statearr_15780_18380[(2)] = null);

(statearr_15780_18380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (6))){
var inst_15571 = (state_15666[(27)]);
var inst_15570 = cljs.core.deref(cs);
var inst_15571__$1 = cljs.core.keys(inst_15570);
var inst_15572 = cljs.core.count(inst_15571__$1);
var inst_15573 = cljs.core.reset_BANG_(dctr,inst_15572);
var inst_15578 = cljs.core.seq(inst_15571__$1);
var inst_15579 = inst_15578;
var inst_15580 = null;
var inst_15581 = (0);
var inst_15582 = (0);
var state_15666__$1 = (function (){var statearr_15787 = state_15666;
(statearr_15787[(19)] = inst_15581);

(statearr_15787[(28)] = inst_15573);

(statearr_15787[(27)] = inst_15571__$1);

(statearr_15787[(20)] = inst_15579);

(statearr_15787[(11)] = inst_15580);

(statearr_15787[(12)] = inst_15582);

return statearr_15787;
})();
var statearr_15788_18390 = state_15666__$1;
(statearr_15788_18390[(2)] = null);

(statearr_15788_18390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (28))){
var inst_15603 = (state_15666[(23)]);
var inst_15579 = (state_15666[(20)]);
var inst_15603__$1 = cljs.core.seq(inst_15579);
var state_15666__$1 = (function (){var statearr_15789 = state_15666;
(statearr_15789[(23)] = inst_15603__$1);

return statearr_15789;
})();
if(inst_15603__$1){
var statearr_15790_18392 = state_15666__$1;
(statearr_15790_18392[(1)] = (33));

} else {
var statearr_15791_18393 = state_15666__$1;
(statearr_15791_18393[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (25))){
var inst_15581 = (state_15666[(19)]);
var inst_15582 = (state_15666[(12)]);
var inst_15585 = (inst_15582 < inst_15581);
var inst_15586 = inst_15585;
var state_15666__$1 = state_15666;
if(cljs.core.truth_(inst_15586)){
var statearr_15794_18394 = state_15666__$1;
(statearr_15794_18394[(1)] = (27));

} else {
var statearr_15796_18395 = state_15666__$1;
(statearr_15796_18395[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (34))){
var state_15666__$1 = state_15666;
var statearr_15797_18396 = state_15666__$1;
(statearr_15797_18396[(2)] = null);

(statearr_15797_18396[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (17))){
var state_15666__$1 = state_15666;
var statearr_15798_18397 = state_15666__$1;
(statearr_15798_18397[(2)] = null);

(statearr_15798_18397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (3))){
var inst_15655 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15666__$1,inst_15655);
} else {
if((state_val_15670 === (12))){
var inst_15565 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15801_18398 = state_15666__$1;
(statearr_15801_18398[(2)] = inst_15565);

(statearr_15801_18398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (2))){
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15666__$1,(4),ch);
} else {
if((state_val_15670 === (23))){
var state_15666__$1 = state_15666;
var statearr_15802_18399 = state_15666__$1;
(statearr_15802_18399[(2)] = null);

(statearr_15802_18399[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (35))){
var inst_15638 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15804_18402 = state_15666__$1;
(statearr_15804_18402[(2)] = inst_15638);

(statearr_15804_18402[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (19))){
var inst_15537 = (state_15666[(7)]);
var inst_15541 = cljs.core.chunk_first(inst_15537);
var inst_15542 = cljs.core.chunk_rest(inst_15537);
var inst_15543 = cljs.core.count(inst_15541);
var inst_15514 = inst_15542;
var inst_15515 = inst_15541;
var inst_15516 = inst_15543;
var inst_15517 = (0);
var state_15666__$1 = (function (){var statearr_15809 = state_15666;
(statearr_15809[(13)] = inst_15517);

(statearr_15809[(15)] = inst_15514);

(statearr_15809[(16)] = inst_15515);

(statearr_15809[(17)] = inst_15516);

return statearr_15809;
})();
var statearr_15810_18403 = state_15666__$1;
(statearr_15810_18403[(2)] = null);

(statearr_15810_18403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (11))){
var inst_15514 = (state_15666[(15)]);
var inst_15537 = (state_15666[(7)]);
var inst_15537__$1 = cljs.core.seq(inst_15514);
var state_15666__$1 = (function (){var statearr_15811 = state_15666;
(statearr_15811[(7)] = inst_15537__$1);

return statearr_15811;
})();
if(inst_15537__$1){
var statearr_15812_18404 = state_15666__$1;
(statearr_15812_18404[(1)] = (16));

} else {
var statearr_15813_18405 = state_15666__$1;
(statearr_15813_18405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (9))){
var inst_15568 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15814_18410 = state_15666__$1;
(statearr_15814_18410[(2)] = inst_15568);

(statearr_15814_18410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (5))){
var inst_15512 = cljs.core.deref(cs);
var inst_15513 = cljs.core.seq(inst_15512);
var inst_15514 = inst_15513;
var inst_15515 = null;
var inst_15516 = (0);
var inst_15517 = (0);
var state_15666__$1 = (function (){var statearr_15815 = state_15666;
(statearr_15815[(13)] = inst_15517);

(statearr_15815[(15)] = inst_15514);

(statearr_15815[(16)] = inst_15515);

(statearr_15815[(17)] = inst_15516);

return statearr_15815;
})();
var statearr_15820_18412 = state_15666__$1;
(statearr_15820_18412[(2)] = null);

(statearr_15820_18412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (14))){
var state_15666__$1 = state_15666;
var statearr_15825_18413 = state_15666__$1;
(statearr_15825_18413[(2)] = null);

(statearr_15825_18413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (45))){
var inst_15646 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15831_18414 = state_15666__$1;
(statearr_15831_18414[(2)] = inst_15646);

(statearr_15831_18414[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (26))){
var inst_15571 = (state_15666[(27)]);
var inst_15642 = (state_15666[(2)]);
var inst_15643 = cljs.core.seq(inst_15571);
var state_15666__$1 = (function (){var statearr_15832 = state_15666;
(statearr_15832[(29)] = inst_15642);

return statearr_15832;
})();
if(inst_15643){
var statearr_15833_18418 = state_15666__$1;
(statearr_15833_18418[(1)] = (42));

} else {
var statearr_15834_18419 = state_15666__$1;
(statearr_15834_18419[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (16))){
var inst_15537 = (state_15666[(7)]);
var inst_15539 = cljs.core.chunked_seq_QMARK_(inst_15537);
var state_15666__$1 = state_15666;
if(inst_15539){
var statearr_15835_18420 = state_15666__$1;
(statearr_15835_18420[(1)] = (19));

} else {
var statearr_15836_18421 = state_15666__$1;
(statearr_15836_18421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (38))){
var inst_15635 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15840_18427 = state_15666__$1;
(statearr_15840_18427[(2)] = inst_15635);

(statearr_15840_18427[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (30))){
var state_15666__$1 = state_15666;
var statearr_15842_18428 = state_15666__$1;
(statearr_15842_18428[(2)] = null);

(statearr_15842_18428[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (10))){
var inst_15517 = (state_15666[(13)]);
var inst_15515 = (state_15666[(16)]);
var inst_15525 = cljs.core._nth(inst_15515,inst_15517);
var inst_15526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15525,(0),null);
var inst_15527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15525,(1),null);
var state_15666__$1 = (function (){var statearr_15844 = state_15666;
(statearr_15844[(24)] = inst_15526);

return statearr_15844;
})();
if(cljs.core.truth_(inst_15527)){
var statearr_15845_18432 = state_15666__$1;
(statearr_15845_18432[(1)] = (13));

} else {
var statearr_15846_18437 = state_15666__$1;
(statearr_15846_18437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (18))){
var inst_15563 = (state_15666[(2)]);
var state_15666__$1 = state_15666;
var statearr_15847_18438 = state_15666__$1;
(statearr_15847_18438[(2)] = inst_15563);

(statearr_15847_18438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (42))){
var state_15666__$1 = state_15666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15666__$1,(45),dchan);
} else {
if((state_val_15670 === (37))){
var inst_15505 = (state_15666[(10)]);
var inst_15603 = (state_15666[(23)]);
var inst_15622 = (state_15666[(22)]);
var inst_15622__$1 = cljs.core.first(inst_15603);
var inst_15624 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15622__$1,inst_15505,done);
var state_15666__$1 = (function (){var statearr_15848 = state_15666;
(statearr_15848[(22)] = inst_15622__$1);

return statearr_15848;
})();
if(cljs.core.truth_(inst_15624)){
var statearr_15849_18439 = state_15666__$1;
(statearr_15849_18439[(1)] = (39));

} else {
var statearr_15850_18440 = state_15666__$1;
(statearr_15850_18440[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15670 === (8))){
var inst_15517 = (state_15666[(13)]);
var inst_15516 = (state_15666[(17)]);
var inst_15519 = (inst_15517 < inst_15516);
var inst_15520 = inst_15519;
var state_15666__$1 = state_15666;
if(cljs.core.truth_(inst_15520)){
var statearr_15853_18447 = state_15666__$1;
(statearr_15853_18447[(1)] = (10));

} else {
var statearr_15854_18448 = state_15666__$1;
(statearr_15854_18448[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14203__auto__ = null;
var cljs$core$async$mult_$_state_machine__14203__auto____0 = (function (){
var statearr_15858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15858[(0)] = cljs$core$async$mult_$_state_machine__14203__auto__);

(statearr_15858[(1)] = (1));

return statearr_15858;
});
var cljs$core$async$mult_$_state_machine__14203__auto____1 = (function (state_15666){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_15666);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e15859){var ex__14206__auto__ = e15859;
var statearr_15860_18449 = state_15666;
(statearr_15860_18449[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_15666[(4)]))){
var statearr_15861_18450 = state_15666;
(statearr_15861_18450[(1)] = cljs.core.first((state_15666[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18451 = state_15666;
state_15666 = G__18451;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14203__auto__ = function(state_15666){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14203__auto____1.call(this,state_15666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14203__auto____0;
cljs$core$async$mult_$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14203__auto____1;
return cljs$core$async$mult_$_state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_15863 = f__14422__auto__();
(statearr_15863[(6)] = c__14421__auto___18327);

return statearr_15863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15865 = arguments.length;
switch (G__15865) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18453 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18453(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18455 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18455(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18460 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18460(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18468 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18468(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18469 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18469(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18470 = arguments.length;
var i__5727__auto___18472 = (0);
while(true){
if((i__5727__auto___18472 < len__5726__auto___18470)){
args__5732__auto__.push((arguments[i__5727__auto___18472]));

var G__18474 = (i__5727__auto___18472 + (1));
i__5727__auto___18472 = G__18474;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15880){
var map__15881 = p__15880;
var map__15881__$1 = cljs.core.__destructure_map(map__15881);
var opts = map__15881__$1;
var statearr_15882_18475 = state;
(statearr_15882_18475[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15883_18476 = state;
(statearr_15883_18476[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15884_18477 = state;
(statearr_15884_18477[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15876){
var G__15877 = cljs.core.first(seq15876);
var seq15876__$1 = cljs.core.next(seq15876);
var G__15878 = cljs.core.first(seq15876__$1);
var seq15876__$2 = cljs.core.next(seq15876__$1);
var G__15879 = cljs.core.first(seq15876__$2);
var seq15876__$3 = cljs.core.next(seq15876__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15877,G__15878,G__15879,seq15876__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15891 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15892){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15892 = meta15892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15893,meta15892__$1){
var self__ = this;
var _15893__$1 = this;
return (new cljs.core.async.t_cljs$core$async15891(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15892__$1));
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15893){
var self__ = this;
var _15893__$1 = this;
return self__.meta15892;
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15891.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15892","meta15892",-1164503956,null)], null);
}));

(cljs.core.async.t_cljs$core$async15891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15891");

(cljs.core.async.t_cljs$core$async15891.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15891.
 */
cljs.core.async.__GT_t_cljs$core$async15891 = (function cljs$core$async$__GT_t_cljs$core$async15891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15892){
return (new cljs.core.async.t_cljs$core$async15891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15892));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15891(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14421__auto___18497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_15979){
var state_val_15980 = (state_15979[(1)]);
if((state_val_15980 === (7))){
var inst_15935 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
if(cljs.core.truth_(inst_15935)){
var statearr_15983_18498 = state_15979__$1;
(statearr_15983_18498[(1)] = (8));

} else {
var statearr_15984_18499 = state_15979__$1;
(statearr_15984_18499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (20))){
var inst_15920 = (state_15979[(7)]);
var state_15979__$1 = state_15979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15979__$1,(23),out,inst_15920);
} else {
if((state_val_15980 === (1))){
var inst_15902 = calc_state();
var inst_15903 = cljs.core.__destructure_map(inst_15902);
var inst_15904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15903,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15903,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15903,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15908 = inst_15902;
var state_15979__$1 = (function (){var statearr_15988 = state_15979;
(statearr_15988[(8)] = inst_15905);

(statearr_15988[(9)] = inst_15908);

(statearr_15988[(10)] = inst_15907);

(statearr_15988[(11)] = inst_15904);

return statearr_15988;
})();
var statearr_15989_18510 = state_15979__$1;
(statearr_15989_18510[(2)] = null);

(statearr_15989_18510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (24))){
var inst_15911 = (state_15979[(12)]);
var inst_15908 = inst_15911;
var state_15979__$1 = (function (){var statearr_15990 = state_15979;
(statearr_15990[(9)] = inst_15908);

return statearr_15990;
})();
var statearr_15992_18512 = state_15979__$1;
(statearr_15992_18512[(2)] = null);

(statearr_15992_18512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (4))){
var inst_15920 = (state_15979[(7)]);
var inst_15929 = (state_15979[(13)]);
var inst_15919 = (state_15979[(2)]);
var inst_15920__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15919,(0),null);
var inst_15921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15919,(1),null);
var inst_15929__$1 = (inst_15920__$1 == null);
var state_15979__$1 = (function (){var statearr_15993 = state_15979;
(statearr_15993[(7)] = inst_15920__$1);

(statearr_15993[(13)] = inst_15929__$1);

(statearr_15993[(14)] = inst_15921);

return statearr_15993;
})();
if(cljs.core.truth_(inst_15929__$1)){
var statearr_15994_18520 = state_15979__$1;
(statearr_15994_18520[(1)] = (5));

} else {
var statearr_15995_18521 = state_15979__$1;
(statearr_15995_18521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (15))){
var inst_15953 = (state_15979[(15)]);
var inst_15912 = (state_15979[(16)]);
var inst_15953__$1 = cljs.core.empty_QMARK_(inst_15912);
var state_15979__$1 = (function (){var statearr_15996 = state_15979;
(statearr_15996[(15)] = inst_15953__$1);

return statearr_15996;
})();
if(inst_15953__$1){
var statearr_15997_18522 = state_15979__$1;
(statearr_15997_18522[(1)] = (17));

} else {
var statearr_15998_18523 = state_15979__$1;
(statearr_15998_18523[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (21))){
var inst_15911 = (state_15979[(12)]);
var inst_15908 = inst_15911;
var state_15979__$1 = (function (){var statearr_16000 = state_15979;
(statearr_16000[(9)] = inst_15908);

return statearr_16000;
})();
var statearr_16002_18531 = state_15979__$1;
(statearr_16002_18531[(2)] = null);

(statearr_16002_18531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (13))){
var inst_15942 = (state_15979[(2)]);
var inst_15943 = calc_state();
var inst_15908 = inst_15943;
var state_15979__$1 = (function (){var statearr_16005 = state_15979;
(statearr_16005[(9)] = inst_15908);

(statearr_16005[(17)] = inst_15942);

return statearr_16005;
})();
var statearr_16006_18533 = state_15979__$1;
(statearr_16006_18533[(2)] = null);

(statearr_16006_18533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (22))){
var inst_15973 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
var statearr_16008_18535 = state_15979__$1;
(statearr_16008_18535[(2)] = inst_15973);

(statearr_16008_18535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (6))){
var inst_15921 = (state_15979[(14)]);
var inst_15933 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15921,change);
var state_15979__$1 = state_15979;
var statearr_16009_18540 = state_15979__$1;
(statearr_16009_18540[(2)] = inst_15933);

(statearr_16009_18540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (25))){
var state_15979__$1 = state_15979;
var statearr_16010_18541 = state_15979__$1;
(statearr_16010_18541[(2)] = null);

(statearr_16010_18541[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (17))){
var inst_15913 = (state_15979[(18)]);
var inst_15921 = (state_15979[(14)]);
var inst_15955 = (inst_15913.cljs$core$IFn$_invoke$arity$1 ? inst_15913.cljs$core$IFn$_invoke$arity$1(inst_15921) : inst_15913.call(null, inst_15921));
var inst_15956 = cljs.core.not(inst_15955);
var state_15979__$1 = state_15979;
var statearr_16016_18544 = state_15979__$1;
(statearr_16016_18544[(2)] = inst_15956);

(statearr_16016_18544[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (3))){
var inst_15977 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15979__$1,inst_15977);
} else {
if((state_val_15980 === (12))){
var state_15979__$1 = state_15979;
var statearr_16020_18549 = state_15979__$1;
(statearr_16020_18549[(2)] = null);

(statearr_16020_18549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (2))){
var inst_15908 = (state_15979[(9)]);
var inst_15911 = (state_15979[(12)]);
var inst_15911__$1 = cljs.core.__destructure_map(inst_15908);
var inst_15912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15911__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15911__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15911__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15979__$1 = (function (){var statearr_16021 = state_15979;
(statearr_16021[(16)] = inst_15912);

(statearr_16021[(18)] = inst_15913);

(statearr_16021[(12)] = inst_15911__$1);

return statearr_16021;
})();
return cljs.core.async.ioc_alts_BANG_(state_15979__$1,(4),inst_15914);
} else {
if((state_val_15980 === (23))){
var inst_15964 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
if(cljs.core.truth_(inst_15964)){
var statearr_16022_18550 = state_15979__$1;
(statearr_16022_18550[(1)] = (24));

} else {
var statearr_16023_18551 = state_15979__$1;
(statearr_16023_18551[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (19))){
var inst_15959 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
var statearr_16024_18552 = state_15979__$1;
(statearr_16024_18552[(2)] = inst_15959);

(statearr_16024_18552[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (11))){
var inst_15921 = (state_15979[(14)]);
var inst_15939 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15921);
var state_15979__$1 = state_15979;
var statearr_16027_18556 = state_15979__$1;
(statearr_16027_18556[(2)] = inst_15939);

(statearr_16027_18556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (9))){
var inst_15912 = (state_15979[(16)]);
var inst_15947 = (state_15979[(19)]);
var inst_15921 = (state_15979[(14)]);
var inst_15947__$1 = (inst_15912.cljs$core$IFn$_invoke$arity$1 ? inst_15912.cljs$core$IFn$_invoke$arity$1(inst_15921) : inst_15912.call(null, inst_15921));
var state_15979__$1 = (function (){var statearr_16030 = state_15979;
(statearr_16030[(19)] = inst_15947__$1);

return statearr_16030;
})();
if(cljs.core.truth_(inst_15947__$1)){
var statearr_16031_18557 = state_15979__$1;
(statearr_16031_18557[(1)] = (14));

} else {
var statearr_16035_18558 = state_15979__$1;
(statearr_16035_18558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (5))){
var inst_15929 = (state_15979[(13)]);
var state_15979__$1 = state_15979;
var statearr_16037_18559 = state_15979__$1;
(statearr_16037_18559[(2)] = inst_15929);

(statearr_16037_18559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (14))){
var inst_15947 = (state_15979[(19)]);
var state_15979__$1 = state_15979;
var statearr_16038_18560 = state_15979__$1;
(statearr_16038_18560[(2)] = inst_15947);

(statearr_16038_18560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (26))){
var inst_15969 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
var statearr_16039_18561 = state_15979__$1;
(statearr_16039_18561[(2)] = inst_15969);

(statearr_16039_18561[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (16))){
var inst_15961 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
if(cljs.core.truth_(inst_15961)){
var statearr_16040_18562 = state_15979__$1;
(statearr_16040_18562[(1)] = (20));

} else {
var statearr_16041_18563 = state_15979__$1;
(statearr_16041_18563[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (10))){
var inst_15975 = (state_15979[(2)]);
var state_15979__$1 = state_15979;
var statearr_16042_18564 = state_15979__$1;
(statearr_16042_18564[(2)] = inst_15975);

(statearr_16042_18564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (18))){
var inst_15953 = (state_15979[(15)]);
var state_15979__$1 = state_15979;
var statearr_16047_18565 = state_15979__$1;
(statearr_16047_18565[(2)] = inst_15953);

(statearr_16047_18565[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15980 === (8))){
var inst_15920 = (state_15979[(7)]);
var inst_15937 = (inst_15920 == null);
var state_15979__$1 = state_15979;
if(cljs.core.truth_(inst_15937)){
var statearr_16048_18566 = state_15979__$1;
(statearr_16048_18566[(1)] = (11));

} else {
var statearr_16049_18568 = state_15979__$1;
(statearr_16049_18568[(1)] = (12));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14203__auto__ = null;
var cljs$core$async$mix_$_state_machine__14203__auto____0 = (function (){
var statearr_16052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16052[(0)] = cljs$core$async$mix_$_state_machine__14203__auto__);

(statearr_16052[(1)] = (1));

return statearr_16052;
});
var cljs$core$async$mix_$_state_machine__14203__auto____1 = (function (state_15979){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_15979);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e16055){var ex__14206__auto__ = e16055;
var statearr_16056_18572 = state_15979;
(statearr_16056_18572[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_15979[(4)]))){
var statearr_16059_18575 = state_15979;
(statearr_16059_18575[(1)] = cljs.core.first((state_15979[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18576 = state_15979;
state_15979 = G__18576;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14203__auto__ = function(state_15979){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14203__auto____1.call(this,state_15979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14203__auto____0;
cljs$core$async$mix_$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14203__auto____1;
return cljs$core$async$mix_$_state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_16061 = f__14422__auto__();
(statearr_16061[(6)] = c__14421__auto___18497);

return statearr_16061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18583 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18583(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18588 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18588(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18593 = (function() {
var G__18594 = null;
var G__18594__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18594__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18594 = function(p,v){
switch(arguments.length){
case 1:
return G__18594__1.call(this,p);
case 2:
return G__18594__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18594.cljs$core$IFn$_invoke$arity$1 = G__18594__1;
G__18594.cljs$core$IFn$_invoke$arity$2 = G__18594__2;
return G__18594;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16091 = arguments.length;
switch (G__16091) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18593(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18593(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16128 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16129){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16129 = meta16129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16130,meta16129__$1){
var self__ = this;
var _16130__$1 = this;
return (new cljs.core.async.t_cljs$core$async16128(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16129__$1));
}));

(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16130){
var self__ = this;
var _16130__$1 = this;
return self__.meta16129;
}));

(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16128.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16129","meta16129",-1230403,null)], null);
}));

(cljs.core.async.t_cljs$core$async16128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16128");

(cljs.core.async.t_cljs$core$async16128.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16128.
 */
cljs.core.async.__GT_t_cljs$core$async16128 = (function cljs$core$async$__GT_t_cljs$core$async16128(ch,topic_fn,buf_fn,mults,ensure_mult,meta16129){
return (new cljs.core.async.t_cljs$core$async16128(ch,topic_fn,buf_fn,mults,ensure_mult,meta16129));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16118 = arguments.length;
switch (G__16118) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16103_SHARP_){
if(cljs.core.truth_((p1__16103_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16103_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16103_SHARP_.call(null, topic)))){
return p1__16103_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16103_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16128(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14421__auto___18632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_16277){
var state_val_16279 = (state_16277[(1)]);
if((state_val_16279 === (7))){
var inst_16261 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16284_18635 = state_16277__$1;
(statearr_16284_18635[(2)] = inst_16261);

(statearr_16284_18635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (20))){
var state_16277__$1 = state_16277;
var statearr_16285_18636 = state_16277__$1;
(statearr_16285_18636[(2)] = null);

(statearr_16285_18636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (1))){
var state_16277__$1 = state_16277;
var statearr_16286_18637 = state_16277__$1;
(statearr_16286_18637[(2)] = null);

(statearr_16286_18637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (24))){
var inst_16231 = (state_16277[(7)]);
var inst_16251 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16231);
var state_16277__$1 = state_16277;
var statearr_16288_18640 = state_16277__$1;
(statearr_16288_18640[(2)] = inst_16251);

(statearr_16288_18640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (4))){
var inst_16153 = (state_16277[(8)]);
var inst_16153__$1 = (state_16277[(2)]);
var inst_16155 = (inst_16153__$1 == null);
var state_16277__$1 = (function (){var statearr_16290 = state_16277;
(statearr_16290[(8)] = inst_16153__$1);

return statearr_16290;
})();
if(cljs.core.truth_(inst_16155)){
var statearr_16291_18642 = state_16277__$1;
(statearr_16291_18642[(1)] = (5));

} else {
var statearr_16292_18643 = state_16277__$1;
(statearr_16292_18643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (15))){
var inst_16223 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16298_18644 = state_16277__$1;
(statearr_16298_18644[(2)] = inst_16223);

(statearr_16298_18644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (21))){
var inst_16256 = (state_16277[(2)]);
var state_16277__$1 = (function (){var statearr_16299 = state_16277;
(statearr_16299[(9)] = inst_16256);

return statearr_16299;
})();
var statearr_16300_18646 = state_16277__$1;
(statearr_16300_18646[(2)] = null);

(statearr_16300_18646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (13))){
var inst_16190 = (state_16277[(10)]);
var inst_16199 = cljs.core.chunked_seq_QMARK_(inst_16190);
var state_16277__$1 = state_16277;
if(inst_16199){
var statearr_16301_18649 = state_16277__$1;
(statearr_16301_18649[(1)] = (16));

} else {
var statearr_16302_18650 = state_16277__$1;
(statearr_16302_18650[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (22))){
var inst_16245 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
if(cljs.core.truth_(inst_16245)){
var statearr_16304_18651 = state_16277__$1;
(statearr_16304_18651[(1)] = (23));

} else {
var statearr_16305_18652 = state_16277__$1;
(statearr_16305_18652[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (6))){
var inst_16153 = (state_16277[(8)]);
var inst_16231 = (state_16277[(7)]);
var inst_16236 = (state_16277[(11)]);
var inst_16231__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16153) : topic_fn.call(null, inst_16153));
var inst_16234 = cljs.core.deref(mults);
var inst_16236__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16234,inst_16231__$1);
var state_16277__$1 = (function (){var statearr_16307 = state_16277;
(statearr_16307[(7)] = inst_16231__$1);

(statearr_16307[(11)] = inst_16236__$1);

return statearr_16307;
})();
if(cljs.core.truth_(inst_16236__$1)){
var statearr_16309_18653 = state_16277__$1;
(statearr_16309_18653[(1)] = (19));

} else {
var statearr_16310_18654 = state_16277__$1;
(statearr_16310_18654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (25))){
var inst_16253 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16312_18657 = state_16277__$1;
(statearr_16312_18657[(2)] = inst_16253);

(statearr_16312_18657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (17))){
var inst_16190 = (state_16277[(10)]);
var inst_16211 = cljs.core.first(inst_16190);
var inst_16213 = cljs.core.async.muxch_STAR_(inst_16211);
var inst_16215 = cljs.core.async.close_BANG_(inst_16213);
var inst_16216 = cljs.core.next(inst_16190);
var inst_16170 = inst_16216;
var inst_16171 = null;
var inst_16172 = (0);
var inst_16173 = (0);
var state_16277__$1 = (function (){var statearr_16314 = state_16277;
(statearr_16314[(12)] = inst_16215);

(statearr_16314[(13)] = inst_16173);

(statearr_16314[(14)] = inst_16170);

(statearr_16314[(15)] = inst_16172);

(statearr_16314[(16)] = inst_16171);

return statearr_16314;
})();
var statearr_16315_18670 = state_16277__$1;
(statearr_16315_18670[(2)] = null);

(statearr_16315_18670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (3))){
var inst_16263 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16277__$1,inst_16263);
} else {
if((state_val_16279 === (12))){
var inst_16225 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16320_18681 = state_16277__$1;
(statearr_16320_18681[(2)] = inst_16225);

(statearr_16320_18681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (2))){
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16277__$1,(4),ch);
} else {
if((state_val_16279 === (23))){
var state_16277__$1 = state_16277;
var statearr_16322_18686 = state_16277__$1;
(statearr_16322_18686[(2)] = null);

(statearr_16322_18686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (19))){
var inst_16153 = (state_16277[(8)]);
var inst_16236 = (state_16277[(11)]);
var inst_16243 = cljs.core.async.muxch_STAR_(inst_16236);
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16277__$1,(22),inst_16243,inst_16153);
} else {
if((state_val_16279 === (11))){
var inst_16170 = (state_16277[(14)]);
var inst_16190 = (state_16277[(10)]);
var inst_16190__$1 = cljs.core.seq(inst_16170);
var state_16277__$1 = (function (){var statearr_16326 = state_16277;
(statearr_16326[(10)] = inst_16190__$1);

return statearr_16326;
})();
if(inst_16190__$1){
var statearr_16328_18694 = state_16277__$1;
(statearr_16328_18694[(1)] = (13));

} else {
var statearr_16329_18695 = state_16277__$1;
(statearr_16329_18695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (9))){
var inst_16228 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16330_18701 = state_16277__$1;
(statearr_16330_18701[(2)] = inst_16228);

(statearr_16330_18701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (5))){
var inst_16165 = cljs.core.deref(mults);
var inst_16166 = cljs.core.vals(inst_16165);
var inst_16167 = cljs.core.seq(inst_16166);
var inst_16170 = inst_16167;
var inst_16171 = null;
var inst_16172 = (0);
var inst_16173 = (0);
var state_16277__$1 = (function (){var statearr_16333 = state_16277;
(statearr_16333[(13)] = inst_16173);

(statearr_16333[(14)] = inst_16170);

(statearr_16333[(15)] = inst_16172);

(statearr_16333[(16)] = inst_16171);

return statearr_16333;
})();
var statearr_16334_18712 = state_16277__$1;
(statearr_16334_18712[(2)] = null);

(statearr_16334_18712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (14))){
var state_16277__$1 = state_16277;
var statearr_16341_18713 = state_16277__$1;
(statearr_16341_18713[(2)] = null);

(statearr_16341_18713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (16))){
var inst_16190 = (state_16277[(10)]);
var inst_16202 = cljs.core.chunk_first(inst_16190);
var inst_16203 = cljs.core.chunk_rest(inst_16190);
var inst_16204 = cljs.core.count(inst_16202);
var inst_16170 = inst_16203;
var inst_16171 = inst_16202;
var inst_16172 = inst_16204;
var inst_16173 = (0);
var state_16277__$1 = (function (){var statearr_16343 = state_16277;
(statearr_16343[(13)] = inst_16173);

(statearr_16343[(14)] = inst_16170);

(statearr_16343[(15)] = inst_16172);

(statearr_16343[(16)] = inst_16171);

return statearr_16343;
})();
var statearr_16345_18737 = state_16277__$1;
(statearr_16345_18737[(2)] = null);

(statearr_16345_18737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (10))){
var inst_16173 = (state_16277[(13)]);
var inst_16170 = (state_16277[(14)]);
var inst_16172 = (state_16277[(15)]);
var inst_16171 = (state_16277[(16)]);
var inst_16181 = cljs.core._nth(inst_16171,inst_16173);
var inst_16183 = cljs.core.async.muxch_STAR_(inst_16181);
var inst_16184 = cljs.core.async.close_BANG_(inst_16183);
var inst_16185 = (inst_16173 + (1));
var tmp16337 = inst_16170;
var tmp16338 = inst_16172;
var tmp16339 = inst_16171;
var inst_16170__$1 = tmp16337;
var inst_16171__$1 = tmp16339;
var inst_16172__$1 = tmp16338;
var inst_16173__$1 = inst_16185;
var state_16277__$1 = (function (){var statearr_16347 = state_16277;
(statearr_16347[(13)] = inst_16173__$1);

(statearr_16347[(14)] = inst_16170__$1);

(statearr_16347[(15)] = inst_16172__$1);

(statearr_16347[(16)] = inst_16171__$1);

(statearr_16347[(17)] = inst_16184);

return statearr_16347;
})();
var statearr_16348_18754 = state_16277__$1;
(statearr_16348_18754[(2)] = null);

(statearr_16348_18754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (18))){
var inst_16220 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16349_18768 = state_16277__$1;
(statearr_16349_18768[(2)] = inst_16220);

(statearr_16349_18768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16279 === (8))){
var inst_16173 = (state_16277[(13)]);
var inst_16172 = (state_16277[(15)]);
var inst_16176 = (inst_16173 < inst_16172);
var inst_16177 = inst_16176;
var state_16277__$1 = state_16277;
if(cljs.core.truth_(inst_16177)){
var statearr_16352_18773 = state_16277__$1;
(statearr_16352_18773[(1)] = (10));

} else {
var statearr_16353_18777 = state_16277__$1;
(statearr_16353_18777[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_16359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16359[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_16359[(1)] = (1));

return statearr_16359;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_16277){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_16277);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e16361){var ex__14206__auto__ = e16361;
var statearr_16362_18785 = state_16277;
(statearr_16362_18785[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_16277[(4)]))){
var statearr_16363_18786 = state_16277;
(statearr_16363_18786[(1)] = cljs.core.first((state_16277[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18787 = state_16277;
state_16277 = G__18787;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_16277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_16277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_16366 = f__14422__auto__();
(statearr_16366[(6)] = c__14421__auto___18632);

return statearr_16366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16371 = arguments.length;
switch (G__16371) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16377 = arguments.length;
switch (G__16377) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16381 = arguments.length;
switch (G__16381) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14421__auto___18824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_16511){
var state_val_16512 = (state_16511[(1)]);
if((state_val_16512 === (7))){
var state_16511__$1 = state_16511;
var statearr_16549_18831 = state_16511__$1;
(statearr_16549_18831[(2)] = null);

(statearr_16549_18831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (1))){
var state_16511__$1 = state_16511;
var statearr_16559_18833 = state_16511__$1;
(statearr_16559_18833[(2)] = null);

(statearr_16559_18833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (4))){
var inst_16410 = (state_16511[(7)]);
var inst_16405 = (state_16511[(8)]);
var inst_16414 = (inst_16410 < inst_16405);
var state_16511__$1 = state_16511;
if(cljs.core.truth_(inst_16414)){
var statearr_16571_18839 = state_16511__$1;
(statearr_16571_18839[(1)] = (6));

} else {
var statearr_16574_18840 = state_16511__$1;
(statearr_16574_18840[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (15))){
var inst_16483 = (state_16511[(9)]);
var inst_16490 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16483);
var state_16511__$1 = state_16511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16511__$1,(17),out,inst_16490);
} else {
if((state_val_16512 === (13))){
var inst_16483 = (state_16511[(9)]);
var inst_16483__$1 = (state_16511[(2)]);
var inst_16485 = cljs.core.some(cljs.core.nil_QMARK_,inst_16483__$1);
var state_16511__$1 = (function (){var statearr_16590 = state_16511;
(statearr_16590[(9)] = inst_16483__$1);

return statearr_16590;
})();
if(cljs.core.truth_(inst_16485)){
var statearr_16592_18848 = state_16511__$1;
(statearr_16592_18848[(1)] = (14));

} else {
var statearr_16594_18853 = state_16511__$1;
(statearr_16594_18853[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (6))){
var state_16511__$1 = state_16511;
var statearr_16606_18856 = state_16511__$1;
(statearr_16606_18856[(2)] = null);

(statearr_16606_18856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (17))){
var inst_16492 = (state_16511[(2)]);
var state_16511__$1 = (function (){var statearr_16650 = state_16511;
(statearr_16650[(10)] = inst_16492);

return statearr_16650;
})();
var statearr_16653_18881 = state_16511__$1;
(statearr_16653_18881[(2)] = null);

(statearr_16653_18881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (3))){
var inst_16497 = (state_16511[(2)]);
var state_16511__$1 = state_16511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16511__$1,inst_16497);
} else {
if((state_val_16512 === (12))){
var _ = (function (){var statearr_16664 = state_16511;
(statearr_16664[(4)] = cljs.core.rest((state_16511[(4)])));

return statearr_16664;
})();
var state_16511__$1 = state_16511;
var ex16635 = (state_16511__$1[(2)]);
var statearr_16668_18940 = state_16511__$1;
(statearr_16668_18940[(5)] = ex16635);


if((ex16635 instanceof Object)){
var statearr_16675_18942 = state_16511__$1;
(statearr_16675_18942[(1)] = (11));

(statearr_16675_18942[(5)] = null);

} else {
throw ex16635;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (2))){
var inst_16404 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16405 = cnt;
var inst_16410 = (0);
var state_16511__$1 = (function (){var statearr_16690 = state_16511;
(statearr_16690[(11)] = inst_16404);

(statearr_16690[(7)] = inst_16410);

(statearr_16690[(8)] = inst_16405);

return statearr_16690;
})();
var statearr_16692_18948 = state_16511__$1;
(statearr_16692_18948[(2)] = null);

(statearr_16692_18948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (11))){
var inst_16437 = (state_16511[(2)]);
var inst_16451 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16511__$1 = (function (){var statearr_16694 = state_16511;
(statearr_16694[(12)] = inst_16437);

return statearr_16694;
})();
var statearr_16696_18958 = state_16511__$1;
(statearr_16696_18958[(2)] = inst_16451);

(statearr_16696_18958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (9))){
var inst_16410 = (state_16511[(7)]);
var _ = (function (){var statearr_16704 = state_16511;
(statearr_16704[(4)] = cljs.core.cons((12),(state_16511[(4)])));

return statearr_16704;
})();
var inst_16462 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16410) : chs__$1.call(null, inst_16410));
var inst_16463 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16410) : done.call(null, inst_16410));
var inst_16464 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16462,inst_16463);
var ___$1 = (function (){var statearr_16706 = state_16511;
(statearr_16706[(4)] = cljs.core.rest((state_16511[(4)])));

return statearr_16706;
})();
var state_16511__$1 = state_16511;
var statearr_16708_18965 = state_16511__$1;
(statearr_16708_18965[(2)] = inst_16464);

(statearr_16708_18965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (5))){
var inst_16479 = (state_16511[(2)]);
var state_16511__$1 = (function (){var statearr_16710 = state_16511;
(statearr_16710[(13)] = inst_16479);

return statearr_16710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16511__$1,(13),dchan);
} else {
if((state_val_16512 === (14))){
var inst_16488 = cljs.core.async.close_BANG_(out);
var state_16511__$1 = state_16511;
var statearr_16714_18966 = state_16511__$1;
(statearr_16714_18966[(2)] = inst_16488);

(statearr_16714_18966[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (16))){
var inst_16495 = (state_16511[(2)]);
var state_16511__$1 = state_16511;
var statearr_16720_18970 = state_16511__$1;
(statearr_16720_18970[(2)] = inst_16495);

(statearr_16720_18970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (10))){
var inst_16410 = (state_16511[(7)]);
var inst_16467 = (state_16511[(2)]);
var inst_16473 = (inst_16410 + (1));
var inst_16410__$1 = inst_16473;
var state_16511__$1 = (function (){var statearr_16724 = state_16511;
(statearr_16724[(14)] = inst_16467);

(statearr_16724[(7)] = inst_16410__$1);

return statearr_16724;
})();
var statearr_16727_18972 = state_16511__$1;
(statearr_16727_18972[(2)] = null);

(statearr_16727_18972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16512 === (8))){
var inst_16477 = (state_16511[(2)]);
var state_16511__$1 = state_16511;
var statearr_16729_18977 = state_16511__$1;
(statearr_16729_18977[(2)] = inst_16477);

(statearr_16729_18977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_16730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16730[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_16730[(1)] = (1));

return statearr_16730;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_16511){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_16511);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e16731){var ex__14206__auto__ = e16731;
var statearr_16732_18984 = state_16511;
(statearr_16732_18984[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_16511[(4)]))){
var statearr_16733_18985 = state_16511;
(statearr_16733_18985[(1)] = cljs.core.first((state_16511[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18986 = state_16511;
state_16511 = G__18986;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_16511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_16511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_16734 = f__14422__auto__();
(statearr_16734[(6)] = c__14421__auto___18824);

return statearr_16734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16737 = arguments.length;
switch (G__16737) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14421__auto___18992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_16773){
var state_val_16774 = (state_16773[(1)]);
if((state_val_16774 === (7))){
var inst_16750 = (state_16773[(7)]);
var inst_16751 = (state_16773[(8)]);
var inst_16750__$1 = (state_16773[(2)]);
var inst_16751__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16750__$1,(0),null);
var inst_16752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16750__$1,(1),null);
var inst_16753 = (inst_16751__$1 == null);
var state_16773__$1 = (function (){var statearr_16781 = state_16773;
(statearr_16781[(7)] = inst_16750__$1);

(statearr_16781[(8)] = inst_16751__$1);

(statearr_16781[(9)] = inst_16752);

return statearr_16781;
})();
if(cljs.core.truth_(inst_16753)){
var statearr_16783_18993 = state_16773__$1;
(statearr_16783_18993[(1)] = (8));

} else {
var statearr_16784_18997 = state_16773__$1;
(statearr_16784_18997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (1))){
var inst_16740 = cljs.core.vec(chs);
var inst_16741 = inst_16740;
var state_16773__$1 = (function (){var statearr_16785 = state_16773;
(statearr_16785[(10)] = inst_16741);

return statearr_16785;
})();
var statearr_16786_19001 = state_16773__$1;
(statearr_16786_19001[(2)] = null);

(statearr_16786_19001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (4))){
var inst_16741 = (state_16773[(10)]);
var state_16773__$1 = state_16773;
return cljs.core.async.ioc_alts_BANG_(state_16773__$1,(7),inst_16741);
} else {
if((state_val_16774 === (6))){
var inst_16768 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16788_19002 = state_16773__$1;
(statearr_16788_19002[(2)] = inst_16768);

(statearr_16788_19002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (3))){
var inst_16770 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16773__$1,inst_16770);
} else {
if((state_val_16774 === (2))){
var inst_16741 = (state_16773[(10)]);
var inst_16743 = cljs.core.count(inst_16741);
var inst_16744 = (inst_16743 > (0));
var state_16773__$1 = state_16773;
if(cljs.core.truth_(inst_16744)){
var statearr_16790_19008 = state_16773__$1;
(statearr_16790_19008[(1)] = (4));

} else {
var statearr_16792_19009 = state_16773__$1;
(statearr_16792_19009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (11))){
var inst_16741 = (state_16773[(10)]);
var inst_16760 = (state_16773[(2)]);
var tmp16789 = inst_16741;
var inst_16741__$1 = tmp16789;
var state_16773__$1 = (function (){var statearr_16793 = state_16773;
(statearr_16793[(10)] = inst_16741__$1);

(statearr_16793[(11)] = inst_16760);

return statearr_16793;
})();
var statearr_16795_19011 = state_16773__$1;
(statearr_16795_19011[(2)] = null);

(statearr_16795_19011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (9))){
var inst_16751 = (state_16773[(8)]);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16773__$1,(11),out,inst_16751);
} else {
if((state_val_16774 === (5))){
var inst_16766 = cljs.core.async.close_BANG_(out);
var state_16773__$1 = state_16773;
var statearr_16797_19012 = state_16773__$1;
(statearr_16797_19012[(2)] = inst_16766);

(statearr_16797_19012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (10))){
var inst_16764 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16803_19013 = state_16773__$1;
(statearr_16803_19013[(2)] = inst_16764);

(statearr_16803_19013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (8))){
var inst_16741 = (state_16773[(10)]);
var inst_16750 = (state_16773[(7)]);
var inst_16751 = (state_16773[(8)]);
var inst_16752 = (state_16773[(9)]);
var inst_16755 = (function (){var cs = inst_16741;
var vec__16746 = inst_16750;
var v = inst_16751;
var c = inst_16752;
return (function (p1__16735_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16735_SHARP_);
});
})();
var inst_16756 = cljs.core.filterv(inst_16755,inst_16741);
var inst_16741__$1 = inst_16756;
var state_16773__$1 = (function (){var statearr_16821 = state_16773;
(statearr_16821[(10)] = inst_16741__$1);

return statearr_16821;
})();
var statearr_16828_19017 = state_16773__$1;
(statearr_16828_19017[(2)] = null);

(statearr_16828_19017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_16829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16829[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_16829[(1)] = (1));

return statearr_16829;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_16773){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_16773);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e16833){var ex__14206__auto__ = e16833;
var statearr_16835_19022 = state_16773;
(statearr_16835_19022[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_16773[(4)]))){
var statearr_16836_19024 = state_16773;
(statearr_16836_19024[(1)] = cljs.core.first((state_16773[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19049 = state_16773;
state_16773 = G__19049;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_16773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_16773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_16840 = f__14422__auto__();
(statearr_16840[(6)] = c__14421__auto___18992);

return statearr_16840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16849 = arguments.length;
switch (G__16849) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14421__auto___19065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_16876){
var state_val_16877 = (state_16876[(1)]);
if((state_val_16877 === (7))){
var inst_16858 = (state_16876[(7)]);
var inst_16858__$1 = (state_16876[(2)]);
var inst_16859 = (inst_16858__$1 == null);
var inst_16860 = cljs.core.not(inst_16859);
var state_16876__$1 = (function (){var statearr_16878 = state_16876;
(statearr_16878[(7)] = inst_16858__$1);

return statearr_16878;
})();
if(inst_16860){
var statearr_16879_19067 = state_16876__$1;
(statearr_16879_19067[(1)] = (8));

} else {
var statearr_16881_19068 = state_16876__$1;
(statearr_16881_19068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16877 === (1))){
var inst_16853 = (0);
var state_16876__$1 = (function (){var statearr_16914 = state_16876;
(statearr_16914[(8)] = inst_16853);

return statearr_16914;
})();
var statearr_16915_19071 = state_16876__$1;
(statearr_16915_19071[(2)] = null);

(statearr_16915_19071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16877 === (4))){
var state_16876__$1 = state_16876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16876__$1,(7),ch);
} else {
if((state_val_16877 === (6))){
var inst_16871 = (state_16876[(2)]);
var state_16876__$1 = state_16876;
var statearr_16916_19073 = state_16876__$1;
(statearr_16916_19073[(2)] = inst_16871);

(statearr_16916_19073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16877 === (3))){
var inst_16873 = (state_16876[(2)]);
var inst_16874 = cljs.core.async.close_BANG_(out);
var state_16876__$1 = (function (){var statearr_16918 = state_16876;
(statearr_16918[(9)] = inst_16873);

return statearr_16918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16876__$1,inst_16874);
} else {
if((state_val_16877 === (2))){
var inst_16853 = (state_16876[(8)]);
var inst_16855 = (inst_16853 < n);
var state_16876__$1 = state_16876;
if(cljs.core.truth_(inst_16855)){
var statearr_16919_19079 = state_16876__$1;
(statearr_16919_19079[(1)] = (4));

} else {
var statearr_16920_19080 = state_16876__$1;
(statearr_16920_19080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16877 === (11))){
var inst_16853 = (state_16876[(8)]);
var inst_16863 = (state_16876[(2)]);
var inst_16864 = (inst_16853 + (1));
var inst_16853__$1 = inst_16864;
var state_16876__$1 = (function (){var statearr_16921 = state_16876;
(statearr_16921[(10)] = inst_16863);

(statearr_16921[(8)] = inst_16853__$1);

return statearr_16921;
})();
var statearr_16922_19082 = state_16876__$1;
(statearr_16922_19082[(2)] = null);

(statearr_16922_19082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16877 === (9))){
var state_16876__$1 = state_16876;
var statearr_16923_19084 = state_16876__$1;
(statearr_16923_19084[(2)] = null);

(statearr_16923_19084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16877 === (5))){
var state_16876__$1 = state_16876;
var statearr_16924_19089 = state_16876__$1;
(statearr_16924_19089[(2)] = null);

(statearr_16924_19089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16877 === (10))){
var inst_16868 = (state_16876[(2)]);
var state_16876__$1 = state_16876;
var statearr_16925_19090 = state_16876__$1;
(statearr_16925_19090[(2)] = inst_16868);

(statearr_16925_19090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16877 === (8))){
var inst_16858 = (state_16876[(7)]);
var state_16876__$1 = state_16876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16876__$1,(11),out,inst_16858);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_16938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16938[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_16938[(1)] = (1));

return statearr_16938;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_16876){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_16876);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e16941){var ex__14206__auto__ = e16941;
var statearr_16942_19091 = state_16876;
(statearr_16942_19091[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_16876[(4)]))){
var statearr_16949_19092 = state_16876;
(statearr_16949_19092[(1)] = cljs.core.first((state_16876[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19093 = state_16876;
state_16876 = G__19093;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_16876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_16876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_16953 = f__14422__auto__();
(statearr_16953[(6)] = c__14421__auto___19065);

return statearr_16953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16986 = (function (f,ch,meta16971,_,fn1,meta16987){
this.f = f;
this.ch = ch;
this.meta16971 = meta16971;
this._ = _;
this.fn1 = fn1;
this.meta16987 = meta16987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16988,meta16987__$1){
var self__ = this;
var _16988__$1 = this;
return (new cljs.core.async.t_cljs$core$async16986(self__.f,self__.ch,self__.meta16971,self__._,self__.fn1,meta16987__$1));
}));

(cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16988){
var self__ = this;
var _16988__$1 = this;
return self__.meta16987;
}));

(cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16954_SHARP_){
var G__16995 = (((p1__16954_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16954_SHARP_) : self__.f.call(null, p1__16954_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16995) : f1.call(null, G__16995));
});
}));

(cljs.core.async.t_cljs$core$async16986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16971","meta16971",-2113666499,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16970","cljs.core.async/t_cljs$core$async16970",2029388833,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16987","meta16987",1874359773,null)], null);
}));

(cljs.core.async.t_cljs$core$async16986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16986");

(cljs.core.async.t_cljs$core$async16986.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16986.
 */
cljs.core.async.__GT_t_cljs$core$async16986 = (function cljs$core$async$__GT_t_cljs$core$async16986(f,ch,meta16971,_,fn1,meta16987){
return (new cljs.core.async.t_cljs$core$async16986(f,ch,meta16971,_,fn1,meta16987));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16970 = (function (f,ch,meta16971){
this.f = f;
this.ch = ch;
this.meta16971 = meta16971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16972,meta16971__$1){
var self__ = this;
var _16972__$1 = this;
return (new cljs.core.async.t_cljs$core$async16970(self__.f,self__.ch,meta16971__$1));
}));

(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16972){
var self__ = this;
var _16972__$1 = this;
return self__.meta16971;
}));

(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16986(self__.f,self__.ch,self__.meta16971,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16999 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16999) : self__.f.call(null, G__16999));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16971","meta16971",-2113666499,null)], null);
}));

(cljs.core.async.t_cljs$core$async16970.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16970");

(cljs.core.async.t_cljs$core$async16970.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16970");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16970.
 */
cljs.core.async.__GT_t_cljs$core$async16970 = (function cljs$core$async$__GT_t_cljs$core$async16970(f,ch,meta16971){
return (new cljs.core.async.t_cljs$core$async16970(f,ch,meta16971));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16970(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17000 = (function (f,ch,meta17001){
this.f = f;
this.ch = ch;
this.meta17001 = meta17001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17002,meta17001__$1){
var self__ = this;
var _17002__$1 = this;
return (new cljs.core.async.t_cljs$core$async17000(self__.f,self__.ch,meta17001__$1));
}));

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17002){
var self__ = this;
var _17002__$1 = this;
return self__.meta17001;
}));

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17001","meta17001",-2075649397,null)], null);
}));

(cljs.core.async.t_cljs$core$async17000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17000");

(cljs.core.async.t_cljs$core$async17000.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17000.
 */
cljs.core.async.__GT_t_cljs$core$async17000 = (function cljs$core$async$__GT_t_cljs$core$async17000(f,ch,meta17001){
return (new cljs.core.async.t_cljs$core$async17000(f,ch,meta17001));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17000(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17009 = (function (p,ch,meta17010){
this.p = p;
this.ch = ch;
this.meta17010 = meta17010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17011,meta17010__$1){
var self__ = this;
var _17011__$1 = this;
return (new cljs.core.async.t_cljs$core$async17009(self__.p,self__.ch,meta17010__$1));
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17011){
var self__ = this;
var _17011__$1 = this;
return self__.meta17010;
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17010","meta17010",169498847,null)], null);
}));

(cljs.core.async.t_cljs$core$async17009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17009");

(cljs.core.async.t_cljs$core$async17009.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17009.
 */
cljs.core.async.__GT_t_cljs$core$async17009 = (function cljs$core$async$__GT_t_cljs$core$async17009(p,ch,meta17010){
return (new cljs.core.async.t_cljs$core$async17009(p,ch,meta17010));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17009(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17017 = arguments.length;
switch (G__17017) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14421__auto___19147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_17038){
var state_val_17039 = (state_17038[(1)]);
if((state_val_17039 === (7))){
var inst_17034 = (state_17038[(2)]);
var state_17038__$1 = state_17038;
var statearr_17042_19166 = state_17038__$1;
(statearr_17042_19166[(2)] = inst_17034);

(statearr_17042_19166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (1))){
var state_17038__$1 = state_17038;
var statearr_17044_19180 = state_17038__$1;
(statearr_17044_19180[(2)] = null);

(statearr_17044_19180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (4))){
var inst_17020 = (state_17038[(7)]);
var inst_17020__$1 = (state_17038[(2)]);
var inst_17021 = (inst_17020__$1 == null);
var state_17038__$1 = (function (){var statearr_17048 = state_17038;
(statearr_17048[(7)] = inst_17020__$1);

return statearr_17048;
})();
if(cljs.core.truth_(inst_17021)){
var statearr_17049_19188 = state_17038__$1;
(statearr_17049_19188[(1)] = (5));

} else {
var statearr_17051_19190 = state_17038__$1;
(statearr_17051_19190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (6))){
var inst_17020 = (state_17038[(7)]);
var inst_17025 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17020) : p.call(null, inst_17020));
var state_17038__$1 = state_17038;
if(cljs.core.truth_(inst_17025)){
var statearr_17057_19196 = state_17038__$1;
(statearr_17057_19196[(1)] = (8));

} else {
var statearr_17058_19199 = state_17038__$1;
(statearr_17058_19199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (3))){
var inst_17036 = (state_17038[(2)]);
var state_17038__$1 = state_17038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17038__$1,inst_17036);
} else {
if((state_val_17039 === (2))){
var state_17038__$1 = state_17038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17038__$1,(4),ch);
} else {
if((state_val_17039 === (11))){
var inst_17028 = (state_17038[(2)]);
var state_17038__$1 = state_17038;
var statearr_17059_19271 = state_17038__$1;
(statearr_17059_19271[(2)] = inst_17028);

(statearr_17059_19271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (9))){
var state_17038__$1 = state_17038;
var statearr_17060_19272 = state_17038__$1;
(statearr_17060_19272[(2)] = null);

(statearr_17060_19272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (5))){
var inst_17023 = cljs.core.async.close_BANG_(out);
var state_17038__$1 = state_17038;
var statearr_17061_19274 = state_17038__$1;
(statearr_17061_19274[(2)] = inst_17023);

(statearr_17061_19274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (10))){
var inst_17031 = (state_17038[(2)]);
var state_17038__$1 = (function (){var statearr_17062 = state_17038;
(statearr_17062[(8)] = inst_17031);

return statearr_17062;
})();
var statearr_17063_19277 = state_17038__$1;
(statearr_17063_19277[(2)] = null);

(statearr_17063_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17039 === (8))){
var inst_17020 = (state_17038[(7)]);
var state_17038__$1 = state_17038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17038__$1,(11),out,inst_17020);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_17064 = [null,null,null,null,null,null,null,null,null];
(statearr_17064[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_17064[(1)] = (1));

return statearr_17064;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_17038){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_17038);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e17065){var ex__14206__auto__ = e17065;
var statearr_17066_19281 = state_17038;
(statearr_17066_19281[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_17038[(4)]))){
var statearr_17067_19282 = state_17038;
(statearr_17067_19282[(1)] = cljs.core.first((state_17038[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19283 = state_17038;
state_17038 = G__19283;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_17038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_17038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_17068 = f__14422__auto__();
(statearr_17068[(6)] = c__14421__auto___19147);

return statearr_17068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17085 = arguments.length;
switch (G__17085) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_17176){
var state_val_17177 = (state_17176[(1)]);
if((state_val_17177 === (7))){
var inst_17172 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17180_19287 = state_17176__$1;
(statearr_17180_19287[(2)] = inst_17172);

(statearr_17180_19287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (20))){
var inst_17142 = (state_17176[(7)]);
var inst_17153 = (state_17176[(2)]);
var inst_17154 = cljs.core.next(inst_17142);
var inst_17120 = inst_17154;
var inst_17121 = null;
var inst_17122 = (0);
var inst_17123 = (0);
var state_17176__$1 = (function (){var statearr_17182 = state_17176;
(statearr_17182[(8)] = inst_17153);

(statearr_17182[(9)] = inst_17120);

(statearr_17182[(10)] = inst_17122);

(statearr_17182[(11)] = inst_17123);

(statearr_17182[(12)] = inst_17121);

return statearr_17182;
})();
var statearr_17183_19294 = state_17176__$1;
(statearr_17183_19294[(2)] = null);

(statearr_17183_19294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (1))){
var state_17176__$1 = state_17176;
var statearr_17184_19295 = state_17176__$1;
(statearr_17184_19295[(2)] = null);

(statearr_17184_19295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (4))){
var inst_17103 = (state_17176[(13)]);
var inst_17103__$1 = (state_17176[(2)]);
var inst_17110 = (inst_17103__$1 == null);
var state_17176__$1 = (function (){var statearr_17185 = state_17176;
(statearr_17185[(13)] = inst_17103__$1);

return statearr_17185;
})();
if(cljs.core.truth_(inst_17110)){
var statearr_17186_19299 = state_17176__$1;
(statearr_17186_19299[(1)] = (5));

} else {
var statearr_17187_19301 = state_17176__$1;
(statearr_17187_19301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (15))){
var state_17176__$1 = state_17176;
var statearr_17191_19302 = state_17176__$1;
(statearr_17191_19302[(2)] = null);

(statearr_17191_19302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (21))){
var state_17176__$1 = state_17176;
var statearr_17195_19314 = state_17176__$1;
(statearr_17195_19314[(2)] = null);

(statearr_17195_19314[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (13))){
var inst_17120 = (state_17176[(9)]);
var inst_17122 = (state_17176[(10)]);
var inst_17123 = (state_17176[(11)]);
var inst_17121 = (state_17176[(12)]);
var inst_17138 = (state_17176[(2)]);
var inst_17139 = (inst_17123 + (1));
var tmp17188 = inst_17120;
var tmp17189 = inst_17122;
var tmp17190 = inst_17121;
var inst_17120__$1 = tmp17188;
var inst_17121__$1 = tmp17190;
var inst_17122__$1 = tmp17189;
var inst_17123__$1 = inst_17139;
var state_17176__$1 = (function (){var statearr_17196 = state_17176;
(statearr_17196[(9)] = inst_17120__$1);

(statearr_17196[(10)] = inst_17122__$1);

(statearr_17196[(11)] = inst_17123__$1);

(statearr_17196[(12)] = inst_17121__$1);

(statearr_17196[(14)] = inst_17138);

return statearr_17196;
})();
var statearr_17197_19326 = state_17176__$1;
(statearr_17197_19326[(2)] = null);

(statearr_17197_19326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (22))){
var state_17176__$1 = state_17176;
var statearr_17198_19327 = state_17176__$1;
(statearr_17198_19327[(2)] = null);

(statearr_17198_19327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (6))){
var inst_17103 = (state_17176[(13)]);
var inst_17118 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17103) : f.call(null, inst_17103));
var inst_17119 = cljs.core.seq(inst_17118);
var inst_17120 = inst_17119;
var inst_17121 = null;
var inst_17122 = (0);
var inst_17123 = (0);
var state_17176__$1 = (function (){var statearr_17199 = state_17176;
(statearr_17199[(9)] = inst_17120);

(statearr_17199[(10)] = inst_17122);

(statearr_17199[(11)] = inst_17123);

(statearr_17199[(12)] = inst_17121);

return statearr_17199;
})();
var statearr_17201_19338 = state_17176__$1;
(statearr_17201_19338[(2)] = null);

(statearr_17201_19338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (17))){
var inst_17142 = (state_17176[(7)]);
var inst_17146 = cljs.core.chunk_first(inst_17142);
var inst_17147 = cljs.core.chunk_rest(inst_17142);
var inst_17148 = cljs.core.count(inst_17146);
var inst_17120 = inst_17147;
var inst_17121 = inst_17146;
var inst_17122 = inst_17148;
var inst_17123 = (0);
var state_17176__$1 = (function (){var statearr_17202 = state_17176;
(statearr_17202[(9)] = inst_17120);

(statearr_17202[(10)] = inst_17122);

(statearr_17202[(11)] = inst_17123);

(statearr_17202[(12)] = inst_17121);

return statearr_17202;
})();
var statearr_17205_19350 = state_17176__$1;
(statearr_17205_19350[(2)] = null);

(statearr_17205_19350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (3))){
var inst_17174 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17176__$1,inst_17174);
} else {
if((state_val_17177 === (12))){
var inst_17162 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17209_19354 = state_17176__$1;
(statearr_17209_19354[(2)] = inst_17162);

(statearr_17209_19354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (2))){
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17176__$1,(4),in$);
} else {
if((state_val_17177 === (23))){
var inst_17170 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17226_19359 = state_17176__$1;
(statearr_17226_19359[(2)] = inst_17170);

(statearr_17226_19359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (19))){
var inst_17157 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17235_19360 = state_17176__$1;
(statearr_17235_19360[(2)] = inst_17157);

(statearr_17235_19360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (11))){
var inst_17120 = (state_17176[(9)]);
var inst_17142 = (state_17176[(7)]);
var inst_17142__$1 = cljs.core.seq(inst_17120);
var state_17176__$1 = (function (){var statearr_17236 = state_17176;
(statearr_17236[(7)] = inst_17142__$1);

return statearr_17236;
})();
if(inst_17142__$1){
var statearr_17237_19361 = state_17176__$1;
(statearr_17237_19361[(1)] = (14));

} else {
var statearr_17238_19364 = state_17176__$1;
(statearr_17238_19364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (9))){
var inst_17164 = (state_17176[(2)]);
var inst_17165 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17176__$1 = (function (){var statearr_17241 = state_17176;
(statearr_17241[(15)] = inst_17164);

return statearr_17241;
})();
if(cljs.core.truth_(inst_17165)){
var statearr_17242_19366 = state_17176__$1;
(statearr_17242_19366[(1)] = (21));

} else {
var statearr_17243_19367 = state_17176__$1;
(statearr_17243_19367[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (5))){
var inst_17112 = cljs.core.async.close_BANG_(out);
var state_17176__$1 = state_17176;
var statearr_17244_19369 = state_17176__$1;
(statearr_17244_19369[(2)] = inst_17112);

(statearr_17244_19369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (14))){
var inst_17142 = (state_17176[(7)]);
var inst_17144 = cljs.core.chunked_seq_QMARK_(inst_17142);
var state_17176__$1 = state_17176;
if(inst_17144){
var statearr_17245_19370 = state_17176__$1;
(statearr_17245_19370[(1)] = (17));

} else {
var statearr_17246_19371 = state_17176__$1;
(statearr_17246_19371[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (16))){
var inst_17160 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17247_19373 = state_17176__$1;
(statearr_17247_19373[(2)] = inst_17160);

(statearr_17247_19373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17177 === (10))){
var inst_17123 = (state_17176[(11)]);
var inst_17121 = (state_17176[(12)]);
var inst_17130 = cljs.core._nth(inst_17121,inst_17123);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17176__$1,(13),out,inst_17130);
} else {
if((state_val_17177 === (18))){
var inst_17142 = (state_17176[(7)]);
var inst_17151 = cljs.core.first(inst_17142);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17176__$1,(20),out,inst_17151);
} else {
if((state_val_17177 === (8))){
var inst_17122 = (state_17176[(10)]);
var inst_17123 = (state_17176[(11)]);
var inst_17127 = (inst_17123 < inst_17122);
var inst_17128 = inst_17127;
var state_17176__$1 = state_17176;
if(cljs.core.truth_(inst_17128)){
var statearr_17249_19380 = state_17176__$1;
(statearr_17249_19380[(1)] = (10));

} else {
var statearr_17250_19381 = state_17176__$1;
(statearr_17250_19381[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14203__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14203__auto____0 = (function (){
var statearr_17257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17257[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14203__auto__);

(statearr_17257[(1)] = (1));

return statearr_17257;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14203__auto____1 = (function (state_17176){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_17176);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e17263){var ex__14206__auto__ = e17263;
var statearr_17264_19382 = state_17176;
(statearr_17264_19382[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_17176[(4)]))){
var statearr_17266_19383 = state_17176;
(statearr_17266_19383[(1)] = cljs.core.first((state_17176[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19384 = state_17176;
state_17176 = G__19384;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14203__auto__ = function(state_17176){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14203__auto____1.call(this,state_17176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14203__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14203__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_17274 = f__14422__auto__();
(statearr_17274[(6)] = c__14421__auto__);

return statearr_17274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));

return c__14421__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17282 = arguments.length;
switch (G__17282) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17296 = arguments.length;
switch (G__17296) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17379 = arguments.length;
switch (G__17379) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14421__auto___19392 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_17429){
var state_val_17430 = (state_17429[(1)]);
if((state_val_17430 === (7))){
var inst_17421 = (state_17429[(2)]);
var state_17429__$1 = state_17429;
var statearr_17435_19396 = state_17429__$1;
(statearr_17435_19396[(2)] = inst_17421);

(statearr_17435_19396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (1))){
var inst_17401 = null;
var state_17429__$1 = (function (){var statearr_17439 = state_17429;
(statearr_17439[(7)] = inst_17401);

return statearr_17439;
})();
var statearr_17442_19397 = state_17429__$1;
(statearr_17442_19397[(2)] = null);

(statearr_17442_19397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (4))){
var inst_17404 = (state_17429[(8)]);
var inst_17404__$1 = (state_17429[(2)]);
var inst_17405 = (inst_17404__$1 == null);
var inst_17408 = cljs.core.not(inst_17405);
var state_17429__$1 = (function (){var statearr_17445 = state_17429;
(statearr_17445[(8)] = inst_17404__$1);

return statearr_17445;
})();
if(inst_17408){
var statearr_17446_19399 = state_17429__$1;
(statearr_17446_19399[(1)] = (5));

} else {
var statearr_17447_19401 = state_17429__$1;
(statearr_17447_19401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (6))){
var state_17429__$1 = state_17429;
var statearr_17450_19402 = state_17429__$1;
(statearr_17450_19402[(2)] = null);

(statearr_17450_19402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (3))){
var inst_17423 = (state_17429[(2)]);
var inst_17424 = cljs.core.async.close_BANG_(out);
var state_17429__$1 = (function (){var statearr_17451 = state_17429;
(statearr_17451[(9)] = inst_17423);

return statearr_17451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17429__$1,inst_17424);
} else {
if((state_val_17430 === (2))){
var state_17429__$1 = state_17429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17429__$1,(4),ch);
} else {
if((state_val_17430 === (11))){
var inst_17404 = (state_17429[(8)]);
var inst_17415 = (state_17429[(2)]);
var inst_17401 = inst_17404;
var state_17429__$1 = (function (){var statearr_17453 = state_17429;
(statearr_17453[(10)] = inst_17415);

(statearr_17453[(7)] = inst_17401);

return statearr_17453;
})();
var statearr_17454_19413 = state_17429__$1;
(statearr_17454_19413[(2)] = null);

(statearr_17454_19413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (9))){
var inst_17404 = (state_17429[(8)]);
var state_17429__$1 = state_17429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17429__$1,(11),out,inst_17404);
} else {
if((state_val_17430 === (5))){
var inst_17404 = (state_17429[(8)]);
var inst_17401 = (state_17429[(7)]);
var inst_17410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17404,inst_17401);
var state_17429__$1 = state_17429;
if(inst_17410){
var statearr_17460_19414 = state_17429__$1;
(statearr_17460_19414[(1)] = (8));

} else {
var statearr_17461_19415 = state_17429__$1;
(statearr_17461_19415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (10))){
var inst_17418 = (state_17429[(2)]);
var state_17429__$1 = state_17429;
var statearr_17462_19416 = state_17429__$1;
(statearr_17462_19416[(2)] = inst_17418);

(statearr_17462_19416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17430 === (8))){
var inst_17401 = (state_17429[(7)]);
var tmp17455 = inst_17401;
var inst_17401__$1 = tmp17455;
var state_17429__$1 = (function (){var statearr_17469 = state_17429;
(statearr_17469[(7)] = inst_17401__$1);

return statearr_17469;
})();
var statearr_17470_19420 = state_17429__$1;
(statearr_17470_19420[(2)] = null);

(statearr_17470_19420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_17473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17473[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_17473[(1)] = (1));

return statearr_17473;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_17429){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_17429);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e17479){var ex__14206__auto__ = e17479;
var statearr_17489_19421 = state_17429;
(statearr_17489_19421[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_17429[(4)]))){
var statearr_17493_19422 = state_17429;
(statearr_17493_19422[(1)] = cljs.core.first((state_17429[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19423 = state_17429;
state_17429 = G__19423;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_17429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_17429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_17496 = f__14422__auto__();
(statearr_17496[(6)] = c__14421__auto___19392);

return statearr_17496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17508 = arguments.length;
switch (G__17508) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14421__auto___19430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_17548){
var state_val_17549 = (state_17548[(1)]);
if((state_val_17549 === (7))){
var inst_17544 = (state_17548[(2)]);
var state_17548__$1 = state_17548;
var statearr_17551_19437 = state_17548__$1;
(statearr_17551_19437[(2)] = inst_17544);

(statearr_17551_19437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (1))){
var inst_17509 = (new Array(n));
var inst_17510 = inst_17509;
var inst_17511 = (0);
var state_17548__$1 = (function (){var statearr_17552 = state_17548;
(statearr_17552[(7)] = inst_17510);

(statearr_17552[(8)] = inst_17511);

return statearr_17552;
})();
var statearr_17553_19438 = state_17548__$1;
(statearr_17553_19438[(2)] = null);

(statearr_17553_19438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (4))){
var inst_17515 = (state_17548[(9)]);
var inst_17515__$1 = (state_17548[(2)]);
var inst_17516 = (inst_17515__$1 == null);
var inst_17517 = cljs.core.not(inst_17516);
var state_17548__$1 = (function (){var statearr_17555 = state_17548;
(statearr_17555[(9)] = inst_17515__$1);

return statearr_17555;
})();
if(inst_17517){
var statearr_17556_19445 = state_17548__$1;
(statearr_17556_19445[(1)] = (5));

} else {
var statearr_17557_19446 = state_17548__$1;
(statearr_17557_19446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (15))){
var inst_17538 = (state_17548[(2)]);
var state_17548__$1 = state_17548;
var statearr_17558_19447 = state_17548__$1;
(statearr_17558_19447[(2)] = inst_17538);

(statearr_17558_19447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (13))){
var state_17548__$1 = state_17548;
var statearr_17559_19448 = state_17548__$1;
(statearr_17559_19448[(2)] = null);

(statearr_17559_19448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (6))){
var inst_17511 = (state_17548[(8)]);
var inst_17534 = (inst_17511 > (0));
var state_17548__$1 = state_17548;
if(cljs.core.truth_(inst_17534)){
var statearr_17564_19449 = state_17548__$1;
(statearr_17564_19449[(1)] = (12));

} else {
var statearr_17565_19450 = state_17548__$1;
(statearr_17565_19450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (3))){
var inst_17546 = (state_17548[(2)]);
var state_17548__$1 = state_17548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17548__$1,inst_17546);
} else {
if((state_val_17549 === (12))){
var inst_17510 = (state_17548[(7)]);
var inst_17536 = cljs.core.vec(inst_17510);
var state_17548__$1 = state_17548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17548__$1,(15),out,inst_17536);
} else {
if((state_val_17549 === (2))){
var state_17548__$1 = state_17548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17548__$1,(4),ch);
} else {
if((state_val_17549 === (11))){
var inst_17528 = (state_17548[(2)]);
var inst_17529 = (new Array(n));
var inst_17510 = inst_17529;
var inst_17511 = (0);
var state_17548__$1 = (function (){var statearr_17576 = state_17548;
(statearr_17576[(7)] = inst_17510);

(statearr_17576[(8)] = inst_17511);

(statearr_17576[(10)] = inst_17528);

return statearr_17576;
})();
var statearr_17577_19463 = state_17548__$1;
(statearr_17577_19463[(2)] = null);

(statearr_17577_19463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (9))){
var inst_17510 = (state_17548[(7)]);
var inst_17526 = cljs.core.vec(inst_17510);
var state_17548__$1 = state_17548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17548__$1,(11),out,inst_17526);
} else {
if((state_val_17549 === (5))){
var inst_17510 = (state_17548[(7)]);
var inst_17511 = (state_17548[(8)]);
var inst_17515 = (state_17548[(9)]);
var inst_17521 = (state_17548[(11)]);
var inst_17519 = (inst_17510[inst_17511] = inst_17515);
var inst_17521__$1 = (inst_17511 + (1));
var inst_17522 = (inst_17521__$1 < n);
var state_17548__$1 = (function (){var statearr_17579 = state_17548;
(statearr_17579[(11)] = inst_17521__$1);

(statearr_17579[(12)] = inst_17519);

return statearr_17579;
})();
if(cljs.core.truth_(inst_17522)){
var statearr_17580_19464 = state_17548__$1;
(statearr_17580_19464[(1)] = (8));

} else {
var statearr_17584_19465 = state_17548__$1;
(statearr_17584_19465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (14))){
var inst_17541 = (state_17548[(2)]);
var inst_17542 = cljs.core.async.close_BANG_(out);
var state_17548__$1 = (function (){var statearr_17588 = state_17548;
(statearr_17588[(13)] = inst_17541);

return statearr_17588;
})();
var statearr_17590_19467 = state_17548__$1;
(statearr_17590_19467[(2)] = inst_17542);

(statearr_17590_19467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (10))){
var inst_17532 = (state_17548[(2)]);
var state_17548__$1 = state_17548;
var statearr_17591_19468 = state_17548__$1;
(statearr_17591_19468[(2)] = inst_17532);

(statearr_17591_19468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17549 === (8))){
var inst_17510 = (state_17548[(7)]);
var inst_17521 = (state_17548[(11)]);
var tmp17585 = inst_17510;
var inst_17510__$1 = tmp17585;
var inst_17511 = inst_17521;
var state_17548__$1 = (function (){var statearr_17592 = state_17548;
(statearr_17592[(7)] = inst_17510__$1);

(statearr_17592[(8)] = inst_17511);

return statearr_17592;
})();
var statearr_17593_19469 = state_17548__$1;
(statearr_17593_19469[(2)] = null);

(statearr_17593_19469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_17601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17601[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_17601[(1)] = (1));

return statearr_17601;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_17548){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_17548);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e17604){var ex__14206__auto__ = e17604;
var statearr_17607_19471 = state_17548;
(statearr_17607_19471[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_17548[(4)]))){
var statearr_17608_19472 = state_17548;
(statearr_17608_19472[(1)] = cljs.core.first((state_17548[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19473 = state_17548;
state_17548 = G__19473;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_17548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_17548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_17609 = f__14422__auto__();
(statearr_17609[(6)] = c__14421__auto___19430);

return statearr_17609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17621 = arguments.length;
switch (G__17621) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14421__auto___19484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14422__auto__ = (function (){var switch__14202__auto__ = (function (state_17706){
var state_val_17707 = (state_17706[(1)]);
if((state_val_17707 === (7))){
var inst_17694 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17721_19486 = state_17706__$1;
(statearr_17721_19486[(2)] = inst_17694);

(statearr_17721_19486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (1))){
var inst_17646 = [];
var inst_17647 = inst_17646;
var inst_17648 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17706__$1 = (function (){var statearr_17724 = state_17706;
(statearr_17724[(7)] = inst_17647);

(statearr_17724[(8)] = inst_17648);

return statearr_17724;
})();
var statearr_17727_19488 = state_17706__$1;
(statearr_17727_19488[(2)] = null);

(statearr_17727_19488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (4))){
var inst_17651 = (state_17706[(9)]);
var inst_17651__$1 = (state_17706[(2)]);
var inst_17652 = (inst_17651__$1 == null);
var inst_17653 = cljs.core.not(inst_17652);
var state_17706__$1 = (function (){var statearr_17740 = state_17706;
(statearr_17740[(9)] = inst_17651__$1);

return statearr_17740;
})();
if(inst_17653){
var statearr_17742_19497 = state_17706__$1;
(statearr_17742_19497[(1)] = (5));

} else {
var statearr_17743_19498 = state_17706__$1;
(statearr_17743_19498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (15))){
var inst_17647 = (state_17706[(7)]);
var inst_17686 = cljs.core.vec(inst_17647);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(18),out,inst_17686);
} else {
if((state_val_17707 === (13))){
var inst_17681 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17748_19499 = state_17706__$1;
(statearr_17748_19499[(2)] = inst_17681);

(statearr_17748_19499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (6))){
var inst_17647 = (state_17706[(7)]);
var inst_17683 = inst_17647.length;
var inst_17684 = (inst_17683 > (0));
var state_17706__$1 = state_17706;
if(cljs.core.truth_(inst_17684)){
var statearr_17750_19500 = state_17706__$1;
(statearr_17750_19500[(1)] = (15));

} else {
var statearr_17751_19501 = state_17706__$1;
(statearr_17751_19501[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (17))){
var inst_17691 = (state_17706[(2)]);
var inst_17692 = cljs.core.async.close_BANG_(out);
var state_17706__$1 = (function (){var statearr_17756 = state_17706;
(statearr_17756[(10)] = inst_17691);

return statearr_17756;
})();
var statearr_17757_19506 = state_17706__$1;
(statearr_17757_19506[(2)] = inst_17692);

(statearr_17757_19506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (3))){
var inst_17697 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17706__$1,inst_17697);
} else {
if((state_val_17707 === (12))){
var inst_17647 = (state_17706[(7)]);
var inst_17674 = cljs.core.vec(inst_17647);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(14),out,inst_17674);
} else {
if((state_val_17707 === (2))){
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17706__$1,(4),ch);
} else {
if((state_val_17707 === (11))){
var inst_17647 = (state_17706[(7)]);
var inst_17651 = (state_17706[(9)]);
var inst_17655 = (state_17706[(11)]);
var inst_17669 = inst_17647.push(inst_17651);
var tmp17761 = inst_17647;
var inst_17647__$1 = tmp17761;
var inst_17648 = inst_17655;
var state_17706__$1 = (function (){var statearr_17780 = state_17706;
(statearr_17780[(7)] = inst_17647__$1);

(statearr_17780[(8)] = inst_17648);

(statearr_17780[(12)] = inst_17669);

return statearr_17780;
})();
var statearr_17781_19508 = state_17706__$1;
(statearr_17781_19508[(2)] = null);

(statearr_17781_19508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (9))){
var inst_17648 = (state_17706[(8)]);
var inst_17662 = cljs.core.keyword_identical_QMARK_(inst_17648,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17706__$1 = state_17706;
var statearr_17782_19513 = state_17706__$1;
(statearr_17782_19513[(2)] = inst_17662);

(statearr_17782_19513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (5))){
var inst_17658 = (state_17706[(13)]);
var inst_17651 = (state_17706[(9)]);
var inst_17655 = (state_17706[(11)]);
var inst_17648 = (state_17706[(8)]);
var inst_17655__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17651) : f.call(null, inst_17651));
var inst_17658__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17655__$1,inst_17648);
var state_17706__$1 = (function (){var statearr_17787 = state_17706;
(statearr_17787[(13)] = inst_17658__$1);

(statearr_17787[(11)] = inst_17655__$1);

return statearr_17787;
})();
if(inst_17658__$1){
var statearr_17790_19524 = state_17706__$1;
(statearr_17790_19524[(1)] = (8));

} else {
var statearr_17792_19525 = state_17706__$1;
(statearr_17792_19525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (14))){
var inst_17651 = (state_17706[(9)]);
var inst_17655 = (state_17706[(11)]);
var inst_17676 = (state_17706[(2)]);
var inst_17677 = [];
var inst_17678 = inst_17677.push(inst_17651);
var inst_17647 = inst_17677;
var inst_17648 = inst_17655;
var state_17706__$1 = (function (){var statearr_17799 = state_17706;
(statearr_17799[(14)] = inst_17678);

(statearr_17799[(7)] = inst_17647);

(statearr_17799[(15)] = inst_17676);

(statearr_17799[(8)] = inst_17648);

return statearr_17799;
})();
var statearr_17801_19530 = state_17706__$1;
(statearr_17801_19530[(2)] = null);

(statearr_17801_19530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (16))){
var state_17706__$1 = state_17706;
var statearr_17803_19531 = state_17706__$1;
(statearr_17803_19531[(2)] = null);

(statearr_17803_19531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (10))){
var inst_17664 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
if(cljs.core.truth_(inst_17664)){
var statearr_17810_19532 = state_17706__$1;
(statearr_17810_19532[(1)] = (11));

} else {
var statearr_17811_19533 = state_17706__$1;
(statearr_17811_19533[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (18))){
var inst_17688 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17815_19534 = state_17706__$1;
(statearr_17815_19534[(2)] = inst_17688);

(statearr_17815_19534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (8))){
var inst_17658 = (state_17706[(13)]);
var state_17706__$1 = state_17706;
var statearr_17820_19535 = state_17706__$1;
(statearr_17820_19535[(2)] = inst_17658);

(statearr_17820_19535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14203__auto__ = null;
var cljs$core$async$state_machine__14203__auto____0 = (function (){
var statearr_17827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17827[(0)] = cljs$core$async$state_machine__14203__auto__);

(statearr_17827[(1)] = (1));

return statearr_17827;
});
var cljs$core$async$state_machine__14203__auto____1 = (function (state_17706){
while(true){
var ret_value__14204__auto__ = (function (){try{while(true){
var result__14205__auto__ = switch__14202__auto__(state_17706);
if(cljs.core.keyword_identical_QMARK_(result__14205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14205__auto__;
}
break;
}
}catch (e17828){var ex__14206__auto__ = e17828;
var statearr_17829_19544 = state_17706;
(statearr_17829_19544[(2)] = ex__14206__auto__);


if(cljs.core.seq((state_17706[(4)]))){
var statearr_17830_19547 = state_17706;
(statearr_17830_19547[(1)] = cljs.core.first((state_17706[(4)])));

} else {
throw ex__14206__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19549 = state_17706;
state_17706 = G__19549;
continue;
} else {
return ret_value__14204__auto__;
}
break;
}
});
cljs$core$async$state_machine__14203__auto__ = function(state_17706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14203__auto____1.call(this,state_17706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14203__auto____0;
cljs$core$async$state_machine__14203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14203__auto____1;
return cljs$core$async$state_machine__14203__auto__;
})()
})();
var state__14423__auto__ = (function (){var statearr_17831 = f__14422__auto__();
(statearr_17831[(6)] = c__14421__auto___19484);

return statearr_17831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14423__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
