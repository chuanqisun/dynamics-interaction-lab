(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{127:function(n,e,t){"use strict";t.r(e),t.d(e,"BusinessProcessExperiment",function(){return p});var r,a,o,i=t(0),s=t(35),d=(t(37),t(36)),l=(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),c=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},p=function(n){function e(e){var t=n.call(this,e)||this;return t.onSelectStage=function(n){return t.setState({userSelectedIndex:n===t.state.userSelectedIndex?null:n})},t.rollBackStage=function(){return t.setState({recordAtIndex:Math.max(0,t.state.recordAtIndex-1)})},t.advanceStage=function(){return t.setState({recordAtIndex:Math.min(t.state.stages.length,t.state.recordAtIndex+1)})},t.onCompleteStage=function(){var n=Math.min(t.state.stages.length,t.state.recordAtIndex+1),e=n<t.state.stages.length?n:null;t.setState({recordAtIndex:n,userSelectedIndex:e})},t.onMoveRecordToStage=function(n){return t.setState({recordAtIndex:n})},t.state={stages:[{name:"Screen"},{name:"Qualify"},{name:"Develop"},{name:"Connect"},{name:"Propose"},{name:"Close"},{name:"Archive"}],userSelectedIndex:2,recordAtIndex:2},t}return l(e,n),e.prototype.render=function(){var n=this;return i.createElement(b,null,i.createElement("h2",null,"Sample"),i.createElement(g,null,this.state.stages.map(function(e,t){return i.createElement(i.Fragment,{key:t},i.createElement("div",{className:["node",t===n.state.userSelectedIndex?" node--expanded":"",t===n.state.recordAtIndex?" node--outlined":"",t<n.state.recordAtIndex?" node--filled":""].join("")},i.createElement("button",{onClick:function(){return n.onSelectStage(t)},className:"accordion-trigger"},i.createElement("span",{className:"checkmark mdl2"},t<n.state.recordAtIndex?d.a.CheckMark:null),i.createElement("span",{className:"name-with-chevron"},i.createElement("span",{className:"stage-name"},e.name),i.createElement("span",{className:"chevron mdl2"},d.a.ChevronDownSmall))),t===n.state.userSelectedIndex?i.createElement("div",{className:"stage-content"},t<n.state.recordAtIndex?i.createElement("button",{className:"stage-cta",onClick:function(){return n.onMoveRecordToStage(t)}},"Rollback to this stage"):null,t===n.state.recordAtIndex?i.createElement("button",{className:"stage-cta",onClick:n.onCompleteStage},"Complete"):null,t>n.state.recordAtIndex?i.createElement("button",{className:"stage-cta",onClick:function(){return n.onMoveRecordToStage(t)}},"Skip to this stage"):null):null),t<n.state.stages.length-1?i.createElement("div",{className:"progress-bar"}):null)})),i.createElement("h2",null,"Design notes"),i.createElement("li",null,i.createElement("button",{onClick:this.rollBackStage},"Roll back stage"),i.createElement("button",{onClick:this.advanceStage},"Advance stage")),i.createElement("li",null,null===this.state.userSelectedIndex?"User is not viewing any stage":"User is viewing "+this.state.stages[this.state.userSelectedIndex].name),i.createElement("li",null,this.state.recordAtIndex<this.state.stages.length?'Record is at "'+this.state.stages[this.state.recordAtIndex].name+'"':"Record has finished all stages"))},e}(i.Component),b=s.a.section(a||(a=c(["\n  padding: 24px;\n"],["\n  padding: 24px;\n"]))),g=s.a.nav(o||(o=c(['\n  --brand-primary: #2266e3;\n  --brand-primary-darken: #1b52b6;\n  --material-shadow-d1: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d2: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d3: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n\n  display: flex;\n  flex-direction: column;\n\n  .node {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n    box-shadow: var(--material-shadow-d3);\n    transition: width 200ms, height 200ms;\n    position: relative;\n    box-sizing: border-box;\n  }\n\n  .node::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 24px;\n\n    border: 2px solid transparent;\n    background-color: white;\n    box-sizing: border-box;\n    border-radius: 12px;\n\n    transition: all 200ms;\n  }\n\n  .node--filled::before {\n    background-color: var(--brand-primary);\n  }\n  .node--filled.node--expanded::before {\n    height: 24px;\n  }\n\n  .node--outlined::before {\n    border-color: var(--brand-primary);\n  }\n\n  .accordion-trigger {\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n    height: 24px;\n    min-width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    outline: none; /* TODO replace with focus-visible */\n    position: relative;\n    transition: color 200ms;\n    appearance: none; /* unset the native button styles */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n  }\n\n  .progress-bar {\n    height: 16px;\n    width: 4px;\n    background-color: var(--brand-primary);\n    margin-left: 10px;\n  }\n\n  .node--filled {\n    .checkmark {\n      color: white;\n    }\n\n    .accordion-trigger::before {\n      background-color: var(--brand-primary);\n    }\n  }\n\n  .node--outlined {\n  }\n\n  .node--expanded {\n    width: 300px;\n    height: 420px;\n\n    .chevron {\n      transform: rotate(180deg);\n    }\n\n    .accordion-trigger {\n      color: var(--brand-primary);\n    }\n  }\n\n  .node--filled.node--expanded {\n    .accordion-trigger {\n      color: white;\n    }\n  }\n\n  .checkmark {\n    display: inline-flex;\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n    font-size: 16px;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n\n  .chevron {\n    font-size: 8px;\n    display: inline-block;\n    transition: transform 200ms;\n  }\n\n  .stage-name {\n    font: var(--fw-semibold) var(--scale-14) / var(--scale-20) var(--ff-segoe-ui);\n    margin-right: 6px;\n  }\n\n  .name-with-chevron {\n    position: absolute;\n    display: flex;\n    align-items: baseline;\n    left: 32px;\n  }\n\n  .stage-content {\n    .stage-cta {\n      position: absolute;\n      left: 32px;\n      bottom: 8px;\n    }\n  }\n\n  .stage-cta {\n    border-radius: var(--btn-border-radius);\n    border: none;\n    cursor: pointer;\n    height: 28px;\n    font: var(--btn-font);\n    color: var(--btn-primary-fg-rest);\n    background-color: var(--btn-primary-bg-rest);\n    letter-spacing: var(--btn-letter-spacing);\n    padding: 0 var(--btn-padding-side);\n    box-shadow: var(--material-shadow-d2);\n    outline: none;\n  }\n\n  .stage-cta:hover {\n    background-color: var(--brand-primary-darken);\n  }\n'],['\n  --brand-primary: #2266e3;\n  --brand-primary-darken: #1b52b6;\n  --material-shadow-d1: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d2: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d3: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n\n  display: flex;\n  flex-direction: column;\n\n  .node {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n    box-shadow: var(--material-shadow-d3);\n    transition: width 200ms, height 200ms;\n    position: relative;\n    box-sizing: border-box;\n  }\n\n  .node::before {\n    content: "";\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 24px;\n\n    border: 2px solid transparent;\n    background-color: white;\n    box-sizing: border-box;\n    border-radius: 12px;\n\n    transition: all 200ms;\n  }\n\n  .node--filled::before {\n    background-color: var(--brand-primary);\n  }\n  .node--filled.node--expanded::before {\n    height: 24px;\n  }\n\n  .node--outlined::before {\n    border-color: var(--brand-primary);\n  }\n\n  .accordion-trigger {\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n    height: 24px;\n    min-width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    outline: none; /* TODO replace with focus-visible */\n    position: relative;\n    transition: color 200ms;\n    appearance: none; /* unset the native button styles */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n  }\n\n  .progress-bar {\n    height: 16px;\n    width: 4px;\n    background-color: var(--brand-primary);\n    margin-left: 10px;\n  }\n\n  .node--filled {\n    .checkmark {\n      color: white;\n    }\n\n    .accordion-trigger::before {\n      background-color: var(--brand-primary);\n    }\n  }\n\n  .node--outlined {\n  }\n\n  .node--expanded {\n    width: 300px;\n    height: 420px;\n\n    .chevron {\n      transform: rotate(180deg);\n    }\n\n    .accordion-trigger {\n      color: var(--brand-primary);\n    }\n  }\n\n  .node--filled.node--expanded {\n    .accordion-trigger {\n      color: white;\n    }\n  }\n\n  .checkmark {\n    display: inline-flex;\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n    font-size: 16px;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n\n  .chevron {\n    font-size: 8px;\n    display: inline-block;\n    transition: transform 200ms;\n  }\n\n  .stage-name {\n    font: var(--fw-semibold) var(--scale-14) / var(--scale-20) var(--ff-segoe-ui);\n    margin-right: 6px;\n  }\n\n  .name-with-chevron {\n    position: absolute;\n    display: flex;\n    align-items: baseline;\n    left: 32px;\n  }\n\n  .stage-content {\n    .stage-cta {\n      position: absolute;\n      left: 32px;\n      bottom: 8px;\n    }\n  }\n\n  .stage-cta {\n    border-radius: var(--btn-border-radius);\n    border: none;\n    cursor: pointer;\n    height: 28px;\n    font: var(--btn-font);\n    color: var(--btn-primary-fg-rest);\n    background-color: var(--btn-primary-bg-rest);\n    letter-spacing: var(--btn-letter-spacing);\n    padding: 0 var(--btn-padding-side);\n    box-shadow: var(--material-shadow-d2);\n    outline: none;\n  }\n\n  .stage-cta:hover {\n    background-color: var(--brand-primary-darken);\n  }\n'])));e.default=p},37:function(n,e,t){var r=t(38);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(6)(r,a);r.locals&&(n.exports=r.locals)},38:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,".btn {\n  border-radius: var(--btn-border-radius);\n  border: none;\n  height: var(--btn-height);\n  font: var(--btn-font);\n  letter-spacing: var(--btn-letter-spacing);\n  padding: 0 var(--btn-padding-side);\n  box-shadow: var(--btn-shadow-rest);\n}\n\n.btn:hover {\n  box-shadow: var(--btn-shadow-hover);\n}\n\n.btn--primary {\n  color: var(--btn-primary-fg-rest);\n  background-color: var(--btn-primary-bg-rest);\n}\n\n.btn--primary:hover {\n  color: var(--btn-primary-fg-hover);\n  background-color: var(--btn-primary-bg-hover);\n}\n\n.btn--secondary {\n  color: var(--btn-secondary-fg-rest);\n  background-color: var(--btn-secondary-bg-rest);\n}\n\n.btn--secondary:hover {\n  color: var(--btn-secondary-fg-hover);\n  background-color: var(--btn-secondary-bg-hover);\n}\n\n.btn-group .btn + .btn{\n  margin-left: 16px;\n}",""])}}]);