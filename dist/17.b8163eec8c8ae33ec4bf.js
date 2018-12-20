(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{75:function(n,e,t){"use strict";t.r(e),t.d(e,"BusinessProcessExperiment",function(){return p});var r,o,a,i=t(34),s=t(36),c=t(37),l=(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),d=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},p=function(n){function e(e){var t=n.call(this,e)||this;return t.onSelectStage=function(n){return t.setState({userSelectedIndex:n===t.state.userSelectedIndex?null:n})},t.rollBackStage=function(){return t.setState({recordAtIndex:Math.max(0,t.state.recordAtIndex-1)})},t.advanceStage=function(){return t.setState({recordAtIndex:Math.min(t.state.stages.length,t.state.recordAtIndex+1)})},t.state={stages:[{name:"Screen"},{name:"Qualify"},{name:"Develop"},{name:"Connect"},{name:"Propose"},{name:"Close"},{name:"Archive"}],userSelectedIndex:1,recordAtIndex:2},t}return l(e,n),e.prototype.render=function(){var n=this;return i.createElement(g,null,i.createElement("h2",null,"Sample"),i.createElement(x,null,this.state.stages.map(function(e,t){return i.createElement(i.Fragment,{key:t},i.createElement("div",{className:"node"+(t===n.state.userSelectedIndex?" node--expanded":"")+(t<n.state.recordAtIndex?" node--filled":"")},i.createElement("button",{onClick:function(){return n.onSelectStage(t)},className:"accordion-trigger"},i.createElement("span",{className:"checkmark mdl2"},t<n.state.recordAtIndex?c.a.CheckMark:null),i.createElement("span",{className:"name-with-chevron"},i.createElement("span",{className:"stage-name"},e.name),i.createElement("span",{className:"chevron mdl2"},c.a.ChevronDownSmall)))),t<n.state.stages.length-1?i.createElement("div",{className:"progress-bar"+(t<n.state.recordAtIndex?" progress-bar--filled":"")+(t===n.state.recordAtIndex?" progress-bar--fade":"")}):null)})),i.createElement("h2",null,"Design notes"),i.createElement("li",null,i.createElement("button",{onClick:this.rollBackStage},"Roll back stage"),i.createElement("button",{onClick:this.advanceStage},"Advance stage")),i.createElement("li",null,null===this.state.userSelectedIndex?"User is not viewing any stage":"User is viewing "+this.state.stages[this.state.userSelectedIndex].name),i.createElement("li",null,this.state.recordAtIndex<this.state.stages.length?'Record is at "'+this.state.stages[this.state.recordAtIndex].name+'"':"Record has finished all stages"))},e}(i.Component),g=s.a.section(o||(o=d(["\n  padding: 24px;\n"],["\n  padding: 24px;\n"]))),x=s.a.nav(a||(a=d(["\n  --brand-primary: #2266E3;\n\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n\n  .node {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n    margin-top: 16px;\n    transition: width 200ms, height 200ms;\n  }\n\n  .accordion-trigger {\n    background: none;\n    border: none;\n    padding: 0;\n    height: 24px;\n    min-width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    outline: none; /* TODO replace with focus-visible */\n    position: relative;\n    transition: color 200ms;\n  }\n\n  .accordion-trigger::before {\n    content: '';\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    border: 2px solid black;\n    border-color: var(--brand-primary);\n    border-radius: 12px;\n    transition: border-radius 200ms, background-color 200ms, border-color 200ms;\n  }\n\n  .node--filled {\n    .checkmark {\n      color: white;\n    }\n\n    .accordion-trigger::before {\n      background-color: var(--brand-primary);\n      border-color: transparent;\n    }\n  }\n\n  .node--expanded {\n    width: 300px;\n    height: 600px;\n\n    .chevron {\n      transform: rotate(180deg);\n    }\n\n    .accordion-trigger {\n      color: var(--brand-primary);\n    }\n\n    .accordion-trigger::before {\n      border-radius: 12px 12px 0 0;\n    }\n  }\n\n  .node--filled.node--expanded {\n    .accordion-trigger {\n      color: white;\n    }\n  }\n\n  .checkmark {\n    display: inline-flex;\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n    font-size: 16px;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n\n  .chevron {\n    font-size: 8px;\n    display: inline-block;\n    transition: transform 200ms;\n  }\n\n  .stage-name {\n    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);\n    margin-right: 6px;\n  }\n\n  .name-with-chevron {\n    position: absolute;\n    display: flex;\n    align-items: baseline;\n    left: 32px;\n  }\n"],["\n  --brand-primary: #2266E3;\n\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n\n  .node {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\n    margin-top: 16px;\n    transition: width 200ms, height 200ms;\n  }\n\n  .accordion-trigger {\n    background: none;\n    border: none;\n    padding: 0;\n    height: 24px;\n    min-width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    outline: none; /* TODO replace with focus-visible */\n    position: relative;\n    transition: color 200ms;\n  }\n\n  .accordion-trigger::before {\n    content: '';\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    border: 2px solid black;\n    border-color: var(--brand-primary);\n    border-radius: 12px;\n    transition: border-radius 200ms, background-color 200ms, border-color 200ms;\n  }\n\n  .node--filled {\n    .checkmark {\n      color: white;\n    }\n\n    .accordion-trigger::before {\n      background-color: var(--brand-primary);\n      border-color: transparent;\n    }\n  }\n\n  .node--expanded {\n    width: 300px;\n    height: 600px;\n\n    .chevron {\n      transform: rotate(180deg);\n    }\n\n    .accordion-trigger {\n      color: var(--brand-primary);\n    }\n\n    .accordion-trigger::before {\n      border-radius: 12px 12px 0 0;\n    }\n  }\n\n  .node--filled.node--expanded {\n    .accordion-trigger {\n      color: white;\n    }\n  }\n\n  .checkmark {\n    display: inline-flex;\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n    font-size: 16px;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n\n  .chevron {\n    font-size: 8px;\n    display: inline-block;\n    transition: transform 200ms;\n  }\n\n  .stage-name {\n    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);\n    margin-right: 6px;\n  }\n\n  .name-with-chevron {\n    position: absolute;\n    display: flex;\n    align-items: baseline;\n    left: 32px;\n  }\n"])));e.default=p}}]);