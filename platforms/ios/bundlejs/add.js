// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("text",{staticClass:["message"]},[t._v("一个简单的测试")])},staticRenderFns:[]}},function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"../../";return"Web"===WXEnvironment.platform?n+"assets/img/"+t+e:"android"===WXEnvironment.platform?"local:///"+t:"local:///bundlejs/assets/img/"+t+e}function a(t){if("Web"===weex.config.env.platform)return"./"+t+".html";var e=weex.config.bundleUrl.split("/");return e.pop(),e.push(t+".js"),e.join("/")}Object.defineProperty(e,"__esModule",{value:!0}),e.getImagePath=r,e.getEntryUrl=a},function(t,e,n){var r,a,i=[],o=n(0);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r},function(t,e,n){var r,a,i=[];i.push(n(4)),r=n(5);var o=n(6);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-b80fe388",a.style=a.style||{},i.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},function(t,e){t.exports={header:{position:"fixed",top:0,left:0,width:"750",height:"100",backgroundColor:"#373a3f",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingLeft:"20",paddingRight:"20"},"back-container":{flex:1,width:"100",height:"36",flexDirection:"row",alignItems:"center"},"back-icon":{width:"20",height:"35"},"back-title":{marginLeft:"15",color:"#ffffff"},title:{flex:2,color:"#ffffff",textAlign:"center"},"add-message-container":{flex:1,flexDirection:"row-reverse"},"add-message":{width:"46",height:"36"},"page-content":{width:"750",height:"1335"},"user-background":{width:"750",height:"500"},"user-info-container":{flexDirection:"row-reverse",top:"-100",right:"20"},avatar:{width:"150",height:"150",borderStyle:"solid",borderColor:"#ffffff",borderWidth:"4"},nickname:{color:"#ffffff",fontSize:"36",marginRight:"45",textAlign:"right",lineHeight:"100"}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=n(2),o=r(i),s=weex.requireModule("navigator");e.default={name:"Add",data:function(){return{ui:{back:(0,a.getImagePath)("back",".png"),addMassage:(0,a.getImagePath)("addMessage",".png")},userInfo:{nickname:"点我更改昵称",avatar:(0,a.getImagePath)("defaultAvatar",".png"),background:(0,a.getImagePath)("defaultBackground",".png")},list:[]}},mounted:function(){this.list=["",""]},methods:{goBack:function(){s.pop({animated:"true"})},gotoAddMessage:function(){s.push({url:"http://dotwe.org/raw/dist/519962541fcf6acd911986357ad9c2ed.js",animated:"true"},function(t){})}},components:{Message:o.default}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("div",{staticClass:["header"]},[n("div",{staticClass:["back-container"],on:{click:t.goBack}},[n("text",{staticClass:["back-title"]},[t._v("取消")])]),n("text",{staticClass:["title"]},[t._v("发朋友圈")]),n("div",{staticClass:["add-message-container"],on:{click:t.gotoAddMessage}},[n("image",{staticClass:["add-message"],attrs:{src:t.ui.addMassage}})])]),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroller",{staticClass:["page-content"]},[n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")]),n("text",[t._v("添加朋友圈")])])}]}}]);