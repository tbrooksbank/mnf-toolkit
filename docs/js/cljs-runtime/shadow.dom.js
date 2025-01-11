goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12434 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12434(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12437 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12437(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11729 = coll;
var G__11730 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11729,G__11730) : shadow.dom.lazy_native_coll_seq.call(null, G__11729,G__11730));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11739 = arguments.length;
switch (G__11739) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11741 = arguments.length;
switch (G__11741) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11743 = arguments.length;
switch (G__11743) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11745 = arguments.length;
switch (G__11745) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11747 = arguments.length;
switch (G__11747) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11762 = arguments.length;
switch (G__11762) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11763){if((e11763 instanceof Object)){
var e = e11763;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11763;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11773 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11774 = null;
var count__11775 = (0);
var i__11776 = (0);
while(true){
if((i__11776 < count__11775)){
var el = chunk__11774.cljs$core$IIndexed$_nth$arity$2(null, i__11776);
var handler_12499__$1 = ((function (seq__11773,chunk__11774,count__11775,i__11776,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11773,chunk__11774,count__11775,i__11776,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12499__$1);


var G__12500 = seq__11773;
var G__12501 = chunk__11774;
var G__12502 = count__11775;
var G__12503 = (i__11776 + (1));
seq__11773 = G__12500;
chunk__11774 = G__12501;
count__11775 = G__12502;
i__11776 = G__12503;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11773);
if(temp__5804__auto__){
var seq__11773__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11773__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11773__$1);
var G__12504 = cljs.core.chunk_rest(seq__11773__$1);
var G__12505 = c__5525__auto__;
var G__12506 = cljs.core.count(c__5525__auto__);
var G__12507 = (0);
seq__11773 = G__12504;
chunk__11774 = G__12505;
count__11775 = G__12506;
i__11776 = G__12507;
continue;
} else {
var el = cljs.core.first(seq__11773__$1);
var handler_12508__$1 = ((function (seq__11773,chunk__11774,count__11775,i__11776,el,seq__11773__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11773,chunk__11774,count__11775,i__11776,el,seq__11773__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12508__$1);


var G__12509 = cljs.core.next(seq__11773__$1);
var G__12510 = null;
var G__12511 = (0);
var G__12512 = (0);
seq__11773 = G__12509;
chunk__11774 = G__12510;
count__11775 = G__12511;
i__11776 = G__12512;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11811 = arguments.length;
switch (G__11811) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11814 = cljs.core.seq(events);
var chunk__11815 = null;
var count__11816 = (0);
var i__11817 = (0);
while(true){
if((i__11817 < count__11816)){
var vec__11825 = chunk__11815.cljs$core$IIndexed$_nth$arity$2(null, i__11817);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12514 = seq__11814;
var G__12515 = chunk__11815;
var G__12516 = count__11816;
var G__12517 = (i__11817 + (1));
seq__11814 = G__12514;
chunk__11815 = G__12515;
count__11816 = G__12516;
i__11817 = G__12517;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11814);
if(temp__5804__auto__){
var seq__11814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11814__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11814__$1);
var G__12518 = cljs.core.chunk_rest(seq__11814__$1);
var G__12519 = c__5525__auto__;
var G__12520 = cljs.core.count(c__5525__auto__);
var G__12521 = (0);
seq__11814 = G__12518;
chunk__11815 = G__12519;
count__11816 = G__12520;
i__11817 = G__12521;
continue;
} else {
var vec__11828 = cljs.core.first(seq__11814__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11828,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12522 = cljs.core.next(seq__11814__$1);
var G__12523 = null;
var G__12524 = (0);
var G__12525 = (0);
seq__11814 = G__12522;
chunk__11815 = G__12523;
count__11816 = G__12524;
i__11817 = G__12525;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11833 = cljs.core.seq(styles);
var chunk__11834 = null;
var count__11835 = (0);
var i__11836 = (0);
while(true){
if((i__11836 < count__11835)){
var vec__11846 = chunk__11834.cljs$core$IIndexed$_nth$arity$2(null, i__11836);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12530 = seq__11833;
var G__12531 = chunk__11834;
var G__12532 = count__11835;
var G__12533 = (i__11836 + (1));
seq__11833 = G__12530;
chunk__11834 = G__12531;
count__11835 = G__12532;
i__11836 = G__12533;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11833);
if(temp__5804__auto__){
var seq__11833__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11833__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11833__$1);
var G__12534 = cljs.core.chunk_rest(seq__11833__$1);
var G__12535 = c__5525__auto__;
var G__12536 = cljs.core.count(c__5525__auto__);
var G__12537 = (0);
seq__11833 = G__12534;
chunk__11834 = G__12535;
count__11835 = G__12536;
i__11836 = G__12537;
continue;
} else {
var vec__11851 = cljs.core.first(seq__11833__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11851,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11851,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12539 = cljs.core.next(seq__11833__$1);
var G__12540 = null;
var G__12541 = (0);
var G__12542 = (0);
seq__11833 = G__12539;
chunk__11834 = G__12540;
count__11835 = G__12541;
i__11836 = G__12542;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11859_12543 = key;
var G__11859_12544__$1 = (((G__11859_12543 instanceof cljs.core.Keyword))?G__11859_12543.fqn:null);
switch (G__11859_12544__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12546 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12546,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12546,"aria-");
}
})())){
el.setAttribute(ks_12546,value);
} else {
(el[ks_12546] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11896){
var map__11897 = p__11896;
var map__11897__$1 = cljs.core.__destructure_map(map__11897);
var props = map__11897__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11897__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11898 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11898,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11898,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11898,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11901 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11901,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11901;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11905 = arguments.length;
switch (G__11905) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11910){
var vec__11911 = p__11910;
var seq__11912 = cljs.core.seq(vec__11911);
var first__11913 = cljs.core.first(seq__11912);
var seq__11912__$1 = cljs.core.next(seq__11912);
var nn = first__11913;
var first__11913__$1 = cljs.core.first(seq__11912__$1);
var seq__11912__$2 = cljs.core.next(seq__11912__$1);
var np = first__11913__$1;
var nc = seq__11912__$2;
var node = vec__11911;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11914 = nn;
var G__11915 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11914,G__11915) : create_fn.call(null, G__11914,G__11915));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11916 = nn;
var G__11917 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11916,G__11917) : create_fn.call(null, G__11916,G__11917));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11930 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(1),null);
var seq__11939_12550 = cljs.core.seq(node_children);
var chunk__11940_12551 = null;
var count__11941_12552 = (0);
var i__11942_12553 = (0);
while(true){
if((i__11942_12553 < count__11941_12552)){
var child_struct_12554 = chunk__11940_12551.cljs$core$IIndexed$_nth$arity$2(null, i__11942_12553);
var children_12555 = shadow.dom.dom_node(child_struct_12554);
if(cljs.core.seq_QMARK_(children_12555)){
var seq__11962_12556 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12555));
var chunk__11964_12557 = null;
var count__11965_12558 = (0);
var i__11966_12559 = (0);
while(true){
if((i__11966_12559 < count__11965_12558)){
var child_12560 = chunk__11964_12557.cljs$core$IIndexed$_nth$arity$2(null, i__11966_12559);
if(cljs.core.truth_(child_12560)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12560);


var G__12561 = seq__11962_12556;
var G__12562 = chunk__11964_12557;
var G__12563 = count__11965_12558;
var G__12564 = (i__11966_12559 + (1));
seq__11962_12556 = G__12561;
chunk__11964_12557 = G__12562;
count__11965_12558 = G__12563;
i__11966_12559 = G__12564;
continue;
} else {
var G__12565 = seq__11962_12556;
var G__12566 = chunk__11964_12557;
var G__12567 = count__11965_12558;
var G__12568 = (i__11966_12559 + (1));
seq__11962_12556 = G__12565;
chunk__11964_12557 = G__12566;
count__11965_12558 = G__12567;
i__11966_12559 = G__12568;
continue;
}
} else {
var temp__5804__auto___12569 = cljs.core.seq(seq__11962_12556);
if(temp__5804__auto___12569){
var seq__11962_12570__$1 = temp__5804__auto___12569;
if(cljs.core.chunked_seq_QMARK_(seq__11962_12570__$1)){
var c__5525__auto___12575 = cljs.core.chunk_first(seq__11962_12570__$1);
var G__12576 = cljs.core.chunk_rest(seq__11962_12570__$1);
var G__12577 = c__5525__auto___12575;
var G__12578 = cljs.core.count(c__5525__auto___12575);
var G__12579 = (0);
seq__11962_12556 = G__12576;
chunk__11964_12557 = G__12577;
count__11965_12558 = G__12578;
i__11966_12559 = G__12579;
continue;
} else {
var child_12583 = cljs.core.first(seq__11962_12570__$1);
if(cljs.core.truth_(child_12583)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12583);


var G__12585 = cljs.core.next(seq__11962_12570__$1);
var G__12586 = null;
var G__12587 = (0);
var G__12588 = (0);
seq__11962_12556 = G__12585;
chunk__11964_12557 = G__12586;
count__11965_12558 = G__12587;
i__11966_12559 = G__12588;
continue;
} else {
var G__12589 = cljs.core.next(seq__11962_12570__$1);
var G__12590 = null;
var G__12591 = (0);
var G__12592 = (0);
seq__11962_12556 = G__12589;
chunk__11964_12557 = G__12590;
count__11965_12558 = G__12591;
i__11966_12559 = G__12592;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12555);
}


var G__12593 = seq__11939_12550;
var G__12594 = chunk__11940_12551;
var G__12595 = count__11941_12552;
var G__12596 = (i__11942_12553 + (1));
seq__11939_12550 = G__12593;
chunk__11940_12551 = G__12594;
count__11941_12552 = G__12595;
i__11942_12553 = G__12596;
continue;
} else {
var temp__5804__auto___12597 = cljs.core.seq(seq__11939_12550);
if(temp__5804__auto___12597){
var seq__11939_12598__$1 = temp__5804__auto___12597;
if(cljs.core.chunked_seq_QMARK_(seq__11939_12598__$1)){
var c__5525__auto___12599 = cljs.core.chunk_first(seq__11939_12598__$1);
var G__12601 = cljs.core.chunk_rest(seq__11939_12598__$1);
var G__12602 = c__5525__auto___12599;
var G__12603 = cljs.core.count(c__5525__auto___12599);
var G__12604 = (0);
seq__11939_12550 = G__12601;
chunk__11940_12551 = G__12602;
count__11941_12552 = G__12603;
i__11942_12553 = G__12604;
continue;
} else {
var child_struct_12605 = cljs.core.first(seq__11939_12598__$1);
var children_12606 = shadow.dom.dom_node(child_struct_12605);
if(cljs.core.seq_QMARK_(children_12606)){
var seq__11972_12607 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12606));
var chunk__11974_12608 = null;
var count__11975_12609 = (0);
var i__11976_12610 = (0);
while(true){
if((i__11976_12610 < count__11975_12609)){
var child_12611 = chunk__11974_12608.cljs$core$IIndexed$_nth$arity$2(null, i__11976_12610);
if(cljs.core.truth_(child_12611)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12611);


var G__12612 = seq__11972_12607;
var G__12613 = chunk__11974_12608;
var G__12614 = count__11975_12609;
var G__12615 = (i__11976_12610 + (1));
seq__11972_12607 = G__12612;
chunk__11974_12608 = G__12613;
count__11975_12609 = G__12614;
i__11976_12610 = G__12615;
continue;
} else {
var G__12616 = seq__11972_12607;
var G__12617 = chunk__11974_12608;
var G__12618 = count__11975_12609;
var G__12619 = (i__11976_12610 + (1));
seq__11972_12607 = G__12616;
chunk__11974_12608 = G__12617;
count__11975_12609 = G__12618;
i__11976_12610 = G__12619;
continue;
}
} else {
var temp__5804__auto___12620__$1 = cljs.core.seq(seq__11972_12607);
if(temp__5804__auto___12620__$1){
var seq__11972_12621__$1 = temp__5804__auto___12620__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11972_12621__$1)){
var c__5525__auto___12623 = cljs.core.chunk_first(seq__11972_12621__$1);
var G__12624 = cljs.core.chunk_rest(seq__11972_12621__$1);
var G__12625 = c__5525__auto___12623;
var G__12626 = cljs.core.count(c__5525__auto___12623);
var G__12627 = (0);
seq__11972_12607 = G__12624;
chunk__11974_12608 = G__12625;
count__11975_12609 = G__12626;
i__11976_12610 = G__12627;
continue;
} else {
var child_12628 = cljs.core.first(seq__11972_12621__$1);
if(cljs.core.truth_(child_12628)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12628);


var G__12629 = cljs.core.next(seq__11972_12621__$1);
var G__12630 = null;
var G__12631 = (0);
var G__12632 = (0);
seq__11972_12607 = G__12629;
chunk__11974_12608 = G__12630;
count__11975_12609 = G__12631;
i__11976_12610 = G__12632;
continue;
} else {
var G__12633 = cljs.core.next(seq__11972_12621__$1);
var G__12634 = null;
var G__12635 = (0);
var G__12636 = (0);
seq__11972_12607 = G__12633;
chunk__11974_12608 = G__12634;
count__11975_12609 = G__12635;
i__11976_12610 = G__12636;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12606);
}


var G__12637 = cljs.core.next(seq__11939_12598__$1);
var G__12638 = null;
var G__12639 = (0);
var G__12640 = (0);
seq__11939_12550 = G__12637;
chunk__11940_12551 = G__12638;
count__11941_12552 = G__12639;
i__11942_12553 = G__12640;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__11987 = cljs.core.seq(node);
var chunk__11988 = null;
var count__11989 = (0);
var i__11990 = (0);
while(true){
if((i__11990 < count__11989)){
var n = chunk__11988.cljs$core$IIndexed$_nth$arity$2(null, i__11990);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12647 = seq__11987;
var G__12648 = chunk__11988;
var G__12649 = count__11989;
var G__12650 = (i__11990 + (1));
seq__11987 = G__12647;
chunk__11988 = G__12648;
count__11989 = G__12649;
i__11990 = G__12650;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11987);
if(temp__5804__auto__){
var seq__11987__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11987__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11987__$1);
var G__12652 = cljs.core.chunk_rest(seq__11987__$1);
var G__12653 = c__5525__auto__;
var G__12654 = cljs.core.count(c__5525__auto__);
var G__12655 = (0);
seq__11987 = G__12652;
chunk__11988 = G__12653;
count__11989 = G__12654;
i__11990 = G__12655;
continue;
} else {
var n = cljs.core.first(seq__11987__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12656 = cljs.core.next(seq__11987__$1);
var G__12657 = null;
var G__12658 = (0);
var G__12659 = (0);
seq__11987 = G__12656;
chunk__11988 = G__12657;
count__11989 = G__12658;
i__11990 = G__12659;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__11992 = arguments.length;
switch (G__11992) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__11994 = arguments.length;
switch (G__11994) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12008 = arguments.length;
switch (G__12008) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12671 = arguments.length;
var i__5727__auto___12672 = (0);
while(true){
if((i__5727__auto___12672 < len__5726__auto___12671)){
args__5732__auto__.push((arguments[i__5727__auto___12672]));

var G__12673 = (i__5727__auto___12672 + (1));
i__5727__auto___12672 = G__12673;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12018_12674 = cljs.core.seq(nodes);
var chunk__12019_12675 = null;
var count__12020_12676 = (0);
var i__12021_12677 = (0);
while(true){
if((i__12021_12677 < count__12020_12676)){
var node_12678 = chunk__12019_12675.cljs$core$IIndexed$_nth$arity$2(null, i__12021_12677);
fragment.appendChild(shadow.dom._to_dom(node_12678));


var G__12680 = seq__12018_12674;
var G__12681 = chunk__12019_12675;
var G__12682 = count__12020_12676;
var G__12683 = (i__12021_12677 + (1));
seq__12018_12674 = G__12680;
chunk__12019_12675 = G__12681;
count__12020_12676 = G__12682;
i__12021_12677 = G__12683;
continue;
} else {
var temp__5804__auto___12684 = cljs.core.seq(seq__12018_12674);
if(temp__5804__auto___12684){
var seq__12018_12685__$1 = temp__5804__auto___12684;
if(cljs.core.chunked_seq_QMARK_(seq__12018_12685__$1)){
var c__5525__auto___12686 = cljs.core.chunk_first(seq__12018_12685__$1);
var G__12687 = cljs.core.chunk_rest(seq__12018_12685__$1);
var G__12688 = c__5525__auto___12686;
var G__12689 = cljs.core.count(c__5525__auto___12686);
var G__12690 = (0);
seq__12018_12674 = G__12687;
chunk__12019_12675 = G__12688;
count__12020_12676 = G__12689;
i__12021_12677 = G__12690;
continue;
} else {
var node_12693 = cljs.core.first(seq__12018_12685__$1);
fragment.appendChild(shadow.dom._to_dom(node_12693));


var G__12694 = cljs.core.next(seq__12018_12685__$1);
var G__12695 = null;
var G__12696 = (0);
var G__12697 = (0);
seq__12018_12674 = G__12694;
chunk__12019_12675 = G__12695;
count__12020_12676 = G__12696;
i__12021_12677 = G__12697;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12012){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12012));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12025_12699 = cljs.core.seq(scripts);
var chunk__12026_12700 = null;
var count__12027_12701 = (0);
var i__12028_12702 = (0);
while(true){
if((i__12028_12702 < count__12027_12701)){
var vec__12035_12703 = chunk__12026_12700.cljs$core$IIndexed$_nth$arity$2(null, i__12028_12702);
var script_tag_12704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035_12703,(0),null);
var script_body_12705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035_12703,(1),null);
eval(script_body_12705);


var G__12706 = seq__12025_12699;
var G__12707 = chunk__12026_12700;
var G__12708 = count__12027_12701;
var G__12709 = (i__12028_12702 + (1));
seq__12025_12699 = G__12706;
chunk__12026_12700 = G__12707;
count__12027_12701 = G__12708;
i__12028_12702 = G__12709;
continue;
} else {
var temp__5804__auto___12711 = cljs.core.seq(seq__12025_12699);
if(temp__5804__auto___12711){
var seq__12025_12713__$1 = temp__5804__auto___12711;
if(cljs.core.chunked_seq_QMARK_(seq__12025_12713__$1)){
var c__5525__auto___12714 = cljs.core.chunk_first(seq__12025_12713__$1);
var G__12715 = cljs.core.chunk_rest(seq__12025_12713__$1);
var G__12716 = c__5525__auto___12714;
var G__12717 = cljs.core.count(c__5525__auto___12714);
var G__12718 = (0);
seq__12025_12699 = G__12715;
chunk__12026_12700 = G__12716;
count__12027_12701 = G__12717;
i__12028_12702 = G__12718;
continue;
} else {
var vec__12038_12719 = cljs.core.first(seq__12025_12713__$1);
var script_tag_12720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038_12719,(0),null);
var script_body_12721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12038_12719,(1),null);
eval(script_body_12721);


var G__12723 = cljs.core.next(seq__12025_12713__$1);
var G__12724 = null;
var G__12725 = (0);
var G__12726 = (0);
seq__12025_12699 = G__12723;
chunk__12026_12700 = G__12724;
count__12027_12701 = G__12725;
i__12028_12702 = G__12726;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12041){
var vec__12042 = p__12041;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12042,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12042,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12048 = arguments.length;
switch (G__12048) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12059 = cljs.core.seq(style_keys);
var chunk__12060 = null;
var count__12061 = (0);
var i__12062 = (0);
while(true){
if((i__12062 < count__12061)){
var it = chunk__12060.cljs$core$IIndexed$_nth$arity$2(null, i__12062);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12742 = seq__12059;
var G__12743 = chunk__12060;
var G__12744 = count__12061;
var G__12745 = (i__12062 + (1));
seq__12059 = G__12742;
chunk__12060 = G__12743;
count__12061 = G__12744;
i__12062 = G__12745;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12059);
if(temp__5804__auto__){
var seq__12059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12059__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12059__$1);
var G__12747 = cljs.core.chunk_rest(seq__12059__$1);
var G__12748 = c__5525__auto__;
var G__12749 = cljs.core.count(c__5525__auto__);
var G__12750 = (0);
seq__12059 = G__12747;
chunk__12060 = G__12748;
count__12061 = G__12749;
i__12062 = G__12750;
continue;
} else {
var it = cljs.core.first(seq__12059__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12751 = cljs.core.next(seq__12059__$1);
var G__12752 = null;
var G__12753 = (0);
var G__12754 = (0);
seq__12059 = G__12751;
chunk__12060 = G__12752;
count__12061 = G__12753;
i__12062 = G__12754;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12071,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12085 = k12071;
var G__12085__$1 = (((G__12085 instanceof cljs.core.Keyword))?G__12085.fqn:null);
switch (G__12085__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12071,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12090){
var vec__12091 = p__12090;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12091,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12091,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12070){
var self__ = this;
var G__12070__$1 = this;
return (new cljs.core.RecordIter((0),G__12070__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12072,other12073){
var self__ = this;
var this12072__$1 = this;
return (((!((other12073 == null)))) && ((((this12072__$1.constructor === other12073.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12072__$1.x,other12073.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12072__$1.y,other12073.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12072__$1.__extmap,other12073.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12071){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12096 = k12071;
var G__12096__$1 = (((G__12096 instanceof cljs.core.Keyword))?G__12096.fqn:null);
switch (G__12096__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12071);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12070){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12097 = cljs.core.keyword_identical_QMARK_;
var expr__12098 = k__5309__auto__;
if(cljs.core.truth_((pred__12097.cljs$core$IFn$_invoke$arity$2 ? pred__12097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12098) : pred__12097.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12098)))){
return (new shadow.dom.Coordinate(G__12070,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12097.cljs$core$IFn$_invoke$arity$2 ? pred__12097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12098) : pred__12097.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12098)))){
return (new shadow.dom.Coordinate(self__.x,G__12070,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12070),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12070){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12070,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12082){
var extmap__5342__auto__ = (function (){var G__12114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12082,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12082)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12114);
} else {
return G__12114;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12082),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12082),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12123,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12134 = k12123;
var G__12134__$1 = (((G__12134 instanceof cljs.core.Keyword))?G__12134.fqn:null);
switch (G__12134__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12123,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12140){
var vec__12146 = p__12140;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12122){
var self__ = this;
var G__12122__$1 = this;
return (new cljs.core.RecordIter((0),G__12122__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12124,other12125){
var self__ = this;
var this12124__$1 = this;
return (((!((other12125 == null)))) && ((((this12124__$1.constructor === other12125.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12124__$1.w,other12125.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12124__$1.h,other12125.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12124__$1.__extmap,other12125.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12123){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12170 = k12123;
var G__12170__$1 = (((G__12170 instanceof cljs.core.Keyword))?G__12170.fqn:null);
switch (G__12170__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12123);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12122){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12171 = cljs.core.keyword_identical_QMARK_;
var expr__12172 = k__5309__auto__;
if(cljs.core.truth_((pred__12171.cljs$core$IFn$_invoke$arity$2 ? pred__12171.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12172) : pred__12171.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12172)))){
return (new shadow.dom.Size(G__12122,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12171.cljs$core$IFn$_invoke$arity$2 ? pred__12171.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12172) : pred__12171.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12172)))){
return (new shadow.dom.Size(self__.w,G__12122,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12122),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12122){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12122,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12132){
var extmap__5342__auto__ = (function (){var G__12182 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12132,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12132)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12182);
} else {
return G__12182;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12132),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12132),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12809 = (i + (1));
var G__12810 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12809;
ret = G__12810;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12211){
var vec__12212 = p__12211;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12212,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12219 = arguments.length;
switch (G__12219) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12819 = ps;
var G__12820 = (i + (1));
el__$1 = G__12819;
i = G__12820;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12249 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12249,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12249,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12249,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12253_12828 = cljs.core.seq(props);
var chunk__12254_12829 = null;
var count__12255_12830 = (0);
var i__12256_12831 = (0);
while(true){
if((i__12256_12831 < count__12255_12830)){
var vec__12285_12832 = chunk__12254_12829.cljs$core$IIndexed$_nth$arity$2(null, i__12256_12831);
var k_12833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12285_12832,(0),null);
var v_12834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12285_12832,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12833);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12833),v_12834);


var G__12836 = seq__12253_12828;
var G__12837 = chunk__12254_12829;
var G__12838 = count__12255_12830;
var G__12839 = (i__12256_12831 + (1));
seq__12253_12828 = G__12836;
chunk__12254_12829 = G__12837;
count__12255_12830 = G__12838;
i__12256_12831 = G__12839;
continue;
} else {
var temp__5804__auto___12840 = cljs.core.seq(seq__12253_12828);
if(temp__5804__auto___12840){
var seq__12253_12841__$1 = temp__5804__auto___12840;
if(cljs.core.chunked_seq_QMARK_(seq__12253_12841__$1)){
var c__5525__auto___12842 = cljs.core.chunk_first(seq__12253_12841__$1);
var G__12845 = cljs.core.chunk_rest(seq__12253_12841__$1);
var G__12846 = c__5525__auto___12842;
var G__12847 = cljs.core.count(c__5525__auto___12842);
var G__12848 = (0);
seq__12253_12828 = G__12845;
chunk__12254_12829 = G__12846;
count__12255_12830 = G__12847;
i__12256_12831 = G__12848;
continue;
} else {
var vec__12289_12849 = cljs.core.first(seq__12253_12841__$1);
var k_12850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12289_12849,(0),null);
var v_12851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12289_12849,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12850);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12850),v_12851);


var G__12852 = cljs.core.next(seq__12253_12841__$1);
var G__12853 = null;
var G__12854 = (0);
var G__12855 = (0);
seq__12253_12828 = G__12852;
chunk__12254_12829 = G__12853;
count__12255_12830 = G__12854;
i__12256_12831 = G__12855;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12296 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12296,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12296,(1),null);
var seq__12299_12857 = cljs.core.seq(node_children);
var chunk__12301_12858 = null;
var count__12302_12859 = (0);
var i__12303_12860 = (0);
while(true){
if((i__12303_12860 < count__12302_12859)){
var child_struct_12862 = chunk__12301_12858.cljs$core$IIndexed$_nth$arity$2(null, i__12303_12860);
if((!((child_struct_12862 == null)))){
if(typeof child_struct_12862 === 'string'){
var text_12863 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12863),child_struct_12862].join(''));
} else {
var children_12864 = shadow.dom.svg_node(child_struct_12862);
if(cljs.core.seq_QMARK_(children_12864)){
var seq__12341_12865 = cljs.core.seq(children_12864);
var chunk__12343_12866 = null;
var count__12344_12867 = (0);
var i__12345_12868 = (0);
while(true){
if((i__12345_12868 < count__12344_12867)){
var child_12869 = chunk__12343_12866.cljs$core$IIndexed$_nth$arity$2(null, i__12345_12868);
if(cljs.core.truth_(child_12869)){
node.appendChild(child_12869);


var G__12870 = seq__12341_12865;
var G__12871 = chunk__12343_12866;
var G__12872 = count__12344_12867;
var G__12873 = (i__12345_12868 + (1));
seq__12341_12865 = G__12870;
chunk__12343_12866 = G__12871;
count__12344_12867 = G__12872;
i__12345_12868 = G__12873;
continue;
} else {
var G__12874 = seq__12341_12865;
var G__12875 = chunk__12343_12866;
var G__12876 = count__12344_12867;
var G__12877 = (i__12345_12868 + (1));
seq__12341_12865 = G__12874;
chunk__12343_12866 = G__12875;
count__12344_12867 = G__12876;
i__12345_12868 = G__12877;
continue;
}
} else {
var temp__5804__auto___12878 = cljs.core.seq(seq__12341_12865);
if(temp__5804__auto___12878){
var seq__12341_12879__$1 = temp__5804__auto___12878;
if(cljs.core.chunked_seq_QMARK_(seq__12341_12879__$1)){
var c__5525__auto___12880 = cljs.core.chunk_first(seq__12341_12879__$1);
var G__12881 = cljs.core.chunk_rest(seq__12341_12879__$1);
var G__12882 = c__5525__auto___12880;
var G__12883 = cljs.core.count(c__5525__auto___12880);
var G__12884 = (0);
seq__12341_12865 = G__12881;
chunk__12343_12866 = G__12882;
count__12344_12867 = G__12883;
i__12345_12868 = G__12884;
continue;
} else {
var child_12885 = cljs.core.first(seq__12341_12879__$1);
if(cljs.core.truth_(child_12885)){
node.appendChild(child_12885);


var G__12887 = cljs.core.next(seq__12341_12879__$1);
var G__12888 = null;
var G__12889 = (0);
var G__12890 = (0);
seq__12341_12865 = G__12887;
chunk__12343_12866 = G__12888;
count__12344_12867 = G__12889;
i__12345_12868 = G__12890;
continue;
} else {
var G__12891 = cljs.core.next(seq__12341_12879__$1);
var G__12892 = null;
var G__12893 = (0);
var G__12894 = (0);
seq__12341_12865 = G__12891;
chunk__12343_12866 = G__12892;
count__12344_12867 = G__12893;
i__12345_12868 = G__12894;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12864);
}
}


var G__12895 = seq__12299_12857;
var G__12896 = chunk__12301_12858;
var G__12897 = count__12302_12859;
var G__12898 = (i__12303_12860 + (1));
seq__12299_12857 = G__12895;
chunk__12301_12858 = G__12896;
count__12302_12859 = G__12897;
i__12303_12860 = G__12898;
continue;
} else {
var G__12899 = seq__12299_12857;
var G__12900 = chunk__12301_12858;
var G__12901 = count__12302_12859;
var G__12902 = (i__12303_12860 + (1));
seq__12299_12857 = G__12899;
chunk__12301_12858 = G__12900;
count__12302_12859 = G__12901;
i__12303_12860 = G__12902;
continue;
}
} else {
var temp__5804__auto___12903 = cljs.core.seq(seq__12299_12857);
if(temp__5804__auto___12903){
var seq__12299_12904__$1 = temp__5804__auto___12903;
if(cljs.core.chunked_seq_QMARK_(seq__12299_12904__$1)){
var c__5525__auto___12905 = cljs.core.chunk_first(seq__12299_12904__$1);
var G__12906 = cljs.core.chunk_rest(seq__12299_12904__$1);
var G__12907 = c__5525__auto___12905;
var G__12908 = cljs.core.count(c__5525__auto___12905);
var G__12909 = (0);
seq__12299_12857 = G__12906;
chunk__12301_12858 = G__12907;
count__12302_12859 = G__12908;
i__12303_12860 = G__12909;
continue;
} else {
var child_struct_12910 = cljs.core.first(seq__12299_12904__$1);
if((!((child_struct_12910 == null)))){
if(typeof child_struct_12910 === 'string'){
var text_12913 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12913),child_struct_12910].join(''));
} else {
var children_12914 = shadow.dom.svg_node(child_struct_12910);
if(cljs.core.seq_QMARK_(children_12914)){
var seq__12374_12915 = cljs.core.seq(children_12914);
var chunk__12377_12916 = null;
var count__12378_12917 = (0);
var i__12379_12918 = (0);
while(true){
if((i__12379_12918 < count__12378_12917)){
var child_12919 = chunk__12377_12916.cljs$core$IIndexed$_nth$arity$2(null, i__12379_12918);
if(cljs.core.truth_(child_12919)){
node.appendChild(child_12919);


var G__12920 = seq__12374_12915;
var G__12921 = chunk__12377_12916;
var G__12922 = count__12378_12917;
var G__12923 = (i__12379_12918 + (1));
seq__12374_12915 = G__12920;
chunk__12377_12916 = G__12921;
count__12378_12917 = G__12922;
i__12379_12918 = G__12923;
continue;
} else {
var G__12924 = seq__12374_12915;
var G__12925 = chunk__12377_12916;
var G__12926 = count__12378_12917;
var G__12927 = (i__12379_12918 + (1));
seq__12374_12915 = G__12924;
chunk__12377_12916 = G__12925;
count__12378_12917 = G__12926;
i__12379_12918 = G__12927;
continue;
}
} else {
var temp__5804__auto___12928__$1 = cljs.core.seq(seq__12374_12915);
if(temp__5804__auto___12928__$1){
var seq__12374_12930__$1 = temp__5804__auto___12928__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12374_12930__$1)){
var c__5525__auto___12931 = cljs.core.chunk_first(seq__12374_12930__$1);
var G__12932 = cljs.core.chunk_rest(seq__12374_12930__$1);
var G__12933 = c__5525__auto___12931;
var G__12934 = cljs.core.count(c__5525__auto___12931);
var G__12935 = (0);
seq__12374_12915 = G__12932;
chunk__12377_12916 = G__12933;
count__12378_12917 = G__12934;
i__12379_12918 = G__12935;
continue;
} else {
var child_12936 = cljs.core.first(seq__12374_12930__$1);
if(cljs.core.truth_(child_12936)){
node.appendChild(child_12936);


var G__12937 = cljs.core.next(seq__12374_12930__$1);
var G__12938 = null;
var G__12939 = (0);
var G__12940 = (0);
seq__12374_12915 = G__12937;
chunk__12377_12916 = G__12938;
count__12378_12917 = G__12939;
i__12379_12918 = G__12940;
continue;
} else {
var G__12941 = cljs.core.next(seq__12374_12930__$1);
var G__12942 = null;
var G__12943 = (0);
var G__12944 = (0);
seq__12374_12915 = G__12941;
chunk__12377_12916 = G__12942;
count__12378_12917 = G__12943;
i__12379_12918 = G__12944;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12914);
}
}


var G__12945 = cljs.core.next(seq__12299_12904__$1);
var G__12946 = null;
var G__12947 = (0);
var G__12948 = (0);
seq__12299_12857 = G__12945;
chunk__12301_12858 = G__12946;
count__12302_12859 = G__12947;
i__12303_12860 = G__12948;
continue;
} else {
var G__12949 = cljs.core.next(seq__12299_12904__$1);
var G__12950 = null;
var G__12951 = (0);
var G__12952 = (0);
seq__12299_12857 = G__12949;
chunk__12301_12858 = G__12950;
count__12302_12859 = G__12951;
i__12303_12860 = G__12952;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12957 = arguments.length;
var i__5727__auto___12958 = (0);
while(true){
if((i__5727__auto___12958 < len__5726__auto___12957)){
args__5732__auto__.push((arguments[i__5727__auto___12958]));

var G__12959 = (i__5727__auto___12958 + (1));
i__5727__auto___12958 = G__12959;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12419){
var G__12420 = cljs.core.first(seq12419);
var seq12419__$1 = cljs.core.next(seq12419);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12420,seq12419__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
