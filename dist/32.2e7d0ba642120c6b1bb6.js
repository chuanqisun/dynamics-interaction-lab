(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"DemoBrowser",function(){return u});var r,a=n(0),o=n(34),l=n(12),c=n(10),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return a.createElement("div",{className:"lab-demo-browser"},a.createElement("nav",{className:"lab-demo-browser__nav"},a.createElement(o.a,{className:"lab-link lab-link--vertical-list",activeClassName:"lab-link--active",exact:!0,to:"/"},"Lab home"),a.createElement("br",null),c.b.filter(function(e){return"style"===e.type}).map(function(e){return a.createElement(o.a,{key:e.route,className:"lab-link lab-link--vertical-list",activeClassName:"lab-link--active",to:e.route},e.name)}),a.createElement("br",null),c.b.filter(function(e){return"component"===e.type}).map(function(e){return a.createElement(o.a,{key:e.route,className:"lab-link lab-link--vertical-list",activeClassName:"lab-link--active",to:e.route},e.name)})),a.createElement("div",{className:"lab-demo-browser__content"},c.b.map(function(e){return a.createElement(l.a,{key:e.route,path:e.route,component:function(){return a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",src:"/embed"+e.route})}})})))},t}(a.Component);t.default=u}}]);