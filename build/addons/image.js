module.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{"default":e}};t.__esModule=!0;var a=n(4),o=r(a),u=n(12),i=r(u),s=n(1),l=r(s);n(37);var c=l["default"].createClass({displayName:"Image",propTypes:{content:l["default"].PropTypes.object.isRequired,onChange:l["default"].PropTypes.func.isRequired},getDefaultProps:function(){return{content:{src:""}}},render:function(){var e=this.props.content.src;return l["default"].createElement("div",{className:"col-img"},l["default"].createElement(i["default"],this.props.content),l["default"].createElement("fieldset",{className:"col-img-fieldset"},l["default"].createElement(o["default"],{label:"Image Source",type:"url",value:e,name:"image_src",onChange:this._onSrcChange})))},_onSrcChange:function(e){this.props.onChange({src:e.currentTarget.value})},_onCaptionChange:function(e){this.props.onChange({caption:e.currentTarget.value})},_onAttributionChange:function(e){this.props.onChange({attribution:e.currentTarget.value})}});t["default"]=c,e.exports=t["default"]},1:function(e,t,n){e.exports=require("react")},4:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{"default":e}},a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.__esModule=!0;var u=n(1),i=r(u);n(6),t["default"]=i["default"].createClass({displayName:"field",getDefaultProps:function(){return{type:"text"}},render:function(){var e=this.props,t=e.label,n=e.name,r=e.type,u=a(e,["label","name","type"]);return i["default"].createElement("div",{className:"col-field"},i["default"].createElement("label",{className:"col-field-label",htmlFor:n||this.props.id},t),i["default"].createElement("input",o({className:"col-field-input",type:r},u,{name:n||this.props.id})))}}),e.exports=t["default"]},6:function(e,t,n){},12:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{"default":e}};t.__esModule=!0;var a=n(1),o=r(a),u=o["default"].createClass({displayName:"Graphic",render:function(){var e=this.props.src;return e?o["default"].createElement("figure",{className:"col-img-figure"},o["default"].createElement("img",{className:"col-img-graphic",src:e,alt:""})):null}});t["default"]=u,e.exports=t["default"]},37:function(e,t,n){}});
//# sourceMappingURL=image.js.map