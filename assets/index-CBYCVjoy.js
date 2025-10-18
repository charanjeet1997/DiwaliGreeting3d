(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function bv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var yh={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function SS(){if(s0)return Fo;s0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Fo.Fragment=t,Fo.jsx=n,Fo.jsxs=n,Fo}var r0;function MS(){return r0||(r0=1,yh.exports=SS()),yh.exports}var Ei=MS(),xh={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function ES(){if(o0)return he;o0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function v(N,et,Mt){this.props=N,this.context=et,this.refs=M,this.updater=Mt||E}v.prototype.isReactComponent={},v.prototype.setState=function(N,et){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,et,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=v.prototype;function U(N,et,Mt){this.props=N,this.context=et,this.refs=M,this.updater=Mt||E}var R=U.prototype=new P;R.constructor=U,b(R,v.prototype),R.isPureReactComponent=!0;var F=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(N,et,Mt){var Ut=Mt.ref;return{$$typeof:r,type:N,key:et,ref:Ut!==void 0?Ut:null,props:Mt}}function w(N,et){return D(N.type,et,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function Q(N){var et={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return et[Mt]})}var rt=/\/+/g;function ht(N,et){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):et.toString(36)}function at(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(et){N.status==="pending"&&(N.status="fulfilled",N.value=et)},function(et){N.status==="pending"&&(N.status="rejected",N.reason=et)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,et,Mt,Ut,Ht){var nt=typeof N;(nt==="undefined"||nt==="boolean")&&(N=null);var ut=!1;if(N===null)ut=!0;else switch(nt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(N.$$typeof){case r:case t:ut=!0;break;case g:return ut=N._init,z(ut(N._payload),et,Mt,Ut,Ht)}}if(ut)return Ht=Ht(N),ut=Ut===""?"."+ht(N,0):Ut,F(Ht)?(Mt="",ut!=null&&(Mt=ut.replace(rt,"$&/")+"/"),z(Ht,et,Mt,"",function(Lt){return Lt})):Ht!=null&&(V(Ht)&&(Ht=w(Ht,Mt+(Ht.key==null||N&&N.key===Ht.key?"":(""+Ht.key).replace(rt,"$&/")+"/")+ut)),et.push(Ht)),1;ut=0;var It=Ut===""?".":Ut+":";if(F(N))for(var bt=0;bt<N.length;bt++)Ut=N[bt],nt=It+ht(Ut,bt),ut+=z(Ut,et,Mt,nt,Ht);else if(bt=S(N),typeof bt=="function")for(N=bt.call(N),bt=0;!(Ut=N.next()).done;)Ut=Ut.value,nt=It+ht(Ut,bt++),ut+=z(Ut,et,Mt,nt,Ht);else if(nt==="object"){if(typeof N.then=="function")return z(at(N),et,Mt,Ut,Ht);throw et=String(N),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ut}function q(N,et,Mt){if(N==null)return N;var Ut=[],Ht=0;return z(N,Ut,"","",function(nt){return et.call(Mt,nt,Ht++)}),Ut}function Y(N){if(N._status===-1){var et=N._result;et=et(),et.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=et)}if(N._status===1)return N._result.default;throw N._result}var _t=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},At={map:q,forEach:function(N,et,Mt){q(N,function(){et.apply(this,arguments)},Mt)},count:function(N){var et=0;return q(N,function(){et++}),et},toArray:function(N){return q(N,function(et){return et})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return he.Activity=_,he.Children=At,he.Component=v,he.Fragment=n,he.Profiler=o,he.PureComponent=U,he.StrictMode=a,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,he.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},he.cache=function(N){return function(){return N.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(N,et,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ut=b({},N.props),Ht=N.key;if(et!=null)for(nt in et.key!==void 0&&(Ht=""+et.key),et)!k.call(et,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&et.ref===void 0||(Ut[nt]=et[nt]);var nt=arguments.length-2;if(nt===1)Ut.children=Mt;else if(1<nt){for(var ut=Array(nt),It=0;It<nt;It++)ut[It]=arguments[It+2];Ut.children=ut}return D(N.type,Ht,Ut)},he.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},he.createElement=function(N,et,Mt){var Ut,Ht={},nt=null;if(et!=null)for(Ut in et.key!==void 0&&(nt=""+et.key),et)k.call(et,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(Ht[Ut]=et[Ut]);var ut=arguments.length-2;if(ut===1)Ht.children=Mt;else if(1<ut){for(var It=Array(ut),bt=0;bt<ut;bt++)It[bt]=arguments[bt+2];Ht.children=It}if(N&&N.defaultProps)for(Ut in ut=N.defaultProps,ut)Ht[Ut]===void 0&&(Ht[Ut]=ut[Ut]);return D(N,nt,Ht)},he.createRef=function(){return{current:null}},he.forwardRef=function(N){return{$$typeof:h,render:N}},he.isValidElement=V,he.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Y}},he.memo=function(N,et){return{$$typeof:p,type:N,compare:et===void 0?null:et}},he.startTransition=function(N){var et=O.T,Mt={};O.T=Mt;try{var Ut=N(),Ht=O.S;Ht!==null&&Ht(Mt,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(B,_t)}catch(nt){_t(nt)}finally{et!==null&&Mt.types!==null&&(et.types=Mt.types),O.T=et}},he.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},he.use=function(N){return O.H.use(N)},he.useActionState=function(N,et,Mt){return O.H.useActionState(N,et,Mt)},he.useCallback=function(N,et){return O.H.useCallback(N,et)},he.useContext=function(N){return O.H.useContext(N)},he.useDebugValue=function(){},he.useDeferredValue=function(N,et){return O.H.useDeferredValue(N,et)},he.useEffect=function(N,et){return O.H.useEffect(N,et)},he.useEffectEvent=function(N){return O.H.useEffectEvent(N)},he.useId=function(){return O.H.useId()},he.useImperativeHandle=function(N,et,Mt){return O.H.useImperativeHandle(N,et,Mt)},he.useInsertionEffect=function(N,et){return O.H.useInsertionEffect(N,et)},he.useLayoutEffect=function(N,et){return O.H.useLayoutEffect(N,et)},he.useMemo=function(N,et){return O.H.useMemo(N,et)},he.useOptimistic=function(N,et){return O.H.useOptimistic(N,et)},he.useReducer=function(N,et,Mt){return O.H.useReducer(N,et,Mt)},he.useRef=function(N){return O.H.useRef(N)},he.useState=function(N){return O.H.useState(N)},he.useSyncExternalStore=function(N,et,Mt){return O.H.useSyncExternalStore(N,et,Mt)},he.useTransition=function(){return O.H.useTransition()},he.version="19.2.0",he}var l0;function np(){return l0||(l0=1,xh.exports=ES()),xh.exports}var Ur=np();const TS=bv(Ur);var Sh={exports:{}},Ho={},Mh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function bS(){return c0||(c0=1,(function(r){function t(z,q){var Y=z.length;z.push(q);t:for(;0<Y;){var _t=Y-1>>>1,At=z[_t];if(0<o(At,q))z[_t]=q,z[Y]=At,Y=_t;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var q=z[0],Y=z.pop();if(Y!==q){z[0]=Y;t:for(var _t=0,At=z.length,N=At>>>1;_t<N;){var et=2*(_t+1)-1,Mt=z[et],Ut=et+1,Ht=z[Ut];if(0>o(Mt,Y))Ut<At&&0>o(Ht,Mt)?(z[_t]=Ht,z[Ut]=Y,_t=Ut):(z[_t]=Mt,z[et]=Y,_t=et);else if(Ut<At&&0>o(Ht,Y))z[_t]=Ht,z[Ut]=Y,_t=Ut;else break t}}return q}function o(z,q){var Y=z.sortIndex-q.sortIndex;return Y!==0?Y:z.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();r.unstable_now=function(){return u.now()-h}}var m=[],p=[],g=1,_=null,y=3,S=!1,E=!1,b=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(z){for(var q=n(p);q!==null;){if(q.callback===null)a(p);else if(q.startTime<=z)a(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=n(p)}}function F(z){if(b=!1,R(z),!E)if(n(m)!==null)E=!0,B||(B=!0,Q());else{var q=n(p);q!==null&&at(F,q.startTime-z)}}var B=!1,O=-1,k=5,D=-1;function w(){return M?!0:!(r.unstable_now()-D<k)}function V(){if(M=!1,B){var z=r.unstable_now();D=z;var q=!0;try{t:{E=!1,b&&(b=!1,P(O),O=-1),S=!0;var Y=y;try{e:{for(R(z),_=n(m);_!==null&&!(_.expirationTime>z&&w());){var _t=_.callback;if(typeof _t=="function"){_.callback=null,y=_.priorityLevel;var At=_t(_.expirationTime<=z);if(z=r.unstable_now(),typeof At=="function"){_.callback=At,R(z),q=!0;break e}_===n(m)&&a(m),R(z)}else a(m);_=n(m)}if(_!==null)q=!0;else{var N=n(p);N!==null&&at(F,N.startTime-z),q=!1}}break t}finally{_=null,y=Y,S=!1}q=void 0}}finally{q?Q():B=!1}}}var Q;if(typeof U=="function")Q=function(){U(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ht=rt.port2;rt.port1.onmessage=V,Q=function(){ht.postMessage(null)}}else Q=function(){v(V,0)};function at(z,q){O=v(function(){z(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(z){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var Y=y;y=q;try{return z()}finally{y=Y}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=y;y=z;try{return q()}finally{y=Y}},r.unstable_scheduleCallback=function(z,q,Y){var _t=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_t+Y:_t):Y=_t,z){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=Y+At,z={id:g++,callback:q,priorityLevel:z,startTime:Y,expirationTime:At,sortIndex:-1},Y>_t?(z.sortIndex=Y,t(p,z),n(m)===null&&z===n(p)&&(b?(P(O),O=-1):b=!0,at(F,Y-_t))):(z.sortIndex=At,t(m,z),E||S||(E=!0,B||(B=!0,Q()))),z},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(z){var q=y;return function(){var Y=y;y=q;try{return z.apply(this,arguments)}finally{y=Y}}}})(Eh)),Eh}var u0;function AS(){return u0||(u0=1,Mh.exports=bS()),Mh.exports}var Th={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function RS(){if(f0)return wn;f0=1;var r=np();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},wn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:S}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},wn.requestFormReset=function(m){a.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var h0;function CS(){if(h0)return Th.exports;h0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=RS(),Th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function wS(){if(d0)return Ho;d0=1;var r=AS(),t=np(),n=CS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),e;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var x=!1,A=f.child;A;){if(A===s){x=!0,s=f,l=d;break}if(A===l){x=!0,l=f,s=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===s){x=!0,s=d,l=f;break}if(A===l){x=!0,l=d,s=f;break}A=A.sibling}if(!x)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ht(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return ht(e(i))}catch{}}return null}var at=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},_t=[],At=-1;function N(e){return{current:e}}function et(e){0>At||(e.current=_t[At],_t[At]=null,At--)}function Mt(e,i){At++,_t[At]=e.current,e.current=i}var Ut=N(null),Ht=N(null),nt=N(null),ut=N(null);function It(e,i){switch(Mt(nt,i),Mt(Ht,e),Mt(Ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?C_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=C_(i),e=w_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(Ut),Mt(Ut,e)}function bt(){et(Ut),et(Ht),et(nt)}function Lt(e){e.memoizedState!==null&&Mt(ut,e);var i=Ut.current,s=w_(i,e.type);i!==s&&(Mt(Ht,e),Mt(Ut,s))}function oe(e){Ht.current===e&&(et(Ut),et(Ht)),ut.current===e&&(et(ut),Po._currentValue=Y)}var we,I;function St(e){if(we===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);we=i&&i[1]||"",I=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+we+e+I}var mt=!1;function pt(e,i){if(!e||mt)return"";mt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(lt){var it=lt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(lt){it=lt}e.call(yt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var H=x.split(`
`),tt=A.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<tt.length&&!tt[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===tt.length)for(l=H.length-1,f=tt.length-1;1<=l&&0<=f&&H[l]!==tt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==tt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==tt[f]){var dt=`
`+H[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=f);break}}}finally{mt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?St(s):""}function vt(e,i){switch(e.tag){case 26:case 27:case 5:return St(e.type);case 16:return St("Lazy");case 13:return e.child!==i&&i!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return pt(e.type,!1);case 11:return pt(e.type.render,!1);case 1:return pt(e.type,!0);case 31:return St("Activity");default:return""}}function Ft(e){try{var i="",s=null;do i+=vt(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Dt=Object.prototype.hasOwnProperty,zt=r.unstable_scheduleCallback,ce=r.unstable_cancelCallback,ue=r.unstable_shouldYield,L=r.unstable_requestPaint,T=r.unstable_now,J=r.unstable_getCurrentPriorityLevel,ct=r.unstable_ImmediatePriority,Tt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,$t=r.unstable_LowPriority,Ot=r.unstable_IdlePriority,Qt=r.log,Jt=r.unstable_setDisableYieldValue,wt=null,Pt=null;function ee(e){if(typeof Qt=="function"&&Jt(e),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(wt,e)}catch{}}var Wt=Math.clz32?Math.clz32:W,Vt=Math.log,de=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Vt(e)/de|0)|0}var Nt=256,Bt=262144,qt=4194304;function Rt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?f=Rt(l):(x&=A,x!==0?f=Rt(x):s||(s=A&~e,s!==0&&(f=Rt(s))))):(A=l&~d,A!==0?f=Rt(A):x!==0?f=Rt(x):s||(s=l&~e,s!==0&&(f=Rt(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function Yt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=qt;return qt<<=1,(qt&62914560)===0&&(qt=4194304),e}function Re(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Ln(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ri(e,i,s,l,f,d){var x=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,tt=e.hiddenUpdates;for(s=x&~s;0<s;){var dt=31-Wt(s),yt=1<<dt;A[dt]=0,H[dt]=-1;var it=tt[dt];if(it!==null)for(tt[dt]=null,dt=0;dt<it.length;dt++){var lt=it[dt];lt!==null&&(lt.lane&=-536870913)}s&=~yt}l!==0&&Zr(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~i))}function Zr(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Wt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function wi(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Wt(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function Ps(e,i){var s=i&-i;return s=(s&42)!==0?1:zs(s),(s&(e.suspendedLanes|i))!==0?0:s}function zs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qa(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:J_(e.type))}function jr(e,i){var s=q.p;try{return q.p=e,i()}finally{q.p=s}}var jn=Math.random().toString(36).slice(2),sn="__reactFiber$"+jn,Sn="__reactProps$"+jn,ga="__reactContainer$"+jn,Kr="__reactEvents$"+jn,hu="__reactListeners$"+jn,du="__reactHandles$"+jn,ul="__reactResources$"+jn,Ja="__reactMarker$"+jn;function C(e){delete e[sn],delete e[Sn],delete e[Kr],delete e[hu],delete e[du]}function Z(e){var i=e[sn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[ga]||s[sn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=z_(e);e!==null;){if(s=e[sn])return s;e=z_(e)}return i}e=s,s=e.parentNode}return null}function st(e){if(e=e[sn]||e[ga]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ot(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function K(e){var i=e[ul];return i||(i=e[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Et(e){e[Ja]=!0}var Gt=new Set,jt={};function Xt(e,i){ne(e,i),ne(e+"Capture",i)}function ne(e,i){for(jt[e]=i,e=0;e<i.length;e++)Gt.add(i[e])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},ye={};function Oe(e){return Dt.call(ye,e)?!0:Dt.call(ie,e)?!1:le.test(e)?ye[e]=!0:(ie[e]=!0,!1)}function We(e,i,s){if(Oe(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Pe(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function xe(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Mn(e){if(!e._valueTracker){var i=Ye(e)?"checked":"value";e._valueTracker=Ce(e,i,""+e[i])}}function Hi(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Ye(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $a=/[\n"\\]/g;function Ee(e){return e.replace($a,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Cn(e,i,s,l,f,d,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),i!=null?x==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Kt(i)):e.value!==""+Kt(i)&&(e.value=""+Kt(i)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),i!=null?fn(e,x,Kt(i)):s!=null?fn(e,x,Kt(s)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Kt(A):e.removeAttribute("name")}function Nn(e,i,s,l,f,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Mn(e);return}s=s!=null?""+Kt(s):"",i=i!=null?""+Kt(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Mn(e)}function fn(e,i,s){i==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function en(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Kt(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Is(e,i,s){if(i!=null&&(i=""+Kt(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Kt(s):""}function Di(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(at(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Kt(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Mn(e)}function Fs(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var gy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bp(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||gy.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Ap(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&bp(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&bp(e,d,i[d])}function pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _y=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(e){return vy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vi(){}var mu=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Vs=null;function Rp(e){var i=st(e);if(i&&(e=i.stateNode)){var s=e[Sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Cn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ee(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[Sn]||null;if(!f)throw Error(a(90));Cn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Hi(l)}break t;case"textarea":Is(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&en(e,!!s.multiple,i,!1)}}}var _u=!1;function Cp(e,i,s){if(_u)return e(i,s);_u=!0;try{var l=e(i);return l}finally{if(_u=!1,(Hs!==null||Vs!==null)&&(Jl(),Hs&&(i=Hs,e=Vs,Vs=Hs=null,Rp(i),e)))for(i=0;i<e.length;i++)Rp(e[i])}}function Qr(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if(Gi)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){vu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{vu=!1}var _a=null,yu=null,hl=null;function wp(){if(hl)return hl;var e,i=yu,s=i.length,l,f="value"in _a?_a.value:_a.textContent,d=f.length;for(e=0;e<s&&i[e]===f[e];e++);var x=s-e;for(l=1;l<=x&&i[s-l]===f[d-l];l++);return hl=f.slice(e,1<l?1-l:void 0)}function dl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function Dp(){return!1}function Bn(e){function i(s,l,f,d,x){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pl:Dp,this.isPropagationStopped=Dp,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Bn(ts),$r=_({},ts,{view:0,detail:0}),yy=Bn($r),xu,Su,to,gl=_({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(xu=e.screenX-to.screenX,Su=e.screenY-to.screenY):Su=xu=0,to=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),Up=Bn(gl),xy=_({},gl,{dataTransfer:0}),Sy=Bn(xy),My=_({},$r,{relatedTarget:0}),Mu=Bn(My),Ey=_({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Ty=Bn(Ey),by=_({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ay=Bn(by),Ry=_({},ts,{data:0}),Lp=Bn(Ry),Cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Dy[e])?!!i[e]:!1}function Eu(){return Uy}var Ly=_({},$r,{key:function(e){if(e.key){var i=Cy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ny=Bn(Ly),Oy=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=Bn(Oy),Py=_({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),zy=Bn(Py),By=_({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=Bn(By),Fy=_({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hy=Bn(Fy),Vy=_({},ts,{newState:0,oldState:0}),Gy=Bn(Vy),ky=[9,13,27,32],Tu=Gi&&"CompositionEvent"in window,eo=null;Gi&&"documentMode"in document&&(eo=document.documentMode);var Xy=Gi&&"TextEvent"in window&&!eo,Op=Gi&&(!Tu||eo&&8<eo&&11>=eo),Pp=" ",zp=!1;function Bp(e,i){switch(e){case"keyup":return ky.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gs=!1;function Wy(e,i){switch(e){case"compositionend":return Ip(i);case"keypress":return i.which!==32?null:(zp=!0,Pp);case"textInput":return e=i.data,e===Pp&&zp?null:e;default:return null}}function qy(e,i){if(Gs)return e==="compositionend"||!Tu&&Bp(e,i)?(e=wp(),hl=yu=_a=null,Gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Op&&i.locale!=="ko"?null:i.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Yy[e.type]:i==="textarea"}function Hp(e,i,s,l){Hs?Vs?Vs.push(l):Vs=[l]:Hs=l,i=sc(i,"onChange"),0<i.length&&(s=new ml("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var no=null,io=null;function Zy(e){M_(e,0)}function _l(e){var i=ot(e);if(Hi(i))return e}function Vp(e,i){if(e==="change")return i}var Gp=!1;if(Gi){var bu;if(Gi){var Au="oninput"in document;if(!Au){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Au=typeof kp.oninput=="function"}bu=Au}else bu=!1;Gp=bu&&(!document.documentMode||9<document.documentMode)}function Xp(){no&&(no.detachEvent("onpropertychange",Wp),io=no=null)}function Wp(e){if(e.propertyName==="value"&&_l(io)){var i=[];Hp(i,io,e,gu(e)),Cp(Zy,i)}}function jy(e,i,s){e==="focusin"?(Xp(),no=i,io=s,no.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function Ky(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(io)}function Qy(e,i){if(e==="click")return _l(i)}function Jy(e,i){if(e==="input"||e==="change")return _l(i)}function $y(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:$y;function ao(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Dt.call(i,f)||!Kn(e[f],i[f]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,i){var s=qp(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=qp(s)}}function Zp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Zp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_n(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=_n(e.document)}return i}function Ru(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var tx=Gi&&"documentMode"in document&&11>=document.documentMode,ks=null,Cu=null,so=null,wu=!1;function Kp(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wu||ks==null||ks!==_n(l)||(l=ks,"selectionStart"in l&&Ru(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&ao(so,l)||(so=l,l=sc(Cu,"onSelect"),0<l.length&&(i=new ml("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=ks)))}function es(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Xs={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionrun:es("Transition","TransitionRun"),transitionstart:es("Transition","TransitionStart"),transitioncancel:es("Transition","TransitionCancel"),transitionend:es("Transition","TransitionEnd")},Du={},Qp={};Gi&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ns(e){if(Du[e])return Du[e];if(!Xs[e])return e;var i=Xs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Qp)return Du[e]=i[s];return e}var Jp=ns("animationend"),$p=ns("animationiteration"),tm=ns("animationstart"),ex=ns("transitionrun"),nx=ns("transitionstart"),ix=ns("transitioncancel"),em=ns("transitionend"),nm=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function _i(e,i){nm.set(e,i),Xt(i,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Ws=0,Lu=0;function yl(){for(var e=Ws,i=Lu=Ws=0;i<e;){var s=oi[i];oi[i++]=null;var l=oi[i];oi[i++]=null;var f=oi[i];oi[i++]=null;var d=oi[i];if(oi[i++]=null,l!==null&&f!==null){var x=l.pending;x===null?f.next=f:(f.next=x.next,x.next=f),l.pending=f}d!==0&&im(s,f,d)}}function xl(e,i,s,l){oi[Ws++]=e,oi[Ws++]=i,oi[Ws++]=s,oi[Ws++]=l,Lu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Nu(e,i,s,l){return xl(e,i,s,l),Sl(e)}function is(e,i){return xl(e,null,null,i),Sl(e)}function im(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-Wt(s),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Sl(e){if(50<Co)throw Co=0,kf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var qs={};function ax(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,i,s,l){return new ax(e,i,s,l)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,i){var s=e.alternate;return s===null?(s=Qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function am(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ml(e,i,s,l,f,d){var x=0;if(l=e,typeof e=="function")Ou(e)&&(x=1);else if(typeof e=="string")x=cS(e,s,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Qn(31,s,i,f),e.elementType=D,e.lanes=d,e;case b:return as(s.children,f,d,i);case M:x=8,f|=24;break;case v:return e=Qn(12,s,i,f|2),e.elementType=v,e.lanes=d,e;case F:return e=Qn(13,s,i,f),e.elementType=F,e.lanes=d,e;case B:return e=Qn(19,s,i,f),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case P:x=9;break t;case R:x=11;break t;case O:x=14;break t;case k:x=16,l=null;break t}x=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=Qn(x,s,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function as(e,i,s,l){return e=Qn(7,e,l,i),e.lanes=s,e}function Pu(e,i,s){return e=Qn(6,e,null,i),e.lanes=s,e}function sm(e){var i=Qn(18,null,null,0);return i.stateNode=e,i}function zu(e,i,s){return i=Qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var rm=new WeakMap;function li(e,i){if(typeof e=="object"&&e!==null){var s=rm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Ft(i)},rm.set(e,i),i)}return{value:e,source:i,stack:Ft(i)}}var Ys=[],Zs=0,El=null,ro=0,ci=[],ui=0,va=null,Ui=1,Li="";function Xi(e,i){Ys[Zs++]=ro,Ys[Zs++]=El,El=e,ro=i}function om(e,i,s){ci[ui++]=Ui,ci[ui++]=Li,ci[ui++]=va,va=e;var l=Ui;e=Li;var f=32-Wt(l)-1;l&=~(1<<f),s+=1;var d=32-Wt(i)+f;if(30<d){var x=f-f%5;d=(l&(1<<x)-1).toString(32),l>>=x,f-=x,Ui=1<<32-Wt(i)+f|s<<f|l,Li=d+e}else Ui=1<<d|s<<f|l,Li=e}function Bu(e){e.return!==null&&(Xi(e,1),om(e,1,0))}function Iu(e){for(;e===El;)El=Ys[--Zs],Ys[Zs]=null,ro=Ys[--Zs],Ys[Zs]=null;for(;e===va;)va=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null}function lm(e,i){ci[ui++]=Ui,ci[ui++]=Li,ci[ui++]=va,Ui=i.id,Li=i.overflow,va=e}var En=null,Ze=null,Ae=!1,ya=null,fi=!1,Fu=Error(a(519));function xa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(li(i,e)),Fu}function cm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[sn]=e,i[Sn]=l,s){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(s=0;s<Do.length;s++)Me(Do[s],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),Nn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Di(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||A_(i.textContent,s)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=Vi),i=!0):i=!1,i||xa(e,!0)}function um(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:En=En.return}}function js(e){if(e!==En)return!1;if(!Ae)return um(e),Ae=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ah(e.type,e.memoizedProps)),s=!s),s&&Ze&&xa(e),um(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=P_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=P_(e)}else i===27?(i=Ze,Oa(e.type)?(e=ch,ch=null,Ze=e):Ze=i):Ze=En?di(e.stateNode.nextSibling):null;return!0}function ss(){Ze=En=null,Ae=!1}function Hu(){var e=ya;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ya=null),e}function oo(e){ya===null?ya=[e]:ya.push(e)}var Vu=N(null),rs=null,Wi=null;function Sa(e,i,s){Mt(Vu,i._currentValue),i._currentValue=s}function qi(e){e._currentValue=Vu.current,et(Vu)}function Gu(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function ku(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var x=f.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=f;for(var H=0;H<i.length;H++)if(A.context===i[H]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),Gu(d.return,s,e),l||(x=null);break t}d=A.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(a(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Gu(x,s,e),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===e){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function Ks(e,i,s,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var A=f.type;Kn(f.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(f===ut.current){if(x=f.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}f=f.return}e!==null&&ku(i,e,s,l),i.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){rs=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return fm(rs,e)}function bl(e,i){return rs===null&&os(e),fm(e,i)}function fm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Wi===null){if(e===null)throw Error(a(308));Wi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Wi=Wi.next=i;return s}var sx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},rx=r.unstable_scheduleCallback,ox=r.unstable_NormalPriority,rn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new sx,data:new Map,refCount:0}}function lo(e){e.refCount--,e.refCount===0&&rx(ox,function(){e.controller.abort()})}var co=null,Wu=0,Qs=0,Js=null;function lx(e,i){if(co===null){var s=co=[];Wu=0,Qs=jf(),Js={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Wu++,i.then(hm,hm),i}function hm(){if(--Wu===0&&co!==null){Js!==null&&(Js.status="fulfilled");var e=co;co=null,Qs=0,Js=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function cx(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var dm=z.S;z.S=function(e,i){Kg=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&lx(e,i),dm!==null&&dm(e,i)};var ls=N(null);function qu(){var e=ls.current;return e!==null?e:qe.pooledCache}function Al(e,i){i===null?Mt(ls,ls.current):Mt(ls,i.pool)}function pm(){var e=qu();return e===null?null:{parent:rn._currentValue,pool:e}}var $s=Error(a(460)),Yu=Error(a(474)),Rl=Error(a(542)),Cl={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Vi,Vi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,vm(e),e;default:if(typeof i.status=="string")i.then(Vi,Vi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,vm(e),e}throw us=i,$s}}function cs(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(us=s,$s):s}}var us=null;function _m(){if(us===null)throw Error(a(459));var e=us;return us=null,e}function vm(e){if(e===$s||e===Rl)throw Error(a(483))}var tr=null,uo=0;function wl(e){var i=uo;return uo+=1,tr===null&&(tr=[]),gm(tr,e,i)}function fo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Dl(e,i){throw i.$$typeof===y?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function ym(e){function i(j,X){if(e){var $=j.deletions;$===null?(j.deletions=[X],j.flags|=16):$.push(X)}}function s(j,X){if(!e)return null;for(;X!==null;)i(j,X),X=X.sibling;return null}function l(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function f(j,X){return j=ki(j,X),j.index=0,j.sibling=null,j}function d(j,X,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<X?(j.flags|=67108866,X):$):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function x(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,$,gt){return X===null||X.tag!==6?(X=Pu($,j.mode,gt),X.return=j,X):(X=f(X,$),X.return=j,X)}function H(j,X,$,gt){var ae=$.type;return ae===b?dt(j,X,$.props.children,gt,$.key):X!==null&&(X.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===k&&cs(ae)===X.type)?(X=f(X,$.props),fo(X,$),X.return=j,X):(X=Ml($.type,$.key,$.props,null,j.mode,gt),fo(X,$),X.return=j,X)}function tt(j,X,$,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=zu($,j.mode,gt),X.return=j,X):(X=f(X,$.children||[]),X.return=j,X)}function dt(j,X,$,gt,ae){return X===null||X.tag!==7?(X=as($,j.mode,gt,ae),X.return=j,X):(X=f(X,$),X.return=j,X)}function yt(j,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Pu(""+X,j.mode,$),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return $=Ml(X.type,X.key,X.props,null,j.mode,$),fo($,X),$.return=j,$;case E:return X=zu(X,j.mode,$),X.return=j,X;case k:return X=cs(X),yt(j,X,$)}if(at(X)||Q(X))return X=as(X,j.mode,$,null),X.return=j,X;if(typeof X.then=="function")return yt(j,wl(X),$);if(X.$$typeof===U)return yt(j,bl(j,X),$);Dl(j,X)}return null}function it(j,X,$,gt){var ae=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ae!==null?null:A(j,X,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===ae?H(j,X,$,gt):null;case E:return $.key===ae?tt(j,X,$,gt):null;case k:return $=cs($),it(j,X,$,gt)}if(at($)||Q($))return ae!==null?null:dt(j,X,$,gt,null);if(typeof $.then=="function")return it(j,X,wl($),gt);if($.$$typeof===U)return it(j,X,bl(j,$),gt);Dl(j,$)}return null}function lt(j,X,$,gt,ae){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get($)||null,A(X,j,""+gt,ae);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case S:return j=j.get(gt.key===null?$:gt.key)||null,H(X,j,gt,ae);case E:return j=j.get(gt.key===null?$:gt.key)||null,tt(X,j,gt,ae);case k:return gt=cs(gt),lt(j,X,$,gt,ae)}if(at(gt)||Q(gt))return j=j.get($)||null,dt(X,j,gt,ae,null);if(typeof gt.then=="function")return lt(j,X,$,wl(gt),ae);if(gt.$$typeof===U)return lt(j,X,$,bl(X,gt),ae);Dl(X,gt)}return null}function Zt(j,X,$,gt){for(var ae=null,De=null,te=X,me=X=0,be=null;te!==null&&me<$.length;me++){te.index>me?(be=te,te=null):be=te.sibling;var Ue=it(j,te,$[me],gt);if(Ue===null){te===null&&(te=be);break}e&&te&&Ue.alternate===null&&i(j,te),X=d(Ue,X,me),De===null?ae=Ue:De.sibling=Ue,De=Ue,te=be}if(me===$.length)return s(j,te),Ae&&Xi(j,me),ae;if(te===null){for(;me<$.length;me++)te=yt(j,$[me],gt),te!==null&&(X=d(te,X,me),De===null?ae=te:De.sibling=te,De=te);return Ae&&Xi(j,me),ae}for(te=l(te);me<$.length;me++)be=lt(te,j,me,$[me],gt),be!==null&&(e&&be.alternate!==null&&te.delete(be.key===null?me:be.key),X=d(be,X,me),De===null?ae=be:De.sibling=be,De=be);return e&&te.forEach(function(Fa){return i(j,Fa)}),Ae&&Xi(j,me),ae}function se(j,X,$,gt){if($==null)throw Error(a(151));for(var ae=null,De=null,te=X,me=X=0,be=null,Ue=$.next();te!==null&&!Ue.done;me++,Ue=$.next()){te.index>me?(be=te,te=null):be=te.sibling;var Fa=it(j,te,Ue.value,gt);if(Fa===null){te===null&&(te=be);break}e&&te&&Fa.alternate===null&&i(j,te),X=d(Fa,X,me),De===null?ae=Fa:De.sibling=Fa,De=Fa,te=be}if(Ue.done)return s(j,te),Ae&&Xi(j,me),ae;if(te===null){for(;!Ue.done;me++,Ue=$.next())Ue=yt(j,Ue.value,gt),Ue!==null&&(X=d(Ue,X,me),De===null?ae=Ue:De.sibling=Ue,De=Ue);return Ae&&Xi(j,me),ae}for(te=l(te);!Ue.done;me++,Ue=$.next())Ue=lt(te,j,me,Ue.value,gt),Ue!==null&&(e&&Ue.alternate!==null&&te.delete(Ue.key===null?me:Ue.key),X=d(Ue,X,me),De===null?ae=Ue:De.sibling=Ue,De=Ue);return e&&te.forEach(function(xS){return i(j,xS)}),Ae&&Xi(j,me),ae}function Ve(j,X,$,gt){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var ae=$.key;X!==null;){if(X.key===ae){if(ae=$.type,ae===b){if(X.tag===7){s(j,X.sibling),gt=f(X,$.props.children),gt.return=j,j=gt;break t}}else if(X.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===k&&cs(ae)===X.type){s(j,X.sibling),gt=f(X,$.props),fo(gt,$),gt.return=j,j=gt;break t}s(j,X);break}else i(j,X);X=X.sibling}$.type===b?(gt=as($.props.children,j.mode,gt,$.key),gt.return=j,j=gt):(gt=Ml($.type,$.key,$.props,null,j.mode,gt),fo(gt,$),gt.return=j,j=gt)}return x(j);case E:t:{for(ae=$.key;X!==null;){if(X.key===ae)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){s(j,X.sibling),gt=f(X,$.children||[]),gt.return=j,j=gt;break t}else{s(j,X);break}else i(j,X);X=X.sibling}gt=zu($,j.mode,gt),gt.return=j,j=gt}return x(j);case k:return $=cs($),Ve(j,X,$,gt)}if(at($))return Zt(j,X,$,gt);if(Q($)){if(ae=Q($),typeof ae!="function")throw Error(a(150));return $=ae.call($),se(j,X,$,gt)}if(typeof $.then=="function")return Ve(j,X,wl($),gt);if($.$$typeof===U)return Ve(j,X,bl(j,$),gt);Dl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(s(j,X.sibling),gt=f(X,$),gt.return=j,j=gt):(s(j,X),gt=Pu($,j.mode,gt),gt.return=j,j=gt),x(j)):s(j,X)}return function(j,X,$,gt){try{uo=0;var ae=Ve(j,X,$,gt);return tr=null,ae}catch(te){if(te===$s||te===Rl)throw te;var De=Qn(29,te,null,j.mode);return De.lanes=gt,De.return=j,De}finally{}}}var fs=ym(!0),xm=ym(!1),Ma=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Sl(e),im(e,null,s),i}return xl(e,l,i,s),Sl(e)}function ho(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,wi(e,s)}}function Ku(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Qu=!1;function po(){if(Qu){var e=Js;if(e!==null)throw e}}function mo(e,i,s,l){Qu=!1;var f=e.updateQueue;Ma=!1;var d=f.firstBaseUpdate,x=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var H=A,tt=H.next;H.next=null,x===null?d=tt:x.next=tt,x=H;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==x&&(A===null?dt.firstBaseUpdate=tt:A.next=tt,dt.lastBaseUpdate=H))}if(d!==null){var yt=f.baseState;x=0,dt=tt=H=null,A=d;do{var it=A.lane&-536870913,lt=it!==A.lane;if(lt?(Te&it)===it:(l&it)===it){it!==0&&it===Qs&&(Qu=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Zt=e,se=A;it=i;var Ve=s;switch(se.tag){case 1:if(Zt=se.payload,typeof Zt=="function"){yt=Zt.call(Ve,yt,it);break t}yt=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=se.payload,it=typeof Zt=="function"?Zt.call(Ve,yt,it):Zt,it==null)break t;yt=_({},yt,it);break t;case 2:Ma=!0}}it=A.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(tt=dt=lt,H=yt):dt=dt.next=lt,x|=it;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);dt===null&&(H=yt),f.baseState=H,f.firstBaseUpdate=tt,f.lastBaseUpdate=dt,d===null&&(f.shared.lanes=0),wa|=x,e.lanes=x,e.memoizedState=yt}}function Sm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Mm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Sm(s[e],i)}var er=N(null),Ul=N(0);function Em(e,i){e=ea,Mt(Ul,e),Mt(er,i),ea=e|i.baseLanes}function Ju(){Mt(Ul,ea),Mt(er,er.current)}function $u(){ea=Ul.current,et(er),et(Ul)}var Jn=N(null),hi=null;function ba(e){var i=e.alternate;Mt(nn,nn.current&1),Mt(Jn,e),hi===null&&(i===null||er.current!==null||i.memoizedState!==null)&&(hi=e)}function tf(e){Mt(nn,nn.current),Mt(Jn,e),hi===null&&(hi=e)}function Tm(e){e.tag===22?(Mt(nn,nn.current),Mt(Jn,e),hi===null&&(hi=e)):Aa()}function Aa(){Mt(nn,nn.current),Mt(Jn,Jn.current)}function $n(e){et(Jn),hi===e&&(hi=null),et(nn)}var nn=N(0);function Ll(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||oh(s)||lh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yi=0,pe=null,Fe=null,on=null,Nl=!1,nr=!1,hs=!1,Ol=0,go=0,ir=null,ux=0;function $e(){throw Error(a(321))}function ef(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Kn(e[s],i[s]))return!1;return!0}function nf(e,i,s,l,f,d){return Yi=d,pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?og:vf,hs=!1,d=s(l,f),hs=!1,nr&&(d=Am(i,s,l,f)),bm(e),d}function bm(e){z.H=yo;var i=Fe!==null&&Fe.next!==null;if(Yi=0,on=Fe=pe=null,Nl=!1,go=0,ir=null,i)throw Error(a(300));e===null||ln||(e=e.dependencies,e!==null&&Tl(e)&&(ln=!0))}function Am(e,i,s,l){pe=e;var f=0;do{if(nr&&(ir=null),go=0,nr=!1,25<=f)throw Error(a(301));if(f+=1,on=Fe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=lg,d=i(s,l)}while(nr);return d}function fx(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?_o(i):i,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(pe.flags|=1024),i}function af(){var e=Ol!==0;return Ol=0,e}function sf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function rf(e){if(Nl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Nl=!1}Yi=0,on=Fe=pe=null,nr=!1,go=Ol=0,ir=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?pe.memoizedState=on=e:on=on.next=e,on}function an(){if(Fe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var i=on===null?pe.memoizedState:on.next;if(i!==null)on=i,Fe=e;else{if(e===null)throw pe.alternate===null?Error(a(467)):Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},on===null?pe.memoizedState=on=e:on=on.next=e}return on}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(e){var i=go;return go+=1,ir===null&&(ir=[]),e=gm(ir,e,i),i=pe,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?og:vf),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _o(e);if(e.$$typeof===U)return Tn(e)}throw Error(a(438,String(e)))}function of(e){var i=null,s=pe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Pl(),pe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=w;return i.index++,s}function Zi(e,i){return typeof i=="function"?i(e):i}function Bl(e){var i=an();return lf(i,Fe,e)}function lf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var x=f.next;f.next=d.next,d.next=x}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var A=x=null,H=null,tt=i,dt=!1;do{var yt=tt.lane&-536870913;if(yt!==tt.lane?(Te&yt)===yt:(Yi&yt)===yt){var it=tt.revertLane;if(it===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),yt===Qs&&(dt=!0);else if((Yi&it)===it){tt=tt.next,it===Qs&&(dt=!0);continue}else yt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(A=H=yt,x=d):H=H.next=yt,pe.lanes|=it,wa|=it;yt=tt.action,hs&&s(d,yt),d=tt.hasEagerState?tt.eagerState:s(d,yt)}else it={lane:yt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(A=H=it,x=d):H=H.next=it,pe.lanes|=yt,wa|=yt;tt=tt.next}while(tt!==null&&tt!==i);if(H===null?x=d:H.next=A,!Kn(d,e.memoizedState)&&(ln=!0,dt&&(s=Js,s!==null)))throw s;e.memoizedState=d,e.baseState=x,e.baseQueue=H,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cf(e){var i=an(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var x=f=f.next;do d=e(d,x.action),x=x.next;while(x!==f);Kn(d,i.memoizedState)||(ln=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Rm(e,i,s){var l=pe,f=an(),d=Ae;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var x=!Kn((Fe||f).memoizedState,s);if(x&&(f.memoizedState=s,ln=!0),f=f.queue,hf(Dm.bind(null,l,f,e),[e]),f.getSnapshot!==i||x||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,ar(9,{destroy:void 0},wm.bind(null,l,f,s,i),null),qe===null)throw Error(a(349));d||(Yi&127)!==0||Cm(l,i,s)}return s}function Cm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=pe.updateQueue,i===null?(i=Pl(),pe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function wm(e,i,s,l){i.value=s,i.getSnapshot=l,Um(i)&&Lm(e)}function Dm(e,i,s){return s(function(){Um(i)&&Lm(e)})}function Um(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Kn(e,s)}catch{return!0}}function Lm(e){var i=is(e,2);i!==null&&Gn(i,e,2)}function uf(e){var i=On();if(typeof e=="function"){var s=e;if(e=s(),hs){ee(!0);try{s()}finally{ee(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},i}function Nm(e,i,s,l){return e.baseState=s,lf(e,Fe,typeof l=="function"?l:Zi)}function hx(e,i,s,l,f){if(Hl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};z.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,Om(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Om(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=z.T,x={};z.T=x;try{var A=s(f,l),H=z.S;H!==null&&H(x,A),Pm(e,i,A)}catch(tt){ff(e,i,tt)}finally{d!==null&&x.types!==null&&(d.types=x.types),z.T=d}}else try{d=s(f,l),Pm(e,i,d)}catch(tt){ff(e,i,tt)}}function Pm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){zm(e,i,l)},function(l){return ff(e,i,l)}):zm(e,i,s)}function zm(e,i,s){i.status="fulfilled",i.value=s,Bm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Om(e,s)))}function ff(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Bm(i),i=i.next;while(i!==l)}e.action=null}function Bm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Im(e,i){return i}function Fm(e,i){if(Ae){var s=qe.formState;if(s!==null){t:{var l=pe;if(Ae){if(Ze){e:{for(var f=Ze,d=fi;f.nodeType!==8;){if(!d){f=null;break e}if(f=di(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Ze=di(f.nextSibling),l=f.data==="F!";break t}}xa(l)}l=!1}l&&(i=s[0])}}return s=On(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:i},s.queue=l,s=ag.bind(null,pe,l),l.dispatch=s,l=uf(!1),d=_f.bind(null,pe,!1,l.queue),l=On(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=hx.bind(null,pe,f,d,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function Hm(e){var i=an();return Vm(i,Fe,e)}function Vm(e,i,s){if(i=lf(e,i,Im)[0],e=Bl(Zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=_o(i)}catch(x){throw x===$s?Rl:x}else l=i;i=an();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(pe.flags|=2048,ar(9,{destroy:void 0},dx.bind(null,f,s),null)),[l,d,e]}function dx(e,i){e.action=i}function Gm(e){var i=an(),s=Fe;if(s!==null)return Vm(i,s,e);an(),i=i.memoizedState,s=an();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function ar(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=pe.updateQueue,i===null&&(i=Pl(),pe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function km(){return an().memoizedState}function Il(e,i,s,l){var f=On();pe.flags|=e,f.memoizedState=ar(1|i,{destroy:void 0},s,l===void 0?null:l)}function Fl(e,i,s,l){var f=an();l=l===void 0?null:l;var d=f.memoizedState.inst;Fe!==null&&l!==null&&ef(l,Fe.memoizedState.deps)?f.memoizedState=ar(i,d,s,l):(pe.flags|=e,f.memoizedState=ar(1|i,d,s,l))}function Xm(e,i){Il(8390656,8,e,i)}function hf(e,i){Fl(2048,8,e,i)}function px(e){pe.flags|=4;var i=pe.updateQueue;if(i===null)i=Pl(),pe.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function Wm(e){var i=an().memoizedState;return px({ref:i,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function qm(e,i){return Fl(4,2,e,i)}function Ym(e,i){return Fl(4,4,e,i)}function Zm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function jm(e,i,s){s=s!=null?s.concat([e]):null,Fl(4,4,Zm.bind(null,i,e),s)}function df(){}function Km(e,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&ef(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Qm(e,i){var s=an();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&ef(i,l[1]))return l[0];if(l=e(),hs){ee(!0);try{e()}finally{ee(!1)}}return s.memoizedState=[l,i],l}function pf(e,i,s){return s===void 0||(Yi&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=Jg(),pe.lanes|=e,wa|=e,s)}function Jm(e,i,s,l){return Kn(s,i)?s:er.current!==null?(e=pf(e,s,l),Kn(e,i)||(ln=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(Te&261930)===0?(ln=!0,e.memoizedState=s):(e=Jg(),pe.lanes|=e,wa|=e,i)}function $m(e,i,s,l,f){var d=q.p;q.p=d!==0&&8>d?d:8;var x=z.T,A={};z.T=A,_f(e,!1,i,s);try{var H=f(),tt=z.S;if(tt!==null&&tt(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=cx(H,l);vo(e,i,dt,ni(e))}else vo(e,i,l,ni(e))}catch(yt){vo(e,i,{then:function(){},status:"rejected",reason:yt},ni())}finally{q.p=d,x!==null&&A.types!==null&&(x.types=A.types),z.T=x}}function mx(){}function mf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=tg(e).queue;$m(e,f,i,Y,s===null?mx:function(){return eg(e),s(l)})}function tg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function eg(e){var i=tg(e);i.next===null&&(i=e.alternate.memoizedState),vo(e,i.next.queue,{},ni())}function gf(){return Tn(Po)}function ng(){return an().memoizedState}function ig(){return an().memoizedState}function gx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ni();e=Ea(s);var l=Ta(i,e,s);l!==null&&(Gn(l,i,s),ho(l,i,s)),i={cache:Xu()},e.payload=i;return}i=i.return}}function _x(e,i,s){var l=ni();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Hl(e)?sg(i,s):(s=Nu(e,i,s,l),s!==null&&(Gn(s,e,l),rg(s,i,l)))}function ag(e,i,s){var l=ni();vo(e,i,s,l)}function vo(e,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))sg(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var x=i.lastRenderedState,A=d(x,s);if(f.hasEagerState=!0,f.eagerState=A,Kn(A,x))return xl(e,i,f,0),qe===null&&yl(),!1}catch{}finally{}if(s=Nu(e,i,f,l),s!==null)return Gn(s,e,l),rg(s,i,l),!0}return!1}function _f(e,i,s,l){if(l={lane:2,revertLane:jf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(i)throw Error(a(479))}else i=Nu(e,s,l,2),i!==null&&Gn(i,e,2)}function Hl(e){var i=e.alternate;return e===pe||i!==null&&i===pe}function sg(e,i){nr=Nl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function rg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,wi(e,s)}}var yo={readContext:Tn,use:zl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};yo.useEffectEvent=$e;var og={readContext:Tn,use:zl,useCallback:function(e,i){return On().memoizedState=[e,i===void 0?null:i],e},useContext:Tn,useEffect:Xm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Il(4194308,4,Zm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Il(4194308,4,e,i)},useInsertionEffect:function(e,i){Il(4,2,e,i)},useMemo:function(e,i){var s=On();i=i===void 0?null:i;var l=e();if(hs){ee(!0);try{e()}finally{ee(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=On();if(s!==void 0){var f=s(i);if(hs){ee(!0);try{s(i)}finally{ee(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=_x.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var i=On();return e={current:e},i.memoizedState=e},useState:function(e){e=uf(e);var i=e.queue,s=ag.bind(null,pe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:df,useDeferredValue:function(e,i){var s=On();return pf(s,e,i)},useTransition:function(){var e=uf(!1);return e=$m.bind(null,pe,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=pe,f=On();if(Ae){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qe===null)throw Error(a(349));(Te&127)!==0||Cm(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,Xm(Dm.bind(null,l,d,e),[e]),l.flags|=2048,ar(9,{destroy:void 0},wm.bind(null,l,d,s,i),null),s},useId:function(){var e=On(),i=qe.identifierPrefix;if(Ae){var s=Li,l=Ui;s=(l&~(1<<32-Wt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Ol++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=ux++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:gf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var i=On();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=_f.bind(null,pe,!0,s),s.dispatch=i,[e,i]},useMemoCache:of,useCacheRefresh:function(){return On().memoizedState=gx.bind(null,pe)},useEffectEvent:function(e){var i=On(),s={impl:e};return i.memoizedState=s,function(){if((Ne&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},vf={readContext:Tn,use:zl,useCallback:Km,useContext:Tn,useEffect:hf,useImperativeHandle:jm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:Bl,useRef:km,useState:function(){return Bl(Zi)},useDebugValue:df,useDeferredValue:function(e,i){var s=an();return Jm(s,Fe.memoizedState,e,i)},useTransition:function(){var e=Bl(Zi)[0],i=an().memoizedState;return[typeof e=="boolean"?e:_o(e),i]},useSyncExternalStore:Rm,useId:ng,useHostTransitionStatus:gf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,i){var s=an();return Nm(s,Fe,e,i)},useMemoCache:of,useCacheRefresh:ig};vf.useEffectEvent=Wm;var lg={readContext:Tn,use:zl,useCallback:Km,useContext:Tn,useEffect:hf,useImperativeHandle:jm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:cf,useRef:km,useState:function(){return cf(Zi)},useDebugValue:df,useDeferredValue:function(e,i){var s=an();return Fe===null?pf(s,e,i):Jm(s,Fe.memoizedState,e,i)},useTransition:function(){var e=cf(Zi)[0],i=an().memoizedState;return[typeof e=="boolean"?e:_o(e),i]},useSyncExternalStore:Rm,useId:ng,useHostTransitionStatus:gf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,i){var s=an();return Fe!==null?Nm(s,Fe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:of,useCacheRefresh:ig};lg.useEffectEvent=Wm;function yf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var xf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ni(),f=Ea(l);f.payload=i,s!=null&&(f.callback=s),i=Ta(e,f,l),i!==null&&(Gn(i,e,l),ho(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ni(),f=Ea(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ta(e,f,l),i!==null&&(Gn(i,e,l),ho(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ni(),l=Ea(s);l.tag=2,i!=null&&(l.callback=i),i=Ta(e,l,s),i!==null&&(Gn(i,e,s),ho(i,e,s))}};function cg(e,i,s,l,f,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,x):i.prototype&&i.prototype.isPureReactComponent?!ao(s,l)||!ao(f,d):!0}function ug(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function ds(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function fg(e){vl(e)}function hg(e){console.error(e)}function dg(e){vl(e)}function Vl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function pg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Sf(e,i,s){return s=Ea(s),s.tag=3,s.payload={element:null},s.callback=function(){Vl(e,i)},s}function mg(e){return e=Ea(e),e.tag=3,e}function gg(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){pg(i,s,l)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){pg(i,s,l),typeof f!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function vx(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ks(i,s,f,!0),s=Jn.current,s!==null){switch(s.tag){case 31:case 13:return hi===null?$l():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Cl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),qf(e,l,f)),!1;case 22:return s.flags|=65536,l===Cl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),qf(e,l,f)),!1}throw Error(a(435,s.tag))}return qf(e,l,f),$l(),!1}if(Ae)return i=Jn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Fu&&(e=Error(a(422),{cause:l}),oo(li(e,s)))):(l!==Fu&&(i=Error(a(423),{cause:l}),oo(li(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=li(l,s),f=Sf(e.stateNode,l,f),Ku(e,f),tn!==4&&(tn=2)),!1;var d=Error(a(520),{cause:l});if(d=li(d,s),Ro===null?Ro=[d]:Ro.push(d),tn!==4&&(tn=2),i===null)return!0;l=li(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Sf(s.stateNode,l,e),Ku(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Da===null||!Da.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=mg(f),gg(f,e,s,l),Ku(s,f),!1}s=s.return}while(s!==null);return!1}var Mf=Error(a(461)),ln=!1;function bn(e,i,s,l){i.child=e===null?xm(i,null,s,l):fs(i,e.child,s,l)}function _g(e,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var x={};for(var A in l)A!=="ref"&&(x[A]=l[A])}else x=l;return os(i),l=nf(e,i,s,x,d,f),A=af(),e!==null&&!ln?(sf(e,i,f),ji(e,i,f)):(Ae&&A&&Bu(i),i.flags|=1,bn(e,i,l,f),i.child)}function vg(e,i,s,l,f){if(e===null){var d=s.type;return typeof d=="function"&&!Ou(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,yg(e,i,d,l,f)):(e=Ml(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Df(e,f)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:ao,s(x,l)&&e.ref===i.ref)return ji(e,i,f)}return i.flags|=1,e=ki(d,l),e.ref=i.ref,e.return=i,i.child=e}function yg(e,i,s,l,f){if(e!==null){var d=e.memoizedProps;if(ao(d,l)&&e.ref===i.ref)if(ln=!1,i.pendingProps=l=d,Df(e,f))(e.flags&131072)!==0&&(ln=!0);else return i.lanes=e.lanes,ji(e,i,f)}return Ef(e,i,s,l,f)}function xg(e,i,s,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Sg(e,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(i,d!==null?d.cachePool:null),d!==null?Em(i,d):Ju(),Tm(i);else return l=i.lanes=536870912,Sg(e,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Al(i,d.cachePool),Em(i,d),Aa(),i.memoizedState=null):(e!==null&&Al(i,null),Ju(),Aa());return bn(e,i,f,s),i.child}function xo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Sg(e,i,s,l,f){var d=qu();return d=d===null?null:{parent:rn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&Al(i,null),Ju(),Tm(i),e!==null&&Ks(e,i,l,!0),i.childLanes=f,null}function Gl(e,i){return i=Xl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Mg(e,i,s){return fs(i,e.child,null,s),e=Gl(i,i.pendingProps),e.flags|=2,$n(i),i.memoizedState=null,e}function yx(e,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ae){if(l.mode==="hidden")return e=Gl(i,l),i.lanes=536870912,xo(null,e);if(tf(i),(e=Ze)?(e=O_(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},s=sm(e),s.return=i,i.child=s,En=i,Ze=null)):e=null,e===null)throw xa(i);return i.lanes=536870912,null}return Gl(i,l)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(tf(i),f)if(i.flags&256)i.flags&=-257,i=Mg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(ln||Ks(e,i,s,!1),f=(s&e.childLanes)!==0,ln||f){if(l=qe,l!==null&&(x=Ps(l,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,is(e,x),Gn(l,e,x),Mf;$l(),i=Mg(e,i,s)}else e=d.treeContext,Ze=di(x.nextSibling),En=i,Ae=!0,ya=null,fi=!1,e!==null&&lm(i,e),i=Gl(i,l),i.flags|=4096;return i}return e=ki(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function kl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Ef(e,i,s,l,f){return os(i),s=nf(e,i,s,l,void 0,f),l=af(),e!==null&&!ln?(sf(e,i,f),ji(e,i,f)):(Ae&&l&&Bu(i),i.flags|=1,bn(e,i,s,f),i.child)}function Eg(e,i,s,l,f,d){return os(i),i.updateQueue=null,s=Am(i,l,s,f),bm(e),l=af(),e!==null&&!ln?(sf(e,i,d),ji(e,i,d)):(Ae&&l&&Bu(i),i.flags|=1,bn(e,i,s,d),i.child)}function Tg(e,i,s,l,f){if(os(i),i.stateNode===null){var d=qs,x=s.contextType;typeof x=="object"&&x!==null&&(d=Tn(x)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Zu(i),x=s.contextType,d.context=typeof x=="object"&&x!==null?Tn(x):qs,d.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(yf(i,s,x,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&xf.enqueueReplaceState(d,d.state,null),mo(i,l,d,f),po(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var A=i.memoizedProps,H=ds(s,A);d.props=H;var tt=d.context,dt=s.contextType;x=qs,typeof dt=="object"&&dt!==null&&(x=Tn(dt));var yt=s.getDerivedStateFromProps;dt=typeof yt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||tt!==x)&&ug(i,d,l,x),Ma=!1;var it=i.memoizedState;d.state=it,mo(i,l,d,f),po(),tt=i.memoizedState,A||it!==tt||Ma?(typeof yt=="function"&&(yf(i,s,yt,l),tt=i.memoizedState),(H=Ma||cg(i,s,H,l,it,tt,x))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=tt),d.props=l,d.state=tt,d.context=x,l=H):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,ju(e,i),x=i.memoizedProps,dt=ds(s,x),d.props=dt,yt=i.pendingProps,it=d.context,tt=s.contextType,H=qs,typeof tt=="object"&&tt!==null&&(H=Tn(tt)),A=s.getDerivedStateFromProps,(tt=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==yt||it!==H)&&ug(i,d,l,H),Ma=!1,it=i.memoizedState,d.state=it,mo(i,l,d,f),po();var lt=i.memoizedState;x!==yt||it!==lt||Ma||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof A=="function"&&(yf(i,s,A,l),lt=i.memoizedState),(dt=Ma||cg(i,s,dt,l,it,lt,H)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(tt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,lt,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,lt,H)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),d.props=l,d.state=lt,d.context=H,l=dt):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,kl(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=fs(i,e.child,null,f),i.child=fs(i,null,s,f)):bn(e,i,s,f),i.memoizedState=d.state,e=i.child):e=ji(e,i,f),e}function bg(e,i,s,l){return ss(),i.flags|=256,bn(e,i,s,l),i.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:pm()}}function Af(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ei),e}function Ag(e,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),x&&(f=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ae){if(f?ba(i):Aa(),(e=Ze)?(e=O_(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},s=sm(e),s.return=i,i.child=s,En=i,Ze=null)):e=null,e===null)throw xa(i);return lh(e)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(Aa(),f=i.mode,A=Xl({mode:"hidden",children:A},f),l=as(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=bf(s),l.childLanes=Af(e,x,s),i.memoizedState=Tf,xo(null,l)):(ba(i),Rf(i,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(d)i.flags&256?(ba(i),i.flags&=-257,i=Cf(e,i,s)):i.memoizedState!==null?(Aa(),i.child=e.child,i.flags|=128,i=null):(Aa(),A=l.fallback,f=i.mode,l=Xl({mode:"visible",children:l.children},f),A=as(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,fs(i,e.child,null,s),l=i.child,l.memoizedState=bf(s),l.childLanes=Af(e,x,s),i.memoizedState=Tf,i=xo(null,l));else if(ba(i),lh(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var tt=x.dgst;x=tt,l=Error(a(419)),l.stack="",l.digest=x,oo({value:l,source:null,stack:null}),i=Cf(e,i,s)}else if(ln||Ks(e,i,s,!1),x=(s&e.childLanes)!==0,ln||x){if(x=qe,x!==null&&(l=Ps(x,s),l!==0&&l!==H.retryLane))throw H.retryLane=l,is(e,l),Gn(x,e,l),Mf;oh(A)||$l(),i=Cf(e,i,s)}else oh(A)?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,Ze=di(A.nextSibling),En=i,Ae=!0,ya=null,fi=!1,e!==null&&lm(i,e),i=Rf(i,l.children),i.flags|=4096);return i}return f?(Aa(),A=l.fallback,f=i.mode,H=e.child,tt=H.sibling,l=ki(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,tt!==null?A=ki(tt,A):(A=as(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,xo(null,l),l=i.child,A=e.child.memoizedState,A===null?A=bf(s):(f=A.cachePool,f!==null?(H=rn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=pm(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=Af(e,x,s),i.memoizedState=Tf,xo(e.child,l)):(ba(i),s=e.child,e=s.sibling,s=ki(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(x=i.deletions,x===null?(i.deletions=[e],i.flags|=16):x.push(e)),i.child=s,i.memoizedState=null,s)}function Rf(e,i){return i=Xl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Xl(e,i){return e=Qn(22,e,null,i),e.lanes=0,e}function Cf(e,i,s){return fs(i,e.child,null,s),e=Rf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Rg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Gu(e.return,i,s)}function wf(e,i,s,l,f,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=s,x.tailMode=f,x.treeForkCount=d)}function Cg(e,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var x=nn.current,A=(x&2)!==0;if(A?(x=x&1|2,i.flags|=128):x&=1,Mt(nn,x),bn(e,i,l,s),l=Ae?ro:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rg(e,s,i);else if(e.tag===19)Rg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&Ll(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),wf(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Ll(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}wf(i,!0,s,null,d,l);break;case"together":wf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ji(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),wa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Ks(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ki(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ki(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Df(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function xx(e,i,s){switch(i.tag){case 3:It(i,i.stateNode.containerInfo),Sa(i,rn,e.memoizedState.cache),ss();break;case 27:case 5:Lt(i);break;case 4:It(i,i.stateNode.containerInfo);break;case 10:Sa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,tf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ag(e,i,s):(ba(i),e=ji(e,i,s),e!==null?e.sibling:null);ba(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ks(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Cg(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Mt(nn,nn.current),l)break;return null;case 22:return i.lanes=0,xg(e,i,s,i.pendingProps);case 24:Sa(i,rn,e.memoizedState.cache)}return ji(e,i,s)}function wg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)ln=!0;else{if(!Df(e,s)&&(i.flags&128)===0)return ln=!1,xx(e,i,s);ln=(e.flags&131072)!==0}else ln=!1,Ae&&(i.flags&1048576)!==0&&om(i,ro,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=cs(i.elementType),i.type=e,typeof e=="function")Ou(e)?(l=ds(e,l),i.tag=1,i=Tg(null,i,e,l,s)):(i.tag=0,i=Ef(null,i,e,l,s));else{if(e!=null){var f=e.$$typeof;if(f===R){i.tag=11,i=_g(null,i,e,l,s);break t}else if(f===O){i.tag=14,i=vg(null,i,e,l,s);break t}}throw i=ht(e)||e,Error(a(306,i,""))}}return i;case 0:return Ef(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=ds(l,i.pendingProps),Tg(e,i,l,f,s);case 3:t:{if(It(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,ju(e,i),mo(i,l,null,s);var x=i.memoizedState;if(l=x.cache,Sa(i,rn,l),l!==d.cache&&ku(i,[rn],s,!0),po(),l=x.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=bg(e,i,l,s);break t}else if(l!==f){f=li(Error(a(424)),i),oo(f),i=bg(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=di(e.firstChild),En=i,Ae=!0,ya=null,fi=!0,s=xm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ss(),l===f){i=ji(e,i,s);break t}bn(e,i,l,s)}i=i.child}return i;case 26:return kl(e,i),e===null?(s=H_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ae||(s=i.type,e=i.pendingProps,l=rc(nt.current).createElement(s),l[sn]=i,l[Sn]=e,An(l,s,e),Et(l),i.stateNode=l):i.memoizedState=H_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Lt(i),e===null&&Ae&&(l=i.stateNode=B_(i.type,i.pendingProps,nt.current),En=i,fi=!0,f=Ze,Oa(i.type)?(ch=f,Ze=di(l.firstChild)):Ze=f),bn(e,i,i.pendingProps.children,s),kl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ae&&((f=l=Ze)&&(l=Kx(l,i.type,i.pendingProps,fi),l!==null?(i.stateNode=l,En=i,Ze=di(l.firstChild),fi=!1,f=!0):f=!1),f||xa(i)),Lt(i),f=i.type,d=i.pendingProps,x=e!==null?e.memoizedProps:null,l=d.children,ah(f,d)?l=null:x!==null&&ah(f,x)&&(i.flags|=32),i.memoizedState!==null&&(f=nf(e,i,fx,null,null,s),Po._currentValue=f),kl(e,i),bn(e,i,l,s),i.child;case 6:return e===null&&Ae&&((e=s=Ze)&&(s=Qx(s,i.pendingProps,fi),s!==null?(i.stateNode=s,En=i,Ze=null,e=!0):e=!1),e||xa(i)),null;case 13:return Ag(e,i,s);case 4:return It(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=fs(i,null,l,s):bn(e,i,l,s),i.child;case 11:return _g(e,i,i.type,i.pendingProps,s);case 7:return bn(e,i,i.pendingProps,s),i.child;case 8:return bn(e,i,i.pendingProps.children,s),i.child;case 12:return bn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Sa(i,i.type,l.value),bn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,os(i),f=Tn(f),l=l(f),i.flags|=1,bn(e,i,l,s),i.child;case 14:return vg(e,i,i.type,i.pendingProps,s);case 15:return yg(e,i,i.type,i.pendingProps,s);case 19:return Cg(e,i,s);case 31:return yx(e,i,s);case 22:return xg(e,i,s,i.pendingProps);case 24:return os(i),l=Tn(rn),e===null?(f=qu(),f===null&&(f=qe,d=Xu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},Zu(i),Sa(i,rn,f)):((e.lanes&s)!==0&&(ju(e,i),mo(i,null,null,s),po()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Sa(i,rn,l)):(l=d.cache,Sa(i,rn,l),l!==f.cache&&ku(i,[rn],s,!0))),bn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ki(e){e.flags|=4}function Uf(e,i,s,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(n_())e.flags|=8192;else throw us=Cl,Yu}else e.flags&=-16777217}function Dg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W_(i))if(n_())e.flags|=8192;else throw us=Cl,Yu}function Wl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ze():536870912,e.lanes|=i,lr|=i)}function So(e,i){if(!Ae)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function Sx(e,i,s){var l=i.pendingProps;switch(Iu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),qi(rn),bt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(js(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hu())),je(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(Ki(i),d!==null?(je(i),Dg(i,d)):(je(i),Uf(i,f,null,l,s))):d?d!==e.memoizedState?(Ki(i),je(i),Dg(i,d)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ki(i),je(i),Uf(i,f,e,l,s)),null;case 27:if(oe(i),s=nt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=Ut.current,js(i)?cm(i):(e=B_(f,l,s),i.stateNode=e,Ki(i))}return je(i),null;case 5:if(oe(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(d=Ut.current,js(i))cm(i);else{var x=rc(nt.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?x.createElement(f,{is:l.is}):x.createElement(f)}}d[sn]=i,d[Sn]=l;t:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break t;for(;x.sibling===null;){if(x.return===null||x.return===i)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=d;t:switch(An(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ki(i)}}return je(i),Uf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=nt.current,js(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=En,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[sn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||A_(e.nodeValue,s)),e||xa(i,!0)}else e=rc(e).createTextNode(l),e[sn]=i,i.stateNode=e}return je(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=js(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[sn]=i}else ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else s=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?($n(i),i):($n(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=js(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[sn]=i}else ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),f=!1}else f=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?($n(i),i):($n(i),null)}return $n(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Wl(i,i.updateQueue),je(i),null);case 4:return bt(),e===null&&$f(i.stateNode.containerInfo),je(i),null;case 10:return qi(i.type),je(i),null;case 19:if(et(nn),l=i.memoizedState,l===null)return je(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)So(l,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Ll(e),d!==null){for(i.flags|=128,So(l,!1),e=d.updateQueue,i.updateQueue=e,Wl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)am(s,e),s=s.sibling;return Mt(nn,nn.current&1|2),Ae&&Xi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&T()>Kl&&(i.flags|=128,f=!0,So(l,!1),i.lanes=4194304)}else{if(!f)if(e=Ll(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Wl(i,e),So(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ae)return je(i),null}else 2*T()-l.renderingStartTime>Kl&&s!==536870912&&(i.flags|=128,f=!0,So(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=T(),e.sibling=null,s=nn.current,Mt(nn,f?s&1|2:s&1),Ae&&Xi(i,l.treeForkCount),e):(je(i),null);case 22:case 23:return $n(i),$u(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),s=i.updateQueue,s!==null&&Wl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&et(ls),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),qi(rn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Mx(e,i){switch(Iu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return qi(rn),bt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return oe(i),null;case 31:if(i.memoizedState!==null){if($n(i),i.alternate===null)throw Error(a(340));ss()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if($n(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ss()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(nn),null;case 4:return bt(),null;case 10:return qi(i.type),null;case 22:case 23:return $n(i),$u(),e!==null&&et(ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return qi(rn),null;case 25:return null;default:return null}}function Ug(e,i){switch(Iu(i),i.tag){case 3:qi(rn),bt();break;case 26:case 27:case 5:oe(i);break;case 4:bt();break;case 31:i.memoizedState!==null&&$n(i);break;case 13:$n(i);break;case 19:et(nn);break;case 10:qi(i.type);break;case 22:case 23:$n(i),$u(),e!==null&&et(ls);break;case 24:qi(rn)}}function Mo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var d=s.create,x=s.inst;l=d(),x.destroy=l}s=s.next}while(s!==f)}}catch(A){Ie(i,i.return,A)}}function Ra(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var x=l.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,f=i;var H=s,tt=A;try{tt()}catch(dt){Ie(f,H,dt)}}}l=l.next}while(l!==d)}}catch(dt){Ie(i,i.return,dt)}}function Lg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Mm(i,s)}catch(l){Ie(e,e.return,l)}}}function Ng(e,i,s){s.props=ds(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Ie(e,i,l)}}function Eo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Ie(e,i,f)}}function Ni(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Ie(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Ie(e,i,f)}else s.current=null}function Og(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Ie(e,e.return,f)}}function Lf(e,i,s){try{var l=e.stateNode;Xx(l,e.type,s,i),l[Sn]=i}catch(f){Ie(e,e.return,f)}}function Pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function Nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Of(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Vi));else if(l!==4&&(l===27&&Oa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Of(e,i,s),e=e.sibling;e!==null;)Of(e,i,s),e=e.sibling}function ql(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Oa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ql(e,i,s),e=e.sibling;e!==null;)ql(e,i,s),e=e.sibling}function zg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);An(i,l,s),i[sn]=e,i[Sn]=s}catch(d){Ie(e,e.return,d)}}var Qi=!1,cn=!1,Pf=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Ex(e,i){if(e=e.containerInfo,nh=dc,e=jp(e),Ru(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var x=0,A=-1,H=-1,tt=0,dt=0,yt=e,it=null;e:for(;;){for(var lt;yt!==s||f!==0&&yt.nodeType!==3||(A=x+f),yt!==d||l!==0&&yt.nodeType!==3||(H=x+l),yt.nodeType===3&&(x+=yt.nodeValue.length),(lt=yt.firstChild)!==null;)it=yt,yt=lt;for(;;){if(yt===e)break e;if(it===s&&++tt===f&&(A=x),it===d&&++dt===l&&(H=x),(lt=yt.nextSibling)!==null)break;yt=it,it=yt.parentNode}yt=lt}s=A===-1||H===-1?null:{start:A,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(ih={focusedElem:e,selectionRange:s},dc=!1,vn=i;vn!==null;)if(i=vn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,vn=e;else for(;vn!==null;){switch(i=vn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Zt=ds(s.type,f);e=l.getSnapshotBeforeUpdate(Zt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ie(s,s.return,se)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)rh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,vn=e;break}vn=i.return}}function Ig(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:$i(e,s),l&4&&Mo(5,s);break;case 1:if($i(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(x){Ie(s,s.return,x)}else{var f=ds(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(s,s.return,x)}}l&64&&Lg(s),l&512&&Eo(s,s.return);break;case 3:if($i(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Mm(e,i)}catch(x){Ie(s,s.return,x)}}break;case 27:i===null&&l&4&&zg(s);case 26:case 5:$i(e,s),i===null&&l&4&&Og(s),l&512&&Eo(s,s.return);break;case 12:$i(e,s);break;case 31:$i(e,s),l&4&&Vg(e,s);break;case 13:$i(e,s),l&4&&Gg(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Lx.bind(null,s),Jx(e,s))));break;case 22:if(l=s.memoizedState!==null||Qi,!l){i=i!==null&&i.memoizedState!==null||cn,f=Qi;var d=cn;Qi=l,(cn=i)&&!d?ta(e,s,(s.subtreeFlags&8772)!==0):$i(e,s),Qi=f,cn=d}break;case 30:break;default:$i(e,s)}}function Fg(e){var i=e.alternate;i!==null&&(e.alternate=null,Fg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&C(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,In=!1;function Ji(e,i,s){for(s=s.child;s!==null;)Hg(e,i,s),s=s.sibling}function Hg(e,i,s){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(wt,s)}catch{}switch(s.tag){case 26:cn||Ni(s,i),Ji(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:cn||Ni(s,i);var l=Ke,f=In;Oa(s.type)&&(Ke=s.stateNode,In=!1),Ji(e,i,s),Lo(s.stateNode),Ke=l,In=f;break;case 5:cn||Ni(s,i);case 6:if(l=Ke,f=In,Ke=null,Ji(e,i,s),Ke=l,In=f,Ke!==null)if(In)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(s.stateNode)}catch(d){Ie(s,i,d)}else try{Ke.removeChild(s.stateNode)}catch(d){Ie(s,i,d)}break;case 18:Ke!==null&&(In?(e=Ke,L_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),gr(e)):L_(Ke,s.stateNode));break;case 4:l=Ke,f=In,Ke=s.stateNode.containerInfo,In=!0,Ji(e,i,s),Ke=l,In=f;break;case 0:case 11:case 14:case 15:Ra(2,s,i),cn||Ra(4,s,i),Ji(e,i,s);break;case 1:cn||(Ni(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Ng(s,i,l)),Ji(e,i,s);break;case 21:Ji(e,i,s);break;case 22:cn=(l=cn)||s.memoizedState!==null,Ji(e,i,s),cn=l;break;default:Ji(e,i,s)}}function Vg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gr(e)}catch(s){Ie(i,i.return,s)}}}function Gg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gr(e)}catch(s){Ie(i,i.return,s)}}function Tx(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Bg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Bg),i;default:throw Error(a(435,e.tag))}}function Yl(e,i){var s=Tx(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=Nx.bind(null,e,l);l.then(f,f)}})}function Fn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=e,x=i,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Oa(A.type)){Ke=A.stateNode,In=!1;break t}break;case 5:Ke=A.stateNode,In=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,In=!0;break t}A=A.return}if(Ke===null)throw Error(a(160));Hg(d,x,f),Ke=null,In=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)kg(i,e),i=i.sibling}var vi=null;function kg(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(i,e),Hn(e),l&4&&(Ra(3,e,e.return),Mo(3,e),Ra(5,e,e.return));break;case 1:Fn(i,e),Hn(e),l&512&&(cn||s===null||Ni(s,s.return)),l&64&&Qi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=vi;if(Fn(i,e),Hn(e),l&512&&(cn||s===null||Ni(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ja]||d[sn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),An(d,l,s),d[sn]=e,Et(d),l=d;break t;case"link":var x=k_("link","href",f).get(l+(s.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(A,1);break e}}d=f.createElement(l),An(d,l,s),f.head.appendChild(d);break;case"meta":if(x=k_("meta","content",f).get(l+(s.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(A,1);break e}}d=f.createElement(l),An(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[sn]=e,Et(d),l=d}e.stateNode=l}else X_(f,e.type,e.stateNode);else e.stateNode=G_(f,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?X_(f,e.type,e.stateNode):G_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Lf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Fn(i,e),Hn(e),l&512&&(cn||s===null||Ni(s,s.return)),s!==null&&l&4&&Lf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Fn(i,e),Hn(e),l&512&&(cn||s===null||Ni(s,s.return)),e.flags&32){f=e.stateNode;try{Fs(f,"")}catch(Zt){Ie(e,e.return,Zt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Lf(e,f,s!==null?s.memoizedProps:f)),l&1024&&(Pf=!0);break;case 6:if(Fn(i,e),Hn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Zt){Ie(e,e.return,Zt)}}break;case 3:if(cc=null,f=vi,vi=oc(i.containerInfo),Fn(i,e),vi=f,Hn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{gr(i.containerInfo)}catch(Zt){Ie(e,e.return,Zt)}Pf&&(Pf=!1,Xg(e));break;case 4:l=vi,vi=oc(e.stateNode.containerInfo),Fn(i,e),Hn(e),vi=l;break;case 12:Fn(i,e),Hn(e);break;case 31:Fn(i,e),Hn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yl(e,l)));break;case 13:Fn(i,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(jl=T()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yl(e,l)));break;case 22:f=e.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,tt=Qi,dt=cn;if(Qi=tt||f,cn=dt||H,Fn(i,e),cn=dt,Qi=tt,Hn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||Qi||cn||ps(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(d=H.stateNode,f)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=H.stateNode;var yt=H.memoizedProps.style,it=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Zt){Ie(H,H.return,Zt)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(Zt){Ie(H,H.return,Zt)}}}else if(i.tag===18){if(s===null){H=i;try{var lt=H.stateNode;f?N_(lt,!0):N_(H.stateNode,!1)}catch(Zt){Ie(H,H.return,Zt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Yl(e,s))));break;case 19:Fn(i,e),Hn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Yl(e,l)));break;case 30:break;case 21:break;default:Fn(i,e),Hn(e)}}function Hn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(Pg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=Nf(e);ql(e,d,f);break;case 5:var x=s.stateNode;s.flags&32&&(Fs(x,""),s.flags&=-33);var A=Nf(e);ql(e,A,x);break;case 3:case 4:var H=s.stateNode.containerInfo,tt=Nf(e);Of(e,tt,H);break;default:throw Error(a(161))}}catch(dt){Ie(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Xg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function $i(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ig(e,i.alternate,i),i=i.sibling}function ps(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ra(4,i,i.return),ps(i);break;case 1:Ni(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ng(i,i.return,s),ps(i);break;case 27:Lo(i.stateNode);case 26:case 5:Ni(i,i.return),ps(i);break;case 22:i.memoizedState===null&&ps(i);break;case 30:ps(i);break;default:ps(i)}e=e.sibling}}function ta(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,x=d.flags;switch(d.tag){case 0:case 11:case 15:ta(f,d,s),Mo(4,d);break;case 1:if(ta(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(tt){Ie(l,l.return,tt)}if(l=d,f=l.updateQueue,f!==null){var A=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)Sm(H[f],A)}catch(tt){Ie(l,l.return,tt)}}s&&x&64&&Lg(d),Eo(d,d.return);break;case 27:zg(d);case 26:case 5:ta(f,d,s),s&&l===null&&x&4&&Og(d),Eo(d,d.return);break;case 12:ta(f,d,s);break;case 31:ta(f,d,s),s&&x&4&&Vg(f,d);break;case 13:ta(f,d,s),s&&x&4&&Gg(f,d);break;case 22:d.memoizedState===null&&ta(f,d,s),Eo(d,d.return);break;case 30:break;default:ta(f,d,s)}i=i.sibling}}function zf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&lo(s))}function Bf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&lo(e))}function yi(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Wg(e,i,s,l),i=i.sibling}function Wg(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:yi(e,i,s,l),f&2048&&Mo(9,i);break;case 1:yi(e,i,s,l);break;case 3:yi(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&lo(e)));break;case 12:if(f&2048){yi(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ie(i,i.return,H)}}else yi(e,i,s,l);break;case 31:yi(e,i,s,l);break;case 13:yi(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,x=i.alternate,i.memoizedState!==null?d._visibility&2?yi(e,i,s,l):To(e,i):d._visibility&2?yi(e,i,s,l):(d._visibility|=2,sr(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&zf(x,i);break;case 24:yi(e,i,s,l),f&2048&&Bf(i.alternate,i);break;default:yi(e,i,s,l)}}function sr(e,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,x=i,A=s,H=l,tt=x.flags;switch(x.tag){case 0:case 11:case 15:sr(d,x,A,H,f),Mo(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?sr(d,x,A,H,f):To(d,x):(dt._visibility|=2,sr(d,x,A,H,f)),f&&tt&2048&&zf(x.alternate,x);break;case 24:sr(d,x,A,H,f),f&&tt&2048&&Bf(x.alternate,x);break;default:sr(d,x,A,H,f)}i=i.sibling}}function To(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:To(s,l),f&2048&&zf(l.alternate,l);break;case 24:To(s,l),f&2048&&Bf(l.alternate,l);break;default:To(s,l)}i=i.sibling}}var bo=8192;function rr(e,i,s){if(e.subtreeFlags&bo)for(e=e.child;e!==null;)qg(e,i,s),e=e.sibling}function qg(e,i,s){switch(e.tag){case 26:rr(e,i,s),e.flags&bo&&e.memoizedState!==null&&uS(s,vi,e.memoizedState,e.memoizedProps);break;case 5:rr(e,i,s);break;case 3:case 4:var l=vi;vi=oc(e.stateNode.containerInfo),rr(e,i,s),vi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=bo,bo=16777216,rr(e,i,s),bo=l):rr(e,i,s));break;default:rr(e,i,s)}}function Yg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ao(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,jg(l,e)}Yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zg(e),e=e.sibling}function Zg(e){switch(e.tag){case 0:case 11:case 15:Ao(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Ao(e);break;case 12:Ao(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Zl(e)):Ao(e);break;default:Ao(e)}}function Zl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,jg(l,e)}Yg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ra(8,i,i.return),Zl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Zl(i));break;default:Zl(i)}e=e.sibling}}function jg(e,i){for(;vn!==null;){var s=vn;switch(s.tag){case 0:case 11:case 15:Ra(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:lo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,vn=l;else t:for(s=e;vn!==null;){l=vn;var f=l.sibling,d=l.return;if(Fg(l),l===s){vn=null;break t}if(f!==null){f.return=d,vn=f;break t}vn=d}}}var bx={getCacheForType:function(e){var i=Tn(rn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Tn(rn).controller.signal}},Ax=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,Se=null,Te=0,Be=0,ti=null,Ca=!1,or=!1,If=!1,ea=0,tn=0,wa=0,ms=0,Ff=0,ei=0,lr=0,Ro=null,Vn=null,Hf=!1,jl=0,Kg=0,Kl=1/0,Ql=null,Da=null,hn=0,Ua=null,cr=null,na=0,Vf=0,Gf=null,Qg=null,Co=0,kf=null;function ni(){return(Ne&2)!==0&&Te!==0?Te&-Te:z.T!==null?jf():Qa()}function Jg(){if(ei===0)if((Te&536870912)===0||Ae){var e=Bt;Bt<<=1,(Bt&3932160)===0&&(Bt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function Gn(e,i,s){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(ur(e,0),La(e,Te,ei,!1)),Ln(e,s),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(ms|=s),tn===4&&La(e,Te,ei,!1)),Oi(e))}function $g(e,i,s){if((Ne&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Yt(e,i),f=l?wx(e,i):Wf(e,i,!0),d=l;do{if(f===0){or&&!l&&La(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!Rx(s)){f=Wf(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;t:{var A=e;f=Ro;var H=A.current.memoizedState.isDehydrated;if(H&&(ur(A,x).flags|=256),x=Wf(A,x,!1),x!==2){if(If&&!H){A.errorRecoveryDisabledLanes|=d,ms|=d,f=4;break t}d=Vn,Vn=f,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}f=x}if(d=!1,f!==2)continue}}if(f===1){ur(e,0),La(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:La(l,i,ei,!Ca);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=jl+300-T(),10<f)){if(La(l,i,ei,!Ca),xt(l,0,!0)!==0)break t;na=i,l.timeoutHandle=D_(t_.bind(null,l,s,Vn,Ql,Hf,i,ei,ms,lr,Ca,d,"Throttled",-0,0),f);break t}t_(l,s,Vn,Ql,Hf,i,ei,ms,lr,Ca,d,null,-0,0)}}break}while(!0);Oi(e)}function t_(e,i,s,l,f,d,x,A,H,tt,dt,yt,it,lt){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},qg(i,d,yt);var Zt=(d&62914560)===d?jl-T():(d&4194048)===d?Kg-T():0;if(Zt=fS(yt,Zt),Zt!==null){na=d,e.cancelPendingCommit=Zt(l_.bind(null,e,i,d,s,l,f,x,A,H,dt,yt,null,it,lt)),La(e,d,x,!tt);return}}l_(e,i,d,s,l,f,x,A,H)}function Rx(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!Kn(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function La(e,i,s,l){i&=~Ff,i&=~ms,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-Wt(f),x=1<<d;l[d]=-1,f&=~x}s!==0&&Zr(e,s,i)}function Jl(){return(Ne&6)===0?(wo(0),!1):!0}function Xf(){if(Se!==null){if(Be===0)var e=Se.return;else e=Se,Wi=rs=null,rf(e),tr=null,uo=0,e=Se;for(;e!==null;)Ug(e.alternate,e),e=e.return;Se=null}}function ur(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Yx(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),na=0,Xf(),qe=e,Se=s=ki(e.current,null),Te=i,Be=0,ti=null,Ca=!1,or=Yt(e,i),If=!1,lr=ei=Ff=ms=wa=tn=0,Vn=Ro=null,Hf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Wt(l),d=1<<f;i|=e[f],l&=~d}return ea=i,yl(),s}function e_(e,i){pe=null,z.H=yo,i===$s||i===Rl?(i=_m(),Be=3):i===Yu?(i=_m(),Be=4):Be=i===Mf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,Se===null&&(tn=1,Vl(e,li(i,e.current)))}function n_(){var e=Jn.current;return e===null?!0:(Te&4194048)===Te?hi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===hi:!1}function i_(){var e=z.H;return z.H=yo,e===null?yo:e}function a_(){var e=z.A;return z.A=bx,e}function $l(){tn=4,Ca||(Te&4194048)!==Te&&Jn.current!==null||(or=!0),(wa&134217727)===0&&(ms&134217727)===0||qe===null||La(qe,Te,ei,!1)}function Wf(e,i,s){var l=Ne;Ne|=2;var f=i_(),d=a_();(qe!==e||Te!==i)&&(Ql=null,ur(e,i)),i=!1;var x=tn;t:do try{if(Be!==0&&Se!==null){var A=Se,H=ti;switch(Be){case 8:Xf(),x=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(i=!0);var tt=Be;if(Be=0,ti=null,fr(e,A,H,tt),s&&or){x=0;break t}break;default:tt=Be,Be=0,ti=null,fr(e,A,H,tt)}}Cx(),x=tn;break}catch(dt){e_(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Wi=rs=null,Ne=l,z.H=f,z.A=d,Se===null&&(qe=null,Te=0,yl()),x}function Cx(){for(;Se!==null;)s_(Se)}function wx(e,i){var s=Ne;Ne|=2;var l=i_(),f=a_();qe!==e||Te!==i?(Ql=null,Kl=T()+500,ur(e,i)):or=Yt(e,i);t:do try{if(Be!==0&&Se!==null){i=Se;var d=ti;e:switch(Be){case 1:Be=0,ti=null,fr(e,i,d,1);break;case 2:case 9:if(mm(d)){Be=0,ti=null,r_(i);break}i=function(){Be!==2&&Be!==9||qe!==e||(Be=7),Oi(e)},d.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:mm(d)?(Be=0,ti=null,r_(i)):(Be=0,ti=null,fr(e,i,d,7));break;case 5:var x=null;switch(Se.tag){case 26:x=Se.memoizedState;case 5:case 27:var A=Se;if(x?W_(x):A.stateNode.complete){Be=0,ti=null;var H=A.sibling;if(H!==null)Se=H;else{var tt=A.return;tt!==null?(Se=tt,tc(tt)):Se=null}break e}}Be=0,ti=null,fr(e,i,d,5);break;case 6:Be=0,ti=null,fr(e,i,d,6);break;case 8:Xf(),tn=6;break t;default:throw Error(a(462))}}Dx();break}catch(dt){e_(e,dt)}while(!0);return Wi=rs=null,z.H=l,z.A=f,Ne=s,Se!==null?0:(qe=null,Te=0,yl(),tn)}function Dx(){for(;Se!==null&&!ue();)s_(Se)}function s_(e){var i=wg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,i===null?tc(e):Se=i}function r_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Eg(s,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=Eg(s,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:rf(i);default:Ug(s,i),i=Se=am(i,ea),i=wg(s,i,ea)}e.memoizedProps=e.pendingProps,i===null?tc(e):Se=i}function fr(e,i,s,l){Wi=rs=null,rf(i),tr=null,uo=0;var f=i.return;try{if(vx(e,f,i,s,Te)){tn=1,Vl(e,li(s,e.current)),Se=null;return}}catch(d){if(f!==null)throw Se=f,d;tn=1,Vl(e,li(s,e.current)),Se=null;return}i.flags&32768?(Ae||l===1?e=!0:or||(Te&536870912)!==0?e=!1:(Ca=e=!0,(l===2||l===9||l===3||l===6)&&(l=Jn.current,l!==null&&l.tag===13&&(l.flags|=16384))),o_(i,e)):tc(i)}function tc(e){var i=e;do{if((i.flags&32768)!==0){o_(i,Ca);return}e=i.return;var s=Sx(i.alternate,i,ea);if(s!==null){Se=s;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);tn===0&&(tn=5)}function o_(e,i){do{var s=Mx(e.alternate,e);if(s!==null){s.flags&=32767,Se=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=s}while(e!==null);tn=6,Se=null}function l_(e,i,s,l,f,d,x,A,H){e.cancelPendingCommit=null;do ec();while(hn!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Lu,ri(e,s,d,x,A,H),e===qe&&(Se=qe=null,Te=0),cr=i,Ua=e,na=s,Vf=d,Gf=f,Qg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ox(ft,function(){return d_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=q.p,q.p=2,x=Ne,Ne|=4;try{Ex(e,i,s)}finally{Ne=x,q.p=f,z.T=l}}hn=1,c_(),u_(),f_()}}function c_(){if(hn===1){hn=0;var e=Ua,i=cr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=q.p;q.p=2;var f=Ne;Ne|=4;try{kg(i,e);var d=ih,x=jp(e.containerInfo),A=d.focusedElem,H=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&Zp(A.ownerDocument.documentElement,A)){if(H!==null&&Ru(A)){var tt=H.start,dt=H.end;if(dt===void 0&&(dt=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(dt,A.value.length);else{var yt=A.ownerDocument||document,it=yt&&yt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),Zt=A.textContent.length,se=Math.min(H.start,Zt),Ve=H.end===void 0?se:Math.min(H.end,Zt);!lt.extend&&se>Ve&&(x=Ve,Ve=se,se=x);var j=Yp(A,se),X=Yp(A,Ve);if(j&&X&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var $=yt.createRange();$.setStart(j.node,j.offset),lt.removeAllRanges(),se>Ve?(lt.addRange($),lt.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),lt.addRange($))}}}}for(yt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&yt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<yt.length;A++){var gt=yt[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}dc=!!nh,ih=nh=null}finally{Ne=f,q.p=l,z.T=s}}e.current=i,hn=2}}function u_(){if(hn===2){hn=0;var e=Ua,i=cr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=q.p;q.p=2;var f=Ne;Ne|=4;try{Ig(e,i.alternate,i)}finally{Ne=f,q.p=l,z.T=s}}hn=3}}function f_(){if(hn===4||hn===3){hn=0,L();var e=Ua,i=cr,s=na,l=Qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?hn=5:(hn=0,cr=Ua=null,h_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Da=null),Bs(s),i=i.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(wt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,f=q.p,q.p=2,z.T=null;try{for(var d=e.onRecoverableError,x=0;x<l.length;x++){var A=l[x];d(A.value,{componentStack:A.stack})}}finally{z.T=i,q.p=f}}(na&3)!==0&&ec(),Oi(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===kf?Co++:(Co=0,kf=e):Co=0,wo(0)}}function h_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,lo(i)))}function ec(){return c_(),u_(),f_(),d_()}function d_(){if(hn!==5)return!1;var e=Ua,i=Vf;Vf=0;var s=Bs(na),l=z.T,f=q.p;try{q.p=32>s?32:s,z.T=null,s=Gf,Gf=null;var d=Ua,x=na;if(hn=0,cr=Ua=null,na=0,(Ne&6)!==0)throw Error(a(331));var A=Ne;if(Ne|=4,Zg(d.current),Wg(d,d.current,x,s),Ne=A,wo(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(wt,d)}catch{}return!0}finally{q.p=f,z.T=l,h_(e,i)}}function p_(e,i,s){i=li(s,i),i=Sf(e.stateNode,i,2),e=Ta(e,i,2),e!==null&&(Ln(e,2),Oi(e))}function Ie(e,i,s){if(e.tag===3)p_(e,e,s);else for(;i!==null;){if(i.tag===3){p_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Da===null||!Da.has(l))){e=li(s,e),s=mg(2),l=Ta(i,s,2),l!==null&&(gg(s,l,i,e),Ln(l,2),Oi(l));break}}i=i.return}}function qf(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Ax;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(If=!0,f.add(s),e=Ux.bind(null,e,i,s),i.then(e,e))}function Ux(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(Te&s)===s&&(tn===4||tn===3&&(Te&62914560)===Te&&300>T()-jl?(Ne&2)===0&&ur(e,0):Ff|=s,lr===Te&&(lr=0)),Oi(e)}function m_(e,i){i===0&&(i=ze()),e=is(e,i),e!==null&&(Ln(e,i),Oi(e))}function Lx(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),m_(e,s)}function Nx(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),m_(e,s)}function Ox(e,i){return zt(e,i)}var nc=null,hr=null,Yf=!1,ic=!1,Zf=!1,Na=0;function Oi(e){e!==hr&&e.next===null&&(hr===null?nc=hr=e:hr=hr.next=e),ic=!0,Yf||(Yf=!0,zx())}function wo(e,i){if(!Zf&&ic){Zf=!0;do for(var s=!1,l=nc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var x=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-Wt(42|e)+1)-1,d&=f&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,y_(l,d))}else d=Te,d=xt(l,l===qe?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Yt(l,d)||(s=!0,y_(l,d));l=l.next}while(s);Zf=!1}}function Px(){g_()}function g_(){ic=Yf=!1;var e=0;Na!==0&&qx()&&(e=Na);for(var i=T(),s=null,l=nc;l!==null;){var f=l.next,d=__(l,i);d===0?(l.next=null,s===null?nc=f:s.next=f,f===null&&(hr=s)):(s=l,(e!==0||(d&3)!==0)&&(ic=!0)),l=f}hn!==0&&hn!==5||wo(e),Na!==0&&(Na=0)}function __(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-Wt(d),A=1<<x,H=f[x];H===-1?((A&s)===0||(A&l)!==0)&&(f[x]=fe(A,i)):H<=i&&(e.expiredLanes|=A),d&=~A}if(i=qe,s=Te,s=xt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ce(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Yt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ce(l),Bs(s)){case 2:case 8:s=Tt;break;case 32:s=ft;break;case 268435456:s=Ot;break;default:s=ft}return l=v_.bind(null,e),s=zt(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ce(l),e.callbackPriority=2,e.callbackNode=null,2}function v_(e,i){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(ec()&&e.callbackNode!==s)return null;var l=Te;return l=xt(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:($g(e,l,i),__(e,T()),e.callbackNode!=null&&e.callbackNode===s?v_.bind(null,e):null)}function y_(e,i){if(ec())return null;$g(e,i,!0)}function zx(){Zx(function(){(Ne&6)!==0?zt(ct,Px):g_()})}function jf(){if(Na===0){var e=Qs;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Na=e}return Na}function x_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fl(""+e)}function S_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Bx(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=x_((f[Sn]||null).action),x=l.submitter;x&&(i=(i=x[Sn]||null)?x_(i.formAction):x.getAttribute("formAction"),i!==null&&(d=i,x=null));var A=new ml("action","action",null,l,f);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Na!==0){var H=x?S_(f,x):new FormData(f);mf(s,{pending:!0,data:H,method:f.method,action:d},null,H)}}else typeof d=="function"&&(A.preventDefault(),H=x?S_(f,x):new FormData(f),mf(s,{pending:!0,data:H,method:f.method,action:d},d,H))},currentTarget:f}]})}}for(var Kf=0;Kf<Uu.length;Kf++){var Qf=Uu[Kf],Ix=Qf.toLowerCase(),Fx=Qf[0].toUpperCase()+Qf.slice(1);_i(Ix,"on"+Fx)}_i(Jp,"onAnimationEnd"),_i($p,"onAnimationIteration"),_i(tm,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(ex,"onTransitionRun"),_i(nx,"onTransitionStart"),_i(ix,"onTransitionCancel"),_i(em,"onTransitionEnd"),ne("onMouseEnter",["mouseout","mouseover"]),ne("onMouseLeave",["mouseout","mouseover"]),ne("onPointerEnter",["pointerout","pointerover"]),ne("onPointerLeave",["pointerout","pointerover"]),Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function M_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var x=l.length-1;0<=x;x--){var A=l[x],H=A.instance,tt=A.currentTarget;if(A=A.listener,H!==d&&f.isPropagationStopped())break t;d=A,f.currentTarget=tt;try{d(f)}catch(dt){vl(dt)}f.currentTarget=null,d=H}else for(x=0;x<l.length;x++){if(A=l[x],H=A.instance,tt=A.currentTarget,A=A.listener,H!==d&&f.isPropagationStopped())break t;d=A,f.currentTarget=tt;try{d(f)}catch(dt){vl(dt)}f.currentTarget=null,d=H}}}}function Me(e,i){var s=i[Kr];s===void 0&&(s=i[Kr]=new Set);var l=e+"__bubble";s.has(l)||(E_(i,e,2,!1),s.add(l))}function Jf(e,i,s){var l=0;i&&(l|=4),E_(s,e,l,i)}var ac="_reactListening"+Math.random().toString(36).slice(2);function $f(e){if(!e[ac]){e[ac]=!0,Gt.forEach(function(s){s!=="selectionchange"&&(Hx.has(s)||Jf(s,!1,e),Jf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ac]||(i[ac]=!0,Jf("selectionchange",!1,i))}}function E_(e,i,s,l){switch(J_(i)){case 2:var f=pS;break;case 8:f=mS;break;default:f=ph}s=f.bind(null,i,s,e),f=void 0,!vu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function th(e,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var A=l.stateNode.containerInfo;if(A===f)break;if(x===4)for(x=l.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;A!==null;){if(x=Z(A),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){l=d=x;continue t}A=A.parentNode}}l=l.return}Cp(function(){var tt=d,dt=gu(s),yt=[];t:{var it=nm.get(e);if(it!==void 0){var lt=ml,Zt=e;switch(e){case"keypress":if(dl(s)===0)break t;case"keydown":case"keyup":lt=Ny;break;case"focusin":Zt="focus",lt=Mu;break;case"focusout":Zt="blur",lt=Mu;break;case"beforeblur":case"afterblur":lt=Mu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=zy;break;case Jp:case $p:case tm:lt=Ty;break;case em:lt=Iy;break;case"scroll":case"scrollend":lt=yy;break;case"wheel":lt=Hy;break;case"copy":case"cut":case"paste":lt=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Np;break;case"toggle":case"beforetoggle":lt=Gy}var se=(i&4)!==0,Ve=!se&&(e==="scroll"||e==="scrollend"),j=se?it!==null?it+"Capture":null:it;se=[];for(var X=tt,$;X!==null;){var gt=X;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||j===null||(gt=Qr(X,j),gt!=null&&se.push(Uo(X,gt,$))),Ve)break;X=X.return}0<se.length&&(it=new lt(it,Zt,null,s,dt),yt.push({event:it,listeners:se}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&s!==mu&&(Zt=s.relatedTarget||s.fromElement)&&(Z(Zt)||Zt[ga]))break t;if((lt||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Zt=s.relatedTarget||s.toElement,lt=tt,Zt=Zt?Z(Zt):null,Zt!==null&&(Ve=c(Zt),se=Zt.tag,Zt!==Ve||se!==5&&se!==27&&se!==6)&&(Zt=null)):(lt=null,Zt=tt),lt!==Zt)){if(se=Up,gt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(se=Np,gt="onPointerLeave",j="onPointerEnter",X="pointer"),Ve=lt==null?it:ot(lt),$=Zt==null?it:ot(Zt),it=new se(gt,X+"leave",lt,s,dt),it.target=Ve,it.relatedTarget=$,gt=null,Z(dt)===tt&&(se=new se(j,X+"enter",Zt,s,dt),se.target=$,se.relatedTarget=Ve,gt=se),Ve=gt,lt&&Zt)e:{for(se=Vx,j=lt,X=Zt,$=0,gt=j;gt;gt=se(gt))$++;gt=0;for(var ae=X;ae;ae=se(ae))gt++;for(;0<$-gt;)j=se(j),$--;for(;0<gt-$;)X=se(X),gt--;for(;$--;){if(j===X||X!==null&&j===X.alternate){se=j;break e}j=se(j),X=se(X)}se=null}else se=null;lt!==null&&T_(yt,it,lt,se,!1),Zt!==null&&Ve!==null&&T_(yt,Ve,Zt,se,!0)}}t:{if(it=tt?ot(tt):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var De=Vp;else if(Fp(it))if(Gp)De=Jy;else{De=Ky;var te=jy}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&pu(tt.elementType)&&(De=Vp):De=Qy;if(De&&(De=De(e,tt))){Hp(yt,De,s,dt);break t}te&&te(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&fn(it,"number",it.value)}switch(te=tt?ot(tt):window,e){case"focusin":(Fp(te)||te.contentEditable==="true")&&(ks=te,Cu=tt,so=null);break;case"focusout":so=Cu=ks=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Kp(yt,s,dt);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":Kp(yt,s,dt)}var me;if(Tu)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Gs?Bp(e,s)&&(be="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(be="onCompositionStart");be&&(Op&&s.locale!=="ko"&&(Gs||be!=="onCompositionStart"?be==="onCompositionEnd"&&Gs&&(me=wp()):(_a=dt,yu="value"in _a?_a.value:_a.textContent,Gs=!0)),te=sc(tt,be),0<te.length&&(be=new Lp(be,e,null,s,dt),yt.push({event:be,listeners:te}),me?be.data=me:(me=Ip(s),me!==null&&(be.data=me)))),(me=Xy?Wy(e,s):qy(e,s))&&(be=sc(tt,"onBeforeInput"),0<be.length&&(te=new Lp("onBeforeInput","beforeinput",null,s,dt),yt.push({event:te,listeners:be}),te.data=me)),Bx(yt,e,tt,s,dt)}M_(yt,i)})}function Uo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function sc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Qr(e,s),f!=null&&l.unshift(Uo(e,f,d)),f=Qr(e,i),f!=null&&l.push(Uo(e,f,d))),e.tag===3)return l;e=e.return}return[]}function Vx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function T_(e,i,s,l,f){for(var d=i._reactName,x=[];s!==null&&s!==l;){var A=s,H=A.alternate,tt=A.stateNode;if(A=A.tag,H!==null&&H===l)break;A!==5&&A!==26&&A!==27||tt===null||(H=tt,f?(tt=Qr(s,d),tt!=null&&x.unshift(Uo(s,tt,H))):f||(tt=Qr(s,d),tt!=null&&x.push(Uo(s,tt,H)))),s=s.return}x.length!==0&&e.push({event:i,listeners:x})}var Gx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function b_(e){return(typeof e=="string"?e:""+e).replace(Gx,`
`).replace(kx,"")}function A_(e,i){return i=b_(i),b_(e)===i}function He(e,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Fs(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Fs(e,""+l);break;case"className":Pe(e,"class",l);break;case"tabIndex":Pe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,s,l);break;case"style":Ap(e,l,d);break;case"data":if(i!=="object"){Pe(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=fl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&He(e,i,"name",f.name,f,null),He(e,i,"formEncType",f.formEncType,f,null),He(e,i,"formMethod",f.formMethod,f,null),He(e,i,"formTarget",f.formTarget,f,null)):(He(e,i,"encType",f.encType,f,null),He(e,i,"method",f.method,f,null),He(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=fl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Vi);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=fl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),We(e,"popover",l);break;case"xlinkActuate":xe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":xe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":xe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":xe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":xe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":xe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":xe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":xe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":xe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":We(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=_y.get(s)||s,We(e,s,l))}}function eh(e,i,s,l,f,d){switch(s){case"style":Ap(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Fs(e,l):(typeof l=="number"||typeof l=="bigint")&&Fs(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=e[Sn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):We(e,s,l)}}}function An(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,d,x,s,null)}}f&&He(e,i,"srcSet",s.srcSet,s,null),l&&He(e,i,"src",s.src,s,null);return;case"input":Me("invalid",e);var A=d=x=f=null,H=null,tt=null;for(l in s)if(s.hasOwnProperty(l)){var dt=s[l];if(dt!=null)switch(l){case"name":f=dt;break;case"type":x=dt;break;case"checked":H=dt;break;case"defaultChecked":tt=dt;break;case"value":d=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:He(e,i,l,dt,s,null)}}Nn(e,d,A,H,tt,x,f,!1);return;case"select":Me("invalid",e),l=x=d=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":l=A;default:He(e,i,f,A,s,null)}i=d,s=x,e.multiple=!!l,i!=null?en(e,!!l,i,!1):s!=null&&en(e,!!l,s,!0);return;case"textarea":Me("invalid",e),d=f=l=null;for(x in s)if(s.hasOwnProperty(x)&&(A=s[x],A!=null))switch(x){case"value":l=A;break;case"defaultValue":f=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:He(e,i,x,A,s,null)}Di(e,l,f,d);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:He(e,i,H,l,s,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<Do.length;l++)Me(Do[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in s)if(s.hasOwnProperty(tt)&&(l=s[tt],l!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:He(e,i,tt,l,s,null)}return;default:if(pu(i)){for(dt in s)s.hasOwnProperty(dt)&&(l=s[dt],l!==void 0&&eh(e,i,dt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&He(e,i,A,l,s,null))}function Xx(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,x=null,A=null,H=null,tt=null,dt=null;for(lt in s){var yt=s[lt];if(s.hasOwnProperty(lt)&&yt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=yt;default:l.hasOwnProperty(lt)||He(e,i,lt,null,l,yt)}}for(var it in l){var lt=l[it];if(yt=s[it],l.hasOwnProperty(it)&&(lt!=null||yt!=null))switch(it){case"type":d=lt;break;case"name":f=lt;break;case"checked":tt=lt;break;case"defaultChecked":dt=lt;break;case"value":x=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:lt!==yt&&He(e,i,it,lt,l,yt)}}Cn(e,x,A,H,tt,dt,d,f);return;case"select":lt=x=A=it=null;for(d in s)if(H=s[d],s.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":lt=H;default:l.hasOwnProperty(d)||He(e,i,d,null,l,H)}for(f in l)if(d=l[f],H=s[f],l.hasOwnProperty(f)&&(d!=null||H!=null))switch(f){case"value":it=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==H&&He(e,i,f,d,l,H)}i=A,s=x,l=lt,it!=null?en(e,!!s,it,!1):!!l!=!!s&&(i!=null?en(e,!!s,i,!0):en(e,!!s,s?[]:"",!1));return;case"textarea":lt=it=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,i,A,null,l,f)}for(x in l)if(f=l[x],d=s[x],l.hasOwnProperty(x)&&(f!=null||d!=null))switch(x){case"value":it=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&He(e,i,x,f,l,d)}Is(e,it,lt);return;case"option":for(var Zt in s)if(it=s[Zt],s.hasOwnProperty(Zt)&&it!=null&&!l.hasOwnProperty(Zt))switch(Zt){case"selected":e.selected=!1;break;default:He(e,i,Zt,null,l,it)}for(H in l)if(it=l[H],lt=s[H],l.hasOwnProperty(H)&&it!==lt&&(it!=null||lt!=null))switch(H){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:He(e,i,H,it,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in s)it=s[se],s.hasOwnProperty(se)&&it!=null&&!l.hasOwnProperty(se)&&He(e,i,se,null,l,it);for(tt in l)if(it=l[tt],lt=s[tt],l.hasOwnProperty(tt)&&it!==lt&&(it!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:He(e,i,tt,it,l,lt)}return;default:if(pu(i)){for(var Ve in s)it=s[Ve],s.hasOwnProperty(Ve)&&it!==void 0&&!l.hasOwnProperty(Ve)&&eh(e,i,Ve,void 0,l,it);for(dt in l)it=l[dt],lt=s[dt],!l.hasOwnProperty(dt)||it===lt||it===void 0&&lt===void 0||eh(e,i,dt,it,l,lt);return}}for(var j in s)it=s[j],s.hasOwnProperty(j)&&it!=null&&!l.hasOwnProperty(j)&&He(e,i,j,null,l,it);for(yt in l)it=l[yt],lt=s[yt],!l.hasOwnProperty(yt)||it===lt||it==null&&lt==null||He(e,i,yt,it,l,lt)}function R_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,x=f.initiatorType,A=f.duration;if(d&&A&&R_(x)){for(x=0,A=f.responseEnd,l+=1;l<s.length;l++){var H=s[l],tt=H.startTime;if(tt>A)break;var dt=H.transferSize,yt=H.initiatorType;dt&&R_(yt)&&(H=H.responseEnd,x+=dt*(H<A?1:(A-tt)/(H-tt)))}if(--l,i+=8*(d+x)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nh=null,ih=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function C_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ah(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sh=null;function qx(){var e=window.event;return e&&e.type==="popstate"?e===sh?!1:(sh=e,!0):(sh=null,!1)}var D_=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,U_=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof U_<"u"?function(e){return U_.resolve(null).then(e).catch(jx)}:D_;function jx(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function L_(e,i){var s=i,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(f),gr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Lo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Lo(s);for(var d=s.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[Ja]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&Lo(e.ownerDocument.body);s=f}while(s);gr(i)}function N_(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function rh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":rh(s),C(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Kx(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ja])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function Qx(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=di(e.nextSibling),e===null))return null;return e}function O_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=di(e.nextSibling),e===null))return null;return e}function oh(e){return e.data==="$?"||e.data==="$~"}function lh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jx(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var ch=null;function P_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return di(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function z_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function B_(e,i,s){switch(i=rc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Lo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);C(e)}var pi=new Map,I_=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=q.d;q.d={f:$x,r:tS,D:eS,C:nS,L:iS,m:aS,X:rS,S:sS,M:oS};function $x(){var e=ia.f(),i=Jl();return e||i}function tS(e){var i=st(e);i!==null&&i.tag===5&&i.type==="form"?eg(i):ia.r(e)}var dr=typeof document>"u"?null:document;function F_(e,i,s){var l=dr;if(l&&typeof i=="string"&&i){var f=Ee(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),I_.has(f)||(I_.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),An(i,"link",e),Et(i),l.head.appendChild(i)))}}function eS(e){ia.D(e),F_("dns-prefetch",e,null)}function nS(e,i){ia.C(e,i),F_("preconnect",e,i)}function iS(e,i,s){ia.L(e,i,s);var l=dr;if(l&&e&&i){var f='link[rel="preload"][as="'+Ee(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ee(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ee(s.imageSizes)+'"]')):f+='[href="'+Ee(e)+'"]';var d=f;switch(i){case"style":d=pr(e);break;case"script":d=mr(e)}pi.has(d)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),pi.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(No(d))||i==="script"&&l.querySelector(Oo(d))||(i=l.createElement("link"),An(i,"link",e),Et(i),l.head.appendChild(i)))}}function aS(e,i){ia.m(e,i);var s=dr;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ee(l)+'"][href="'+Ee(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=mr(e)}if(!pi.has(d)&&(e=_({rel:"modulepreload",href:e},i),pi.set(d,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Oo(d)))return}l=s.createElement("link"),An(l,"link",e),Et(l),s.head.appendChild(l)}}}function sS(e,i,s){ia.S(e,i,s);var l=dr;if(l&&e){var f=K(l).hoistableStyles,d=pr(e);i=i||"default";var x=f.get(d);if(!x){var A={loading:0,preload:null};if(x=l.querySelector(No(d)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=pi.get(d))&&uh(e,s);var H=x=l.createElement("link");Et(H),An(H,"link",e),H._p=new Promise(function(tt,dt){H.onload=tt,H.onerror=dt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lc(x,i,l)}x={type:"stylesheet",instance:x,count:1,state:A},f.set(d,x)}}}function rS(e,i){ia.X(e,i);var s=dr;if(s&&e){var l=K(s).hoistableScripts,f=mr(e),d=l.get(f);d||(d=s.querySelector(Oo(f)),d||(e=_({src:e,async:!0},i),(i=pi.get(f))&&fh(e,i),d=s.createElement("script"),Et(d),An(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function oS(e,i){ia.M(e,i);var s=dr;if(s&&e){var l=K(s).hoistableScripts,f=mr(e),d=l.get(f);d||(d=s.querySelector(Oo(f)),d||(e=_({src:e,async:!0,type:"module"},i),(i=pi.get(f))&&fh(e,i),d=s.createElement("script"),Et(d),An(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function H_(e,i,s,l){var f=(f=nt.current)?oc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=pr(s.href),s=K(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=pr(s.href);var d=K(f).hoistableStyles,x=d.get(e);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=f.querySelector(No(e)))&&!d._p&&(x.instance=d,x.state.loading=5),pi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(e,s),d||lS(f,e,s,x.state))),i&&l===null)throw Error(a(528,""));return x}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=mr(s),s=K(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function pr(e){return'href="'+Ee(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function V_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function lS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),An(i,"link",s),Et(i),e.head.appendChild(i))}function mr(e){return'[src="'+Ee(e)+'"]'}function Oo(e){return"script[async]"+e}function G_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ee(s.href)+'"]');if(l)return i.instance=l,Et(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Et(l),An(l,"style",f),lc(l,s.precedence,e),i.instance=l;case"stylesheet":f=pr(s.href);var d=e.querySelector(No(f));if(d)return i.state.loading|=4,i.instance=d,Et(d),d;l=V_(s),(f=pi.get(f))&&uh(l,f),d=(e.ownerDocument||e).createElement("link"),Et(d);var x=d;return x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),An(d,"link",l),i.state.loading|=4,lc(d,s.precedence,e),i.instance=d;case"script":return d=mr(s.src),(f=e.querySelector(Oo(d)))?(i.instance=f,Et(f),f):(l=s,(f=pi.get(d))&&(l=_({},s),fh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),Et(f),An(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,lc(l,s.precedence,e));return i.instance}function lc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,x=0;x<l.length;x++){var A=l[x];if(A.dataset.precedence===i)d=A;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var cc=null;function k_(e,i,s){if(cc===null){var l=new Map,f=cc=new Map;f.set(s,l)}else f=cc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[Ja]||d[sn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(i)||"";x=e+x;var A=l.get(x);A?A.push(d):l.set(x,[d])}}return l}function X_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function cS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function W_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function uS(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=pr(l.href),d=i.querySelector(No(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=uc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,Et(d);return}d=i.ownerDocument||i,l=V_(l),(f=pi.get(f))&&uh(l,f),d=d.createElement("link"),Et(d);var x=d;x._p=new Promise(function(A,H){x.onload=A,x.onerror=H}),An(d,"link",l),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=uc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var hh=0;function fS(e,i){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&hh===0&&(hh=62500*Wx());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>hh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,i.forEach(hS,e),fc=null,uc.call(e))}function hS(e,i){if(!(i.state.loading&4)){var s=fc.get(e);if(s)var l=s.get(null);else{s=new Map,fc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var x=f[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),l=x)}l&&s.set(null,l)}f=i.instance,x=f.getAttribute("data-precedence"),d=s.get(x)||l,d===l&&s.set(null,f),s.set(x,f),this.count++,l=uc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Po={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function dS(e,i,s,l,f,d,x,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function q_(e,i,s,l,f,d,x,A,H,tt,dt,yt){return e=new dS(e,i,s,x,H,tt,dt,yt,A),i=1,d===!0&&(i|=24),d=Qn(3,null,null,i),e.current=d,d.stateNode=e,i=Xu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Zu(d),e}function Y_(e){return e?(e=qs,e):qs}function Z_(e,i,s,l,f,d){f=Y_(f),l.context===null?l.context=f:l.pendingContext=f,l=Ea(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ta(e,l,i),s!==null&&(Gn(s,e,i),ho(s,e,i))}function j_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function dh(e,i){j_(e,i),(e=e.alternate)&&j_(e,i)}function K_(e){if(e.tag===13||e.tag===31){var i=is(e,67108864);i!==null&&Gn(i,e,67108864),dh(e,67108864)}}function Q_(e){if(e.tag===13||e.tag===31){var i=ni();i=zs(i);var s=is(e,i);s!==null&&Gn(s,e,i),dh(e,i)}}var dc=!0;function pS(e,i,s,l){var f=z.T;z.T=null;var d=q.p;try{q.p=2,ph(e,i,s,l)}finally{q.p=d,z.T=f}}function mS(e,i,s,l){var f=z.T;z.T=null;var d=q.p;try{q.p=8,ph(e,i,s,l)}finally{q.p=d,z.T=f}}function ph(e,i,s,l){if(dc){var f=mh(l);if(f===null)th(e,i,l,pc,s),$_(e,l);else if(_S(f,e,i,s,l))l.stopPropagation();else if($_(e,l),i&4&&-1<gS.indexOf(e)){for(;f!==null;){var d=st(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Rt(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var H=1<<31-Wt(x);A.entanglements[1]|=H,x&=~H}Oi(d),(Ne&6)===0&&(Kl=T()+500,wo(0))}}break;case 31:case 13:A=is(d,2),A!==null&&Gn(A,d,2),Jl(),dh(d,2)}if(d=mh(l),d===null&&th(e,i,l,pc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else th(e,i,l,null,s)}}function mh(e){return e=gu(e),gh(e)}var pc=null;function gh(e){if(pc=null,e=Z(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return pc=e,null}function J_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case ct:return 2;case Tt:return 8;case ft:case $t:return 32;case Ot:return 268435456;default:return 32}default:return 32}}var _h=!1,Pa=null,za=null,Ba=null,zo=new Map,Bo=new Map,Ia=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $_(e,i){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(i.pointerId)}}function Io(e,i,s,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=st(i),i!==null&&K_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function _S(e,i,s,l,f){switch(i){case"focusin":return Pa=Io(Pa,e,i,s,l,f),!0;case"dragenter":return za=Io(za,e,i,s,l,f),!0;case"mouseover":return Ba=Io(Ba,e,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return zo.set(d,Io(zo.get(d)||null,e,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Bo.set(d,Io(Bo.get(d)||null,e,i,s,l,f)),!0}return!1}function t0(e){var i=Z(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,jr(e.priority,function(){Q_(s)});return}}else if(i===31){if(i=h(s),i!==null){e.blockedOn=i,jr(e.priority,function(){Q_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=mh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);mu=l,s.target.dispatchEvent(l),mu=null}else return i=st(s),i!==null&&K_(i),e.blockedOn=s,!1;i.shift()}return!0}function e0(e,i,s){mc(e)&&s.delete(i)}function vS(){_h=!1,Pa!==null&&mc(Pa)&&(Pa=null),za!==null&&mc(za)&&(za=null),Ba!==null&&mc(Ba)&&(Ba=null),zo.forEach(e0),Bo.forEach(e0)}function gc(e,i){e.blockedOn===i&&(e.blockedOn=null,_h||(_h=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,vS)))}var _c=null;function n0(e){_c!==e&&(_c=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(gh(l||s)===null)continue;break}var d=st(s);d!==null&&(e.splice(i,3),i-=3,mf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function gr(e){function i(H){return gc(H,e)}Pa!==null&&gc(Pa,e),za!==null&&gc(za,e),Ba!==null&&gc(Ba,e),zo.forEach(i),Bo.forEach(i);for(var s=0;s<Ia.length;s++){var l=Ia[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ia.length&&(s=Ia[0],s.blockedOn===null);)t0(s),s.blockedOn===null&&Ia.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],x=f[Sn]||null;if(typeof d=="function")x||n0(s);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(f=d,x=d[Sn]||null)A=x.formAction;else if(gh(f)!==null)continue}else A=x.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),n0(s)}}}function i0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function vh(e){this._internalRoot=e}vc.prototype.render=vh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ni();Z_(s,l,e,i,null,null)},vc.prototype.unmount=vh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Z_(e.current,2,null,e,null,null),Jl(),i[ga]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Qa();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Ia.length&&i!==0&&i<Ia[s].priority;s++);Ia.splice(s,0,e),s===0&&t0(e)}};var a0=t.version;if(a0!=="19.2.0")throw Error(a(527,a0,"19.2.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var yS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{wt=yc.inject(yS),Pt=yc}catch{}}return Ho.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=fg,d=hg,x=dg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=q_(e,1,!1,null,null,s,l,null,f,d,x,i0),e[ga]=i.current,$f(e),new vh(i)},Ho.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",d=fg,x=hg,A=dg,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=q_(e,1,!0,i,s??null,l,f,H,d,x,A,i0),i.context=Y_(null),s=i.current,l=ni(),l=zs(l),f=Ea(l),f.callback=null,Ta(s,f,l),s=l,i.current.lanes=s,Ln(i,s),Oi(i),e[ga]=i.current,$f(e),new vc(i)},Ho.version="19.2.0",Ho}var p0;function DS(){if(p0)return Sh.exports;p0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sh.exports=wS(),Sh.exports}var US=DS();const LS=bv(US);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="180",Pr={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NS=0,m0=1,OS=2,Av=1,Rv=2,ua=3,ja=0,Yn=1,fa=2,da=0,zr=1,Ir=2,g0=3,_0=4,PS=5,As=100,zS=101,BS=102,IS=103,FS=104,HS=200,VS=201,GS=202,kS=203,ld=204,cd=205,XS=206,WS=207,qS=208,YS=209,ZS=210,jS=211,KS=212,QS=213,JS=214,ud=0,fd=1,hd=2,Fr=3,dd=4,pd=5,md=6,gd=7,ap=0,$S=1,tM=2,Za=0,eM=1,nM=2,iM=3,aM=4,sM=5,rM=6,oM=7,Cv=300,Hr=301,Vr=302,_d=303,vd=304,ou=306,yd=1e3,Cs=1001,xd=1002,Ai=1003,lM=1004,xc=1005,zi=1006,bh=1007,ws=1008,Ii=1009,wv=1010,Dv=1011,Qo=1012,sp=1013,Us=1014,ha=1015,pa=1016,rp=1017,op=1018,Jo=1020,Uv=35902,Lv=35899,Nv=1021,Ov=1022,bi=1023,$o=1026,tl=1027,Pv=1028,lp=1029,zv=1030,cp=1031,up=1033,Zc=33776,jc=33777,Kc=33778,Qc=33779,Sd=35840,Md=35841,Ed=35842,Td=35843,bd=36196,Ad=37492,Rd=37496,Cd=37808,wd=37809,Dd=37810,Ud=37811,Ld=37812,Nd=37813,Od=37814,Pd=37815,zd=37816,Bd=37817,Id=37818,Fd=37819,Hd=37820,Vd=37821,Gd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,Yd=36285,Zd=36286,cM=3200,uM=3201,fp=0,fM=1,Ya="",gi="srgb",Gr="srgb-linear",nu="linear",Ge="srgb",_r=7680,v0=519,hM=512,dM=513,pM=514,Bv=515,mM=516,gM=517,_M=518,vM=519,y0=35044,x0="300 es",Bi=2e3,iu=2001;class Ns{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,au=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[n&63|128]+Dn[n>>8&255]+"-"+Dn[n>>16&255]+Dn[n>>24&255]+Dn[a&255]+Dn[a>>8&255]+Dn[a>>16&255]+Dn[a>>24&255]).toLowerCase()}function ve(r,t,n){return Math.max(t,Math.min(n,r))}function yM(r,t){return(r%t+t)%t}function Ah(r,t,n){return(1-n)*r+n*t}function Vo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xM={DEG2RAD:Jc};class Ct{constructor(t=0,n=0){Ct.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ka{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3];const y=c[u+0],S=c[u+1],E=c[u+2],b=c[u+3];if(h===0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=y,t[n+1]=S,t[n+2]=E,t[n+3]=b;return}if(_!==b||m!==y||p!==S||g!==E){let M=1-h;const v=m*y+p*S+g*E+_*b,P=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const F=Math.sqrt(U),B=Math.atan2(F,v*P);M=Math.sin(M*B)/F,h=Math.sin(h*B)/F}const R=h*P;if(m=m*M+y*R,p=p*M+S*R,g=g*M+E*R,_=_*M+b*R,M===1-h){const F=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=F,p*=F,g*=F,_*=F}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],y=c[u+1],S=c[u+2],E=c[u+3];return t[n]=h*E+g*_+m*S-p*y,t[n+1]=m*E+g*y+p*_-h*S,t[n+2]=p*E+g*S+h*y-m*_,t[n+3]=g*E-h*_-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(o/2),_=h(c/2),y=m(a/2),S=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=y*g*_+p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_-y*S*E;break;case"YXZ":this._x=y*g*_+p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_+y*S*E;break;case"ZXY":this._x=y*g*_-p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_-y*S*E;break;case"ZYX":this._x=y*g*_-p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_+y*S*E;break;case"YZX":this._x=y*g*_+p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_-y*S*E;break;case"XZY":this._x=y*g*_-p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],g=n[6],_=n[10],y=a+h+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(a>h&&a>_){const S=2*Math.sqrt(1+a-h-_);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-a-_);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-a-h);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+o*p-c*m,this._y=o*g+u*m+c*h-a*p,this._z=c*g+u*p+a*m-o*h,this._w=u*g-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*a+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,y=Math.sin(n*g)/p;return this._w=u*_+this._w*y,this._x=a*_+this._x*y,this._y=o*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,n=0,a=0){G.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(S0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(S0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,p=2*(u*o-h*a),g=2*(h*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-h*g,this.y=a+m*g+h*p-c*_,this.z=o+m*_+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this.z=ve(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this.z=ve(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Rh.copy(this).projectOnVector(t),this.sub(Rh)}reflect(t){return this.sub(Rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rh=new G,S0=new Ka;class ge{constructor(t,n,a,o,c,u,h,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p)}set(t,n,a,o,c,u,h,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],g=a[4],_=a[7],y=a[2],S=a[5],E=a[8],b=o[0],M=o[3],v=o[6],P=o[1],U=o[4],R=o[7],F=o[2],B=o[5],O=o[8];return c[0]=u*b+h*P+m*F,c[3]=u*M+h*U+m*B,c[6]=u*v+h*R+m*O,c[1]=p*b+g*P+_*F,c[4]=p*M+g*U+_*B,c[7]=p*v+g*R+_*O,c[2]=y*b+S*P+E*F,c[5]=y*M+S*U+E*B,c[8]=y*v+S*R+E*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*u*g-n*h*p-a*c*g+a*h*m+o*c*p-o*u*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*u-h*p,y=h*m-g*c,S=p*c-u*m,E=n*_+a*y+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(o*p-g*a)*b,t[2]=(h*a-o*u)*b,t[3]=y*b,t[4]=(g*n-o*m)*b,t[5]=(o*c-h*n)*b,t[6]=S*b,t[7]=(a*m-p*n)*b,t[8]=(u*n-a*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+t,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Ch.makeScale(t,n)),this}rotate(t){return this.premultiply(Ch.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ch.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ch=new ge;function Iv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function SM(){const r=su("canvas");return r.style.display="block",r}const M0={};function el(r){r in M0||(M0[r]=!0,console.warn(r))}function MM(r,t,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const E0=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),T0=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EM(){const r={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ge&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ge&&(o.r=Br(o.r),o.g=Br(o.g),o.b=Br(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ya?nu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return el("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return el("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Gr]:{primaries:t,whitePoint:a,transfer:nu,toXYZ:E0,fromXYZ:T0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:a,transfer:Ge,toXYZ:E0,fromXYZ:T0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const Le=EM();function ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class TM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{vr===void 0&&(vr=su("canvas")),vr.width=t.width,vr.height=t.height;const o=vr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=vr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=su("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ma(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ma(n[a]/255)*255):n[a]=ma(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bM=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(wh(o[u].image)):c.push(wh(o[u]))}else c=wh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function wh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?TM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AM=0;const Dh=new G;class zn extends Ns{constructor(t=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,a=Cs,o=Cs,c=zi,u=ws,h=bi,m=Ii,p=zn.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=qr(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yd:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yd:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Cv;zn.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,n=0,a=0,o=1){Xe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],S=m[5],E=m[9],b=m[2],M=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+b)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,R=(S+1)/2,F=(v+1)/2,B=(g+y)/4,O=(_+b)/4,k=(E+M)/4;return U>R&&U>F?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=B/a,c=O/a):R>F?R<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),a=B/o,c=k/o):F<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),a=O/c,o=k/c),this.set(a,o,c,n),this}let P=Math.sqrt((M-E)*(M-E)+(_-b)*(_-b)+(y-g)*(y-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(_-b)/P,this.z=(y-g)/P,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this.z=ve(this.z,t.z,n.z),this.w=ve(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this.z=ve(this.z,t,n),this.w=ve(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RM extends Ns{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new zn(o);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new hp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends RM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Fv extends zn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CM extends zn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(xi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(xi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=xi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,xi):xi.fromBufferAttribute(c,u),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Sc.copy(a.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),Mc.subVectors(this.max,Go),yr.subVectors(t.a,Go),xr.subVectors(t.b,Go),Sr.subVectors(t.c,Go),Ha.subVectors(xr,yr),Va.subVectors(Sr,xr),gs.subVectors(yr,Sr);let n=[0,-Ha.z,Ha.y,0,-Va.z,Va.y,0,-gs.z,gs.y,Ha.z,0,-Ha.x,Va.z,0,-Va.x,gs.z,0,-gs.x,-Ha.y,Ha.x,0,-Va.y,Va.x,0,-gs.y,gs.x,0];return!Uh(n,yr,xr,Sr,Mc)||(n=[1,0,0,0,1,0,0,0,1],!Uh(n,yr,xr,Sr,Mc))?!1:(Ec.crossVectors(Ha,Va),n=[Ec.x,Ec.y,Ec.z],Uh(n,yr,xr,Sr,Mc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new G,new G,new G,new G,new G,new G,new G,new G],xi=new G,Sc=new rl,yr=new G,xr=new G,Sr=new G,Ha=new G,Va=new G,gs=new G,Go=new G,Mc=new G,Ec=new G,_s=new G;function Uh(r,t,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){_s.fromArray(r,c);const h=o.x*Math.abs(_s.x)+o.y*Math.abs(_s.y)+o.z*Math.abs(_s.z),m=t.dot(_s),p=n.dot(_s),g=a.dot(_s);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const wM=new rl,ko=new G,Lh=new G;class lu{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):wM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const n=ko.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(ko,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Lh)),this.expandByPoint(ko.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new G,Nh=new G,Tc=new G,Ga=new G,Oh=new G,bc=new G,Ph=new G;class dp{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=sa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,n),sa.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Nh.copy(t).add(n).multiplyScalar(.5),Tc.copy(n).sub(t).normalize(),Ga.copy(this.origin).sub(Nh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Tc),h=Ga.dot(this.direction),m=-Ga.dot(Tc),p=Ga.lengthSq(),g=Math.abs(1-u*u);let _,y,S,E;if(g>0)if(_=u*m-h,y=u*h-m,E=c*g,_>=0)if(y>=-E)if(y<=E){const b=1/g;_*=b,y*=b,S=_*(_+u*y+2*h)+y*(u*_+y+2*m)+p}else y=c,_=Math.max(0,-(u*y+h)),S=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(u*y+h)),S=-_*_+y*(y+2*m)+p;else y<=-E?(_=Math.max(0,-(-u*c+h)),y=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+y*(y+2*m)+p):y<=E?(_=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(_=Math.max(0,-(u*c+h)),y=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+y*(y+2*m)+p);else y=u>0?-c:c,_=Math.max(0,-(u*y+h)),S=-_*_+y*(y+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Nh).addScaledVector(Tc,y),S}intersectSphere(t,n){sa.subVectors(t.center,this.origin);const a=sa.dot(this.direction),o=sa.dot(sa)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(a=(t.min.x-y.x)*p,o=(t.max.x-y.x)*p):(a=(t.max.x-y.x)*p,o=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,u=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,u=(t.min.y-y.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,n,a,o,c){Oh.subVectors(n,t),bc.subVectors(a,t),Ph.crossVectors(Oh,bc);let u=this.direction.dot(Ph),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(bc.crossVectors(Ga,bc));if(m<0)return null;const p=h*this.direction.dot(Oh.cross(Ga));if(p<0||m+p>u)return null;const g=-h*Ga.dot(Ph);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,n,a,o,c,u,h,m,p,g,_,y,S,E,b,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p,g,_,y,S,E,b,M)}set(t,n,a,o,c,u,h,m,p,g,_,y,S,E,b,M){const v=this.elements;return v[0]=t,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=u,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=y,v[3]=S,v[7]=E,v[11]=b,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Mr.setFromMatrixColumn(t,0).length(),c=1/Mr.setFromMatrixColumn(t,1).length(),u=1/Mr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=u*g,S=u*_,E=h*g,b=h*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=S+E*p,n[5]=y-b*p,n[9]=-h*m,n[2]=b-y*p,n[6]=E+S*p,n[10]=u*m}else if(t.order==="YXZ"){const y=m*g,S=m*_,E=p*g,b=p*_;n[0]=y+b*h,n[4]=E*h-S,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=S*h-E,n[6]=b+y*h,n[10]=u*m}else if(t.order==="ZXY"){const y=m*g,S=m*_,E=p*g,b=p*_;n[0]=y-b*h,n[4]=-u*_,n[8]=E+S*h,n[1]=S+E*h,n[5]=u*g,n[9]=b-y*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const y=u*g,S=u*_,E=h*g,b=h*_;n[0]=m*g,n[4]=E*p-S,n[8]=y*p+b,n[1]=m*_,n[5]=b*p+y,n[9]=S*p-E,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const y=u*m,S=u*p,E=h*m,b=h*p;n[0]=m*g,n[4]=b-y*_,n[8]=E*_+S,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=S*_+E,n[10]=y-b*_}else if(t.order==="XZY"){const y=u*m,S=u*p,E=h*m,b=h*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=y*_+b,n[5]=u*g,n[9]=S*_-E,n[2]=E*_-S,n[6]=h*g,n[10]=b*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(DM,t,UM)}lookAt(t,n,a){const o=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ka.crossVectors(a,ii),ka.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ka.crossVectors(a,ii)),ka.normalize(),Ac.crossVectors(ii,ka),o[0]=ka.x,o[4]=Ac.x,o[8]=ii.x,o[1]=ka.y,o[5]=Ac.y,o[9]=ii.y,o[2]=ka.z,o[6]=Ac.z,o[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],g=a[1],_=a[5],y=a[9],S=a[13],E=a[2],b=a[6],M=a[10],v=a[14],P=a[3],U=a[7],R=a[11],F=a[15],B=o[0],O=o[4],k=o[8],D=o[12],w=o[1],V=o[5],Q=o[9],rt=o[13],ht=o[2],at=o[6],z=o[10],q=o[14],Y=o[3],_t=o[7],At=o[11],N=o[15];return c[0]=u*B+h*w+m*ht+p*Y,c[4]=u*O+h*V+m*at+p*_t,c[8]=u*k+h*Q+m*z+p*At,c[12]=u*D+h*rt+m*q+p*N,c[1]=g*B+_*w+y*ht+S*Y,c[5]=g*O+_*V+y*at+S*_t,c[9]=g*k+_*Q+y*z+S*At,c[13]=g*D+_*rt+y*q+S*N,c[2]=E*B+b*w+M*ht+v*Y,c[6]=E*O+b*V+M*at+v*_t,c[10]=E*k+b*Q+M*z+v*At,c[14]=E*D+b*rt+M*q+v*N,c[3]=P*B+U*w+R*ht+F*Y,c[7]=P*O+U*V+R*at+F*_t,c[11]=P*k+U*Q+R*z+F*At,c[15]=P*D+U*rt+R*q+F*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],S=t[14],E=t[3],b=t[7],M=t[11],v=t[15];return E*(+c*m*_-o*p*_-c*h*y+a*p*y+o*h*S-a*m*S)+b*(+n*m*S-n*p*y+c*u*y-o*u*S+o*p*g-c*m*g)+M*(+n*p*_-n*h*S-c*u*_+a*u*S+c*h*g-a*p*g)+v*(-o*h*g-n*m*_+n*h*y+o*u*_-a*u*y+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],S=t[11],E=t[12],b=t[13],M=t[14],v=t[15],P=_*M*p-b*y*p+b*m*S-h*M*S-_*m*v+h*y*v,U=E*y*p-g*M*p-E*m*S+u*M*S+g*m*v-u*y*v,R=g*b*p-E*_*p+E*h*S-u*b*S-g*h*v+u*_*v,F=E*_*m-g*b*m-E*h*y+u*b*y+g*h*M-u*_*M,B=n*P+a*U+o*R+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return t[0]=P*O,t[1]=(b*y*c-_*M*c-b*o*S+a*M*S+_*o*v-a*y*v)*O,t[2]=(h*M*c-b*m*c+b*o*p-a*M*p-h*o*v+a*m*v)*O,t[3]=(_*m*c-h*y*c-_*o*p+a*y*p+h*o*S-a*m*S)*O,t[4]=U*O,t[5]=(g*M*c-E*y*c+E*o*S-n*M*S-g*o*v+n*y*v)*O,t[6]=(E*m*c-u*M*c-E*o*p+n*M*p+u*o*v-n*m*v)*O,t[7]=(u*y*c-g*m*c+g*o*p-n*y*p-u*o*S+n*m*S)*O,t[8]=R*O,t[9]=(E*_*c-g*b*c-E*a*S+n*b*S+g*a*v-n*_*v)*O,t[10]=(u*b*c-E*h*c+E*a*p-n*b*p-u*a*v+n*h*v)*O,t[11]=(g*h*c-u*_*c-g*a*p+n*_*p+u*a*S-n*h*S)*O,t[12]=F*O,t[13]=(g*b*o-E*_*o+E*a*y-n*b*y-g*a*M+n*_*M)*O,t[14]=(E*h*o-u*b*o-E*a*m+n*b*m+u*a*M-n*h*M)*O,t[15]=(u*_*o-g*h*o+g*a*m-n*_*m-u*a*y+n*h*y)*O,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,m=t.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+a,g*m-o*u,0,p*m-o*h,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,g=u+u,_=h+h,y=c*p,S=c*g,E=c*_,b=u*g,M=u*_,v=h*_,P=m*p,U=m*g,R=m*_,F=a.x,B=a.y,O=a.z;return o[0]=(1-(b+v))*F,o[1]=(S+R)*F,o[2]=(E-U)*F,o[3]=0,o[4]=(S-R)*B,o[5]=(1-(y+v))*B,o[6]=(M+P)*B,o[7]=0,o[8]=(E+U)*O,o[9]=(M-P)*O,o[10]=(1-(y+b))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=Mr.set(o[0],o[1],o[2]).length();const u=Mr.set(o[4],o[5],o[6]).length(),h=Mr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Si.copy(this);const p=1/c,g=1/u,_=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,n.setFromRotationMatrix(Si),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=Bi,m=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(a-o),y=(n+t)/(n-t),S=(a+o)/(a-o);let E,b;if(m)E=c/(u-c),b=u*c/(u-c);else if(h===Bi)E=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(h===iu)E=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=Bi,m=!1){const p=this.elements,g=2/(n-t),_=2/(a-o),y=-(n+t)/(n-t),S=-(a+o)/(a-o);let E,b;if(m)E=1/(u-c),b=u/(u-c);else if(h===Bi)E=-2/(u-c),b=-(u+c)/(u-c);else if(h===iu)E=-1/(u-c),b=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Mr=new G,Si=new Qe,DM=new G(0,0,0),UM=new G(1,1,1),ka=new G,Ac=new G,ii=new G,b0=new Qe,A0=new Ka;class Ci{constructor(t=0,n=0,a=0,o=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],g=o[9],_=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return b0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b0,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return A0.setFromEuler(this),this.setFromQuaternion(A0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Hv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LM=0;const R0=new G,Er=new Ka,ra=new Qe,Rc=new G,Xo=new G,NM=new G,OM=new Ka,C0=new G(1,0,0),w0=new G(0,1,0),D0=new G(0,0,1),U0={type:"added"},PM={type:"removed"},Tr={type:"childadded",child:null},zh={type:"childremoved",child:null};class pn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new G,n=new Ci,a=new Ka,o=new G(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ge}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Er.setFromAxisAngle(t,n),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,n){return Er.setFromAxisAngle(t,n),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(C0,t)}rotateY(t){return this.rotateOnAxis(w0,t)}rotateZ(t){return this.rotateOnAxis(D0,t)}translateOnAxis(t,n){return R0.copy(t).applyQuaternion(this.quaternion),this.position.add(R0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(C0,t)}translateY(t){return this.translateOnAxis(w0,t)}translateZ(t){return this.translateOnAxis(D0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Rc.copy(t):Rc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Xo,Rc,this.up):ra.lookAt(Rc,Xo,this.up),this.quaternion.setFromRotationMatrix(ra),o&&(ra.extractRotation(o.matrixWorld),Er.setFromRotationMatrix(ra),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(U0),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(PM),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(U0),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,NM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,OM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),y=u(t.skeletons),S=u(t.animations),E=u(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),y.length>0&&(a.skeletons=y),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}pn.DEFAULT_UP=new G(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new G,oa=new G,Bh=new G,la=new G,br=new G,Ar=new G,L0=new G,Ih=new G,Fh=new G,Hh=new G,Vh=new Xe,Gh=new Xe,kh=new Xe;class Ti{constructor(t=new G,n=new G,a=new G){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Mi.subVectors(t,n),o.cross(Mi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Mi.subVectors(o,n),oa.subVectors(a,n),Bh.subVectors(t,n);const u=Mi.dot(Mi),h=Mi.dot(oa),m=Mi.dot(Bh),p=oa.dot(oa),g=oa.dot(Bh),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const y=1/_,S=(p*m-h*g)*y,E=(u*g-h*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,n,a,o,c,u,h,m){return this.getBarycoord(t,n,a,o,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(u,la.y),m.addScaledVector(h,la.z),m)}static getInterpolatedAttribute(t,n,a,o,c,u){return Vh.setScalar(0),Gh.setScalar(0),kh.setScalar(0),Vh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,a),kh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Vh,c.x),u.addScaledVector(Gh,c.y),u.addScaledVector(kh,c.z),u}static isFrontFacing(t,n,a,o){return Mi.subVectors(a,n),oa.subVectors(t,n),Mi.cross(oa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Mi.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ti.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Ti.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;br.subVectors(o,a),Ar.subVectors(c,a),Ih.subVectors(t,a);const m=br.dot(Ih),p=Ar.dot(Ih);if(m<=0&&p<=0)return n.copy(a);Fh.subVectors(t,o);const g=br.dot(Fh),_=Ar.dot(Fh);if(g>=0&&_<=g)return n.copy(o);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(br,u);Hh.subVectors(t,c);const S=br.dot(Hh),E=Ar.dot(Hh);if(E>=0&&S<=E)return n.copy(c);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(Ar,h);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return L0.subVectors(c,o),h=(_-g)/(_-g+(S-E)),n.copy(o).addScaledVector(L0,h);const v=1/(M+b+y);return u=b*v,h=y*v,n.copy(a).addScaledVector(br,u).addScaledVector(Ar,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Xh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class re{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Le.workingColorSpace){return this.r=t,this.g=n,this.b=a,Le.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Le.workingColorSpace){if(t=yM(t,1),n=ve(n,0,1),a=ve(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Xh(u,c,t+1/3),this.g=Xh(u,c,t),this.b=Xh(u,c,t-1/3)}return Le.colorSpaceToWorking(this,o),this}setStyle(t,n=gi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gi){const a=Vv[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Le.workingToColorSpace(Un.copy(this),t),Math.round(ve(Un.r*255,0,255))*65536+Math.round(ve(Un.g*255,0,255))*256+Math.round(ve(Un.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),n);const a=Un.r,o=Un.g,c=Un.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const g=(h+u)/2;if(h===u)m=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),n),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=gi){Le.workingToColorSpace(Un.copy(this),t);const n=Un.r,a=Un.g,o=Un.b;return t!==gi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+n,Xa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Xa),t.getHSL(Cc);const a=Ah(Xa.h,Cc.h,n),o=Ah(Xa.s,Cc.s,n),c=Ah(Xa.l,Cc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new re;re.NAMES=Vv;let zM=0;class Os extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=zr,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(a.blending=this.blending),this.side!==ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ld&&(a.blendSrc=this.blendSrc),this.blendDst!==cd&&(a.blendDst=this.blendDst),this.blendEquation!==As&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(a.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nl extends Os{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new G,wc=new Ct;let BM=0;class si{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=y0,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)wc.fromBufferAttribute(this,n),wc.applyMatrix3(t),this.setXY(n,wc.x,wc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Vo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Vo(n,this.array)),n}setX(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Vo(n,this.array)),n}setY(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Vo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Vo(n,this.array)),n}setW(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),o=kn(o,this.array),c=kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==y0&&(t.usage=this.usage),t}}class Gv extends si{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class kv extends si{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Rn extends si{constructor(t,n,a){super(new Float32Array(t),n,a)}}let IM=0;const mi=new Qe,Wh=new pn,Rr=new G,ai=new rl,Wo=new rl,yn=new G;class Zn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iv(t)?kv:Gv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ge().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,n,a){return mi.makeTranslation(t,n,a),this.applyMatrix4(mi),this}scale(t,n,a){return mi.makeScale(t,n,a),this.applyMatrix4(mi),this}lookAt(t){return Wh.lookAt(t),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Rn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Wo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ai.min,Wo.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Wo.max),ai.expandByPoint(yn)):(ai.expandByPoint(Wo.min),ai.expandByPoint(Wo.max))}ai.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)yn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(yn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)yn.fromBufferAttribute(h,p),m&&(Rr.fromBufferAttribute(t,p),yn.add(Rr)),o=Math.max(o,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let k=0;k<a.count;k++)h[k]=new G,m[k]=new G;const p=new G,g=new G,_=new G,y=new Ct,S=new Ct,E=new Ct,b=new G,M=new G;function v(k,D,w){p.fromBufferAttribute(a,k),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,w),y.fromBufferAttribute(c,k),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),S.sub(y),E.sub(y);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(V),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),h[k].add(b),h[D].add(b),h[w].add(b),m[k].add(M),m[D].add(M),m[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let k=0,D=P.length;k<D;++k){const w=P[k],V=w.start,Q=w.count;for(let rt=V,ht=V+Q;rt<ht;rt+=3)v(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const U=new G,R=new G,F=new G,B=new G;function O(k){F.fromBufferAttribute(o,k),B.copy(F);const D=h[k];U.copy(D),U.sub(F.multiplyScalar(F.dot(D))).normalize(),R.crossVectors(B,D);const V=R.dot(m[k])<0?-1:1;u.setXYZW(k,U.x,U.y,U.z,V)}for(let k=0,D=P.length;k<D;++k){const w=P[k],V=w.start,Q=w.count;for(let rt=V,ht=V+Q;rt<ht;rt+=3)O(t.getX(rt+0)),O(t.getX(rt+1)),O(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let y=0,S=a.count;y<S;y++)a.setXYZ(y,0,0,0);const o=new G,c=new G,u=new G,h=new G,m=new G,p=new G,g=new G,_=new G;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),b=t.getX(y+1),M=t.getX(y+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,b),p.fromBufferAttribute(a,M),h.add(g),m.add(g),p.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(b,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,y=new p.constructor(m.length*g);let S=0,E=0;for(let b=0,M=m.length;b<M;b++){h.isInterleavedBufferAttribute?S=m[b]*h.data.stride+h.offset:S=m[b]*g;for(let v=0;v<g;v++)y[E++]=p[S++]}return new si(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const y=p[g],S=t(y,a);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let y=0,S=_.length;y<S;y++)g.push(_[y].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N0=new Qe,vs=new dp,Dc=new lu,O0=new G,Uc=new G,Lc=new G,Nc=new G,qh=new G,Oc=new G,P0=new G,Pc=new G;class xn extends pn{constructor(t=new Zn,n=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(qh.fromBufferAttribute(_,t),u?Oc.addScaledVector(qh,g):Oc.addScaledVector(qh.sub(n),g))}n.add(Oc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Dc.copy(a.boundingSphere),Dc.applyMatrix4(c),vs.copy(t.ray).recast(t.near),!(Dc.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Dc,O0)===null||vs.origin.distanceToSquared(O0)>(t.far-t.near)**2))&&(N0.copy(c).invert(),vs.copy(t.ray).applyMatrix4(N0),!(a.boundingBox!==null&&vs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,vs)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,b=y.length;E<b;E++){const M=y[E],v=u[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let R=P,F=U;R<F;R+=3){const B=h.getX(R),O=h.getX(R+1),k=h.getX(R+2);o=zc(this,v,t,a,p,g,_,B,O,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let M=E,v=b;M<v;M+=3){const P=h.getX(M),U=h.getX(M+1),R=h.getX(M+2);o=zc(this,u,t,a,p,g,_,P,U,R),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,b=y.length;E<b;E++){const M=y[E],v=u[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let R=P,F=U;R<F;R+=3){const B=R,O=R+1,k=R+2;o=zc(this,v,t,a,p,g,_,B,O,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let M=E,v=b;M<v;M+=3){const P=M,U=M+1,R=M+2;o=zc(this,u,t,a,p,g,_,P,U,R),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function FM(r,t,n,a,o,c,u,h){let m;if(t.side===Yn?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,t.side===ja,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Pc);return p<n.near||p>n.far?null:{distance:p,point:Pc.clone(),object:r}}function zc(r,t,n,a,o,c,u,h,m,p){r.getVertexPosition(h,Uc),r.getVertexPosition(m,Lc),r.getVertexPosition(p,Nc);const g=FM(r,t,n,a,Uc,Lc,Nc,P0);if(g){const _=new G;Ti.getBarycoord(P0,Uc,Lc,Nc,_),o&&(g.uv=Ti.getInterpolatedAttribute(o,h,m,p,_,new Ct)),c&&(g.uv1=Ti.getInterpolatedAttribute(c,h,m,p,_,new Ct)),u&&(g.normal=Ti.getInterpolatedAttribute(u,h,m,p,_,new G),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new G,materialIndex:0};Ti.getNormal(Uc,Lc,Nc,y.normal),g.face=y,g.barycoord=_}return g}class ol extends Zn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let y=0,S=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Rn(p,3)),this.setAttribute("normal",new Rn(g,3)),this.setAttribute("uv",new Rn(_,2));function E(b,M,v,P,U,R,F,B,O,k,D){const w=R/O,V=F/k,Q=R/2,rt=F/2,ht=B/2,at=O+1,z=k+1;let q=0,Y=0;const _t=new G;for(let At=0;At<z;At++){const N=At*V-rt;for(let et=0;et<at;et++){const Mt=et*w-Q;_t[b]=Mt*P,_t[M]=N*U,_t[v]=ht,p.push(_t.x,_t.y,_t.z),_t[b]=0,_t[M]=0,_t[v]=B>0?1:-1,g.push(_t.x,_t.y,_t.z),_.push(et/O),_.push(1-At/k),q+=1}}for(let At=0;At<k;At++)for(let N=0;N<O;N++){const et=y+N+at*At,Mt=y+N+at*(At+1),Ut=y+(N+1)+at*(At+1),Ht=y+(N+1)+at*At;m.push(et,Mt,Ht),m.push(Mt,Ut,Ht),Y+=6}h.addGroup(S,Y,D),S+=Y,y+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Pn(r){const t={};for(let n=0;n<r.length;n++){const a=kr(r[n]);for(const o in a)t[o]=a[o]}return t}function HM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Xv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const ru={clone:kr,merge:Pn};var VM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Os{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=HM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Wv extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new G,z0=new Ct,B0=new Ct;class Wn extends Wv{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=au*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return au*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,n){return this.getViewBounds(t,z0,B0),n.subVectors(B0,z0)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Jc*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Cr=-90,wr=1;class kM extends pn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wn(Cr,wr,t,n);o.layers=this.layers,this.add(o);const c=new Wn(Cr,wr,t,n);c.layers=this.layers,this.add(c);const u=new Wn(Cr,wr,t,n);u.layers=this.layers,this.add(u);const h=new Wn(Cr,wr,t,n);h.layers=this.layers,this.add(h);const m=new Wn(Cr,wr,t,n);m.layers=this.layers,this.add(m);const p=new Wn(Cr,wr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(t===Bi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===iu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(_,y,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class qv extends zn{constructor(t=[],n=Hr,a,o,c,u,h,m,p,g){super(t,n,a,o,c,u,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class XM extends Ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new qv(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ol(5,5,5),c=new qn({name:"CubemapFromEquirect",uniforms:kr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Yn,blending:da});c.uniforms.tEquirect.value=n;const u=new xn(o,c),h=n.minFilter;return n.minFilter===ws&&(n.minFilter=zi),new kM(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class Nr extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const b of t.hand.values()){const M=n.getJointPose(b,a),v=this._getHandJoint(p,b);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Nr;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class pp{constructor(t,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=n,this.far=a}clone(){return new pp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qM extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zh=new G,YM=new G,ZM=new ge;class qa{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Zh.subVectors(a,n).cross(YM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Zh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||ZM.getNormalMatrix(t),o=this.coplanarPoint(Zh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new lu,jM=new Ct(.5,.5),Bc=new G;class mp{constructor(t=new qa,n=new qa,a=new qa,o=new qa,c=new qa,u=new qa){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Bi,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],y=c[6],S=c[7],E=c[8],b=c[9],M=c[10],v=c[11],P=c[12],U=c[13],R=c[14],F=c[15];if(o[0].setComponents(p-u,S-g,v-E,F-P).normalize(),o[1].setComponents(p+u,S+g,v+E,F+P).normalize(),o[2].setComponents(p+h,S+_,v+b,F+U).normalize(),o[3].setComponents(p-h,S-_,v-b,F-U).normalize(),a)o[4].setComponents(m,y,M,R).normalize(),o[5].setComponents(p-m,S-y,v-M,F-R).normalize();else if(o[4].setComponents(p-m,S-y,v-M,F-R).normalize(),n===Bi)o[5].setComponents(p+m,S+y,v+M,F+R).normalize();else if(n===iu)o[5].setComponents(m,y,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const n=jM.distanceTo(t.center);return ys.radius=.7071067811865476+n,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Bc.x=o.normal.x>0?t.max.x:t.min.x,Bc.y=o.normal.y>0?t.max.y:t.min.y,Bc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jd extends Os{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const I0=new Qe,Kd=new dp,Ic=new lu,Fc=new G;class F0 extends pn{constructor(t=new Zn,n=new jd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ic.copy(a.boundingSphere),Ic.applyMatrix4(o),Ic.radius+=c,t.ray.intersectsSphere(Ic)===!1)return;I0.copy(o).invert(),Kd.copy(t.ray).applyMatrix4(I0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,_=a.attributes.position;if(p!==null){const y=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let E=y,b=S;E<b;E++){const M=p.getX(E);Fc.fromBufferAttribute(_,M),H0(Fc,M,m,o,t,n,this)}}else{const y=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let E=y,b=S;E<b;E++)Fc.fromBufferAttribute(_,E),H0(Fc,E,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function H0(r,t,n,a,o,c,u){const h=Kd.distanceSqToPoint(r);if(h<n){const m=new G;Kd.closestPointToPoint(r,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class KM extends zn{constructor(t,n,a,o,c,u,h,m,p){super(t,n,a,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yv extends zn{constructor(t,n,a=Us,o,c,u,h=Ai,m=Ai,p,g=$o,_=1){if(g!==$o&&g!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:n,depth:_};super(y,o,c,u,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Zv extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cu extends Zn{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],_=[],y=[],S=[];let E=0;const b=[],M=a/2;let v=0;P(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new Rn(_,3)),this.setAttribute("normal",new Rn(y,3)),this.setAttribute("uv",new Rn(S,2));function P(){const R=new G,F=new G;let B=0;const O=(n-t)/a;for(let k=0;k<=c;k++){const D=[],w=k/c,V=w*(n-t)+t;for(let Q=0;Q<=o;Q++){const rt=Q/o,ht=rt*m+h,at=Math.sin(ht),z=Math.cos(ht);F.x=V*at,F.y=-w*a+M,F.z=V*z,_.push(F.x,F.y,F.z),R.set(at,O,z).normalize(),y.push(R.x,R.y,R.z),S.push(rt,1-w),D.push(E++)}b.push(D)}for(let k=0;k<o;k++)for(let D=0;D<c;D++){const w=b[D][k],V=b[D+1][k],Q=b[D+1][k+1],rt=b[D][k+1];(t>0||D!==0)&&(g.push(w,V,rt),B+=3),(n>0||D!==c-1)&&(g.push(V,Q,rt),B+=3)}p.addGroup(v,B,0),v+=B}function U(R){const F=E,B=new Ct,O=new G;let k=0;const D=R===!0?t:n,w=R===!0?1:-1;for(let Q=1;Q<=o;Q++)_.push(0,M*w,0),y.push(0,w,0),S.push(.5,.5),E++;const V=E;for(let Q=0;Q<=o;Q++){const ht=Q/o*m+h,at=Math.cos(ht),z=Math.sin(ht);O.x=D*z,O.y=M*w,O.z=D*at,_.push(O.x,O.y,O.z),y.push(0,w,0),B.x=at*.5+.5,B.y=z*.5*w+.5,S.push(B.x,B.y),E++}for(let Q=0;Q<o;Q++){const rt=F+Q,ht=V+Q;R===!0?g.push(ht,ht+1,rt):g.push(ht+1,ht,rt),k+=3}p.addGroup(v,k,R===!0?1:2),v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gp extends cu{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new gp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-u,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===u)return o/(c-1);const g=a[o],y=a[o+1]-g,S=(u-g)/y;return(o+S)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=n||(u.isVector2?new Ct:new G);return m.copy(h).sub(u).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new G,o=[],c=[],u=[],h=new G,m=new Qe;for(let S=0;S<=t;S++){const E=S/t;o[S]=this.getTangentAt(E,new G)}c[0]=new G,u[0]=new G;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),y=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),y<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(ve(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,E))}u[S].crossVectors(o[S],c[S])}if(n===!0){let S=Math.acos(ve(c[0].dot(c[t]),-1,1));S/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _p extends Fi{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new Ct){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=m-this.aX,S=p-this.aY;m=y*g-S*_+this.aX,p=y*_+S*g+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class QM extends _p{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function vp(){let r=0,t=0,n=0,a=0;function o(c,u,h,m){r=c,t=h,n=-3*c+3*u-2*h-m,a=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){o(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,g,_){let y=(u-c)/p-(h-c)/(p+g)+(h-u)/g,S=(h-u)/g-(m-u)/(g+_)+(m-h)/_;y*=g,S*=g,o(u,h,y,S)},calc:function(c){const u=c*c,h=u*c;return r+t*c+n*u+a*h}}}const Hc=new G,jh=new vp,Kh=new vp,Qh=new vp;class JM extends Fi{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new G){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(Hc.subVectors(o[0],o[1]).add(o[0]),p=Hc);const _=o[h%c],y=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Hc.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Hc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),S),b=Math.pow(_.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(g),S);b<1e-4&&(b=1),E<1e-4&&(E=b),M<1e-4&&(M=b),jh.initNonuniformCatmullRom(p.x,_.x,y.x,g.x,E,b,M),Kh.initNonuniformCatmullRom(p.y,_.y,y.y,g.y,E,b,M),Qh.initNonuniformCatmullRom(p.z,_.z,y.z,g.z,E,b,M)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(p.x,_.x,y.x,g.x,this.tension),Kh.initCatmullRom(p.y,_.y,y.y,g.y,this.tension),Qh.initCatmullRom(p.z,_.z,y.z,g.z,this.tension));return a.set(jh.calc(m),Kh.calc(m),Qh.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new G().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function V0(r,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=r*r,m=r*h;return(2*n-2*a+c+u)*m+(-3*n+3*a-2*c-u)*h+c*r+n}function $M(r,t){const n=1-r;return n*n*t}function tE(r,t){return 2*(1-r)*r*t}function eE(r,t){return r*r*t}function jo(r,t,n,a){return $M(r,t)+tE(r,n)+eE(r,a)}function nE(r,t){const n=1-r;return n*n*n*t}function iE(r,t){const n=1-r;return 3*n*n*r*t}function aE(r,t){return 3*(1-r)*r*r*t}function sE(r,t){return r*r*r*t}function Ko(r,t,n,a,o){return nE(r,t)+iE(r,n)+aE(r,a)+sE(r,o)}class jv extends Fi{constructor(t=new Ct,n=new Ct,a=new Ct,o=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Ct){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Ko(t,o.x,c.x,u.x,h.x),Ko(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rE extends Fi{constructor(t=new G,n=new G,a=new G,o=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new G){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Ko(t,o.x,c.x,u.x,h.x),Ko(t,o.y,c.y,u.y,h.y),Ko(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kv extends Fi{constructor(t=new Ct,n=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ct){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ct){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oE extends Fi{constructor(t=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new G){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qv extends Fi{constructor(t=new Ct,n=new Ct,a=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Ct){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(jo(t,o.x,c.x,u.x),jo(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lE extends Fi{constructor(t=new G,n=new G,a=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new G){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(jo(t,o.x,c.x,u.x),jo(t,o.y,c.y,u.y),jo(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jv extends Fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ct){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,m=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return a.set(V0(h,m.x,p.x,g.x,_.x),V0(h,m.y,p.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Ct().fromArray(o))}return this}}var Qd=Object.freeze({__proto__:null,ArcCurve:QM,CatmullRomCurve3:JM,CubicBezierCurve:jv,CubicBezierCurve3:rE,EllipseCurve:_p,LineCurve:Kv,LineCurve3:oE,QuadraticBezierCurve:Qv,QuadraticBezierCurve3:lE,SplineCurve:Jv});class cE extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qd[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-u/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],h=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,m=u.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new Qd[o.type]().fromJSON(o))}return this}}class Jd extends cE{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new Kv(this.currentPoint.clone(),new Ct(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new Qv(this.currentPoint.clone(),new Ct(t,n),new Ct(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,u){const h=new jv(this.currentPoint.clone(),new Ct(t,n),new Ct(a,o),new Ct(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new Jv(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,u){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,a,o,c,u),this}absarc(t,n,a,o,c,u){return this.absellipse(t,n,a,a,o,c,u),this}ellipse(t,n,a,o,c,u,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,a,o,c,u,h,m),this}absellipse(t,n,a,o,c,u,h,m){const p=new _p(t,n,a,o,c,u,h,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $c extends Jd{constructor(t){super(t),this.uuid=qr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new Jd().fromJSON(o))}return this}}function uE(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let c=$v(r,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,m,p;if(a&&(c=mE(r,t,c,n)),r.length>80*n){h=1/0,m=1/0;let g=-1/0,_=-1/0;for(let y=n;y<o;y+=n){const S=r[y],E=r[y+1];S<h&&(h=S),E<m&&(m=E),S>g&&(g=S),E>_&&(_=E)}p=Math.max(g-h,_-m),p=p!==0?32767/p:0}return il(c,u,n,h,m,p,0),u}function $v(r,t,n,a,o){let c;if(o===AE(r,t,n,a)>0)for(let u=t;u<n;u+=a)c=G0(u/a|0,r[u],r[u+1],c);else for(let u=n-a;u>=t;u-=a)c=G0(u/a|0,r[u],r[u+1],c);return c&&Xr(c,c.next)&&(sl(c),c=c.next),c}function Ls(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(Xr(n,n.next)||Je(n.prev,n,n.next)===0)){if(sl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function il(r,t,n,a,o,c,u){if(!r)return;!u&&c&&xE(r,a,o,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?hE(r,a,o,c):fE(r)){t.push(m.i,r.i,p.i),sl(r),r=p.next,h=p.next;continue}if(r=p,r===h){u?u===1?(r=dE(Ls(r),t),il(r,t,n,a,o,c,2)):u===2&&pE(r,t,n,a,o,c):il(Ls(r),t,n,a,o,c,1);break}}}function fE(r){const t=r.prev,n=r,a=r.next;if(Je(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,h=t.y,m=n.y,p=a.y,g=Math.min(o,c,u),_=Math.min(h,m,p),y=Math.max(o,c,u),S=Math.max(h,m,p);let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=y&&E.y>=_&&E.y<=S&&Yo(o,h,c,m,u,p,E.x,E.y)&&Je(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function hE(r,t,n,a){const o=r.prev,c=r,u=r.next;if(Je(o,c,u)>=0)return!1;const h=o.x,m=c.x,p=u.x,g=o.y,_=c.y,y=u.y,S=Math.min(h,m,p),E=Math.min(g,_,y),b=Math.max(h,m,p),M=Math.max(g,_,y),v=$d(S,E,t,n,a),P=$d(b,M,t,n,a);let U=r.prevZ,R=r.nextZ;for(;U&&U.z>=v&&R&&R.z<=P;){if(U.x>=S&&U.x<=b&&U.y>=E&&U.y<=M&&U!==o&&U!==u&&Yo(h,g,m,_,p,y,U.x,U.y)&&Je(U.prev,U,U.next)>=0||(U=U.prevZ,R.x>=S&&R.x<=b&&R.y>=E&&R.y<=M&&R!==o&&R!==u&&Yo(h,g,m,_,p,y,R.x,R.y)&&Je(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;U&&U.z>=v;){if(U.x>=S&&U.x<=b&&U.y>=E&&U.y<=M&&U!==o&&U!==u&&Yo(h,g,m,_,p,y,U.x,U.y)&&Je(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;R&&R.z<=P;){if(R.x>=S&&R.x<=b&&R.y>=E&&R.y<=M&&R!==o&&R!==u&&Yo(h,g,m,_,p,y,R.x,R.y)&&Je(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function dE(r,t){let n=r;do{const a=n.prev,o=n.next.next;!Xr(a,o)&&ey(a,n,n.next,o)&&al(a,o)&&al(o,a)&&(t.push(a.i,n.i,o.i),sl(n),sl(n.next),n=r=o),n=n.next}while(n!==r);return Ls(n)}function pE(r,t,n,a,o,c){let u=r;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&EE(u,h)){let m=ny(u,h);u=Ls(u,u.next),m=Ls(m,m.next),il(u,t,n,a,o,c,0),il(m,t,n,a,o,c,0);return}h=h.next}u=u.next}while(u!==r)}function mE(r,t,n,a){const o=[];for(let c=0,u=t.length;c<u;c++){const h=t[c]*a,m=c<u-1?t[c+1]*a:r.length,p=$v(r,h,m,a,!1);p===p.next&&(p.steiner=!0),o.push(ME(p))}o.sort(gE);for(let c=0;c<o.length;c++)n=_E(o[c],n);return n}function gE(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function _E(r,t){const n=vE(r,t);if(!n)return t;const a=ny(n,r);return Ls(a,a.next),Ls(n,n.next)}function vE(r,t){let n=t;const a=r.x,o=r.y;let c=-1/0,u;if(Xr(r,n))return n;do{if(Xr(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const _=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>c&&(c=_,u=n.x<n.next.x?n:n.next,_===a))return u}n=n.next}while(n!==t);if(!u)return null;const h=u,m=u.x,p=u.y;let g=1/0;n=u;do{if(a>=n.x&&n.x>=m&&a!==n.x&&ty(o<p?a:c,o,m,p,o<p?c:a,o,n.x,n.y)){const _=Math.abs(o-n.y)/(a-n.x);al(n,r)&&(_<g||_===g&&(n.x>u.x||n.x===u.x&&yE(u,n)))&&(u=n,g=_)}n=n.next}while(n!==h);return u}function yE(r,t){return Je(r.prev,r,t.prev)<0&&Je(t.next,r,r.next)<0}function xE(r,t,n,a){let o=r;do o.z===0&&(o.z=$d(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,SE(o)}function SE(r){let t,n=1;do{let a=r,o;r=null;let c=null;for(t=0;a;){t++;let u=a,h=0;for(let p=0;p<n&&(h++,u=u.nextZ,!!u);p++);let m=n;for(;h>0||m>0&&u;)h!==0&&(m===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,h--):(o=u,u=u.nextZ,m--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(t>1);return r}function $d(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function ME(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function ty(r,t,n,a,o,c,u,h){return(o-u)*(t-h)>=(r-u)*(c-h)&&(r-u)*(a-h)>=(n-u)*(t-h)&&(n-u)*(c-h)>=(o-u)*(a-h)}function Yo(r,t,n,a,o,c,u,h){return!(r===u&&t===h)&&ty(r,t,n,a,o,c,u,h)}function EE(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!TE(r,t)&&(al(r,t)&&al(t,r)&&bE(r,t)&&(Je(r.prev,r,t.prev)||Je(r,t.prev,t))||Xr(r,t)&&Je(r.prev,r,r.next)>0&&Je(t.prev,t,t.next)>0)}function Je(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Xr(r,t){return r.x===t.x&&r.y===t.y}function ey(r,t,n,a){const o=Gc(Je(r,t,n)),c=Gc(Je(r,t,a)),u=Gc(Je(n,a,r)),h=Gc(Je(n,a,t));return!!(o!==c&&u!==h||o===0&&Vc(r,n,t)||c===0&&Vc(r,a,t)||u===0&&Vc(n,r,a)||h===0&&Vc(n,t,a))}function Vc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function Gc(r){return r>0?1:r<0?-1:0}function TE(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&ey(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function al(r,t){return Je(r.prev,r,r.next)<0?Je(r,t,r.next)>=0&&Je(r,r.prev,t)>=0:Je(r,t,r.prev)<0||Je(r,r.next,t)<0}function bE(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function ny(r,t){const n=tp(r.i,r.x,r.y),a=tp(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function G0(r,t,n,a){const o=tp(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function sl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function tp(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function AE(r,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return o}class RE{static triangulate(t,n,a=2){return uE(t,n,a)}}class Ds{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return Ds.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];k0(t),X0(a,t);let u=t.length;n.forEach(k0);for(let m=0;m<n.length;m++)o.push(u),u+=n[m].length,X0(a,n[m]);const h=RE.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function k0(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function X0(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class yp extends Zn{constructor(t=new $c([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];u(p)}this.setAttribute("position",new Rn(o,3)),this.setAttribute("uv",new Rn(c,2)),this.computeVertexNormals();function u(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let y=n.bevelEnabled!==void 0?n.bevelEnabled:!0,S=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:S-.1,b=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const v=n.extrudePath,P=n.UVGenerator!==void 0?n.UVGenerator:CE;let U,R=!1,F,B,O,k;v&&(U=v.getSpacedPoints(g),R=!0,y=!1,F=v.computeFrenetFrames(g,!1),B=new G,O=new G,k=new G),y||(M=0,S=0,E=0,b=0);const D=h.extractPoints(p);let w=D.shape;const V=D.holes;if(!Ds.isClockWise(w)){w=w.reverse();for(let St=0,mt=V.length;St<mt;St++){const pt=V[St];Ds.isClockWise(pt)&&(V[St]=pt.reverse())}}function rt(St){const pt=10000000000000001e-36;let vt=St[0];for(let Ft=1;Ft<=St.length;Ft++){const Dt=Ft%St.length,zt=St[Dt],ce=zt.x-vt.x,ue=zt.y-vt.y,L=ce*ce+ue*ue,T=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(vt.x),Math.abs(vt.y)),J=pt*T*T;if(L<=J){St.splice(Dt,1),Ft--;continue}vt=zt}}rt(w),V.forEach(rt);const ht=V.length,at=w;for(let St=0;St<ht;St++){const mt=V[St];w=w.concat(mt)}function z(St,mt,pt){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),St.clone().addScaledVector(mt,pt)}const q=w.length;function Y(St,mt,pt){let vt,Ft,Dt;const zt=St.x-mt.x,ce=St.y-mt.y,ue=pt.x-St.x,L=pt.y-St.y,T=zt*zt+ce*ce,J=zt*L-ce*ue;if(Math.abs(J)>Number.EPSILON){const ct=Math.sqrt(T),Tt=Math.sqrt(ue*ue+L*L),ft=mt.x-ce/ct,$t=mt.y+zt/ct,Ot=pt.x-L/Tt,Qt=pt.y+ue/Tt,Jt=((Ot-ft)*L-(Qt-$t)*ue)/(zt*L-ce*ue);vt=ft+zt*Jt-St.x,Ft=$t+ce*Jt-St.y;const wt=vt*vt+Ft*Ft;if(wt<=2)return new Ct(vt,Ft);Dt=Math.sqrt(wt/2)}else{let ct=!1;zt>Number.EPSILON?ue>Number.EPSILON&&(ct=!0):zt<-Number.EPSILON?ue<-Number.EPSILON&&(ct=!0):Math.sign(ce)===Math.sign(L)&&(ct=!0),ct?(vt=-ce,Ft=zt,Dt=Math.sqrt(T)):(vt=zt,Ft=ce,Dt=Math.sqrt(T/2))}return new Ct(vt/Dt,Ft/Dt)}const _t=[];for(let St=0,mt=at.length,pt=mt-1,vt=St+1;St<mt;St++,pt++,vt++)pt===mt&&(pt=0),vt===mt&&(vt=0),_t[St]=Y(at[St],at[pt],at[vt]);const At=[];let N,et=_t.concat();for(let St=0,mt=ht;St<mt;St++){const pt=V[St];N=[];for(let vt=0,Ft=pt.length,Dt=Ft-1,zt=vt+1;vt<Ft;vt++,Dt++,zt++)Dt===Ft&&(Dt=0),zt===Ft&&(zt=0),N[vt]=Y(pt[vt],pt[Dt],pt[zt]);At.push(N),et=et.concat(N)}let Mt;if(M===0)Mt=Ds.triangulateShape(at,V);else{const St=[],mt=[];for(let pt=0;pt<M;pt++){const vt=pt/M,Ft=S*Math.cos(vt*Math.PI/2),Dt=E*Math.sin(vt*Math.PI/2)+b;for(let zt=0,ce=at.length;zt<ce;zt++){const ue=z(at[zt],_t[zt],Dt);bt(ue.x,ue.y,-Ft),vt===0&&St.push(ue)}for(let zt=0,ce=ht;zt<ce;zt++){const ue=V[zt];N=At[zt];const L=[];for(let T=0,J=ue.length;T<J;T++){const ct=z(ue[T],N[T],Dt);bt(ct.x,ct.y,-Ft),vt===0&&L.push(ct)}vt===0&&mt.push(L)}}Mt=Ds.triangulateShape(St,mt)}const Ut=Mt.length,Ht=E+b;for(let St=0;St<q;St++){const mt=y?z(w[St],et[St],Ht):w[St];R?(O.copy(F.normals[0]).multiplyScalar(mt.x),B.copy(F.binormals[0]).multiplyScalar(mt.y),k.copy(U[0]).add(O).add(B),bt(k.x,k.y,k.z)):bt(mt.x,mt.y,0)}for(let St=1;St<=g;St++)for(let mt=0;mt<q;mt++){const pt=y?z(w[mt],et[mt],Ht):w[mt];R?(O.copy(F.normals[St]).multiplyScalar(pt.x),B.copy(F.binormals[St]).multiplyScalar(pt.y),k.copy(U[St]).add(O).add(B),bt(k.x,k.y,k.z)):bt(pt.x,pt.y,_/g*St)}for(let St=M-1;St>=0;St--){const mt=St/M,pt=S*Math.cos(mt*Math.PI/2),vt=E*Math.sin(mt*Math.PI/2)+b;for(let Ft=0,Dt=at.length;Ft<Dt;Ft++){const zt=z(at[Ft],_t[Ft],vt);bt(zt.x,zt.y,_+pt)}for(let Ft=0,Dt=V.length;Ft<Dt;Ft++){const zt=V[Ft];N=At[Ft];for(let ce=0,ue=zt.length;ce<ue;ce++){const L=z(zt[ce],N[ce],vt);R?bt(L.x,L.y+U[g-1].y,U[g-1].x+pt):bt(L.x,L.y,_+pt)}}}nt(),ut();function nt(){const St=o.length/3;if(y){let mt=0,pt=q*mt;for(let vt=0;vt<Ut;vt++){const Ft=Mt[vt];Lt(Ft[2]+pt,Ft[1]+pt,Ft[0]+pt)}mt=g+M*2,pt=q*mt;for(let vt=0;vt<Ut;vt++){const Ft=Mt[vt];Lt(Ft[0]+pt,Ft[1]+pt,Ft[2]+pt)}}else{for(let mt=0;mt<Ut;mt++){const pt=Mt[mt];Lt(pt[2],pt[1],pt[0])}for(let mt=0;mt<Ut;mt++){const pt=Mt[mt];Lt(pt[0]+q*g,pt[1]+q*g,pt[2]+q*g)}}a.addGroup(St,o.length/3-St,0)}function ut(){const St=o.length/3;let mt=0;It(at,mt),mt+=at.length;for(let pt=0,vt=V.length;pt<vt;pt++){const Ft=V[pt];It(Ft,mt),mt+=Ft.length}a.addGroup(St,o.length/3-St,1)}function It(St,mt){let pt=St.length;for(;--pt>=0;){const vt=pt;let Ft=pt-1;Ft<0&&(Ft=St.length-1);for(let Dt=0,zt=g+M*2;Dt<zt;Dt++){const ce=q*Dt,ue=q*(Dt+1),L=mt+vt+ce,T=mt+Ft+ce,J=mt+Ft+ue,ct=mt+vt+ue;oe(L,T,J,ct)}}}function bt(St,mt,pt){m.push(St),m.push(mt),m.push(pt)}function Lt(St,mt,pt){we(St),we(mt),we(pt);const vt=o.length/3,Ft=P.generateTopUV(a,o,vt-3,vt-2,vt-1);I(Ft[0]),I(Ft[1]),I(Ft[2])}function oe(St,mt,pt,vt){we(St),we(mt),we(vt),we(mt),we(pt),we(vt);const Ft=o.length/3,Dt=P.generateSideWallUV(a,o,Ft-6,Ft-3,Ft-2,Ft-1);I(Dt[0]),I(Dt[1]),I(Dt[3]),I(Dt[1]),I(Dt[2]),I(Dt[3])}function we(St){o.push(m[St*3+0]),o.push(m[St*3+1]),o.push(m[St*3+2])}function I(St){c.push(St.x),c.push(St.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return wE(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,u=t.shapes.length;c<u;c++){const h=n[t.shapes[c]];a.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new Qd[o.type]().fromJSON(o)),new yp(a,t.options)}}const CE={generateTopUV:function(r,t,n,a,o){const c=t[n*3],u=t[n*3+1],h=t[a*3],m=t[a*3+1],p=t[o*3],g=t[o*3+1];return[new Ct(c,u),new Ct(h,m),new Ct(p,g)]},generateSideWallUV:function(r,t,n,a,o,c){const u=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[a*3],g=t[a*3+1],_=t[a*3+2],y=t[o*3],S=t[o*3+1],E=t[o*3+2],b=t[c*3],M=t[c*3+1],v=t[c*3+2];return Math.abs(h-g)<Math.abs(u-p)?[new Ct(u,1-m),new Ct(p,1-_),new Ct(y,1-E),new Ct(b,1-v)]:[new Ct(h,1-m),new Ct(g,1-_),new Ct(S,1-E),new Ct(M,1-v)]}};function wE(r,t,n){if(n.shapes=[],Array.isArray(r))for(let a=0,o=r.length;a<o;a++){const c=r[a];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class ll extends Zn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,g=m+1,_=t/h,y=n/m,S=[],E=[],b=[],M=[];for(let v=0;v<g;v++){const P=v*y-u;for(let U=0;U<p;U++){const R=U*_-c;E.push(R,-P,0),b.push(0,0,1),M.push(U/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<h;P++){const U=P+p*v,R=P+p*(v+1),F=P+1+p*(v+1),B=P+1+p*v;S.push(U,R,B),S.push(R,F,B)}this.setIndex(S),this.setAttribute("position",new Rn(E,3)),this.setAttribute("normal",new Rn(b,3)),this.setAttribute("uv",new Rn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class xp extends Zn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+h,Math.PI);let p=0;const g=[],_=new G,y=new G,S=[],E=[],b=[],M=[];for(let v=0;v<=a;v++){const P=[],U=v/a;let R=0;v===0&&u===0?R=.5/n:v===a&&m===Math.PI&&(R=-.5/n);for(let F=0;F<=n;F++){const B=F/n;_.x=-t*Math.cos(o+B*c)*Math.sin(u+U*h),_.y=t*Math.cos(u+U*h),_.z=t*Math.sin(o+B*c)*Math.sin(u+U*h),E.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),M.push(B+R,1-U),P.push(p++)}g.push(P)}for(let v=0;v<a;v++)for(let P=0;P<n;P++){const U=g[v][P+1],R=g[v][P],F=g[v+1][P],B=g[v+1][P+1];(v!==0||u>0)&&S.push(U,R,B),(v!==a-1||m<Math.PI)&&S.push(R,F,B)}this.setIndex(S),this.setAttribute("position",new Rn(E,3)),this.setAttribute("normal",new Rn(b,3)),this.setAttribute("uv",new Rn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class iy extends Os{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fp,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class DE extends iy{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class UE extends Os{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fp,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class LE extends Os{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NE extends Os{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const W0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class OE{constructor(t,n,a){const o=this;let c=!1,u=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this.abortController=new AbortController,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,h),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,h),u===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,y=p.length;_<y;_+=2){const S=p[_],E=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const PE=new OE;class uu{constructor(t){this.manager=t!==void 0?t:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const a=this;return new Promise(function(o,c){a.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}uu.DEFAULT_MATERIAL_NAME="__DEFAULT";const ca={};class zE extends Error{constructor(t,n){super(t),this.response=n}}class ay extends uu{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,n,a,o){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=W0.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(c),this.manager.itemEnd(t)},0),c;if(ca[t]!==void 0){ca[t].push({onLoad:n,onProgress:a,onError:o});return}ca[t]=[],ca[t].push({onLoad:n,onProgress:a,onError:o});const u=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,m=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=ca[t],_=p.body.getReader(),y=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=y?parseInt(y):0,E=S!==0;let b=0;const M=new ReadableStream({start(v){P();function P(){_.read().then(({done:U,value:R})=>{if(U)v.close();else{b+=R.byteLength;const F=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:S});for(let B=0,O=g.length;B<O;B++){const k=g[B];k.onProgress&&k.onProgress(F)}v.enqueue(R),P()}},U=>{v.error(U)})}}});return new Response(M)}else throw new zE(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,h));case"json":return p.json();default:if(h==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),y=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(y);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{W0.add(`file:${t}`,p);const g=ca[t];delete ca[t];for(let _=0,y=g.length;_<y;_++){const S=g[_];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=ca[t];if(g===void 0)throw this.manager.itemError(t),p;delete ca[t];for(let _=0,y=g.length;_<y;_++){const S=g[_];S.onError&&S.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Sp extends pn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Jh=new Qe,q0=new G,Y0=new G;class sy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;q0.setFromMatrixPosition(t.matrixWorld),n.position.copy(q0),Y0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Y0),n.updateMatrixWorld(),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class BE extends sy{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,a=au*2*t.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||n.far;(a!==n.fov||o!==n.aspect||c!==n.far)&&(n.fov=a,n.aspect=o,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class IE extends Sp{constructor(t,n,a=0,o=Math.PI/3,c=0,u=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.distance=a,this.angle=o,this.penumbra=c,this.decay=u,this.map=null,this.shadow=new BE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Z0=new Qe,qo=new G,$h=new G;class FE extends sy{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),qo.setFromMatrixPosition(t.matrixWorld),a.position.copy(qo),$h.copy(a.position),$h.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt($h),a.updateMatrixWorld(),o.makeTranslation(-qo.x,-qo.y,-qo.z),Z0.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Z0,a.coordinateSystem,a.reversedDepth)}}class j0 extends Sp{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new FE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ry extends Wv{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class HE extends Sp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}let kc;class oy{static getContext(){return kc===void 0&&(kc=new(window.AudioContext||window.webkitAudioContext)),kc}static setContext(t){kc=t}}class VE extends uu{constructor(t){super(t)}load(t,n,a,o){const c=this,u=new ay(this.manager);u.setResponseType("arraybuffer"),u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(t,function(m){try{const p=m.slice(0);oy.getContext().decodeAudioData(p,function(_){n(_)}).catch(h)}catch(p){h(p)}},a,o);function h(m){o?o(m):console.error(m),c.manager.itemError(t)}}}class GE extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Mp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}const xs=new G,td=new Ka,kE=new G,Ss=new G,Ms=new G;class XE extends pn{constructor(){super(),this.type="AudioListener",this.context=oy.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Mp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const n=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(xs,td,kE),Ss.set(0,0,-1).applyQuaternion(td),Ms.set(0,1,0).applyQuaternion(td),n.positionX){const a=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(xs.x,a),n.positionY.linearRampToValueAtTime(xs.y,a),n.positionZ.linearRampToValueAtTime(xs.z,a),n.forwardX.linearRampToValueAtTime(Ss.x,a),n.forwardY.linearRampToValueAtTime(Ss.y,a),n.forwardZ.linearRampToValueAtTime(Ss.z,a),n.upX.linearRampToValueAtTime(Ms.x,a),n.upY.linearRampToValueAtTime(Ms.y,a),n.upZ.linearRampToValueAtTime(Ms.z,a)}else n.setPosition(xs.x,xs.y,xs.z),n.setOrientation(Ss.x,Ss.y,Ss.z,Ms.x,Ms.y,Ms.z)}}class WE extends pn{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,n){return super.copy(t,n),t.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}class K0{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(ve(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qE{constructor(){this.type="ShapePath",this.color=new re,this.subPaths=[],this.currentPath=null}moveTo(t,n){return this.currentPath=new Jd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,a,o){return this.currentPath.quadraticCurveTo(t,n,a,o),this}bezierCurveTo(t,n,a,o,c,u){return this.currentPath.bezierCurveTo(t,n,a,o,c,u),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function n(v){const P=[];for(let U=0,R=v.length;U<R;U++){const F=v[U],B=new $c;B.curves=F.curves,P.push(B)}return P}function a(v,P){const U=P.length;let R=!1;for(let F=U-1,B=0;B<U;F=B++){let O=P[F],k=P[B],D=k.x-O.x,w=k.y-O.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(O=P[B],D=-D,k=P[F],w=-w),v.y<O.y||v.y>k.y)continue;if(v.y===O.y){if(v.x===O.x)return!0}else{const V=w*(v.x-O.x)-D*(v.y-O.y);if(V===0)return!0;if(V<0)continue;R=!R}}else{if(v.y!==O.y)continue;if(k.x<=v.x&&v.x<=O.x||O.x<=v.x&&v.x<=k.x)return!0}}return R}const o=Ds.isClockWise,c=this.subPaths;if(c.length===0)return[];let u,h,m;const p=[];if(c.length===1)return h=c[0],m=new $c,m.curves=h.curves,p.push(m),p;let g=!o(c[0].getPoints());g=t?!g:g;const _=[],y=[];let S=[],E=0,b;y[E]=void 0,S[E]=[];for(let v=0,P=c.length;v<P;v++)h=c[v],b=h.getPoints(),u=o(b),u=t?!u:u,u?(!g&&y[E]&&E++,y[E]={s:new $c,p:b},y[E].s.curves=h.curves,g&&E++,S[E]=[]):S[E].push({h,p:b[0]});if(!y[0])return n(c);if(y.length>1){let v=!1,P=0;for(let U=0,R=y.length;U<R;U++)_[U]=[];for(let U=0,R=y.length;U<R;U++){const F=S[U];for(let B=0;B<F.length;B++){const O=F[B];let k=!0;for(let D=0;D<y.length;D++)a(O.p,y[D].p)&&(U!==D&&P++,k?(k=!1,_[D].push(O)):v=!0);k&&_[U].push(O)}}P>0&&v===!1&&(S=_)}let M;for(let v=0,P=y.length;v<P;v++){m=y[v].s,p.push(m),M=S[v];for(let U=0,R=M.length;U<R;U++)m.holes.push(M[U].h)}return p}}class YE extends Ns{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Q0(r,t,n,a){const o=ZE(a);switch(n){case Nv:return r*t;case Pv:return r*t/o.components*o.byteLength;case lp:return r*t/o.components*o.byteLength;case zv:return r*t*2/o.components*o.byteLength;case cp:return r*t*2/o.components*o.byteLength;case Ov:return r*t*3/o.components*o.byteLength;case bi:return r*t*4/o.components*o.byteLength;case up:return r*t*4/o.components*o.byteLength;case Zc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Md:case Td:return Math.max(r,16)*Math.max(t,8)/4;case Sd:case Ed:return Math.max(r,8)*Math.max(t,8)/2;case bd:case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gd:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZE(r){switch(r){case Ii:case wv:return{byteLength:1,components:1};case Qo:case Dv:case pa:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Us:case sp:case ha:return{byteLength:4,components:1};case Uv:case Lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ly(){let r=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function jE(r){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,_=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<_.length;S++){const E=_[y],b=_[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,_[y]=b)}_.length=y+1;for(let S=0,E=_.length;S<E;S++){const b=_[S];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var KE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ST=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AT="gl_FragColor = linearToOutputTexel( gl_FragColor );",RT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:KE,alphahash_pars_fragment:QE,alphamap_fragment:JE,alphamap_pars_fragment:$E,alphatest_fragment:tT,alphatest_pars_fragment:eT,aomap_fragment:nT,aomap_pars_fragment:iT,batching_pars_vertex:aT,batching_vertex:sT,begin_vertex:rT,beginnormal_vertex:oT,bsdfs:lT,iridescence_fragment:cT,bumpmap_pars_fragment:uT,clipping_planes_fragment:fT,clipping_planes_pars_fragment:hT,clipping_planes_pars_vertex:dT,clipping_planes_vertex:pT,color_fragment:mT,color_pars_fragment:gT,color_pars_vertex:_T,color_vertex:vT,common:yT,cube_uv_reflection_fragment:xT,defaultnormal_vertex:ST,displacementmap_pars_vertex:MT,displacementmap_vertex:ET,emissivemap_fragment:TT,emissivemap_pars_fragment:bT,colorspace_fragment:AT,colorspace_pars_fragment:RT,envmap_fragment:CT,envmap_common_pars_fragment:wT,envmap_pars_fragment:DT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:GT,envmap_vertex:LT,fog_vertex:NT,fog_pars_vertex:OT,fog_fragment:PT,fog_pars_fragment:zT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:IT,lights_lambert_fragment:FT,lights_lambert_pars_fragment:HT,lights_pars_begin:VT,lights_toon_fragment:kT,lights_toon_pars_fragment:XT,lights_phong_fragment:WT,lights_phong_pars_fragment:qT,lights_physical_fragment:YT,lights_physical_pars_fragment:ZT,lights_fragment_begin:jT,lights_fragment_maps:KT,lights_fragment_end:QT,logdepthbuf_fragment:JT,logdepthbuf_pars_fragment:$T,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:eb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:ab,map_particle_pars_fragment:sb,metalnessmap_fragment:rb,metalnessmap_pars_fragment:ob,morphinstance_vertex:lb,morphcolor_vertex:cb,morphnormal_vertex:ub,morphtarget_pars_vertex:fb,morphtarget_vertex:hb,normal_fragment_begin:db,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:gb,normal_vertex:_b,normalmap_pars_fragment:vb,clearcoat_normal_fragment_begin:yb,clearcoat_normal_fragment_maps:xb,clearcoat_pars_fragment:Sb,iridescence_pars_fragment:Mb,opaque_fragment:Eb,packing:Tb,premultiplied_alpha_fragment:bb,project_vertex:Ab,dithering_fragment:Rb,dithering_pars_fragment:Cb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Db,shadowmap_pars_fragment:Ub,shadowmap_pars_vertex:Lb,shadowmap_vertex:Nb,shadowmask_pars_fragment:Ob,skinbase_vertex:Pb,skinning_pars_vertex:zb,skinning_vertex:Bb,skinnormal_vertex:Ib,specularmap_fragment:Fb,specularmap_pars_fragment:Hb,tonemapping_fragment:Vb,tonemapping_pars_fragment:Gb,transmission_fragment:kb,transmission_pars_fragment:Xb,uv_pars_fragment:Wb,uv_pars_vertex:qb,uv_vertex:Yb,worldpos_vertex:Zb,background_vert:jb,background_frag:Kb,backgroundCube_vert:Qb,backgroundCube_frag:Jb,cube_vert:$b,cube_frag:t1,depth_vert:e1,depth_frag:n1,distanceRGBA_vert:i1,distanceRGBA_frag:a1,equirect_vert:s1,equirect_frag:r1,linedashed_vert:o1,linedashed_frag:l1,meshbasic_vert:c1,meshbasic_frag:u1,meshlambert_vert:f1,meshlambert_frag:h1,meshmatcap_vert:d1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:g1,meshphong_vert:_1,meshphong_frag:v1,meshphysical_vert:y1,meshphysical_frag:x1,meshtoon_vert:S1,meshtoon_frag:M1,points_vert:E1,points_frag:T1,shadow_vert:b1,shadow_frag:A1,sprite_vert:R1,sprite_frag:C1},kt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Pi={basic:{uniforms:Pn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Pn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new re(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Pn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Pn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Pn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new re(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Pn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Pn([kt.points,kt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Pn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Pn([kt.common,kt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Pn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Pn([kt.sprite,kt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Pn([kt.common,kt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Pn([kt.lights,kt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Pi.physical={uniforms:Pn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Xc={r:0,b:0,g:0},Es=new Ci,w1=new Qe;function D1(r,t,n,a,o,c,u){const h=new re(0);let m=c===!0?0:1,p,g,_=null,y=0,S=null;function E(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?n:t).get(R)),R}function b(U){let R=!1;const F=E(U);F===null?v(h,m):F&&F.isColor&&(v(F,1),R=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,R){const F=E(R);F&&(F.isCubeTexture||F.mapping===ou)?(g===void 0&&(g=new xn(new ol(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:kr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Es.copy(R.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(Es)),g.material.toneMapped=Le.getTransfer(F.colorSpace)!==Ge,(_!==F||y!==F.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=F,y=F.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new xn(new ll(2,2),new qn({name:"BackgroundMaterial",uniforms:kr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Le.getTransfer(F.colorSpace)!==Ge,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||y!==F.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=F,y=F.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,R){U.getRGB(Xc,Xv(r)),a.buffers.color.setClear(Xc.r,Xc.g,Xc.b,R,u)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,R=1){h.set(U),m=R,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:b,addToRenderList:M,dispose:P}}function U1(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=y(null);let c=o,u=!1;function h(w,V,Q,rt,ht){let at=!1;const z=_(rt,Q,V);c!==z&&(c=z,p(c.object)),at=S(w,rt,Q,ht),at&&E(w,rt,Q,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(at||u)&&(u=!1,R(w,V,Q,rt),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,V,Q){const rt=Q.wireframe===!0;let ht=a[w.id];ht===void 0&&(ht={},a[w.id]=ht);let at=ht[V.id];at===void 0&&(at={},ht[V.id]=at);let z=at[rt];return z===void 0&&(z=y(m()),at[rt]=z),z}function y(w){const V=[],Q=[],rt=[];for(let ht=0;ht<n;ht++)V[ht]=0,Q[ht]=0,rt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Q,attributeDivisors:rt,object:w,attributes:{},index:null}}function S(w,V,Q,rt){const ht=c.attributes,at=V.attributes;let z=0;const q=Q.getAttributes();for(const Y in q)if(q[Y].location>=0){const At=ht[Y];let N=at[Y];if(N===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),At===void 0||At.attribute!==N||N&&At.data!==N.data)return!0;z++}return c.attributesNum!==z||c.index!==rt}function E(w,V,Q,rt){const ht={},at=V.attributes;let z=0;const q=Q.getAttributes();for(const Y in q)if(q[Y].location>=0){let At=at[Y];At===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(At=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(At=w.instanceColor));const N={};N.attribute=At,At&&At.data&&(N.data=At.data),ht[Y]=N,z++}c.attributes=ht,c.attributesNum=z,c.index=rt}function b(){const w=c.newAttributes;for(let V=0,Q=w.length;V<Q;V++)w[V]=0}function M(w){v(w,0)}function v(w,V){const Q=c.newAttributes,rt=c.enabledAttributes,ht=c.attributeDivisors;Q[w]=1,rt[w]===0&&(r.enableVertexAttribArray(w),rt[w]=1),ht[w]!==V&&(r.vertexAttribDivisor(w,V),ht[w]=V)}function P(){const w=c.newAttributes,V=c.enabledAttributes;for(let Q=0,rt=V.length;Q<rt;Q++)V[Q]!==w[Q]&&(r.disableVertexAttribArray(Q),V[Q]=0)}function U(w,V,Q,rt,ht,at,z){z===!0?r.vertexAttribIPointer(w,V,Q,ht,at):r.vertexAttribPointer(w,V,Q,rt,ht,at)}function R(w,V,Q,rt){b();const ht=rt.attributes,at=Q.getAttributes(),z=V.defaultAttributeValues;for(const q in at){const Y=at[q];if(Y.location>=0){let _t=ht[q];if(_t===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const At=_t.normalized,N=_t.itemSize,et=t.get(_t);if(et===void 0)continue;const Mt=et.buffer,Ut=et.type,Ht=et.bytesPerElement,nt=Ut===r.INT||Ut===r.UNSIGNED_INT||_t.gpuType===sp;if(_t.isInterleavedBufferAttribute){const ut=_t.data,It=ut.stride,bt=_t.offset;if(ut.isInstancedInterleavedBuffer){for(let Lt=0;Lt<Y.locationSize;Lt++)v(Y.location+Lt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Lt=0;Lt<Y.locationSize;Lt++)M(Y.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Lt=0;Lt<Y.locationSize;Lt++)U(Y.location+Lt,N/Y.locationSize,Ut,At,It*Ht,(bt+N/Y.locationSize*Lt)*Ht,nt)}else{if(_t.isInstancedBufferAttribute){for(let ut=0;ut<Y.locationSize;ut++)v(Y.location+ut,_t.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ut=0;ut<Y.locationSize;ut++)M(Y.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let ut=0;ut<Y.locationSize;ut++)U(Y.location+ut,N/Y.locationSize,Ut,At,N*Ht,N/Y.locationSize*ut*Ht,nt)}}else if(z!==void 0){const At=z[q];if(At!==void 0)switch(At.length){case 2:r.vertexAttrib2fv(Y.location,At);break;case 3:r.vertexAttrib3fv(Y.location,At);break;case 4:r.vertexAttrib4fv(Y.location,At);break;default:r.vertexAttrib1fv(Y.location,At)}}}}P()}function F(){k();for(const w in a){const V=a[w];for(const Q in V){const rt=V[Q];for(const ht in rt)g(rt[ht].object),delete rt[ht];delete V[Q]}delete a[w]}}function B(w){if(a[w.id]===void 0)return;const V=a[w.id];for(const Q in V){const rt=V[Q];for(const ht in rt)g(rt[ht].object),delete rt[ht];delete V[Q]}delete a[w.id]}function O(w){for(const V in a){const Q=a[V];if(Q[w.id]===void 0)continue;const rt=Q[w.id];for(const ht in rt)g(rt[ht].object),delete rt[ht];delete Q[w.id]}}function k(){D(),u=!0,c!==o&&(c=o,p(c.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:M,disableUnusedAttributes:P}}function L1(r,t,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];n.update(S,a,1)}function m(p,g,_,y){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,y,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*y[b];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function N1(r,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==bi&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const k=O===pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ii&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ha&&!k)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:F,maxSamples:B}}function O1(r){const t=this;let n=null,a=0,o=!1,c=!1;const u=new qa,h=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||a!==0||o;return o=y,a=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){n=g(_,y,0)},this.setState=function(_,y,S){const E=_.clippingPlanes,b=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!o||E===null||E.length===0||c&&!M)c?g(null):p();else{const P=c?0:a,U=P*4;let R=v.clippingState||null;m.value=R,R=g(E,y,U,S);for(let F=0;F!==U;++F)R[F]=n[F];v.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,y,S,E){const b=_!==null?_.length:0;let M=null;if(b!==0){if(M=m.value,E!==!0||M===null){const v=S+b*4,P=y.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,R=S;U!==b;++U,R+=4)u.copy(_[U]).applyMatrix4(P,h),u.normal.toArray(M,R),M[R+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function P1(r){let t=new WeakMap;function n(u,h){return h===_d?u.mapping=Hr:h===vd&&(u.mapping=Vr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===_d||h===vd)if(t.has(u)){const m=t.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new XM(m.height);return p.fromEquirectangularTexture(r,u),t.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Or=4,J0=[.125,.215,.35,.446,.526,.582],Rs=20,ed=new ry,$0=new re;let nd=null,id=0,ad=0,sd=!1;const bs=(1+Math.sqrt(5))/2,Dr=1/bs,tv=[new G(-bs,Dr,0),new G(bs,Dr,0),new G(-Dr,0,bs),new G(Dr,0,bs),new G(0,bs,-Dr),new G(0,bs,Dr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],z1=new G;class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=z1}=c;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=sd,t.scissorTest=!1,Wc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Hr||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:pa,format:bi,colorSpace:Gr,depthBuffer:!1},o=nv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B1(c)),this._blurMaterial=I1(c,t,n)}return o}_compileMaterial(t){const n=new xn(this._lodPlanes[0],t);this._renderer.compile(n,ed)}_sceneToCubeUV(t,n,a,o,c){const m=new Wn(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor($0),_.toneMapping=Za,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null));const b=new nl({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new xn(new ol,b);let v=!1;const P=t.background;P?P.isColor&&(b.color.copy(P),t.background=null,v=!0):(b.color.copy($0),v=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):R===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const F=this._cubeSize;Wc(o,R*F,U>2?F:0,F,F),_.setRenderTarget(o),v&&_.render(M,m),_.render(t,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=S,_.autoClear=y,t.background=P}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Hr||t.mapping===Vr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new xn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Wc(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,ed)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=tv[(o-c-1)%tv.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new xn(this._lodPlanes[o],p),y=p.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Rs-1),b=c/E,M=isFinite(c)?1+Math.floor(g*b):Rs;M>Rs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Rs}`);const v=[];let P=0;for(let O=0;O<Rs;++O){const k=O/b,D=Math.exp(-k*k/2);v.push(D),O===0?P+=D:O<M&&(P+=2*D)}for(let O=0;O<v.length;O++)v[O]=v[O]/P;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=u==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-a;const R=this._sizeLods[o],F=3*R*(o>U-Or?o-U+Or:0),B=4*(this._cubeSize-R);Wc(n,F,B,3*R,2*R),m.setRenderTarget(n),m.render(_,ed)}}function B1(r){const t=[],n=[],a=[];let o=r;const c=r-Or+1+J0.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let m=1/h;u>r-Or?m=J0[u-r+Or-1]:u===0&&(m=0),a.push(m);const p=1/(h-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,b=3,M=2,v=1,P=new Float32Array(b*E*S),U=new Float32Array(M*E*S),R=new Float32Array(v*E*S);for(let B=0;B<S;B++){const O=B%3*2/3-1,k=B>2?0:-1,D=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];P.set(D,b*E*B),U.set(y,M*E*B);const w=[B,B,B,B,B,B];R.set(w,v*E*B)}const F=new Zn;F.setAttribute("position",new si(P,b)),F.setAttribute("uv",new si(U,M)),F.setAttribute("faceIndex",new si(R,v)),t.push(F),o>Or&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function nv(r,t,n){const a=new Ri(r,t,n);return a.texture.mapping=ou,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Wc(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function I1(r,t,n){const a=new Float32Array(Rs),o=new G(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function iv(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function av(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Ep(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function F1(r){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===_d||m===vd,g=m===Hr||m===Vr;if(p||g){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return n===null&&(n=new ev(r)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new ev(r)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function H1(r){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&el("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function V1(r,t,n,a){const o={},c=new WeakMap;function u(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",u),delete o[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function h(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,n.memory.geometries++),y}function m(_){const y=_.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function p(_){const y=[],S=_.index,E=_.attributes.position;let b=0;if(S!==null){const P=S.array;b=S.version;for(let U=0,R=P.length;U<R;U+=3){const F=P[U+0],B=P[U+1],O=P[U+2];y.push(F,B,B,O,O,F)}}else if(E!==void 0){const P=E.array;b=E.version;for(let U=0,R=P.length/3-1;U<R;U+=3){const F=U+0,B=U+1,O=U+2;y.push(F,B,B,O,O,F)}}else return;const M=new(Iv(y)?kv:Gv)(y,1);M.version=b;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const y=c.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function G1(r,t,n){let a;function o(y){a=y}let c,u;function h(y){c=y.type,u=y.bytesPerElement}function m(y,S){r.drawElements(a,S,c,y*u),n.update(S,a,1)}function p(y,S,E){E!==0&&(r.drawElementsInstanced(a,S,c,y*u,E),n.update(S,a,E))}function g(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,y,0,E);let M=0;for(let v=0;v<E;v++)M+=S[v];n.update(M,a,1)}function _(y,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/u,S[v],b[v]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,y,0,b,0,E);let v=0;for(let P=0;P<E;P++)v+=S[P]*b[P];n.update(v,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function k1(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function X1(r,t,n){const a=new WeakMap,o=new Xe;function c(u,h,m){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let y=a.get(h);if(y===void 0||y.count!==_){let w=function(){k.dispose(),a.delete(h),h.removeEventListener("dispose",w)};var S=w;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),M===!0&&(R=3);let F=h.attributes.position.count*R,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const O=new Float32Array(F*B*4*_),k=new Fv(O,F,B,_);k.type=ha,k.needsUpdate=!0;const D=R*4;for(let V=0;V<_;V++){const Q=v[V],rt=P[V],ht=U[V],at=F*B*4*V;for(let z=0;z<Q.count;z++){const q=z*D;E===!0&&(o.fromBufferAttribute(Q,z),O[at+q+0]=o.x,O[at+q+1]=o.y,O[at+q+2]=o.z,O[at+q+3]=0),b===!0&&(o.fromBufferAttribute(rt,z),O[at+q+4]=o.x,O[at+q+5]=o.y,O[at+q+6]=o.z,O[at+q+7]=0),M===!0&&(o.fromBufferAttribute(ht,z),O[at+q+8]=o.x,O[at+q+9]=o.y,O[at+q+10]=o.z,O[at+q+11]=ht.itemSize===4?o.w:1)}}y={count:_,texture:k,size:new Ct(F,B)},a.set(h,y),h.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const b=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function W1(r,t,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(o.get(_)!==p&&(t.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return _}function u(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const cy=new zn,sv=new Yv(1,1),uy=new Fv,fy=new CM,hy=new qv,rv=[],ov=[],lv=new Float32Array(16),cv=new Float32Array(9),uv=new Float32Array(4);function Yr(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let c=rv[o];if(c===void 0&&(c=new Float32Array(o),rv[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,r[u].toArray(c,h)}return c}function mn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function gn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function fu(r,t){let n=ov[t];n===void 0&&(n=new Int32Array(t),ov[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function q1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function Y1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2fv(this.addr,t),gn(n,t)}}function Z1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;r.uniform3fv(this.addr,t),gn(n,t)}}function j1(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4fv(this.addr,t),gn(n,t)}}function K1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;uv.set(a),r.uniformMatrix2fv(this.addr,!1,uv),gn(n,a)}}function Q1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;cv.set(a),r.uniformMatrix3fv(this.addr,!1,cv),gn(n,a)}}function J1(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;lv.set(a),r.uniformMatrix4fv(this.addr,!1,lv),gn(n,a)}}function $1(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function tA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2iv(this.addr,t),gn(n,t)}}function eA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;r.uniform3iv(this.addr,t),gn(n,t)}}function nA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4iv(this.addr,t),gn(n,t)}}function iA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function aA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;r.uniform2uiv(this.addr,t),gn(n,t)}}function sA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;r.uniform3uiv(this.addr,t),gn(n,t)}}function rA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;r.uniform4uiv(this.addr,t),gn(n,t)}}function oA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(sv.compareFunction=Bv,c=sv):c=cy,n.setTexture2D(t||c,o)}function lA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||fy,o)}function cA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||hy,o)}function uA(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||uy,o)}function fA(r){switch(r){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return j1;case 35674:return K1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return $1;case 35667:case 35671:return tA;case 35668:case 35672:return eA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return aA;case 36295:return sA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}function hA(r,t){r.uniform1fv(this.addr,t)}function dA(r,t){const n=Yr(t,this.size,2);r.uniform2fv(this.addr,n)}function pA(r,t){const n=Yr(t,this.size,3);r.uniform3fv(this.addr,n)}function mA(r,t){const n=Yr(t,this.size,4);r.uniform4fv(this.addr,n)}function gA(r,t){const n=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function _A(r,t){const n=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function vA(r,t){const n=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function yA(r,t){r.uniform1iv(this.addr,t)}function xA(r,t){r.uniform2iv(this.addr,t)}function SA(r,t){r.uniform3iv(this.addr,t)}function MA(r,t){r.uniform4iv(this.addr,t)}function EA(r,t){r.uniform1uiv(this.addr,t)}function TA(r,t){r.uniform2uiv(this.addr,t)}function bA(r,t){r.uniform3uiv(this.addr,t)}function AA(r,t){r.uniform4uiv(this.addr,t)}function RA(r,t,n){const a=this.cache,o=t.length,c=fu(n,o);mn(a,c)||(r.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||cy,c[u])}function CA(r,t,n){const a=this.cache,o=t.length,c=fu(n,o);mn(a,c)||(r.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||fy,c[u])}function wA(r,t,n){const a=this.cache,o=t.length,c=fu(n,o);mn(a,c)||(r.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||hy,c[u])}function DA(r,t,n){const a=this.cache,o=t.length,c=fu(n,o);mn(a,c)||(r.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||uy,c[u])}function UA(r){switch(r){case 5126:return hA;case 35664:return dA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return _A;case 35676:return vA;case 5124:case 35670:return yA;case 35667:case 35671:return xA;case 35668:case 35672:return SA;case 35669:case 35673:return MA;case 5125:return EA;case 36294:return TA;case 36295:return bA;case 36296:return AA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return CA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return DA}}class LA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=fA(n.type)}}class NA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UA(n.type)}}class OA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function fv(r,t){r.seq.push(t),r.map[t.id]=t}function PA(r,t,n){const a=r.name,o=a.length;for(rd.lastIndex=0;;){const c=rd.exec(a),u=rd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){fv(n,p===void 0?new LA(h,r,t):new NA(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new OA(h),fv(n,_)),n=_}}}class tu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);PA(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function hv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const zA=37297;let BA=0;function IA(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const dv=new ge;function FA(r){Le._getMatrix(dv,Le.workingColorSpace,r);const t=`mat3( ${dv.elements.map(n=>n.toFixed(4))} )`;switch(Le.getTransfer(r)){case nu:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function pv(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+IA(r.getShaderSource(t),h)}else return c}function HA(r,t){const n=FA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function VA(r,t){let n;switch(t){case eM:n="Linear";break;case nM:n="Reinhard";break;case iM:n="Cineon";break;case aM:n="ACESFilmic";break;case rM:n="AgX";break;case oM:n="Neutral";break;case sM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qc=new G;function GA(){Le.getLuminanceCoefficients(qc);const r=qc.x.toFixed(4),t=qc.y.toFixed(4),n=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function XA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function WA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(t,o),u=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:h}}return n}function Zo(r){return r!==""}function mv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(qA,ZA)}const YA=new Map;function ZA(r,t){let n=_e[t];if(n===void 0){const a=YA.get(t);if(a!==void 0)n=_e[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return ep(n)}const jA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(r){return r.replace(jA,KA)}function KA(r,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function vv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function QA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Av?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rv?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function JA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Vr:t="ENVMAP_TYPE_CUBE";break;case ou:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $A(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vr:t="ENVMAP_MODE_REFRACTION";break}return t}function tR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ap:t="ENVMAP_BLENDING_MULTIPLY";break;case $S:t="ENVMAP_BLENDING_MIX";break;case tM:t="ENVMAP_BLENDING_ADD";break}return t}function eR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function nR(r,t,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=QA(n),p=JA(n),g=$A(n),_=tR(n),y=eR(n),S=kA(n),E=XA(c),b=o.createProgram();let M,v,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Zo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Zo).join(`
`),v.length>0&&(v+=`
`)):(M=[vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),v=[vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Za?"#define TONE_MAPPING":"",n.toneMapping!==Za?_e.tonemapping_pars_fragment:"",n.toneMapping!==Za?VA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,HA("linearToOutputTexel",n.outputColorSpace),GA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zo).join(`
`)),u=ep(u),u=mv(u,n),u=gv(u,n),h=ep(h),h=mv(h,n),h=gv(h,n),u=_v(u),h=_v(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",n.glslVersion===x0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===x0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=P+M+u,R=P+v+h,F=hv(o,o.VERTEX_SHADER,U),B=hv(o,o.FRAGMENT_SHADER,R);o.attachShader(b,F),o.attachShader(b,B),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(V){if(r.debug.checkShaderErrors){const Q=o.getProgramInfoLog(b)||"",rt=o.getShaderInfoLog(F)||"",ht=o.getShaderInfoLog(B)||"",at=Q.trim(),z=rt.trim(),q=ht.trim();let Y=!0,_t=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,F,B);else{const At=pv(o,F,"vertex"),N=pv(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+at+`
`+At+`
`+N)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(z===""||q==="")&&(_t=!1);_t&&(V.diagnostics={runnable:Y,programLog:at,vertexShader:{log:z,prefix:M},fragmentShader:{log:q,prefix:v}})}o.deleteShader(F),o.deleteShader(B),k=new tu(o,b),D=WA(o,b)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(b,zA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=B,this}let iR=0;class aR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new sR(t),n.set(t,a)),a}}class sR{constructor(t){this.id=iR++,this.code=t,this.usedTimes=0}}function rR(r,t,n,a,o,c,u){const h=new Hv,m=new aR,p=new Set,g=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,w,V,Q,rt){const ht=Q.fog,at=rt.geometry,z=D.isMeshStandardMaterial?Q.environment:null,q=(D.isMeshStandardMaterial?n:t).get(D.envMap||z),Y=q&&q.mapping===ou?q.image.height:null,_t=E[D.type];D.precision!==null&&(S=o.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const At=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,N=At!==void 0?At.length:0;let et=0;at.morphAttributes.position!==void 0&&(et=1),at.morphAttributes.normal!==void 0&&(et=2),at.morphAttributes.color!==void 0&&(et=3);let Mt,Ut,Ht,nt;if(_t){const Re=Pi[_t];Mt=Re.vertexShader,Ut=Re.fragmentShader}else Mt=D.vertexShader,Ut=D.fragmentShader,m.update(D),Ht=m.getVertexShaderID(D),nt=m.getFragmentShaderID(D);const ut=r.getRenderTarget(),It=r.state.buffers.depth.getReversed(),bt=rt.isInstancedMesh===!0,Lt=rt.isBatchedMesh===!0,oe=!!D.map,we=!!D.matcap,I=!!q,St=!!D.aoMap,mt=!!D.lightMap,pt=!!D.bumpMap,vt=!!D.normalMap,Ft=!!D.displacementMap,Dt=!!D.emissiveMap,zt=!!D.metalnessMap,ce=!!D.roughnessMap,ue=D.anisotropy>0,L=D.clearcoat>0,T=D.dispersion>0,J=D.iridescence>0,ct=D.sheen>0,Tt=D.transmission>0,ft=ue&&!!D.anisotropyMap,$t=L&&!!D.clearcoatMap,Ot=L&&!!D.clearcoatNormalMap,Qt=L&&!!D.clearcoatRoughnessMap,Jt=J&&!!D.iridescenceMap,wt=J&&!!D.iridescenceThicknessMap,Pt=ct&&!!D.sheenColorMap,ee=ct&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,Vt=!!D.specularColorMap,de=!!D.specularIntensityMap,W=Tt&&!!D.transmissionMap,Nt=Tt&&!!D.thicknessMap,Bt=!!D.gradientMap,qt=!!D.alphaMap,Rt=D.alphaTest>0,xt=!!D.alphaHash,Yt=!!D.extensions;let fe=Za;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(fe=r.toneMapping);const ze={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:Ut,defines:D.defines,customVertexShaderID:Ht,customFragmentShaderID:nt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Lt,batchingColor:Lt&&rt._colorsTexture!==null,instancing:bt,instancingColor:bt&&rt.instanceColor!==null,instancingMorph:bt&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Gr,alphaToCoverage:!!D.alphaToCoverage,map:oe,matcap:we,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:Y,aoMap:St,lightMap:mt,bumpMap:pt,normalMap:vt,displacementMap:y&&Ft,emissiveMap:Dt,normalMapObjectSpace:vt&&D.normalMapType===fM,normalMapTangentSpace:vt&&D.normalMapType===fp,metalnessMap:zt,roughnessMap:ce,anisotropy:ue,anisotropyMap:ft,clearcoat:L,clearcoatMap:$t,clearcoatNormalMap:Ot,clearcoatRoughnessMap:Qt,dispersion:T,iridescence:J,iridescenceMap:Jt,iridescenceThicknessMap:wt,sheen:ct,sheenColorMap:Pt,sheenRoughnessMap:ee,specularMap:Wt,specularColorMap:Vt,specularIntensityMap:de,transmission:Tt,transmissionMap:W,thicknessMap:Nt,gradientMap:Bt,opaque:D.transparent===!1&&D.blending===zr&&D.alphaToCoverage===!1,alphaMap:qt,alphaTest:Rt,alphaHash:xt,combine:D.combine,mapUv:oe&&b(D.map.channel),aoMapUv:St&&b(D.aoMap.channel),lightMapUv:mt&&b(D.lightMap.channel),bumpMapUv:pt&&b(D.bumpMap.channel),normalMapUv:vt&&b(D.normalMap.channel),displacementMapUv:Ft&&b(D.displacementMap.channel),emissiveMapUv:Dt&&b(D.emissiveMap.channel),metalnessMapUv:zt&&b(D.metalnessMap.channel),roughnessMapUv:ce&&b(D.roughnessMap.channel),anisotropyMapUv:ft&&b(D.anisotropyMap.channel),clearcoatMapUv:$t&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:ee&&b(D.sheenRoughnessMap.channel),specularMapUv:Wt&&b(D.specularMap.channel),specularColorMapUv:Vt&&b(D.specularColorMap.channel),specularIntensityMapUv:de&&b(D.specularIntensityMap.channel),transmissionMapUv:W&&b(D.transmissionMap.channel),thicknessMapUv:Nt&&b(D.thicknessMap.channel),alphaMapUv:qt&&b(D.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(vt||ue),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!at.attributes.uv&&(oe||qt),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:It,skinning:rt.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:oe&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Dt&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===fa,flipSided:D.side===Yn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Yt&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&D.extensions.multiDraw===!0||Lt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(w,D),U(w,D),w.push(r.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function P(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),D.push(h.mask)}function R(D){const w=E[D.type];let V;if(w){const Q=Pi[w];V=ru.clone(Q.uniforms)}else V=D.uniforms;return V}function F(D,w){let V;for(let Q=0,rt=g.length;Q<rt;Q++){const ht=g[Q];if(ht.cacheKey===w){V=ht,++V.usedTimes;break}}return V===void 0&&(V=new nR(r,w,D,c),g.push(V)),V}function B(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function O(D){m.remove(D)}function k(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:R,acquireProgram:F,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:k}}function oR(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let h=r.get(u);return h===void 0&&(h={},r.set(u,h)),h}function a(u){r.delete(u)}function o(u,h,m){r.get(u)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function lR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function yv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xv(){const r=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(_,y,S,E,b,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:E,renderOrder:_.renderOrder,z:b,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=b,v.group=M),t++,v}function h(_,y,S,E,b,M){const v=u(_,y,S,E,b,M);S.transmission>0?a.push(v):S.transparent===!0?o.push(v):n.push(v)}function m(_,y,S,E,b,M){const v=u(_,y,S,E,b,M);S.transmission>0?a.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function p(_,y){n.length>1&&n.sort(_||lR),a.length>1&&a.sort(y||yv),o.length>1&&o.sort(y||yv)}function g(){for(let _=t,y=r.length;_<y;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:g,sort:p}}function cR(){let r=new WeakMap;function t(a,o){const c=r.get(a);let u;return c===void 0?(u=new xv,r.set(a,[u])):o>=c.length?(u=new xv,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function uR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new G,color:new re};break;case"SpotLight":n={position:new G,direction:new G,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=n,n}}}function fR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let hR=0;function dR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function pR(r){const t=new uR,n=fR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new G);const o=new G,c=new Qe,u=new Qe;function h(p){let g=0,_=0,y=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let S=0,E=0,b=0,M=0,v=0,P=0,U=0,R=0,F=0,B=0,O=0;p.sort(dR);for(let D=0,w=p.length;D<w;D++){const V=p[D],Q=V.color,rt=V.intensity,ht=V.distance,at=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=Q.r*rt,_+=Q.g*rt,y+=Q.b*rt;else if(V.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(V.sh.coefficients[z],rt);O++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,a.directionalShadow[S]=Y,a.directionalShadowMap[S]=at,a.directionalShadowMatrix[S]=V.shadow.matrix,P++}a.directional[S]=z,S++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(Q).multiplyScalar(rt),z.distance=ht,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,a.spot[b]=z;const q=V.shadow;if(V.map&&(a.spotLightMap[F]=V.map,F++,q.updateMatrices(V),V.castShadow&&B++),a.spotLightMatrix[b]=q.matrix,V.castShadow){const Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,a.spotShadow[b]=Y,a.spotShadowMap[b]=at,R++}b++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(Q).multiplyScalar(rt),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),a.rectArea[M]=z,M++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const q=V.shadow,Y=n.get(V);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,a.pointShadow[E]=Y,a.pointShadowMap[E]=at,a.pointShadowMatrix[E]=V.shadow.matrix,U++}a.point[E]=z,E++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(rt),z.groundColor.copy(V.groundColor).multiplyScalar(rt),a.hemi[v]=z,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=kt.LTC_FLOAT_1,a.rectAreaLTC2=kt.LTC_FLOAT_2):(a.rectAreaLTC1=kt.LTC_HALF_1,a.rectAreaLTC2=kt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=y;const k=a.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==M||k.hemiLength!==v||k.numDirectionalShadows!==P||k.numPointShadows!==U||k.numSpotShadows!==R||k.numSpotMaps!==F||k.numLightProbes!==O)&&(a.directional.length=S,a.spot.length=b,a.rectArea.length=M,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=R+F-B,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=O,k.directionalLength=S,k.pointLength=E,k.spotLength=b,k.rectAreaLength=M,k.hemiLength=v,k.numDirectionalShadows=P,k.numPointShadows=U,k.numSpotShadows=R,k.numSpotMaps=F,k.numLightProbes=O,a.version=hR++)}function m(p,g){let _=0,y=0,S=0,E=0,b=0;const M=g.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const U=p[v];if(U.isDirectionalLight){const R=a.directional[_];R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),_++}else if(U.isSpotLight){const R=a.spot[S];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const R=a.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),u.identity(),c.copy(U.matrixWorld),c.premultiply(M),u.extractRotation(c),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(U.isPointLight){const R=a.point[y];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const R=a.hemi[b];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(M),b++}}}return{setup:h,setupView:m,state:a}}function Sv(r){const t=new pR(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function mR(r){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new Sv(r),t.set(o,[h])):c>=u.length?(h=new Sv(r),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const gR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_R=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vR(r,t,n){let a=new mp;const o=new Ct,c=new Ct,u=new Xe,h=new LE({depthPacking:uM}),m=new NE,p={},g=n.maxTextureSize,_={[ja]:Yn,[Yn]:ja,[fa]:fa},y=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:gR,fragmentShader:_R}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Zn;E.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new xn(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Av;let v=this.type;this.render=function(B,O,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(da),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const rt=v!==ua&&this.type===ua,ht=v===ua&&this.type!==ua;for(let at=0,z=B.length;at<z;at++){const q=B[at],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const _t=Y.getFrameExtents();if(o.multiply(_t),c.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/_t.x),o.x=c.x*_t.x,Y.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/_t.y),o.y=c.y*_t.y,Y.mapSize.y=c.y)),Y.map===null||rt===!0||ht===!0){const N=this.type!==ua?{minFilter:Ai,magFilter:Ai}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ri(o.x,o.y,N),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const At=Y.getViewportCount();for(let N=0;N<At;N++){const et=Y.getViewport(N);u.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),Q.viewport(u),Y.updateMatrices(q,N),a=Y.getFrustum(),R(O,k,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===ua&&P(Y,k),Y.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(D,w,V)};function P(B,O){const k=t.update(b);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ri(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,k,y,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,k,S,b,null)}function U(B,O,k,D){let w=null;const V=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)w=V;else if(w=k.isPointLight===!0?m:h,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=w.uuid,rt=O.uuid;let ht=p[Q];ht===void 0&&(ht={},p[Q]=ht);let at=ht[rt];at===void 0&&(at=w.clone(),ht[rt]=at,O.addEventListener("dispose",F)),w=at}if(w.visible=O.visible,w.wireframe=O.wireframe,D===ua?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:_[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=r.properties.get(w);Q.light=k}return w}function R(B,O,k,D,w){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===ua)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const rt=t.update(B),ht=B.material;if(Array.isArray(ht)){const at=rt.groups;for(let z=0,q=at.length;z<q;z++){const Y=at[z],_t=ht[Y.materialIndex];if(_t&&_t.visible){const At=U(B,_t,D,w);B.onBeforeShadow(r,B,O,k,rt,At,Y),r.renderBufferDirect(k,null,rt,At,B,Y),B.onAfterShadow(r,B,O,k,rt,At,Y)}}}else if(ht.visible){const at=U(B,ht,D,w);B.onBeforeShadow(r,B,O,k,rt,at,null),r.renderBufferDirect(k,null,rt,at,B,null),B.onAfterShadow(r,B,O,k,rt,at,null)}}const Q=B.children;for(let rt=0,ht=Q.length;rt<ht;rt++)R(Q[rt],O,k,D,w)}function F(B){B.target.removeEventListener("dispose",F);for(const k in p){const D=p[k],w=B.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const yR={[ud]:fd,[hd]:md,[dd]:gd,[Fr]:pd,[fd]:ud,[md]:hd,[gd]:dd,[pd]:Fr};function xR(r,t){function n(){let W=!1;const Nt=new Xe;let Bt=null;const qt=new Xe(0,0,0,0);return{setMask:function(Rt){Bt!==Rt&&!W&&(r.colorMask(Rt,Rt,Rt,Rt),Bt=Rt)},setLocked:function(Rt){W=Rt},setClear:function(Rt,xt,Yt,fe,ze){ze===!0&&(Rt*=fe,xt*=fe,Yt*=fe),Nt.set(Rt,xt,Yt,fe),qt.equals(Nt)===!1&&(r.clearColor(Rt,xt,Yt,fe),qt.copy(Nt))},reset:function(){W=!1,Bt=null,qt.set(-1,0,0,0)}}}function a(){let W=!1,Nt=!1,Bt=null,qt=null,Rt=null;return{setReversed:function(xt){if(Nt!==xt){const Yt=t.get("EXT_clip_control");xt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Nt=xt;const fe=Rt;Rt=null,this.setClear(fe)}},getReversed:function(){return Nt},setTest:function(xt){xt?ut(r.DEPTH_TEST):It(r.DEPTH_TEST)},setMask:function(xt){Bt!==xt&&!W&&(r.depthMask(xt),Bt=xt)},setFunc:function(xt){if(Nt&&(xt=yR[xt]),qt!==xt){switch(xt){case ud:r.depthFunc(r.NEVER);break;case fd:r.depthFunc(r.ALWAYS);break;case hd:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case dd:r.depthFunc(r.EQUAL);break;case pd:r.depthFunc(r.GEQUAL);break;case md:r.depthFunc(r.GREATER);break;case gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}qt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Rt!==xt&&(Nt&&(xt=1-xt),r.clearDepth(xt),Rt=xt)},reset:function(){W=!1,Bt=null,qt=null,Rt=null,Nt=!1}}}function o(){let W=!1,Nt=null,Bt=null,qt=null,Rt=null,xt=null,Yt=null,fe=null,ze=null;return{setTest:function(Re){W||(Re?ut(r.STENCIL_TEST):It(r.STENCIL_TEST))},setMask:function(Re){Nt!==Re&&!W&&(r.stencilMask(Re),Nt=Re)},setFunc:function(Re,Ln,ri){(Bt!==Re||qt!==Ln||Rt!==ri)&&(r.stencilFunc(Re,Ln,ri),Bt=Re,qt=Ln,Rt=ri)},setOp:function(Re,Ln,ri){(xt!==Re||Yt!==Ln||fe!==ri)&&(r.stencilOp(Re,Ln,ri),xt=Re,Yt=Ln,fe=ri)},setLocked:function(Re){W=Re},setClear:function(Re){ze!==Re&&(r.clearStencil(Re),ze=Re)},reset:function(){W=!1,Nt=null,Bt=null,qt=null,Rt=null,xt=null,Yt=null,fe=null,ze=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,S=[],E=null,b=!1,M=null,v=null,P=null,U=null,R=null,F=null,B=null,O=new re(0,0,0),k=0,D=!1,w=null,V=null,Q=null,rt=null,ht=null;const at=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=q>=2);let _t=null,At={};const N=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),Mt=new Xe().fromArray(N),Ut=new Xe().fromArray(et);function Ht(W,Nt,Bt,qt){const Rt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(W,xt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<Bt;Yt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,qt,0,r.RGBA,r.UNSIGNED_BYTE,Rt):r.texImage2D(Nt+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Rt);return xt}const nt={};nt[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ut(r.DEPTH_TEST),u.setFunc(Fr),pt(!1),vt(m0),ut(r.CULL_FACE),St(da);function ut(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function It(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function bt(W,Nt){return _[W]!==Nt?(r.bindFramebuffer(W,Nt),_[W]=Nt,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Lt(W,Nt){let Bt=S,qt=!1;if(W){Bt=y.get(Nt),Bt===void 0&&(Bt=[],y.set(Nt,Bt));const Rt=W.textures;if(Bt.length!==Rt.length||Bt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Yt=Rt.length;xt<Yt;xt++)Bt[xt]=r.COLOR_ATTACHMENT0+xt;Bt.length=Rt.length,qt=!0}}else Bt[0]!==r.BACK&&(Bt[0]=r.BACK,qt=!0);qt&&r.drawBuffers(Bt)}function oe(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const we={[As]:r.FUNC_ADD,[zS]:r.FUNC_SUBTRACT,[BS]:r.FUNC_REVERSE_SUBTRACT};we[IS]=r.MIN,we[FS]=r.MAX;const I={[HS]:r.ZERO,[VS]:r.ONE,[GS]:r.SRC_COLOR,[ld]:r.SRC_ALPHA,[ZS]:r.SRC_ALPHA_SATURATE,[qS]:r.DST_COLOR,[XS]:r.DST_ALPHA,[kS]:r.ONE_MINUS_SRC_COLOR,[cd]:r.ONE_MINUS_SRC_ALPHA,[YS]:r.ONE_MINUS_DST_COLOR,[WS]:r.ONE_MINUS_DST_ALPHA,[jS]:r.CONSTANT_COLOR,[KS]:r.ONE_MINUS_CONSTANT_COLOR,[QS]:r.CONSTANT_ALPHA,[JS]:r.ONE_MINUS_CONSTANT_ALPHA};function St(W,Nt,Bt,qt,Rt,xt,Yt,fe,ze,Re){if(W===da){b===!0&&(It(r.BLEND),b=!1);return}if(b===!1&&(ut(r.BLEND),b=!0),W!==PS){if(W!==M||Re!==D){if((v!==As||R!==As)&&(r.blendEquation(r.FUNC_ADD),v=As,R=As),Re)switch(W){case zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ir:r.blendFunc(r.ONE,r.ONE);break;case g0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case g0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,U=null,F=null,B=null,O.set(0,0,0),k=0,M=W,D=Re}return}Rt=Rt||Nt,xt=xt||Bt,Yt=Yt||qt,(Nt!==v||Rt!==R)&&(r.blendEquationSeparate(we[Nt],we[Rt]),v=Nt,R=Rt),(Bt!==P||qt!==U||xt!==F||Yt!==B)&&(r.blendFuncSeparate(I[Bt],I[qt],I[xt],I[Yt]),P=Bt,U=qt,F=xt,B=Yt),(fe.equals(O)===!1||ze!==k)&&(r.blendColor(fe.r,fe.g,fe.b,ze),O.copy(fe),k=ze),M=W,D=!1}function mt(W,Nt){W.side===fa?It(r.CULL_FACE):ut(r.CULL_FACE);let Bt=W.side===Yn;Nt&&(Bt=!Bt),pt(Bt),W.blending===zr&&W.transparent===!1?St(da):St(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const qt=W.stencilWrite;h.setTest(qt),qt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Dt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):It(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function vt(W){W!==NS?(ut(r.CULL_FACE),W!==V&&(W===m0?r.cullFace(r.BACK):W===OS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):It(r.CULL_FACE),V=W}function Ft(W){W!==Q&&(z&&r.lineWidth(W),Q=W)}function Dt(W,Nt,Bt){W?(ut(r.POLYGON_OFFSET_FILL),(rt!==Nt||ht!==Bt)&&(r.polygonOffset(Nt,Bt),rt=Nt,ht=Bt)):It(r.POLYGON_OFFSET_FILL)}function zt(W){W?ut(r.SCISSOR_TEST):It(r.SCISSOR_TEST)}function ce(W){W===void 0&&(W=r.TEXTURE0+at-1),_t!==W&&(r.activeTexture(W),_t=W)}function ue(W,Nt,Bt){Bt===void 0&&(_t===null?Bt=r.TEXTURE0+at-1:Bt=_t);let qt=At[Bt];qt===void 0&&(qt={type:void 0,texture:void 0},At[Bt]=qt),(qt.type!==W||qt.texture!==Nt)&&(_t!==Bt&&(r.activeTexture(Bt),_t=Bt),r.bindTexture(W,Nt||nt[W]),qt.type=W,qt.texture=Nt)}function L(){const W=At[_t];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $t(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Jt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(W){Mt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Mt.copy(W))}function ee(W){Ut.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ut.copy(W))}function Wt(W,Nt){let Bt=p.get(Nt);Bt===void 0&&(Bt=new WeakMap,p.set(Nt,Bt));let qt=Bt.get(W);qt===void 0&&(qt=r.getUniformBlockIndex(Nt,W.name),Bt.set(W,qt))}function Vt(W,Nt){const qt=p.get(Nt).get(W);m.get(Nt)!==qt&&(r.uniformBlockBinding(Nt,qt,W.__bindingPointIndex),m.set(Nt,qt))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},_t=null,At={},_={},y=new WeakMap,S=[],E=null,b=!1,M=null,v=null,P=null,U=null,R=null,F=null,B=null,O=new re(0,0,0),k=0,D=!1,w=null,V=null,Q=null,rt=null,ht=null,Mt.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ut,disable:It,bindFramebuffer:bt,drawBuffers:Lt,useProgram:oe,setBlending:St,setMaterial:mt,setFlipSided:pt,setCullFace:vt,setLineWidth:Ft,setPolygonOffset:Dt,setScissorTest:zt,activeTexture:ce,bindTexture:ue,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:Jt,texImage3D:wt,updateUBOMapping:Wt,uniformBlockBinding:Vt,texStorage2D:Ot,texStorage3D:Qt,texSubImage2D:ct,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:$t,scissor:Pt,viewport:ee,reset:de}}function SR(r,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,g=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):su("canvas")}function b(L,T,J){let ct=1;const Tt=ue(L);if((Tt.width>J||Tt.height>J)&&(ct=J/Math.max(Tt.width,Tt.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(ct*Tt.width),$t=Math.floor(ct*Tt.height);_===void 0&&(_=E(ft,$t));const Ot=T?E(ft,$t):_;return Ot.width=ft,Ot.height=$t,Ot.getContext("2d").drawImage(L,0,0,ft,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ft+"x"+$t+")."),Ot}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(L,T,J,ct,Tt=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=T;if(T===r.RED&&(J===r.FLOAT&&(ft=r.R32F),J===r.HALF_FLOAT&&(ft=r.R16F),J===r.UNSIGNED_BYTE&&(ft=r.R8)),T===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.R8UI),J===r.UNSIGNED_SHORT&&(ft=r.R16UI),J===r.UNSIGNED_INT&&(ft=r.R32UI),J===r.BYTE&&(ft=r.R8I),J===r.SHORT&&(ft=r.R16I),J===r.INT&&(ft=r.R32I)),T===r.RG&&(J===r.FLOAT&&(ft=r.RG32F),J===r.HALF_FLOAT&&(ft=r.RG16F),J===r.UNSIGNED_BYTE&&(ft=r.RG8)),T===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RG8UI),J===r.UNSIGNED_SHORT&&(ft=r.RG16UI),J===r.UNSIGNED_INT&&(ft=r.RG32UI),J===r.BYTE&&(ft=r.RG8I),J===r.SHORT&&(ft=r.RG16I),J===r.INT&&(ft=r.RG32I)),T===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),J===r.UNSIGNED_INT&&(ft=r.RGB32UI),J===r.BYTE&&(ft=r.RGB8I),J===r.SHORT&&(ft=r.RGB16I),J===r.INT&&(ft=r.RGB32I)),T===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),J===r.UNSIGNED_INT&&(ft=r.RGBA32UI),J===r.BYTE&&(ft=r.RGBA8I),J===r.SHORT&&(ft=r.RGBA16I),J===r.INT&&(ft=r.RGBA32I)),T===r.RGB&&(J===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),T===r.RGBA){const $t=Tt?nu:Le.getTransfer(ct);J===r.FLOAT&&(ft=r.RGBA32F),J===r.HALF_FLOAT&&(ft=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ft=$t===Ge?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function R(L,T){let J;return L?T===null||T===Us||T===Jo?J=r.DEPTH24_STENCIL8:T===ha?J=r.DEPTH32F_STENCIL8:T===Qo&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Us||T===Jo?J=r.DEPTH_COMPONENT24:T===ha?J=r.DEPTH_COMPONENT32F:T===Qo&&(J=r.DEPTH_COMPONENT16),J}function F(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ai&&L.minFilter!==zi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function B(L){const T=L.target;T.removeEventListener("dispose",B),k(T),T.isVideoTexture&&g.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),w(T)}function k(L){const T=a.get(L);if(T.__webglInit===void 0)return;const J=L.source,ct=y.get(J);if(ct){const Tt=ct[T.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&D(L),Object.keys(ct).length===0&&y.delete(J)}a.remove(L)}function D(L){const T=a.get(L);r.deleteTexture(T.__webglTexture);const J=L.source,ct=y.get(J);delete ct[T.__cacheKey],u.memory.textures--}function w(L){const T=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(T.__webglFramebuffer[ct]))for(let Tt=0;Tt<T.__webglFramebuffer[ct].length;Tt++)r.deleteFramebuffer(T.__webglFramebuffer[ct][Tt]);else r.deleteFramebuffer(T.__webglFramebuffer[ct]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ct])}else{if(Array.isArray(T.__webglFramebuffer))for(let ct=0;ct<T.__webglFramebuffer.length;ct++)r.deleteFramebuffer(T.__webglFramebuffer[ct]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ct=0;ct<T.__webglColorRenderbuffer.length;ct++)T.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ct]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let ct=0,Tt=J.length;ct<Tt;ct++){const ft=a.get(J[ct]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),u.memory.textures--),a.remove(J[ct])}a.remove(L)}let V=0;function Q(){V=0}function rt(){const L=V;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),V+=1,L}function ht(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function at(L,T){const J=a.get(L);if(L.isVideoTexture&&zt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(J,L,T);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+T)}function z(L,T){const J=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){nt(J,L,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+T)}function q(L,T){const J=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){nt(J,L,T);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+T)}function Y(L,T){const J=a.get(L);if(L.version>0&&J.__version!==L.version){ut(J,L,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+T)}const _t={[yd]:r.REPEAT,[Cs]:r.CLAMP_TO_EDGE,[xd]:r.MIRRORED_REPEAT},At={[Ai]:r.NEAREST,[lM]:r.NEAREST_MIPMAP_NEAREST,[xc]:r.NEAREST_MIPMAP_LINEAR,[zi]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},N={[hM]:r.NEVER,[vM]:r.ALWAYS,[dM]:r.LESS,[Bv]:r.LEQUAL,[pM]:r.EQUAL,[_M]:r.GEQUAL,[mM]:r.GREATER,[gM]:r.NOTEQUAL};function et(L,T){if(T.type===ha&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===zi||T.magFilter===bh||T.magFilter===xc||T.magFilter===ws||T.minFilter===zi||T.minFilter===bh||T.minFilter===xc||T.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,_t[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,_t[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,_t[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,At[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,At[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ai||T.minFilter!==xc&&T.minFilter!==ws||T.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",B));const ct=T.source;let Tt=y.get(ct);Tt===void 0&&(Tt={},y.set(ct,Tt));const ft=ht(T);if(ft!==L.__cacheKey){Tt[ft]===void 0&&(Tt[ft]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Tt[ft].usedTimes++;const $t=Tt[L.__cacheKey];$t!==void 0&&(Tt[L.__cacheKey].usedTimes--,$t.usedTimes===0&&D(T)),L.__cacheKey=ft,L.__webglTexture=Tt[ft].texture}return J}function Ut(L,T,J){return Math.floor(Math.floor(L/J)/T)}function Ht(L,T,J,ct){const ft=L.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,J,ct,T.data);else{ft.sort((wt,Pt)=>wt.start-Pt.start);let $t=0;for(let wt=1;wt<ft.length;wt++){const Pt=ft[$t],ee=ft[wt],Wt=Pt.start+Pt.count,Vt=Ut(ee.start,T.width,4),de=Ut(Pt.start,T.width,4);ee.start<=Wt+1&&Vt===de&&Ut(ee.start+ee.count-1,T.width,4)===Vt?Pt.count=Math.max(Pt.count,ee.start+ee.count-Pt.start):(++$t,ft[$t]=ee)}ft.length=$t+1;const Ot=r.getParameter(r.UNPACK_ROW_LENGTH),Qt=r.getParameter(r.UNPACK_SKIP_PIXELS),Jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let wt=0,Pt=ft.length;wt<Pt;wt++){const ee=ft[wt],Wt=Math.floor(ee.start/4),Vt=Math.ceil(ee.count/4),de=Wt%T.width,W=Math.floor(Wt/T.width),Nt=Vt,Bt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,de,W,Nt,Bt,J,ct,T.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Jt)}}function nt(L,T,J){let ct=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ct=r.TEXTURE_3D);const Tt=Mt(L,T),ft=T.source;n.bindTexture(ct,L.__webglTexture,r.TEXTURE0+J);const $t=a.get(ft);if(ft.version!==$t.__version||Tt===!0){n.activeTexture(r.TEXTURE0+J);const Ot=Le.getPrimaries(Le.workingColorSpace),Qt=T.colorSpace===Ya?null:Le.getPrimaries(T.colorSpace),Jt=T.colorSpace===Ya||Ot===Qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let wt=b(T.image,!1,o.maxTextureSize);wt=ce(T,wt);const Pt=c.convert(T.format,T.colorSpace),ee=c.convert(T.type);let Wt=U(T.internalFormat,Pt,ee,T.colorSpace,T.isVideoTexture);et(ct,T);let Vt;const de=T.mipmaps,W=T.isVideoTexture!==!0,Nt=$t.__version===void 0||Tt===!0,Bt=ft.dataReady,qt=F(T,wt);if(T.isDepthTexture)Wt=R(T.format===tl,T.type),Nt&&(W?n.texStorage2D(r.TEXTURE_2D,1,Wt,wt.width,wt.height):n.texImage2D(r.TEXTURE_2D,0,Wt,wt.width,wt.height,0,Pt,ee,null));else if(T.isDataTexture)if(de.length>0){W&&Nt&&n.texStorage2D(r.TEXTURE_2D,qt,Wt,de[0].width,de[0].height);for(let Rt=0,xt=de.length;Rt<xt;Rt++)Vt=de[Rt],W?Bt&&n.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Vt.width,Vt.height,Pt,ee,Vt.data):n.texImage2D(r.TEXTURE_2D,Rt,Wt,Vt.width,Vt.height,0,Pt,ee,Vt.data);T.generateMipmaps=!1}else W?(Nt&&n.texStorage2D(r.TEXTURE_2D,qt,Wt,wt.width,wt.height),Bt&&Ht(T,wt,Pt,ee)):n.texImage2D(r.TEXTURE_2D,0,Wt,wt.width,wt.height,0,Pt,ee,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Nt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Wt,de[0].width,de[0].height,wt.depth);for(let Rt=0,xt=de.length;Rt<xt;Rt++)if(Vt=de[Rt],T.format!==bi)if(Pt!==null)if(W){if(Bt)if(T.layerUpdates.size>0){const Yt=Q0(Vt.width,Vt.height,T.format,T.type);for(const fe of T.layerUpdates){const ze=Vt.data.subarray(fe*Yt/Vt.data.BYTES_PER_ELEMENT,(fe+1)*Yt/Vt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,fe,Vt.width,Vt.height,1,Pt,ze)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,0,Vt.width,Vt.height,wt.depth,Pt,Vt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Rt,Wt,Vt.width,Vt.height,wt.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Bt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,0,Vt.width,Vt.height,wt.depth,Pt,ee,Vt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Rt,Wt,Vt.width,Vt.height,wt.depth,0,Pt,ee,Vt.data)}else{W&&Nt&&n.texStorage2D(r.TEXTURE_2D,qt,Wt,de[0].width,de[0].height);for(let Rt=0,xt=de.length;Rt<xt;Rt++)Vt=de[Rt],T.format!==bi?Pt!==null?W?Bt&&n.compressedTexSubImage2D(r.TEXTURE_2D,Rt,0,0,Vt.width,Vt.height,Pt,Vt.data):n.compressedTexImage2D(r.TEXTURE_2D,Rt,Wt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Bt&&n.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Vt.width,Vt.height,Pt,ee,Vt.data):n.texImage2D(r.TEXTURE_2D,Rt,Wt,Vt.width,Vt.height,0,Pt,ee,Vt.data)}else if(T.isDataArrayTexture)if(W){if(Nt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Wt,wt.width,wt.height,wt.depth),Bt)if(T.layerUpdates.size>0){const Rt=Q0(wt.width,wt.height,T.format,T.type);for(const xt of T.layerUpdates){const Yt=wt.data.subarray(xt*Rt/wt.data.BYTES_PER_ELEMENT,(xt+1)*Rt/wt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,wt.width,wt.height,1,Pt,ee,Yt)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Pt,ee,wt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,wt.width,wt.height,wt.depth,0,Pt,ee,wt.data);else if(T.isData3DTexture)W?(Nt&&n.texStorage3D(r.TEXTURE_3D,qt,Wt,wt.width,wt.height,wt.depth),Bt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Pt,ee,wt.data)):n.texImage3D(r.TEXTURE_3D,0,Wt,wt.width,wt.height,wt.depth,0,Pt,ee,wt.data);else if(T.isFramebufferTexture){if(Nt)if(W)n.texStorage2D(r.TEXTURE_2D,qt,Wt,wt.width,wt.height);else{let Rt=wt.width,xt=wt.height;for(let Yt=0;Yt<qt;Yt++)n.texImage2D(r.TEXTURE_2D,Yt,Wt,Rt,xt,0,Pt,ee,null),Rt>>=1,xt>>=1}}else if(de.length>0){if(W&&Nt){const Rt=ue(de[0]);n.texStorage2D(r.TEXTURE_2D,qt,Wt,Rt.width,Rt.height)}for(let Rt=0,xt=de.length;Rt<xt;Rt++)Vt=de[Rt],W?Bt&&n.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Pt,ee,Vt):n.texImage2D(r.TEXTURE_2D,Rt,Wt,Pt,ee,Vt);T.generateMipmaps=!1}else if(W){if(Nt){const Rt=ue(wt);n.texStorage2D(r.TEXTURE_2D,qt,Wt,Rt.width,Rt.height)}Bt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,ee,wt)}else n.texImage2D(r.TEXTURE_2D,0,Wt,Pt,ee,wt);M(T)&&v(ct),$t.__version=ft.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ut(L,T,J){if(T.image.length!==6)return;const ct=Mt(L,T),Tt=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+J);const ft=a.get(Tt);if(Tt.version!==ft.__version||ct===!0){n.activeTexture(r.TEXTURE0+J);const $t=Le.getPrimaries(Le.workingColorSpace),Ot=T.colorSpace===Ya?null:Le.getPrimaries(T.colorSpace),Qt=T.colorSpace===Ya||$t===Ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let xt=0;xt<6;xt++)!Jt&&!wt?Pt[xt]=b(T.image[xt],!0,o.maxCubemapSize):Pt[xt]=wt?T.image[xt].image:T.image[xt],Pt[xt]=ce(T,Pt[xt]);const ee=Pt[0],Wt=c.convert(T.format,T.colorSpace),Vt=c.convert(T.type),de=U(T.internalFormat,Wt,Vt,T.colorSpace),W=T.isVideoTexture!==!0,Nt=ft.__version===void 0||ct===!0,Bt=Tt.dataReady;let qt=F(T,ee);et(r.TEXTURE_CUBE_MAP,T);let Rt;if(Jt){W&&Nt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,qt,de,ee.width,ee.height);for(let xt=0;xt<6;xt++){Rt=Pt[xt].mipmaps;for(let Yt=0;Yt<Rt.length;Yt++){const fe=Rt[Yt];T.format!==bi?Wt!==null?W?Bt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Yt,0,0,fe.width,fe.height,Wt,fe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Yt,de,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Yt,0,0,fe.width,fe.height,Wt,Vt,fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Yt,de,fe.width,fe.height,0,Wt,Vt,fe.data)}}}else{if(Rt=T.mipmaps,W&&Nt){Rt.length>0&&qt++;const xt=ue(Pt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,qt,de,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(wt){W?Bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt[xt].width,Pt[xt].height,Wt,Vt,Pt[xt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Pt[xt].width,Pt[xt].height,0,Wt,Vt,Pt[xt].data);for(let Yt=0;Yt<Rt.length;Yt++){const ze=Rt[Yt].image[xt].image;W?Bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Yt+1,0,0,ze.width,ze.height,Wt,Vt,ze.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Yt+1,de,ze.width,ze.height,0,Wt,Vt,ze.data)}}else{W?Bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Wt,Vt,Pt[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Wt,Vt,Pt[xt]);for(let Yt=0;Yt<Rt.length;Yt++){const fe=Rt[Yt];W?Bt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Yt+1,0,0,Wt,Vt,fe.image[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Yt+1,de,Wt,Vt,fe.image[xt])}}}M(T)&&v(r.TEXTURE_CUBE_MAP),ft.__version=Tt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function It(L,T,J,ct,Tt,ft){const $t=c.convert(J.format,J.colorSpace),Ot=c.convert(J.type),Qt=U(J.internalFormat,$t,Ot,J.colorSpace),Jt=a.get(T),wt=a.get(J);if(wt.__renderTarget=T,!Jt.__hasExternalTextures){const Pt=Math.max(1,T.width>>ft),ee=Math.max(1,T.height>>ft);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?n.texImage3D(Tt,ft,Qt,Pt,ee,T.depth,0,$t,Ot,null):n.texImage2D(Tt,ft,Qt,Pt,ee,0,$t,Ot,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),Dt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,Tt,wt.__webglTexture,0,Ft(T)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,Tt,wt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(L,T,J){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const ct=T.depthTexture,Tt=ct&&ct.isDepthTexture?ct.type:null,ft=R(T.stencilBuffer,Tt),$t=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=Ft(T);Dt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot,ft,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,ft,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ft,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$t,r.RENDERBUFFER,L)}else{const ct=T.textures;for(let Tt=0;Tt<ct.length;Tt++){const ft=ct[Tt],$t=c.convert(ft.format,ft.colorSpace),Ot=c.convert(ft.type),Qt=U(ft.internalFormat,$t,Ot,ft.colorSpace),Jt=Ft(T);J&&Dt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Qt,T.width,T.height):Dt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt,Qt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Qt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=a.get(T.depthTexture);ct.__renderTarget=T,(!ct.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),at(T.depthTexture,0);const Tt=ct.__webglTexture,ft=Ft(T);if(T.depthTexture.format===$o)Dt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Tt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Tt,0);else if(T.depthTexture.format===tl)Dt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Tt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function oe(L){const T=a.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ct){const Tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ct.removeEventListener("dispose",Tt)};ct.addEventListener("dispose",Tt),T.__depthDisposeCallback=Tt}T.__boundDepthTexture=ct}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ct=L.texture.mipmaps;ct&&ct.length>0?Lt(T.__webglFramebuffer[0],L):Lt(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ct]),T.__webglDepthbuffer[ct]===void 0)T.__webglDepthbuffer[ct]=r.createRenderbuffer(),bt(T.__webglDepthbuffer[ct],L,!1);else{const Tt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,ft)}}else{const ct=L.texture.mipmaps;if(ct&&ct.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),bt(T.__webglDepthbuffer,L,!1);else{const Tt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function we(L,T,J){const ct=a.get(L);T!==void 0&&It(ct.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&oe(L)}function I(L){const T=L.texture,J=a.get(L),ct=a.get(T);L.addEventListener("dispose",O);const Tt=L.textures,ft=L.isWebGLCubeRenderTarget===!0,$t=Tt.length>1;if($t||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=T.version,u.memory.textures++),ft){J.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Ot]=[];for(let Qt=0;Qt<T.mipmaps.length;Qt++)J.__webglFramebuffer[Ot][Qt]=r.createFramebuffer()}else J.__webglFramebuffer[Ot]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ot=0;Ot<T.mipmaps.length;Ot++)J.__webglFramebuffer[Ot]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if($t)for(let Ot=0,Qt=Tt.length;Ot<Qt;Ot++){const Jt=a.get(Tt[Ot]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&Dt(L)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ot=0;Ot<Tt.length;Ot++){const Qt=Tt[Ot];J.__webglColorRenderbuffer[Ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Ot]);const Jt=c.convert(Qt.format,Qt.colorSpace),wt=c.convert(Qt.type),Pt=U(Qt.internalFormat,Jt,wt,Qt.colorSpace,L.isXRRenderTarget===!0),ee=Ft(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,Pt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,J.__webglColorRenderbuffer[Ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),et(r.TEXTURE_CUBE_MAP,T);for(let Ot=0;Ot<6;Ot++)if(T.mipmaps&&T.mipmaps.length>0)for(let Qt=0;Qt<T.mipmaps.length;Qt++)It(J.__webglFramebuffer[Ot][Qt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Qt);else It(J.__webglFramebuffer[Ot],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);M(T)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($t){for(let Ot=0,Qt=Tt.length;Ot<Qt;Ot++){const Jt=Tt[Ot],wt=a.get(Jt);let Pt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Pt,wt.__webglTexture),et(Pt,Jt),It(J.__webglFramebuffer,L,Jt,r.COLOR_ATTACHMENT0+Ot,Pt,0),M(Jt)&&v(Pt)}n.unbindTexture()}else{let Ot=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ot=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ot,ct.__webglTexture),et(Ot,T),T.mipmaps&&T.mipmaps.length>0)for(let Qt=0;Qt<T.mipmaps.length;Qt++)It(J.__webglFramebuffer[Qt],L,T,r.COLOR_ATTACHMENT0,Ot,Qt);else It(J.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,Ot,0);M(T)&&v(Ot),n.unbindTexture()}L.depthBuffer&&oe(L)}function St(L){const T=L.textures;for(let J=0,ct=T.length;J<ct;J++){const Tt=T[J];if(M(Tt)){const ft=P(L),$t=a.get(Tt).__webglTexture;n.bindTexture(ft,$t),v(ft),n.unbindTexture()}}}const mt=[],pt=[];function vt(L){if(L.samples>0){if(Dt(L)===!1){const T=L.textures,J=L.width,ct=L.height;let Tt=r.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$t=a.get(L),Ot=T.length>1;if(Ot)for(let Jt=0;Jt<T.length;Jt++)n.bindFramebuffer(r.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,$t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);const Qt=L.texture.mipmaps;Qt&&Qt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let Jt=0;Jt<T.length;Jt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),Ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$t.__webglColorRenderbuffer[Jt]);const wt=a.get(T[Jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,wt,0)}r.blitFramebuffer(0,0,J,ct,0,0,J,ct,Tt,r.NEAREST),m===!0&&(mt.length=0,pt.length=0,mt.push(r.COLOR_ATTACHMENT0+Jt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(mt.push(ft),pt.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ot)for(let Jt=0;Jt<T.length;Jt++){n.bindFramebuffer(r.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,$t.__webglColorRenderbuffer[Jt]);const wt=a.get(T[Jt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,$t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,wt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ft(L){return Math.min(o.maxSamples,L.samples)}function Dt(L){const T=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function zt(L){const T=u.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function ce(L,T){const J=L.colorSpace,ct=L.format,Tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Gr&&J!==Ya&&(Le.getTransfer(J)===Ge?(ct!==bi||Tt!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=Q,this.setTexture2D=at,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=we,this.setupRenderTarget=I,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Dt}function MR(r,t){function n(a,o=Ya){let c;const u=Le.getTransfer(o);if(a===Ii)return r.UNSIGNED_BYTE;if(a===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===op)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Uv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Lv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===wv)return r.BYTE;if(a===Dv)return r.SHORT;if(a===Qo)return r.UNSIGNED_SHORT;if(a===sp)return r.INT;if(a===Us)return r.UNSIGNED_INT;if(a===ha)return r.FLOAT;if(a===pa)return r.HALF_FLOAT;if(a===Nv)return r.ALPHA;if(a===Ov)return r.RGB;if(a===bi)return r.RGBA;if(a===$o)return r.DEPTH_COMPONENT;if(a===tl)return r.DEPTH_STENCIL;if(a===Pv)return r.RED;if(a===lp)return r.RED_INTEGER;if(a===zv)return r.RG;if(a===cp)return r.RG_INTEGER;if(a===up)return r.RGBA_INTEGER;if(a===Zc||a===jc||a===Kc||a===Qc)if(u===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Sd||a===Md||a===Ed||a===Td)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===bd||a===Ad||a===Rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===bd||a===Ad)return u===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Rd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Cd||a===wd||a===Dd||a===Ud||a===Ld||a===Nd||a===Od||a===Pd||a===zd||a===Bd||a===Id||a===Fd||a===Hd||a===Vd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Cd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===wd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Dd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ud)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ld)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Nd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Od)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Pd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===zd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Bd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Id)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Fd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Hd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vd)return u===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Gd||a===kd||a===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Gd)return u===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Wd||a===qd||a===Yd||a===Zd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(a===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Jo?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const ER=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Zv(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new qn({vertexShader:ER,fragmentShader:TR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xn(new ll(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AR extends Ns{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,g=null,_=null,y=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",M=new bR,v={},P=n.getContextAttributes();let U=null,R=null;const F=[],B=[],O=new Ct;let k=null;const D=new Wn;D.viewport=new Xe;const w=new Wn;w.viewport=new Xe;const V=[D,w],Q=new GE;let rt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=F[nt];return ut===void 0&&(ut=new Yh,F[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=F[nt];return ut===void 0&&(ut=new Yh,F[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=F[nt];return ut===void 0&&(ut=new Yh,F[nt]=ut),ut.getHandSpace()};function at(nt){const ut=B.indexOf(nt.inputSource);if(ut===-1)return;const It=F[ut];It!==void 0&&(It.update(nt.inputSource,nt.frame,p||u),It.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){o.removeEventListener("select",at),o.removeEventListener("selectstart",at),o.removeEventListener("selectend",at),o.removeEventListener("squeeze",at),o.removeEventListener("squeezestart",at),o.removeEventListener("squeezeend",at),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",q);for(let nt=0;nt<F.length;nt++){const ut=B[nt];ut!==null&&(B[nt]=null,F[nt].disconnect(ut))}rt=null,ht=null,M.reset();for(const nt in v)delete v[nt];t.setRenderTarget(U),S=null,y=null,_=null,o=null,R=null,Ht.stop(),a.isPresenting=!1,t.setPixelRatio(k),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",at),o.addEventListener("selectstart",at),o.addEventListener("selectend",at),o.addEventListener("squeeze",at),o.addEventListener("squeezestart",at),o.addEventListener("squeezeend",at),o.addEventListener("end",z),o.addEventListener("inputsourceschange",q),P.xrCompatible!==!0&&await n.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,bt=null,Lt=null;P.depth&&(Lt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,It=P.stencil?tl:$o,bt=P.stencil?Jo:Us);const oe={colorFormat:n.RGBA8,depthFormat:Lt,scaleFactor:c};_=this.getBinding(),y=_.createProjectionLayer(oe),o.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),R=new Ri(y.textureWidth,y.textureHeight,{format:bi,type:Ii,depthTexture:new Yv(y.textureWidth,y.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const It={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,It),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Ri(S.framebufferWidth,S.framebufferHeight,{format:bi,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Ht.setContext(o),Ht.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(nt){for(let ut=0;ut<nt.removed.length;ut++){const It=nt.removed[ut],bt=B.indexOf(It);bt>=0&&(B[bt]=null,F[bt].disconnect(It))}for(let ut=0;ut<nt.added.length;ut++){const It=nt.added[ut];let bt=B.indexOf(It);if(bt===-1){for(let oe=0;oe<F.length;oe++)if(oe>=B.length){B.push(It),bt=oe;break}else if(B[oe]===null){B[oe]=It,bt=oe;break}if(bt===-1)break}const Lt=F[bt];Lt&&Lt.connect(It)}}const Y=new G,_t=new G;function At(nt,ut,It){Y.setFromMatrixPosition(ut.matrixWorld),_t.setFromMatrixPosition(It.matrixWorld);const bt=Y.distanceTo(_t),Lt=ut.projectionMatrix.elements,oe=It.projectionMatrix.elements,we=Lt[14]/(Lt[10]-1),I=Lt[14]/(Lt[10]+1),St=(Lt[9]+1)/Lt[5],mt=(Lt[9]-1)/Lt[5],pt=(Lt[8]-1)/Lt[0],vt=(oe[8]+1)/oe[0],Ft=we*pt,Dt=we*vt,zt=bt/(-pt+vt),ce=zt*-pt;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ce),nt.translateZ(zt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Lt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const ue=we+zt,L=I+zt,T=Ft-ce,J=Dt+(bt-ce),ct=St*I/L*ue,Tt=mt*I/L*ue;nt.projectionMatrix.makePerspective(T,J,ct,Tt,ue,L),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function N(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let ut=nt.near,It=nt.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(It=M.depthFar)),Q.near=w.near=D.near=ut,Q.far=w.far=D.far=It,(rt!==Q.near||ht!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),rt=Q.near,ht=Q.far),Q.layers.mask=nt.layers.mask|6,D.layers.mask=Q.layers.mask&3,w.layers.mask=Q.layers.mask&5;const bt=nt.parent,Lt=Q.cameras;N(Q,bt);for(let oe=0;oe<Lt.length;oe++)N(Lt[oe],bt);Lt.length===2?At(Q,D,w):Q.projectionMatrix.copy(D.projectionMatrix),et(nt,Q,bt)};function et(nt,ut,It){It===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(It.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=au*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(nt){m=nt,y!==null&&(y.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(nt){return v[nt]};let Mt=null;function Ut(nt,ut){if(g=ut.getViewerPose(p||u),E=ut,g!==null){const It=g.views;S!==null&&(t.setRenderTargetFramebuffer(R,S.framebuffer),t.setRenderTarget(R));let bt=!1;It.length!==Q.cameras.length&&(Q.cameras.length=0,bt=!0);for(let I=0;I<It.length;I++){const St=It[I];let mt=null;if(S!==null)mt=S.getViewport(St);else{const vt=_.getViewSubImage(y,St);mt=vt.viewport,I===0&&(t.setRenderTargetTextures(R,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(R))}let pt=V[I];pt===void 0&&(pt=new Wn,pt.layers.enable(I),pt.viewport=new Xe,V[I]=pt),pt.matrix.fromArray(St.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(St.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(mt.x,mt.y,mt.width,mt.height),I===0&&(Q.matrix.copy(pt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),bt===!0&&Q.cameras.push(pt)}const Lt=o.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){_=a.getBinding();const I=_.getDepthInformation(It[0]);I&&I.isValid&&I.texture&&M.init(I,o.renderState)}if(Lt&&Lt.includes("camera-access")&&b){t.state.unbindTexture(),_=a.getBinding();for(let I=0;I<It.length;I++){const St=It[I].camera;if(St){let mt=v[St];mt||(mt=new Zv,v[St]=mt);const pt=_.getCameraImage(St);mt.sourceTexture=pt}}}}for(let It=0;It<F.length;It++){const bt=B[It],Lt=F[It];bt!==null&&Lt!==void 0&&Lt.update(bt,ut,p||u)}Mt&&Mt(nt,ut),ut.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ut}),E=null}const Ht=new ly;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(nt){Mt=nt},this.dispose=function(){}}}const Ts=new Ci,RR=new Qe;function CR(r,t){function n(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function a(M,v){v.color.getRGB(M.fogColor.value,Xv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function o(M,v,P,U,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&S(M,v,R)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),b(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(u(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,P,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,n(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Yn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,n(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Yn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,n(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,n(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const P=t.get(v),U=P.envMap,R=P.envMapRotation;U&&(M.envMap.value=U,Ts.copy(R),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),M.envMapRotation.value.setFromMatrix4(RR.makeRotationFromEuler(Ts)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,M.aoMapTransform))}function u(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,P,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*P,M.scale.value=U*.5,v.map&&(M.map.value=v.map,n(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,P){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function b(M,v){const P=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function wR(r,t,n,a){let o={},c={},u=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const R=U.program;a.uniformBlockBinding(P,R)}function p(P,U){let R=o[P.id];R===void 0&&(E(P),R=g(P),o[P.id]=R,P.addEventListener("dispose",M));const F=U.program;a.updateUBOMapping(P,F);const B=t.render.frame;c[P.id]!==B&&(y(P),c[P.id]=B)}function g(P){const U=_();P.__bindingPointIndex=U;const R=r.createBuffer(),F=P.__size,B=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,R),R}function _(){for(let P=0;P<h;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const U=o[P.id],R=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,O=R.length;B<O;B++){const k=Array.isArray(R[B])?R[B]:[R[B]];for(let D=0,w=k.length;D<w;D++){const V=k[D];if(S(V,B,D,F)===!0){const Q=V.__offset,rt=Array.isArray(V.value)?V.value:[V.value];let ht=0;for(let at=0;at<rt.length;at++){const z=rt[at],q=b(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,Q+ht,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,ht),ht+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(P,U,R,F){const B=P.value,O=U+"_"+R;if(F[O]===void 0)return typeof B=="number"||typeof B=="boolean"?F[O]=B:F[O]=B.clone(),!0;{const k=F[O];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return F[O]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function E(P){const U=P.uniforms;let R=0;const F=16;for(let O=0,k=U.length;O<k;O++){const D=Array.isArray(U[O])?U[O]:[U[O]];for(let w=0,V=D.length;w<V;w++){const Q=D[w],rt=Array.isArray(Q.value)?Q.value:[Q.value];for(let ht=0,at=rt.length;ht<at;ht++){const z=rt[ht],q=b(z),Y=R%F,_t=Y%q.boundary,At=Y+_t;R+=_t,At!==0&&F-At<q.storage&&(R+=F-At),Q.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=R,R+=q.storage}}}const B=R%F;return B>0&&(R+=F-B),P.__size=R,P.__cache={},this}function b(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function M(P){const U=P.target;U.removeEventListener("dispose",M);const R=u.indexOf(U.__bindingPointIndex);u.splice(R,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function v(){for(const P in o)r.deleteBuffer(o[P]);u=[],o={},c={}}return{bind:m,update:p,dispose:v}}class DR{constructor(t={}){const{canvas:n=SM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,v=null;const P=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let F=!1;this._outputColorSpace=gi;let B=0,O=0,k=null,D=-1,w=null;const V=new Xe,Q=new Xe;let rt=null;const ht=new re(0);let at=0,z=n.width,q=n.height,Y=1,_t=null,At=null;const N=new Xe(0,0,z,q),et=new Xe(0,0,z,q);let Mt=!1;const Ut=new mp;let Ht=!1,nt=!1;const ut=new Qe,It=new G,bt=new Xe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function we(){return k===null?Y:1}let I=a;function St(C,Z){return n.getContext(C,Z)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ip}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",qt,!1),n.addEventListener("webglcontextcreationerror",Rt,!1),I===null){const Z="webgl2";if(I=St(Z,C),I===null)throw St(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let mt,pt,vt,Ft,Dt,zt,ce,ue,L,T,J,ct,Tt,ft,$t,Ot,Qt,Jt,wt,Pt,ee,Wt,Vt,de;function W(){mt=new H1(I),mt.init(),Wt=new MR(I,mt),pt=new N1(I,mt,t,Wt),vt=new xR(I,mt),pt.reversedDepthBuffer&&y&&vt.buffers.depth.setReversed(!0),Ft=new k1(I),Dt=new oR,zt=new SR(I,mt,vt,Dt,pt,Wt,Ft),ce=new P1(R),ue=new F1(R),L=new jE(I),Vt=new U1(I,L),T=new V1(I,L,Ft,Vt),J=new W1(I,T,L,Ft),wt=new X1(I,pt,zt),Ot=new O1(Dt),ct=new rR(R,ce,ue,mt,pt,Vt,Ot),Tt=new CR(R,Dt),ft=new cR,$t=new mR(mt),Jt=new D1(R,ce,ue,vt,J,S,m),Qt=new vR(R,J,pt),de=new wR(I,Ft,pt,vt),Pt=new L1(I,mt,Ft),ee=new G1(I,mt,Ft),Ft.programs=ct.programs,R.capabilities=pt,R.extensions=mt,R.properties=Dt,R.renderLists=ft,R.shadowMap=Qt,R.state=vt,R.info=Ft}W();const Nt=new AR(R,I);this.xr=Nt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(z,q,!1))},this.getSize=function(C){return C.set(z,q)},this.setSize=function(C,Z,st=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,q=Z,n.width=Math.floor(C*Y),n.height=Math.floor(Z*Y),st===!0&&(n.style.width=C+"px",n.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(z*Y,q*Y).floor()},this.setDrawingBufferSize=function(C,Z,st){z=C,q=Z,Y=st,n.width=Math.floor(C*st),n.height=Math.floor(Z*st),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,Z,st,ot){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,Z,st,ot),vt.viewport(V.copy(N).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(et)},this.setScissor=function(C,Z,st,ot){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,Z,st,ot),vt.scissor(Q.copy(et).multiplyScalar(Y).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(C){vt.setScissorTest(Mt=C)},this.setOpaqueSort=function(C){_t=C},this.setTransparentSort=function(C){At=C},this.getClearColor=function(C){return C.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,st=!0){let ot=0;if(C){let K=!1;if(k!==null){const Et=k.texture.format;K=Et===up||Et===cp||Et===lp}if(K){const Et=k.texture.type,Gt=Et===Ii||Et===Us||Et===Qo||Et===Jo||Et===rp||Et===op,jt=Jt.getClearColor(),Xt=Jt.getClearAlpha(),ne=jt.r,le=jt.g,ie=jt.b;Gt?(E[0]=ne,E[1]=le,E[2]=ie,E[3]=Xt,I.clearBufferuiv(I.COLOR,0,E)):(b[0]=ne,b[1]=le,b[2]=ie,b[3]=Xt,I.clearBufferiv(I.COLOR,0,b))}else ot|=I.COLOR_BUFFER_BIT}Z&&(ot|=I.DEPTH_BUFFER_BIT),st&&(ot|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",qt,!1),n.removeEventListener("webglcontextcreationerror",Rt,!1),Jt.dispose(),ft.dispose(),$t.dispose(),Dt.dispose(),ce.dispose(),ue.dispose(),J.dispose(),Vt.dispose(),de.dispose(),ct.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",ri),Nt.removeEventListener("sessionend",Zr),wi.stop()};function Bt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=Ft.autoReset,Z=Qt.enabled,st=Qt.autoUpdate,ot=Qt.needsUpdate,K=Qt.type;W(),Ft.autoReset=C,Qt.enabled=Z,Qt.autoUpdate=st,Qt.needsUpdate=ot,Qt.type=K}function Rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const Z=C.target;Z.removeEventListener("dispose",xt),Yt(Z)}function Yt(C){fe(C),Dt.remove(C)}function fe(C){const Z=Dt.get(C).programs;Z!==void 0&&(Z.forEach(function(st){ct.releaseProgram(st)}),C.isShaderMaterial&&ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,st,ot,K,Et){Z===null&&(Z=Lt);const Gt=K.isMesh&&K.matrixWorld.determinant()<0,jt=ga(C,Z,st,ot,K);vt.setMaterial(ot,Gt);let Xt=st.index,ne=1;if(ot.wireframe===!0){if(Xt=T.getWireframeAttribute(st),Xt===void 0)return;ne=2}const le=st.drawRange,ie=st.attributes.position;let ye=le.start*ne,Oe=(le.start+le.count)*ne;Et!==null&&(ye=Math.max(ye,Et.start*ne),Oe=Math.min(Oe,(Et.start+Et.count)*ne)),Xt!==null?(ye=Math.max(ye,0),Oe=Math.min(Oe,Xt.count)):ie!=null&&(ye=Math.max(ye,0),Oe=Math.min(Oe,ie.count));const We=Oe-ye;if(We<0||We===1/0)return;Vt.setup(K,ot,jt,st,Xt);let Pe,xe=Pt;if(Xt!==null&&(Pe=L.get(Xt),xe=ee,xe.setIndex(Pe)),K.isMesh)ot.wireframe===!0?(vt.setLineWidth(ot.wireframeLinewidth*we()),xe.setMode(I.LINES)):xe.setMode(I.TRIANGLES);else if(K.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),vt.setLineWidth(Kt*we()),K.isLineSegments?xe.setMode(I.LINES):K.isLineLoop?xe.setMode(I.LINE_LOOP):xe.setMode(I.LINE_STRIP)}else K.isPoints?xe.setMode(I.POINTS):K.isSprite&&xe.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)el("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,Ye=K._multiDrawCounts,Ce=K._multiDrawCount,Mn=Xt?L.get(Xt).bytesPerElement:1,Hi=Dt.get(ot).currentProgram.getUniforms();for(let _n=0;_n<Ce;_n++)Hi.setValue(I,"_gl_DrawID",_n),xe.render(Kt[_n]/Mn,Ye[_n])}else if(K.isInstancedMesh)xe.renderInstances(ye,We,K.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ye=Math.min(st.instanceCount,Kt);xe.renderInstances(ye,We,Ye)}else xe.render(ye,We)};function ze(C,Z,st){C.transparent===!0&&C.side===fa&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,jn(C,Z,st),C.side=ja,C.needsUpdate=!0,jn(C,Z,st),C.side=fa):jn(C,Z,st)}this.compile=function(C,Z,st=null){st===null&&(st=C),v=$t.get(st),v.init(Z),U.push(v),st.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),C!==st&&C.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ot=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Et=K.material;if(Et)if(Array.isArray(Et))for(let Gt=0;Gt<Et.length;Gt++){const jt=Et[Gt];ze(jt,st,K),ot.add(jt)}else ze(Et,st,K),ot.add(Et)}),v=U.pop(),ot},this.compileAsync=function(C,Z,st=null){const ot=this.compile(C,Z,st);return new Promise(K=>{function Et(){if(ot.forEach(function(Gt){Dt.get(Gt).currentProgram.isReady()&&ot.delete(Gt)}),ot.size===0){K(C);return}setTimeout(Et,10)}mt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Re=null;function Ln(C){Re&&Re(C)}function ri(){wi.stop()}function Zr(){wi.start()}const wi=new ly;wi.setAnimationLoop(Ln),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Re=C,Nt.setAnimationLoop(C),C===null?wi.stop():wi.start()},Nt.addEventListener("sessionstart",ri),Nt.addEventListener("sessionend",Zr),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Z),Z=Nt.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Z,k),v=$t.get(C,U.length),v.init(Z),U.push(v),ut.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ut.setFromProjectionMatrix(ut,Bi,Z.reversedDepth),nt=this.localClippingEnabled,Ht=Ot.init(this.clippingPlanes,nt),M=ft.get(C,P.length),M.init(),P.push(M),Nt.enabled===!0&&Nt.isPresenting===!0){const Et=R.xr.getDepthSensingMesh();Et!==null&&Ps(Et,Z,-1/0,R.sortObjects)}Ps(C,Z,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(_t,At),oe=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,oe&&Jt.addToRenderList(M,C),this.info.render.frame++,Ht===!0&&Ot.beginShadows();const st=v.state.shadowsArray;Qt.render(st,C,Z),Ht===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,K=M.transmissive;if(v.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(K.length>0)for(let Gt=0,jt=Et.length;Gt<jt;Gt++){const Xt=Et[Gt];Bs(ot,K,C,Xt)}oe&&Jt.render(C);for(let Gt=0,jt=Et.length;Gt<jt;Gt++){const Xt=Et[Gt];zs(M,C,Xt,Xt.viewport)}}else K.length>0&&Bs(ot,K,C,Z),oe&&Jt.render(C),zs(M,C,Z);k!==null&&O===0&&(zt.updateMultisampleRenderTarget(k),zt.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(R,C,Z),Vt.resetDefaultState(),D=-1,w=null,U.pop(),U.length>0?(v=U[U.length-1],Ht===!0&&Ot.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Ps(C,Z,st,ot){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ut.intersectsSprite(C)){ot&&bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ut);const Gt=J.update(C),jt=C.material;jt.visible&&M.push(C,Gt,jt,st,bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ut.intersectsObject(C))){const Gt=J.update(C),jt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),bt.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),bt.copy(Gt.boundingSphere.center)),bt.applyMatrix4(C.matrixWorld).applyMatrix4(ut)),Array.isArray(jt)){const Xt=Gt.groups;for(let ne=0,le=Xt.length;ne<le;ne++){const ie=Xt[ne],ye=jt[ie.materialIndex];ye&&ye.visible&&M.push(C,Gt,ye,st,bt.z,ie)}}else jt.visible&&M.push(C,Gt,jt,st,bt.z,null)}}const Et=C.children;for(let Gt=0,jt=Et.length;Gt<jt;Gt++)Ps(Et[Gt],Z,st,ot)}function zs(C,Z,st,ot){const K=C.opaque,Et=C.transmissive,Gt=C.transparent;v.setupLightsView(st),Ht===!0&&Ot.setGlobalState(R.clippingPlanes,st),ot&&vt.viewport(V.copy(ot)),K.length>0&&Qa(K,Z,st),Et.length>0&&Qa(Et,Z,st),Gt.length>0&&Qa(Gt,Z,st),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Bs(C,Z,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Ri(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?pa:Ii,minFilter:ws,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Et=v.state.transmissionRenderTarget[ot.id],Gt=ot.viewport||V;Et.setSize(Gt.z*R.transmissionResolutionScale,Gt.w*R.transmissionResolutionScale);const jt=R.getRenderTarget(),Xt=R.getActiveCubeFace(),ne=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(ht),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),oe&&Jt.render(st);const le=R.toneMapping;R.toneMapping=Za;const ie=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),Ht===!0&&Ot.setGlobalState(R.clippingPlanes,ot),Qa(C,st,ot),zt.updateMultisampleRenderTarget(Et),zt.updateRenderTargetMipmap(Et),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Oe=0,We=Z.length;Oe<We;Oe++){const Pe=Z[Oe],xe=Pe.object,Kt=Pe.geometry,Ye=Pe.material,Ce=Pe.group;if(Ye.side===fa&&xe.layers.test(ot.layers)){const Mn=Ye.side;Ye.side=Yn,Ye.needsUpdate=!0,jr(xe,st,ot,Kt,Ye,Ce),Ye.side=Mn,Ye.needsUpdate=!0,ye=!0}}ye===!0&&(zt.updateMultisampleRenderTarget(Et),zt.updateRenderTargetMipmap(Et))}R.setRenderTarget(jt,Xt,ne),R.setClearColor(ht,at),ie!==void 0&&(ot.viewport=ie),R.toneMapping=le}function Qa(C,Z,st){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Et=C.length;K<Et;K++){const Gt=C[K],jt=Gt.object,Xt=Gt.geometry,ne=Gt.group;let le=Gt.material;le.allowOverride===!0&&ot!==null&&(le=ot),jt.layers.test(st.layers)&&jr(jt,Z,st,Xt,le,ne)}}function jr(C,Z,st,ot,K,Et){C.onBeforeRender(R,Z,st,ot,K,Et),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(R,Z,st,ot,C,Et),K.transparent===!0&&K.side===fa&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,R.renderBufferDirect(st,Z,ot,K,C,Et),K.side=ja,K.needsUpdate=!0,R.renderBufferDirect(st,Z,ot,K,C,Et),K.side=fa):R.renderBufferDirect(st,Z,ot,K,C,Et),C.onAfterRender(R,Z,st,ot,K,Et)}function jn(C,Z,st){Z.isScene!==!0&&(Z=Lt);const ot=Dt.get(C),K=v.state.lights,Et=v.state.shadowsArray,Gt=K.state.version,jt=ct.getParameters(C,K.state,Et,Z,st),Xt=ct.getProgramCacheKey(jt);let ne=ot.programs;ot.environment=C.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(C.isMeshStandardMaterial?ue:ce).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",xt),ne=new Map,ot.programs=ne);let le=ne.get(Xt);if(le!==void 0){if(ot.currentProgram===le&&ot.lightsStateVersion===Gt)return Sn(C,jt),le}else jt.uniforms=ct.getUniforms(C),C.onBeforeCompile(jt,R),le=ct.acquireProgram(jt,Xt),ne.set(Xt,le),ot.uniforms=jt.uniforms;const ie=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ie.clippingPlanes=Ot.uniform),Sn(C,jt),ot.needsLights=hu(C),ot.lightsStateVersion=Gt,ot.needsLights&&(ie.ambientLightColor.value=K.state.ambient,ie.lightProbe.value=K.state.probe,ie.directionalLights.value=K.state.directional,ie.directionalLightShadows.value=K.state.directionalShadow,ie.spotLights.value=K.state.spot,ie.spotLightShadows.value=K.state.spotShadow,ie.rectAreaLights.value=K.state.rectArea,ie.ltc_1.value=K.state.rectAreaLTC1,ie.ltc_2.value=K.state.rectAreaLTC2,ie.pointLights.value=K.state.point,ie.pointLightShadows.value=K.state.pointShadow,ie.hemisphereLights.value=K.state.hemi,ie.directionalShadowMap.value=K.state.directionalShadowMap,ie.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ie.spotShadowMap.value=K.state.spotShadowMap,ie.spotLightMatrix.value=K.state.spotLightMatrix,ie.spotLightMap.value=K.state.spotLightMap,ie.pointShadowMap.value=K.state.pointShadowMap,ie.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=le,ot.uniformsList=null,le}function sn(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=tu.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Sn(C,Z){const st=Dt.get(C);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function ga(C,Z,st,ot,K){Z.isScene!==!0&&(Z=Lt),zt.resetTextureUnits();const Et=Z.fog,Gt=ot.isMeshStandardMaterial?Z.environment:null,jt=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Gr,Xt=(ot.isMeshStandardMaterial?ue:ce).get(ot.envMap||Gt),ne=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,le=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),ie=!!st.morphAttributes.position,ye=!!st.morphAttributes.normal,Oe=!!st.morphAttributes.color;let We=Za;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(We=R.toneMapping);const Pe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,xe=Pe!==void 0?Pe.length:0,Kt=Dt.get(ot),Ye=v.state.lights;if(Ht===!0&&(nt===!0||C!==w)){const fn=C===w&&ot.id===D;Ot.setState(ot,C,fn)}let Ce=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ye.state.version||Kt.outputColorSpace!==jt||K.isBatchedMesh&&Kt.batching===!1||!K.isBatchedMesh&&Kt.batching===!0||K.isBatchedMesh&&Kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Kt.instancing===!1||!K.isInstancedMesh&&Kt.instancing===!0||K.isSkinnedMesh&&Kt.skinning===!1||!K.isSkinnedMesh&&Kt.skinning===!0||K.isInstancedMesh&&Kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Kt.instancingMorph===!1&&K.morphTexture!==null||Kt.envMap!==Xt||ot.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ot.numPlanes||Kt.numIntersection!==Ot.numIntersection)||Kt.vertexAlphas!==ne||Kt.vertexTangents!==le||Kt.morphTargets!==ie||Kt.morphNormals!==ye||Kt.morphColors!==Oe||Kt.toneMapping!==We||Kt.morphTargetsCount!==xe)&&(Ce=!0):(Ce=!0,Kt.__version=ot.version);let Mn=Kt.currentProgram;Ce===!0&&(Mn=jn(ot,Z,K));let Hi=!1,_n=!1,$a=!1;const Ee=Mn.getUniforms(),Cn=Kt.uniforms;if(vt.useProgram(Mn.program)&&(Hi=!0,_n=!0,$a=!0),ot.id!==D&&(D=ot.id,_n=!0),Hi||w!==C){vt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ee.setValue(I,"projectionMatrix",C.projectionMatrix),Ee.setValue(I,"viewMatrix",C.matrixWorldInverse);const en=Ee.map.cameraPosition;en!==void 0&&en.setValue(I,It.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,_n=!0,$a=!0)}if(K.isSkinnedMesh){Ee.setOptional(I,K,"bindMatrix"),Ee.setOptional(I,K,"bindMatrixInverse");const fn=K.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ee.setValue(I,"boneTexture",fn.boneTexture,zt))}K.isBatchedMesh&&(Ee.setOptional(I,K,"batchingTexture"),Ee.setValue(I,"batchingTexture",K._matricesTexture,zt),Ee.setOptional(I,K,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",K._indirectTexture,zt),Ee.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",K._colorsTexture,zt));const Nn=st.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&wt.update(K,st,Mn),(_n||Kt.receiveShadow!==K.receiveShadow)&&(Kt.receiveShadow=K.receiveShadow,Ee.setValue(I,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Cn.envMap.value=Xt,Cn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Cn.envMapIntensity.value=Z.environmentIntensity),_n&&(Ee.setValue(I,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&Kr(Cn,$a),Et&&ot.fog===!0&&Tt.refreshFogUniforms(Cn,Et),Tt.refreshMaterialUniforms(Cn,ot,Y,q,v.state.transmissionRenderTarget[C.id]),tu.upload(I,sn(Kt),Cn,zt)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(tu.upload(I,sn(Kt),Cn,zt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ee.setValue(I,"center",K.center),Ee.setValue(I,"modelViewMatrix",K.modelViewMatrix),Ee.setValue(I,"normalMatrix",K.normalMatrix),Ee.setValue(I,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const fn=ot.uniformsGroups;for(let en=0,Is=fn.length;en<Is;en++){const Di=fn[en];de.update(Di,Mn),de.bind(Di,Mn)}}return Mn}function Kr(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function hu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,Z,st){const ot=Dt.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Dt.get(C.texture).__webglTexture=Z,Dt.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const st=Dt.get(C);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const du=I.createFramebuffer();this.setRenderTarget=function(C,Z=0,st=0){k=C,B=Z,O=st;let ot=!0,K=null,Et=!1,Gt=!1;if(C){const Xt=Dt.get(C);if(Xt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(I.FRAMEBUFFER,null),ot=!1;else if(Xt.__webglFramebuffer===void 0)zt.setupRenderTarget(C);else if(Xt.__hasExternalTextures)zt.rebindTextures(C,Dt.get(C.texture).__webglTexture,Dt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ie=C.depthTexture;if(Xt.__boundDepthTexture!==ie){if(ie!==null&&Dt.has(ie)&&(C.width!==ie.image.width||C.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(C)}}const ne=C.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Gt=!0);const le=Dt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(le[Z])?K=le[Z][st]:K=le[Z],Et=!0):C.samples>0&&zt.useMultisampledRTT(C)===!1?K=Dt.get(C).__webglMultisampledFramebuffer:Array.isArray(le)?K=le[st]:K=le,V.copy(C.viewport),Q.copy(C.scissor),rt=C.scissorTest}else V.copy(N).multiplyScalar(Y).floor(),Q.copy(et).multiplyScalar(Y).floor(),rt=Mt;if(st!==0&&(K=du),vt.bindFramebuffer(I.FRAMEBUFFER,K)&&ot&&vt.drawBuffers(C,K),vt.viewport(V),vt.scissor(Q),vt.setScissorTest(rt),Et){const Xt=Dt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Xt.__webglTexture,st)}else if(Gt){const Xt=Z;for(let ne=0;ne<C.textures.length;ne++){const le=Dt.get(C.textures[ne]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ne,le.__webglTexture,st,Xt)}}else if(C!==null&&st!==0){const Xt=Dt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xt.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(C,Z,st,ot,K,Et,Gt,jt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=Dt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){vt.bindFramebuffer(I.FRAMEBUFFER,Xt);try{const ne=C.textures[jt],le=ne.format,ie=ne.type;if(!pt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-K&&(C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+jt),I.readPixels(Z,st,ot,K,Wt.convert(le),Wt.convert(ie),Et))}finally{const ne=k!==null?Dt.get(k).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(C,Z,st,ot,K,Et,Gt,jt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=Dt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt)if(Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-K){vt.bindFramebuffer(I.FRAMEBUFFER,Xt);const ne=C.textures[jt],le=ne.format,ie=ne.type;if(!pt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ye),I.bufferData(I.PIXEL_PACK_BUFFER,Et.byteLength,I.STREAM_READ),C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+jt),I.readPixels(Z,st,ot,K,Wt.convert(le),Wt.convert(ie),0);const Oe=k!==null?Dt.get(k).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,Oe);const We=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await MM(I,We,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ye),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Et),I.deleteBuffer(ye),I.deleteSync(We),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,st=0){const ot=Math.pow(2,-st),K=Math.floor(C.image.width*ot),Et=Math.floor(C.image.height*ot),Gt=Z!==null?Z.x:0,jt=Z!==null?Z.y:0;zt.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Gt,jt,K,Et),vt.unbindTexture()};const ul=I.createFramebuffer(),Ja=I.createFramebuffer();this.copyTextureToTexture=function(C,Z,st=null,ot=null,K=0,Et=null){Et===null&&(K!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=K,K=0):Et=0);let Gt,jt,Xt,ne,le,ie,ye,Oe,We;const Pe=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(st!==null)Gt=st.max.x-st.min.x,jt=st.max.y-st.min.y,Xt=st.isBox3?st.max.z-st.min.z:1,ne=st.min.x,le=st.min.y,ie=st.isBox3?st.min.z:0;else{const Nn=Math.pow(2,-K);Gt=Math.floor(Pe.width*Nn),jt=Math.floor(Pe.height*Nn),C.isDataArrayTexture?Xt=Pe.depth:C.isData3DTexture?Xt=Math.floor(Pe.depth*Nn):Xt=1,ne=0,le=0,ie=0}ot!==null?(ye=ot.x,Oe=ot.y,We=ot.z):(ye=0,Oe=0,We=0);const xe=Wt.convert(Z.format),Kt=Wt.convert(Z.type);let Ye;Z.isData3DTexture?(zt.setTexture3D(Z,0),Ye=I.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(zt.setTexture2DArray(Z,0),Ye=I.TEXTURE_2D_ARRAY):(zt.setTexture2D(Z,0),Ye=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),Mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Hi=I.getParameter(I.UNPACK_SKIP_PIXELS),_n=I.getParameter(I.UNPACK_SKIP_ROWS),$a=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ie);const Ee=C.isDataArrayTexture||C.isData3DTexture,Cn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Nn=Dt.get(C),fn=Dt.get(Z),en=Dt.get(Nn.__renderTarget),Is=Dt.get(fn.__renderTarget);vt.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Di=0;Di<Xt;Di++)Ee&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.get(C).__webglTexture,K,ie+Di),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.get(Z).__webglTexture,Et,We+Di)),I.blitFramebuffer(ne,le,Gt,jt,ye,Oe,Gt,jt,I.DEPTH_BUFFER_BIT,I.NEAREST);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Dt.has(C)){const Nn=Dt.get(C),fn=Dt.get(Z);vt.bindFramebuffer(I.READ_FRAMEBUFFER,ul),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ja);for(let en=0;en<Xt;en++)Ee?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nn.__webglTexture,K,ie+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nn.__webglTexture,K),Cn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,Et,We+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,Et),K!==0?I.blitFramebuffer(ne,le,Gt,jt,ye,Oe,Gt,jt,I.COLOR_BUFFER_BIT,I.NEAREST):Cn?I.copyTexSubImage3D(Ye,Et,ye,Oe,We+en,ne,le,Gt,jt):I.copyTexSubImage2D(Ye,Et,ye,Oe,ne,le,Gt,jt);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Ye,Et,ye,Oe,We,Gt,jt,Xt,xe,Kt,Pe.data):Z.isCompressedArrayTexture?I.compressedTexSubImage3D(Ye,Et,ye,Oe,We,Gt,jt,Xt,xe,Pe.data):I.texSubImage3D(Ye,Et,ye,Oe,We,Gt,jt,Xt,xe,Kt,Pe):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Et,ye,Oe,Gt,jt,xe,Kt,Pe.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Et,ye,Oe,Pe.width,Pe.height,xe,Pe.data):I.texSubImage2D(I.TEXTURE_2D,Et,ye,Oe,Gt,jt,xe,Kt,Pe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Hi),I.pixelStorei(I.UNPACK_SKIP_ROWS,_n),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$a),Et===0&&Z.generateMipmaps&&I.generateMipmap(Ye),vt.unbindTexture()},this.initRenderTarget=function(C){Dt.get(C).__webglFramebuffer===void 0&&zt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?zt.setTextureCube(C,0):C.isData3DTexture?zt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?zt.setTexture2DArray(C,0):zt.setTexture2D(C,0),vt.unbindTexture()},this.resetState=function(){B=0,O=0,k=null,vt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),n.unpackColorSpace=Le._getUnpackColorSpace()}}class UR extends uu{constructor(t){super(t)}load(t,n,a,o){const c=this,u=new ay(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(t,function(h){const m=c.parse(JSON.parse(h));n&&n(m)},a,o)}parse(t){return new LR(t)}}class LR{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,n=100){const a=[],o=NR(t,n,this.data);for(let c=0,u=o.length;c<u;c++)a.push(...o[c].toShapes());return a}}function NR(r,t,n){const a=Array.from(r),o=t/n.resolution,c=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*o,u=[];let h=0,m=0;for(let p=0;p<a.length;p++){const g=a[p];if(g===`
`)h=0,m-=c;else{const _=OR(g,o,h,m,n);h+=_.offsetX,u.push(_.path)}}return u}function OR(r,t,n,a,o){const c=o.glyphs[r]||o.glyphs["?"];if(!c){console.error('THREE.Font: character "'+r+'" does not exists in font family '+o.familyName+".");return}const u=new qE;let h,m,p,g,_,y,S,E;if(c.o){const b=c._cachedOutline||(c._cachedOutline=c.o.split(" "));for(let M=0,v=b.length;M<v;)switch(b[M++]){case"m":h=b[M++]*t+n,m=b[M++]*t+a,u.moveTo(h,m);break;case"l":h=b[M++]*t+n,m=b[M++]*t+a,u.lineTo(h,m);break;case"q":p=b[M++]*t+n,g=b[M++]*t+a,_=b[M++]*t+n,y=b[M++]*t+a,u.quadraticCurveTo(_,y,p,g);break;case"b":p=b[M++]*t+n,g=b[M++]*t+a,_=b[M++]*t+n,y=b[M++]*t+a,S=b[M++]*t+n,E=b[M++]*t+a,u.bezierCurveTo(_,y,S,E,p,g);break}}return{offsetX:c.ha*t,path:u}}class PR extends yp{constructor(t,n={}){const a=n.font;if(a===void 0)super();else{const o=a.generateShapes(t,n.size);n.depth===void 0&&(n.depth=50),n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(o,n)}this.type="TextGeometry"}}const Mv={type:"change"},Tp={type:"start"},dy={type:"end"},Yc=new dp,Ev=new qa,zR=Math.cos(70*xM.DEG2RAD),dn=new G,Xn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},od=1e-6;class BR extends YE{constructor(t,n=null){super(t,n),this.state=ke.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Ka,this._lastTargetPosition=new G,this._quat=new Ka().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K0,this._sphericalDelta=new K0,this._scale=1,this._panOffset=new G,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new G,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FR.bind(this),this._onPointerDown=IR.bind(this),this._onPointerUp=HR.bind(this),this._onContextMenu=YR.bind(this),this._onMouseWheel=kR.bind(this),this._onKeyDown=XR.bind(this),this._onTouchStart=WR.bind(this),this._onTouchMove=qR.bind(this),this._onMouseDown=VR.bind(this),this._onMouseMove=GR.bind(this),this._interceptControlDown=ZR.bind(this),this._interceptControlUp=jR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mv),this.update(),this.state=ke.NONE}update(t=null){const n=this.object.position;dn.copy(n).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Xn:a>Math.PI&&(a-=Xn),o<-Math.PI?o+=Xn:o>Math.PI&&(o-=Xn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),n.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=dn.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new G(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new G(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Yc.origin.copy(this.object.position),Yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yc.direction))<zR?this.object.lookAt(this.target):(Ev.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yc.intersectPlane(Ev,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>od||this._lastTargetPosition.distanceToSquared(this.target)>od?(this.dispatchEvent(Mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){dn.setFromMatrixColumn(n,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,n){this.screenSpacePanning===!0?dn.setFromMatrixColumn(n,1):(dn.setFromMatrixColumn(n,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;dn.copy(o).sub(this.target);let c=dn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ct,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function IR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function FR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function HR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dy),this.state=ke.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function VR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ke.DOLLY;break;case Pr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}break;case Pr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Tp)}function GR(r){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function kR(r){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(r.preventDefault(),this.dispatchEvent(Tp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(dy))}function XR(r){this.enabled!==!1&&this._handleKeyDown(r)}function WR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ke.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ke.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Tp)}function qR(r){switch(this._trackPointer(r),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ke.NONE}}function YR(r){this.enabled!==!1&&r.preventDefault()}function ZR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const eu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const KR=new ry(-1,1,1,-1,0,1);class QR extends Zn{constructor(){super(),this.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rn([0,2,0,0,2,0],2))}}const JR=new QR;class py{constructor(t){this._mesh=new xn(JR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,KR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class $R extends cl{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof qn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ru.clone(t.uniforms),this.material=new qn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new py(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Tv extends cl{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class tC extends cl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class eC{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Ct);this._width=a.width,this._height=a.height,n=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pa}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $R(eu),this.copyPass.material.blending=da,this.clock=new Mp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}Tv!==void 0&&(u instanceof Tv?a=!0:u instanceof tC&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nC extends cl{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const iC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Wr extends cl{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Ri(c,u,{type:pa}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new Ri(c,u,{type:pa});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const y=new Ri(c,u,{type:pa});y.texture.name="UnrealBloomPass.v"+g,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),c=Math.round(c/2),u=Math.round(u/2)}const h=iC;this.highPassUniforms=ru.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Ct(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ru.clone(eu.uniforms),this.blendMaterial=new qn({uniforms:this.copyUniforms,vertexShader:eu.vertexShader,fragmentShader:eu.fragmentShader,blending:Ir,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new re,this._oldClearAlpha=1,this._basic=new nl,this._fsQuad=new py(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Ct(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=Wr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Wr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[];for(let a=0;a<t;a++)n.push(.39894*Math.exp(-.5*a*a/(t*t))/t);return new qn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new qn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Wr.BlurDirectionX=new Ct(1,0);Wr.BlurDirectionY=new Ct(0,1);class aC{constructor(t,n,a,o=200){this.particles=null,this.velocities=[],this.gravity=new G(0,-.02,0),this.lifespan=1,this.done=!1,this.state="LAUNCH",this.scene=t,this.color=a,this.particleCount=o;const c=new Zn;c.setAttribute("position",new si(new Float32Array([n.x,n.y,n.z]),3));const u=new jd({color:16777215,size:3,blending:Ir,depthWrite:!1});this.rocket=new F0(c,u),this.scene.add(this.rocket);const h=1.6+Math.random()*.4;this.rocketVelocity=new G((Math.random()-.5)*.5,h,(Math.random()-.5)*.5)}explode(t){this.state="EXPLODE",this.scene.remove(this.rocket),this.rocket.geometry.dispose(),this.rocket.material.dispose();const n=new Zn,a=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),c=1+Math.random()*1.5;for(let h=0;h<this.particleCount;h++){a.set([t.x,t.y,t.z],h*3);const m=Math.random()*Math.PI*2,p=Math.acos(Math.random()*2-1),g=Math.sin(p)*Math.cos(m),_=Math.sin(p)*Math.sin(m),y=Math.cos(p),S=new G(g,_,y);S.multiplyScalar(c*(.5+Math.random()*.5)),this.velocities.push(S);const E=(Math.random()-.5)*.3;o.set([this.color.r+E,this.color.g+E,this.color.b+E],h*3)}n.setAttribute("position",new si(a,3)),n.setAttribute("color",new si(o,3));const u=new jd({size:1.5,vertexColors:!0,transparent:!0,opacity:1,sizeAttenuation:!0,blending:Ir,depthWrite:!1});this.particles=new F0(n,u),this.scene.add(this.particles)}update(){if(!this.done){if(this.state==="LAUNCH"){const t=this.rocket.geometry.attributes.position.array;this.rocketVelocity.add(this.gravity),t[0]+=this.rocketVelocity.x,t[1]+=this.rocketVelocity.y,t[2]+=this.rocketVelocity.z,this.rocket.geometry.attributes.position.needsUpdate=!0,this.rocketVelocity.y<=0&&this.explode(new G(t[0],t[1],t[2]))}else if(this.state==="EXPLODE"&&this.particles){if(this.lifespan-=.01,this.lifespan<=0){this.dispose();return}this.particles.material.opacity=this.lifespan>.5?1:this.lifespan*2;const t=this.particles.geometry.attributes.position.array;for(let n=0;n<this.velocities.length;n++)this.velocities[n].add(this.gravity),t[n*3]+=this.velocities[n].x,t[n*3+1]+=this.velocities[n].y,t[n*3+2]+=this.velocities[n].z;this.particles.geometry.attributes.position.needsUpdate=!0}}}dispose(){this.done=!0,this.state==="LAUNCH"&&this.rocket&&(this.scene.remove(this.rocket),this.rocket.geometry.dispose(),this.rocket.material.dispose()),this.state==="EXPLODE"&&this.particles&&(this.scene.remove(this.particles),this.particles.geometry.dispose(),this.particles.material.dispose())}}function sC(r){const t=document.createElement("canvas");t.width=r,t.height=r;const n=t.getContext("2d");n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,r,r);const a={x:r/2,y:r/2},o=(h,m,p,g,_)=>{n.fillStyle=_;for(let y=0;y<m;y++){const S=y/m*Math.PI*2,E=a.x+Math.cos(S)*h,b=a.y+Math.sin(S)*h,M=a.x+Math.cos(S)*(h+p),v=a.y+Math.sin(S)*(h+p);n.save(),n.translate((E+M)/2,(b+v)/2),n.rotate(S),n.beginPath(),n.ellipse(0,0,p/2,g,0,0,Math.PI*2),n.fill(),n.restore()}},c=(h,m)=>{n.strokeStyle=m,n.beginPath(),n.arc(a.x,a.y,h,0,Math.PI*2),n.stroke()};o(r*.39,12,r*.1,r*.04,"#f06292"),o(r*.31,12,r*.09,r*.035,"#4fc3f7"),n.lineWidth=r*.015,c(r*.27,"#fff59d"),o(r*.175,8,r*.1,r*.03,"#ff8a65"),n.fillStyle="#a5d6a7",n.beginPath(),n.arc(a.x,a.y,r*.1,0,Math.PI*2),n.fill(),n.fillStyle="#ffd54f",n.beginPath(),n.arc(a.x,a.y,r*.05,0,Math.PI*2),n.fill();const u=new KM(t);return u.needsUpdate=!0,u}const rC=()=>{const r=Ur.useRef(null),t=Ur.useRef([]),[n,a]=Ur.useState(!1),o=Ur.useRef(null);Ur.useEffect(()=>{if(!r.current)return;const u=r.current,h=window.innerWidth<=768,m={pixelRatio:Math.min(window.devicePixelRatio,h?1.5:2),shadowMapSize:h?512:1024,rangoliSize:h?512:1024,numDiyas:h?30:60,numLanterns:h?10:20,bloomStrength:h?.9:1,fireworkParticles:h?100:200,cameraZ:h?140:120},p=new qM;p.background=new re(657946),p.fog=new pp(657946,100,300);const g=new Wn(75,u.clientWidth/u.clientHeight,.1,1e3);g.position.set(0,40,m.cameraZ);const _=new XE;g.add(_);const y=new WE(_);new VE().load("https://cdn.pixabay.com/audio/2022/11/14/audio_2c2d3621c1.mp3",function(bt){y.setBuffer(bt),y.setLoop(!0),y.setVolume(.5),o.current={listener:_,sound:y}});const E=new DR({antialias:!0});E.setSize(u.clientWidth,u.clientHeight),E.setPixelRatio(m.pixelRatio),E.shadowMap.enabled=!0,E.shadowMap.type=Rv,u.appendChild(E.domElement);const b=new BR(g,E.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.screenSpacePanning=!1,b.enablePan=!1,b.minDistance=210,b.maxDistance=210,b.maxPolarAngle=Math.PI/2-.1;const M=new nC(p,g),v=new Wr(new Ct(u.clientWidth,u.clientHeight),m.bloomStrength,.4,.85),P=new eC(E);P.addPass(M),P.addPass(v);const U=new HE(16766088,.1);p.add(U);const R=new IE(16777215,.8,0,Math.PI/4,.5);R.position.set(0,80,0),R.target.position.set(0,0,0),R.castShadow=!0,R.shadow.mapSize.width=m.shadowMapSize,R.shadow.mapSize.height=m.shadowMapSize,R.shadow.camera.near=50,R.shadow.camera.far=150,p.add(R),p.add(R.target);const F=sC(m.rangoliSize),B=new ll(200,200),O=new UE({color:3355443,map:F,emissive:16766088,emissiveMap:F,emissiveIntensity:.8,transparent:!0}),k=new xn(B,O);k.rotation.x=-Math.PI/2,k.receiveShadow=!0,p.add(k);const D=new gp(1.5,1,16),w=new iy({color:9127187,roughness:.6}),V=new xp(.5,8,8),Q=new nl({color:16766088}),rt=[],ht=60;for(let bt=0;bt<m.numDiyas;bt++){const Lt=bt/m.numDiyas*Math.PI*2,oe=Math.cos(Lt)*ht,we=Math.sin(Lt)*ht,I=new xn(D,w);I.position.set(0,.5,0);const St=new xn(V,Q);St.position.set(0,1.2,0);const mt=new Nr;mt.add(I),mt.add(St),mt.position.set(oe,0,we),mt.scale.set(1.5,1.5,1.5);const pt=new j0(16755251,1,30,2);pt.position.set(oe,3,we),pt.castShadow=!1,p.add(mt),p.add(pt),rt.push({mesh:mt,light:pt})}const at=new Nr,z=new xn(D,w);z.position.set(0,.5,0);const q=new xn(V,Q);q.position.set(0,1.2,0),at.add(z),at.add(q),at.position.set(0,0,0),at.scale.set(2,2,2);const Y=new j0(16755251,1.5,40,2);Y.position.set(0,3,0),Y.castShadow=!1,p.add(at),p.add(Y),rt.push({mesh:at,light:Y});let _t=null;new UR().load("https://unpkg.com/three@0.165.0/examples/fonts/helvetiker_regular.typeface.json",bt=>{const Lt=new PR("Happy Diwali",{font:bt,size:15,depth:3.8,curveSegments:12,bevelEnabled:!0,bevelThickness:.02,bevelSize:.01,bevelSegments:3});Lt.center();const oe=new DE({color:16761095,emissive:16740096,emissiveIntensity:1.3,metalness:.9,roughness:.35,clearcoat:1,clearcoatRoughness:.1});_t=new xn(Lt,oe),_t.position.set(0,20,0),_t.castShadow=!0,p.add(_t)});const N=[],et=new cu(2,2.5,5,12),Mt=new nl({color:16753920,transparent:!0,opacity:.8,blending:Ir});for(let bt=0;bt<m.numLanterns;bt++){const Lt=new xn(et,Mt);Lt.position.set((Math.random()-.5)*200,Math.random()*100,(Math.random()-.5)*200-50),p.add(Lt),N.push(Lt)}const Ut=new Mp,Ht=[new re(16729156),new re(4521796),new re(4474111),new re(16777028),new re(16729343),new re(4521983),new re(16777215)];let nt;const ut=()=>{nt=requestAnimationFrame(ut);const bt=Ut.getElapsedTime();if(_t&&(console.log("Animating frame at time:",bt),_t.position.y=20+Math.sin(bt*.5)*2,_t.lookAt(new G(g.position.x,_t.position.y,g.position.z))),rt.forEach(Lt=>{const oe=Math.sin(bt*5+Lt.mesh.position.x)*.1+.95;Lt.light.intensity=oe}),N.forEach(Lt=>{Lt.position.y+=.05,Lt.position.x+=Math.sin(bt+Lt.position.z)*.05,Lt.position.y>150&&(Lt.position.y=-20,Lt.position.x=(Math.random()-.5)*200)}),Math.random()<.015){const Lt=Ht[Math.floor(Math.random()*Ht.length)],oe=new G((Math.random()-.5)*180,1,(Math.random()-.5)*180);t.current.push(new aC(p,oe,Lt,m.fireworkParticles))}t.current=t.current.filter(Lt=>(Lt.update(),!Lt.done)),b.update(),P.render()};ut();const It=()=>{u&&(g.aspect=u.clientWidth/u.clientHeight,g.updateProjectionMatrix(),E.setSize(u.clientWidth,u.clientHeight),P.setSize(u.clientWidth,u.clientHeight),v.resolution.set(u.clientWidth,u.clientHeight))};return window.addEventListener("resize",It),()=>{window.removeEventListener("resize",It),cancelAnimationFrame(nt),t.current.forEach(bt=>bt.dispose()),t.current=[],o.current&&o.current.sound.isPlaying&&o.current.sound.stop(),E.domElement.parentElement===u&&u.removeChild(E.domElement),p.traverse(bt=>{bt instanceof xn&&(bt.geometry&&bt.geometry.dispose(),bt.material&&(Array.isArray(bt.material)?bt.material.forEach(Lt=>Lt.dispose()):bt.material.dispose()))}),E.dispose(),b.dispose()}},[]);const c=()=>{o.current&&(o.current.listener.context.state==="suspended"&&o.current.listener.context.resume(),o.current.sound.isPlaying||o.current.sound.play()),a(!0)};return Ei.jsxs("div",{className:"relative w-screen h-screen cursor-grab active:cursor-grabbing",children:[Ei.jsx("div",{ref:r,className:"w-full h-full"}),!n&&Ei.jsx("div",{className:"absolute inset-0 bg-black/70 flex justify-center items-center z-10 cursor-pointer backdrop-blur-sm",onClick:c,children:Ei.jsxs("div",{className:"text-center text-white p-8 rounded-lg",children:[Ei.jsx("h2",{className:"text-4xl font-bold mb-4 animate-pulse",style:{textShadow:"0 0 10px #fff, 0 0 20px #ffc, 0 0 30px #ff8c00"},children:"Happy Diwali!"}),Ei.jsx("p",{className:"text-lg",children:"Click or Tap to begin the celebration"})]})}),n&&Ei.jsx("div",{className:"absolute bottom-4 left-4 text-white/50 text-xs font-mono select-none",children:"Drag/Swipe to explore"})]})},oC=()=>Ei.jsx("main",{className:"w-screen h-screen bg-black text-white",children:Ei.jsx(rC,{})}),my=document.getElementById("root");if(!my)throw new Error("Could not find root element to mount to");const lC=LS.createRoot(my);lC.render(Ei.jsx(TS.StrictMode,{children:Ei.jsx(oC,{})}));
