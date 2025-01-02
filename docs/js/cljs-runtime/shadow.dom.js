goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12642 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_12642(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12645 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_12645(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11715 = coll;
var G__11716 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11715,G__11716) : shadow.dom.lazy_native_coll_seq.call(null, G__11715,G__11716));
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
var G__11741 = arguments.length;
switch (G__11741) {
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
var G__11744 = arguments.length;
switch (G__11744) {
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
var G__11746 = arguments.length;
switch (G__11746) {
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
var G__11760 = arguments.length;
switch (G__11760) {
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
var G__11771 = arguments.length;
switch (G__11771) {
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
var G__11783 = arguments.length;
switch (G__11783) {
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
}catch (e11824){if((e11824 instanceof Object)){
var e = e11824;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11824;

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
var seq__11831 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11832 = null;
var count__11833 = (0);
var i__11834 = (0);
while(true){
if((i__11834 < count__11833)){
var el = chunk__11832.cljs$core$IIndexed$_nth$arity$2(null, i__11834);
var handler_12678__$1 = ((function (seq__11831,chunk__11832,count__11833,i__11834,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11831,chunk__11832,count__11833,i__11834,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12678__$1);


var G__12683 = seq__11831;
var G__12684 = chunk__11832;
var G__12685 = count__11833;
var G__12686 = (i__11834 + (1));
seq__11831 = G__12683;
chunk__11832 = G__12684;
count__11833 = G__12685;
i__11834 = G__12686;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11831);
if(temp__5804__auto__){
var seq__11831__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11831__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11831__$1);
var G__12693 = cljs.core.chunk_rest(seq__11831__$1);
var G__12694 = c__5525__auto__;
var G__12695 = cljs.core.count(c__5525__auto__);
var G__12696 = (0);
seq__11831 = G__12693;
chunk__11832 = G__12694;
count__11833 = G__12695;
i__11834 = G__12696;
continue;
} else {
var el = cljs.core.first(seq__11831__$1);
var handler_12697__$1 = ((function (seq__11831,chunk__11832,count__11833,i__11834,el,seq__11831__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11831,chunk__11832,count__11833,i__11834,el,seq__11831__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12697__$1);


var G__12700 = cljs.core.next(seq__11831__$1);
var G__12701 = null;
var G__12702 = (0);
var G__12703 = (0);
seq__11831 = G__12700;
chunk__11832 = G__12701;
count__11833 = G__12702;
i__11834 = G__12703;
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
var G__11844 = arguments.length;
switch (G__11844) {
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
var seq__11845 = cljs.core.seq(events);
var chunk__11846 = null;
var count__11847 = (0);
var i__11848 = (0);
while(true){
if((i__11848 < count__11847)){
var vec__11855 = chunk__11846.cljs$core$IIndexed$_nth$arity$2(null, i__11848);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11855,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12713 = seq__11845;
var G__12714 = chunk__11846;
var G__12715 = count__11847;
var G__12716 = (i__11848 + (1));
seq__11845 = G__12713;
chunk__11846 = G__12714;
count__11847 = G__12715;
i__11848 = G__12716;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11845);
if(temp__5804__auto__){
var seq__11845__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11845__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11845__$1);
var G__12718 = cljs.core.chunk_rest(seq__11845__$1);
var G__12719 = c__5525__auto__;
var G__12720 = cljs.core.count(c__5525__auto__);
var G__12721 = (0);
seq__11845 = G__12718;
chunk__11846 = G__12719;
count__11847 = G__12720;
i__11848 = G__12721;
continue;
} else {
var vec__11858 = cljs.core.first(seq__11845__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11858,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11858,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12723 = cljs.core.next(seq__11845__$1);
var G__12724 = null;
var G__12725 = (0);
var G__12726 = (0);
seq__11845 = G__12723;
chunk__11846 = G__12724;
count__11847 = G__12725;
i__11848 = G__12726;
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
var seq__11861 = cljs.core.seq(styles);
var chunk__11862 = null;
var count__11863 = (0);
var i__11864 = (0);
while(true){
if((i__11864 < count__11863)){
var vec__11871 = chunk__11862.cljs$core$IIndexed$_nth$arity$2(null, i__11864);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11871,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11871,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12728 = seq__11861;
var G__12729 = chunk__11862;
var G__12730 = count__11863;
var G__12731 = (i__11864 + (1));
seq__11861 = G__12728;
chunk__11862 = G__12729;
count__11863 = G__12730;
i__11864 = G__12731;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11861);
if(temp__5804__auto__){
var seq__11861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11861__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11861__$1);
var G__12733 = cljs.core.chunk_rest(seq__11861__$1);
var G__12734 = c__5525__auto__;
var G__12735 = cljs.core.count(c__5525__auto__);
var G__12736 = (0);
seq__11861 = G__12733;
chunk__11862 = G__12734;
count__11863 = G__12735;
i__11864 = G__12736;
continue;
} else {
var vec__11874 = cljs.core.first(seq__11861__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11874,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12737 = cljs.core.next(seq__11861__$1);
var G__12738 = null;
var G__12739 = (0);
var G__12740 = (0);
seq__11861 = G__12737;
chunk__11862 = G__12738;
count__11863 = G__12739;
i__11864 = G__12740;
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
var G__11879_12741 = key;
var G__11879_12742__$1 = (((G__11879_12741 instanceof cljs.core.Keyword))?G__11879_12741.fqn:null);
switch (G__11879_12742__$1) {
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
var ks_12747 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12747,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12747,"aria-");
}
})())){
el.setAttribute(ks_12747,value);
} else {
(el[ks_12747] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11892){
var map__11893 = p__11892;
var map__11893__$1 = cljs.core.__destructure_map(map__11893);
var props = map__11893__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11893__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11894 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11897 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11897,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11897;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11909 = arguments.length;
switch (G__11909) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11917){
var vec__11919 = p__11917;
var seq__11920 = cljs.core.seq(vec__11919);
var first__11921 = cljs.core.first(seq__11920);
var seq__11920__$1 = cljs.core.next(seq__11920);
var nn = first__11921;
var first__11921__$1 = cljs.core.first(seq__11920__$1);
var seq__11920__$2 = cljs.core.next(seq__11920__$1);
var np = first__11921__$1;
var nc = seq__11920__$2;
var node = vec__11919;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11922 = nn;
var G__11923 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11922,G__11923) : create_fn.call(null, G__11922,G__11923));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11924 = nn;
var G__11925 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11924,G__11925) : create_fn.call(null, G__11924,G__11925));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11938 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11938,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11938,(1),null);
var seq__11941_12777 = cljs.core.seq(node_children);
var chunk__11942_12778 = null;
var count__11943_12779 = (0);
var i__11944_12780 = (0);
while(true){
if((i__11944_12780 < count__11943_12779)){
var child_struct_12781 = chunk__11942_12778.cljs$core$IIndexed$_nth$arity$2(null, i__11944_12780);
var children_12782 = shadow.dom.dom_node(child_struct_12781);
if(cljs.core.seq_QMARK_(children_12782)){
var seq__11974_12785 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12782));
var chunk__11976_12786 = null;
var count__11977_12787 = (0);
var i__11978_12788 = (0);
while(true){
if((i__11978_12788 < count__11977_12787)){
var child_12789 = chunk__11976_12786.cljs$core$IIndexed$_nth$arity$2(null, i__11978_12788);
if(cljs.core.truth_(child_12789)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12789);


var G__12790 = seq__11974_12785;
var G__12791 = chunk__11976_12786;
var G__12792 = count__11977_12787;
var G__12793 = (i__11978_12788 + (1));
seq__11974_12785 = G__12790;
chunk__11976_12786 = G__12791;
count__11977_12787 = G__12792;
i__11978_12788 = G__12793;
continue;
} else {
var G__12794 = seq__11974_12785;
var G__12795 = chunk__11976_12786;
var G__12796 = count__11977_12787;
var G__12797 = (i__11978_12788 + (1));
seq__11974_12785 = G__12794;
chunk__11976_12786 = G__12795;
count__11977_12787 = G__12796;
i__11978_12788 = G__12797;
continue;
}
} else {
var temp__5804__auto___12798 = cljs.core.seq(seq__11974_12785);
if(temp__5804__auto___12798){
var seq__11974_12799__$1 = temp__5804__auto___12798;
if(cljs.core.chunked_seq_QMARK_(seq__11974_12799__$1)){
var c__5525__auto___12800 = cljs.core.chunk_first(seq__11974_12799__$1);
var G__12802 = cljs.core.chunk_rest(seq__11974_12799__$1);
var G__12803 = c__5525__auto___12800;
var G__12804 = cljs.core.count(c__5525__auto___12800);
var G__12805 = (0);
seq__11974_12785 = G__12802;
chunk__11976_12786 = G__12803;
count__11977_12787 = G__12804;
i__11978_12788 = G__12805;
continue;
} else {
var child_12807 = cljs.core.first(seq__11974_12799__$1);
if(cljs.core.truth_(child_12807)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12807);


var G__12809 = cljs.core.next(seq__11974_12799__$1);
var G__12810 = null;
var G__12811 = (0);
var G__12812 = (0);
seq__11974_12785 = G__12809;
chunk__11976_12786 = G__12810;
count__11977_12787 = G__12811;
i__11978_12788 = G__12812;
continue;
} else {
var G__12813 = cljs.core.next(seq__11974_12799__$1);
var G__12814 = null;
var G__12815 = (0);
var G__12816 = (0);
seq__11974_12785 = G__12813;
chunk__11976_12786 = G__12814;
count__11977_12787 = G__12815;
i__11978_12788 = G__12816;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12782);
}


var G__12819 = seq__11941_12777;
var G__12820 = chunk__11942_12778;
var G__12821 = count__11943_12779;
var G__12822 = (i__11944_12780 + (1));
seq__11941_12777 = G__12819;
chunk__11942_12778 = G__12820;
count__11943_12779 = G__12821;
i__11944_12780 = G__12822;
continue;
} else {
var temp__5804__auto___12824 = cljs.core.seq(seq__11941_12777);
if(temp__5804__auto___12824){
var seq__11941_12825__$1 = temp__5804__auto___12824;
if(cljs.core.chunked_seq_QMARK_(seq__11941_12825__$1)){
var c__5525__auto___12826 = cljs.core.chunk_first(seq__11941_12825__$1);
var G__12827 = cljs.core.chunk_rest(seq__11941_12825__$1);
var G__12828 = c__5525__auto___12826;
var G__12829 = cljs.core.count(c__5525__auto___12826);
var G__12830 = (0);
seq__11941_12777 = G__12827;
chunk__11942_12778 = G__12828;
count__11943_12779 = G__12829;
i__11944_12780 = G__12830;
continue;
} else {
var child_struct_12831 = cljs.core.first(seq__11941_12825__$1);
var children_12832 = shadow.dom.dom_node(child_struct_12831);
if(cljs.core.seq_QMARK_(children_12832)){
var seq__11991_12834 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12832));
var chunk__11993_12835 = null;
var count__11994_12836 = (0);
var i__11995_12837 = (0);
while(true){
if((i__11995_12837 < count__11994_12836)){
var child_12842 = chunk__11993_12835.cljs$core$IIndexed$_nth$arity$2(null, i__11995_12837);
if(cljs.core.truth_(child_12842)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12842);


var G__12843 = seq__11991_12834;
var G__12844 = chunk__11993_12835;
var G__12845 = count__11994_12836;
var G__12846 = (i__11995_12837 + (1));
seq__11991_12834 = G__12843;
chunk__11993_12835 = G__12844;
count__11994_12836 = G__12845;
i__11995_12837 = G__12846;
continue;
} else {
var G__12851 = seq__11991_12834;
var G__12852 = chunk__11993_12835;
var G__12853 = count__11994_12836;
var G__12854 = (i__11995_12837 + (1));
seq__11991_12834 = G__12851;
chunk__11993_12835 = G__12852;
count__11994_12836 = G__12853;
i__11995_12837 = G__12854;
continue;
}
} else {
var temp__5804__auto___12855__$1 = cljs.core.seq(seq__11991_12834);
if(temp__5804__auto___12855__$1){
var seq__11991_12856__$1 = temp__5804__auto___12855__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11991_12856__$1)){
var c__5525__auto___12857 = cljs.core.chunk_first(seq__11991_12856__$1);
var G__12858 = cljs.core.chunk_rest(seq__11991_12856__$1);
var G__12859 = c__5525__auto___12857;
var G__12860 = cljs.core.count(c__5525__auto___12857);
var G__12861 = (0);
seq__11991_12834 = G__12858;
chunk__11993_12835 = G__12859;
count__11994_12836 = G__12860;
i__11995_12837 = G__12861;
continue;
} else {
var child_12864 = cljs.core.first(seq__11991_12856__$1);
if(cljs.core.truth_(child_12864)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12864);


var G__12865 = cljs.core.next(seq__11991_12856__$1);
var G__12866 = null;
var G__12867 = (0);
var G__12868 = (0);
seq__11991_12834 = G__12865;
chunk__11993_12835 = G__12866;
count__11994_12836 = G__12867;
i__11995_12837 = G__12868;
continue;
} else {
var G__12869 = cljs.core.next(seq__11991_12856__$1);
var G__12870 = null;
var G__12871 = (0);
var G__12872 = (0);
seq__11991_12834 = G__12869;
chunk__11993_12835 = G__12870;
count__11994_12836 = G__12871;
i__11995_12837 = G__12872;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12832);
}


var G__12874 = cljs.core.next(seq__11941_12825__$1);
var G__12875 = null;
var G__12876 = (0);
var G__12877 = (0);
seq__11941_12777 = G__12874;
chunk__11942_12778 = G__12875;
count__11943_12779 = G__12876;
i__11944_12780 = G__12877;
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
var seq__12017 = cljs.core.seq(node);
var chunk__12018 = null;
var count__12019 = (0);
var i__12020 = (0);
while(true){
if((i__12020 < count__12019)){
var n = chunk__12018.cljs$core$IIndexed$_nth$arity$2(null, i__12020);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12885 = seq__12017;
var G__12886 = chunk__12018;
var G__12887 = count__12019;
var G__12888 = (i__12020 + (1));
seq__12017 = G__12885;
chunk__12018 = G__12886;
count__12019 = G__12887;
i__12020 = G__12888;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12017);
if(temp__5804__auto__){
var seq__12017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12017__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12017__$1);
var G__12890 = cljs.core.chunk_rest(seq__12017__$1);
var G__12891 = c__5525__auto__;
var G__12892 = cljs.core.count(c__5525__auto__);
var G__12893 = (0);
seq__12017 = G__12890;
chunk__12018 = G__12891;
count__12019 = G__12892;
i__12020 = G__12893;
continue;
} else {
var n = cljs.core.first(seq__12017__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12895 = cljs.core.next(seq__12017__$1);
var G__12896 = null;
var G__12897 = (0);
var G__12898 = (0);
seq__12017 = G__12895;
chunk__12018 = G__12896;
count__12019 = G__12897;
i__12020 = G__12898;
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
var G__12030 = arguments.length;
switch (G__12030) {
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
var G__12036 = arguments.length;
switch (G__12036) {
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
var G__12056 = arguments.length;
switch (G__12056) {
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
var len__5726__auto___12921 = arguments.length;
var i__5727__auto___12922 = (0);
while(true){
if((i__5727__auto___12922 < len__5726__auto___12921)){
args__5732__auto__.push((arguments[i__5727__auto___12922]));

var G__12924 = (i__5727__auto___12922 + (1));
i__5727__auto___12922 = G__12924;
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
var seq__12071_12926 = cljs.core.seq(nodes);
var chunk__12073_12927 = null;
var count__12074_12928 = (0);
var i__12075_12929 = (0);
while(true){
if((i__12075_12929 < count__12074_12928)){
var node_12931 = chunk__12073_12927.cljs$core$IIndexed$_nth$arity$2(null, i__12075_12929);
fragment.appendChild(shadow.dom._to_dom(node_12931));


var G__12932 = seq__12071_12926;
var G__12933 = chunk__12073_12927;
var G__12934 = count__12074_12928;
var G__12935 = (i__12075_12929 + (1));
seq__12071_12926 = G__12932;
chunk__12073_12927 = G__12933;
count__12074_12928 = G__12934;
i__12075_12929 = G__12935;
continue;
} else {
var temp__5804__auto___12936 = cljs.core.seq(seq__12071_12926);
if(temp__5804__auto___12936){
var seq__12071_12937__$1 = temp__5804__auto___12936;
if(cljs.core.chunked_seq_QMARK_(seq__12071_12937__$1)){
var c__5525__auto___12938 = cljs.core.chunk_first(seq__12071_12937__$1);
var G__12939 = cljs.core.chunk_rest(seq__12071_12937__$1);
var G__12940 = c__5525__auto___12938;
var G__12941 = cljs.core.count(c__5525__auto___12938);
var G__12942 = (0);
seq__12071_12926 = G__12939;
chunk__12073_12927 = G__12940;
count__12074_12928 = G__12941;
i__12075_12929 = G__12942;
continue;
} else {
var node_12944 = cljs.core.first(seq__12071_12937__$1);
fragment.appendChild(shadow.dom._to_dom(node_12944));


var G__12945 = cljs.core.next(seq__12071_12937__$1);
var G__12946 = null;
var G__12947 = (0);
var G__12948 = (0);
seq__12071_12926 = G__12945;
chunk__12073_12927 = G__12946;
count__12074_12928 = G__12947;
i__12075_12929 = G__12948;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12067){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12067));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12145_12951 = cljs.core.seq(scripts);
var chunk__12146_12952 = null;
var count__12147_12953 = (0);
var i__12148_12954 = (0);
while(true){
if((i__12148_12954 < count__12147_12953)){
var vec__12167_12955 = chunk__12146_12952.cljs$core$IIndexed$_nth$arity$2(null, i__12148_12954);
var script_tag_12956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12167_12955,(0),null);
var script_body_12957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12167_12955,(1),null);
eval(script_body_12957);


var G__12958 = seq__12145_12951;
var G__12959 = chunk__12146_12952;
var G__12960 = count__12147_12953;
var G__12961 = (i__12148_12954 + (1));
seq__12145_12951 = G__12958;
chunk__12146_12952 = G__12959;
count__12147_12953 = G__12960;
i__12148_12954 = G__12961;
continue;
} else {
var temp__5804__auto___12962 = cljs.core.seq(seq__12145_12951);
if(temp__5804__auto___12962){
var seq__12145_12963__$1 = temp__5804__auto___12962;
if(cljs.core.chunked_seq_QMARK_(seq__12145_12963__$1)){
var c__5525__auto___12964 = cljs.core.chunk_first(seq__12145_12963__$1);
var G__12967 = cljs.core.chunk_rest(seq__12145_12963__$1);
var G__12968 = c__5525__auto___12964;
var G__12969 = cljs.core.count(c__5525__auto___12964);
var G__12970 = (0);
seq__12145_12951 = G__12967;
chunk__12146_12952 = G__12968;
count__12147_12953 = G__12969;
i__12148_12954 = G__12970;
continue;
} else {
var vec__12173_12971 = cljs.core.first(seq__12145_12963__$1);
var script_tag_12972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12173_12971,(0),null);
var script_body_12973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12173_12971,(1),null);
eval(script_body_12973);


var G__12974 = cljs.core.next(seq__12145_12963__$1);
var G__12975 = null;
var G__12976 = (0);
var G__12977 = (0);
seq__12145_12951 = G__12974;
chunk__12146_12952 = G__12975;
count__12147_12953 = G__12976;
i__12148_12954 = G__12977;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12180){
var vec__12181 = p__12180;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12181,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12181,(1),null);
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
var G__12191 = arguments.length;
switch (G__12191) {
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
var seq__12202 = cljs.core.seq(style_keys);
var chunk__12203 = null;
var count__12204 = (0);
var i__12205 = (0);
while(true){
if((i__12205 < count__12204)){
var it = chunk__12203.cljs$core$IIndexed$_nth$arity$2(null, i__12205);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12998 = seq__12202;
var G__12999 = chunk__12203;
var G__13000 = count__12204;
var G__13001 = (i__12205 + (1));
seq__12202 = G__12998;
chunk__12203 = G__12999;
count__12204 = G__13000;
i__12205 = G__13001;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12202);
if(temp__5804__auto__){
var seq__12202__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12202__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12202__$1);
var G__13003 = cljs.core.chunk_rest(seq__12202__$1);
var G__13004 = c__5525__auto__;
var G__13005 = cljs.core.count(c__5525__auto__);
var G__13006 = (0);
seq__12202 = G__13003;
chunk__12203 = G__13004;
count__12204 = G__13005;
i__12205 = G__13006;
continue;
} else {
var it = cljs.core.first(seq__12202__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13008 = cljs.core.next(seq__12202__$1);
var G__13009 = null;
var G__13010 = (0);
var G__13011 = (0);
seq__12202 = G__13008;
chunk__12203 = G__13009;
count__12204 = G__13010;
i__12205 = G__13011;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12210,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12318 = k12210;
var G__12318__$1 = (((G__12318 instanceof cljs.core.Keyword))?G__12318.fqn:null);
switch (G__12318__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12210,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12345){
var vec__12349 = p__12345;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12349,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12349,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12209){
var self__ = this;
var G__12209__$1 = this;
return (new cljs.core.RecordIter((0),G__12209__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12211,other12212){
var self__ = this;
var this12211__$1 = this;
return (((!((other12212 == null)))) && ((((this12211__$1.constructor === other12212.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12211__$1.x,other12212.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12211__$1.y,other12212.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12211__$1.__extmap,other12212.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12210){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12391 = k12210;
var G__12391__$1 = (((G__12391 instanceof cljs.core.Keyword))?G__12391.fqn:null);
switch (G__12391__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12210);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12209){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12393 = cljs.core.keyword_identical_QMARK_;
var expr__12394 = k__5309__auto__;
if(cljs.core.truth_((pred__12393.cljs$core$IFn$_invoke$arity$2 ? pred__12393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12394) : pred__12393.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12394)))){
return (new shadow.dom.Coordinate(G__12209,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12393.cljs$core$IFn$_invoke$arity$2 ? pred__12393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12394) : pred__12393.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12394)))){
return (new shadow.dom.Coordinate(self__.x,G__12209,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12209),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12209){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12209,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12263){
var extmap__5342__auto__ = (function (){var G__12399 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12263,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12263)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12399);
} else {
return G__12399;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12263),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12263),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12411,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12415 = k12411;
var G__12415__$1 = (((G__12415 instanceof cljs.core.Keyword))?G__12415.fqn:null);
switch (G__12415__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12411,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12416){
var vec__12417 = p__12416;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12417,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12410){
var self__ = this;
var G__12410__$1 = this;
return (new cljs.core.RecordIter((0),G__12410__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12412,other12413){
var self__ = this;
var this12412__$1 = this;
return (((!((other12413 == null)))) && ((((this12412__$1.constructor === other12413.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12412__$1.w,other12413.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12412__$1.h,other12413.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12412__$1.__extmap,other12413.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12411){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12420 = k12411;
var G__12420__$1 = (((G__12420 instanceof cljs.core.Keyword))?G__12420.fqn:null);
switch (G__12420__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12411);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12410){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12421 = cljs.core.keyword_identical_QMARK_;
var expr__12422 = k__5309__auto__;
if(cljs.core.truth_((pred__12421.cljs$core$IFn$_invoke$arity$2 ? pred__12421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12422) : pred__12421.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12422)))){
return (new shadow.dom.Size(G__12410,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12421.cljs$core$IFn$_invoke$arity$2 ? pred__12421.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12422) : pred__12421.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12422)))){
return (new shadow.dom.Size(self__.w,G__12410,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12410),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12410){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12410,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12414){
var extmap__5342__auto__ = (function (){var G__12424 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12414,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12414)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12424);
} else {
return G__12424;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12414),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12414),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__13087 = (i + (1));
var G__13088 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13087;
ret = G__13088;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12429){
var vec__12430 = p__12429;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12434 = arguments.length;
switch (G__12434) {
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
var G__13097 = ps;
var G__13098 = (i + (1));
el__$1 = G__13097;
i = G__13098;
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
var vec__12478 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12481_13103 = cljs.core.seq(props);
var chunk__12482_13104 = null;
var count__12483_13105 = (0);
var i__12484_13106 = (0);
while(true){
if((i__12484_13106 < count__12483_13105)){
var vec__12498_13107 = chunk__12482_13104.cljs$core$IIndexed$_nth$arity$2(null, i__12484_13106);
var k_13108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12498_13107,(0),null);
var v_13109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12498_13107,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13108);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13108),v_13109);


var G__13112 = seq__12481_13103;
var G__13113 = chunk__12482_13104;
var G__13114 = count__12483_13105;
var G__13115 = (i__12484_13106 + (1));
seq__12481_13103 = G__13112;
chunk__12482_13104 = G__13113;
count__12483_13105 = G__13114;
i__12484_13106 = G__13115;
continue;
} else {
var temp__5804__auto___13116 = cljs.core.seq(seq__12481_13103);
if(temp__5804__auto___13116){
var seq__12481_13125__$1 = temp__5804__auto___13116;
if(cljs.core.chunked_seq_QMARK_(seq__12481_13125__$1)){
var c__5525__auto___13132 = cljs.core.chunk_first(seq__12481_13125__$1);
var G__13134 = cljs.core.chunk_rest(seq__12481_13125__$1);
var G__13135 = c__5525__auto___13132;
var G__13136 = cljs.core.count(c__5525__auto___13132);
var G__13137 = (0);
seq__12481_13103 = G__13134;
chunk__12482_13104 = G__13135;
count__12483_13105 = G__13136;
i__12484_13106 = G__13137;
continue;
} else {
var vec__12509_13138 = cljs.core.first(seq__12481_13125__$1);
var k_13139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12509_13138,(0),null);
var v_13140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12509_13138,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13139);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13139),v_13140);


var G__13142 = cljs.core.next(seq__12481_13125__$1);
var G__13143 = null;
var G__13144 = (0);
var G__13145 = (0);
seq__12481_13103 = G__13142;
chunk__12482_13104 = G__13143;
count__12483_13105 = G__13144;
i__12484_13106 = G__13145;
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
var vec__12520 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12520,(1),null);
var seq__12524_13153 = cljs.core.seq(node_children);
var chunk__12526_13154 = null;
var count__12527_13155 = (0);
var i__12528_13156 = (0);
while(true){
if((i__12528_13156 < count__12527_13155)){
var child_struct_13157 = chunk__12526_13154.cljs$core$IIndexed$_nth$arity$2(null, i__12528_13156);
if((!((child_struct_13157 == null)))){
if(typeof child_struct_13157 === 'string'){
var text_13158 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13158),child_struct_13157].join(''));
} else {
var children_13159 = shadow.dom.svg_node(child_struct_13157);
if(cljs.core.seq_QMARK_(children_13159)){
var seq__12576_13164 = cljs.core.seq(children_13159);
var chunk__12578_13165 = null;
var count__12579_13166 = (0);
var i__12580_13167 = (0);
while(true){
if((i__12580_13167 < count__12579_13166)){
var child_13168 = chunk__12578_13165.cljs$core$IIndexed$_nth$arity$2(null, i__12580_13167);
if(cljs.core.truth_(child_13168)){
node.appendChild(child_13168);


var G__13173 = seq__12576_13164;
var G__13174 = chunk__12578_13165;
var G__13175 = count__12579_13166;
var G__13176 = (i__12580_13167 + (1));
seq__12576_13164 = G__13173;
chunk__12578_13165 = G__13174;
count__12579_13166 = G__13175;
i__12580_13167 = G__13176;
continue;
} else {
var G__13177 = seq__12576_13164;
var G__13178 = chunk__12578_13165;
var G__13179 = count__12579_13166;
var G__13180 = (i__12580_13167 + (1));
seq__12576_13164 = G__13177;
chunk__12578_13165 = G__13178;
count__12579_13166 = G__13179;
i__12580_13167 = G__13180;
continue;
}
} else {
var temp__5804__auto___13181 = cljs.core.seq(seq__12576_13164);
if(temp__5804__auto___13181){
var seq__12576_13183__$1 = temp__5804__auto___13181;
if(cljs.core.chunked_seq_QMARK_(seq__12576_13183__$1)){
var c__5525__auto___13184 = cljs.core.chunk_first(seq__12576_13183__$1);
var G__13185 = cljs.core.chunk_rest(seq__12576_13183__$1);
var G__13186 = c__5525__auto___13184;
var G__13187 = cljs.core.count(c__5525__auto___13184);
var G__13188 = (0);
seq__12576_13164 = G__13185;
chunk__12578_13165 = G__13186;
count__12579_13166 = G__13187;
i__12580_13167 = G__13188;
continue;
} else {
var child_13190 = cljs.core.first(seq__12576_13183__$1);
if(cljs.core.truth_(child_13190)){
node.appendChild(child_13190);


var G__13191 = cljs.core.next(seq__12576_13183__$1);
var G__13192 = null;
var G__13193 = (0);
var G__13194 = (0);
seq__12576_13164 = G__13191;
chunk__12578_13165 = G__13192;
count__12579_13166 = G__13193;
i__12580_13167 = G__13194;
continue;
} else {
var G__13196 = cljs.core.next(seq__12576_13183__$1);
var G__13197 = null;
var G__13198 = (0);
var G__13199 = (0);
seq__12576_13164 = G__13196;
chunk__12578_13165 = G__13197;
count__12579_13166 = G__13198;
i__12580_13167 = G__13199;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13159);
}
}


var G__13202 = seq__12524_13153;
var G__13203 = chunk__12526_13154;
var G__13204 = count__12527_13155;
var G__13205 = (i__12528_13156 + (1));
seq__12524_13153 = G__13202;
chunk__12526_13154 = G__13203;
count__12527_13155 = G__13204;
i__12528_13156 = G__13205;
continue;
} else {
var G__13208 = seq__12524_13153;
var G__13209 = chunk__12526_13154;
var G__13210 = count__12527_13155;
var G__13211 = (i__12528_13156 + (1));
seq__12524_13153 = G__13208;
chunk__12526_13154 = G__13209;
count__12527_13155 = G__13210;
i__12528_13156 = G__13211;
continue;
}
} else {
var temp__5804__auto___13212 = cljs.core.seq(seq__12524_13153);
if(temp__5804__auto___13212){
var seq__12524_13213__$1 = temp__5804__auto___13212;
if(cljs.core.chunked_seq_QMARK_(seq__12524_13213__$1)){
var c__5525__auto___13216 = cljs.core.chunk_first(seq__12524_13213__$1);
var G__13218 = cljs.core.chunk_rest(seq__12524_13213__$1);
var G__13219 = c__5525__auto___13216;
var G__13220 = cljs.core.count(c__5525__auto___13216);
var G__13221 = (0);
seq__12524_13153 = G__13218;
chunk__12526_13154 = G__13219;
count__12527_13155 = G__13220;
i__12528_13156 = G__13221;
continue;
} else {
var child_struct_13222 = cljs.core.first(seq__12524_13213__$1);
if((!((child_struct_13222 == null)))){
if(typeof child_struct_13222 === 'string'){
var text_13223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13223),child_struct_13222].join(''));
} else {
var children_13224 = shadow.dom.svg_node(child_struct_13222);
if(cljs.core.seq_QMARK_(children_13224)){
var seq__12601_13225 = cljs.core.seq(children_13224);
var chunk__12603_13226 = null;
var count__12604_13227 = (0);
var i__12605_13228 = (0);
while(true){
if((i__12605_13228 < count__12604_13227)){
var child_13229 = chunk__12603_13226.cljs$core$IIndexed$_nth$arity$2(null, i__12605_13228);
if(cljs.core.truth_(child_13229)){
node.appendChild(child_13229);


var G__13230 = seq__12601_13225;
var G__13231 = chunk__12603_13226;
var G__13232 = count__12604_13227;
var G__13233 = (i__12605_13228 + (1));
seq__12601_13225 = G__13230;
chunk__12603_13226 = G__13231;
count__12604_13227 = G__13232;
i__12605_13228 = G__13233;
continue;
} else {
var G__13234 = seq__12601_13225;
var G__13235 = chunk__12603_13226;
var G__13236 = count__12604_13227;
var G__13237 = (i__12605_13228 + (1));
seq__12601_13225 = G__13234;
chunk__12603_13226 = G__13235;
count__12604_13227 = G__13236;
i__12605_13228 = G__13237;
continue;
}
} else {
var temp__5804__auto___13238__$1 = cljs.core.seq(seq__12601_13225);
if(temp__5804__auto___13238__$1){
var seq__12601_13239__$1 = temp__5804__auto___13238__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12601_13239__$1)){
var c__5525__auto___13240 = cljs.core.chunk_first(seq__12601_13239__$1);
var G__13241 = cljs.core.chunk_rest(seq__12601_13239__$1);
var G__13242 = c__5525__auto___13240;
var G__13243 = cljs.core.count(c__5525__auto___13240);
var G__13244 = (0);
seq__12601_13225 = G__13241;
chunk__12603_13226 = G__13242;
count__12604_13227 = G__13243;
i__12605_13228 = G__13244;
continue;
} else {
var child_13246 = cljs.core.first(seq__12601_13239__$1);
if(cljs.core.truth_(child_13246)){
node.appendChild(child_13246);


var G__13247 = cljs.core.next(seq__12601_13239__$1);
var G__13248 = null;
var G__13249 = (0);
var G__13250 = (0);
seq__12601_13225 = G__13247;
chunk__12603_13226 = G__13248;
count__12604_13227 = G__13249;
i__12605_13228 = G__13250;
continue;
} else {
var G__13252 = cljs.core.next(seq__12601_13239__$1);
var G__13253 = null;
var G__13254 = (0);
var G__13255 = (0);
seq__12601_13225 = G__13252;
chunk__12603_13226 = G__13253;
count__12604_13227 = G__13254;
i__12605_13228 = G__13255;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13224);
}
}


var G__13256 = cljs.core.next(seq__12524_13213__$1);
var G__13257 = null;
var G__13258 = (0);
var G__13259 = (0);
seq__12524_13153 = G__13256;
chunk__12526_13154 = G__13257;
count__12527_13155 = G__13258;
i__12528_13156 = G__13259;
continue;
} else {
var G__13260 = cljs.core.next(seq__12524_13213__$1);
var G__13261 = null;
var G__13262 = (0);
var G__13263 = (0);
seq__12524_13153 = G__13260;
chunk__12526_13154 = G__13261;
count__12527_13155 = G__13262;
i__12528_13156 = G__13263;
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
var len__5726__auto___13264 = arguments.length;
var i__5727__auto___13265 = (0);
while(true){
if((i__5727__auto___13265 < len__5726__auto___13264)){
args__5732__auto__.push((arguments[i__5727__auto___13265]));

var G__13266 = (i__5727__auto___13265 + (1));
i__5727__auto___13265 = G__13266;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12618){
var G__12619 = cljs.core.first(seq12618);
var seq12618__$1 = cljs.core.next(seq12618);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12619,seq12618__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
