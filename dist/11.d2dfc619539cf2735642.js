(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,n,r){"use strict";r.r(n),r.d(n,"BusinessProcessFlow",function(){return f}),r.d(n,"BusinessProcessExperiment",function(){return b});var t,o,a,i,c=r(35),l=r(37),s=r(38),p=(r(39),t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(e,n)},function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),u=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},d=function(){return(d=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},f=function(e){return c.createElement(m,{className:e.className},e.stages.map(function(n,r){return c.createElement(c.Fragment,{key:r},c.createElement("button",{onClick:function(){return e.onSelectStage(r)},className:["node",r===e.userSelectedIndex?" node--user-selected":"",r===e.recordAtIndex?" node--record-at":"",r<e.recordAtIndex?" node--record-competed":""].join("")},r<e.recordAtIndex&&c.createElement("span",{className:"node__checkmark mdl2"},s.a.CheckMark),c.createElement("span",{className:"node__stage-name"},n.name)),r<e.stages.length-1?c.createElement("div",{className:"progress-bar"}):null)}))},b=function(e){function n(n){var r=e.call(this,n)||this;return r.onSelectStage=function(e){return r.setState({userSelectedIndex:e===r.state.userSelectedIndex?null:e})},r.rollBackStage=function(){return r.setState({recordAtIndex:Math.max(0,r.state.recordAtIndex-1)})},r.advanceStage=function(){return r.setState({recordAtIndex:Math.min(r.state.stages.length,r.state.recordAtIndex+1)})},r.onCompleteStage=function(){var e=Math.min(r.state.stages.length,r.state.recordAtIndex+1),n=e<r.state.stages.length?e:null;r.setState({recordAtIndex:e,userSelectedIndex:n})},r.onMoveRecordToStage=function(e){return r.setState({recordAtIndex:e})},r.state={stages:[{name:"Screen"},{name:"Qualify"},{name:"Develop"},{name:"Connect"},{name:"Propose"},{name:"Close"},{name:"Archive"}],userSelectedIndex:2,recordAtIndex:2,onSelectStage:r.onSelectStage,onCompleteStage:r.onCompleteStage,onMoveRecordToStage:r.onMoveRecordToStage},r}return p(n,e),n.prototype.render=function(){return c.createElement(g,null,c.createElement("h2",null,"Sample"),c.createElement(f,d({},this.state)),c.createElement("h2",null,"Design notes"),c.createElement("li",null,c.createElement("button",{onClick:this.rollBackStage},"Roll back stage"),c.createElement("button",{onClick:this.advanceStage},"Advance stage")),c.createElement("li",null,null===this.state.userSelectedIndex?"User is not viewing any stage":"User is viewing "+this.state.stages[this.state.userSelectedIndex].name),c.createElement("li",null,this.state.recordAtIndex<this.state.stages.length?'Record is at "'+this.state.stages[this.state.recordAtIndex].name+'"':"Record has finished all stages"))},n}(c.Component),x=Object(l.b)(o||(o=u(["\n  0% {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(34, 102, 227, 0.8);\n  }\n  35% {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 10px rgba(34, 102, 227, 0);\n  }\n  100% {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(34, 102, 227, 0);\n  }\n"],["\n  0% {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(34, 102, 227, 0.8);\n  }\n  35% {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 10px rgba(34, 102, 227, 0);\n  }\n  100% {\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(34, 102, 227, 0);\n  }\n"]))),g=l.a.section(a||(a=u(["\n  padding: 24px;\n"],["\n  padding: 24px;\n"]))),m=l.a.nav(i||(i=u(["\n  --brand-primary: #2266E3;\n  --material-shadow-d1: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n  --material-shadow-d2: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  --material-shadow-d3: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n  \n  display: flex;\n  align-items: center;\n\n  .progress-bar {\n    max-width: 120px;\n    flex: 1 0 20px;\n    height: 2px;\n    margin: 0 -2px;\n    background-color: var(--brand-primary);\n  }\n\n  .node {\n    --border-fg: transparent;\n    --checkmark-fg: white;\n    --checkmark-bg: var(--brand-primary);\n    --full-bg: white;\n    --stage-name-padding: 0 8px;\n    --text-color: var(--brand-primary);\n\n    appearance: none;\n    background-color: var(--full-bg);\n    border: none;\n    border-radius: 12px;\n    box-shadow: var(--material-shadow-d3);\n    cursor: pointer;\n    display: flex;\n    height: 24px;\n    outline: none; /* to be replaced by focus-visible */\n    padding: 0;\n    position: relative;\n    white-space: nowrap;\n    transition: all 200ms;\n  }\n\n  .node--record-at {\n    --border-fg: var(--brand-primary);\n  }\n\n  .node--record-at .node__stage-name {\n    animation: "," 4000ms infinite;\n  }\n\n  .node--record-competed {\n    .node__checkmark {\n      background-color: var(--checkmark-bg);\n    }\n  }\n\n  .node--user-selected {\n    --full-bg: var(--brand-primary);\n    --text-color: white;\n  }\n\n  .node__checkmark {\n    color: var(--checkmark-fg);\n    display: inline-block;\n    height: 24px;\n    width: 24px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 12px 0 0 12px;\n  }\n\n  .node__stage-name {\n    color: var(--text-color);\n    font: var(--fw-semibold) var(--scale-14)/var(--scale-14) var(--ff-segoe-ui);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid var(--border-fg);\n    height: 24px;\n    box-sizing: border-box;\n    border-radius: 12px;\n    padding: var(--stage-name-padding);\n  }\n"],["\n  --brand-primary: #2266E3;\n  --material-shadow-d1: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n  --material-shadow-d2: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\n  --material-shadow-d3: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n  \n  display: flex;\n  align-items: center;\n\n  .progress-bar {\n    max-width: 120px;\n    flex: 1 0 20px;\n    height: 2px;\n    margin: 0 -2px;\n    background-color: var(--brand-primary);\n  }\n\n  .node {\n    --border-fg: transparent;\n    --checkmark-fg: white;\n    --checkmark-bg: var(--brand-primary);\n    --full-bg: white;\n    --stage-name-padding: 0 8px;\n    --text-color: var(--brand-primary);\n\n    appearance: none;\n    background-color: var(--full-bg);\n    border: none;\n    border-radius: 12px;\n    box-shadow: var(--material-shadow-d3);\n    cursor: pointer;\n    display: flex;\n    height: 24px;\n    outline: none; /* to be replaced by focus-visible */\n    padding: 0;\n    position: relative;\n    white-space: nowrap;\n    transition: all 200ms;\n  }\n\n  .node--record-at {\n    --border-fg: var(--brand-primary);\n  }\n\n  .node--record-at .node__stage-name {\n    animation: "," 4000ms infinite;\n  }\n\n  .node--record-competed {\n    .node__checkmark {\n      background-color: var(--checkmark-bg);\n    }\n  }\n\n  .node--user-selected {\n    --full-bg: var(--brand-primary);\n    --text-color: white;\n  }\n\n  .node__checkmark {\n    color: var(--checkmark-fg);\n    display: inline-block;\n    height: 24px;\n    width: 24px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 12px 0 0 12px;\n  }\n\n  .node__stage-name {\n    color: var(--text-color);\n    font: var(--fw-semibold) var(--scale-14)/var(--scale-14) var(--ff-segoe-ui);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid var(--border-fg);\n    height: 24px;\n    box-sizing: border-box;\n    border-radius: 12px;\n    padding: var(--stage-name-padding);\n  }\n"])),x);n.default=b},35:function(e,n,r){"use strict";e.exports=r(36)},36:function(e,n,r){"use strict";
/** @license React v16.7.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r(8),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.concurrent_mode"):60111,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,x=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=0;t<n;t++)r+="&args[]="+encodeURIComponent(arguments[t+1]);!function(e,n,r,t,o,a,i,c){if(!e){if(e=void 0,void 0===n)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,t,o,a,i,c],s=0;(e=Error(n.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function k(e,n,r){this.props=e,this.context=n,this.refs=v,this.updater=r||y}function w(){}function S(e,n,r){this.props=e,this.context=n,this.refs=v,this.updater=r||y}k.prototype.isReactComponent={},k.prototype.setState=function(e,n){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,n,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=k.prototype;var _=S.prototype=new w;_.constructor=S,t(_,k.prototype),_.isPureReactComponent=!0;var E={current:null,currentDispatcher:null},I=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,n,r){var t=void 0,o={},i=null,c=null;if(null!=n)for(t in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(i=""+n.key),n)I.call(n,t)&&!j.hasOwnProperty(t)&&(o[t]=n[t]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===o[t]&&(o[t]=l[t]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:E.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,$=[];function O(e,n,r,t){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=n,o.func=r,o.context=t,o.count=0,o}return{result:e,keyPrefix:n,func:r,context:t,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function M(e,n,r){return null==e?0:function e(n,r,t,o){var c=typeof n;"undefined"!==c&&"boolean"!==c||(n=null);var l=!1;if(null===n)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(n.$$typeof){case a:case i:l=!0}}if(l)return t(o,n,""===r?"."+N(n,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(n))for(var s=0;s<n.length;s++){var p=r+N(c=n[s],s);l+=e(c,p,t,o)}else if(p=null===n||"object"!=typeof n?null:"function"==typeof(p=m&&n[m]||n["@@iterator"])?p:null,"function"==typeof p)for(n=p.call(n),s=0;!(c=n.next()).done;)l+=e(c=c.value,p=r+N(c,s++),t,o);else"object"===c&&h("31","[object Object]"==(t=""+n)?"object with keys {"+Object.keys(n).join(", ")+"}":t,"");return l}(e,"",n,r)}function N(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return n[e]})}(e.key):n.toString(36)}function U(e,n){e.func.call(e.context,n,e.count++)}function F(e,n,r){var t=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?T(e,t,r,function(e){return e}):null!=e&&(A(e)&&(e=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),t.push(e))}function T(e,n,r,t,o){var a="";null!=r&&(a=(""+r).replace(C,"$&/")+"/"),M(e,F,n=O(n,a,t,o)),R(n)}var B={Children:{map:function(e,n,r){if(null==e)return e;var t=[];return T(e,t,null,n,r),t},forEach:function(e,n,r){if(null==e)return e;M(e,U,n=O(null,null,n,r)),R(n)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var n=[];return T(e,n,null,function(e){return e}),n},only:function(e){return A(e)||h("143"),e}},createRef:function(){return{current:null}},Component:k,PureComponent:S,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:u,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:x,type:e,compare:void 0===n?null:n}},Fragment:c,StrictMode:l,Suspense:b,createElement:P,cloneElement:function(e,n,r){null==e&&h("267",e);var o=void 0,i=t({},e.props),c=e.key,l=e.ref,s=e._owner;if(null!=n){void 0!==n.ref&&(l=n.ref,s=E.current),void 0!==n.key&&(c=""+n.key);var p=void 0;for(o in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),n)I.call(n,o)&&!j.hasOwnProperty(o)&&(i[o]=void 0===n[o]&&void 0!==p?p[o]:n[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){p=Array(o);for(var u=0;u<o;u++)p[u]=arguments[u+2];i.children=p}return{$$typeof:a,type:e.type,key:c,ref:l,props:i,_owner:s}},createFactory:function(e){var n=P.bind(null,e);return n.type=e,n},isValidElement:A,version:"16.7.0",unstable_ConcurrentMode:d,unstable_Profiler:s,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:E,assign:t}},q={default:B},D=q&&B||q;e.exports=D.default||D},39:function(e,n,r){var t=r(40);"string"==typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(6)(t,o);t.locals&&(e.exports=t.locals)},40:function(e,n,r){(e.exports=r(5)(!1)).push([e.i,".btn {\r\n  border-radius: var(--btn-border-radius);\r\n  border: none;\r\n  height: var(--btn-height);\r\n  font: var(--btn-font);\r\n  letter-spacing: var(--btn-letter-spacing);\r\n  padding: 0 var(--btn-padding-side);\r\n  box-shadow: var(--btn-shadow-rest);\r\n}\r\n\r\n.btn:hover {\r\n  box-shadow: var(--btn-shadow-hover);\r\n}\r\n\r\n.btn--primary {\r\n  color: var(--btn-primary-fg-rest);\r\n  background-color: var(--btn-primary-bg-rest);\r\n}\r\n\r\n.btn--primary:hover {\r\n  color: var(--btn-primary-fg-hover);\r\n  background-color: var(--btn-primary-bg-hover);\r\n}\r\n\r\n.btn--secondary {\r\n  color: var(--btn-secondary-fg-rest);\r\n  background-color: var(--btn-secondary-bg-rest);\r\n}\r\n\r\n.btn--secondary:hover {\r\n  color: var(--btn-secondary-fg-hover);\r\n  background-color: var(--btn-secondary-bg-hover);\r\n}",""])}}]);