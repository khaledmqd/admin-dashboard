module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "205c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6365":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_dashboard_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("205c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_dashboard_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_dashboard_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_dashboard_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/admin-dashboard.vue?vue&type=template&id=707cf366&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',{class:{'container': true, 'rtl': !_vm.ltr}},[_c('el-aside',{class:{'menu-closed': !_vm.menuOpen, 'menu-opened': _vm.menuOpen}},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"router":true,"default-openeds":[_vm.activeItem.path],"default-active":_vm.activeItem.path,"collapse":!_vm.menuOpen}},_vm._l((_vm.items),function(item,index){return _c('div',{key:index},[(item.children)?_c('el-submenu',{attrs:{"index":item.title}},[_c('template',{slot:"title"},[_c('fa',{attrs:{"icon":[item.icon.type, item.icon.name]}}),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(item.title))])],1),_vm._l((item.children),function(item,index){return _c('div',{key:index},[(item.children)?_c('el-submenu',{attrs:{"index":item.title}},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(item.title))]),_vm._l((item.children),function(item,index){return _c('div',{key:index},[(item.children)?_c('el-submenu',{attrs:{"index":item.title}},[_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(item.title))]),_vm._l((item.children),function(item,index){return _c('el-menu-item',{key:index,attrs:{"index":item.path}},[_vm._v(_vm._s(item.title))])})],2):_c('el-menu-item',{attrs:{"index":item.path}},[_vm._v(_vm._s(item.title))])],1)})],2):_c('el-menu-item',{attrs:{"index":item.path}},[_vm._v(_vm._s(item.title))])],1)})],2):_c('el-menu-item',{attrs:{"index":item.path}},[_c('fa',{attrs:{"icon":[item.icon.type, item.icon.name]}}),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(item.title))])],1)],1)}),0)],1),_c('el-container',[_c('el-header',[_c('el-row',[_c('el-col',{staticClass:"header-toggle-btn",attrs:{"span":2}},[(_vm.ltr)?_c('i',{class:{'el-icon-caret-left': _vm.menuOpen, 'el-icon-caret-right': !_vm.menuOpen},on:{"click":function($event){return _vm.toggleMenu()}}}):_c('i',{class:{'el-icon-caret-right': _vm.menuOpen, 'el-icon-caret-left': !_vm.menuOpen},on:{"click":function($event){return _vm.toggleMenu()}}})]),_c('el-col',{staticClass:"header-title",attrs:{"span":18}},[_vm._t("title",[_vm._v(" ")])],2),_c('el-col',{staticClass:"header-actions",attrs:{"span":4}},[_vm._t("actions")],2)],1)],1),_c('el-main',[(_vm.breadcrumb.length > 0)?_c('el-breadcrumb',{attrs:{"separator":_vm.ltr ? '/' : '\\'}},_vm._l((_vm.breadcrumb),function(item,index){return _c('el-breadcrumb-item',{key:index,attrs:{"to":{ path: item.path }}},[_vm._v("\n              "+_vm._s(item.title)+"\n            ")])}),1):_vm._e(),_c('div',{staticClass:"content"},[_vm._t("default")],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/admin-dashboard.vue?vue&type=template&id=707cf366&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/admin-dashboard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var admin_dashboardvue_type_script_lang_js_ = ({
  props: {
    ltr: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    },
    breadcrumb: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      menuOpen: true,
      activeItem: "dashboard" // breadcrumb: [
      //   {
      //     title: 'myTitle',
      //     path: '/myPath'
      //   }
      // ]

    };
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }

  },

  created() {
    if (!this.ltr) {
      document.body.setAttribute("dir", "rtl");
    }

    let firstItem = this.items[0];

    if (firstItem.children) {
      let firstItem = firstItem.children[0];

      if (firstItem.children) {
        let firstItem = firstItem.children[0];
        this.activeItem = firstItem;
      } else {
        this.activeItem = firstItem;
      }
    } else {
      this.activeItem = firstItem;
    }
  }

});
// CONCATENATED MODULE: ./src/components/admin-dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_admin_dashboardvue_type_script_lang_js_ = (admin_dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/admin-dashboard.vue?vue&type=style&index=0&lang=stylus&
var admin_dashboardvue_type_style_index_0_lang_stylus_ = __webpack_require__("6365");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/admin-dashboard.vue






/* normalize component */

var component = normalizeComponent(
  components_admin_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var admin_dashboard = (component.exports);
// CONCATENATED MODULE: ./src/index.js


const Components = {
  AdminDashboard: admin_dashboard
};
Object.keys(Components).forEach(name => {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(name, Components[name]);
});
/* harmony default export */ var src = (Components);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
//# sourceMappingURL=admin-dashboard.common.js.map