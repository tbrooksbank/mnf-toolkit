goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__22632 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__22632.cljs$core$IFn$_invoke$arity$1 ? fexpr__22632.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__22632.call(null, channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22633){
var vec__22634 = p__22633;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22634,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__22637 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__22637)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__22637)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__22637)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__22637)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__22637)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22637)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22637)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__22638){
var map__22639 = p__22638;
var map__22639__$1 = cljs.core.__destructure_map(map__22639);
var request = map__22639__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__22640 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__22640,default_headers);

cljs_http.core.apply_response_type_BANG_(G__22640,response_type);

G__22640.setTimeoutInterval(timeout);

G__22640.setWithCredentials(send_credentials);

return G__22640;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__22641){
var map__22642 = p__22641;
var map__22642__$1 = cljs.core.__destructure_map(map__22642);
var request = map__22642__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5002__auto__ = request_method;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__22643 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__22643) : cljs_http.core.error_kw.call(null, G__22643));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_22683 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__22644_22684 = xhr;
G__22644_22684.setProgressEventsEnabled(true);

G__22644_22684.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_22683,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__22644_22684.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_22683,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14562__auto___22685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_22655){
var state_val_22656 = (state_22655[(1)]);
if((state_val_22656 === (1))){
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22655__$1,(2),cancel);
} else {
if((state_val_22656 === (2))){
var inst_22646 = (state_22655[(2)]);
var inst_22647 = xhr.isComplete();
var inst_22648 = cljs.core.not(inst_22647);
var state_22655__$1 = (function (){var statearr_22657 = state_22655;
(statearr_22657[(7)] = inst_22646);

return statearr_22657;
})();
if(inst_22648){
var statearr_22658_22686 = state_22655__$1;
(statearr_22658_22686[(1)] = (3));

} else {
var statearr_22659_22687 = state_22655__$1;
(statearr_22659_22687[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (3))){
var inst_22650 = xhr.abort();
var state_22655__$1 = state_22655;
var statearr_22660_22688 = state_22655__$1;
(statearr_22660_22688[(2)] = inst_22650);

(statearr_22660_22688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (4))){
var state_22655__$1 = state_22655;
var statearr_22661_22689 = state_22655__$1;
(statearr_22661_22689[(2)] = null);

(statearr_22661_22689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (5))){
var inst_22653 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22655__$1,inst_22653);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__14299__auto__ = null;
var cljs_http$core$xhr_$_state_machine__14299__auto____0 = (function (){
var statearr_22662 = [null,null,null,null,null,null,null,null];
(statearr_22662[(0)] = cljs_http$core$xhr_$_state_machine__14299__auto__);

(statearr_22662[(1)] = (1));

return statearr_22662;
});
var cljs_http$core$xhr_$_state_machine__14299__auto____1 = (function (state_22655){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_22655);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e22663){var ex__14302__auto__ = e22663;
var statearr_22664_22690 = state_22655;
(statearr_22664_22690[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_22655[(4)]))){
var statearr_22665_22691 = state_22655;
(statearr_22665_22691[(1)] = cljs.core.first((state_22655[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22692 = state_22655;
state_22655 = G__22692;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__14299__auto__ = function(state_22655){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__14299__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__14299__auto____1.call(this,state_22655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__14299__auto____0;
cljs_http$core$xhr_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__14299__auto____1;
return cljs_http$core$xhr_$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_22666 = f__14563__auto__();
(statearr_22666[(6)] = c__14562__auto___22685);

return statearr_22666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__22667){
var map__22668 = p__22667;
var map__22668__$1 = cljs.core.__destructure_map(map__22668);
var request = map__22668__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22668__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22668__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22668__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22668__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_22693 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_22693], null));

if(cljs.core.truth_(cancel)){
var c__14562__auto___22694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14563__auto__ = (function (){var switch__14298__auto__ = (function (state_22673){
var state_val_22674 = (state_22673[(1)]);
if((state_val_22674 === (1))){
var state_22673__$1 = state_22673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22673__$1,(2),cancel);
} else {
if((state_val_22674 === (2))){
var inst_22670 = (state_22673[(2)]);
var inst_22671 = jsonp.cancel(req_22693);
var state_22673__$1 = (function (){var statearr_22675 = state_22673;
(statearr_22675[(7)] = inst_22670);

return statearr_22675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22673__$1,inst_22671);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__14299__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__14299__auto____0 = (function (){
var statearr_22676 = [null,null,null,null,null,null,null,null];
(statearr_22676[(0)] = cljs_http$core$jsonp_$_state_machine__14299__auto__);

(statearr_22676[(1)] = (1));

return statearr_22676;
});
var cljs_http$core$jsonp_$_state_machine__14299__auto____1 = (function (state_22673){
while(true){
var ret_value__14300__auto__ = (function (){try{while(true){
var result__14301__auto__ = switch__14298__auto__(state_22673);
if(cljs.core.keyword_identical_QMARK_(result__14301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14301__auto__;
}
break;
}
}catch (e22677){var ex__14302__auto__ = e22677;
var statearr_22678_22695 = state_22673;
(statearr_22678_22695[(2)] = ex__14302__auto__);


if(cljs.core.seq((state_22673[(4)]))){
var statearr_22679_22696 = state_22673;
(statearr_22679_22696[(1)] = cljs.core.first((state_22673[(4)])));

} else {
throw ex__14302__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22697 = state_22673;
state_22673 = G__22697;
continue;
} else {
return ret_value__14300__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__14299__auto__ = function(state_22673){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__14299__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__14299__auto____1.call(this,state_22673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__14299__auto____0;
cljs_http$core$jsonp_$_state_machine__14299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__14299__auto____1;
return cljs_http$core$jsonp_$_state_machine__14299__auto__;
})()
})();
var state__14564__auto__ = (function (){var statearr_22680 = f__14563__auto__();
(statearr_22680[(6)] = c__14562__auto___22694);

return statearr_22680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14564__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__22681){
var map__22682 = p__22681;
var map__22682__$1 = cljs.core.__destructure_map(map__22682);
var request = map__22682__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22682__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
