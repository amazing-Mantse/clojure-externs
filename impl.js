// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true, :language-out :ecmascript5}
goog.provide('taoensso.tempura.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
taoensso.tempura.impl.str__GT__QMARK_arg_idx = (function taoensso$tempura$impl$str__GT__QMARK_arg_idx(s){
var G__20419 = s;
switch (G__20419) {
case "%0":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`%0` is invalid, starts at `%1`",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$s,s], null));

break;
case "%1":
return (0);

break;
case "%2":
return (1);

break;
case "%3":
return (2);

break;
case "%4":
return (3);

break;
case "%5":
return (4);

break;
case "%6":
return (5);

break;
case "%7":
return (6);

break;
case "%8":
return (7);

break;
case "%9":
return (8);

break;
default:
return null;

}
});
taoensso.tempura.impl.re_clojure_arg = /%\d/;
/**
 * Checks string for simple Clojure-style (%d) args and returns a vector of
 *   string parts and int arg indexes for later joining.
 */
taoensso.tempura.impl.str__GT_split_args = (function taoensso$tempura$impl$str__GT_split_args(s){
var e_20424 = (function (){try{if(typeof s === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20421){if((e20421 instanceof Error)){
var e_20424 = e20421;
return e_20424;
} else {
throw e20421;

}
}})();
if((e_20424 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",25,"(string? s)",s,e_20424,null);
}

if(cljs.core.not(((taoensso.encore.str_contains_QMARK_(s,"%"))?cljs.core.re_find(taoensso.tempura.impl.re_clojure_arg,s):false))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
var uuid_esc = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var s__$1 = taoensso.encore.str_replace(s,"`%",uuid_esc);
var _QMARK_arg_seq = cljs.core.re_seq(taoensso.tempura.impl.re_clojure_arg,s__$1);
if(cljs.core.empty_QMARK_(_QMARK_arg_seq)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.str_replace(s__$1,uuid_esc,"%")], null);
} else {
var arg_idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.tempura.impl.str__GT__QMARK_arg_idx,_QMARK_arg_seq);
var splits = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,taoensso.tempura.impl.re_clojure_arg);
var splits__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s__$2){
return taoensso.encore.str_replace(s__$2,uuid_esc,"%");
}),splits);
var _ = (function (){var z = (function (){try{return (function (arg_idxs_count,splits_count){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_idxs_count,(splits_count - (1)));
});
}catch (e20422){if((e20422 instanceof Error)){
var e = e20422;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e20422;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(taoensso.truss.impl.some_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e20423){if((e20423 instanceof Error)){
var e = e20423;
return e;
} else {
throw e20423;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",37,"(taoensso.truss.impl/some? (fn [arg-idxs-count splits-count] (= arg-idxs-count (- splits-count 1))))",z,e,null);
}
})();
return taoensso.encore.vinterleave_all(splits__$1,arg_idxs);
}
}
});
/**
 * Returns a (fn [args-vector]) which replaces simple Clojure-style (%n) args
 *   in string with `(str (?argval-fn <corresponding-vector-arg>))`.
 *   Optimized for fn runtime, not fn creation.
 */
taoensso.tempura.impl.str__GT_vargs_fn = (function taoensso$tempura$impl$str__GT_vargs_fn(var_args){
var G__20426 = arguments.length;
switch (G__20426) {
case 1:
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(taoensso.tempura.impl.str__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2 = (function (s,argval_fn){
var e_20436 = (function (){try{if(typeof s === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20427){if((e20427 instanceof Error)){
var e_20436 = e20427;
return e_20436;
} else {
throw e20427;

}
}})();
if((e_20436 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",53,"(string? s)",s,e_20436,null);
}

var parts = taoensso.tempura.impl.str__GT_split_args(s);
var argval_fn__$1 = (function (){var or__4185__auto__ = argval_fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return taoensso.encore.undefined__GT_nil;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(parts),(1))){
var vec__20428 = parts;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20428,(0),null);
if(typeof p1 === 'string'){
return (function (vargs){
return p1;
});
} else {
if(cljs.core.integer_QMARK_(p1)){
return (function (vargs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vargs,p1);
return (argval_fn__$1.cljs$core$IFn$_invoke$arity$1 ? argval_fn__$1.cljs$core$IFn$_invoke$arity$1(G__20432) : argval_fn__$1.call(null,G__20432));
})());
});
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
return (function (vargs){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
cljs.core.run_BANG_((function (p){
if(typeof p === 'string'){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,p);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(sb,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vargs,p);
return (argval_fn__$1.cljs$core$IFn$_invoke$arity$1 ? argval_fn__$1.cljs$core$IFn$_invoke$arity$1(G__20434) : argval_fn__$1.call(null,G__20434));
})()));
}
}),parts);

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
});
}
}));

(taoensso.tempura.impl.str__GT_vargs_fn.cljs$lang$maxFixedArity = 2);

taoensso.tempura.impl.mapv_nested = (function taoensso$tempura$impl$mapv_nested(f,v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function taoensso$tempura$impl$mapv_nested_$_f1(in$){
if(cljs.core.vector_QMARK_(in$)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso$tempura$impl$mapv_nested_$_f1,in$);
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(in$) : f.call(null,in$));
}
}),v);
});
taoensso.tempura.impl.reducev_nested = (function taoensso$tempura$impl$reducev_nested(rf,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$tempura$impl$reducev_nested_$_rf1(acc,in$){
if(cljs.core.vector_QMARK_(in$)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$tempura$impl$reducev_nested_$_rf1,cljs.core.PersistentVector.EMPTY,in$));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
}
}),cljs.core.PersistentVector.EMPTY,v);
});
taoensso.tempura.impl.node_paths = (function taoensso$tempura$impl$node_paths(var_args){
var G__20439 = arguments.length;
switch (G__20439) {
case 1:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3(cljs.core.associative_QMARK_,m,null);
}));

(taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,m,null);
}));

(taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__4185__auto__ = basis;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.not((node_pred.cljs$core$IFn$_invoke$arity$1 ? node_pred.cljs$core$IFn$_invoke$arity$1(v) : node_pred.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(basis__$1,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
} else {
var paths_from_basis = taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$3(node_pred,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basis__$1,k));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,paths_from_basis);
}
}),cljs.core.PersistentVector.EMPTY,m);
}));

(taoensso.tempura.impl.node_paths.cljs$lang$maxFixedArity = 3);

/**
 * Returns a (fn [args-vector]) which replaces simple Clojure-style (%n) arg
 *   elements with `(?argval-fn <corresponding-vector-arg>)`.
 *   Optimized for fn runtime, not fn creation.
 */
taoensso.tempura.impl.vec__GT_vargs_fn = (function taoensso$tempura$impl$vec__GT_vargs_fn(var_args){
var G__20442 = arguments.length;
switch (G__20442) {
case 1:
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$1 = (function (v){
return taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(taoensso.tempura.impl.vec__GT_vargs_fn.cljs$core$IFn$_invoke$arity$2 = (function (v,argval_fn){
var e_20446 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20443){if((e20443 instanceof Error)){
var e_20446 = e20443;
return e_20446;
} else {
throw e20443;

}
}})();
if((e_20446 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",146,"(vector? v)",v,e_20446,null);
}

var node_paths = taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$1(v);
var idxs__GT_arg_idxs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var el = cljs.core.peek(in$);
if((!((el instanceof cljs.core.Symbol)))){
return acc;
} else {
var temp__5733__auto__ = taoensso.tempura.impl.str__GT__QMARK_arg_idx(cljs.core.name(el));
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
return cljs.core.assoc_in(acc,cljs.core.pop(in$),idx);
} else {
return acc;
}
}
}),cljs.core.PersistentArrayMap.EMPTY,node_paths);
if(cljs.core.empty_QMARK_(idxs__GT_arg_idxs)){
return (function (vargs){
return v;
});
} else {
var argval_fn__$1 = (function (){var or__4185__auto__ = argval_fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.identity;
}
})();
return (function (vargs){
return cljs.core.reduce_kv((function taoensso$tempura$impl$rf1(acc,k,v__$1){
if(cljs.core.map_QMARK_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.reduce_kv(taoensso$tempura$impl$rf1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k),v__$1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(function (){var G__20444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vargs,v__$1);
return (argval_fn__$1.cljs$core$IFn$_invoke$arity$1 ? argval_fn__$1.cljs$core$IFn$_invoke$arity$1(G__20444) : argval_fn__$1.call(null,G__20444));
})());
}
}),v,idxs__GT_arg_idxs);
});
}
}));

(taoensso.tempura.impl.vec__GT_vargs_fn.cljs$lang$maxFixedArity = 2);

taoensso.tempura.impl.vec_explode_args_in_strs = (function taoensso$tempura$impl$vec_explode_args_in_strs(v){
var e_20448 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20447){if((e20447 instanceof Error)){
var e_20448 = e20447;
return e_20448;
} else {
throw e20447;

}
}})();
if((e_20448 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",188,"(vector? v)",v,e_20448,null);
}

return taoensso.tempura.impl.reducev_nested((function (acc,in$){
if((!(typeof in$ === 'string'))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,in$);
} else {
var parts = taoensso.tempura.impl.str__GT_split_args(in$);
var parts__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
if(typeof p === 'string'){
return p;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p + (1)))].join(''));
}
}),parts);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,parts__$1);
}
}),v);
});
taoensso.tempura.impl.str__GT_split_styles = (function taoensso$tempura$impl$str__GT_split_styles(s){
var e_20456 = (function (){try{if(typeof s === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20451){if((e20451 instanceof Error)){
var e_20456 = e20451;
return e_20456;
} else {
throw e20451;

}
}})();
if((e_20456 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",206,"(string? s)",s,e_20456,null);
}

var matches_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var replace_matches = (function (s__$1,regex,tag){
return taoensso.encore.str_replace(s__$1,regex,(function (p__20452){
var vec__20453 = p__20452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20453,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20453,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20453,(2),null);
var uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
matches_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(matches_.cljs$core$IDeref$_deref$arity$1(null),uuid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,content], null)));

return uuid;
}));
});
var uuid_esc_STAR_ = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var uuid_esc_ = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var uuid_esc_tilde = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var s__$1 = taoensso.encore.str_replace(s,"`*",uuid_esc_STAR_);
var s__$2 = taoensso.encore.str_replace(s__$1,"`_",uuid_esc_);
var s__$3 = taoensso.encore.str_replace(s__$2,"`~",uuid_esc_tilde);
var s__$4 = replace_matches(s__$3,/(\*\*)([^\*\r\n]+)\1/,cljs.core.cst$kw$strong);
var s__$5 = replace_matches(s__$4,/(__)([^_\r\n]+)\1/,cljs.core.cst$kw$b);
var s__$6 = replace_matches(s__$5,/(\*)([^\*\r\n]+)\1/,cljs.core.cst$kw$em);
var s__$7 = replace_matches(s__$6,/(_)([^_\r\n]+)\1/,cljs.core.cst$kw$i);
var s__$8 = replace_matches(s__$7,/(~~)([^~\r\n]+)\1/,cljs.core.cst$kw$s);
var s__$9 = taoensso.encore.str_replace(s__$8,uuid_esc_STAR_,"*");
var s__$10 = taoensso.encore.str_replace(s__$9,uuid_esc_,"_");
var s__$11 = taoensso.encore.str_replace(s__$10,uuid_esc_tilde,"~");
var matches = cljs.core.deref(matches_);
if(cljs.core.empty_QMARK_(matches)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$11], null);
} else {
var ordered_match_ks = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__20449_SHARP_){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2(s__$11,p1__20449_SHARP_);
}),cljs.core.keys(matches));
var ordered_match_vs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20450_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches,p1__20450_SHARP_);
}),ordered_match_ks);
var splits = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$11,cljs.core.re_pattern(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",ordered_match_ks)));
return taoensso.encore.vinterleave_all(splits,ordered_match_vs);
}
});
/**
 * ["foo"] -> [:span "foo"] as a convenience.
 */
taoensso.tempura.impl.vec__GT_vtag = (function taoensso$tempura$impl$vec__GT_vtag(v){
var e_20461 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20457){if((e20457 instanceof Error)){
var e_20461 = e20457;
return e_20461;
} else {
throw e20457;

}
}})();
if((e_20461 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",255,"(vector? v)",v,e_20461,null);
}

var vec__20458 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20458,(0),null);
if((!((v1 instanceof cljs.core.Keyword)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null),v);
} else {
return v;
}
});
taoensso.tempura.impl.vec_explode_styles_in_strs = (function taoensso$tempura$impl$vec_explode_styles_in_strs(var_args){
var G__20463 = arguments.length;
switch (G__20463) {
case 1:
return taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$1 = (function (v){
return taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$2(v,taoensso.tempura.impl.str__GT_split_styles);
}));

(taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$core$IFn$_invoke$arity$2 = (function (v,str_splitter){
var e_20466 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20464){if((e20464 instanceof Error)){
var e_20466 = e20464;
return e_20466;
} else {
throw e20464;

}
}})();
if((e_20466 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",269,"(vector? v)",v,e_20466,null);
}

return taoensso.tempura.impl.reducev_nested((function (acc,in$){
if((!(typeof in$ === 'string'))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,in$);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,(str_splitter.cljs$core$IFn$_invoke$arity$1 ? str_splitter.cljs$core$IFn$_invoke$arity$1(in$) : str_splitter.call(null,in$)));
}
}),v);
}));

(taoensso.tempura.impl.vec_explode_styles_in_strs.cljs$lang$maxFixedArity = 2);

taoensso.tempura.impl.escape_html = (function taoensso$tempura$impl$escape_html(s){
return taoensso.encore.str_replace(taoensso.encore.str_replace(taoensso.encore.str_replace(taoensso.encore.str_replace(s,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
taoensso.tempura.impl.vec_escape_html_in_strs = (function taoensso$tempura$impl$vec_escape_html_in_strs(v){
var e_20468 = (function (){try{if(cljs.core.vector_QMARK_(v)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20467){if((e20467 instanceof Error)){
var e_20468 = e20467;
return e_20468;
} else {
throw e20467;

}
}})();
if((e_20468 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",294,"(vector? v)",v,e_20468,null);
}

return taoensso.tempura.impl.mapv_nested((function (x){
if(typeof x === 'string'){
return taoensso.tempura.impl.escape_html(x);
} else {
return x;
}
}),v);
});
taoensso.tempura.impl.expand_locales = (function (){var expand_locale = taoensso.encore.memoize_((function (locale){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(cljs.core.name(locale)),/[_-]/);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20469_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",p1__20469_SHARP_));
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(cljs.core.butlast,parts)));
}));
var expand_locales_STAR_ = (function (locales){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(locales),(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(locales,(0));
return (expand_locale.cljs$core$IFn$_invoke$arity$1 ? expand_locale.cljs$core$IFn$_invoke$arity$1(G__20470) : expand_locale.call(null,G__20470));
})()], null);
} else {
var vec__20471 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__20474,in$){
var vec__20475 = p__20474;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(1),null);
var lvars = (expand_locale.cljs$core$IFn$_invoke$arity$1 ? expand_locale.cljs$core$IFn$_invoke$arity$1(in$) : expand_locale.call(null,in$));
var lbase = cljs.core.peek(lvars);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(lbase) : seen.call(null,lbase)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,lvars),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,lbase)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),locales);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20471,(1),null);
return acc;
}
});
var expand_locales_STAR__cached = taoensso.encore.memoize_(expand_locales_STAR_);
return (function (cache_QMARK_,locales){
if(cljs.core.truth_(cache_QMARK_)){
return (expand_locales_STAR__cached.cljs$core$IFn$_invoke$arity$1 ? expand_locales_STAR__cached.cljs$core$IFn$_invoke$arity$1(locales) : expand_locales_STAR__cached.call(null,locales));
} else {
return expand_locales_STAR_(locales);
}
});
})();
taoensso.tempura.impl.load_resource = (function taoensso$tempura$impl$load_resource(rname){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Runtime resource loading not possible for cljs dictionaries. See `tempura/load-resource-at-compile-time` as an alternative.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rname,rname], null));
});
taoensso.tempura.impl.compile_dictionary = (function (){var preprocess = (function (dict){
return cljs.core.reduce_kv((function taoensso$tempura$impl$rf1(acc,k,v){
if((v instanceof cljs.core.Keyword)){
var path = taoensso.encore.explode_keyword(v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dict,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path)));
} else {
if(cljs.core.map_QMARK_(v)){
var temp__5733__auto__ = cljs.core.cst$kw$__load_DASH_resource.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5733__auto__)){
var io_res = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,taoensso.tempura.impl.load_resource(io_res));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.reduce_kv(taoensso$tempura$impl$rf1,cljs.core.PersistentArrayMap.EMPTY,v));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);

}
}
}),cljs.core.PersistentArrayMap.EMPTY,dict);
});
var as_paths = taoensso.encore.memoize_((function (dict){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var vec__20478 = in$;
var locale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20478,(0),null);
var normed_locale = clojure.string.lower_case(cljs.core.name(locale));
var in$__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,(0),normed_locale);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1(cljs.core.pop(in$__$1)),cljs.core.peek(in$__$1));
}),cljs.core.PersistentArrayMap.EMPTY,taoensso.tempura.impl.node_paths.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,dict));
}));
var compile_dictionary_STAR_ = taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((1000),(function (dict){
var G__20481 = preprocess(preprocess(dict));
return (as_paths.cljs$core$IFn$_invoke$arity$1 ? as_paths.cljs$core$IFn$_invoke$arity$1(G__20481) : as_paths.call(null,G__20481));
}));
var compile_dictionary_STAR__cached = taoensso.encore.memoize_(compile_dictionary_STAR_);
return (function (cache_QMARK_,dict){
if(cljs.core.truth_(cache_QMARK_)){
return (compile_dictionary_STAR__cached.cljs$core$IFn$_invoke$arity$1 ? compile_dictionary_STAR__cached.cljs$core$IFn$_invoke$arity$1(dict) : compile_dictionary_STAR__cached.call(null,dict));
} else {
return (compile_dictionary_STAR_.cljs$core$IFn$_invoke$arity$1 ? compile_dictionary_STAR_.cljs$core$IFn$_invoke$arity$1(dict) : compile_dictionary_STAR_.call(null,dict));
}
});
})();
taoensso.tempura.impl.vargs = (function taoensso$tempura$impl$vargs(x){
if(cljs.core.map_QMARK_(x)){
var max_idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__20482_SHARP_,p2__20483_SHARP_){
var n1__18412__auto__ = p1__20482_SHARP_;
var n2__18413__auto__ = p2__20483_SHARP_;
if((n1__18412__auto__ < n2__18413__auto__)){
return n2__18413__auto__;
} else {
return n1__18412__auto__;
}
}),(0),cljs.core.keys(x));
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,(0)) == null)){
} else {
throw (new Error(["Assert failed: ","All arg map keys must be +ive non-zero ints","\n","(nil? (get x 0))"].join('')));
}

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (idx){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,idx);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(max_idx + (1))));
} else {
var e = (function (){try{if(cljs.core.vector_QMARK_(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20484){if((e20484 instanceof Error)){
var e = e20484;
return e;
} else {
throw e20484;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.tempura.impl",436,"(vector? x)",x,e,null);
}
}
});
