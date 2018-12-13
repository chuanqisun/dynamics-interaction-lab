(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{34:function(e,t,n){"use strict";e.exports=n(35)},35:function(e,t,n){"use strict";
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(8),o="function"==typeof Symbol&&Symbol.for,l=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,l,c,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,l,c,a],i=0;(e=Error(t.replace(/%s/g,function(){return u[i++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function _(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||b}function x(){}function S(e,t,n){this.props=e,this.context=t,this.refs=E,this.updater=n||b}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=_.prototype;var k=S.prototype=new x;k.constructor=S,r(k,_.prototype),k.isPureReactComponent=!0;var w={current:null,currentDispatcher:null},$=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,o={},c=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)$.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:l,type:e,key:c,ref:a,props:o,_owner:w.current}}function V(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var j=/\/+/g,O=[];function R(e,t,n,r){if(O.length){var o=O.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var u=!1;if(null===t)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case l:case c:u=!0}}if(u)return r(o,t,""===n?"."+q(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var i=0;i<t.length;i++){var s=n+q(a=t[i],i);u+=e(a,s,r,o)}else if(s=null===t||"object"!=typeof t?null:"function"==typeof(s=g&&t[g]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),i=0;!(a=t.next()).done;)u+=e(a=a.value,s=n+q(a,i++),r,o);else"object"===a&&v("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,function(e){return e}):null!=e&&(V(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var l="";null!=n&&(l=(""+n).replace(j,"$&/")+"/"),A(e,U,t=R(t,l,r,o)),T(t)}var M={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,F,t=R(null,null,t,n)),T(t)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return V(e)||v("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},Fragment:a,StrictMode:u,Suspense:m,createElement:P,cloneElement:function(e,t,n){null==e&&v("267",e);var o=void 0,c=r({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,i=w.current),void 0!==t.key&&(a=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)$.call(t,o)&&!C.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){s=Array(o);for(var f=0;f<o;f++)s[f]=arguments[f+2];c.children=s}return{$$typeof:l,type:e.type,key:a,ref:u,props:c,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:V,version:"16.6.3",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:r}};M.unstable_ConcurrentMode=p,M.unstable_Profiler=i;var I={default:M},z=I&&M||I;e.exports=z.default||z},67:function(e,t,n){"use strict";n.r(t),n.d(t,"ColorDemo",function(){return f});var r,o,l,c,a=n(34),u=n(36),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},f=function(e){function t(t){var n=e.call(this,t)||this;return n.onThemeChange=function(e){var t=e.target.value;document.body.dataset.theme=t,n.setState({selectedTheme:t})},n.state={selectedTheme:document.body.dataset.theme},n}return i(t,e),t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement("section",null,a.createElement("h2",{className:"lab-demo-h2"},"Sample"),a.createElement("section",null,a.createElement("h3",null,"Static colors"),a.createElement(m,null,a.createElement(p,{cssVar:"--color-grey-10"}),a.createElement(p,{cssVar:"--color-grey-20"}),a.createElement(p,{cssVar:"--color-grey-30"}),a.createElement(p,{cssVar:"--color-grey-40"}),a.createElement(p,{cssVar:"--color-grey-50"}),a.createElement(p,{cssVar:"--color-grey-60"}),a.createElement(p,{cssVar:"--color-grey-90"}),a.createElement(p,{cssVar:"--color-grey-130"}),a.createElement(p,{cssVar:"--color-grey-150"}),a.createElement(p,{cssVar:"--color-grey-160"}),a.createElement(p,{cssVar:"--color-grey-190"}))),a.createElement("section",null,a.createElement("h3",null,"Theme colors"),a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},a.createElement("fieldset",null,a.createElement("legend",null,"Choose a theme"),a.createElement("label",null,a.createElement("input",{type:"radio",name:"theme",value:"digital-blue",checked:"digital-blue"===this.state.selectedTheme,onChange:this.onThemeChange}),"Digital blue"))),a.createElement(m,null,a.createElement(p,{cssVar:"--color-primary"}),a.createElement(p,{cssVar:"--color-primary-contrast"})))))},t}(a.Component),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this;return a.createElement(a.Fragment,null,a.createElement(d,null,this.props.cssVar),a.createElement(h,{ref:function(t){return y(e.props.cssVar,t)}}))},t}(a.Component),y=function(e,t){return t&&(t.innerHTML='<span class="square" style="background: var('+e+')"></span><span>'+getComputedStyle(document.body).getPropertyValue(e)+"</span>")},m=u.a.dl(o||(o=s(["\n  display: grid;\n  grid-template-columns: max-content max-content;\n  column-gap: 16px;\n"],["\n  display: grid;\n  grid-template-columns: max-content max-content;\n  column-gap: 16px;\n"]))),d=u.a.dt(l||(l=s(["\n  display: inline-flex;\n  align-items: center;\n"],["\n  display: inline-flex;\n  align-items: center;\n"]))),h=u.a.dd(c||(c=s(["\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n\n  .square {\n    display: inline-block;\n    margin-right: 4px;\n    width: 16px;\n    height: 16px;\n    box-sizing:  border-box;\n    border: 2px solid black;\n  }\n"],["\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n\n  .square {\n    display: inline-block;\n    margin-right: 4px;\n    width: 16px;\n    height: 16px;\n    box-sizing:  border-box;\n    border: 2px solid black;\n  }\n"])));t.default=f}}]);