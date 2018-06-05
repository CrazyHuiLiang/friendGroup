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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  name: 'ImagePicker',
  methods: {
    pick: function pick() {
      if (WXEnvironment.platform === 'Web') {
        modal.toast({ message: '功能即将上线，敬请期待' });
      } else if (WXEnvironment.platform === 'android') {
        modal.toast({ message: '功能即将上线，敬请期待' });
      } else {
        modal.toast({ message: '功能即将上线，敬请期待' });
      }
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["message"]
  }, [_vm._v("一个简单的测试")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "/Users/Zhang/Documents/MyGit/weexApp/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d6192da6"
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
/* 15 */
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
  "is-ios-header": {
    "top": "-50",
    "paddingTop": "30",
    "height": "130"
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
    "marginTop": "-100",
    "marginRight": "20"
  },
  "avatar-container": {
    "width": "150",
    "height": "150",
    "backgroundColor": "#ffffff",
    "paddingTop": "4",
    "paddingRight": "4",
    "paddingBottom": "4",
    "paddingLeft": "4",
    "borderStyle": "solid",
    "borderColor": "#cccccc",
    "borderWidth": "2"
  },
  "avatar": {
    "width": "138",
    "height": "138"
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _index = __webpack_require__(17);

var _ImagePicker = __webpack_require__(18);

var _ImagePicker2 = _interopRequireDefault(_ImagePicker);

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
//

var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');

exports.default = {
  name: 'App',
  data: function data() {
    return {
      ui: {
        back: (0, _util.getImagePath)('back', '.png'),
        addMassage: (0, _util.getImagePath)('addMessage', '.png')
      },
      platform: weex.config.env.platform.toLowerCase(),
      userInfo: {},
      list: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    (0, _index.getUserInfo)(function (response) {
      _this.userInfo = response;
    });
    (0, _index.getMessageList)(function (response) {
      _this.list = response;
    });
  },

  methods: {
    gotoAddMessage: function gotoAddMessage() {
      navigator.push({
        url: (0, _util.getEntryUrl)('add'),
        animated: 'true'
      }, function (event) {
        // modal.toast({ message: 'callback: ' + event })
      });
    },
    nickNameClicked: function nickNameClicked() {
      var _this2 = this;

      modal.prompt({
        message: '请输入您的昵称',
        okTitle: '确定',
        cancelTitle: '取消'
      }, function (r) {
        if (r.result === '确定') {
          (0, _index.updateUserInfo)({ nickName: r.data }, function (newInfo) {
            _this2.userInfo = newInfo;
          });
        }
      });
    },
    userBackgroundClicked: function userBackgroundClicked() {
      var imagePicker = this.$refs.imagePicker;
      imagePicker.pick();
    }
  },
  components: {
    ImagePicker: _ImagePicker2.default,
    Message: _Message2.default
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getUserInfo = getUserInfo;
exports.updateUserInfo = updateUserInfo;
exports.getMessageList = getMessageList;

var _util = __webpack_require__(0);

var storage = weex.requireModule('storage');
/*
* 用户信息
* */
var UserInfoKey = 'UserInfoKey';
var defaultUserInfo = {
  nickName: '点我编辑昵称',
  avatar: (0, _util.getImagePath)('defaultAvatar', '.png'), // 'http://7xt2se.com1.z0.glb.clouddn.com/zhl-avatar.jpeg',
  background: (0, _util.getImagePath)('defaultBackground', '.png') // 'https://img.zcool.cn/community/01ee3b5b1124f0a801212d57af516c.jpg@1280w_1l_2o_100sh.jpg'


  /*
  * 获取用户信息
  * */
};function getUserInfo(callback) {
  storage.getItem(UserInfoKey, function (event) {
    var userInfo = void 0;
    if (event.data === 'undefined') {
      userInfo = defaultUserInfo;
    } else {
      userInfo = JSON.parse(event.data);
    }
    // console.log(userInfo)
    callback(userInfo);
  });
}

/*
* 更改用户信息
* info: 类似上面defaultUserInfo的结构
* */
function updateUserInfo(info, callback) {
  getUserInfo(function (userInfo) {
    var newInfo = _extends({}, userInfo, info);
    storage.setItem(UserInfoKey, JSON.stringify(newInfo), function (r) {
      callback(newInfo);
    });
  });
}

/*
* 获取朋友圈列表
* */
function getMessageList(callback) {
  var list = [{
    content: 'weex的文档写的真是糟糕通了，都三四年的项目了，文档还这么乱，真不害臊',
    images: ['https://img.zcool.cn/community/012047575fc8330000012e7e28d77b.jpg@1280w_1l_2o_100sh.jpg']
  }];
  callback(list);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/Zhang/Documents/MyGit/weexApp/src/components/ImagePicker.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-30415665"
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
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    class: [_vm.platform === 'ios' ? 'is-ios' : '']
  }, [_c('div', {
    staticClass: ["header"],
    class: [_vm.platform === 'ios' ? 'is-ios-header' : '']
  }, [_c('div', {
    staticClass: ["back-container"]
  }, [_c('image', {
    staticClass: ["back-icon"],
    attrs: {
      "src": _vm.ui.back,
      "resize": "cover"
    }
  }), _c('text', {
    staticClass: ["back-title"]
  }, [_vm._v("发现")])]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("朋友圈")]), _c('div', {
    staticClass: ["add-message-container"],
    on: {
      "click": _vm.gotoAddMessage
    }
  }, [_c('image', {
    staticClass: ["add-message"],
    attrs: {
      "src": _vm.ui.addMassage
    }
  })])]), _c('scroller', {
    staticClass: ["page-content"]
  }, [_c('image', {
    staticClass: ["user-background"],
    attrs: {
      "src": _vm.userInfo.background
    },
    on: {
      "click": _vm.userBackgroundClicked
    }
  }), _c('div', {
    staticClass: ["user-info-container"]
  }, [_c('div', {
    staticClass: ["avatar-container"]
  }, [_c('image', {
    staticClass: ["avatar"],
    attrs: {
      "src": _vm.userInfo.avatar
    }
  })]), _c('text', {
    staticClass: ["nickname"],
    on: {
      "click": _vm.nickNameClicked
    }
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))])]), _c('div', {
    staticClass: ["message-container"]
  }, _vm._l((_vm.list), function(item, index) {
    return _c('Message', {
      key: index,
      ref: 'item' + index,
      refInFor: true,
      staticClass: ["row"],
      attrs: {
        "userInfo": _vm.userInfo,
        "message": item
      }
    })
  }))]), _c('image-picker', {
    ref: "imagePicker"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);