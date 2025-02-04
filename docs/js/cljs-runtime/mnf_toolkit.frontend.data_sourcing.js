goog.provide('mnf_toolkit.frontend.data_sourcing');
mnf_toolkit.frontend.data_sourcing.GIST_URL = "https://gist.githubusercontent.com/tbrooksbank/f1a200002e540a23bb6915472198cd7e/raw";
mnf_toolkit.frontend.data_sourcing.load_edn_file = (function mnf_toolkit$frontend$data_sourcing$load_edn_file(file_path,callback){
console.log("Attempting to load:",file_path);

return fetch(file_path).then((function (response){
console.log("Response status:",response.status);

if(cljs.core.truth_(response.ok)){
return response.text();
} else {
throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_path),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response.status)].join('')));
}
})).then((function (text){
console.log("Loaded text from",file_path,":",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),(100)));

var G__13712 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__13712) : callback.call(null, G__13712));
})).catch((function (error){
return console.error("Error loading:",file_path,":",error);
}));
});
mnf_toolkit.frontend.data_sourcing.sheet_id = "1qWimpverGPBkExhEkStyoUYsejExo6iqMW6AdDV0Q_g";
mnf_toolkit.frontend.data_sourcing.clean_google_response = (function mnf_toolkit$frontend$data_sourcing$clean_google_response(response){
return clojure.string.replace_first(clojure.string.replace(clojure.string.replace(response,"/*O_o*/\n",""),"google.visualization.Query.setResponse(",""),");","");
});
mnf_toolkit.frontend.data_sourcing.parse_google_response = (function mnf_toolkit$frontend$data_sourcing$parse_google_response(response){
try{var cleaned_json = mnf_toolkit.frontend.data_sourcing.clean_google_response(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response));
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(cleaned_json),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var rows = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"rows","rows",850049680)], null));
var date_cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.second(rows),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null));
var formatted_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(date_cell,new cljs.core.Keyword(null,"v","v",21465059));
var teams_final_cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),new cljs.core.Keyword(null,"c","c",-1763192079),(3),new cljs.core.Keyword(null,"v","v",21465059)], null));
var team1_bibs_flag = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),new cljs.core.Keyword(null,"c","c",-1763192079),(0),new cljs.core.Keyword(null,"v","v",21465059)], null));
var team1_railway_flag = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),new cljs.core.Keyword(null,"c","c",-1763192079),(0),new cljs.core.Keyword(null,"v","v",21465059)], null));
var team2_bibs_flag = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),new cljs.core.Keyword(null,"c","c",-1763192079),(1),new cljs.core.Keyword(null,"v","v",21465059)], null));
var team2_railway_flag = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),new cljs.core.Keyword(null,"c","c",-1763192079),(1),new cljs.core.Keyword(null,"v","v",21465059)], null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13713_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__13713_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(0),new cljs.core.Keyword(null,"v","v",21465059)], null));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.rest(rows)))),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416),team1_bibs_flag,new cljs.core.Keyword(null,"Railway","Railway",453188964),team1_railway_flag], null),new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13714_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__13714_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(1),new cljs.core.Keyword(null,"v","v",21465059)], null));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cljs.core.rest(rows)))),new cljs.core.Keyword(null,"Bibs","Bibs",-336523416),team2_bibs_flag,new cljs.core.Keyword(null,"Railway","Railway",453188964),team2_railway_flag], null),new cljs.core.Keyword(null,"match-date","match-date",-652150414),formatted_date,new cljs.core.Keyword(null,"teams-finalised","teams-finalised",-1213879732),teams_final_cell], null);
}catch (e13715){if((e13715 instanceof Error)){
var e = e13715;
console.error("Error during parsing:",e);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"Bibs","Bibs",-336523416),null,new cljs.core.Keyword(null,"Railway","Railway",453188964),null], null),new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"Bibs","Bibs",-336523416),null,new cljs.core.Keyword(null,"Railway","Railway",453188964),null], null),new cljs.core.Keyword(null,"match-date","match-date",-652150414),null], null);
} else {
throw e13715;

}
}});

//# sourceMappingURL=mnf_toolkit.frontend.data_sourcing.js.map
