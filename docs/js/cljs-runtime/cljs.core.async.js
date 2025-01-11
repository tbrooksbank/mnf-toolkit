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
cljs.core.async.t_cljs$core$async14689 = (function (f,blockable,meta14690){
this.f = f;
this.blockable = blockable;
this.meta14690 = meta14690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14691,meta14690__$1){
var self__ = this;
var _14691__$1 = this;
return (new cljs.core.async.t_cljs$core$async14689(self__.f,self__.blockable,meta14690__$1));
}));

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14691){
var self__ = this;
var _14691__$1 = this;
return self__.meta14690;
}));

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14690","meta14690",662849740,null)], null);
}));

(cljs.core.async.t_cljs$core$async14689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14689");

(cljs.core.async.t_cljs$core$async14689.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14689.
 */
cljs.core.async.__GT_t_cljs$core$async14689 = (function cljs$core$async$__GT_t_cljs$core$async14689(f,blockable,meta14690){
return (new cljs.core.async.t_cljs$core$async14689(f,blockable,meta14690));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14683 = arguments.length;
switch (G__14683) {
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
return (new cljs.core.async.t_cljs$core$async14689(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14722 = arguments.length;
switch (G__14722) {
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
var G__14732 = arguments.length;
switch (G__14732) {
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
var G__14759 = arguments.length;
switch (G__14759) {
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
var val_18118 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18118) : fn1.call(null, val_18118));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18118) : fn1.call(null, val_18118));
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
var G__14777 = arguments.length;
switch (G__14777) {
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
var n__5593__auto___18132 = n;
var x_18133 = (0);
while(true){
if((x_18133 < n__5593__auto___18132)){
(a[x_18133] = x_18133);

var G__18135 = (x_18133 + (1));
x_18133 = G__18135;
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
cljs.core.async.t_cljs$core$async14794 = (function (flag,meta14795){
this.flag = flag;
this.meta14795 = meta14795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14796,meta14795__$1){
var self__ = this;
var _14796__$1 = this;
return (new cljs.core.async.t_cljs$core$async14794(self__.flag,meta14795__$1));
}));

(cljs.core.async.t_cljs$core$async14794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14796){
var self__ = this;
var _14796__$1 = this;
return self__.meta14795;
}));

(cljs.core.async.t_cljs$core$async14794.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14795","meta14795",-940011700,null)], null);
}));

(cljs.core.async.t_cljs$core$async14794.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14794");

(cljs.core.async.t_cljs$core$async14794.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14794");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14794.
 */
cljs.core.async.__GT_t_cljs$core$async14794 = (function cljs$core$async$__GT_t_cljs$core$async14794(flag,meta14795){
return (new cljs.core.async.t_cljs$core$async14794(flag,meta14795));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14794(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14799 = (function (flag,cb,meta14800){
this.flag = flag;
this.cb = cb;
this.meta14800 = meta14800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14801,meta14800__$1){
var self__ = this;
var _14801__$1 = this;
return (new cljs.core.async.t_cljs$core$async14799(self__.flag,self__.cb,meta14800__$1));
}));

(cljs.core.async.t_cljs$core$async14799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14801){
var self__ = this;
var _14801__$1 = this;
return self__.meta14800;
}));

(cljs.core.async.t_cljs$core$async14799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14800","meta14800",-881814674,null)], null);
}));

(cljs.core.async.t_cljs$core$async14799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14799");

(cljs.core.async.t_cljs$core$async14799.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14799.
 */
cljs.core.async.__GT_t_cljs$core$async14799 = (function cljs$core$async$__GT_t_cljs$core$async14799(flag,cb,meta14800){
return (new cljs.core.async.t_cljs$core$async14799(flag,cb,meta14800));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14799(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14830_SHARP_){
var G__14841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14830_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14841) : fret.call(null, G__14841));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14831_SHARP_){
var G__14842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14831_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14842) : fret.call(null, G__14842));
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
var G__18181 = (i + (1));
i = G__18181;
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
var len__5726__auto___18183 = arguments.length;
var i__5727__auto___18184 = (0);
while(true){
if((i__5727__auto___18184 < len__5726__auto___18183)){
args__5732__auto__.push((arguments[i__5727__auto___18184]));

var G__18185 = (i__5727__auto___18184 + (1));
i__5727__auto___18184 = G__18185;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14854){
var map__14855 = p__14854;
var map__14855__$1 = cljs.core.__destructure_map(map__14855);
var opts = map__14855__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14846){
var G__14847 = cljs.core.first(seq14846);
var seq14846__$1 = cljs.core.next(seq14846);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14847,seq14846__$1);
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
var G__14861 = arguments.length;
switch (G__14861) {
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
var c__14562__auto___18203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_14985){
var state_val_14986 = (state_14985[(1)]);
if((state_val_14986 === (7))){
var inst_14979 = (state_14985[(2)]);
var state_14985__$1 = state_14985;
var statearr_14994_18204 = state_14985__$1;
(statearr_14994_18204[(2)] = inst_14979);

(statearr_14994_18204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (1))){
var state_14985__$1 = state_14985;
var statearr_14995_18206 = state_14985__$1;
(statearr_14995_18206[(2)] = null);

(statearr_14995_18206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (4))){
var inst_14962 = (state_14985[(7)]);
var inst_14962__$1 = (state_14985[(2)]);
var inst_14963 = (inst_14962__$1 == null);
var state_14985__$1 = (function (){var statearr_14996 = state_14985;
(statearr_14996[(7)] = inst_14962__$1);

return statearr_14996;
})();
if(cljs.core.truth_(inst_14963)){
var statearr_14997_18209 = state_14985__$1;
(statearr_14997_18209[(1)] = (5));

} else {
var statearr_14998_18210 = state_14985__$1;
(statearr_14998_18210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (13))){
var state_14985__$1 = state_14985;
var statearr_15076_18214 = state_14985__$1;
(statearr_15076_18214[(2)] = null);

(statearr_15076_18214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (6))){
var inst_14962 = (state_14985[(7)]);
var state_14985__$1 = state_14985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14985__$1,(11),to,inst_14962);
} else {
if((state_val_14986 === (3))){
var inst_14981 = (state_14985[(2)]);
var state_14985__$1 = state_14985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14985__$1,inst_14981);
} else {
if((state_val_14986 === (12))){
var state_14985__$1 = state_14985;
var statearr_15093_18215 = state_14985__$1;
(statearr_15093_18215[(2)] = null);

(statearr_15093_18215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (2))){
var state_14985__$1 = state_14985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14985__$1,(4),from);
} else {
if((state_val_14986 === (11))){
var inst_14972 = (state_14985[(2)]);
var state_14985__$1 = state_14985;
if(cljs.core.truth_(inst_14972)){
var statearr_15098_18218 = state_14985__$1;
(statearr_15098_18218[(1)] = (12));

} else {
var statearr_15099_18219 = state_14985__$1;
(statearr_15099_18219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (9))){
var state_14985__$1 = state_14985;
var statearr_15100_18221 = state_14985__$1;
(statearr_15100_18221[(2)] = null);

(statearr_15100_18221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (5))){
var state_14985__$1 = state_14985;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15101_18229 = state_14985__$1;
(statearr_15101_18229[(1)] = (8));

} else {
var statearr_15102_18230 = state_14985__$1;
(statearr_15102_18230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (14))){
var inst_14977 = (state_14985[(2)]);
var state_14985__$1 = state_14985;
var statearr_15103_18232 = state_14985__$1;
(statearr_15103_18232[(2)] = inst_14977);

(statearr_15103_18232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (10))){
var inst_14969 = (state_14985[(2)]);
var state_14985__$1 = state_14985;
var statearr_15105_18233 = state_14985__$1;
(statearr_15105_18233[(2)] = inst_14969);

(statearr_15105_18233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (8))){
var inst_14966 = cljs.core.async.close_BANG_(to);
var state_14985__$1 = state_14985;
var statearr_15107_18237 = state_14985__$1;
(statearr_15107_18237[(2)] = inst_14966);

(statearr_15107_18237[(1)] = (10));


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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_15111 = [null,null,null,null,null,null,null,null];
(statearr_15111[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_15111[(1)] = (1));

return statearr_15111;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_14985){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_14985);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15112){var ex__14302__auto__ = e15112;
var statearr_15113_18238 = state_14985;
(statearr_15113_18238[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_14985[(4)]))){
var statearr_15114_18239 = state_14985;
(statearr_15114_18239[(1)] = cljs.core.first((state_14985[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18240 = state_14985;
state_14985 = G__18240;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_14985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_14985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_15115 = f__14563__auto__();
(statearr_15115[(6)] = c__14562__auto___18203);

return statearr_15115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
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
var process__$1 = (function (p__15126){
var vec__15127 = p__15126;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127,(1),null);
var job = vec__15127;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14562__auto___18251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_15138){
var state_val_15139 = (state_15138[(1)]);
if((state_val_15139 === (1))){
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15138__$1,(2),res,v);
} else {
if((state_val_15139 === (2))){
var inst_15134 = (state_15138[(2)]);
var inst_15135 = cljs.core.async.close_BANG_(res);
var state_15138__$1 = (function (){var statearr_15144 = state_15138;
(statearr_15144[(7)] = inst_15134);

return statearr_15144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15138__$1,inst_15135);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0 = (function (){
var statearr_15147 = [null,null,null,null,null,null,null,null];
(statearr_15147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__);

(statearr_15147[(1)] = (1));

return statearr_15147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1 = (function (state_15138){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15138);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15150){var ex__14302__auto__ = e15150;
var statearr_15152_18252 = state_15138;
(statearr_15152_18252[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15138[(4)]))){
var statearr_15153_18256 = state_15138;
(statearr_15153_18256[(1)] = cljs.core.first((state_15138[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18267 = state_15138;
state_15138 = G__18267;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = function(state_15138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1.call(this,state_15138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_15154 = f__14563__auto__();
(statearr_15154[(6)] = c__14562__auto___18251);

return statearr_15154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15155){
var vec__15156 = p__15155;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15156,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15156,(1),null);
var job = vec__15156;
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
var n__5593__auto___18278 = n;
var __18279 = (0);
while(true){
if((__18279 < n__5593__auto___18278)){
var G__15159_18280 = type;
var G__15159_18281__$1 = (((G__15159_18280 instanceof cljs.core.Keyword))?G__15159_18280.fqn:null);
switch (G__15159_18281__$1) {
case "compute":
var c__14562__auto___18283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18279,c__14562__auto___18283,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async){
return (function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = ((function (__18279,c__14562__auto___18283,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async){
return (function (state_15176){
var state_val_15177 = (state_15176[(1)]);
if((state_val_15177 === (1))){
var state_15176__$1 = state_15176;
var statearr_15179_18289 = state_15176__$1;
(statearr_15179_18289[(2)] = null);

(statearr_15179_18289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (2))){
var state_15176__$1 = state_15176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15176__$1,(4),jobs);
} else {
if((state_val_15177 === (3))){
var inst_15172 = (state_15176[(2)]);
var state_15176__$1 = state_15176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15176__$1,inst_15172);
} else {
if((state_val_15177 === (4))){
var inst_15164 = (state_15176[(2)]);
var inst_15165 = process__$1(inst_15164);
var state_15176__$1 = state_15176;
if(cljs.core.truth_(inst_15165)){
var statearr_15182_18291 = state_15176__$1;
(statearr_15182_18291[(1)] = (5));

} else {
var statearr_15183_18296 = state_15176__$1;
(statearr_15183_18296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (5))){
var state_15176__$1 = state_15176;
var statearr_15188_18297 = state_15176__$1;
(statearr_15188_18297[(2)] = null);

(statearr_15188_18297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (6))){
var state_15176__$1 = state_15176;
var statearr_15189_18302 = state_15176__$1;
(statearr_15189_18302[(2)] = null);

(statearr_15189_18302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15177 === (7))){
var inst_15170 = (state_15176[(2)]);
var state_15176__$1 = state_15176;
var statearr_15190_18314 = state_15176__$1;
(statearr_15190_18314[(2)] = inst_15170);

(statearr_15190_18314[(1)] = (3));


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
});})(__18279,c__14562__auto___18283,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async))
;
return ((function (__18279,switch__14298__auto__,c__14562__auto___18283,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0 = (function (){
var statearr_15192 = [null,null,null,null,null,null,null];
(statearr_15192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__);

(statearr_15192[(1)] = (1));

return statearr_15192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1 = (function (state_15176){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15176);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15193){var ex__14302__auto__ = e15193;
var statearr_15194_18315 = state_15176;
(statearr_15194_18315[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15176[(4)]))){
var statearr_15198_18316 = state_15176;
(statearr_15198_18316[(1)] = cljs.core.first((state_15176[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18317 = state_15176;
state_15176 = G__18317;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = function(state_15176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1.call(this,state_15176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__;
})()
;})(__18279,switch__14298__auto__,c__14562__auto___18283,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async))
})();
var state__14564__auto__ = (function (){var statearr_15199 = f__14563__auto__();
(statearr_15199[(6)] = c__14562__auto___18283);

return statearr_15199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
});})(__18279,c__14562__auto___18283,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async))
);


break;
case "async":
var c__14562__auto___18318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18279,c__14562__auto___18318,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async){
return (function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = ((function (__18279,c__14562__auto___18318,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async){
return (function (state_15218){
var state_val_15219 = (state_15218[(1)]);
if((state_val_15219 === (1))){
var state_15218__$1 = state_15218;
var statearr_15224_18319 = state_15218__$1;
(statearr_15224_18319[(2)] = null);

(statearr_15224_18319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (2))){
var state_15218__$1 = state_15218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15218__$1,(4),jobs);
} else {
if((state_val_15219 === (3))){
var inst_15216 = (state_15218[(2)]);
var state_15218__$1 = state_15218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15218__$1,inst_15216);
} else {
if((state_val_15219 === (4))){
var inst_15202 = (state_15218[(2)]);
var inst_15204 = async(inst_15202);
var state_15218__$1 = state_15218;
if(cljs.core.truth_(inst_15204)){
var statearr_15230_18320 = state_15218__$1;
(statearr_15230_18320[(1)] = (5));

} else {
var statearr_15231_18321 = state_15218__$1;
(statearr_15231_18321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (5))){
var state_15218__$1 = state_15218;
var statearr_15232_18322 = state_15218__$1;
(statearr_15232_18322[(2)] = null);

(statearr_15232_18322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (6))){
var state_15218__$1 = state_15218;
var statearr_15238_18323 = state_15218__$1;
(statearr_15238_18323[(2)] = null);

(statearr_15238_18323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15219 === (7))){
var inst_15214 = (state_15218[(2)]);
var state_15218__$1 = state_15218;
var statearr_15242_18327 = state_15218__$1;
(statearr_15242_18327[(2)] = inst_15214);

(statearr_15242_18327[(1)] = (3));


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
});})(__18279,c__14562__auto___18318,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async))
;
return ((function (__18279,switch__14298__auto__,c__14562__auto___18318,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0 = (function (){
var statearr_15251 = [null,null,null,null,null,null,null];
(statearr_15251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__);

(statearr_15251[(1)] = (1));

return statearr_15251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1 = (function (state_15218){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15218);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15254){var ex__14302__auto__ = e15254;
var statearr_15255_18331 = state_15218;
(statearr_15255_18331[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15218[(4)]))){
var statearr_15258_18332 = state_15218;
(statearr_15258_18332[(1)] = cljs.core.first((state_15218[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18333 = state_15218;
state_15218 = G__18333;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = function(state_15218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1.call(this,state_15218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__;
})()
;})(__18279,switch__14298__auto__,c__14562__auto___18318,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async))
})();
var state__14564__auto__ = (function (){var statearr_15264 = f__14563__auto__();
(statearr_15264[(6)] = c__14562__auto___18318);

return statearr_15264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
});})(__18279,c__14562__auto___18318,G__15159_18280,G__15159_18281__$1,n__5593__auto___18278,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15159_18281__$1)].join('')));

}

var G__18337 = (__18279 + (1));
__18279 = G__18337;
continue;
} else {
}
break;
}

var c__14562__auto___18338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_15293){
var state_val_15294 = (state_15293[(1)]);
if((state_val_15294 === (7))){
var inst_15287 = (state_15293[(2)]);
var state_15293__$1 = state_15293;
var statearr_15309_18339 = state_15293__$1;
(statearr_15309_18339[(2)] = inst_15287);

(statearr_15309_18339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (1))){
var state_15293__$1 = state_15293;
var statearr_15314_18340 = state_15293__$1;
(statearr_15314_18340[(2)] = null);

(statearr_15314_18340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (4))){
var inst_15270 = (state_15293[(7)]);
var inst_15270__$1 = (state_15293[(2)]);
var inst_15271 = (inst_15270__$1 == null);
var state_15293__$1 = (function (){var statearr_15323 = state_15293;
(statearr_15323[(7)] = inst_15270__$1);

return statearr_15323;
})();
if(cljs.core.truth_(inst_15271)){
var statearr_15324_18341 = state_15293__$1;
(statearr_15324_18341[(1)] = (5));

} else {
var statearr_15325_18342 = state_15293__$1;
(statearr_15325_18342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (6))){
var inst_15276 = (state_15293[(8)]);
var inst_15270 = (state_15293[(7)]);
var inst_15276__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15278 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15279 = [inst_15270,inst_15276__$1];
var inst_15280 = (new cljs.core.PersistentVector(null,2,(5),inst_15278,inst_15279,null));
var state_15293__$1 = (function (){var statearr_15328 = state_15293;
(statearr_15328[(8)] = inst_15276__$1);

return statearr_15328;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15293__$1,(8),jobs,inst_15280);
} else {
if((state_val_15294 === (3))){
var inst_15289 = (state_15293[(2)]);
var state_15293__$1 = state_15293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15293__$1,inst_15289);
} else {
if((state_val_15294 === (2))){
var state_15293__$1 = state_15293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15293__$1,(4),from);
} else {
if((state_val_15294 === (9))){
var inst_15284 = (state_15293[(2)]);
var state_15293__$1 = (function (){var statearr_15338 = state_15293;
(statearr_15338[(9)] = inst_15284);

return statearr_15338;
})();
var statearr_15339_18347 = state_15293__$1;
(statearr_15339_18347[(2)] = null);

(statearr_15339_18347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (5))){
var inst_15273 = cljs.core.async.close_BANG_(jobs);
var state_15293__$1 = state_15293;
var statearr_15340_18349 = state_15293__$1;
(statearr_15340_18349[(2)] = inst_15273);

(statearr_15340_18349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15294 === (8))){
var inst_15276 = (state_15293[(8)]);
var inst_15282 = (state_15293[(2)]);
var state_15293__$1 = (function (){var statearr_15342 = state_15293;
(statearr_15342[(10)] = inst_15282);

return statearr_15342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15293__$1,(9),results,inst_15276);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0 = (function (){
var statearr_15347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__);

(statearr_15347[(1)] = (1));

return statearr_15347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1 = (function (state_15293){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15293);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15348){var ex__14302__auto__ = e15348;
var statearr_15351_18353 = state_15293;
(statearr_15351_18353[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15293[(4)]))){
var statearr_15352_18354 = state_15293;
(statearr_15352_18354[(1)] = cljs.core.first((state_15293[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18355 = state_15293;
state_15293 = G__18355;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = function(state_15293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1.call(this,state_15293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_15355 = f__14563__auto__();
(statearr_15355[(6)] = c__14562__auto___18338);

return statearr_15355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));


var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_15397){
var state_val_15398 = (state_15397[(1)]);
if((state_val_15398 === (7))){
var inst_15391 = (state_15397[(2)]);
var state_15397__$1 = state_15397;
var statearr_15403_18359 = state_15397__$1;
(statearr_15403_18359[(2)] = inst_15391);

(statearr_15403_18359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (20))){
var state_15397__$1 = state_15397;
var statearr_15405_18360 = state_15397__$1;
(statearr_15405_18360[(2)] = null);

(statearr_15405_18360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (1))){
var state_15397__$1 = state_15397;
var statearr_15406_18361 = state_15397__$1;
(statearr_15406_18361[(2)] = null);

(statearr_15406_18361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (4))){
var inst_15358 = (state_15397[(7)]);
var inst_15358__$1 = (state_15397[(2)]);
var inst_15359 = (inst_15358__$1 == null);
var state_15397__$1 = (function (){var statearr_15409 = state_15397;
(statearr_15409[(7)] = inst_15358__$1);

return statearr_15409;
})();
if(cljs.core.truth_(inst_15359)){
var statearr_15412_18365 = state_15397__$1;
(statearr_15412_18365[(1)] = (5));

} else {
var statearr_15414_18366 = state_15397__$1;
(statearr_15414_18366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (15))){
var inst_15372 = (state_15397[(8)]);
var state_15397__$1 = state_15397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15397__$1,(18),to,inst_15372);
} else {
if((state_val_15398 === (21))){
var inst_15386 = (state_15397[(2)]);
var state_15397__$1 = state_15397;
var statearr_15417_18367 = state_15397__$1;
(statearr_15417_18367[(2)] = inst_15386);

(statearr_15417_18367[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (13))){
var inst_15388 = (state_15397[(2)]);
var state_15397__$1 = (function (){var statearr_15418 = state_15397;
(statearr_15418[(9)] = inst_15388);

return statearr_15418;
})();
var statearr_15419_18371 = state_15397__$1;
(statearr_15419_18371[(2)] = null);

(statearr_15419_18371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (6))){
var inst_15358 = (state_15397[(7)]);
var state_15397__$1 = state_15397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15397__$1,(11),inst_15358);
} else {
if((state_val_15398 === (17))){
var inst_15380 = (state_15397[(2)]);
var state_15397__$1 = state_15397;
if(cljs.core.truth_(inst_15380)){
var statearr_15420_18372 = state_15397__$1;
(statearr_15420_18372[(1)] = (19));

} else {
var statearr_15421_18373 = state_15397__$1;
(statearr_15421_18373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (3))){
var inst_15393 = (state_15397[(2)]);
var state_15397__$1 = state_15397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15397__$1,inst_15393);
} else {
if((state_val_15398 === (12))){
var inst_15368 = (state_15397[(10)]);
var state_15397__$1 = state_15397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15397__$1,(14),inst_15368);
} else {
if((state_val_15398 === (2))){
var state_15397__$1 = state_15397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15397__$1,(4),results);
} else {
if((state_val_15398 === (19))){
var state_15397__$1 = state_15397;
var statearr_15426_18374 = state_15397__$1;
(statearr_15426_18374[(2)] = null);

(statearr_15426_18374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (11))){
var inst_15368 = (state_15397[(2)]);
var state_15397__$1 = (function (){var statearr_15427 = state_15397;
(statearr_15427[(10)] = inst_15368);

return statearr_15427;
})();
var statearr_15428_18375 = state_15397__$1;
(statearr_15428_18375[(2)] = null);

(statearr_15428_18375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (9))){
var state_15397__$1 = state_15397;
var statearr_15430_18376 = state_15397__$1;
(statearr_15430_18376[(2)] = null);

(statearr_15430_18376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (5))){
var state_15397__$1 = state_15397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15432_18381 = state_15397__$1;
(statearr_15432_18381[(1)] = (8));

} else {
var statearr_15433_18382 = state_15397__$1;
(statearr_15433_18382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (14))){
var inst_15372 = (state_15397[(8)]);
var inst_15374 = (state_15397[(11)]);
var inst_15372__$1 = (state_15397[(2)]);
var inst_15373 = (inst_15372__$1 == null);
var inst_15374__$1 = cljs.core.not(inst_15373);
var state_15397__$1 = (function (){var statearr_15434 = state_15397;
(statearr_15434[(8)] = inst_15372__$1);

(statearr_15434[(11)] = inst_15374__$1);

return statearr_15434;
})();
if(inst_15374__$1){
var statearr_15437_18383 = state_15397__$1;
(statearr_15437_18383[(1)] = (15));

} else {
var statearr_15438_18384 = state_15397__$1;
(statearr_15438_18384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (16))){
var inst_15374 = (state_15397[(11)]);
var state_15397__$1 = state_15397;
var statearr_15440_18385 = state_15397__$1;
(statearr_15440_18385[(2)] = inst_15374);

(statearr_15440_18385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (10))){
var inst_15365 = (state_15397[(2)]);
var state_15397__$1 = state_15397;
var statearr_15441_18389 = state_15397__$1;
(statearr_15441_18389[(2)] = inst_15365);

(statearr_15441_18389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (18))){
var inst_15377 = (state_15397[(2)]);
var state_15397__$1 = state_15397;
var statearr_15444_18390 = state_15397__$1;
(statearr_15444_18390[(2)] = inst_15377);

(statearr_15444_18390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15398 === (8))){
var inst_15362 = cljs.core.async.close_BANG_(to);
var state_15397__$1 = state_15397;
var statearr_15447_18392 = state_15397__$1;
(statearr_15447_18392[(2)] = inst_15362);

(statearr_15447_18392[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0 = (function (){
var statearr_15448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__);

(statearr_15448[(1)] = (1));

return statearr_15448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1 = (function (state_15397){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15397);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15449){var ex__14302__auto__ = e15449;
var statearr_15450_18393 = state_15397;
(statearr_15450_18393[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15397[(4)]))){
var statearr_15453_18398 = state_15397;
(statearr_15453_18398[(1)] = cljs.core.first((state_15397[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18399 = state_15397;
state_15397 = G__18399;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__ = function(state_15397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1.call(this,state_15397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_15456 = f__14563__auto__();
(statearr_15456[(6)] = c__14562__auto__);

return statearr_15456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));

return c__14562__auto__;
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
var G__15461 = arguments.length;
switch (G__15461) {
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
var G__15476 = arguments.length;
switch (G__15476) {
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
var G__15484 = arguments.length;
switch (G__15484) {
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
var c__14562__auto___18412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_15527){
var state_val_15528 = (state_15527[(1)]);
if((state_val_15528 === (7))){
var inst_15518 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15533_18424 = state_15527__$1;
(statearr_15533_18424[(2)] = inst_15518);

(statearr_15533_18424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (1))){
var state_15527__$1 = state_15527;
var statearr_15534_18425 = state_15527__$1;
(statearr_15534_18425[(2)] = null);

(statearr_15534_18425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (4))){
var inst_15499 = (state_15527[(7)]);
var inst_15499__$1 = (state_15527[(2)]);
var inst_15500 = (inst_15499__$1 == null);
var state_15527__$1 = (function (){var statearr_15535 = state_15527;
(statearr_15535[(7)] = inst_15499__$1);

return statearr_15535;
})();
if(cljs.core.truth_(inst_15500)){
var statearr_15536_18426 = state_15527__$1;
(statearr_15536_18426[(1)] = (5));

} else {
var statearr_15537_18427 = state_15527__$1;
(statearr_15537_18427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (13))){
var state_15527__$1 = state_15527;
var statearr_15538_18428 = state_15527__$1;
(statearr_15538_18428[(2)] = null);

(statearr_15538_18428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (6))){
var inst_15499 = (state_15527[(7)]);
var inst_15505 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15499) : p.call(null, inst_15499));
var state_15527__$1 = state_15527;
if(cljs.core.truth_(inst_15505)){
var statearr_15540_18429 = state_15527__$1;
(statearr_15540_18429[(1)] = (9));

} else {
var statearr_15541_18430 = state_15527__$1;
(statearr_15541_18430[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (3))){
var inst_15522 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15527__$1,inst_15522);
} else {
if((state_val_15528 === (12))){
var state_15527__$1 = state_15527;
var statearr_15542_18435 = state_15527__$1;
(statearr_15542_18435[(2)] = null);

(statearr_15542_18435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (2))){
var state_15527__$1 = state_15527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15527__$1,(4),ch);
} else {
if((state_val_15528 === (11))){
var inst_15499 = (state_15527[(7)]);
var inst_15509 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15527__$1,(8),inst_15509,inst_15499);
} else {
if((state_val_15528 === (9))){
var state_15527__$1 = state_15527;
var statearr_15543_18443 = state_15527__$1;
(statearr_15543_18443[(2)] = tc);

(statearr_15543_18443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (5))){
var inst_15502 = cljs.core.async.close_BANG_(tc);
var inst_15503 = cljs.core.async.close_BANG_(fc);
var state_15527__$1 = (function (){var statearr_15544 = state_15527;
(statearr_15544[(8)] = inst_15502);

return statearr_15544;
})();
var statearr_15546_18448 = state_15527__$1;
(statearr_15546_18448[(2)] = inst_15503);

(statearr_15546_18448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (14))){
var inst_15516 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
var statearr_15547_18449 = state_15527__$1;
(statearr_15547_18449[(2)] = inst_15516);

(statearr_15547_18449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (10))){
var state_15527__$1 = state_15527;
var statearr_15550_18450 = state_15527__$1;
(statearr_15550_18450[(2)] = fc);

(statearr_15550_18450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15528 === (8))){
var inst_15511 = (state_15527[(2)]);
var state_15527__$1 = state_15527;
if(cljs.core.truth_(inst_15511)){
var statearr_15551_18454 = state_15527__$1;
(statearr_15551_18454[(1)] = (12));

} else {
var statearr_15552_18455 = state_15527__$1;
(statearr_15552_18455[(1)] = (13));

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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_15556 = [null,null,null,null,null,null,null,null,null];
(statearr_15556[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_15556[(1)] = (1));

return statearr_15556;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_15527){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15527);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15558){var ex__14302__auto__ = e15558;
var statearr_15559_18457 = state_15527;
(statearr_15559_18457[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15527[(4)]))){
var statearr_15561_18462 = state_15527;
(statearr_15561_18462[(1)] = cljs.core.first((state_15527[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18464 = state_15527;
state_15527 = G__18464;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_15527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_15527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_15565 = f__14563__auto__();
(statearr_15565[(6)] = c__14562__auto___18412);

return statearr_15565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
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
var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_15597){
var state_val_15598 = (state_15597[(1)]);
if((state_val_15598 === (7))){
var inst_15590 = (state_15597[(2)]);
var state_15597__$1 = state_15597;
var statearr_15615_18468 = state_15597__$1;
(statearr_15615_18468[(2)] = inst_15590);

(statearr_15615_18468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (1))){
var inst_15569 = init;
var inst_15572 = inst_15569;
var state_15597__$1 = (function (){var statearr_15620 = state_15597;
(statearr_15620[(7)] = inst_15572);

return statearr_15620;
})();
var statearr_15621_18469 = state_15597__$1;
(statearr_15621_18469[(2)] = null);

(statearr_15621_18469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (4))){
var inst_15577 = (state_15597[(8)]);
var inst_15577__$1 = (state_15597[(2)]);
var inst_15578 = (inst_15577__$1 == null);
var state_15597__$1 = (function (){var statearr_15625 = state_15597;
(statearr_15625[(8)] = inst_15577__$1);

return statearr_15625;
})();
if(cljs.core.truth_(inst_15578)){
var statearr_15630_18474 = state_15597__$1;
(statearr_15630_18474[(1)] = (5));

} else {
var statearr_15631_18475 = state_15597__$1;
(statearr_15631_18475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (6))){
var inst_15577 = (state_15597[(8)]);
var inst_15572 = (state_15597[(7)]);
var inst_15581 = (state_15597[(9)]);
var inst_15581__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15572,inst_15577) : f.call(null, inst_15572,inst_15577));
var inst_15582 = cljs.core.reduced_QMARK_(inst_15581__$1);
var state_15597__$1 = (function (){var statearr_15639 = state_15597;
(statearr_15639[(9)] = inst_15581__$1);

return statearr_15639;
})();
if(inst_15582){
var statearr_15646_18481 = state_15597__$1;
(statearr_15646_18481[(1)] = (8));

} else {
var statearr_15657_18482 = state_15597__$1;
(statearr_15657_18482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (3))){
var inst_15592 = (state_15597[(2)]);
var state_15597__$1 = state_15597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15597__$1,inst_15592);
} else {
if((state_val_15598 === (2))){
var state_15597__$1 = state_15597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15597__$1,(4),ch);
} else {
if((state_val_15598 === (9))){
var inst_15581 = (state_15597[(9)]);
var inst_15572 = inst_15581;
var state_15597__$1 = (function (){var statearr_15668 = state_15597;
(statearr_15668[(7)] = inst_15572);

return statearr_15668;
})();
var statearr_15670_18485 = state_15597__$1;
(statearr_15670_18485[(2)] = null);

(statearr_15670_18485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (5))){
var inst_15572 = (state_15597[(7)]);
var state_15597__$1 = state_15597;
var statearr_15673_18487 = state_15597__$1;
(statearr_15673_18487[(2)] = inst_15572);

(statearr_15673_18487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (10))){
var inst_15588 = (state_15597[(2)]);
var state_15597__$1 = state_15597;
var statearr_15678_18488 = state_15597__$1;
(statearr_15678_18488[(2)] = inst_15588);

(statearr_15678_18488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15598 === (8))){
var inst_15581 = (state_15597[(9)]);
var inst_15584 = cljs.core.deref(inst_15581);
var state_15597__$1 = state_15597;
var statearr_15692_18489 = state_15597__$1;
(statearr_15692_18489[(2)] = inst_15584);

(statearr_15692_18489[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14299__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14299__auto____0 = (function (){
var statearr_15698 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15698[(0)] = cljs$core$async$reduce_$_state_machine__14299__auto__);

(statearr_15698[(1)] = (1));

return statearr_15698;
});
var cljs$core$async$reduce_$_state_machine__14299__auto____1 = (function (state_15597){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15597);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15704){var ex__14302__auto__ = e15704;
var statearr_15709_18493 = state_15597;
(statearr_15709_18493[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15597[(4)]))){
var statearr_15711_18494 = state_15597;
(statearr_15711_18494[(1)] = cljs.core.first((state_15597[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18498 = state_15597;
state_15597 = G__18498;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14299__auto__ = function(state_15597){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14299__auto____1.call(this,state_15597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14299__auto____0;
cljs$core$async$reduce_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14299__auto____1;
return cljs$core$async$reduce_$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_15712 = f__14563__auto__();
(statearr_15712[(6)] = c__14562__auto__);

return statearr_15712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));

return c__14562__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_15721){
var state_val_15722 = (state_15721[(1)]);
if((state_val_15722 === (1))){
var inst_15715 = cljs.core.async.reduce(f__$1,init,ch);
var state_15721__$1 = state_15721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15721__$1,(2),inst_15715);
} else {
if((state_val_15722 === (2))){
var inst_15717 = (state_15721[(2)]);
var inst_15719 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15717) : f__$1.call(null, inst_15717));
var state_15721__$1 = state_15721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15721__$1,inst_15719);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14299__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14299__auto____0 = (function (){
var statearr_15723 = [null,null,null,null,null,null,null];
(statearr_15723[(0)] = cljs$core$async$transduce_$_state_machine__14299__auto__);

(statearr_15723[(1)] = (1));

return statearr_15723;
});
var cljs$core$async$transduce_$_state_machine__14299__auto____1 = (function (state_15721){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15721);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15724){var ex__14302__auto__ = e15724;
var statearr_15725_18509 = state_15721;
(statearr_15725_18509[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15721[(4)]))){
var statearr_15726_18510 = state_15721;
(statearr_15726_18510[(1)] = cljs.core.first((state_15721[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18511 = state_15721;
state_15721 = G__18511;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14299__auto__ = function(state_15721){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14299__auto____1.call(this,state_15721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14299__auto____0;
cljs$core$async$transduce_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14299__auto____1;
return cljs$core$async$transduce_$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_15727 = f__14563__auto__();
(statearr_15727[(6)] = c__14562__auto__);

return statearr_15727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));

return c__14562__auto__;
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
var G__15732 = arguments.length;
switch (G__15732) {
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
var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_15765){
var state_val_15766 = (state_15765[(1)]);
if((state_val_15766 === (7))){
var inst_15747 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15768_18523 = state_15765__$1;
(statearr_15768_18523[(2)] = inst_15747);

(statearr_15768_18523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (1))){
var inst_15737 = cljs.core.seq(coll);
var inst_15738 = inst_15737;
var state_15765__$1 = (function (){var statearr_15769 = state_15765;
(statearr_15769[(7)] = inst_15738);

return statearr_15769;
})();
var statearr_15770_18527 = state_15765__$1;
(statearr_15770_18527[(2)] = null);

(statearr_15770_18527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (4))){
var inst_15738 = (state_15765[(7)]);
var inst_15745 = cljs.core.first(inst_15738);
var state_15765__$1 = state_15765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15765__$1,(7),ch,inst_15745);
} else {
if((state_val_15766 === (13))){
var inst_15759 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15772_18534 = state_15765__$1;
(statearr_15772_18534[(2)] = inst_15759);

(statearr_15772_18534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (6))){
var inst_15750 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
if(cljs.core.truth_(inst_15750)){
var statearr_15773_18544 = state_15765__$1;
(statearr_15773_18544[(1)] = (8));

} else {
var statearr_15774_18545 = state_15765__$1;
(statearr_15774_18545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (3))){
var inst_15763 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15765__$1,inst_15763);
} else {
if((state_val_15766 === (12))){
var state_15765__$1 = state_15765;
var statearr_15778_18552 = state_15765__$1;
(statearr_15778_18552[(2)] = null);

(statearr_15778_18552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (2))){
var inst_15738 = (state_15765[(7)]);
var state_15765__$1 = state_15765;
if(cljs.core.truth_(inst_15738)){
var statearr_15784_18565 = state_15765__$1;
(statearr_15784_18565[(1)] = (4));

} else {
var statearr_15785_18566 = state_15765__$1;
(statearr_15785_18566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (11))){
var inst_15756 = cljs.core.async.close_BANG_(ch);
var state_15765__$1 = state_15765;
var statearr_15788_18567 = state_15765__$1;
(statearr_15788_18567[(2)] = inst_15756);

(statearr_15788_18567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (9))){
var state_15765__$1 = state_15765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15792_18568 = state_15765__$1;
(statearr_15792_18568[(1)] = (11));

} else {
var statearr_15793_18569 = state_15765__$1;
(statearr_15793_18569[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (5))){
var inst_15738 = (state_15765[(7)]);
var state_15765__$1 = state_15765;
var statearr_15798_18570 = state_15765__$1;
(statearr_15798_18570[(2)] = inst_15738);

(statearr_15798_18570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (10))){
var inst_15761 = (state_15765[(2)]);
var state_15765__$1 = state_15765;
var statearr_15804_18571 = state_15765__$1;
(statearr_15804_18571[(2)] = inst_15761);

(statearr_15804_18571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15766 === (8))){
var inst_15738 = (state_15765[(7)]);
var inst_15752 = cljs.core.next(inst_15738);
var inst_15738__$1 = inst_15752;
var state_15765__$1 = (function (){var statearr_15806 = state_15765;
(statearr_15806[(7)] = inst_15738__$1);

return statearr_15806;
})();
var statearr_15807_18578 = state_15765__$1;
(statearr_15807_18578[(2)] = null);

(statearr_15807_18578[(1)] = (2));


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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_15808 = [null,null,null,null,null,null,null,null];
(statearr_15808[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_15808[(1)] = (1));

return statearr_15808;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_15765){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15765);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e15809){var ex__14302__auto__ = e15809;
var statearr_15812_18579 = state_15765;
(statearr_15812_18579[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15765[(4)]))){
var statearr_15815_18580 = state_15765;
(statearr_15815_18580[(1)] = cljs.core.first((state_15765[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18586 = state_15765;
state_15765 = G__18586;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_15765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_15765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_15817 = f__14563__auto__();
(statearr_15817[(6)] = c__14562__auto__);

return statearr_15817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));

return c__14562__auto__;
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
var G__15820 = arguments.length;
switch (G__15820) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18596 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18596(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18597 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18597(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18598 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18598(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18599 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18599(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15829 = (function (ch,cs,meta15830){
this.ch = ch;
this.cs = cs;
this.meta15830 = meta15830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15831,meta15830__$1){
var self__ = this;
var _15831__$1 = this;
return (new cljs.core.async.t_cljs$core$async15829(self__.ch,self__.cs,meta15830__$1));
}));

(cljs.core.async.t_cljs$core$async15829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15831){
var self__ = this;
var _15831__$1 = this;
return self__.meta15830;
}));

(cljs.core.async.t_cljs$core$async15829.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15829.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15829.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15829.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15829.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15830","meta15830",-483094600,null)], null);
}));

(cljs.core.async.t_cljs$core$async15829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15829");

(cljs.core.async.t_cljs$core$async15829.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15829.
 */
cljs.core.async.__GT_t_cljs$core$async15829 = (function cljs$core$async$__GT_t_cljs$core$async15829(ch,cs,meta15830){
return (new cljs.core.async.t_cljs$core$async15829(ch,cs,meta15830));
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
var m = (new cljs.core.async.t_cljs$core$async15829(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14562__auto___18601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_15987){
var state_val_15988 = (state_15987[(1)]);
if((state_val_15988 === (7))){
var inst_15982 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_15992_18602 = state_15987__$1;
(statearr_15992_18602[(2)] = inst_15982);

(statearr_15992_18602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (20))){
var inst_15874 = (state_15987[(7)]);
var inst_15887 = cljs.core.first(inst_15874);
var inst_15888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15887,(0),null);
var inst_15889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15887,(1),null);
var state_15987__$1 = (function (){var statearr_15994 = state_15987;
(statearr_15994[(8)] = inst_15888);

return statearr_15994;
})();
if(cljs.core.truth_(inst_15889)){
var statearr_15995_18603 = state_15987__$1;
(statearr_15995_18603[(1)] = (22));

} else {
var statearr_15996_18604 = state_15987__$1;
(statearr_15996_18604[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (27))){
var inst_15920 = (state_15987[(9)]);
var inst_15918 = (state_15987[(10)]);
var inst_15842 = (state_15987[(11)]);
var inst_15926 = (state_15987[(12)]);
var inst_15926__$1 = cljs.core._nth(inst_15918,inst_15920);
var inst_15927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15926__$1,inst_15842,done);
var state_15987__$1 = (function (){var statearr_16000 = state_15987;
(statearr_16000[(12)] = inst_15926__$1);

return statearr_16000;
})();
if(cljs.core.truth_(inst_15927)){
var statearr_16001_18608 = state_15987__$1;
(statearr_16001_18608[(1)] = (30));

} else {
var statearr_16002_18609 = state_15987__$1;
(statearr_16002_18609[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (1))){
var state_15987__$1 = state_15987;
var statearr_16003_18610 = state_15987__$1;
(statearr_16003_18610[(2)] = null);

(statearr_16003_18610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (24))){
var inst_15874 = (state_15987[(7)]);
var inst_15894 = (state_15987[(2)]);
var inst_15895 = cljs.core.next(inst_15874);
var inst_15851 = inst_15895;
var inst_15852 = null;
var inst_15853 = (0);
var inst_15854 = (0);
var state_15987__$1 = (function (){var statearr_16004 = state_15987;
(statearr_16004[(13)] = inst_15852);

(statearr_16004[(14)] = inst_15853);

(statearr_16004[(15)] = inst_15851);

(statearr_16004[(16)] = inst_15894);

(statearr_16004[(17)] = inst_15854);

return statearr_16004;
})();
var statearr_16005_18611 = state_15987__$1;
(statearr_16005_18611[(2)] = null);

(statearr_16005_18611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (39))){
var state_15987__$1 = state_15987;
var statearr_16010_18612 = state_15987__$1;
(statearr_16010_18612[(2)] = null);

(statearr_16010_18612[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (4))){
var inst_15842 = (state_15987[(11)]);
var inst_15842__$1 = (state_15987[(2)]);
var inst_15843 = (inst_15842__$1 == null);
var state_15987__$1 = (function (){var statearr_16016 = state_15987;
(statearr_16016[(11)] = inst_15842__$1);

return statearr_16016;
})();
if(cljs.core.truth_(inst_15843)){
var statearr_16018_18613 = state_15987__$1;
(statearr_16018_18613[(1)] = (5));

} else {
var statearr_16020_18614 = state_15987__$1;
(statearr_16020_18614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (15))){
var inst_15852 = (state_15987[(13)]);
var inst_15853 = (state_15987[(14)]);
var inst_15851 = (state_15987[(15)]);
var inst_15854 = (state_15987[(17)]);
var inst_15870 = (state_15987[(2)]);
var inst_15871 = (inst_15854 + (1));
var tmp16006 = inst_15852;
var tmp16007 = inst_15853;
var tmp16008 = inst_15851;
var inst_15851__$1 = tmp16008;
var inst_15852__$1 = tmp16006;
var inst_15853__$1 = tmp16007;
var inst_15854__$1 = inst_15871;
var state_15987__$1 = (function (){var statearr_16027 = state_15987;
(statearr_16027[(13)] = inst_15852__$1);

(statearr_16027[(14)] = inst_15853__$1);

(statearr_16027[(15)] = inst_15851__$1);

(statearr_16027[(18)] = inst_15870);

(statearr_16027[(17)] = inst_15854__$1);

return statearr_16027;
})();
var statearr_16030_18615 = state_15987__$1;
(statearr_16030_18615[(2)] = null);

(statearr_16030_18615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (21))){
var inst_15898 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_16036_18616 = state_15987__$1;
(statearr_16036_18616[(2)] = inst_15898);

(statearr_16036_18616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (31))){
var inst_15926 = (state_15987[(12)]);
var inst_15930 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15926);
var state_15987__$1 = state_15987;
var statearr_16037_18617 = state_15987__$1;
(statearr_16037_18617[(2)] = inst_15930);

(statearr_16037_18617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (32))){
var inst_15920 = (state_15987[(9)]);
var inst_15919 = (state_15987[(19)]);
var inst_15918 = (state_15987[(10)]);
var inst_15917 = (state_15987[(20)]);
var inst_15932 = (state_15987[(2)]);
var inst_15933 = (inst_15920 + (1));
var tmp16032 = inst_15919;
var tmp16033 = inst_15918;
var tmp16034 = inst_15917;
var inst_15917__$1 = tmp16034;
var inst_15918__$1 = tmp16033;
var inst_15919__$1 = tmp16032;
var inst_15920__$1 = inst_15933;
var state_15987__$1 = (function (){var statearr_16038 = state_15987;
(statearr_16038[(9)] = inst_15920__$1);

(statearr_16038[(19)] = inst_15919__$1);

(statearr_16038[(10)] = inst_15918__$1);

(statearr_16038[(20)] = inst_15917__$1);

(statearr_16038[(21)] = inst_15932);

return statearr_16038;
})();
var statearr_16039_18618 = state_15987__$1;
(statearr_16039_18618[(2)] = null);

(statearr_16039_18618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (40))){
var inst_15949 = (state_15987[(22)]);
var inst_15954 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15949);
var state_15987__$1 = state_15987;
var statearr_16040_18619 = state_15987__$1;
(statearr_16040_18619[(2)] = inst_15954);

(statearr_16040_18619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (33))){
var inst_15936 = (state_15987[(23)]);
var inst_15940 = cljs.core.chunked_seq_QMARK_(inst_15936);
var state_15987__$1 = state_15987;
if(inst_15940){
var statearr_16041_18620 = state_15987__$1;
(statearr_16041_18620[(1)] = (36));

} else {
var statearr_16043_18621 = state_15987__$1;
(statearr_16043_18621[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (13))){
var inst_15864 = (state_15987[(24)]);
var inst_15867 = cljs.core.async.close_BANG_(inst_15864);
var state_15987__$1 = state_15987;
var statearr_16044_18623 = state_15987__$1;
(statearr_16044_18623[(2)] = inst_15867);

(statearr_16044_18623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (22))){
var inst_15888 = (state_15987[(8)]);
var inst_15891 = cljs.core.async.close_BANG_(inst_15888);
var state_15987__$1 = state_15987;
var statearr_16045_18624 = state_15987__$1;
(statearr_16045_18624[(2)] = inst_15891);

(statearr_16045_18624[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (36))){
var inst_15936 = (state_15987[(23)]);
var inst_15942 = cljs.core.chunk_first(inst_15936);
var inst_15943 = cljs.core.chunk_rest(inst_15936);
var inst_15945 = cljs.core.count(inst_15942);
var inst_15917 = inst_15943;
var inst_15918 = inst_15942;
var inst_15919 = inst_15945;
var inst_15920 = (0);
var state_15987__$1 = (function (){var statearr_16046 = state_15987;
(statearr_16046[(9)] = inst_15920);

(statearr_16046[(19)] = inst_15919);

(statearr_16046[(10)] = inst_15918);

(statearr_16046[(20)] = inst_15917);

return statearr_16046;
})();
var statearr_16047_18626 = state_15987__$1;
(statearr_16047_18626[(2)] = null);

(statearr_16047_18626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (41))){
var inst_15936 = (state_15987[(23)]);
var inst_15956 = (state_15987[(2)]);
var inst_15957 = cljs.core.next(inst_15936);
var inst_15917 = inst_15957;
var inst_15918 = null;
var inst_15919 = (0);
var inst_15920 = (0);
var state_15987__$1 = (function (){var statearr_16048 = state_15987;
(statearr_16048[(9)] = inst_15920);

(statearr_16048[(19)] = inst_15919);

(statearr_16048[(10)] = inst_15918);

(statearr_16048[(20)] = inst_15917);

(statearr_16048[(25)] = inst_15956);

return statearr_16048;
})();
var statearr_16050_18627 = state_15987__$1;
(statearr_16050_18627[(2)] = null);

(statearr_16050_18627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (43))){
var state_15987__$1 = state_15987;
var statearr_16051_18628 = state_15987__$1;
(statearr_16051_18628[(2)] = null);

(statearr_16051_18628[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (29))){
var inst_15969 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_16053_18629 = state_15987__$1;
(statearr_16053_18629[(2)] = inst_15969);

(statearr_16053_18629[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (44))){
var inst_15979 = (state_15987[(2)]);
var state_15987__$1 = (function (){var statearr_16054 = state_15987;
(statearr_16054[(26)] = inst_15979);

return statearr_16054;
})();
var statearr_16055_18630 = state_15987__$1;
(statearr_16055_18630[(2)] = null);

(statearr_16055_18630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (6))){
var inst_15909 = (state_15987[(27)]);
var inst_15908 = cljs.core.deref(cs);
var inst_15909__$1 = cljs.core.keys(inst_15908);
var inst_15910 = cljs.core.count(inst_15909__$1);
var inst_15911 = cljs.core.reset_BANG_(dctr,inst_15910);
var inst_15916 = cljs.core.seq(inst_15909__$1);
var inst_15917 = inst_15916;
var inst_15918 = null;
var inst_15919 = (0);
var inst_15920 = (0);
var state_15987__$1 = (function (){var statearr_16058 = state_15987;
(statearr_16058[(9)] = inst_15920);

(statearr_16058[(19)] = inst_15919);

(statearr_16058[(10)] = inst_15918);

(statearr_16058[(27)] = inst_15909__$1);

(statearr_16058[(20)] = inst_15917);

(statearr_16058[(28)] = inst_15911);

return statearr_16058;
})();
var statearr_16060_18632 = state_15987__$1;
(statearr_16060_18632[(2)] = null);

(statearr_16060_18632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (28))){
var inst_15917 = (state_15987[(20)]);
var inst_15936 = (state_15987[(23)]);
var inst_15936__$1 = cljs.core.seq(inst_15917);
var state_15987__$1 = (function (){var statearr_16065 = state_15987;
(statearr_16065[(23)] = inst_15936__$1);

return statearr_16065;
})();
if(inst_15936__$1){
var statearr_16067_18636 = state_15987__$1;
(statearr_16067_18636[(1)] = (33));

} else {
var statearr_16068_18637 = state_15987__$1;
(statearr_16068_18637[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (25))){
var inst_15920 = (state_15987[(9)]);
var inst_15919 = (state_15987[(19)]);
var inst_15923 = (inst_15920 < inst_15919);
var inst_15924 = inst_15923;
var state_15987__$1 = state_15987;
if(cljs.core.truth_(inst_15924)){
var statearr_16069_18638 = state_15987__$1;
(statearr_16069_18638[(1)] = (27));

} else {
var statearr_16070_18640 = state_15987__$1;
(statearr_16070_18640[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (34))){
var state_15987__$1 = state_15987;
var statearr_16071_18641 = state_15987__$1;
(statearr_16071_18641[(2)] = null);

(statearr_16071_18641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (17))){
var state_15987__$1 = state_15987;
var statearr_16072_18642 = state_15987__$1;
(statearr_16072_18642[(2)] = null);

(statearr_16072_18642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (3))){
var inst_15984 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15987__$1,inst_15984);
} else {
if((state_val_15988 === (12))){
var inst_15903 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_16073_18644 = state_15987__$1;
(statearr_16073_18644[(2)] = inst_15903);

(statearr_16073_18644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (2))){
var state_15987__$1 = state_15987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15987__$1,(4),ch);
} else {
if((state_val_15988 === (23))){
var state_15987__$1 = state_15987;
var statearr_16074_18645 = state_15987__$1;
(statearr_16074_18645[(2)] = null);

(statearr_16074_18645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (35))){
var inst_15967 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_16077_18646 = state_15987__$1;
(statearr_16077_18646[(2)] = inst_15967);

(statearr_16077_18646[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (19))){
var inst_15874 = (state_15987[(7)]);
var inst_15879 = cljs.core.chunk_first(inst_15874);
var inst_15880 = cljs.core.chunk_rest(inst_15874);
var inst_15881 = cljs.core.count(inst_15879);
var inst_15851 = inst_15880;
var inst_15852 = inst_15879;
var inst_15853 = inst_15881;
var inst_15854 = (0);
var state_15987__$1 = (function (){var statearr_16078 = state_15987;
(statearr_16078[(13)] = inst_15852);

(statearr_16078[(14)] = inst_15853);

(statearr_16078[(15)] = inst_15851);

(statearr_16078[(17)] = inst_15854);

return statearr_16078;
})();
var statearr_16079_18648 = state_15987__$1;
(statearr_16079_18648[(2)] = null);

(statearr_16079_18648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (11))){
var inst_15851 = (state_15987[(15)]);
var inst_15874 = (state_15987[(7)]);
var inst_15874__$1 = cljs.core.seq(inst_15851);
var state_15987__$1 = (function (){var statearr_16080 = state_15987;
(statearr_16080[(7)] = inst_15874__$1);

return statearr_16080;
})();
if(inst_15874__$1){
var statearr_16081_18651 = state_15987__$1;
(statearr_16081_18651[(1)] = (16));

} else {
var statearr_16082_18653 = state_15987__$1;
(statearr_16082_18653[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (9))){
var inst_15905 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_16083_18654 = state_15987__$1;
(statearr_16083_18654[(2)] = inst_15905);

(statearr_16083_18654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (5))){
var inst_15849 = cljs.core.deref(cs);
var inst_15850 = cljs.core.seq(inst_15849);
var inst_15851 = inst_15850;
var inst_15852 = null;
var inst_15853 = (0);
var inst_15854 = (0);
var state_15987__$1 = (function (){var statearr_16089 = state_15987;
(statearr_16089[(13)] = inst_15852);

(statearr_16089[(14)] = inst_15853);

(statearr_16089[(15)] = inst_15851);

(statearr_16089[(17)] = inst_15854);

return statearr_16089;
})();
var statearr_16090_18655 = state_15987__$1;
(statearr_16090_18655[(2)] = null);

(statearr_16090_18655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (14))){
var state_15987__$1 = state_15987;
var statearr_16093_18656 = state_15987__$1;
(statearr_16093_18656[(2)] = null);

(statearr_16093_18656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (45))){
var inst_15976 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_16094_18657 = state_15987__$1;
(statearr_16094_18657[(2)] = inst_15976);

(statearr_16094_18657[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (26))){
var inst_15909 = (state_15987[(27)]);
var inst_15971 = (state_15987[(2)]);
var inst_15972 = cljs.core.seq(inst_15909);
var state_15987__$1 = (function (){var statearr_16095 = state_15987;
(statearr_16095[(29)] = inst_15971);

return statearr_16095;
})();
if(inst_15972){
var statearr_16096_18659 = state_15987__$1;
(statearr_16096_18659[(1)] = (42));

} else {
var statearr_16097_18660 = state_15987__$1;
(statearr_16097_18660[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (16))){
var inst_15874 = (state_15987[(7)]);
var inst_15876 = cljs.core.chunked_seq_QMARK_(inst_15874);
var state_15987__$1 = state_15987;
if(inst_15876){
var statearr_16102_18663 = state_15987__$1;
(statearr_16102_18663[(1)] = (19));

} else {
var statearr_16108_18666 = state_15987__$1;
(statearr_16108_18666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (38))){
var inst_15962 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_16113_18667 = state_15987__$1;
(statearr_16113_18667[(2)] = inst_15962);

(statearr_16113_18667[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (30))){
var state_15987__$1 = state_15987;
var statearr_16114_18668 = state_15987__$1;
(statearr_16114_18668[(2)] = null);

(statearr_16114_18668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (10))){
var inst_15852 = (state_15987[(13)]);
var inst_15854 = (state_15987[(17)]);
var inst_15863 = cljs.core._nth(inst_15852,inst_15854);
var inst_15864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15863,(0),null);
var inst_15865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15863,(1),null);
var state_15987__$1 = (function (){var statearr_16121 = state_15987;
(statearr_16121[(24)] = inst_15864);

return statearr_16121;
})();
if(cljs.core.truth_(inst_15865)){
var statearr_16122_18669 = state_15987__$1;
(statearr_16122_18669[(1)] = (13));

} else {
var statearr_16123_18670 = state_15987__$1;
(statearr_16123_18670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (18))){
var inst_15901 = (state_15987[(2)]);
var state_15987__$1 = state_15987;
var statearr_16124_18671 = state_15987__$1;
(statearr_16124_18671[(2)] = inst_15901);

(statearr_16124_18671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (42))){
var state_15987__$1 = state_15987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15987__$1,(45),dchan);
} else {
if((state_val_15988 === (37))){
var inst_15842 = (state_15987[(11)]);
var inst_15936 = (state_15987[(23)]);
var inst_15949 = (state_15987[(22)]);
var inst_15949__$1 = cljs.core.first(inst_15936);
var inst_15950 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15949__$1,inst_15842,done);
var state_15987__$1 = (function (){var statearr_16127 = state_15987;
(statearr_16127[(22)] = inst_15949__$1);

return statearr_16127;
})();
if(cljs.core.truth_(inst_15950)){
var statearr_16129_18673 = state_15987__$1;
(statearr_16129_18673[(1)] = (39));

} else {
var statearr_16130_18674 = state_15987__$1;
(statearr_16130_18674[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15988 === (8))){
var inst_15853 = (state_15987[(14)]);
var inst_15854 = (state_15987[(17)]);
var inst_15857 = (inst_15854 < inst_15853);
var inst_15858 = inst_15857;
var state_15987__$1 = state_15987;
if(cljs.core.truth_(inst_15858)){
var statearr_16131_18675 = state_15987__$1;
(statearr_16131_18675[(1)] = (10));

} else {
var statearr_16132_18676 = state_15987__$1;
(statearr_16132_18676[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14299__auto__ = null;
var cljs$core$async$mult_$_state_machine__14299__auto____0 = (function (){
var statearr_16137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16137[(0)] = cljs$core$async$mult_$_state_machine__14299__auto__);

(statearr_16137[(1)] = (1));

return statearr_16137;
});
var cljs$core$async$mult_$_state_machine__14299__auto____1 = (function (state_15987){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_15987);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e16138){var ex__14302__auto__ = e16138;
var statearr_16139_18682 = state_15987;
(statearr_16139_18682[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_15987[(4)]))){
var statearr_16140_18689 = state_15987;
(statearr_16140_18689[(1)] = cljs.core.first((state_15987[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18690 = state_15987;
state_15987 = G__18690;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14299__auto__ = function(state_15987){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14299__auto____1.call(this,state_15987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14299__auto____0;
cljs$core$async$mult_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14299__auto____1;
return cljs$core$async$mult_$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_16141 = f__14563__auto__();
(statearr_16141[(6)] = c__14562__auto___18601);

return statearr_16141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
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
var G__16169 = arguments.length;
switch (G__16169) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18698 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18698(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18721 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18721(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18727 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18727(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18738 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18738(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18791 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18791(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18804 = arguments.length;
var i__5727__auto___18805 = (0);
while(true){
if((i__5727__auto___18805 < len__5726__auto___18804)){
args__5732__auto__.push((arguments[i__5727__auto___18805]));

var G__18817 = (i__5727__auto___18805 + (1));
i__5727__auto___18805 = G__18817;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16302){
var map__16303 = p__16302;
var map__16303__$1 = cljs.core.__destructure_map(map__16303);
var opts = map__16303__$1;
var statearr_16304_18829 = state;
(statearr_16304_18829[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16307_18831 = state;
(statearr_16307_18831[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16310_18836 = state;
(statearr_16310_18836[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16270){
var G__16271 = cljs.core.first(seq16270);
var seq16270__$1 = cljs.core.next(seq16270);
var G__16272 = cljs.core.first(seq16270__$1);
var seq16270__$2 = cljs.core.next(seq16270__$1);
var G__16274 = cljs.core.first(seq16270__$2);
var seq16270__$3 = cljs.core.next(seq16270__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16271,G__16272,G__16274,seq16270__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16339 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16340){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16340 = meta16340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16341,meta16340__$1){
var self__ = this;
var _16341__$1 = this;
return (new cljs.core.async.t_cljs$core$async16339(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16340__$1));
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16341){
var self__ = this;
var _16341__$1 = this;
return self__.meta16340;
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16339.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16340","meta16340",910856888,null)], null);
}));

(cljs.core.async.t_cljs$core$async16339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16339");

(cljs.core.async.t_cljs$core$async16339.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16339.
 */
cljs.core.async.__GT_t_cljs$core$async16339 = (function cljs$core$async$__GT_t_cljs$core$async16339(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16340){
return (new cljs.core.async.t_cljs$core$async16339(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16340));
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
var m = (new cljs.core.async.t_cljs$core$async16339(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14562__auto___18889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_16447){
var state_val_16448 = (state_16447[(1)]);
if((state_val_16448 === (7))){
var inst_16402 = (state_16447[(2)]);
var state_16447__$1 = state_16447;
if(cljs.core.truth_(inst_16402)){
var statearr_16449_18891 = state_16447__$1;
(statearr_16449_18891[(1)] = (8));

} else {
var statearr_16450_18895 = state_16447__$1;
(statearr_16450_18895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (20))){
var inst_16395 = (state_16447[(7)]);
var state_16447__$1 = state_16447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16447__$1,(23),out,inst_16395);
} else {
if((state_val_16448 === (1))){
var inst_16377 = calc_state();
var inst_16378 = cljs.core.__destructure_map(inst_16377);
var inst_16379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16378,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16378,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16378,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16382 = inst_16377;
var state_16447__$1 = (function (){var statearr_16455 = state_16447;
(statearr_16455[(8)] = inst_16382);

(statearr_16455[(9)] = inst_16380);

(statearr_16455[(10)] = inst_16381);

(statearr_16455[(11)] = inst_16379);

return statearr_16455;
})();
var statearr_16456_18903 = state_16447__$1;
(statearr_16456_18903[(2)] = null);

(statearr_16456_18903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (24))){
var inst_16385 = (state_16447[(12)]);
var inst_16382 = inst_16385;
var state_16447__$1 = (function (){var statearr_16457 = state_16447;
(statearr_16457[(8)] = inst_16382);

return statearr_16457;
})();
var statearr_16458_18905 = state_16447__$1;
(statearr_16458_18905[(2)] = null);

(statearr_16458_18905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (4))){
var inst_16395 = (state_16447[(7)]);
var inst_16397 = (state_16447[(13)]);
var inst_16394 = (state_16447[(2)]);
var inst_16395__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16394,(0),null);
var inst_16396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16394,(1),null);
var inst_16397__$1 = (inst_16395__$1 == null);
var state_16447__$1 = (function (){var statearr_16465 = state_16447;
(statearr_16465[(14)] = inst_16396);

(statearr_16465[(7)] = inst_16395__$1);

(statearr_16465[(13)] = inst_16397__$1);

return statearr_16465;
})();
if(cljs.core.truth_(inst_16397__$1)){
var statearr_16473_18908 = state_16447__$1;
(statearr_16473_18908[(1)] = (5));

} else {
var statearr_16478_18909 = state_16447__$1;
(statearr_16478_18909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (15))){
var inst_16419 = (state_16447[(15)]);
var inst_16386 = (state_16447[(16)]);
var inst_16419__$1 = cljs.core.empty_QMARK_(inst_16386);
var state_16447__$1 = (function (){var statearr_16482 = state_16447;
(statearr_16482[(15)] = inst_16419__$1);

return statearr_16482;
})();
if(inst_16419__$1){
var statearr_16483_18912 = state_16447__$1;
(statearr_16483_18912[(1)] = (17));

} else {
var statearr_16484_18913 = state_16447__$1;
(statearr_16484_18913[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (21))){
var inst_16385 = (state_16447[(12)]);
var inst_16382 = inst_16385;
var state_16447__$1 = (function (){var statearr_16485 = state_16447;
(statearr_16485[(8)] = inst_16382);

return statearr_16485;
})();
var statearr_16486_18918 = state_16447__$1;
(statearr_16486_18918[(2)] = null);

(statearr_16486_18918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (13))){
var inst_16410 = (state_16447[(2)]);
var inst_16411 = calc_state();
var inst_16382 = inst_16411;
var state_16447__$1 = (function (){var statearr_16489 = state_16447;
(statearr_16489[(8)] = inst_16382);

(statearr_16489[(17)] = inst_16410);

return statearr_16489;
})();
var statearr_16490_18920 = state_16447__$1;
(statearr_16490_18920[(2)] = null);

(statearr_16490_18920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (22))){
var inst_16440 = (state_16447[(2)]);
var state_16447__$1 = state_16447;
var statearr_16491_18921 = state_16447__$1;
(statearr_16491_18921[(2)] = inst_16440);

(statearr_16491_18921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (6))){
var inst_16396 = (state_16447[(14)]);
var inst_16400 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16396,change);
var state_16447__$1 = state_16447;
var statearr_16493_18922 = state_16447__$1;
(statearr_16493_18922[(2)] = inst_16400);

(statearr_16493_18922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (25))){
var state_16447__$1 = state_16447;
var statearr_16494_18924 = state_16447__$1;
(statearr_16494_18924[(2)] = null);

(statearr_16494_18924[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (17))){
var inst_16396 = (state_16447[(14)]);
var inst_16387 = (state_16447[(18)]);
var inst_16421 = (inst_16387.cljs$core$IFn$_invoke$arity$1 ? inst_16387.cljs$core$IFn$_invoke$arity$1(inst_16396) : inst_16387.call(null, inst_16396));
var inst_16422 = cljs.core.not(inst_16421);
var state_16447__$1 = state_16447;
var statearr_16495_18928 = state_16447__$1;
(statearr_16495_18928[(2)] = inst_16422);

(statearr_16495_18928[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (3))){
var inst_16444 = (state_16447[(2)]);
var state_16447__$1 = state_16447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16447__$1,inst_16444);
} else {
if((state_val_16448 === (12))){
var state_16447__$1 = state_16447;
var statearr_16496_18930 = state_16447__$1;
(statearr_16496_18930[(2)] = null);

(statearr_16496_18930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (2))){
var inst_16382 = (state_16447[(8)]);
var inst_16385 = (state_16447[(12)]);
var inst_16385__$1 = cljs.core.__destructure_map(inst_16382);
var inst_16386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16385__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16385__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16385__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16447__$1 = (function (){var statearr_16497 = state_16447;
(statearr_16497[(18)] = inst_16387);

(statearr_16497[(16)] = inst_16386);

(statearr_16497[(12)] = inst_16385__$1);

return statearr_16497;
})();
return cljs.core.async.ioc_alts_BANG_(state_16447__$1,(4),inst_16389);
} else {
if((state_val_16448 === (23))){
var inst_16431 = (state_16447[(2)]);
var state_16447__$1 = state_16447;
if(cljs.core.truth_(inst_16431)){
var statearr_16498_18943 = state_16447__$1;
(statearr_16498_18943[(1)] = (24));

} else {
var statearr_16499_18944 = state_16447__$1;
(statearr_16499_18944[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (19))){
var inst_16425 = (state_16447[(2)]);
var state_16447__$1 = state_16447;
var statearr_16501_18949 = state_16447__$1;
(statearr_16501_18949[(2)] = inst_16425);

(statearr_16501_18949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (11))){
var inst_16396 = (state_16447[(14)]);
var inst_16407 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16396);
var state_16447__$1 = state_16447;
var statearr_16502_18952 = state_16447__$1;
(statearr_16502_18952[(2)] = inst_16407);

(statearr_16502_18952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (9))){
var inst_16396 = (state_16447[(14)]);
var inst_16414 = (state_16447[(19)]);
var inst_16386 = (state_16447[(16)]);
var inst_16414__$1 = (inst_16386.cljs$core$IFn$_invoke$arity$1 ? inst_16386.cljs$core$IFn$_invoke$arity$1(inst_16396) : inst_16386.call(null, inst_16396));
var state_16447__$1 = (function (){var statearr_16506 = state_16447;
(statearr_16506[(19)] = inst_16414__$1);

return statearr_16506;
})();
if(cljs.core.truth_(inst_16414__$1)){
var statearr_16507_18958 = state_16447__$1;
(statearr_16507_18958[(1)] = (14));

} else {
var statearr_16508_18959 = state_16447__$1;
(statearr_16508_18959[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (5))){
var inst_16397 = (state_16447[(13)]);
var state_16447__$1 = state_16447;
var statearr_16509_18960 = state_16447__$1;
(statearr_16509_18960[(2)] = inst_16397);

(statearr_16509_18960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (14))){
var inst_16414 = (state_16447[(19)]);
var state_16447__$1 = state_16447;
var statearr_16511_18967 = state_16447__$1;
(statearr_16511_18967[(2)] = inst_16414);

(statearr_16511_18967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (26))){
var inst_16436 = (state_16447[(2)]);
var state_16447__$1 = state_16447;
var statearr_16512_18968 = state_16447__$1;
(statearr_16512_18968[(2)] = inst_16436);

(statearr_16512_18968[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (16))){
var inst_16427 = (state_16447[(2)]);
var state_16447__$1 = state_16447;
if(cljs.core.truth_(inst_16427)){
var statearr_16514_18970 = state_16447__$1;
(statearr_16514_18970[(1)] = (20));

} else {
var statearr_16516_18971 = state_16447__$1;
(statearr_16516_18971[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (10))){
var inst_16442 = (state_16447[(2)]);
var state_16447__$1 = state_16447;
var statearr_16517_18974 = state_16447__$1;
(statearr_16517_18974[(2)] = inst_16442);

(statearr_16517_18974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (18))){
var inst_16419 = (state_16447[(15)]);
var state_16447__$1 = state_16447;
var statearr_16518_18975 = state_16447__$1;
(statearr_16518_18975[(2)] = inst_16419);

(statearr_16518_18975[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16448 === (8))){
var inst_16395 = (state_16447[(7)]);
var inst_16405 = (inst_16395 == null);
var state_16447__$1 = state_16447;
if(cljs.core.truth_(inst_16405)){
var statearr_16520_18977 = state_16447__$1;
(statearr_16520_18977[(1)] = (11));

} else {
var statearr_16521_18978 = state_16447__$1;
(statearr_16521_18978[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14299__auto__ = null;
var cljs$core$async$mix_$_state_machine__14299__auto____0 = (function (){
var statearr_16523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16523[(0)] = cljs$core$async$mix_$_state_machine__14299__auto__);

(statearr_16523[(1)] = (1));

return statearr_16523;
});
var cljs$core$async$mix_$_state_machine__14299__auto____1 = (function (state_16447){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_16447);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e16524){var ex__14302__auto__ = e16524;
var statearr_16525_18981 = state_16447;
(statearr_16525_18981[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_16447[(4)]))){
var statearr_16526_18983 = state_16447;
(statearr_16526_18983[(1)] = cljs.core.first((state_16447[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18986 = state_16447;
state_16447 = G__18986;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14299__auto__ = function(state_16447){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14299__auto____1.call(this,state_16447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14299__auto____0;
cljs$core$async$mix_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14299__auto____1;
return cljs$core$async$mix_$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_16530 = f__14563__auto__();
(statearr_16530[(6)] = c__14562__auto___18889);

return statearr_16530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18990 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18990(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18996 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18996(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18999 = (function() {
var G__19000 = null;
var G__19000__1 = (function (p){
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
var G__19000__2 = (function (p,v){
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
G__19000 = function(p,v){
switch(arguments.length){
case 1:
return G__19000__1.call(this,p);
case 2:
return G__19000__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19000.cljs$core$IFn$_invoke$arity$1 = G__19000__1;
G__19000.cljs$core$IFn$_invoke$arity$2 = G__19000__2;
return G__19000;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16577 = arguments.length;
switch (G__16577) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18999(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18999(p,v);
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
cljs.core.async.t_cljs$core$async16612 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16613){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16613 = meta16613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16614,meta16613__$1){
var self__ = this;
var _16614__$1 = this;
return (new cljs.core.async.t_cljs$core$async16612(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16613__$1));
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16614){
var self__ = this;
var _16614__$1 = this;
return self__.meta16613;
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16613","meta16613",2088509858,null)], null);
}));

(cljs.core.async.t_cljs$core$async16612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16612");

(cljs.core.async.t_cljs$core$async16612.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16612.
 */
cljs.core.async.__GT_t_cljs$core$async16612 = (function cljs$core$async$__GT_t_cljs$core$async16612(ch,topic_fn,buf_fn,mults,ensure_mult,meta16613){
return (new cljs.core.async.t_cljs$core$async16612(ch,topic_fn,buf_fn,mults,ensure_mult,meta16613));
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
var G__16598 = arguments.length;
switch (G__16598) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16584_SHARP_){
if(cljs.core.truth_((p1__16584_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16584_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16584_SHARP_.call(null, topic)))){
return p1__16584_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16584_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16612(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14562__auto___19039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_16730){
var state_val_16732 = (state_16730[(1)]);
if((state_val_16732 === (7))){
var inst_16726 = (state_16730[(2)]);
var state_16730__$1 = state_16730;
var statearr_16734_19040 = state_16730__$1;
(statearr_16734_19040[(2)] = inst_16726);

(statearr_16734_19040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (20))){
var state_16730__$1 = state_16730;
var statearr_16735_19041 = state_16730__$1;
(statearr_16735_19041[(2)] = null);

(statearr_16735_19041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (1))){
var state_16730__$1 = state_16730;
var statearr_16736_19042 = state_16730__$1;
(statearr_16736_19042[(2)] = null);

(statearr_16736_19042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (24))){
var inst_16709 = (state_16730[(7)]);
var inst_16718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16709);
var state_16730__$1 = state_16730;
var statearr_16742_19043 = state_16730__$1;
(statearr_16742_19043[(2)] = inst_16718);

(statearr_16742_19043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (4))){
var inst_16648 = (state_16730[(8)]);
var inst_16648__$1 = (state_16730[(2)]);
var inst_16650 = (inst_16648__$1 == null);
var state_16730__$1 = (function (){var statearr_16747 = state_16730;
(statearr_16747[(8)] = inst_16648__$1);

return statearr_16747;
})();
if(cljs.core.truth_(inst_16650)){
var statearr_16748_19045 = state_16730__$1;
(statearr_16748_19045[(1)] = (5));

} else {
var statearr_16750_19046 = state_16730__$1;
(statearr_16750_19046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (15))){
var inst_16702 = (state_16730[(2)]);
var state_16730__$1 = state_16730;
var statearr_16753_19047 = state_16730__$1;
(statearr_16753_19047[(2)] = inst_16702);

(statearr_16753_19047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (21))){
var inst_16723 = (state_16730[(2)]);
var state_16730__$1 = (function (){var statearr_16757 = state_16730;
(statearr_16757[(9)] = inst_16723);

return statearr_16757;
})();
var statearr_16760_19049 = state_16730__$1;
(statearr_16760_19049[(2)] = null);

(statearr_16760_19049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (13))){
var inst_16678 = (state_16730[(10)]);
var inst_16680 = cljs.core.chunked_seq_QMARK_(inst_16678);
var state_16730__$1 = state_16730;
if(inst_16680){
var statearr_16762_19050 = state_16730__$1;
(statearr_16762_19050[(1)] = (16));

} else {
var statearr_16764_19051 = state_16730__$1;
(statearr_16764_19051[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (22))){
var inst_16715 = (state_16730[(2)]);
var state_16730__$1 = state_16730;
if(cljs.core.truth_(inst_16715)){
var statearr_16770_19056 = state_16730__$1;
(statearr_16770_19056[(1)] = (23));

} else {
var statearr_16771_19057 = state_16730__$1;
(statearr_16771_19057[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (6))){
var inst_16709 = (state_16730[(7)]);
var inst_16648 = (state_16730[(8)]);
var inst_16711 = (state_16730[(11)]);
var inst_16709__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16648) : topic_fn.call(null, inst_16648));
var inst_16710 = cljs.core.deref(mults);
var inst_16711__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16710,inst_16709__$1);
var state_16730__$1 = (function (){var statearr_16776 = state_16730;
(statearr_16776[(7)] = inst_16709__$1);

(statearr_16776[(11)] = inst_16711__$1);

return statearr_16776;
})();
if(cljs.core.truth_(inst_16711__$1)){
var statearr_16780_19061 = state_16730__$1;
(statearr_16780_19061[(1)] = (19));

} else {
var statearr_16782_19062 = state_16730__$1;
(statearr_16782_19062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (25))){
var inst_16720 = (state_16730[(2)]);
var state_16730__$1 = state_16730;
var statearr_16783_19063 = state_16730__$1;
(statearr_16783_19063[(2)] = inst_16720);

(statearr_16783_19063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (17))){
var inst_16678 = (state_16730[(10)]);
var inst_16690 = cljs.core.first(inst_16678);
var inst_16694 = cljs.core.async.muxch_STAR_(inst_16690);
var inst_16695 = cljs.core.async.close_BANG_(inst_16694);
var inst_16696 = cljs.core.next(inst_16678);
var inst_16659 = inst_16696;
var inst_16660 = null;
var inst_16661 = (0);
var inst_16662 = (0);
var state_16730__$1 = (function (){var statearr_16785 = state_16730;
(statearr_16785[(12)] = inst_16660);

(statearr_16785[(13)] = inst_16659);

(statearr_16785[(14)] = inst_16661);

(statearr_16785[(15)] = inst_16662);

(statearr_16785[(16)] = inst_16695);

return statearr_16785;
})();
var statearr_16786_19067 = state_16730__$1;
(statearr_16786_19067[(2)] = null);

(statearr_16786_19067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (3))){
var inst_16728 = (state_16730[(2)]);
var state_16730__$1 = state_16730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16730__$1,inst_16728);
} else {
if((state_val_16732 === (12))){
var inst_16704 = (state_16730[(2)]);
var state_16730__$1 = state_16730;
var statearr_16787_19071 = state_16730__$1;
(statearr_16787_19071[(2)] = inst_16704);

(statearr_16787_19071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (2))){
var state_16730__$1 = state_16730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16730__$1,(4),ch);
} else {
if((state_val_16732 === (23))){
var state_16730__$1 = state_16730;
var statearr_16789_19072 = state_16730__$1;
(statearr_16789_19072[(2)] = null);

(statearr_16789_19072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (19))){
var inst_16648 = (state_16730[(8)]);
var inst_16711 = (state_16730[(11)]);
var inst_16713 = cljs.core.async.muxch_STAR_(inst_16711);
var state_16730__$1 = state_16730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16730__$1,(22),inst_16713,inst_16648);
} else {
if((state_val_16732 === (11))){
var inst_16659 = (state_16730[(13)]);
var inst_16678 = (state_16730[(10)]);
var inst_16678__$1 = cljs.core.seq(inst_16659);
var state_16730__$1 = (function (){var statearr_16794 = state_16730;
(statearr_16794[(10)] = inst_16678__$1);

return statearr_16794;
})();
if(inst_16678__$1){
var statearr_16796_19079 = state_16730__$1;
(statearr_16796_19079[(1)] = (13));

} else {
var statearr_16797_19080 = state_16730__$1;
(statearr_16797_19080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (9))){
var inst_16707 = (state_16730[(2)]);
var state_16730__$1 = state_16730;
var statearr_16798_19081 = state_16730__$1;
(statearr_16798_19081[(2)] = inst_16707);

(statearr_16798_19081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (5))){
var inst_16656 = cljs.core.deref(mults);
var inst_16657 = cljs.core.vals(inst_16656);
var inst_16658 = cljs.core.seq(inst_16657);
var inst_16659 = inst_16658;
var inst_16660 = null;
var inst_16661 = (0);
var inst_16662 = (0);
var state_16730__$1 = (function (){var statearr_16802 = state_16730;
(statearr_16802[(12)] = inst_16660);

(statearr_16802[(13)] = inst_16659);

(statearr_16802[(14)] = inst_16661);

(statearr_16802[(15)] = inst_16662);

return statearr_16802;
})();
var statearr_16808_19082 = state_16730__$1;
(statearr_16808_19082[(2)] = null);

(statearr_16808_19082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (14))){
var state_16730__$1 = state_16730;
var statearr_16827_19083 = state_16730__$1;
(statearr_16827_19083[(2)] = null);

(statearr_16827_19083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (16))){
var inst_16678 = (state_16730[(10)]);
var inst_16684 = cljs.core.chunk_first(inst_16678);
var inst_16685 = cljs.core.chunk_rest(inst_16678);
var inst_16686 = cljs.core.count(inst_16684);
var inst_16659 = inst_16685;
var inst_16660 = inst_16684;
var inst_16661 = inst_16686;
var inst_16662 = (0);
var state_16730__$1 = (function (){var statearr_16828 = state_16730;
(statearr_16828[(12)] = inst_16660);

(statearr_16828[(13)] = inst_16659);

(statearr_16828[(14)] = inst_16661);

(statearr_16828[(15)] = inst_16662);

return statearr_16828;
})();
var statearr_16829_19192 = state_16730__$1;
(statearr_16829_19192[(2)] = null);

(statearr_16829_19192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (10))){
var inst_16660 = (state_16730[(12)]);
var inst_16659 = (state_16730[(13)]);
var inst_16661 = (state_16730[(14)]);
var inst_16662 = (state_16730[(15)]);
var inst_16672 = cljs.core._nth(inst_16660,inst_16662);
var inst_16673 = cljs.core.async.muxch_STAR_(inst_16672);
var inst_16674 = cljs.core.async.close_BANG_(inst_16673);
var inst_16675 = (inst_16662 + (1));
var tmp16824 = inst_16660;
var tmp16825 = inst_16659;
var tmp16826 = inst_16661;
var inst_16659__$1 = tmp16825;
var inst_16660__$1 = tmp16824;
var inst_16661__$1 = tmp16826;
var inst_16662__$1 = inst_16675;
var state_16730__$1 = (function (){var statearr_16830 = state_16730;
(statearr_16830[(12)] = inst_16660__$1);

(statearr_16830[(13)] = inst_16659__$1);

(statearr_16830[(14)] = inst_16661__$1);

(statearr_16830[(15)] = inst_16662__$1);

(statearr_16830[(17)] = inst_16674);

return statearr_16830;
})();
var statearr_16831_19227 = state_16730__$1;
(statearr_16831_19227[(2)] = null);

(statearr_16831_19227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (18))){
var inst_16699 = (state_16730[(2)]);
var state_16730__$1 = state_16730;
var statearr_16834_19244 = state_16730__$1;
(statearr_16834_19244[(2)] = inst_16699);

(statearr_16834_19244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (8))){
var inst_16661 = (state_16730[(14)]);
var inst_16662 = (state_16730[(15)]);
var inst_16667 = (inst_16662 < inst_16661);
var inst_16668 = inst_16667;
var state_16730__$1 = state_16730;
if(cljs.core.truth_(inst_16668)){
var statearr_16836_19266 = state_16730__$1;
(statearr_16836_19266[(1)] = (10));

} else {
var statearr_16837_19272 = state_16730__$1;
(statearr_16837_19272[(1)] = (11));

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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_16838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16838[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_16838[(1)] = (1));

return statearr_16838;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_16730){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_16730);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e16839){var ex__14302__auto__ = e16839;
var statearr_16840_19284 = state_16730;
(statearr_16840_19284[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_16730[(4)]))){
var statearr_16841_19288 = state_16730;
(statearr_16841_19288[(1)] = cljs.core.first((state_16730[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19291 = state_16730;
state_16730 = G__19291;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_16730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_16730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_16846 = f__14563__auto__();
(statearr_16846[(6)] = c__14562__auto___19039);

return statearr_16846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
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
var G__16855 = arguments.length;
switch (G__16855) {
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
var G__16862 = arguments.length;
switch (G__16862) {
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
var G__16884 = arguments.length;
switch (G__16884) {
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
var c__14562__auto___19305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_16936){
var state_val_16937 = (state_16936[(1)]);
if((state_val_16937 === (7))){
var state_16936__$1 = state_16936;
var statearr_16941_19306 = state_16936__$1;
(statearr_16941_19306[(2)] = null);

(statearr_16941_19306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (1))){
var state_16936__$1 = state_16936;
var statearr_16942_19307 = state_16936__$1;
(statearr_16942_19307[(2)] = null);

(statearr_16942_19307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (4))){
var inst_16894 = (state_16936[(7)]);
var inst_16895 = (state_16936[(8)]);
var inst_16897 = (inst_16895 < inst_16894);
var state_16936__$1 = state_16936;
if(cljs.core.truth_(inst_16897)){
var statearr_16944_19308 = state_16936__$1;
(statearr_16944_19308[(1)] = (6));

} else {
var statearr_16945_19309 = state_16936__$1;
(statearr_16945_19309[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (15))){
var inst_16921 = (state_16936[(9)]);
var inst_16927 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16921);
var state_16936__$1 = state_16936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16936__$1,(17),out,inst_16927);
} else {
if((state_val_16937 === (13))){
var inst_16921 = (state_16936[(9)]);
var inst_16921__$1 = (state_16936[(2)]);
var inst_16922 = cljs.core.some(cljs.core.nil_QMARK_,inst_16921__$1);
var state_16936__$1 = (function (){var statearr_16950 = state_16936;
(statearr_16950[(9)] = inst_16921__$1);

return statearr_16950;
})();
if(cljs.core.truth_(inst_16922)){
var statearr_16951_19310 = state_16936__$1;
(statearr_16951_19310[(1)] = (14));

} else {
var statearr_16952_19311 = state_16936__$1;
(statearr_16952_19311[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (6))){
var state_16936__$1 = state_16936;
var statearr_16953_19312 = state_16936__$1;
(statearr_16953_19312[(2)] = null);

(statearr_16953_19312[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (17))){
var inst_16929 = (state_16936[(2)]);
var state_16936__$1 = (function (){var statearr_16970 = state_16936;
(statearr_16970[(10)] = inst_16929);

return statearr_16970;
})();
var statearr_16977_19313 = state_16936__$1;
(statearr_16977_19313[(2)] = null);

(statearr_16977_19313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (3))){
var inst_16934 = (state_16936[(2)]);
var state_16936__$1 = state_16936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16936__$1,inst_16934);
} else {
if((state_val_16937 === (12))){
var _ = (function (){var statearr_16978 = state_16936;
(statearr_16978[(4)] = cljs.core.rest((state_16936[(4)])));

return statearr_16978;
})();
var state_16936__$1 = state_16936;
var ex16969 = (state_16936__$1[(2)]);
var statearr_16981_19314 = state_16936__$1;
(statearr_16981_19314[(5)] = ex16969);


if((ex16969 instanceof Object)){
var statearr_16982_19315 = state_16936__$1;
(statearr_16982_19315[(1)] = (11));

(statearr_16982_19315[(5)] = null);

} else {
throw ex16969;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (2))){
var inst_16893 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16894 = cnt;
var inst_16895 = (0);
var state_16936__$1 = (function (){var statearr_17017 = state_16936;
(statearr_17017[(7)] = inst_16894);

(statearr_17017[(11)] = inst_16893);

(statearr_17017[(8)] = inst_16895);

return statearr_17017;
})();
var statearr_17018_19316 = state_16936__$1;
(statearr_17018_19316[(2)] = null);

(statearr_17018_19316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (11))){
var inst_16900 = (state_16936[(2)]);
var inst_16901 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16936__$1 = (function (){var statearr_17022 = state_16936;
(statearr_17022[(12)] = inst_16900);

return statearr_17022;
})();
var statearr_17023_19317 = state_16936__$1;
(statearr_17023_19317[(2)] = inst_16901);

(statearr_17023_19317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (9))){
var inst_16895 = (state_16936[(8)]);
var _ = (function (){var statearr_17024 = state_16936;
(statearr_17024[(4)] = cljs.core.cons((12),(state_16936[(4)])));

return statearr_17024;
})();
var inst_16907 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16895) : chs__$1.call(null, inst_16895));
var inst_16908 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16895) : done.call(null, inst_16895));
var inst_16909 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16907,inst_16908);
var ___$1 = (function (){var statearr_17025 = state_16936;
(statearr_17025[(4)] = cljs.core.rest((state_16936[(4)])));

return statearr_17025;
})();
var state_16936__$1 = state_16936;
var statearr_17026_19320 = state_16936__$1;
(statearr_17026_19320[(2)] = inst_16909);

(statearr_17026_19320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (5))){
var inst_16919 = (state_16936[(2)]);
var state_16936__$1 = (function (){var statearr_17027 = state_16936;
(statearr_17027[(13)] = inst_16919);

return statearr_17027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16936__$1,(13),dchan);
} else {
if((state_val_16937 === (14))){
var inst_16924 = cljs.core.async.close_BANG_(out);
var state_16936__$1 = state_16936;
var statearr_17030_19325 = state_16936__$1;
(statearr_17030_19325[(2)] = inst_16924);

(statearr_17030_19325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (16))){
var inst_16932 = (state_16936[(2)]);
var state_16936__$1 = state_16936;
var statearr_17037_19326 = state_16936__$1;
(statearr_17037_19326[(2)] = inst_16932);

(statearr_17037_19326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (10))){
var inst_16895 = (state_16936[(8)]);
var inst_16912 = (state_16936[(2)]);
var inst_16913 = (inst_16895 + (1));
var inst_16895__$1 = inst_16913;
var state_16936__$1 = (function (){var statearr_17038 = state_16936;
(statearr_17038[(14)] = inst_16912);

(statearr_17038[(8)] = inst_16895__$1);

return statearr_17038;
})();
var statearr_17039_19331 = state_16936__$1;
(statearr_17039_19331[(2)] = null);

(statearr_17039_19331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (8))){
var inst_16917 = (state_16936[(2)]);
var state_16936__$1 = state_16936;
var statearr_17040_19332 = state_16936__$1;
(statearr_17040_19332[(2)] = inst_16917);

(statearr_17040_19332[(1)] = (5));


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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_17042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17042[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_17042[(1)] = (1));

return statearr_17042;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_16936){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_16936);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e17044){var ex__14302__auto__ = e17044;
var statearr_17045_19333 = state_16936;
(statearr_17045_19333[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_16936[(4)]))){
var statearr_17046_19334 = state_16936;
(statearr_17046_19334[(1)] = cljs.core.first((state_16936[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19339 = state_16936;
state_16936 = G__19339;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_16936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_16936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_17049 = f__14563__auto__();
(statearr_17049[(6)] = c__14562__auto___19305);

return statearr_17049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
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
var G__17060 = arguments.length;
switch (G__17060) {
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
var c__14562__auto___19363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_17096){
var state_val_17097 = (state_17096[(1)]);
if((state_val_17097 === (7))){
var inst_17075 = (state_17096[(7)]);
var inst_17076 = (state_17096[(8)]);
var inst_17075__$1 = (state_17096[(2)]);
var inst_17076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17075__$1,(0),null);
var inst_17077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17075__$1,(1),null);
var inst_17078 = (inst_17076__$1 == null);
var state_17096__$1 = (function (){var statearr_17101 = state_17096;
(statearr_17101[(7)] = inst_17075__$1);

(statearr_17101[(9)] = inst_17077);

(statearr_17101[(8)] = inst_17076__$1);

return statearr_17101;
})();
if(cljs.core.truth_(inst_17078)){
var statearr_17102_19364 = state_17096__$1;
(statearr_17102_19364[(1)] = (8));

} else {
var statearr_17103_19365 = state_17096__$1;
(statearr_17103_19365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17097 === (1))){
var inst_17065 = cljs.core.vec(chs);
var inst_17066 = inst_17065;
var state_17096__$1 = (function (){var statearr_17105 = state_17096;
(statearr_17105[(10)] = inst_17066);

return statearr_17105;
})();
var statearr_17106_19367 = state_17096__$1;
(statearr_17106_19367[(2)] = null);

(statearr_17106_19367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17097 === (4))){
var inst_17066 = (state_17096[(10)]);
var state_17096__$1 = state_17096;
return cljs.core.async.ioc_alts_BANG_(state_17096__$1,(7),inst_17066);
} else {
if((state_val_17097 === (6))){
var inst_17092 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17114_19369 = state_17096__$1;
(statearr_17114_19369[(2)] = inst_17092);

(statearr_17114_19369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17097 === (3))){
var inst_17094 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17096__$1,inst_17094);
} else {
if((state_val_17097 === (2))){
var inst_17066 = (state_17096[(10)]);
var inst_17068 = cljs.core.count(inst_17066);
var inst_17069 = (inst_17068 > (0));
var state_17096__$1 = state_17096;
if(cljs.core.truth_(inst_17069)){
var statearr_17116_19370 = state_17096__$1;
(statearr_17116_19370[(1)] = (4));

} else {
var statearr_17117_19371 = state_17096__$1;
(statearr_17117_19371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17097 === (11))){
var inst_17066 = (state_17096[(10)]);
var inst_17085 = (state_17096[(2)]);
var tmp17115 = inst_17066;
var inst_17066__$1 = tmp17115;
var state_17096__$1 = (function (){var statearr_17118 = state_17096;
(statearr_17118[(10)] = inst_17066__$1);

(statearr_17118[(11)] = inst_17085);

return statearr_17118;
})();
var statearr_17119_19372 = state_17096__$1;
(statearr_17119_19372[(2)] = null);

(statearr_17119_19372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17097 === (9))){
var inst_17076 = (state_17096[(8)]);
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17096__$1,(11),out,inst_17076);
} else {
if((state_val_17097 === (5))){
var inst_17090 = cljs.core.async.close_BANG_(out);
var state_17096__$1 = state_17096;
var statearr_17120_19373 = state_17096__$1;
(statearr_17120_19373[(2)] = inst_17090);

(statearr_17120_19373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17097 === (10))){
var inst_17088 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17121_19377 = state_17096__$1;
(statearr_17121_19377[(2)] = inst_17088);

(statearr_17121_19377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17097 === (8))){
var inst_17075 = (state_17096[(7)]);
var inst_17066 = (state_17096[(10)]);
var inst_17077 = (state_17096[(9)]);
var inst_17076 = (state_17096[(8)]);
var inst_17080 = (function (){var cs = inst_17066;
var vec__17071 = inst_17075;
var v = inst_17076;
var c = inst_17077;
return (function (p1__17055_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17055_SHARP_);
});
})();
var inst_17081 = cljs.core.filterv(inst_17080,inst_17066);
var inst_17066__$1 = inst_17081;
var state_17096__$1 = (function (){var statearr_17122 = state_17096;
(statearr_17122[(10)] = inst_17066__$1);

return statearr_17122;
})();
var statearr_17123_19378 = state_17096__$1;
(statearr_17123_19378[(2)] = null);

(statearr_17123_19378[(1)] = (2));


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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_17124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17124[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_17124[(1)] = (1));

return statearr_17124;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_17096){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_17096);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e17125){var ex__14302__auto__ = e17125;
var statearr_17126_19385 = state_17096;
(statearr_17126_19385[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_17096[(4)]))){
var statearr_17127_19386 = state_17096;
(statearr_17127_19386[(1)] = cljs.core.first((state_17096[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19389 = state_17096;
state_17096 = G__19389;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_17096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_17096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_17132 = f__14563__auto__();
(statearr_17132[(6)] = c__14562__auto___19363);

return statearr_17132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
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
var G__17137 = arguments.length;
switch (G__17137) {
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
var c__14562__auto___19391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_17171){
var state_val_17172 = (state_17171[(1)]);
if((state_val_17172 === (7))){
var inst_17148 = (state_17171[(7)]);
var inst_17148__$1 = (state_17171[(2)]);
var inst_17150 = (inst_17148__$1 == null);
var inst_17151 = cljs.core.not(inst_17150);
var state_17171__$1 = (function (){var statearr_17173 = state_17171;
(statearr_17173[(7)] = inst_17148__$1);

return statearr_17173;
})();
if(inst_17151){
var statearr_17174_19392 = state_17171__$1;
(statearr_17174_19392[(1)] = (8));

} else {
var statearr_17175_19393 = state_17171__$1;
(statearr_17175_19393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17172 === (1))){
var inst_17141 = (0);
var state_17171__$1 = (function (){var statearr_17177 = state_17171;
(statearr_17177[(8)] = inst_17141);

return statearr_17177;
})();
var statearr_17178_19394 = state_17171__$1;
(statearr_17178_19394[(2)] = null);

(statearr_17178_19394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17172 === (4))){
var state_17171__$1 = state_17171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17171__$1,(7),ch);
} else {
if((state_val_17172 === (6))){
var inst_17163 = (state_17171[(2)]);
var state_17171__$1 = state_17171;
var statearr_17179_19395 = state_17171__$1;
(statearr_17179_19395[(2)] = inst_17163);

(statearr_17179_19395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17172 === (3))){
var inst_17165 = (state_17171[(2)]);
var inst_17166 = cljs.core.async.close_BANG_(out);
var state_17171__$1 = (function (){var statearr_17184 = state_17171;
(statearr_17184[(9)] = inst_17165);

return statearr_17184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17171__$1,inst_17166);
} else {
if((state_val_17172 === (2))){
var inst_17141 = (state_17171[(8)]);
var inst_17145 = (inst_17141 < n);
var state_17171__$1 = state_17171;
if(cljs.core.truth_(inst_17145)){
var statearr_17185_19401 = state_17171__$1;
(statearr_17185_19401[(1)] = (4));

} else {
var statearr_17186_19403 = state_17171__$1;
(statearr_17186_19403[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17172 === (11))){
var inst_17141 = (state_17171[(8)]);
var inst_17154 = (state_17171[(2)]);
var inst_17155 = (inst_17141 + (1));
var inst_17141__$1 = inst_17155;
var state_17171__$1 = (function (){var statearr_17187 = state_17171;
(statearr_17187[(10)] = inst_17154);

(statearr_17187[(8)] = inst_17141__$1);

return statearr_17187;
})();
var statearr_17192_19404 = state_17171__$1;
(statearr_17192_19404[(2)] = null);

(statearr_17192_19404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17172 === (9))){
var state_17171__$1 = state_17171;
var statearr_17193_19405 = state_17171__$1;
(statearr_17193_19405[(2)] = null);

(statearr_17193_19405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17172 === (5))){
var state_17171__$1 = state_17171;
var statearr_17194_19410 = state_17171__$1;
(statearr_17194_19410[(2)] = null);

(statearr_17194_19410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17172 === (10))){
var inst_17160 = (state_17171[(2)]);
var state_17171__$1 = state_17171;
var statearr_17195_19414 = state_17171__$1;
(statearr_17195_19414[(2)] = inst_17160);

(statearr_17195_19414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17172 === (8))){
var inst_17148 = (state_17171[(7)]);
var state_17171__$1 = state_17171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17171__$1,(11),out,inst_17148);
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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_17200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17200[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_17200[(1)] = (1));

return statearr_17200;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_17171){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_17171);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e17201){var ex__14302__auto__ = e17201;
var statearr_17202_19423 = state_17171;
(statearr_17202_19423[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_17171[(4)]))){
var statearr_17203_19427 = state_17171;
(statearr_17203_19427[(1)] = cljs.core.first((state_17171[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19432 = state_17171;
state_17171 = G__19432;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_17171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_17171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_17204 = f__14563__auto__();
(statearr_17204[(6)] = c__14562__auto___19391);

return statearr_17204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
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
cljs.core.async.t_cljs$core$async17213 = (function (f,ch,meta17208,_,fn1,meta17214){
this.f = f;
this.ch = ch;
this.meta17208 = meta17208;
this._ = _;
this.fn1 = fn1;
this.meta17214 = meta17214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17215,meta17214__$1){
var self__ = this;
var _17215__$1 = this;
return (new cljs.core.async.t_cljs$core$async17213(self__.f,self__.ch,self__.meta17208,self__._,self__.fn1,meta17214__$1));
}));

(cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17215){
var self__ = this;
var _17215__$1 = this;
return self__.meta17214;
}));

(cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17205_SHARP_){
var G__17222 = (((p1__17205_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17205_SHARP_) : self__.f.call(null, p1__17205_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17222) : f1.call(null, G__17222));
});
}));

(cljs.core.async.t_cljs$core$async17213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17208","meta17208",-1892684739,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17207","cljs.core.async/t_cljs$core$async17207",-1959833751,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17214","meta17214",-474656309,null)], null);
}));

(cljs.core.async.t_cljs$core$async17213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17213");

(cljs.core.async.t_cljs$core$async17213.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17213.
 */
cljs.core.async.__GT_t_cljs$core$async17213 = (function cljs$core$async$__GT_t_cljs$core$async17213(f,ch,meta17208,_,fn1,meta17214){
return (new cljs.core.async.t_cljs$core$async17213(f,ch,meta17208,_,fn1,meta17214));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17207 = (function (f,ch,meta17208){
this.f = f;
this.ch = ch;
this.meta17208 = meta17208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17209,meta17208__$1){
var self__ = this;
var _17209__$1 = this;
return (new cljs.core.async.t_cljs$core$async17207(self__.f,self__.ch,meta17208__$1));
}));

(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17209){
var self__ = this;
var _17209__$1 = this;
return self__.meta17208;
}));

(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17213(self__.f,self__.ch,self__.meta17208,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17227 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17227) : self__.f.call(null, G__17227));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17207.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17208","meta17208",-1892684739,null)], null);
}));

(cljs.core.async.t_cljs$core$async17207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17207");

(cljs.core.async.t_cljs$core$async17207.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17207.
 */
cljs.core.async.__GT_t_cljs$core$async17207 = (function cljs$core$async$__GT_t_cljs$core$async17207(f,ch,meta17208){
return (new cljs.core.async.t_cljs$core$async17207(f,ch,meta17208));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17207(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17247 = (function (f,ch,meta17248){
this.f = f;
this.ch = ch;
this.meta17248 = meta17248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17249,meta17248__$1){
var self__ = this;
var _17249__$1 = this;
return (new cljs.core.async.t_cljs$core$async17247(self__.f,self__.ch,meta17248__$1));
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17249){
var self__ = this;
var _17249__$1 = this;
return self__.meta17248;
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17247.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17248","meta17248",-76688256,null)], null);
}));

(cljs.core.async.t_cljs$core$async17247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17247");

(cljs.core.async.t_cljs$core$async17247.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17247.
 */
cljs.core.async.__GT_t_cljs$core$async17247 = (function cljs$core$async$__GT_t_cljs$core$async17247(f,ch,meta17248){
return (new cljs.core.async.t_cljs$core$async17247(f,ch,meta17248));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17247(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17259 = (function (p,ch,meta17260){
this.p = p;
this.ch = ch;
this.meta17260 = meta17260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17261,meta17260__$1){
var self__ = this;
var _17261__$1 = this;
return (new cljs.core.async.t_cljs$core$async17259(self__.p,self__.ch,meta17260__$1));
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17261){
var self__ = this;
var _17261__$1 = this;
return self__.meta17260;
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17260","meta17260",-797337708,null)], null);
}));

(cljs.core.async.t_cljs$core$async17259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17259");

(cljs.core.async.t_cljs$core$async17259.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17259.
 */
cljs.core.async.__GT_t_cljs$core$async17259 = (function cljs$core$async$__GT_t_cljs$core$async17259(p,ch,meta17260){
return (new cljs.core.async.t_cljs$core$async17259(p,ch,meta17260));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17259(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17279 = arguments.length;
switch (G__17279) {
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
var c__14562__auto___19454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_17312){
var state_val_17313 = (state_17312[(1)]);
if((state_val_17313 === (7))){
var inst_17307 = (state_17312[(2)]);
var state_17312__$1 = state_17312;
var statearr_17323_19455 = state_17312__$1;
(statearr_17323_19455[(2)] = inst_17307);

(statearr_17323_19455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (1))){
var state_17312__$1 = state_17312;
var statearr_17324_19456 = state_17312__$1;
(statearr_17324_19456[(2)] = null);

(statearr_17324_19456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (4))){
var inst_17290 = (state_17312[(7)]);
var inst_17290__$1 = (state_17312[(2)]);
var inst_17291 = (inst_17290__$1 == null);
var state_17312__$1 = (function (){var statearr_17328 = state_17312;
(statearr_17328[(7)] = inst_17290__$1);

return statearr_17328;
})();
if(cljs.core.truth_(inst_17291)){
var statearr_17329_19460 = state_17312__$1;
(statearr_17329_19460[(1)] = (5));

} else {
var statearr_17330_19461 = state_17312__$1;
(statearr_17330_19461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (6))){
var inst_17290 = (state_17312[(7)]);
var inst_17297 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17290) : p.call(null, inst_17290));
var state_17312__$1 = state_17312;
if(cljs.core.truth_(inst_17297)){
var statearr_17333_19463 = state_17312__$1;
(statearr_17333_19463[(1)] = (8));

} else {
var statearr_17334_19464 = state_17312__$1;
(statearr_17334_19464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (3))){
var inst_17309 = (state_17312[(2)]);
var state_17312__$1 = state_17312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17312__$1,inst_17309);
} else {
if((state_val_17313 === (2))){
var state_17312__$1 = state_17312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17312__$1,(4),ch);
} else {
if((state_val_17313 === (11))){
var inst_17301 = (state_17312[(2)]);
var state_17312__$1 = state_17312;
var statearr_17336_19470 = state_17312__$1;
(statearr_17336_19470[(2)] = inst_17301);

(statearr_17336_19470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (9))){
var state_17312__$1 = state_17312;
var statearr_17339_19472 = state_17312__$1;
(statearr_17339_19472[(2)] = null);

(statearr_17339_19472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (5))){
var inst_17293 = cljs.core.async.close_BANG_(out);
var state_17312__$1 = state_17312;
var statearr_17340_19483 = state_17312__$1;
(statearr_17340_19483[(2)] = inst_17293);

(statearr_17340_19483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (10))){
var inst_17304 = (state_17312[(2)]);
var state_17312__$1 = (function (){var statearr_17341 = state_17312;
(statearr_17341[(8)] = inst_17304);

return statearr_17341;
})();
var statearr_17342_19486 = state_17312__$1;
(statearr_17342_19486[(2)] = null);

(statearr_17342_19486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17313 === (8))){
var inst_17290 = (state_17312[(7)]);
var state_17312__$1 = state_17312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17312__$1,(11),out,inst_17290);
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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_17343 = [null,null,null,null,null,null,null,null,null];
(statearr_17343[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_17343[(1)] = (1));

return statearr_17343;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_17312){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_17312);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e17351){var ex__14302__auto__ = e17351;
var statearr_17352_19512 = state_17312;
(statearr_17352_19512[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_17312[(4)]))){
var statearr_17356_19515 = state_17312;
(statearr_17356_19515[(1)] = cljs.core.first((state_17312[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19517 = state_17312;
state_17312 = G__19517;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_17312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_17312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_17365 = f__14563__auto__();
(statearr_17365[(6)] = c__14562__auto___19454);

return statearr_17365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17382 = arguments.length;
switch (G__17382) {
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
var c__14562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_17485){
var state_val_17486 = (state_17485[(1)]);
if((state_val_17486 === (7))){
var inst_17481 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17487_19520 = state_17485__$1;
(statearr_17487_19520[(2)] = inst_17481);

(statearr_17487_19520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (20))){
var inst_17443 = (state_17485[(7)]);
var inst_17462 = (state_17485[(2)]);
var inst_17463 = cljs.core.next(inst_17443);
var inst_17418 = inst_17463;
var inst_17419 = null;
var inst_17420 = (0);
var inst_17421 = (0);
var state_17485__$1 = (function (){var statearr_17488 = state_17485;
(statearr_17488[(8)] = inst_17418);

(statearr_17488[(9)] = inst_17420);

(statearr_17488[(10)] = inst_17462);

(statearr_17488[(11)] = inst_17419);

(statearr_17488[(12)] = inst_17421);

return statearr_17488;
})();
var statearr_17489_19521 = state_17485__$1;
(statearr_17489_19521[(2)] = null);

(statearr_17489_19521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (1))){
var state_17485__$1 = state_17485;
var statearr_17490_19523 = state_17485__$1;
(statearr_17490_19523[(2)] = null);

(statearr_17490_19523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (4))){
var inst_17401 = (state_17485[(13)]);
var inst_17401__$1 = (state_17485[(2)]);
var inst_17408 = (inst_17401__$1 == null);
var state_17485__$1 = (function (){var statearr_17491 = state_17485;
(statearr_17491[(13)] = inst_17401__$1);

return statearr_17491;
})();
if(cljs.core.truth_(inst_17408)){
var statearr_17492_19528 = state_17485__$1;
(statearr_17492_19528[(1)] = (5));

} else {
var statearr_17493_19529 = state_17485__$1;
(statearr_17493_19529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (15))){
var state_17485__$1 = state_17485;
var statearr_17498_19530 = state_17485__$1;
(statearr_17498_19530[(2)] = null);

(statearr_17498_19530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (21))){
var state_17485__$1 = state_17485;
var statearr_17499_19532 = state_17485__$1;
(statearr_17499_19532[(2)] = null);

(statearr_17499_19532[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (13))){
var inst_17418 = (state_17485[(8)]);
var inst_17420 = (state_17485[(9)]);
var inst_17419 = (state_17485[(11)]);
var inst_17421 = (state_17485[(12)]);
var inst_17434 = (state_17485[(2)]);
var inst_17438 = (inst_17421 + (1));
var tmp17494 = inst_17418;
var tmp17495 = inst_17420;
var tmp17496 = inst_17419;
var inst_17418__$1 = tmp17494;
var inst_17419__$1 = tmp17496;
var inst_17420__$1 = tmp17495;
var inst_17421__$1 = inst_17438;
var state_17485__$1 = (function (){var statearr_17500 = state_17485;
(statearr_17500[(8)] = inst_17418__$1);

(statearr_17500[(14)] = inst_17434);

(statearr_17500[(9)] = inst_17420__$1);

(statearr_17500[(11)] = inst_17419__$1);

(statearr_17500[(12)] = inst_17421__$1);

return statearr_17500;
})();
var statearr_17504_19537 = state_17485__$1;
(statearr_17504_19537[(2)] = null);

(statearr_17504_19537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (22))){
var state_17485__$1 = state_17485;
var statearr_17505_19538 = state_17485__$1;
(statearr_17505_19538[(2)] = null);

(statearr_17505_19538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (6))){
var inst_17401 = (state_17485[(13)]);
var inst_17416 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17401) : f.call(null, inst_17401));
var inst_17417 = cljs.core.seq(inst_17416);
var inst_17418 = inst_17417;
var inst_17419 = null;
var inst_17420 = (0);
var inst_17421 = (0);
var state_17485__$1 = (function (){var statearr_17506 = state_17485;
(statearr_17506[(8)] = inst_17418);

(statearr_17506[(9)] = inst_17420);

(statearr_17506[(11)] = inst_17419);

(statearr_17506[(12)] = inst_17421);

return statearr_17506;
})();
var statearr_17507_19547 = state_17485__$1;
(statearr_17507_19547[(2)] = null);

(statearr_17507_19547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (17))){
var inst_17443 = (state_17485[(7)]);
var inst_17452 = cljs.core.chunk_first(inst_17443);
var inst_17453 = cljs.core.chunk_rest(inst_17443);
var inst_17454 = cljs.core.count(inst_17452);
var inst_17418 = inst_17453;
var inst_17419 = inst_17452;
var inst_17420 = inst_17454;
var inst_17421 = (0);
var state_17485__$1 = (function (){var statearr_17508 = state_17485;
(statearr_17508[(8)] = inst_17418);

(statearr_17508[(9)] = inst_17420);

(statearr_17508[(11)] = inst_17419);

(statearr_17508[(12)] = inst_17421);

return statearr_17508;
})();
var statearr_17509_19553 = state_17485__$1;
(statearr_17509_19553[(2)] = null);

(statearr_17509_19553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (3))){
var inst_17483 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17485__$1,inst_17483);
} else {
if((state_val_17486 === (12))){
var inst_17471 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17510_19559 = state_17485__$1;
(statearr_17510_19559[(2)] = inst_17471);

(statearr_17510_19559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (2))){
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17485__$1,(4),in$);
} else {
if((state_val_17486 === (23))){
var inst_17479 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17511_19571 = state_17485__$1;
(statearr_17511_19571[(2)] = inst_17479);

(statearr_17511_19571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (19))){
var inst_17466 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17512_19588 = state_17485__$1;
(statearr_17512_19588[(2)] = inst_17466);

(statearr_17512_19588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (11))){
var inst_17418 = (state_17485[(8)]);
var inst_17443 = (state_17485[(7)]);
var inst_17443__$1 = cljs.core.seq(inst_17418);
var state_17485__$1 = (function (){var statearr_17513 = state_17485;
(statearr_17513[(7)] = inst_17443__$1);

return statearr_17513;
})();
if(inst_17443__$1){
var statearr_17514_19592 = state_17485__$1;
(statearr_17514_19592[(1)] = (14));

} else {
var statearr_17515_19593 = state_17485__$1;
(statearr_17515_19593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (9))){
var inst_17473 = (state_17485[(2)]);
var inst_17474 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17485__$1 = (function (){var statearr_17516 = state_17485;
(statearr_17516[(15)] = inst_17473);

return statearr_17516;
})();
if(cljs.core.truth_(inst_17474)){
var statearr_17517_19596 = state_17485__$1;
(statearr_17517_19596[(1)] = (21));

} else {
var statearr_17518_19597 = state_17485__$1;
(statearr_17518_19597[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (5))){
var inst_17410 = cljs.core.async.close_BANG_(out);
var state_17485__$1 = state_17485;
var statearr_17519_19598 = state_17485__$1;
(statearr_17519_19598[(2)] = inst_17410);

(statearr_17519_19598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (14))){
var inst_17443 = (state_17485[(7)]);
var inst_17449 = cljs.core.chunked_seq_QMARK_(inst_17443);
var state_17485__$1 = state_17485;
if(inst_17449){
var statearr_17525_19599 = state_17485__$1;
(statearr_17525_19599[(1)] = (17));

} else {
var statearr_17529_19600 = state_17485__$1;
(statearr_17529_19600[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (16))){
var inst_17469 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17530_19602 = state_17485__$1;
(statearr_17530_19602[(2)] = inst_17469);

(statearr_17530_19602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (10))){
var inst_17419 = (state_17485[(11)]);
var inst_17421 = (state_17485[(12)]);
var inst_17431 = cljs.core._nth(inst_17419,inst_17421);
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17485__$1,(13),out,inst_17431);
} else {
if((state_val_17486 === (18))){
var inst_17443 = (state_17485[(7)]);
var inst_17460 = cljs.core.first(inst_17443);
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17485__$1,(20),out,inst_17460);
} else {
if((state_val_17486 === (8))){
var inst_17420 = (state_17485[(9)]);
var inst_17421 = (state_17485[(12)]);
var inst_17426 = (inst_17421 < inst_17420);
var inst_17427 = inst_17426;
var state_17485__$1 = state_17485;
if(cljs.core.truth_(inst_17427)){
var statearr_17538_19612 = state_17485__$1;
(statearr_17538_19612[(1)] = (10));

} else {
var statearr_17539_19613 = state_17485__$1;
(statearr_17539_19613[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14299__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14299__auto____0 = (function (){
var statearr_17540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17540[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14299__auto__);

(statearr_17540[(1)] = (1));

return statearr_17540;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14299__auto____1 = (function (state_17485){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_17485);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e17545){var ex__14302__auto__ = e17545;
var statearr_17546_19618 = state_17485;
(statearr_17546_19618[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_17485[(4)]))){
var statearr_17547_19619 = state_17485;
(statearr_17547_19619[(1)] = cljs.core.first((state_17485[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19620 = state_17485;
state_17485 = G__19620;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14299__auto__ = function(state_17485){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14299__auto____1.call(this,state_17485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14299__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14299__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_17548 = f__14563__auto__();
(statearr_17548[(6)] = c__14562__auto__);

return statearr_17548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));

return c__14562__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17554 = arguments.length;
switch (G__17554) {
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
var G__17556 = arguments.length;
switch (G__17556) {
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
var G__17560 = arguments.length;
switch (G__17560) {
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
var c__14562__auto___19635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_17590){
var state_val_17591 = (state_17590[(1)]);
if((state_val_17591 === (7))){
var inst_17584 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17592_19636 = state_17590__$1;
(statearr_17592_19636[(2)] = inst_17584);

(statearr_17592_19636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (1))){
var inst_17561 = null;
var state_17590__$1 = (function (){var statearr_17594 = state_17590;
(statearr_17594[(7)] = inst_17561);

return statearr_17594;
})();
var statearr_17596_19637 = state_17590__$1;
(statearr_17596_19637[(2)] = null);

(statearr_17596_19637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (4))){
var inst_17564 = (state_17590[(8)]);
var inst_17564__$1 = (state_17590[(2)]);
var inst_17568 = (inst_17564__$1 == null);
var inst_17569 = cljs.core.not(inst_17568);
var state_17590__$1 = (function (){var statearr_17599 = state_17590;
(statearr_17599[(8)] = inst_17564__$1);

return statearr_17599;
})();
if(inst_17569){
var statearr_17600_19640 = state_17590__$1;
(statearr_17600_19640[(1)] = (5));

} else {
var statearr_17603_19641 = state_17590__$1;
(statearr_17603_19641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (6))){
var state_17590__$1 = state_17590;
var statearr_17604_19642 = state_17590__$1;
(statearr_17604_19642[(2)] = null);

(statearr_17604_19642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (3))){
var inst_17586 = (state_17590[(2)]);
var inst_17587 = cljs.core.async.close_BANG_(out);
var state_17590__$1 = (function (){var statearr_17609 = state_17590;
(statearr_17609[(9)] = inst_17586);

return statearr_17609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17590__$1,inst_17587);
} else {
if((state_val_17591 === (2))){
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17590__$1,(4),ch);
} else {
if((state_val_17591 === (11))){
var inst_17564 = (state_17590[(8)]);
var inst_17578 = (state_17590[(2)]);
var inst_17561 = inst_17564;
var state_17590__$1 = (function (){var statearr_17614 = state_17590;
(statearr_17614[(10)] = inst_17578);

(statearr_17614[(7)] = inst_17561);

return statearr_17614;
})();
var statearr_17615_19647 = state_17590__$1;
(statearr_17615_19647[(2)] = null);

(statearr_17615_19647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (9))){
var inst_17564 = (state_17590[(8)]);
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17590__$1,(11),out,inst_17564);
} else {
if((state_val_17591 === (5))){
var inst_17564 = (state_17590[(8)]);
var inst_17561 = (state_17590[(7)]);
var inst_17571 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17564,inst_17561);
var state_17590__$1 = state_17590;
if(inst_17571){
var statearr_17617_19652 = state_17590__$1;
(statearr_17617_19652[(1)] = (8));

} else {
var statearr_17618_19653 = state_17590__$1;
(statearr_17618_19653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (10))){
var inst_17581 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17620_19654 = state_17590__$1;
(statearr_17620_19654[(2)] = inst_17581);

(statearr_17620_19654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (8))){
var inst_17561 = (state_17590[(7)]);
var tmp17616 = inst_17561;
var inst_17561__$1 = tmp17616;
var state_17590__$1 = (function (){var statearr_17621 = state_17590;
(statearr_17621[(7)] = inst_17561__$1);

return statearr_17621;
})();
var statearr_17622_19656 = state_17590__$1;
(statearr_17622_19656[(2)] = null);

(statearr_17622_19656[(1)] = (2));


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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_17623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17623[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_17623[(1)] = (1));

return statearr_17623;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_17590){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_17590);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e17624){var ex__14302__auto__ = e17624;
var statearr_17625_19660 = state_17590;
(statearr_17625_19660[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_17590[(4)]))){
var statearr_17626_19661 = state_17590;
(statearr_17626_19661[(1)] = cljs.core.first((state_17590[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19668 = state_17590;
state_17590 = G__19668;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_17590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_17590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_17627 = f__14563__auto__();
(statearr_17627[(6)] = c__14562__auto___19635);

return statearr_17627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17644 = arguments.length;
switch (G__17644) {
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
var c__14562__auto___19671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_17706){
var state_val_17707 = (state_17706[(1)]);
if((state_val_17707 === (7))){
var inst_17695 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17744_19676 = state_17706__$1;
(statearr_17744_19676[(2)] = inst_17695);

(statearr_17744_19676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (1))){
var inst_17648 = (new Array(n));
var inst_17649 = inst_17648;
var inst_17650 = (0);
var state_17706__$1 = (function (){var statearr_17749 = state_17706;
(statearr_17749[(7)] = inst_17650);

(statearr_17749[(8)] = inst_17649);

return statearr_17749;
})();
var statearr_17750_19677 = state_17706__$1;
(statearr_17750_19677[(2)] = null);

(statearr_17750_19677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (4))){
var inst_17653 = (state_17706[(9)]);
var inst_17653__$1 = (state_17706[(2)]);
var inst_17654 = (inst_17653__$1 == null);
var inst_17655 = cljs.core.not(inst_17654);
var state_17706__$1 = (function (){var statearr_17756 = state_17706;
(statearr_17756[(9)] = inst_17653__$1);

return statearr_17756;
})();
if(inst_17655){
var statearr_17759_19679 = state_17706__$1;
(statearr_17759_19679[(1)] = (5));

} else {
var statearr_17766_19680 = state_17706__$1;
(statearr_17766_19680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (15))){
var inst_17689 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17777_19682 = state_17706__$1;
(statearr_17777_19682[(2)] = inst_17689);

(statearr_17777_19682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (13))){
var state_17706__$1 = state_17706;
var statearr_17784_19683 = state_17706__$1;
(statearr_17784_19683[(2)] = null);

(statearr_17784_19683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (6))){
var inst_17650 = (state_17706[(7)]);
var inst_17681 = (inst_17650 > (0));
var state_17706__$1 = state_17706;
if(cljs.core.truth_(inst_17681)){
var statearr_17796_19684 = state_17706__$1;
(statearr_17796_19684[(1)] = (12));

} else {
var statearr_17798_19685 = state_17706__$1;
(statearr_17798_19685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (3))){
var inst_17697 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17706__$1,inst_17697);
} else {
if((state_val_17707 === (12))){
var inst_17649 = (state_17706[(8)]);
var inst_17687 = cljs.core.vec(inst_17649);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(15),out,inst_17687);
} else {
if((state_val_17707 === (2))){
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17706__$1,(4),ch);
} else {
if((state_val_17707 === (11))){
var inst_17665 = (state_17706[(2)]);
var inst_17669 = (new Array(n));
var inst_17649 = inst_17669;
var inst_17650 = (0);
var state_17706__$1 = (function (){var statearr_17816 = state_17706;
(statearr_17816[(7)] = inst_17650);

(statearr_17816[(10)] = inst_17665);

(statearr_17816[(8)] = inst_17649);

return statearr_17816;
})();
var statearr_17817_19696 = state_17706__$1;
(statearr_17817_19696[(2)] = null);

(statearr_17817_19696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (9))){
var inst_17649 = (state_17706[(8)]);
var inst_17663 = cljs.core.vec(inst_17649);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(11),out,inst_17663);
} else {
if((state_val_17707 === (5))){
var inst_17653 = (state_17706[(9)]);
var inst_17658 = (state_17706[(11)]);
var inst_17650 = (state_17706[(7)]);
var inst_17649 = (state_17706[(8)]);
var inst_17657 = (inst_17649[inst_17650] = inst_17653);
var inst_17658__$1 = (inst_17650 + (1));
var inst_17659 = (inst_17658__$1 < n);
var state_17706__$1 = (function (){var statearr_17819 = state_17706;
(statearr_17819[(11)] = inst_17658__$1);

(statearr_17819[(12)] = inst_17657);

return statearr_17819;
})();
if(cljs.core.truth_(inst_17659)){
var statearr_17820_19700 = state_17706__$1;
(statearr_17820_19700[(1)] = (8));

} else {
var statearr_17822_19701 = state_17706__$1;
(statearr_17822_19701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (14))){
var inst_17692 = (state_17706[(2)]);
var inst_17693 = cljs.core.async.close_BANG_(out);
var state_17706__$1 = (function (){var statearr_17824 = state_17706;
(statearr_17824[(13)] = inst_17692);

return statearr_17824;
})();
var statearr_17825_19702 = state_17706__$1;
(statearr_17825_19702[(2)] = inst_17693);

(statearr_17825_19702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (10))){
var inst_17672 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17826_19703 = state_17706__$1;
(statearr_17826_19703[(2)] = inst_17672);

(statearr_17826_19703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (8))){
var inst_17658 = (state_17706[(11)]);
var inst_17649 = (state_17706[(8)]);
var tmp17823 = inst_17649;
var inst_17649__$1 = tmp17823;
var inst_17650 = inst_17658;
var state_17706__$1 = (function (){var statearr_17827 = state_17706;
(statearr_17827[(7)] = inst_17650);

(statearr_17827[(8)] = inst_17649__$1);

return statearr_17827;
})();
var statearr_17828_19704 = state_17706__$1;
(statearr_17828_19704[(2)] = null);

(statearr_17828_19704[(1)] = (2));


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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_17829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17829[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_17829[(1)] = (1));

return statearr_17829;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_17706){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_17706);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e17830){var ex__14302__auto__ = e17830;
var statearr_17831_19705 = state_17706;
(statearr_17831_19705[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_17706[(4)]))){
var statearr_17832_19706 = state_17706;
(statearr_17832_19706[(1)] = cljs.core.first((state_17706[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19707 = state_17706;
state_17706 = G__19707;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_17706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_17706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_17834 = f__14563__auto__();
(statearr_17834[(6)] = c__14562__auto___19671);

return statearr_17834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17836 = arguments.length;
switch (G__17836) {
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
var c__14562__auto___19709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_17890){
var state_val_17891 = (state_17890[(1)]);
if((state_val_17891 === (7))){
var inst_17885 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
var statearr_17895_19710 = state_17890__$1;
(statearr_17895_19710[(2)] = inst_17885);

(statearr_17895_19710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (1))){
var inst_17844 = [];
var inst_17845 = inst_17844;
var inst_17846 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17890__$1 = (function (){var statearr_17905 = state_17890;
(statearr_17905[(7)] = inst_17846);

(statearr_17905[(8)] = inst_17845);

return statearr_17905;
})();
var statearr_17906_19721 = state_17890__$1;
(statearr_17906_19721[(2)] = null);

(statearr_17906_19721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (4))){
var inst_17849 = (state_17890[(9)]);
var inst_17849__$1 = (state_17890[(2)]);
var inst_17850 = (inst_17849__$1 == null);
var inst_17851 = cljs.core.not(inst_17850);
var state_17890__$1 = (function (){var statearr_17908 = state_17890;
(statearr_17908[(9)] = inst_17849__$1);

return statearr_17908;
})();
if(inst_17851){
var statearr_17909_19723 = state_17890__$1;
(statearr_17909_19723[(1)] = (5));

} else {
var statearr_17910_19724 = state_17890__$1;
(statearr_17910_19724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (15))){
var inst_17845 = (state_17890[(8)]);
var inst_17877 = cljs.core.vec(inst_17845);
var state_17890__$1 = state_17890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17890__$1,(18),out,inst_17877);
} else {
if((state_val_17891 === (13))){
var inst_17872 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
var statearr_17912_19729 = state_17890__$1;
(statearr_17912_19729[(2)] = inst_17872);

(statearr_17912_19729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (6))){
var inst_17845 = (state_17890[(8)]);
var inst_17874 = inst_17845.length;
var inst_17875 = (inst_17874 > (0));
var state_17890__$1 = state_17890;
if(cljs.core.truth_(inst_17875)){
var statearr_17913_19730 = state_17890__$1;
(statearr_17913_19730[(1)] = (15));

} else {
var statearr_17914_19731 = state_17890__$1;
(statearr_17914_19731[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (17))){
var inst_17882 = (state_17890[(2)]);
var inst_17883 = cljs.core.async.close_BANG_(out);
var state_17890__$1 = (function (){var statearr_17915 = state_17890;
(statearr_17915[(10)] = inst_17882);

return statearr_17915;
})();
var statearr_17916_19732 = state_17890__$1;
(statearr_17916_19732[(2)] = inst_17883);

(statearr_17916_19732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (3))){
var inst_17887 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17890__$1,inst_17887);
} else {
if((state_val_17891 === (12))){
var inst_17845 = (state_17890[(8)]);
var inst_17865 = cljs.core.vec(inst_17845);
var state_17890__$1 = state_17890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17890__$1,(14),out,inst_17865);
} else {
if((state_val_17891 === (2))){
var state_17890__$1 = state_17890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17890__$1,(4),ch);
} else {
if((state_val_17891 === (11))){
var inst_17853 = (state_17890[(11)]);
var inst_17849 = (state_17890[(9)]);
var inst_17845 = (state_17890[(8)]);
var inst_17862 = inst_17845.push(inst_17849);
var tmp17917 = inst_17845;
var inst_17845__$1 = tmp17917;
var inst_17846 = inst_17853;
var state_17890__$1 = (function (){var statearr_17934 = state_17890;
(statearr_17934[(7)] = inst_17846);

(statearr_17934[(12)] = inst_17862);

(statearr_17934[(8)] = inst_17845__$1);

return statearr_17934;
})();
var statearr_17937_19733 = state_17890__$1;
(statearr_17937_19733[(2)] = null);

(statearr_17937_19733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (9))){
var inst_17846 = (state_17890[(7)]);
var inst_17858 = cljs.core.keyword_identical_QMARK_(inst_17846,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17890__$1 = state_17890;
var statearr_17938_19734 = state_17890__$1;
(statearr_17938_19734[(2)] = inst_17858);

(statearr_17938_19734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (5))){
var inst_17853 = (state_17890[(11)]);
var inst_17846 = (state_17890[(7)]);
var inst_17849 = (state_17890[(9)]);
var inst_17855 = (state_17890[(13)]);
var inst_17853__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17849) : f.call(null, inst_17849));
var inst_17855__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17853__$1,inst_17846);
var state_17890__$1 = (function (){var statearr_17939 = state_17890;
(statearr_17939[(11)] = inst_17853__$1);

(statearr_17939[(13)] = inst_17855__$1);

return statearr_17939;
})();
if(inst_17855__$1){
var statearr_17940_19735 = state_17890__$1;
(statearr_17940_19735[(1)] = (8));

} else {
var statearr_17941_19736 = state_17890__$1;
(statearr_17941_19736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (14))){
var inst_17853 = (state_17890[(11)]);
var inst_17849 = (state_17890[(9)]);
var inst_17867 = (state_17890[(2)]);
var inst_17868 = [];
var inst_17869 = inst_17868.push(inst_17849);
var inst_17845 = inst_17868;
var inst_17846 = inst_17853;
var state_17890__$1 = (function (){var statearr_17942 = state_17890;
(statearr_17942[(7)] = inst_17846);

(statearr_17942[(14)] = inst_17869);

(statearr_17942[(8)] = inst_17845);

(statearr_17942[(15)] = inst_17867);

return statearr_17942;
})();
var statearr_17943_19737 = state_17890__$1;
(statearr_17943_19737[(2)] = null);

(statearr_17943_19737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (16))){
var state_17890__$1 = state_17890;
var statearr_17944_19738 = state_17890__$1;
(statearr_17944_19738[(2)] = null);

(statearr_17944_19738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (10))){
var inst_17860 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
if(cljs.core.truth_(inst_17860)){
var statearr_17952_19739 = state_17890__$1;
(statearr_17952_19739[(1)] = (11));

} else {
var statearr_17953_19740 = state_17890__$1;
(statearr_17953_19740[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (18))){
var inst_17879 = (state_17890[(2)]);
var state_17890__$1 = state_17890;
var statearr_17954_19741 = state_17890__$1;
(statearr_17954_19741[(2)] = inst_17879);

(statearr_17954_19741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17891 === (8))){
var inst_17855 = (state_17890[(13)]);
var state_17890__$1 = state_17890;
var statearr_17956_19742 = state_17890__$1;
(statearr_17956_19742[(2)] = inst_17855);

(statearr_17956_19742[(1)] = (10));


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
var cljs$core$async$state_machine__14299__auto__ = null;
var cljs$core$async$state_machine__14299__auto____0 = (function (){
var statearr_17957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17957[(0)] = cljs$core$async$state_machine__14299__auto__);

(statearr_17957[(1)] = (1));

return statearr_17957;
});
var cljs$core$async$state_machine__14299__auto____1 = (function (state_17890){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_17890);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e17963){var ex__14302__auto__ = e17963;
var statearr_17970_19747 = state_17890;
(statearr_17970_19747[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_17890[(4)]))){
var statearr_17974_19752 = state_17890;
(statearr_17974_19752[(1)] = cljs.core.first((state_17890[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19753 = state_17890;
state_17890 = G__19753;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs$core$async$state_machine__14299__auto__ = function(state_17890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14299__auto____1.call(this,state_17890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14299__auto____0;
cljs$core$async$state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14299__auto____1;
return cljs$core$async$state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_17982 = f__14563__auto__();
(statearr_17982[(6)] = c__14562__auto___19709);

return statearr_17982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
