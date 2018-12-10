(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{34:function(r,e,t){"use strict";r.exports=t(35)},35:function(r,e,t){"use strict";
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(8),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function b(r){for(var e=arguments.length-1,t="https://reactjs.org/docs/error-decoder.html?invariant="+r,n=0;n<e;n++)t+="&args[]="+encodeURIComponent(arguments[n+1]);!function(r,e,t,n,o,a,c,l){if(!r){if(r=void 0,void 0===e)r=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[t,n,o,a,c,l],u=0;(r=Error(e.replace(/%s/g,function(){return i[u++]}))).name="Invariant Violation"}throw r.framesToPop=1,r}}(!1,"Minified React error #"+r+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function _(r,e,t){this.props=r,this.context=e,this.refs=k,this.updater=t||m}function w(){}function S(r,e,t){this.props=r,this.context=e,this.refs=k,this.updater=t||m}_.prototype.isReactComponent={},_.prototype.setState=function(r,e){"object"!=typeof r&&"function"!=typeof r&&null!=r&&b("85"),this.updater.enqueueSetState(this,r,e,"setState")},_.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")},w.prototype=_.prototype;var x=S.prototype=new w;x.constructor=S,n(x,_.prototype),x.isPureReactComponent=!0;var $={current:null,currentDispatcher:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(r,e,t){var n=void 0,o={},c=null,l=null;if(null!=e)for(n in void 0!==e.ref&&(l=e.ref),void 0!==e.key&&(c=""+e.key),e)P.call(e,n)&&!C.hasOwnProperty(n)&&(o[n]=e[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+2];o.children=u}if(r&&r.defaultProps)for(n in i=r.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:r,key:c,ref:l,props:o,_owner:$.current}}function j(r){return"object"==typeof r&&null!==r&&r.$$typeof===a}var O=/\/+/g,R=[];function A(r,e,t,n){if(R.length){var o=R.pop();return o.result=r,o.keyPrefix=e,o.func=t,o.context=n,o.count=0,o}return{result:r,keyPrefix:e,func:t,context:n,count:0}}function F(r){r.result=null,r.keyPrefix=null,r.func=null,r.context=null,r.count=0,10>R.length&&R.push(r)}function U(r,e,t){return null==r?0:function r(e,t,n,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case c:i=!0}}if(i)return n(o,e,""===t?"."+I(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=t+I(l=e[u],u);i+=r(l,f,n,o)}else if(f=null===e||"object"!=typeof e?null:"function"==typeof(f=v&&e[v]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),u=0;!(l=e.next()).done;)i+=r(l=l.value,f=t+I(l,u++),n,o);else"object"===l&&b("31","[object Object]"==(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}(r,"",e,t)}function I(r,e){return"object"==typeof r&&null!==r&&null!=r.key?function(r){var e={"=":"=0",":":"=2"};return"$"+(""+r).replace(/[=:]/g,function(r){return e[r]})}(r.key):e.toString(36)}function N(r,e){r.func.call(r.context,e,r.count++)}function q(r,e,t){var n=r.result,o=r.keyPrefix;r=r.func.call(r.context,e,r.count++),Array.isArray(r)?M(r,n,t,function(r){return r}):null!=r&&(j(r)&&(r=function(r,e){return{$$typeof:a,type:r.type,key:e,ref:r.ref,props:r.props,_owner:r._owner}}(r,o+(!r.key||e&&e.key===r.key?"":(""+r.key).replace(O,"$&/")+"/")+t)),n.push(r))}function M(r,e,t,n,o){var a="";null!=t&&(a=(""+t).replace(O,"$&/")+"/"),U(r,q,e=A(e,a,n,o)),F(e)}var T={Children:{map:function(r,e,t){if(null==r)return r;var n=[];return M(r,n,null,e,t),n},forEach:function(r,e,t){if(null==r)return r;U(r,N,e=A(null,null,e,t)),F(e)},count:function(r){return U(r,function(){return null},null)},toArray:function(r){var e=[];return M(r,e,null,function(r){return r}),e},only:function(r){return j(r)||b("143"),r}},createRef:function(){return{current:null}},Component:_,PureComponent:S,createContext:function(r,e){return void 0===e&&(e=null),(r={$$typeof:s,_calculateChangedBits:e,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:r},r.Consumer=r},forwardRef:function(r){return{$$typeof:d,render:r}},lazy:function(r){return{$$typeof:g,_ctor:r,_status:-1,_result:null}},memo:function(r,e){return{$$typeof:h,type:r,compare:void 0===e?null:e}},Fragment:l,StrictMode:i,Suspense:y,createElement:E,cloneElement:function(r,e,t){null==r&&b("267",r);var o=void 0,c=n({},r.props),l=r.key,i=r.ref,u=r._owner;if(null!=e){void 0!==e.ref&&(i=e.ref,u=$.current),void 0!==e.key&&(l=""+e.key);var f=void 0;for(o in r.type&&r.type.defaultProps&&(f=r.type.defaultProps),e)P.call(e,o)&&!C.hasOwnProperty(o)&&(c[o]=void 0===e[o]&&void 0!==f?f[o]:e[o])}if(1===(o=arguments.length-2))c.children=t;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];c.children=f}return{$$typeof:a,type:r.type,key:l,ref:i,props:c,_owner:u}},createFactory:function(r){var e=E.bind(null,r);return e.type=r,e},isValidElement:j,version:"16.6.3",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:$,assign:n}};T.unstable_ConcurrentMode=p,T.unstable_Profiler=u;var D={default:T},V=D&&T||D;r.exports=V.default||V},56:function(r,e,t){var n=t(57);"string"==typeof n&&(n=[[r.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(n,o);n.locals&&(r.exports=n.locals)},57:function(r,e,t){(r.exports=t(5)(!1)).push([r.i,".tg {\r\n  width: var(--tg-track-width);\r\n  height: var(--tg-track-height);\r\n  margin: 0;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.tg::-ms-check {\r\n  opacity: 0; /* Edge checkbox would leak outside the track by 0.1px */\r\n}\r\n\r\n.tg-label {\r\n  margin-left: calc(var(--tg-track-width) * -1);\r\n  padding-left: calc(var(--tg-track-width) + var(--tg-track-label-gutter));\r\n  height: var(--tg-track-height);\r\n  font: var(--tg-label-font);\r\n  letter-spacing: var(--tg-label-letter-spacing);\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.tg-label::before { /* track */\r\n  background-color: var(--tg-off-track-bg-rest);\r\n  content: '';\r\n  position: absolute;\r\n  width: var(--tg-track-width);\r\n  left: 0;\r\n  height: 100%;\r\n  border: 1px solid var(--tg-off-track-border-rest);\r\n  border-radius: calc(var(--tg-track-height) / 2);\r\n  box-sizing: border-box;\r\n  transition: all var(--tg-transition-duration);\r\n}\r\n\r\n.tg-label:hover::before { /* track */\r\n  border: 1px solid var(--tg-off-track-border-hover);\r\n}\r\n\r\n.tg-label::after { /* knob */\r\n  background-color: var(--tg-off-knob-bg);\r\n  content: '';\r\n  position: absolute;\r\n  width: var(--tg-knob-diameter);\r\n  height: var(--tg-knob-diameter);\r\n  left: var(--tg-track-gutter);\r\n  top: var(--tg-track-gutter);\r\n  border-radius: 50%;\r\n  transition: all var(--tg-transition-duration);\r\n}\r\n\r\n.tg:checked+.tg-label::before { /* track */\r\n  background-color: var(--tg-on-track-bg-rest);\r\n  border-color: var(--tg-on-track-border-rest);\r\n}\r\n\r\n.tg:checked+.tg-label::after { /* knob */\r\n  transform: translateX(var(--tg-knob-translate));\r\n  background-color: var(--tg-on-knob-bg);\r\n}",""])},67:function(r,e,t){"use strict";t.r(e),t.d(e,"ToggleDemo",function(){return c});var n,o=t(34),a=(t(56),n=function(r,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)},function(r,e){function t(){this.constructor=r}n(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),c=function(r){function e(e){var t=r.call(this,e)||this;return t.onCheck=function(){t.setState({checked:!t.state.checked})},t.state={checked:!1},t}return a(e,r),e.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement("section",null,o.createElement("h2",{className:"lab-demo-h2"},"Sample"),o.createElement("input",{id:"tg-demo",type:"checkbox",className:"tg",checked:this.state.checked,onChange:this.onCheck}),o.createElement("label",{htmlFor:"tg-demo",className:"tg-label"},this.state.checked?"on":"off")))},e}(o.Component);e.default=c}}]);