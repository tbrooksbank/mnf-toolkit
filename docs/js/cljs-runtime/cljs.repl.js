goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18471){
var map__18473 = p__18471;
var map__18473__$1 = cljs.core.__destructure_map(map__18473);
var m = map__18473__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18473__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18473__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18478_18849 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18482_18850 = null;
var count__18483_18851 = (0);
var i__18484_18852 = (0);
while(true){
if((i__18484_18852 < count__18483_18851)){
var f_18854 = chunk__18482_18850.cljs$core$IIndexed$_nth$arity$2(null, i__18484_18852);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18854], 0));


var G__18869 = seq__18478_18849;
var G__18870 = chunk__18482_18850;
var G__18871 = count__18483_18851;
var G__18872 = (i__18484_18852 + (1));
seq__18478_18849 = G__18869;
chunk__18482_18850 = G__18870;
count__18483_18851 = G__18871;
i__18484_18852 = G__18872;
continue;
} else {
var temp__5804__auto___18880 = cljs.core.seq(seq__18478_18849);
if(temp__5804__auto___18880){
var seq__18478_18884__$1 = temp__5804__auto___18880;
if(cljs.core.chunked_seq_QMARK_(seq__18478_18884__$1)){
var c__5525__auto___18889 = cljs.core.chunk_first(seq__18478_18884__$1);
var G__18890 = cljs.core.chunk_rest(seq__18478_18884__$1);
var G__18891 = c__5525__auto___18889;
var G__18892 = cljs.core.count(c__5525__auto___18889);
var G__18893 = (0);
seq__18478_18849 = G__18890;
chunk__18482_18850 = G__18891;
count__18483_18851 = G__18892;
i__18484_18852 = G__18893;
continue;
} else {
var f_18894 = cljs.core.first(seq__18478_18884__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18894], 0));


var G__18895 = cljs.core.next(seq__18478_18884__$1);
var G__18896 = null;
var G__18897 = (0);
var G__18898 = (0);
seq__18478_18849 = G__18895;
chunk__18482_18850 = G__18896;
count__18483_18851 = G__18897;
i__18484_18852 = G__18898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18899], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18899)))?cljs.core.second(arglists_18899):arglists_18899)], 0));
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
var seq__18500_18905 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18501_18906 = null;
var count__18502_18907 = (0);
var i__18503_18908 = (0);
while(true){
if((i__18503_18908 < count__18502_18907)){
var vec__18524_18909 = chunk__18501_18906.cljs$core$IIndexed$_nth$arity$2(null, i__18503_18908);
var name_18910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524_18909,(0),null);
var map__18527_18911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524_18909,(1),null);
var map__18527_18912__$1 = cljs.core.__destructure_map(map__18527_18911);
var doc_18913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18527_18912__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18527_18912__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18910], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18914], 0));

if(cljs.core.truth_(doc_18913)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18913], 0));
} else {
}


var G__18917 = seq__18500_18905;
var G__18918 = chunk__18501_18906;
var G__18919 = count__18502_18907;
var G__18920 = (i__18503_18908 + (1));
seq__18500_18905 = G__18917;
chunk__18501_18906 = G__18918;
count__18502_18907 = G__18919;
i__18503_18908 = G__18920;
continue;
} else {
var temp__5804__auto___18921 = cljs.core.seq(seq__18500_18905);
if(temp__5804__auto___18921){
var seq__18500_18924__$1 = temp__5804__auto___18921;
if(cljs.core.chunked_seq_QMARK_(seq__18500_18924__$1)){
var c__5525__auto___18925 = cljs.core.chunk_first(seq__18500_18924__$1);
var G__18926 = cljs.core.chunk_rest(seq__18500_18924__$1);
var G__18927 = c__5525__auto___18925;
var G__18928 = cljs.core.count(c__5525__auto___18925);
var G__18929 = (0);
seq__18500_18905 = G__18926;
chunk__18501_18906 = G__18927;
count__18502_18907 = G__18928;
i__18503_18908 = G__18929;
continue;
} else {
var vec__18536_18930 = cljs.core.first(seq__18500_18924__$1);
var name_18931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18536_18930,(0),null);
var map__18539_18932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18536_18930,(1),null);
var map__18539_18933__$1 = cljs.core.__destructure_map(map__18539_18932);
var doc_18934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539_18933__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539_18933__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18931], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18935], 0));

if(cljs.core.truth_(doc_18934)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18934], 0));
} else {
}


var G__18936 = cljs.core.next(seq__18500_18924__$1);
var G__18937 = null;
var G__18938 = (0);
var G__18939 = (0);
seq__18500_18905 = G__18936;
chunk__18501_18906 = G__18937;
count__18502_18907 = G__18938;
i__18503_18908 = G__18939;
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

var seq__18545 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18546 = null;
var count__18547 = (0);
var i__18548 = (0);
while(true){
if((i__18548 < count__18547)){
var role = chunk__18546.cljs$core$IIndexed$_nth$arity$2(null, i__18548);
var temp__5804__auto___18941__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18941__$1)){
var spec_18943 = temp__5804__auto___18941__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18943)], 0));
} else {
}


var G__18944 = seq__18545;
var G__18945 = chunk__18546;
var G__18946 = count__18547;
var G__18947 = (i__18548 + (1));
seq__18545 = G__18944;
chunk__18546 = G__18945;
count__18547 = G__18946;
i__18548 = G__18947;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18545);
if(temp__5804__auto____$1){
var seq__18545__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18545__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18545__$1);
var G__18949 = cljs.core.chunk_rest(seq__18545__$1);
var G__18950 = c__5525__auto__;
var G__18951 = cljs.core.count(c__5525__auto__);
var G__18952 = (0);
seq__18545 = G__18949;
chunk__18546 = G__18950;
count__18547 = G__18951;
i__18548 = G__18952;
continue;
} else {
var role = cljs.core.first(seq__18545__$1);
var temp__5804__auto___18953__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18953__$2)){
var spec_18957 = temp__5804__auto___18953__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18957)], 0));
} else {
}


var G__18959 = cljs.core.next(seq__18545__$1);
var G__18960 = null;
var G__18961 = (0);
var G__18962 = (0);
seq__18545 = G__18959;
chunk__18546 = G__18960;
count__18547 = G__18961;
i__18548 = G__18962;
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
var map__18589 = datafied_throwable;
var map__18589__$1 = cljs.core.__destructure_map(map__18589);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18589__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18589__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18590 = cljs.core.last(via);
var map__18590__$1 = cljs.core.__destructure_map(map__18590);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18590__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18590__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18590__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18591 = data;
var map__18591__$1 = cljs.core.__destructure_map(map__18591);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18591__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18591__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18591__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18592 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18592__$1 = cljs.core.__destructure_map(map__18592);
var top_data = map__18592__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18592__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18595 = phase;
var G__18595__$1 = (((G__18595 instanceof cljs.core.Keyword))?G__18595.fqn:null);
switch (G__18595__$1) {
case "read-source":
var map__18596 = data;
var map__18596__$1 = cljs.core.__destructure_map(map__18596);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18596__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18596__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18597 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18597__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18597,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18597);
var G__18597__$2 = (cljs.core.truth_((function (){var fexpr__18600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18600.cljs$core$IFn$_invoke$arity$1 ? fexpr__18600.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18600.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18597__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18597__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18597__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18597__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18602 = top_data;
var G__18602__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18602,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18602);
var G__18602__$2 = (cljs.core.truth_((function (){var fexpr__18616 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18616.cljs$core$IFn$_invoke$arity$1 ? fexpr__18616.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18616.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18602__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18602__$1);
var G__18602__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18602__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18602__$2);
var G__18602__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18602__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18602__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18602__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18602__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18620 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18620,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18620,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18620,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18620,(3),null);
var G__18623 = top_data;
var G__18623__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18623,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18623);
var G__18623__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18623__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18623__$1);
var G__18623__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18623__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18623__$2);
var G__18623__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18623__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18623__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18623__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18623__$4;
}

break;
case "execution":
var vec__18624 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18624,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18624,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18624,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18624,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18585_SHARP_){
var or__5002__auto__ = (p1__18585_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18629 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18629.cljs$core$IFn$_invoke$arity$1 ? fexpr__18629.cljs$core$IFn$_invoke$arity$1(p1__18585_SHARP_) : fexpr__18629.call(null, p1__18585_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18630 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18630__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18630,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18630);
var G__18630__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18630__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18630__$1);
var G__18630__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18630__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18630__$2);
var G__18630__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18630__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18630__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18630__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18630__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18595__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18647){
var map__18648 = p__18647;
var map__18648__$1 = cljs.core.__destructure_map(map__18648);
var triage_data = map__18648__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__18662 = phase;
var G__18662__$1 = (((G__18662 instanceof cljs.core.Keyword))?G__18662.fqn:null);
switch (G__18662__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18677 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18678 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18679 = loc;
var G__18680 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18682_19018 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18683_19019 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18684_19020 = true;
var _STAR_print_fn_STAR__temp_val__18685_19021 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18684_19020);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18685_19021);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18641_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18641_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18683_19019);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18682_19018);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18677,G__18678,G__18679,G__18680) : format.call(null, G__18677,G__18678,G__18679,G__18680));

break;
case "macroexpansion":
var G__18696 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18697 = cause_type;
var G__18698 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18699 = loc;
var G__18700 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18696,G__18697,G__18698,G__18699,G__18700) : format.call(null, G__18696,G__18697,G__18698,G__18699,G__18700));

break;
case "compile-syntax-check":
var G__18702 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18703 = cause_type;
var G__18704 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18705 = loc;
var G__18706 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18702,G__18703,G__18704,G__18705,G__18706) : format.call(null, G__18702,G__18703,G__18704,G__18705,G__18706));

break;
case "compilation":
var G__18707 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18708 = cause_type;
var G__18709 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18710 = loc;
var G__18711 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18707,G__18708,G__18709,G__18710,G__18711) : format.call(null, G__18707,G__18708,G__18709,G__18710,G__18711));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18718 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18719 = symbol;
var G__18720 = loc;
var G__18721 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18725_19042 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18726_19044 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18727_19045 = true;
var _STAR_print_fn_STAR__temp_val__18728_19046 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18727_19045);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18728_19046);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18645_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18645_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18726_19044);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18725_19042);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18718,G__18719,G__18720,G__18721) : format.call(null, G__18718,G__18719,G__18720,G__18721));
} else {
var G__18747 = "Execution error%s at %s(%s).\n%s\n";
var G__18748 = cause_type;
var G__18749 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18750 = loc;
var G__18751 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18747,G__18748,G__18749,G__18750,G__18751) : format.call(null, G__18747,G__18748,G__18749,G__18750,G__18751));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18662__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
