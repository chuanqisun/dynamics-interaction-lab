(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{56:function(e,t,n){"use strict";n.r(t);var l,a,o=n(30),i=n(0),s=n(27),r=n.n(s),c=n(33),m=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},h={titleWidth:160,shellHeight:48,shellDividerSideMargin:8,shellDividerVerticalMargin:16,dividerStrokeWidth:1},p=function(e){function t(t){var n=e.call(this,t)||this;return n.updateDimensions=function(){n.reflowItems()},n.reflowItems=function(){for(var e,t,l={dynamicsDisplayStack:n.props.dynamicsDisplayStack.slice(),systemDisplayStack:n.props.systemDisplayStack.slice(),dynamicsOverflowStack:[],systemOverflowStack:[],customOverflowStack:n.props.customOverflowStack.slice()};n.canReduce(l)&&n.getRemainingSpace(l)<0;)l.dynamicsDisplayStack.length?(e=[l.dynamicsDisplayStack,[]],l.dynamicsOverflowStack=e[0],l.dynamicsDisplayStack=e[1]):(t=[l.systemDisplayStack,[]],l.systemOverflowStack=t[0],l.systemDisplayStack=t[1]);n.setState(l)},n.canReduce=function(e){return e.dynamicsDisplayStack.length+e.systemDisplayStack.length>0},n.editable=function(e){return e&&(e.contentEditable=!0)&&(e.spellcheck=!1)},n.getRemainingSpace=function(e){var t=h.shellHeight,n=h.titleWidth,l=h.shellHeight,a=h.shellHeight*e.dynamicsDisplayStack.length,o=1!==e.customOverflowStack.length||e.dynamicsOverflowStack.length||e.systemOverflowStack.length?0:h.shellHeight,i=e.customOverflowStack.length+e.dynamicsOverflowStack.length+e.systemOverflowStack.length>1?h.shellHeight:0,s=e.systemDisplayStack.length?2*h.shellDividerSideMargin+h.dividerStrokeWidth:0,r=h.shellHeight*e.systemDisplayStack.length,c=h.shellHeight;return window.innerWidth-(t+n+l+a+o+i+s+r+c)},n.getOverflowItems=function(e){return e.customOverflowStack.concat(e.dynamicsOverflowStack,e.systemOverflowStack)},n.toggleOverflowMenu=function(){n.setState({showOverflowMenu:!n.state.showOverflowMenu})},n.state={showOverflowMenu:!1,dynamicsDisplayStack:n.props.dynamicsDisplayStack.slice(),systemDisplayStack:n.props.systemDisplayStack.slice(),dynamicsOverflowStack:[],systemOverflowStack:[],customOverflowStack:n.props.customOverflowStack.slice()},n}return m(t,e),t.prototype.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},t.prototype.componentDidUpdate=function(e){e.customOverflowStack!==this.props.customOverflowStack&&this.updateDimensions()},t.prototype.render=function(){return i.createElement(f,null,i.createElement("button",{className:"shell-icon-button shell-icon-button--waffle"},c.a.WaffleOffice365),i.createElement("div",{className:"shell-title",ref:this.editable},"Sales"),i.createElement("button",{className:"shell-icon-button"},c.a.Search),this.state.dynamicsDisplayStack.map(function(e){return i.createElement("button",{key:e.label,className:"shell-icon-button"},e.icon)}),this.getOverflowItems(this.state).length>1?i.createElement("button",{onClick:this.toggleOverflowMenu,className:"shell-icon-button shell-icon-button--more"},c.a.More,this.state.showOverflowMenu?i.createElement("div",{className:"overflow-menu"},this.state.dynamicsOverflowStack.concat(this.state.customOverflowStack).map(function(e){return i.createElement("div",{key:e.label,className:"menu-row"},i.createElement("span",{className:"menu-row__icon"},e.icon),i.createElement("span",{className:"menu-row__text"},e.label))}),this.state.systemOverflowStack.length?i.createElement("div",{className:"menu-divider"}):null,this.state.systemOverflowStack.map(function(e){return i.createElement("div",{key:e.label,className:"menu-row"},i.createElement("span",{className:"menu-row__icon"},e.icon),i.createElement("span",{className:"menu-row__text"},e.label))})):null):this.getOverflowItems(this.state).length>0?i.createElement("button",{className:"shell-icon-button"},this.state.customOverflowStack[0].icon):null,this.state.systemDisplayStack.length?i.createElement("div",{className:"shell-divider"}):null,this.state.systemDisplayStack.map(function(e){return i.createElement("button",{key:e.label,className:"shell-icon-button"},e.icon)}),i.createElement("button",{className:"shell-icon-button shell-icon-button--avatar"},i.createElement("img",{className:"avatar",alt:"your avatar",src:this.props.avatarImgUrl})))},t}(i.Component),f=r.a.header(a||(a=u(["\n  color: white;\n  display: flex;\n  align-items: center;\n  height: ","px;\n  background-color: #002050;\n\n  .overflow-menu {\n    background-color: white;\n    color: black;\n    font-family: var(--ff-segoe-ui);\n    position: absolute;\n    top: ","px;\n    right: 0;\n    box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);\n  }\n\n  .menu-row__text {\n    white-space: nowrap;\n  }\n\n  .menu-row {\n    display: flex;\n    margin: 16px 16px;\n    align-items: center;\n  }\n\n  .menu-row__icon {\n    font-family: var(--ff-mdl2);\n    flex: 0 0 16px;\n    margin-right: 16px;\n  }\n\n  .menu-divider {\n    height: 1px;\n    background-color: rgba(0,0,0,0.25);\n  }\n\n  .shell-divider {\n    align-self: stretch;\n    margin: ","px ","px;\n    width: ","px;\n    flex: 0 0 auto;\n    background-color: rgba(255,255,255,0.55);\n  }\n\n  .shell-title {\n    flex: 1 1 auto;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-weight: 600;\n  }\n\n  .shell-icon-button {\n    background-color: transparent;\n    flex: 0 0 auto;\n    color: white;\n    border: none;\n    font-size: 16px;\n    font-family: var(--ff-mdl2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: ","px;\n    width: ","px;\n  }\n\n  .shell-icon-button--avatar {\n    height: ","px;\n    width: ","px;\n    box-sizing: border-box;\n\n    .avatar {\n      border-radius: 50%;\n      height: calc(0.6*","px);\n      width: calc(0.6*","px);\n      box-sizing: border-box;\n    }\n  }\n\n  .shell-icon-button--more {\n    position: relative;\n  }\n"],["\n  color: white;\n  display: flex;\n  align-items: center;\n  height: ","px;\n  background-color: #002050;\n\n  .overflow-menu {\n    background-color: white;\n    color: black;\n    font-family: var(--ff-segoe-ui);\n    position: absolute;\n    top: ","px;\n    right: 0;\n    box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);\n  }\n\n  .menu-row__text {\n    white-space: nowrap;\n  }\n\n  .menu-row {\n    display: flex;\n    margin: 16px 16px;\n    align-items: center;\n  }\n\n  .menu-row__icon {\n    font-family: var(--ff-mdl2);\n    flex: 0 0 16px;\n    margin-right: 16px;\n  }\n\n  .menu-divider {\n    height: 1px;\n    background-color: rgba(0,0,0,0.25);\n  }\n\n  .shell-divider {\n    align-self: stretch;\n    margin: ","px ","px;\n    width: ","px;\n    flex: 0 0 auto;\n    background-color: rgba(255,255,255,0.55);\n  }\n\n  .shell-title {\n    flex: 1 1 auto;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-weight: 600;\n  }\n\n  .shell-icon-button {\n    background-color: transparent;\n    flex: 0 0 auto;\n    color: white;\n    border: none;\n    font-size: 16px;\n    font-family: var(--ff-mdl2);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: ","px;\n    width: ","px;\n  }\n\n  .shell-icon-button--avatar {\n    height: ","px;\n    width: ","px;\n    box-sizing: border-box;\n\n    .avatar {\n      border-radius: 50%;\n      height: calc(0.6*","px);\n      width: calc(0.6*","px);\n      box-sizing: border-box;\n    }\n  }\n\n  .shell-icon-button--more {\n    position: relative;\n  }\n"])),h.shellHeight,h.shellHeight,h.shellDividerVerticalMargin,h.shellDividerSideMargin,h.dividerStrokeWidth,h.shellHeight,h.shellHeight,h.shellHeight,h.shellHeight,h.shellHeight,h.shellHeight);n.d(t,"AppShellDemo",function(){return v});var d=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function l(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(l.prototype=n.prototype,new l)}}(),w=[{icon:c.a.TBX,label:"Task flow"},{icon:c.a.ToolTip,label:"Relationship Assistant"},{icon:c.a.Add,label:"Create"}],g=[{icon:c.a.Settings,label:"Settings"},{icon:c.a.Help,label:"Help"}],v=function(e){function t(t){var n=e.call(this,t)||this;return n.addCustomItem=function(){var e=n.state.customOverflowStack.concat([{icon:c.a.Emoji2,label:"Custom "+n.state.customOverflowStack.length}]);n.setState({customOverflowStack:e})},n.removeCustomItem=function(){var e=n.state.customOverflowStack.slice();e.pop(),n.setState({customOverflowStack:e})},n.state={customOverflowStack:[{icon:c.a.Emoji2,label:"Custom 0"}]},n}return d(t,e),t.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement("section",null,o.createElement("h2",null,"Sample"),o.createElement(p,{avatarImgUrl:"https://api.adorable.io/avatars/285/abott@adorable.png",dynamicsDisplayStack:w,systemDisplayStack:g,customOverflowStack:this.state.customOverflowStack})),o.createElement("section",null,o.createElement("h2",null,"Usage"),o.createElement("section",{style:{marginTop:"16px"}},o.createElement("span",null,"Custom actions: "),o.createElement("button",{onClick:this.removeCustomItem},"-"),o.createElement("span",null," ",this.state.customOverflowStack.length," "),o.createElement("button",{onClick:this.addCustomItem},"+")),o.createElement("section",null,o.createElement("h3",null,"Design notes"),o.createElement("ul",null,o.createElement("li",null,"This prototype only shows browser behavior. Shim experience is out of scope"),o.createElement("li",null,"When viewport narrows, Dynamics actions (task flow, relationship assistance, create) collapse first, then System buttons (help, settings) next"),o.createElement("li",null,"Custom actions are always collapsed except when there is only one"),o.createElement("li",null,"The System buttons are either all collapsed or all expanded"),o.createElement("li",null,"The Dynamics actions are either all collapsed or all expanded")))))},t}(o.Component);t.default=v}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtc2hlbGwvYXBwLXNoZWxsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtc2hlbGwvYXBwLXNoZWxsLmRlbW8udHN4Il0sIm5hbWVzIjpbImNvbnN0YW50cyIsInRpdGxlV2lkdGgiLCJzaGVsbEhlaWdodCIsInNoZWxsRGl2aWRlclNpZGVNYXJnaW4iLCJzaGVsbERpdmlkZXJWZXJ0aWNhbE1hcmdpbiIsImRpdmlkZXJTdHJva2VXaWR0aCIsImFwcF9zaGVsbF9BcHBTaGVsbCIsIl9zdXBlciIsIkFwcFNoZWxsIiwicHJvcHMiLCJfdGhpcyIsImNhbGwiLCJ0aGlzIiwidXBkYXRlRGltZW5zaW9ucyIsInJlZmxvd0l0ZW1zIiwicGxhbiIsImR5bmFtaWNzRGlzcGxheVN0YWNrIiwic2xpY2UiLCJzeXN0ZW1EaXNwbGF5U3RhY2siLCJkeW5hbWljc092ZXJmbG93U3RhY2siLCJzeXN0ZW1PdmVyZmxvd1N0YWNrIiwiY3VzdG9tT3ZlcmZsb3dTdGFjayIsImNhblJlZHVjZSIsImdldFJlbWFpbmluZ1NwYWNlIiwibGVuZ3RoIiwiX2EiLCJfYiIsInNldFN0YXRlIiwiZWRpdGFibGUiLCJlIiwiY29udGVudEVkaXRhYmxlIiwic3BlbGxjaGVjayIsIndhZmZsZSIsInNlYXJjaCIsImR5bmFtaWNzQWN0aW9ucyIsImN1c3RvbUFjdGlvbiIsIm92ZXJmbG93TWVudSIsImRpdmlkZXIiLCJzeXN0ZW1BY3Rpb25zIiwibWUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZ2V0T3ZlcmZsb3dJdGVtcyIsImN1cnJlbnRTdGF0ZSIsImNvbmNhdCIsInRvZ2dsZU92ZXJmbG93TWVudSIsInNob3dPdmVyZmxvd01lbnUiLCJzdGF0ZSIsIl9fZXh0ZW5kcyIsInByb3RvdHlwZSIsImNvbXBvbmVudERpZE1vdW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInJlbmRlciIsImV4dGVybmFsX1JlYWN0XyIsIlN0eWxlZEhlYWRlciIsImNsYXNzTmFtZSIsImZ1bGxfbWRsMiIsIldhZmZsZU9mZmljZTM2NSIsInJlZiIsIlNlYXJjaCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJsYWJlbCIsImljb24iLCJvbkNsaWNrIiwiTW9yZSIsImFsdCIsInNyYyIsImF2YXRhckltZ1VybCIsImV4dGVybmFsX3N0eWxlZF9kZWZhdWx0IiwiYSIsImhlYWRlciIsInRlbXBsYXRlT2JqZWN0XzEiLCJfX21ha2VUZW1wbGF0ZU9iamVjdCIsIlRCWCIsIlRvb2xUaXAiLCJBZGQiLCJTZXR0aW5ncyIsIkhlbHAiLCJhcHBfc2hlbGxfZGVtb19BcHBTaGVsbERlbW8iLCJBcHBTaGVsbERlbW8iLCJhZGRDdXN0b21JdGVtIiwibmV3U3RhY2siLCJFbW9qaTIiLCJyZW1vdmVDdXN0b21JdGVtIiwicG9wIiwiYXBwX3NoZWxsX2RlbW9fZXh0ZW5kcyIsIlJlYWN0Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJfX3dlYnBhY2tfZXhwb3J0c19fIl0sIm1hcHBpbmdzIjoic2lCQU1NQSxFQUFZLENBQ2hCQyxXQUFZLElBQ1pDLFlBQWEsR0FDYkMsdUJBQXdCLEVBQ3hCQywyQkFBNEIsR0FDNUJDLG1CQUFvQixHQWdDdEJDLEVBQUEsU0FBQUMsR0FDRSxTQUFBQyxFQUFZQyxHQUFaLElBQUFDLEVBQ0VILEVBQUFJLEtBQUFDLEtBQU1ILElBQU1HLFlBWWRGLEVBQUFHLGlCQUFtQixXQUNqQkgsRUFBS0ksZUFHUEosRUFBQUksWUFBYyxXQVNaLFlBUk1DLEVBQW1CLENBQ3ZCQyxxQkFBMEJOLEVBQUtELE1BQU1PLHFCQUFvQkMsUUFDekRDLG1CQUF3QlIsRUFBS0QsTUFBTVMsbUJBQWtCRCxRQUNyREUsc0JBQXVCLEdBQ3ZCQyxvQkFBcUIsR0FDckJDLG9CQUF5QlgsRUFBS0QsTUFBTVksb0JBQW1CSixTQUds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WnBDN0UsRUFBS3FDLE1BQVEsQ0FDWDFCLG9CQUFxQixDQUFDLENBQUMrQyxLQUFNUixFQUFBLEVBQVM0QixPQUFRckIsTUFBTyxnQkF5QzNELE9BOUNrQ3dCLEVBQUFOLEVBQUE5RSxHQW1CaEM4RSxFQUFBcEMsVUFBQU8sT0FBQSxXQUNFLE9BQU9vQyxFQUFBLGNBQUNBLEVBQUEsU0FBYyxLQUN0QkEsRUFBQSw2QkFDRUEsRUFBQSxrQ0FDQUEsRUFBQSxjQUFDdEYsRUFBUSxDQUFDbUUsYUFBYSx5REFBeUR6RCxxQkFBc0JBLEVBQXNCRSxtQkFBb0JBLEVBQW9CRyxvQkFBcUJULEtBQUttQyxNQUFNMUIsdUJBRXRNdUUsRUFBQSw2QkFDRUEsRUFBQSxpQ0FDQUEsRUFBQSx5QkFBU0MsTUFBTyxDQUFDQyxVQUFXLFNBQzFCRixFQUFBLDhDQUNBQSxFQUFBLHdCQUFRdkIsUUFBU3pELEtBQUs2RSxrQkFBZ0IsS0FDdENHLEVBQUEsOEJBQVFoRixLQUFLbUMsTUFBTTFCLG9CQUFvQkcsWUFDdkNvRSxFQUFBLHdCQUFRdkIsUUFBU3pELEtBQUswRSxlQUFhLE1BRXJDTSxFQUFBLDZCQUNFQSxFQUFBLHdDQUNBQSxFQUFBLHdCQUNFQSxFQUFBLHVHQUNBQSxFQUFBLDBLQUNBQSxFQUFBLDZGQUNBQSxFQUFBLHVGQUNBQSxFQUFBLDhGQU1WUCxFQTlDQSxDQUFrQ08sRUFBQSxXQWdEbkJHLEVBQUEiLCJmaWxlIjoiMTIuMjk0MWI0M2FjMWFmYjdiOTcyYzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0Z1bGxNZGwyfSBmcm9tICcuLi8uLi9zdHlsZXMvaWNvbi9mdWxsLW1kbDInO1xyXG5cclxuXHJcbi8vIFRvZG8sIG1vdmUgdG8gdGhlIHJpZ2h0IHBsYWNlXHJcbmNvbnN0IGNvbnN0YW50cyA9IHtcclxuICB0aXRsZVdpZHRoOiAxNjAsXHJcbiAgc2hlbGxIZWlnaHQ6IDQ4LFxyXG4gIHNoZWxsRGl2aWRlclNpZGVNYXJnaW46IDgsXHJcbiAgc2hlbGxEaXZpZGVyVmVydGljYWxNYXJnaW46IDE2LFxyXG4gIGRpdmlkZXJTdHJva2VXaWR0aDogMSxcclxufTtcclxuXHJcbmludGVyZmFjZSBJdGVtIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGljb246IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlZmxvd1BsYW4ge1xyXG4gIGR5bmFtaWNzRGlzcGxheVN0YWNrOiBJdGVtW107XHJcbiAgc3lzdGVtRGlzcGxheVN0YWNrOiBJdGVtW107XHJcbiAgZHluYW1pY3NPdmVyZmxvd1N0YWNrOiBJdGVtW107XHJcbiAgc3lzdGVtT3ZlcmZsb3dTdGFjazogSXRlbVtdO1xyXG4gIGN1c3RvbU92ZXJmbG93U3RhY2s6IEl0ZW1bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRvcE5hdlN0YXRlIHtcclxuICBzaG93T3ZlcmZsb3dNZW51OiBib29sZWFuLFxyXG4gIGR5bmFtaWNzRGlzcGxheVN0YWNrOiBJdGVtW107XHJcbiAgc3lzdGVtRGlzcGxheVN0YWNrOiBJdGVtW107XHJcbiAgZHluYW1pY3NPdmVyZmxvd1N0YWNrOiBJdGVtW107XHJcbiAgc3lzdGVtT3ZlcmZsb3dTdGFjazogSXRlbVtdO1xyXG4gIGN1c3RvbU92ZXJmbG93U3RhY2s6IEl0ZW1bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFRvcE5hdlByb3BzIHtcclxuICBhdmF0YXJJbWdVcmw6IHN0cmluZztcclxuICBkeW5hbWljc0Rpc3BsYXlTdGFjazogSXRlbVtdO1xyXG4gIHN5c3RlbURpc3BsYXlTdGFjazogSXRlbVtdO1xyXG4gIGN1c3RvbU92ZXJmbG93U3RhY2s6IEl0ZW1bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFNoZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRvcE5hdlByb3BzLCBUb3BOYXZTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUb3BOYXZQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dPdmVyZmxvd01lbnU6IGZhbHNlLFxyXG4gICAgICBkeW5hbWljc0Rpc3BsYXlTdGFjazogWy4uLnRoaXMucHJvcHMuZHluYW1pY3NEaXNwbGF5U3RhY2tdLFxyXG4gICAgICBzeXN0ZW1EaXNwbGF5U3RhY2s6IFsuLi50aGlzLnByb3BzLnN5c3RlbURpc3BsYXlTdGFja10sXHJcbiAgICAgIGR5bmFtaWNzT3ZlcmZsb3dTdGFjazogW10sXHJcbiAgICAgIHN5c3RlbU92ZXJmbG93U3RhY2s6IFtdLFxyXG4gICAgICBjdXN0b21PdmVyZmxvd1N0YWNrOiBbLi4udGhpcy5wcm9wcy5jdXN0b21PdmVyZmxvd1N0YWNrXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaW1lbnNpb25zID0gKCkgPT4ge1xyXG4gICAgdGhpcy5yZWZsb3dJdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgcmVmbG93SXRlbXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGFuOiBSZWZsb3dQbGFuID0ge1xyXG4gICAgICBkeW5hbWljc0Rpc3BsYXlTdGFjazogWy4uLnRoaXMucHJvcHMuZHluYW1pY3NEaXNwbGF5U3RhY2tdLFxyXG4gICAgICBzeXN0ZW1EaXNwbGF5U3RhY2s6IFsuLi50aGlzLnByb3BzLnN5c3RlbURpc3BsYXlTdGFja10sXHJcbiAgICAgIGR5bmFtaWNzT3ZlcmZsb3dTdGFjazogW10sXHJcbiAgICAgIHN5c3RlbU92ZXJmbG93U3RhY2s6IFtdLFxyXG4gICAgICBjdXN0b21PdmVyZmxvd1N0YWNrOiBbLi4udGhpcy5wcm9wcy5jdXN0b21PdmVyZmxvd1N0YWNrXSxcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAodGhpcy5jYW5SZWR1Y2UocGxhbikgJiYgdGhpcy5nZXRSZW1haW5pbmdTcGFjZShwbGFuKSA8IDApIHtcclxuICAgICAgaWYgKHBsYW4uZHluYW1pY3NEaXNwbGF5U3RhY2subGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gMS4gcmVmbG93IGR5bmFtaWNzIGFjdGlvbnNcclxuICAgICAgICBbcGxhbi5keW5hbWljc092ZXJmbG93U3RhY2ssIHBsYW4uZHluYW1pY3NEaXNwbGF5U3RhY2tdID0gW3BsYW4uZHluYW1pY3NEaXNwbGF5U3RhY2ssIFtdXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAyLiByZWZsb3cgc3lzdGVtIGFjdGlvbnNcclxuICAgICAgICBbcGxhbi5zeXN0ZW1PdmVyZmxvd1N0YWNrLCBwbGFuLnN5c3RlbURpc3BsYXlTdGFja10gPSBbcGxhbi5zeXN0ZW1EaXNwbGF5U3RhY2ssIFtdXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHBsYW4pO1xyXG4gIH1cclxuXHJcbiAgY2FuUmVkdWNlID0gKHBsYW46IFJlZmxvd1BsYW4pID0+IHtcclxuICAgIHJldHVybiBwbGFuLmR5bmFtaWNzRGlzcGxheVN0YWNrLmxlbmd0aCArIHBsYW4uc3lzdGVtRGlzcGxheVN0YWNrLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBlZGl0YWJsZSA9IChlOiBhbnkpID0+IGUgJiYgKGUuY29udGVudEVkaXRhYmxlPXRydWUpICYmIChlLnNwZWxsY2hlY2s9ZmFsc2UpO1xyXG5cclxuICBnZXRSZW1haW5pbmdTcGFjZSA9IChwbGFuOiBSZWZsb3dQbGFuKSA9PiB7XHJcbiAgICBjb25zdCB3YWZmbGUgPSBjb25zdGFudHMuc2hlbGxIZWlnaHQ7XHJcbiAgICBjb25zdCB0aXRsZVdpZHRoID0gY29uc3RhbnRzLnRpdGxlV2lkdGg7XHJcbiAgICBjb25zdCBzZWFyY2ggPSBjb25zdGFudHMuc2hlbGxIZWlnaHQ7XHJcbiAgICBjb25zdCBkeW5hbWljc0FjdGlvbnMgPSBjb25zdGFudHMuc2hlbGxIZWlnaHQgKiBwbGFuLmR5bmFtaWNzRGlzcGxheVN0YWNrLmxlbmd0aDtcclxuICAgIGNvbnN0IGN1c3RvbUFjdGlvbiA9IChwbGFuLmN1c3RvbU92ZXJmbG93U3RhY2subGVuZ3RoID09PSAxICYmICFwbGFuLmR5bmFtaWNzT3ZlcmZsb3dTdGFjay5sZW5ndGggJiYgIXBsYW4uc3lzdGVtT3ZlcmZsb3dTdGFjay5sZW5ndGgpID8gY29uc3RhbnRzLnNoZWxsSGVpZ2h0IDogMDtcclxuICAgIGNvbnN0IG92ZXJmbG93TWVudSA9IChwbGFuLmN1c3RvbU92ZXJmbG93U3RhY2subGVuZ3RoICsgcGxhbi5keW5hbWljc092ZXJmbG93U3RhY2subGVuZ3RoICsgcGxhbi5zeXN0ZW1PdmVyZmxvd1N0YWNrLmxlbmd0aCA+IDEpID8gY29uc3RhbnRzLnNoZWxsSGVpZ2h0IDogMDtcclxuICAgIGNvbnN0IGRpdmlkZXIgPSBwbGFuLnN5c3RlbURpc3BsYXlTdGFjay5sZW5ndGggPyBjb25zdGFudHMuc2hlbGxEaXZpZGVyU2lkZU1hcmdpbiAqIDIgKyBjb25zdGFudHMuZGl2aWRlclN0cm9rZVdpZHRoIDogMDtcclxuICAgIGNvbnN0IHN5c3RlbUFjdGlvbnMgPSBjb25zdGFudHMuc2hlbGxIZWlnaHQgKiBwbGFuLnN5c3RlbURpc3BsYXlTdGFjay5sZW5ndGg7XHJcbiAgICBjb25zdCBtZSA9IGNvbnN0YW50cy5zaGVsbEhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggLSAod2FmZmxlICsgdGl0bGVXaWR0aCArIHNlYXJjaCArIGR5bmFtaWNzQWN0aW9ucyArIGN1c3RvbUFjdGlvbiArIG92ZXJmbG93TWVudSArIGRpdmlkZXIgKyBzeXN0ZW1BY3Rpb25zICsgbWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3ZlcmZsb3dJdGVtcyA9IChjdXJyZW50U3RhdGU6IFRvcE5hdlN0YXRlKSA9PiBbLi4uY3VycmVudFN0YXRlLmN1c3RvbU92ZXJmbG93U3RhY2ssIC4uLmN1cnJlbnRTdGF0ZS5keW5hbWljc092ZXJmbG93U3RhY2ssIC4uLmN1cnJlbnRTdGF0ZS5zeXN0ZW1PdmVyZmxvd1N0YWNrXTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBUb3BOYXZQcm9wcykge1xyXG4gICAgaWYgKHByZXZQcm9wcy5jdXN0b21PdmVyZmxvd1N0YWNrICE9PSB0aGlzLnByb3BzLmN1c3RvbU92ZXJmbG93U3RhY2spIHtcclxuICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPdmVyZmxvd01lbnUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93T3ZlcmZsb3dNZW51OiAhdGhpcy5zdGF0ZS5zaG93T3ZlcmZsb3dNZW51fSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkSGVhZGVyPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2hlbGwtaWNvbi1idXR0b24gc2hlbGwtaWNvbi1idXR0b24tLXdhZmZsZVwiPntGdWxsTWRsMi5XYWZmbGVPZmZpY2UzNjV9PC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGVsbC10aXRsZVwiIHJlZj17dGhpcy5lZGl0YWJsZX0+U2FsZXM8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNoZWxsLWljb24tYnV0dG9uXCI+e0Z1bGxNZGwyLlNlYXJjaH08L2J1dHRvbj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5keW5hbWljc0Rpc3BsYXlTdGFjay5tYXAoaXRlbSA9PiBcclxuICAgICAgICAoPGJ1dHRvbiBrZXk9e2l0ZW0ubGFiZWx9IGNsYXNzTmFtZT1cInNoZWxsLWljb24tYnV0dG9uXCI+XHJcbiAgICAgICAge2l0ZW0uaWNvbn1cclxuICAgICAgICA8L2J1dHRvbj4pXHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dGhpcy5nZXRPdmVyZmxvd0l0ZW1zKHRoaXMuc3RhdGUpLmxlbmd0aCA+IDEgPyBcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT3ZlcmZsb3dNZW51fSBjbGFzc05hbWU9XCJzaGVsbC1pY29uLWJ1dHRvbiBzaGVsbC1pY29uLWJ1dHRvbi0tbW9yZVwiPlxyXG4gICAgICAgICAge0Z1bGxNZGwyLk1vcmV9XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmZsb3dNZW51ID9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctbWVudVwiPlxyXG4gICAgICAgICAgICB7Wy4uLnRoaXMuc3RhdGUuZHluYW1pY3NPdmVyZmxvd1N0YWNrLCAuLi50aGlzLnN0YXRlLmN1c3RvbU92ZXJmbG93U3RhY2tdLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5sYWJlbH0gY2xhc3NOYW1lPVwibWVudS1yb3dcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51LXJvd19faWNvblwiPntpdGVtLmljb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnUtcm93X190ZXh0XCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zeXN0ZW1PdmVyZmxvd1N0YWNrLmxlbmd0aCA/IDxkaXYgY2xhc3NOYW1lPVwibWVudS1kaXZpZGVyXCI+PC9kaXY+IDogbnVsbH1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc3lzdGVtT3ZlcmZsb3dTdGFjay5tYXAoaXRlbSA9PiBcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubGFiZWx9IGNsYXNzTmFtZT1cIm1lbnUtcm93XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudS1yb3dfX2ljb25cIj57aXRlbS5pY29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51LXJvd19fdGV4dFwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgIDwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgPC9idXR0b24+IDogdGhpcy5nZXRPdmVyZmxvd0l0ZW1zKHRoaXMuc3RhdGUpLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2hlbGwtaWNvbi1idXR0b25cIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jdXN0b21PdmVyZmxvd1N0YWNrWzBdLmljb259XHJcbiAgICAgICAgPC9idXR0b24+IDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zeXN0ZW1EaXNwbGF5U3RhY2subGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJzaGVsbC1kaXZpZGVyXCI+PC9kaXY+IDogbnVsbH1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zeXN0ZW1EaXNwbGF5U3RhY2subWFwKGl0ZW0gPT4gXHJcbiAgICAgICAgKDxidXR0b24ga2V5PXtpdGVtLmxhYmVsfSBjbGFzc05hbWU9XCJzaGVsbC1pY29uLWJ1dHRvblwiPlxyXG4gICAgICAgIHtpdGVtLmljb259XHJcbiAgICAgICAgPC9idXR0b24+KVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzaGVsbC1pY29uLWJ1dHRvbiBzaGVsbC1pY29uLWJ1dHRvbi0tYXZhdGFyXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIGFsdD1cInlvdXIgYXZhdGFyXCIgc3JjPXt0aGlzLnByb3BzLmF2YXRhckltZ1VybH0+PC9pbWc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvU3R5bGVkSGVhZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAke2NvbnN0YW50cy5zaGVsbEhlaWdodH1weDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMDUwO1xyXG5cclxuICAub3ZlcmZsb3ctbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1zZWdvZS11aSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICR7Y29uc3RhbnRzLnNoZWxsSGVpZ2h0fXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDMuMnB4IDcuMnB4IDAgcmdiYSgwLDAsMCwuMTMyKSwgMCAwLjZweCAxLjhweCAwIHJnYmEoMCwwLDAsLjEwOCk7XHJcbiAgfVxyXG5cclxuICAubWVudS1yb3dfX3RleHQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5tZW51LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDE2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtcm93X19pY29uIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1tZGwyKTtcclxuICAgIGZsZXg6IDAgMCAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtZGl2aWRlciB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgfVxyXG5cclxuICAuc2hlbGwtZGl2aWRlciB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgbWFyZ2luOiAke2NvbnN0YW50cy5zaGVsbERpdmlkZXJWZXJ0aWNhbE1hcmdpbn1weCAke2NvbnN0YW50cy5zaGVsbERpdmlkZXJTaWRlTWFyZ2lufXB4O1xyXG4gICAgd2lkdGg6ICR7Y29uc3RhbnRzLmRpdmlkZXJTdHJva2VXaWR0aH1weDtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjU1KTtcclxuICB9XHJcblxyXG4gIC5zaGVsbC10aXRsZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnNoZWxsLWljb24tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtbWRsMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAke2NvbnN0YW50cy5zaGVsbEhlaWdodH1weDtcclxuICAgIHdpZHRoOiAke2NvbnN0YW50cy5zaGVsbEhlaWdodH1weDtcclxuICB9XHJcblxyXG4gIC5zaGVsbC1pY29uLWJ1dHRvbi0tYXZhdGFyIHtcclxuICAgIGhlaWdodDogJHtjb25zdGFudHMuc2hlbGxIZWlnaHR9cHg7XHJcbiAgICB3aWR0aDogJHtjb25zdGFudHMuc2hlbGxIZWlnaHR9cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIC5hdmF0YXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGhlaWdodDogY2FsYygwLjYqJHtjb25zdGFudHMuc2hlbGxIZWlnaHR9cHgpO1xyXG4gICAgICB3aWR0aDogY2FsYygwLjYqJHtjb25zdGFudHMuc2hlbGxIZWlnaHR9cHgpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNoZWxsLWljb24tYnV0dG9uLS1tb3JlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbmA7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAnUmVhY3QnO1xyXG5pbXBvcnQge0FwcFNoZWxsfSBmcm9tICcuL2FwcC1zaGVsbCc7XHJcbmltcG9ydCB7RnVsbE1kbDJ9IGZyb20gJy4uLy4uL3N0eWxlcy9pY29uL2Z1bGwtbWRsMic7XHJcblxyXG5jb25zdCBkeW5hbWljc0Rpc3BsYXlTdGFjayA9IFt7aWNvbjogRnVsbE1kbDIuVEJYLCBsYWJlbDogXCJUYXNrIGZsb3dcIn0sIHtpY29uOiBGdWxsTWRsMi5Ub29sVGlwLCBsYWJlbDogXCJSZWxhdGlvbnNoaXAgQXNzaXN0YW50XCJ9LCB7aWNvbjogRnVsbE1kbDIuQWRkLCBsYWJlbDogXCJDcmVhdGVcIn1dO1xyXG5jb25zdCBzeXN0ZW1EaXNwbGF5U3RhY2sgPSBbe2ljb246IEZ1bGxNZGwyLlNldHRpbmdzLCBsYWJlbDogXCJTZXR0aW5nc1wifSwge2ljb246IEZ1bGxNZGwyLkhlbHAsIGxhYmVsOiBcIkhlbHBcIn1dO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcFNoZWxsRGVtbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjdXN0b21PdmVyZmxvd1N0YWNrOiBbe2ljb246IEZ1bGxNZGwyLkVtb2ppMiwgbGFiZWw6IFwiQ3VzdG9tIDBcIn1dLFxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRDdXN0b21JdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhY2sgPSBbLi4udGhpcy5zdGF0ZS5jdXN0b21PdmVyZmxvd1N0YWNrLCB7aWNvbjogRnVsbE1kbDIuRW1vamkyLCBsYWJlbDogYEN1c3RvbSAke3RoaXMuc3RhdGUuY3VzdG9tT3ZlcmZsb3dTdGFjay5sZW5ndGh9YH1dO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VzdG9tT3ZlcmZsb3dTdGFjazogbmV3U3RhY2t9KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUN1c3RvbUl0ZW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGFjayA9IFsuLi50aGlzLnN0YXRlLmN1c3RvbU92ZXJmbG93U3RhY2tdO1xyXG4gICAgbmV3U3RhY2sucG9wKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXN0b21PdmVyZmxvd1N0YWNrOiBuZXdTdGFja30pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDI+U2FtcGxlPC9oMj5cclxuICAgICAgPEFwcFNoZWxsIGF2YXRhckltZ1VybD1cImh0dHBzOi8vYXBpLmFkb3JhYmxlLmlvL2F2YXRhcnMvMjg1L2Fib3R0QGFkb3JhYmxlLnBuZ1wiIGR5bmFtaWNzRGlzcGxheVN0YWNrPXtkeW5hbWljc0Rpc3BsYXlTdGFja30gc3lzdGVtRGlzcGxheVN0YWNrPXtzeXN0ZW1EaXNwbGF5U3RhY2t9IGN1c3RvbU92ZXJmbG93U3RhY2s9e3RoaXMuc3RhdGUuY3VzdG9tT3ZlcmZsb3dTdGFja30+PC9BcHBTaGVsbD5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8aDI+VXNhZ2U8L2gyPlxyXG4gICAgICA8c2VjdGlvbiBzdHlsZT17e21hcmdpblRvcDogXCIxNnB4XCJ9fT5cclxuICAgICAgICA8c3Bhbj5DdXN0b20gYWN0aW9uczogPC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5yZW1vdmVDdXN0b21JdGVtfT4tPC9idXR0b24+XHJcbiAgICAgICAgPHNwYW4+IHt0aGlzLnN0YXRlLmN1c3RvbU92ZXJmbG93U3RhY2subGVuZ3RofSA8L3NwYW4+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEN1c3RvbUl0ZW19Pis8L2J1dHRvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8aDM+RGVzaWduIG5vdGVzPC9oMz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+VGhpcyBwcm90b3R5cGUgb25seSBzaG93cyBicm93c2VyIGJlaGF2aW9yLiBTaGltIGV4cGVyaWVuY2UgaXMgb3V0IG9mIHNjb3BlPC9saT5cclxuICAgICAgICAgIDxsaT5XaGVuIHZpZXdwb3J0IG5hcnJvd3MsIER5bmFtaWNzIGFjdGlvbnMgKHRhc2sgZmxvdywgcmVsYXRpb25zaGlwIGFzc2lzdGFuY2UsIGNyZWF0ZSkgY29sbGFwc2UgZmlyc3QsIHRoZW4gU3lzdGVtIGJ1dHRvbnMgKGhlbHAsIHNldHRpbmdzKSBuZXh0PC9saT5cclxuICAgICAgICAgIDxsaT5DdXN0b20gYWN0aW9ucyBhcmUgYWx3YXlzIGNvbGxhcHNlZCBleGNlcHQgd2hlbiB0aGVyZSBpcyBvbmx5IG9uZTwvbGk+XHJcbiAgICAgICAgICA8bGk+VGhlIFN5c3RlbSBidXR0b25zIGFyZSBlaXRoZXIgYWxsIGNvbGxhcHNlZCBvciBhbGwgZXhwYW5kZWQ8L2xpPlxyXG4gICAgICAgICAgPGxpPlRoZSBEeW5hbWljcyBhY3Rpb25zIGFyZSBlaXRoZXIgYWxsIGNvbGxhcHNlZCBvciBhbGwgZXhwYW5kZWQ8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBTaGVsbERlbW87Il0sInNvdXJjZVJvb3QiOiIifQ==