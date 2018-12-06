(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{30:function(e,n,t){"use strict";e.exports=t(31)},31:function(e,n,t){"use strict";
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(32),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var n=arguments.length-1,t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<n;r++)t+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,n,t,r,o,i,u,l){if(!e){if(e=void 0,void 0===n)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,r,o,i,u,l],a=0;(e=Error(n.replace(/%s/g,function(){return c[a++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function _(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||g}function w(){}function S(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,n){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,n,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=_.prototype;var j=S.prototype=new w;j.constructor=S,r(j,_.prototype),j.isPureReactComponent=!0;var O={current:null,currentDispatcher:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,t){var r=void 0,o={},u=null,l=null;if(null!=n)for(r in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(u=""+n.key),n)k.call(n,r)&&!E.hasOwnProperty(r)&&(o[r]=n[r]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var a=Array(c),f=0;f<c;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:O.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g,R=[];function V(e,n,t,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function q(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,n,t){return null==e?0:function e(n,t,r,o){var l=typeof n;"undefined"!==l&&"boolean"!==l||(n=null);var c=!1;if(null===n)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(n.$$typeof){case i:case u:c=!0}}if(c)return r(o,n,""===t?"."+F(n,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(n))for(var a=0;a<n.length;a++){var f=t+F(l=n[a],a);c+=e(l,f,r,o)}else if(f=null===n||"object"!=typeof n?null:"function"==typeof(f=b&&n[b]||n["@@iterator"])?f:null,"function"==typeof f)for(n=f.call(n),a=0;!(l=n.next()).done;)c+=e(l=l.value,f=t+F(l,a++),r,o);else"object"===l&&v("31","[object Object]"==(r=""+n)?"object with keys {"+Object.keys(n).join(", ")+"}":r,"");return c}(e,"",n,t)}function F(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return n[e]})}(e.key):n.toString(36)}function U(e,n){e.func.call(e.context,n,e.count++)}function I(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?M(e,r,t,function(e){return e}):null!=e&&($(e)&&(e=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),r.push(e))}function M(e,n,t,r,o){var i="";null!=t&&(i=(""+t).replace(C,"$&/")+"/"),A(e,I,n=V(n,i,r,o)),q(n)}var T={Children:{map:function(e,n,t){if(null==e)return e;var r=[];return M(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;A(e,U,n=V(null,null,n,t)),q(n)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var n=[];return M(e,n,null,function(e){return e}),n},only:function(e){return $(e)||v("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:S,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:p,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:m,type:e,compare:void 0===n?null:n}},Fragment:l,StrictMode:c,Suspense:d,createElement:P,cloneElement:function(e,n,t){(null===e||void 0===e)&&v("267",e);var o=void 0,u=r({},e.props),l=e.key,c=e.ref,a=e._owner;if(null!=n){void 0!==n.ref&&(c=n.ref,a=O.current),void 0!==n.key&&(l=""+n.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),n)k.call(n,o)&&!E.hasOwnProperty(o)&&(u[o]=void 0===n[o]&&void 0!==f?f[o]:n[o])}if(1===(o=arguments.length-2))u.children=t;else if(1<o){f=Array(o);for(var p=0;p<o;p++)f[p]=arguments[p+2];u.children=f}return{$$typeof:i,type:e.type,key:l,ref:c,props:u,_owner:a}},createFactory:function(e){var n=P.bind(null,e);return n.type=e,n},isValidElement:$,version:"16.6.3",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:O,assign:r}};T.unstable_ConcurrentMode=s,T.unstable_Profiler=a;var D={default:T},N=D&&T||D;e.exports=N.default||N},32:function(e,n,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,u,l=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in t=Object(arguments[c]))o.call(t,a)&&(l[a]=t[a]);if(r){u=r(t);for(var f=0;f<u.length;f++)i.call(t,u[f])&&(l[u[f]]=t[u[f]])}}return l}},47:function(e,n,t){"use strict";t.r(n),t.d(n,"DepthDemo",function(){return p});var r,o,i,u=t(30),l=t(27),c=t.n(l),a=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),f=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a(n,e),n.prototype.render=function(){return u.createElement(u.Fragment,null,u.createElement("section",null,u.createElement("h2",null,"Sample"),u.createElement(d,null,u.createElement(s,{cssVar:"--depth-1"}),u.createElement(s,{cssVar:"--depth-2"}),u.createElement(s,{cssVar:"--depth-3"}),u.createElement(s,{cssVar:"--depth-4"}))))},n}(u.Component),s=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a(n,e),n.prototype.render=function(){var e=this;return u.createElement(u.Fragment,null,u.createElement(m,null,this.props.cssVar),u.createElement(h,{ref:function(n){return y(e.props.cssVar,n)}}))},n}(u.Component),y=function(e,n){return n&&(n.innerHTML='<span class="square" style="box-shadow: var('+e+')"></span><span>'+getComputedStyle(document.body).getPropertyValue(e)+"</span>")},d=c.a.dl(r||(r=f(["\n  display: grid;\n  grid-template-columns: max-content max-content;\n  column-gap: 24px;\n  row-gap: 24px;\n"],["\n  display: grid;\n  grid-template-columns: max-content max-content;\n  column-gap: 24px;\n  row-gap: 24px;\n"]))),m=c.a.dt(o||(o=f(["\n  display: inline-flex;\n  align-items: center;\n"],["\n  display: inline-flex;\n  align-items: center;\n"]))),h=c.a.dd(i||(i=f(["\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n\n  .square {\n    display: inline-block;\n    margin-right: 16px;\n    border-radius: 2px;\n    width: 64px;\n    height: 64px;\n    box-sizing:  border-box;\n  }\n"],["\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n\n  .square {\n    display: inline-block;\n    margin-right: 16px;\n    border-radius: 2px;\n    width: 64px;\n    height: 64px;\n    box-sizing:  border-box;\n  }\n"])));n.default=p}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvUmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL1JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2RlcHRoL2RlcHRoLmRlbW8udHN4Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiayIsIm4iLCJTeW1ib2wiLCJmb3IiLCJwIiwicSIsInIiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJ6IiwiQSIsIkIiLCJDIiwiaXRlcmF0b3IiLCJEIiwiYSIsImIiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJlIiwiYyIsImVuY29kZVVSSUNvbXBvbmVudCIsImQiLCJnIiwiaCIsImYiLCJFcnJvciIsImwiLCJtIiwicmVwbGFjZSIsIm5hbWUiLCJmcmFtZXNUb1BvcCIsImFhIiwiRSIsImlzTW91bnRlZCIsImVucXVldWVGb3JjZVVwZGF0ZSIsImVucXVldWVSZXBsYWNlU3RhdGUiLCJlbnF1ZXVlU2V0U3RhdGUiLCJGIiwiRyIsInRoaXMiLCJwcm9wcyIsImNvbnRleHQiLCJyZWZzIiwidXBkYXRlciIsIkgiLCJJIiwicHJvdG90eXBlIiwiaXNSZWFjdENvbXBvbmVudCIsInNldFN0YXRlIiwiZm9yY2VVcGRhdGUiLCJKIiwiY29uc3RydWN0b3IiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsIksiLCJjdXJyZW50IiwiY3VycmVudERpc3BhdGNoZXIiLCJMIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJNIiwia2V5IiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJOIiwiY2FsbCIsImNoaWxkcmVuIiwiQXJyYXkiLCJkZWZhdWx0UHJvcHMiLCIkJHR5cGVvZiIsInR5cGUiLCJfb3duZXIiLCJPIiwiUCIsIlEiLCJSIiwicG9wIiwicmVzdWx0Iiwia2V5UHJlZml4IiwiZnVuYyIsImNvdW50IiwiUyIsInB1c2giLCJWIiwiVCIsIlUiLCJpc0FycmF5IiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImtleXMiLCJqb2luIiwiPSIsIjoiLCJlc2NhcGUiLCJ0b1N0cmluZyIsImNhIiwiZGEiLCJXIiwiYmEiLCJYIiwiQ2hpbGRyZW4iLCJtYXAiLCJmb3JFYWNoIiwidG9BcnJheSIsIm9ubHkiLCJjcmVhdGVSZWYiLCJDb21wb25lbnQiLCJQdXJlQ29tcG9uZW50IiwiY3JlYXRlQ29udGV4dCIsIl9jYWxjdWxhdGVDaGFuZ2VkQml0cyIsIl9jdXJyZW50VmFsdWUiLCJfY3VycmVudFZhbHVlMiIsIl90aHJlYWRDb3VudCIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJfY29udGV4dCIsImZvcndhcmRSZWYiLCJyZW5kZXIiLCJsYXp5IiwiX2N0b3IiLCJfc3RhdHVzIiwiX3Jlc3VsdCIsIm1lbW8iLCJjb21wYXJlIiwiRnJhZ21lbnQiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJjcmVhdGVFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlRmFjdG9yeSIsImJpbmQiLCJpc1ZhbGlkRWxlbWVudCIsInZlcnNpb24iLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlJlYWN0Q3VycmVudE93bmVyIiwiYXNzaWduIiwidW5zdGFibGVfQ29uY3VycmVudE1vZGUiLCJ1bnN0YWJsZV9Qcm9maWxlciIsIlkiLCJkZWZhdWx0IiwiWiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiaSIsImZyb21DaGFyQ29kZSIsInRlc3QzIiwic3BsaXQiLCJsZXR0ZXIiLCJlcnIiLCJzaG91bGRVc2VOYXRpdmUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmcm9tIiwic3ltYm9scyIsInRvIiwidmFsIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwidG9PYmplY3QiLCJzIiwiRGVwdGhEZW1vIiwiX3N1cGVyIiwiX19leHRlbmRzIiwiUmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIlN0eWxlZERsIiwiVGlsZSIsImNzc1ZhciIsIl90aGlzIiwiU3R5bGVkRHQiLCJTdHlsZWREZCIsInJlZmxlY3RCb3hTaGFkb3ciLCJpbm5lckhUTUwiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0eWxlZF9jb21wb25lbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCIsImRsIiwidGVtcGxhdGVPYmplY3RfMSIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiZHQiLCJ0ZW1wbGF0ZU9iamVjdF8yIiwiZGQiLCJ0ZW1wbGF0ZU9iamVjdF8zIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJtYXBwaW5ncyI6InlGQUdBQSxFQUFBQyxRQUFtQkMsRUFBUTs7Ozs7Ozs7R0NNZCxJQUFBQyxFQUFNRCxFQUFRLElBQWVFLEVBQUEsbUJBQUFDLGVBQUFDLElBQUFDLEVBQUFILEVBQUFDLE9BQUFDLElBQUEsdUJBQUFFLEVBQUFKLEVBQUFDLE9BQUFDLElBQUEsc0JBQUFHLEVBQUFMLEVBQUFDLE9BQUFDLElBQUEsd0JBQUFJLEVBQUFOLEVBQUFDLE9BQUFDLElBQUEsMkJBQUFLLEVBQUFQLEVBQUFDLE9BQUFDLElBQUEsd0JBQUFNLEVBQUFSLEVBQUFDLE9BQUFDLElBQUEsd0JBQUFPLEVBQUFULEVBQUFDLE9BQUFDLElBQUEsdUJBQUFRLEVBQUFWLEVBQUFDLE9BQUFDLElBQUEsK0JBQUFTLEVBQUFYLEVBQUFDLE9BQUFDLElBQUEsMkJBQUFVLEVBQUFaLEVBQUFDLE9BQUFDLElBQUEsd0JBQUFXLEVBQUFiLEVBQUFDLE9BQUFDLElBQUEsY0FDMUMsTUFB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QWVYSyxFQUFBIiwiZmlsZSI6IjkuZDI4ZjQ5ODkyNjBkYjNkMTQ0NjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuNi4xXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgaz1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IscD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLHE9bj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LHI9bj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsdD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCx1PW4/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LHY9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksdz1uP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLHg9bj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLHk9bj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIsej1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxBPW4/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxCPW4/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsQz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gYWEoYSxiLGUsYyxkLGcsaCxmKXtpZighYSl7YT12b2lkIDA7aWYodm9pZCAwPT09YilhPUVycm9yKFwiTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIik7ZWxzZXt2YXIgbD1bZSxjLGQsZyxoLGZdLG09MDthPUVycm9yKGIucmVwbGFjZSgvJXMvZyxmdW5jdGlvbigpe3JldHVybiBsW20rK119KSk7YS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwifWEuZnJhbWVzVG9Qb3A9MTt0aHJvdyBhO319XG5mdW5jdGlvbiBEKGEpe2Zvcih2YXIgYj1hcmd1bWVudHMubGVuZ3RoLTEsZT1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0wO2M8YjtjKyspZSs9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbYysxXSk7YWEoITEsXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgJXMgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLiBcIixlKX12YXIgRT17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sRj17fTtcbmZ1bmN0aW9uIEcoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Rjt0aGlzLnVwZGF0ZXI9ZXx8RX1HLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0cucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YT9EKFwiODVcIik6dm9pZCAwO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07Ry5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gSCgpe31ILnByb3RvdHlwZT1HLnByb3RvdHlwZTtmdW5jdGlvbiBJKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUY7dGhpcy51cGRhdGVyPWV8fEV9dmFyIEo9SS5wcm90b3R5cGU9bmV3IEg7XG5KLmNvbnN0cnVjdG9yPUk7ayhKLEcucHJvdG90eXBlKTtKLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBLPXtjdXJyZW50Om51bGwsY3VycmVudERpc3BhdGNoZXI6bnVsbH0sTD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LE09e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIE4oYSxiLGUpe3ZhciBjPXZvaWQgMCxkPXt9LGc9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoYyBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KSxiKUwuY2FsbChiLGMpJiYhTS5oYXNPd25Qcm9wZXJ0eShjKSYmKGRbY109YltjXSk7dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWQuY2hpbGRyZW49ZTtlbHNlIGlmKDE8Zil7Zm9yKHZhciBsPUFycmF5KGYpLG09MDttPGY7bSsrKWxbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1sfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihjIGluIGY9YS5kZWZhdWx0UHJvcHMsZil2b2lkIDA9PT1kW2NdJiYoZFtjXT1mW2NdKTtyZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEsa2V5OmcscmVmOmgscHJvcHM6ZCxfb3duZXI6Sy5jdXJyZW50fX1cbmZ1bmN0aW9uIGJhKGEsYil7cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBPKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1wfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrKFwiXCIrYSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIFA9L1xcLysvZyxRPVtdO2Z1bmN0aW9uIFIoYSxiLGUsYyl7aWYoUS5sZW5ndGgpe3ZhciBkPVEucG9wKCk7ZC5yZXN1bHQ9YTtkLmtleVByZWZpeD1iO2QuZnVuYz1lO2QuY29udGV4dD1jO2QuY291bnQ9MDtyZXR1cm4gZH1yZXR1cm57cmVzdWx0OmEsa2V5UHJlZml4OmIsZnVuYzplLGNvbnRleHQ6Yyxjb3VudDowfX1cbmZ1bmN0aW9uIFMoYSl7YS5yZXN1bHQ9bnVsbDthLmtleVByZWZpeD1udWxsO2EuZnVuYz1udWxsO2EuY29udGV4dD1udWxsO2EuY291bnQ9MDsxMD5RLmxlbmd0aCYmUS5wdXNoKGEpfVxuZnVuY3Rpb24gVChhLGIsZSxjKXt2YXIgZD10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09ZHx8XCJib29sZWFuXCI9PT1kKWE9bnVsbDt2YXIgZz0hMTtpZihudWxsPT09YSlnPSEwO2Vsc2Ugc3dpdGNoKGQpe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6Zz0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgcDpjYXNlIHE6Zz0hMH19aWYoZylyZXR1cm4gZShjLGEsXCJcIj09PWI/XCIuXCIrVShhLDApOmIpLDE7Zz0wO2I9XCJcIj09PWI/XCIuXCI6YitcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgaD0wO2g8YS5sZW5ndGg7aCsrKXtkPWFbaF07dmFyIGY9YitVKGQsaCk7Zys9VChkLGYsZSxjKX1lbHNlIGlmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGE/Zj1udWxsOihmPUMmJmFbQ118fGFbXCJAQGl0ZXJhdG9yXCJdLGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGY/ZjpudWxsKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksaD1cbjA7IShkPWEubmV4dCgpKS5kb25lOylkPWQudmFsdWUsZj1iK1UoZCxoKyspLGcrPVQoZCxmLGUsYyk7ZWxzZVwib2JqZWN0XCI9PT1kJiYoZT1cIlwiK2EsRChcIjMxXCIsXCJbb2JqZWN0IE9iamVjdF1cIj09PWU/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6ZSxcIlwiKSk7cmV0dXJuIGd9ZnVuY3Rpb24gVihhLGIsZSl7cmV0dXJuIG51bGw9PWE/MDpUKGEsXCJcIixiLGUpfWZ1bmN0aW9uIFUoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoYS5rZXkpOmIudG9TdHJpbmcoMzYpfWZ1bmN0aW9uIGNhKGEsYil7YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKX1cbmZ1bmN0aW9uIGRhKGEsYixlKXt2YXIgYz1hLnJlc3VsdCxkPWEua2V5UHJlZml4O2E9YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKTtBcnJheS5pc0FycmF5KGEpP1coYSxjLGUsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTpudWxsIT1hJiYoTyhhKSYmKGE9YmEoYSxkKyghYS5rZXl8fGImJmIua2V5PT09YS5rZXk/XCJcIjooXCJcIithLmtleSkucmVwbGFjZShQLFwiJCYvXCIpK1wiL1wiKStlKSksYy5wdXNoKGEpKX1mdW5jdGlvbiBXKGEsYixlLGMsZCl7dmFyIGc9XCJcIjtudWxsIT1lJiYoZz0oXCJcIitlKS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpO2I9UihiLGcsYyxkKTtWKGEsZGEsYik7UyhiKX1cbnZhciBYPXtDaGlsZHJlbjp7bWFwOmZ1bmN0aW9uKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBjPVtdO1coYSxjLG51bGwsYixlKTtyZXR1cm4gY30sZm9yRWFjaDpmdW5jdGlvbihhLGIsZSl7aWYobnVsbD09YSlyZXR1cm4gYTtiPVIobnVsbCxudWxsLGIsZSk7VihhLGNhLGIpO1MoYil9LGNvdW50OmZ1bmN0aW9uKGEpe3JldHVybiBWKGEsZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sbnVsbCl9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7dmFyIGI9W107VyhhLGIsbnVsbCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pO3JldHVybiBifSxvbmx5OmZ1bmN0aW9uKGEpe08oYSk/dm9pZCAwOkQoXCIxNDNcIik7cmV0dXJuIGF9fSxjcmVhdGVSZWY6ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX0sQ29tcG9uZW50OkcsUHVyZUNvbXBvbmVudDpJLGNyZWF0ZUNvbnRleHQ6ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjp3LF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLFxuX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp2LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9LGZvcndhcmRSZWY6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnkscmVuZGVyOmF9fSxsYXp5OmZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjpCLF9jdG9yOmEsX3N0YXR1czotMSxfcmVzdWx0Om51bGx9fSxtZW1vOmZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOkEsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fSxGcmFnbWVudDpyLFN0cmljdE1vZGU6dCxTdXNwZW5zZTp6LGNyZWF0ZUVsZW1lbnQ6TixjbG9uZUVsZW1lbnQ6ZnVuY3Rpb24oYSxiLGUpe251bGw9PT1hfHx2b2lkIDA9PT1hP0QoXCIyNjdcIixhKTp2b2lkIDA7dmFyIGM9dm9pZCAwLGQ9ayh7fSxhLnByb3BzKSxnPWEua2V5LGg9YS5yZWYsZj1hLl9vd25lcjtcbmlmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZixmPUsuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpO3ZhciBsPXZvaWQgMDthLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMmJihsPWEudHlwZS5kZWZhdWx0UHJvcHMpO2ZvcihjIGluIGIpTC5jYWxsKGIsYykmJiFNLmhhc093blByb3BlcnR5KGMpJiYoZFtjXT12b2lkIDA9PT1iW2NdJiZ2b2lkIDAhPT1sP2xbY106YltjXSl9Yz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWMpZC5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxjKXtsPUFycmF5KGMpO2Zvcih2YXIgbT0wO208YzttKyspbFttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWx9cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmcscmVmOmgscHJvcHM6ZCxfb3duZXI6Zn19LGNyZWF0ZUZhY3Rvcnk6ZnVuY3Rpb24oYSl7dmFyIGI9Ti5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9LGlzVmFsaWRFbGVtZW50Ok8sdmVyc2lvbjpcIjE2LjYuM1wiLFxuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e1JlYWN0Q3VycmVudE93bmVyOkssYXNzaWduOmt9fTtYLnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlPXg7WC51bnN0YWJsZV9Qcm9maWxlcj11O3ZhciBZPXtkZWZhdWx0Olh9LFo9WSYmWHx8WTttb2R1bGUuZXhwb3J0cz1aLmRlZmF1bHR8fFo7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAnUmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlcHRoRGVtbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGgyPlNhbXBsZTwvaDI+XHJcbiAgICAgIDxTdHlsZWREbD5cclxuICAgICAgICA8VGlsZSBjc3NWYXI9XCItLWRlcHRoLTFcIi8+XHJcbiAgICAgICAgPFRpbGUgY3NzVmFyPVwiLS1kZXB0aC0yXCIvPlxyXG4gICAgICAgIDxUaWxlIGNzc1Zhcj1cIi0tZGVwdGgtM1wiLz5cclxuICAgICAgICA8VGlsZSBjc3NWYXI9XCItLWRlcHRoLTRcIi8+XHJcbiAgICAgIDwvU3R5bGVkRGw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxTdHlsZWREdD57dGhpcy5wcm9wcy5jc3NWYXJ9PC9TdHlsZWREdD5cclxuICAgICAgPFN0eWxlZERkIHJlZj17ZSA9PiByZWZsZWN0Qm94U2hhZG93KHRoaXMucHJvcHMuY3NzVmFyLCBlKX0+PC9TdHlsZWREZD5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVmbGVjdEJveFNoYWRvdyA9IChjc3NWYXI6IHN0cmluZywgZTogYW55KSA9PiBlICYmIChlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInNxdWFyZVwiIHN0eWxlPVwiYm94LXNoYWRvdzogdmFyKCR7Y3NzVmFyfSlcIj48L3NwYW4+PHNwYW4+JHtnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyKX08L3NwYW4+YCk7XHJcblxyXG5jb25zdCBTdHlsZWREbCA9IHN0eWxlZC5kbGBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiAgY29sdW1uLWdhcDogMjRweDtcclxuICByb3ctZ2FwOiAyNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRHQgPSBzdHlsZWQuZHRgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgU3R5bGVkRGQgPSBzdHlsZWQuZGRgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5zcXVhcmUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBib3gtc2l6aW5nOiAgYm9yZGVyLWJveDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXB0aERlbW87Il0sInNvdXJjZVJvb3QiOiIifQ==