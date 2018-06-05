// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImagePath = getImagePath;
exports.getEntryUrl = getEntryUrl;

// 获取本地静态资源（图片）路径
function getImagePath(name) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var abs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '../../';

  // debugger
  if (WXEnvironment.platform === 'Web') {
    return abs + 'assets/img/' + name + type;
  } else if (WXEnvironment.platform === 'android') {
    return 'local:///' + name;
  } else {
    return 'local:///bundlejs/assets/img/' + name + type;
  }
}
function getEntryUrl(name) {
  if (weex.config.env.platform === 'Web') {
    return './' + name + '.html';
  } else {
    var arr = weex.config.bundleUrl.split('/');
    arr.pop();
    arr.push(name + '.js');
    return arr.join('/');
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "message": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "flexDirection": "row",
    "borderBottomWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#e1e1df"
  },
  "left": {
    "width": "85"
  },
  "right": {
    "marginLeft": "20",
    "flex": 1,
    "lineHeight": "40"
  },
  "name": {
    "fontSize": "30",
    "color": "#586b96",
    "lineHeight": "40"
  },
  "content": {
    "marginTop": "5",
    "marginBottom": "10",
    "fontSize": "22",
    "color": "#000000",
    "lineHeight": "40"
  },
  "avatar": {
    "width": "85",
    "height": "85"
  },
  "image": {
    "width": "300",
    "height": "300"
  },
  "time-container": {
    "marginTop": "20",
    "marginBottom": "20",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "time": {
    "fontSize": "20",
    "color": "#747474"
  },
  "favour-comment": {
    "width": "40",
    "height": "30"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

exports.default = {
  name: 'Message',
  data: function data() {
    return {
      ui: {
        favourComment: (0, _util.getImagePath)('favour-comment', '.png'),
        favour: (0, _util.getImagePath)('favour', '.png')
      },
      platform: weex.config.env.platform.toLowerCase()
    };
  },

  props: {
    userInfo: null,
    message: null
  },
  beforeCreate: function beforeCreate() {
    // const domModule = weex.requireModule('dom')
    // domModule.addRule('fontFace', {
    //   'fontFamily': "iconfont",
    //   'src': "url('http://at.alicdn.com/t/font_571013_3jfs8b3sidxwdn29.ttf')"
    // })
  },

  methods: {
    onBack: function onBack() {
      // navigator.pop({
      //   animated: 'true'
      // })
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const navigator = weex.requireModule('navigator')

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["message"],
    class: [_vm.platform === 'ios' ? 'is-ios' : '']
  }, [_c('div', {
    staticClass: ["left"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": _vm.userInfo.avatar
    }
  })]), _c('div', {
    staticClass: ["right"]
  }, [_c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))]), _c('text', {
    staticClass: ["content"]
  }, [_vm._v(_vm._s(_vm.message.content))]), _vm._l((_vm.message.images), function(img) {
    return _c('image', {
      key: img,
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img
      }
    })
  }), _c('div', {
    staticClass: ["time-container"]
  }, [_c('text', {
    staticClass: ["time"]
  }, [_vm._v("1分钟前")]), _c('image', {
    staticClass: ["favour-comment"],
    attrs: {
      "src": _vm.ui.favourComment
    }
  })])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Zhang/Documents/MyGit/weexApp/src/components/Message.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b4fc08ba"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Zhang/Documents/MyGit/weexApp/src/add.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b80fe388"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "width": "750",
    "height": "100",
    "backgroundColor": "#373a3f",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "back-container": {
    "flex": 1,
    "width": "100",
    "height": "36",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "back-icon": {
    "width": "20",
    "height": "35"
  },
  "back-title": {
    "marginLeft": "15",
    "color": "#ffffff"
  },
  "title": {
    "flex": 2,
    "color": "#ffffff",
    "textAlign": "center"
  },
  "add-message-container": {
    "flex": 1,
    "flexDirection": "row-reverse"
  },
  "add-message": {
    "width": "46",
    "height": "36"
  },
  "page-content": {
    "width": "750",
    "height": "1335"
  },
  "user-background": {
    "width": "750",
    "height": "500"
  },
  "user-info-container": {
    "flexDirection": "row-reverse",
    "top": "-100",
    "right": "20"
  },
  "avatar": {
    "width": "150",
    "height": "150",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "borderWidth": "4"
  },
  "nickname": {
    "color": "#ffffff",
    "fontSize": "36",
    "marginRight": "45",
    "textAlign": "right",
    "lineHeight": "100"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _Message = __webpack_require__(4);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
  name: 'Add',
  data: function data() {
    return {
      ui: {
        back: (0, _util.getImagePath)('back', '.png'),
        addMassage: (0, _util.getImagePath)('addMessage', '.png')
      },
      userInfo: {
        nickname: '点我更改昵称',
        avatar: (0, _util.getImagePath)('defaultAvatar', '.png'),
        background: (0, _util.getImagePath)('defaultBackground', '.png')
      },
      list: []
    };
  },
  mounted: function mounted() {
    this.list = ['', ''];
  },

  methods: {
    goBack: function goBack() {
      navigator.pop({
        animated: 'true'
      });
    },
    gotoAddMessage: function gotoAddMessage() {
      navigator.push({
        url: 'http://dotwe.org/raw/dist/519962541fcf6acd911986357ad9c2ed.js',
        animated: 'true'
      }, function (event) {
        // modal.toast({ message: 'callback: ' + event })
      });
    }
  },
  components: {
    Message: _Message2.default
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticClass: ["back-container"],
    on: {
      "click": _vm.goBack
    }
  }, [_c('text', {
    staticClass: ["back-title"]
  }, [_vm._v("取消")])]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("发朋友圈")]), _c('div', {
    staticClass: ["add-message-container"],
    on: {
      "click": _vm.gotoAddMessage
    }
  }, [_c('image', {
    staticClass: ["add-message"],
    attrs: {
      "src": _vm.ui.addMassage
    }
  })])]), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["page-content"]
  }, [_c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")]), _c('text', [_vm._v("添加朋友圈")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);