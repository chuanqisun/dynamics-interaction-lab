(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,n,r){"use strict";r.r(n),r.d(n,"BusinessProcessFlow",function(){return g}),r.d(n,"BusinessProcessExperiment",function(){return b});var t,a,o,c=r(0),s=r(35),d=(r(37),r(36)),l=(t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(e,n)},function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),i=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},p=function(){return(p=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},g=function(e){return c.createElement(m,{className:e.className},e.stages.map(function(n,r){return c.createElement(c.Fragment,{key:r},c.createElement("button",{onClick:function(){return e.onSelectStage(r)},className:["node",r===e.userSelectedIndex?" node--user-selected":"",r===e.recordAtIndex?" node--record-at":"",r<e.recordAtIndex?" node--record-competed":""].join("")},r<e.recordAtIndex&&c.createElement("span",{className:"node__checkmark mdl2"},d.a.CheckMark),c.createElement("span",{className:"node__stage-name"},n.name)),r<e.stages.length-1?c.createElement("div",{className:"progress-bar"}):null)}))},b=function(e){function n(n){var r=e.call(this,n)||this;return r.onSelectStage=function(e){return r.setState({userSelectedIndex:e===r.state.userSelectedIndex?null:e})},r.rollBackStage=function(){return r.setState({recordAtIndex:Math.max(0,r.state.recordAtIndex-1)})},r.advanceStage=function(){return r.setState({recordAtIndex:Math.min(r.state.stages.length,r.state.recordAtIndex+1)})},r.onCompleteStage=function(){var e=Math.min(r.state.stages.length,r.state.recordAtIndex+1),n=e<r.state.stages.length?e:null;r.setState({recordAtIndex:e,userSelectedIndex:n})},r.onMoveRecordToStage=function(e){return r.setState({recordAtIndex:e})},r.state={stages:[{name:"Screen"},{name:"Qualify"},{name:"Develop"},{name:"Connect"},{name:"Propose"},{name:"Close"},{name:"Archive"}],userSelectedIndex:2,recordAtIndex:2,onSelectStage:r.onSelectStage,onCompleteStage:r.onCompleteStage,onMoveRecordToStage:r.onMoveRecordToStage},r}return l(n,e),n.prototype.render=function(){return c.createElement(u,null,c.createElement("h2",null,"Sample"),c.createElement(g,p({},this.state)),c.createElement("h2",null,"Design notes"),c.createElement("li",null,c.createElement("button",{onClick:this.rollBackStage},"Roll back stage"),c.createElement("button",{onClick:this.advanceStage},"Advance stage")),c.createElement("li",null,null===this.state.userSelectedIndex?"User is not viewing any stage":"User is viewing "+this.state.stages[this.state.userSelectedIndex].name),c.createElement("li",null,this.state.recordAtIndex<this.state.stages.length?'Record is at "'+this.state.stages[this.state.recordAtIndex].name+'"':"Record has finished all stages"))},n}(c.Component),u=s.a.section(a||(a=i(["\n  padding: 24px;\n"],["\n  padding: 24px;\n"]))),m=s.a.nav(o||(o=i(["\n  --brand-primary: #2266e3;\n  --material-shadow-d1: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d2: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d3: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n\n  display: flex;\n\n  .node {\n    --border-fg: transparent;\n    --checkmark-fg: white;\n    --checkmark-bg: var(--brand-primary);\n    --full-bg: white;\n    --text-color: var(--brand-primary);\n\n    appearance: none;\n    border: 2px solid var(--border-fg);\n    background-color: var(--full-bg);\n    outline: none; /* to be replaced by focus-visible */\n  }\n\n  .node--record-at {\n    --border-fg: var(--brand-primary);\n  }\n\n  .node--record-competed {\n    .node__checkmark {\n      background-color: var(--checkmark-bg);\n    }\n  }\n\n  .node--user-selected {\n    --full-bg: var(--brand-primary);\n    --text-color: white;\n  }\n\n  .node__checkmark {\n    color: var(--checkmark-fg);\n  }\n\n  .node__stage-name {\n    color: var(--text-color);\n  }\n"],["\n  --brand-primary: #2266e3;\n  --material-shadow-d1: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d2: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d3: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n\n  display: flex;\n\n  .node {\n    --border-fg: transparent;\n    --checkmark-fg: white;\n    --checkmark-bg: var(--brand-primary);\n    --full-bg: white;\n    --text-color: var(--brand-primary);\n\n    appearance: none;\n    border: 2px solid var(--border-fg);\n    background-color: var(--full-bg);\n    outline: none; /* to be replaced by focus-visible */\n  }\n\n  .node--record-at {\n    --border-fg: var(--brand-primary);\n  }\n\n  .node--record-competed {\n    .node__checkmark {\n      background-color: var(--checkmark-bg);\n    }\n  }\n\n  .node--user-selected {\n    --full-bg: var(--brand-primary);\n    --text-color: white;\n  }\n\n  .node__checkmark {\n    color: var(--checkmark-fg);\n  }\n\n  .node__stage-name {\n    color: var(--text-color);\n  }\n"])));n.default=b},37:function(e,n,r){var t=r(38);"string"==typeof t&&(t=[[e.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(6)(t,a);t.locals&&(e.exports=t.locals)},38:function(e,n,r){(e.exports=r(5)(!1)).push([e.i,".btn {\n  border-radius: var(--btn-border-radius);\n  border: none;\n  height: var(--btn-height);\n  font: var(--btn-font);\n  letter-spacing: var(--btn-letter-spacing);\n  padding: 0 var(--btn-padding-side);\n  box-shadow: var(--btn-shadow-rest);\n}\n\n.btn:hover {\n  box-shadow: var(--btn-shadow-hover);\n}\n\n.btn--primary {\n  color: var(--btn-primary-fg-rest);\n  background-color: var(--btn-primary-bg-rest);\n}\n\n.btn--primary:hover {\n  color: var(--btn-primary-fg-hover);\n  background-color: var(--btn-primary-bg-hover);\n}\n\n.btn--secondary {\n  color: var(--btn-secondary-fg-rest);\n  background-color: var(--btn-secondary-bg-rest);\n}\n\n.btn--secondary:hover {\n  color: var(--btn-secondary-fg-hover);\n  background-color: var(--btn-secondary-bg-hover);\n}\n\n.btn-group .btn + .btn{\n  margin-left: 16px;\n}",""])}}]);