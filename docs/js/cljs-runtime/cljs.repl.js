goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18818){
var map__18819 = p__18818;
var map__18819__$1 = cljs.core.__destructure_map(map__18819);
var m = map__18819__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18819__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18819__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18825_19201 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18826_19202 = null;
var count__18827_19203 = (0);
var i__18828_19204 = (0);
while(true){
if((i__18828_19204 < count__18827_19203)){
var f_19205 = chunk__18826_19202.cljs$core$IIndexed$_nth$arity$2(null, i__18828_19204);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19205], 0));


var G__19206 = seq__18825_19201;
var G__19207 = chunk__18826_19202;
var G__19208 = count__18827_19203;
var G__19209 = (i__18828_19204 + (1));
seq__18825_19201 = G__19206;
chunk__18826_19202 = G__19207;
count__18827_19203 = G__19208;
i__18828_19204 = G__19209;
continue;
} else {
var temp__5804__auto___19210 = cljs.core.seq(seq__18825_19201);
if(temp__5804__auto___19210){
var seq__18825_19211__$1 = temp__5804__auto___19210;
if(cljs.core.chunked_seq_QMARK_(seq__18825_19211__$1)){
var c__5525__auto___19212 = cljs.core.chunk_first(seq__18825_19211__$1);
var G__19213 = cljs.core.chunk_rest(seq__18825_19211__$1);
var G__19214 = c__5525__auto___19212;
var G__19215 = cljs.core.count(c__5525__auto___19212);
var G__19216 = (0);
seq__18825_19201 = G__19213;
chunk__18826_19202 = G__19214;
count__18827_19203 = G__19215;
i__18828_19204 = G__19216;
continue;
} else {
var f_19217 = cljs.core.first(seq__18825_19211__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19217], 0));


var G__19219 = cljs.core.next(seq__18825_19211__$1);
var G__19220 = null;
var G__19221 = (0);
var G__19222 = (0);
seq__18825_19201 = G__19219;
chunk__18826_19202 = G__19220;
count__18827_19203 = G__19221;
i__18828_19204 = G__19222;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19224 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19224], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19224)))?cljs.core.second(arglists_19224):arglists_19224)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18838_19228 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18839_19229 = null;
var count__18840_19230 = (0);
var i__18841_19231 = (0);
while(true){
if((i__18841_19231 < count__18840_19230)){
var vec__18863_19232 = chunk__18839_19229.cljs$core$IIndexed$_nth$arity$2(null, i__18841_19231);
var name_19233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18863_19232,(0),null);
var map__18866_19234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18863_19232,(1),null);
var map__18866_19235__$1 = cljs.core.__destructure_map(map__18866_19234);
var doc_19236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18866_19235__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18866_19235__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19233], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19237], 0));

if(cljs.core.truth_(doc_19236)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19236], 0));
} else {
}


var G__19240 = seq__18838_19228;
var G__19241 = chunk__18839_19229;
var G__19242 = count__18840_19230;
var G__19243 = (i__18841_19231 + (1));
seq__18838_19228 = G__19240;
chunk__18839_19229 = G__19241;
count__18840_19230 = G__19242;
i__18841_19231 = G__19243;
continue;
} else {
var temp__5804__auto___19245 = cljs.core.seq(seq__18838_19228);
if(temp__5804__auto___19245){
var seq__18838_19246__$1 = temp__5804__auto___19245;
if(cljs.core.chunked_seq_QMARK_(seq__18838_19246__$1)){
var c__5525__auto___19247 = cljs.core.chunk_first(seq__18838_19246__$1);
var G__19248 = cljs.core.chunk_rest(seq__18838_19246__$1);
var G__19249 = c__5525__auto___19247;
var G__19250 = cljs.core.count(c__5525__auto___19247);
var G__19251 = (0);
seq__18838_19228 = G__19248;
chunk__18839_19229 = G__19249;
count__18840_19230 = G__19250;
i__18841_19231 = G__19251;
continue;
} else {
var vec__18876_19252 = cljs.core.first(seq__18838_19246__$1);
var name_19253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876_19252,(0),null);
var map__18879_19254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876_19252,(1),null);
var map__18879_19255__$1 = cljs.core.__destructure_map(map__18879_19254);
var doc_19256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18879_19255__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18879_19255__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19253], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19257], 0));

if(cljs.core.truth_(doc_19256)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19256], 0));
} else {
}


var G__19259 = cljs.core.next(seq__18838_19246__$1);
var G__19260 = null;
var G__19261 = (0);
var G__19262 = (0);
seq__18838_19228 = G__19259;
chunk__18839_19229 = G__19260;
count__18840_19230 = G__19261;
i__18841_19231 = G__19262;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18884 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18885 = null;
var count__18886 = (0);
var i__18887 = (0);
while(true){
if((i__18887 < count__18886)){
var role = chunk__18885.cljs$core$IIndexed$_nth$arity$2(null, i__18887);
var temp__5804__auto___19265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19265__$1)){
var spec_19267 = temp__5804__auto___19265__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19267)], 0));
} else {
}


var G__19268 = seq__18884;
var G__19269 = chunk__18885;
var G__19270 = count__18886;
var G__19271 = (i__18887 + (1));
seq__18884 = G__19268;
chunk__18885 = G__19269;
count__18886 = G__19270;
i__18887 = G__19271;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18884);
if(temp__5804__auto____$1){
var seq__18884__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18884__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18884__$1);
var G__19273 = cljs.core.chunk_rest(seq__18884__$1);
var G__19274 = c__5525__auto__;
var G__19275 = cljs.core.count(c__5525__auto__);
var G__19276 = (0);
seq__18884 = G__19273;
chunk__18885 = G__19274;
count__18886 = G__19275;
i__18887 = G__19276;
continue;
} else {
var role = cljs.core.first(seq__18884__$1);
var temp__5804__auto___19277__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19277__$2)){
var spec_19278 = temp__5804__auto___19277__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19278)], 0));
} else {
}


var G__19279 = cljs.core.next(seq__18884__$1);
var G__19280 = null;
var G__19281 = (0);
var G__19282 = (0);
seq__18884 = G__19279;
chunk__18885 = G__19280;
count__18886 = G__19281;
i__18887 = G__19282;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18914 = datafied_throwable;
var map__18914__$1 = cljs.core.__destructure_map(map__18914);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18914__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18914__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18914__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18915 = cljs.core.last(via);
var map__18915__$1 = cljs.core.__destructure_map(map__18915);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18915__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18915__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18915__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18916 = data;
var map__18916__$1 = cljs.core.__destructure_map(map__18916);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18916__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18916__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18916__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18917 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18917__$1 = cljs.core.__destructure_map(map__18917);
var top_data = map__18917__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18917__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18923 = phase;
var G__18923__$1 = (((G__18923 instanceof cljs.core.Keyword))?G__18923.fqn:null);
switch (G__18923__$1) {
case "read-source":
var map__18926 = data;
var map__18926__$1 = cljs.core.__destructure_map(map__18926);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18927 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18927__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18927,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18927);
var G__18927__$2 = (cljs.core.truth_((function (){var fexpr__18929 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18929.cljs$core$IFn$_invoke$arity$1 ? fexpr__18929.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18929.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18927__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18927__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18927__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18927__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18936 = top_data;
var G__18936__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18936,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18936);
var G__18936__$2 = (cljs.core.truth_((function (){var fexpr__18937 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18937.cljs$core$IFn$_invoke$arity$1 ? fexpr__18937.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18937.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18936__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18936__$1);
var G__18936__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18936__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18936__$2);
var G__18936__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18936__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18936__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18936__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18936__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18946 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18946,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18946,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18946,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18946,(3),null);
var G__18950 = top_data;
var G__18950__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18950,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18950);
var G__18950__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18950__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18950__$1);
var G__18950__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18950__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18950__$2);
var G__18950__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18950__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18950__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18950__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18950__$4;
}

break;
case "execution":
var vec__18961 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18907_SHARP_){
var or__5002__auto__ = (p1__18907_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18969 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18969.cljs$core$IFn$_invoke$arity$1 ? fexpr__18969.cljs$core$IFn$_invoke$arity$1(p1__18907_SHARP_) : fexpr__18969.call(null, p1__18907_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18972 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18972__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18972,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18972);
var G__18972__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18972__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18972__$1);
var G__18972__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18972__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18972__$2);
var G__18972__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18972__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18972__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18972__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18972__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18923__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19108){
var map__19109 = p__19108;
var map__19109__$1 = cljs.core.__destructure_map(map__19109);
var triage_data = map__19109__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19128 = phase;
var G__19128__$1 = (((G__19128 instanceof cljs.core.Keyword))?G__19128.fqn:null);
switch (G__19128__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19132 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19133 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19134 = loc;
var G__19135 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19140_19321 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19141_19322 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19142_19323 = true;
var _STAR_print_fn_STAR__temp_val__19143_19324 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19142_19323);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19143_19324);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18987_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18987_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19141_19322);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19140_19321);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19132,G__19133,G__19134,G__19135) : format.call(null, G__19132,G__19133,G__19134,G__19135));

break;
case "macroexpansion":
var G__19162 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19163 = cause_type;
var G__19164 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19165 = loc;
var G__19166 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19162,G__19163,G__19164,G__19165,G__19166) : format.call(null, G__19162,G__19163,G__19164,G__19165,G__19166));

break;
case "compile-syntax-check":
var G__19167 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19168 = cause_type;
var G__19169 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19170 = loc;
var G__19171 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19167,G__19168,G__19169,G__19170,G__19171) : format.call(null, G__19167,G__19168,G__19169,G__19170,G__19171));

break;
case "compilation":
var G__19172 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19173 = cause_type;
var G__19174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19175 = loc;
var G__19176 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19172,G__19173,G__19174,G__19175,G__19176) : format.call(null, G__19172,G__19173,G__19174,G__19175,G__19176));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19177 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19178 = symbol;
var G__19179 = loc;
var G__19180 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19181_19335 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19182_19336 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19183_19337 = true;
var _STAR_print_fn_STAR__temp_val__19184_19338 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19183_19337);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19184_19338);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18988_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18988_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19182_19336);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19181_19335);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19177,G__19178,G__19179,G__19180) : format.call(null, G__19177,G__19178,G__19179,G__19180));
} else {
var G__19186 = "Execution error%s at %s(%s).\n%s\n";
var G__19187 = cause_type;
var G__19188 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19189 = loc;
var G__19190 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19186,G__19187,G__19188,G__19189,G__19190) : format.call(null, G__19186,G__19187,G__19188,G__19189,G__19190));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19128__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
