(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{37:function(n,e,r){var t=r(38);"string"==typeof t&&(t=[[n.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(6)(t,a);t.locals&&(n.exports=t.locals)},38:function(n,e,r){(n.exports=r(5)(!1)).push([n.i,".btn {\n  border-radius: var(--btn-border-radius);\n  border: none;\n  height: var(--btn-height);\n  font: var(--btn-font);\n  letter-spacing: var(--btn-letter-spacing);\n  padding: 0 var(--btn-padding-side);\n  box-shadow: var(--btn-shadow-rest);\n}\n\n.btn:hover {\n  box-shadow: var(--btn-shadow-hover);\n}\n\n.btn--primary {\n  color: var(--btn-primary-fg-rest);\n  background-color: var(--btn-primary-bg-rest);\n}\n\n.btn--primary:hover {\n  color: var(--btn-primary-fg-hover);\n  background-color: var(--btn-primary-bg-hover);\n}\n\n.btn--secondary {\n  color: var(--btn-secondary-fg-rest);\n  background-color: var(--btn-secondary-bg-rest);\n}\n\n.btn--secondary:hover {\n  color: var(--btn-secondary-fg-hover);\n  background-color: var(--btn-secondary-bg-hover);\n}\n\n.btn-group .btn + .btn{\n  margin-left: 16px;\n}",""])},73:function(n,e,r){"use strict";r.r(e),r.d(e,"BusinessProcessFlow",function(){return b}),r.d(e,"BusinessProcessExperiment",function(){return x});var t,a,o,i,s=r(0),d=r(35),c=(r(37),r(36)),l=(t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r])})(n,e)},function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),p=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},g=function(){return(g=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}).apply(this,arguments)},b=function(n){return s.createElement(u,{className:n.className},n.stages.map(function(e,r){return s.createElement(s.Fragment,{key:r},s.createElement("div",{className:["node",r===n.userSelectedIndex?" node--expanded":"",r===n.recordAtIndex?" node--outlined":"",r<n.recordAtIndex?" node--filled":""].join("")},s.createElement("button",{onClick:function(){return n.onSelectStage(r)},className:"accordion-trigger"},s.createElement("span",{className:"checkmark mdl2"},r<n.recordAtIndex?c.a.CheckMark:null),s.createElement("span",{className:"name-with-chevron"},s.createElement("span",{className:"stage-name"},e.name),s.createElement("span",{className:"chevron mdl2"},c.a.ChevronDownSmall))),r===n.userSelectedIndex&&s.createElement("div",{className:"stage-content"},r<n.recordAtIndex&&s.createElement("button",{className:"stage-cta",onClick:function(){return n.onMoveRecordToStage(r)}},"Rollback to stage"),r===n.recordAtIndex&&r<n.stages.length-1&&s.createElement("button",{className:"stage-cta",onClick:n.onCompleteStage},"Complete stage"),r===n.recordAtIndex&&r===n.stages.length-1&&s.createElement("button",{className:"stage-cta",onClick:n.onCompleteStage},"Finish process"),r>n.recordAtIndex&&s.createElement("button",{className:"stage-cta",onClick:function(){return n.onMoveRecordToStage(r)}},"Skip to stage"))),r<n.stages.length-1&&s.createElement("div",{className:"progress-bar"}))}))},x=function(n){function e(e){var r=n.call(this,e)||this;return r.onSelectStage=function(n){return r.setState({userSelectedIndex:n===r.state.userSelectedIndex?null:n})},r.rollBackStage=function(){return r.setState({recordAtIndex:Math.max(0,r.state.recordAtIndex-1)})},r.advanceStage=function(){return r.setState({recordAtIndex:Math.min(r.state.stages.length,r.state.recordAtIndex+1)})},r.onCompleteStage=function(){var n=Math.min(r.state.stages.length,r.state.recordAtIndex+1),e=n<r.state.stages.length?n:null;r.setState({recordAtIndex:n,userSelectedIndex:e})},r.onMoveRecordToStage=function(n){return r.setState({recordAtIndex:n})},r.state={stages:[{name:"Screen"},{name:"Qualify"},{name:"Develop"},{name:"Connect"},{name:"Propose"},{name:"Close"},{name:"Archive"}],userSelectedIndex:2,recordAtIndex:2,onSelectStage:r.onSelectStage,onCompleteStage:r.onCompleteStage,onMoveRecordToStage:r.onMoveRecordToStage},r}return l(e,n),e.prototype.render=function(){return s.createElement(m,null,s.createElement("h2",null,"Sample"),s.createElement(b,g({},this.state)),s.createElement("h2",null,"Design notes"),s.createElement("li",null,s.createElement("button",{onClick:this.rollBackStage},"Roll back stage"),s.createElement("button",{onClick:this.advanceStage},"Advance stage")),s.createElement("li",null,null===this.state.userSelectedIndex?"User is not viewing any stage":"User is viewing "+this.state.stages[this.state.userSelectedIndex].name),s.createElement("li",null,this.state.recordAtIndex<this.state.stages.length?'Record is at "'+this.state.stages[this.state.recordAtIndex].name+'"':"Record has finished all stages"))},e}(s.Component),m=d.a.section(a||(a=p(["\n  padding: 24px;\n"],["\n  padding: 24px;\n"]))),h=Object(d.b)(o||(o=p(["\n  0% {\n    transform: translateY(-24px) scaleY(0.5) scaleX(1);\n    transform-origin: 50% 0%;\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 0%;\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateY(-24px) scaleY(0.5) scaleX(1);\n    transform-origin: 50% 0%;\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 0%;\n    opacity: 1;\n  }\n"]))),u=d.a.nav(i||(i=p(['\n  --brand-primary: #2266e3;\n  --brand-primary-darken: #1b52b6;\n  --material-shadow-d1: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d2: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d3: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  --accordion-trigger-z: 200;\n\n  display: flex;\n  flex-direction: column;\n\n  .node {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n    transition: width 200ms, height 200ms;\n    position: relative;\n    box-sizing: border-box;\n  }\n\n  .node::before {\n    content: "";\n    z-index: var(--accordion-trigger-z);\n\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 24px;\n\n    border: 2px solid transparent;\n    background-color: white;\n    box-sizing: border-box;\n    border-radius: 12px;\n\n    transition: all 200ms;\n  }\n\n  .node--filled::before {\n    background-color: var(--brand-primary);\n  }\n  .node--filled.node--expanded::before {\n    height: 24px;\n  }\n\n  .node--outlined::before {\n    border-color: var(--brand-primary);\n  }\n\n  .accordion-trigger {\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n    height: 24px;\n    border-radius: 12px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    outline: none; /* TODO replace with focus-visible */\n    position: relative;\n    transition: color 200ms;\n    z-index: var(--accordion-trigger-z);\n    appearance: none; /* unset the native button styles */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n\n    box-shadow: var(--material-shadow-d3);\n  }\n\n  .progress-bar {\n    height: 18px;\n    width: 2px;\n    background-color: var(--brand-primary);\n    margin: -2px 0 -2px 11px;\n  }\n\n  .node--filled {\n    .checkmark {\n      color: white;\n    }\n\n    .accordion-trigger::before {\n      background-color: var(--brand-primary);\n    }\n  }\n\n  .node--outlined {\n  }\n\n  .node--expanded {\n    width: 300px;\n    height: 420px;\n\n    .chevron {\n      transform: rotate(180deg);\n    }\n\n    .accordion-trigger {\n      color: var(--brand-primary);\n    }\n  }\n\n  .node--filled.node--expanded {\n    .accordion-trigger {\n      color: white;\n    }\n  }\n\n  .checkmark {\n    display: inline-flex;\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n    font-size: 16px;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n\n  .chevron {\n    font-size: 8px;\n    display: inline-block;\n    transition: transform 200ms;\n  }\n\n  .stage-content {\n    position: absolute;\n    top: 22px;\n    left: 4px;\n    /* border-left: 2px solid var(--brand-primary); */\n    right: 4px;\n    box-shadow: var(--material-shadow-d3);\n    bottom: 0;\n    border-radius: 0 2px 2px 2px;\n    background-color: white;\n\n    animation: '," 200ms 150ms cubic-bezier(0.32, 1.49, 0.93, 0.87) both;\n  }\n\n  .stage-name {\n    font: var(--fw-semibold) var(--scale-14) / var(--scale-20) var(--ff-segoe-ui);\n    margin-right: 6px;\n  }\n\n  .name-with-chevron {\n    position: absolute;\n    display: flex;\n    align-items: baseline;\n    left: 32px;\n  }\n\n  .stage-content {\n    .stage-cta {\n      position: absolute;\n      left: 32px;\n      bottom: 8px;\n    }\n  }\n\n  .stage-cta {\n    border-radius: var(--btn-border-radius);\n    border: none;\n    cursor: pointer;\n    height: 28px;\n    font: var(--btn-font);\n    color: var(--btn-primary-fg-rest);\n    background-color: var(--btn-primary-bg-rest);\n    letter-spacing: var(--btn-letter-spacing);\n    padding: 0 var(--btn-padding-side);\n    box-shadow: var(--material-shadow-d2);\n    outline: none;\n  }\n\n  .stage-cta:hover {\n    background-color: var(--brand-primary-darken);\n  }\n"],['\n  --brand-primary: #2266e3;\n  --brand-primary-darken: #1b52b6;\n  --material-shadow-d1: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d2: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --material-shadow-d3: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  --accordion-trigger-z: 200;\n\n  display: flex;\n  flex-direction: column;\n\n  .node {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n    transition: width 200ms, height 200ms;\n    position: relative;\n    box-sizing: border-box;\n  }\n\n  .node::before {\n    content: "";\n    z-index: var(--accordion-trigger-z);\n\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 24px;\n\n    border: 2px solid transparent;\n    background-color: white;\n    box-sizing: border-box;\n    border-radius: 12px;\n\n    transition: all 200ms;\n  }\n\n  .node--filled::before {\n    background-color: var(--brand-primary);\n  }\n  .node--filled.node--expanded::before {\n    height: 24px;\n  }\n\n  .node--outlined::before {\n    border-color: var(--brand-primary);\n  }\n\n  .accordion-trigger {\n    cursor: pointer;\n    background: none;\n    border: none;\n    padding: 0;\n    height: 24px;\n    border-radius: 12px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    outline: none; /* TODO replace with focus-visible */\n    position: relative;\n    transition: color 200ms;\n    z-index: var(--accordion-trigger-z);\n    appearance: none; /* unset the native button styles */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n\n    box-shadow: var(--material-shadow-d3);\n  }\n\n  .progress-bar {\n    height: 18px;\n    width: 2px;\n    background-color: var(--brand-primary);\n    margin: -2px 0 -2px 11px;\n  }\n\n  .node--filled {\n    .checkmark {\n      color: white;\n    }\n\n    .accordion-trigger::before {\n      background-color: var(--brand-primary);\n    }\n  }\n\n  .node--outlined {\n  }\n\n  .node--expanded {\n    width: 300px;\n    height: 420px;\n\n    .chevron {\n      transform: rotate(180deg);\n    }\n\n    .accordion-trigger {\n      color: var(--brand-primary);\n    }\n  }\n\n  .node--filled.node--expanded {\n    .accordion-trigger {\n      color: white;\n    }\n  }\n\n  .checkmark {\n    display: inline-flex;\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n    font-size: 16px;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n\n  .chevron {\n    font-size: 8px;\n    display: inline-block;\n    transition: transform 200ms;\n  }\n\n  .stage-content {\n    position: absolute;\n    top: 22px;\n    left: 4px;\n    /* border-left: 2px solid var(--brand-primary); */\n    right: 4px;\n    box-shadow: var(--material-shadow-d3);\n    bottom: 0;\n    border-radius: 0 2px 2px 2px;\n    background-color: white;\n\n    animation: '," 200ms 150ms cubic-bezier(0.32, 1.49, 0.93, 0.87) both;\n  }\n\n  .stage-name {\n    font: var(--fw-semibold) var(--scale-14) / var(--scale-20) var(--ff-segoe-ui);\n    margin-right: 6px;\n  }\n\n  .name-with-chevron {\n    position: absolute;\n    display: flex;\n    align-items: baseline;\n    left: 32px;\n  }\n\n  .stage-content {\n    .stage-cta {\n      position: absolute;\n      left: 32px;\n      bottom: 8px;\n    }\n  }\n\n  .stage-cta {\n    border-radius: var(--btn-border-radius);\n    border: none;\n    cursor: pointer;\n    height: 28px;\n    font: var(--btn-font);\n    color: var(--btn-primary-fg-rest);\n    background-color: var(--btn-primary-bg-rest);\n    letter-spacing: var(--btn-letter-spacing);\n    padding: 0 var(--btn-padding-side);\n    box-shadow: var(--material-shadow-d2);\n    outline: none;\n  }\n\n  .stage-cta:hover {\n    background-color: var(--brand-primary-darken);\n  }\n"])),h);e.default=x}}]);