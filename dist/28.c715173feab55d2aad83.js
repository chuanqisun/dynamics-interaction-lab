(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"BusinessProcessExperiment",function(){return O});var o,a,r=t(35),l=t(37),i=t(41),c=t(45),s=t(42),m=t(50),d=t(43),p=t(46),f=t(47),u=t(51),x=t(53),b=t(54),v=t(55),h=t(56),g=t(57),w=t(58),y=(o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),E=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},S=function(){return(S=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},N=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&(t[o[a]]=e[o[a]])}return t},O=function(e){function n(n){var t=e.call(this,n)||this;return t.onSelectStage=function(e){return t.setState({userSelectedIndex:e===t.state.userSelectedIndex?null:e})},t.onCompleteStage=function(){var e=Math.min(t.state.stages.length,t.state.recordAtIndex+1),n=e<t.state.stages.length?e:null;t.setState({recordAtIndex:e,userSelectedIndex:n})},t.onMoveRecordToStage=function(e){return t.setState({recordAtIndex:e})},t.state={selectedTabId:"0",stages:[{name:"Screen"},{name:"Qualify"},{name:"Develop"},{name:"Connect"},{name:"Propose"},{name:"Close"},{name:"Archive"}],userSelectedIndex:2,recordAtIndex:2,onSelectStage:t.onSelectStage,onCompleteStage:t.onCompleteStage,onMoveRecordToStage:t.onMoveRecordToStage},t}return y(n,e),n.prototype.render=function(){var e=this,n=this.state,t=(n.selectedTabId,N(n,["selectedTabId"]));return r.createElement(P,null,r.createElement("div",{className:"top"},r.createElement(i.a,S({},c.appShellDemoProps))),r.createElement("div",{className:"bottom"},r.createElement("div",{className:"bottom-left"},r.createElement(s.a,S({},m.sideNavDemoProps))),r.createElement("div",{className:"bottom-right"},r.createElement("div",{className:"bottom-right-top"},r.createElement("div",{className:"command-bar-container"},r.createElement(x.a,{className:"mock-command-bar"})),r.createElement(d.a,S({inlineModeBreakpoint:"600px"},p.formHeaderDemoProps))),r.createElement("div",{className:"bottom-right-bottom"},r.createElement("div",{className:"form-left"},r.createElement("div",{className:"tabs-container"},f.formTabsDemoProps.tabs.map(function(n){return r.createElement("button",{key:n.id,className:"tab"+(n.id===e.state.selectedTabId?" tab--selected":"")},n.name)})),r.createElement("div",{className:"form-tab"},r.createElement("div",{className:"form-section"},r.createElement(b.a,null)),r.createElement("div",{className:"form-section"},r.createElement(w.a,null)),r.createElement("div",{className:"form-section"},r.createElement(v.a,null)),r.createElement("div",{className:"form-section"},r.createElement(h.a,null)),r.createElement("div",{className:"form-section"},r.createElement(g.a,null)))),r.createElement("div",{className:"form-right"},r.createElement("h1",{className:"process-title"},"Lead to opportunity process"),r.createElement(u.BusinessProcessFlow,S({},t)))))))},n}(r.Component),P=l.a.div(a||(a=E(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  .top {\n    flex: 0 0 auto;\n  }\n\n  .bottom {\n    flex: 1 1 auto;\n  }\n\n  .bottom {\n    display: flex;\n  }\n  \n  .bottom-left {\n    flex: 0 0 auto;\n    position: relative;\n  }\n\n  .bottom-right {\n    flex: 1 1 auto;\n    overflow: auto;\n    width: 100%;\n  }\n\n  .bottom-right-top {\n    position: sticky;\n    top: 0;\n    z-index: 600;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .bottom-right-bottom {\n    flex: 1 1 auto;\n    overflow: hidden;\n    display: flex;\n  }\n\n  .command-bar-container {\n    overflow: hidden;\n  }\n\n  .mock-command-bar {\n    display: block;\n  }\n\n  .form-left {\n    flex: 1 0 auto;\n  }\n\n  .form-right {\n    flex: 0 0 300px;\n    width: 300px;\n    padding: 16px 20px 0 8px;\n  }\n\n  .form-tab {\n    padding: 20px;\n    column-gap: 20px;\n  }\n\n  @media screen and (min-width: 1400px) {\n    .form-tab {\n      column-count: 2;\n    }\n  }\n  \n  @media screen and (min-width: 1880px) {\n    .form-tab {\n      column-count: 3;\n    }\n  }\n\n  .form-section {\n    border: 1px solid #CBCBCB;\n    margin-bottom: 20px;\n    break-inside: avoid-column;\n  }\n\n  .process-title {\n    font: var(--fw-semibold) var(--scale-20)/var(--scale-24) var(--ff-segoe-ui);\n    margin: 0 0 20px 0;\n  }\n\n  .tabs-container {\n    padding: 16px 20px 0 20px;\n    white-space: nowrap;\n  }\n\n"],["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  .top {\n    flex: 0 0 auto;\n  }\n\n  .bottom {\n    flex: 1 1 auto;\n  }\n\n  .bottom {\n    display: flex;\n  }\n  \n  .bottom-left {\n    flex: 0 0 auto;\n    position: relative;\n  }\n\n  .bottom-right {\n    flex: 1 1 auto;\n    overflow: auto;\n    width: 100%;\n  }\n\n  .bottom-right-top {\n    position: sticky;\n    top: 0;\n    z-index: 600;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .bottom-right-bottom {\n    flex: 1 1 auto;\n    overflow: hidden;\n    display: flex;\n  }\n\n  .command-bar-container {\n    overflow: hidden;\n  }\n\n  .mock-command-bar {\n    display: block;\n  }\n\n  .form-left {\n    flex: 1 0 auto;\n  }\n\n  .form-right {\n    flex: 0 0 300px;\n    width: 300px;\n    padding: 16px 20px 0 8px;\n  }\n\n  .form-tab {\n    padding: 20px;\n    column-gap: 20px;\n  }\n\n  @media screen and (min-width: 1400px) {\n    .form-tab {\n      column-count: 2;\n    }\n  }\n  \n  @media screen and (min-width: 1880px) {\n    .form-tab {\n      column-count: 3;\n    }\n  }\n\n  .form-section {\n    border: 1px solid #CBCBCB;\n    margin-bottom: 20px;\n    break-inside: avoid-column;\n  }\n\n  .process-title {\n    font: var(--fw-semibold) var(--scale-20)/var(--scale-24) var(--ff-segoe-ui);\n    margin: 0 0 20px 0;\n  }\n\n  .tabs-container {\n    padding: 16px 20px 0 20px;\n    white-space: nowrap;\n  }\n\n"])));n.default=O}}]);