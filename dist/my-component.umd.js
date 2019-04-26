(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.AdminDashboard = {})));
}(this, (function (exports) { 'use strict';

	(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();var component = {
	}

	// Import vue component

	// Declare install function executed by Vue.use()
	function install(Vue) {
		if (install.installed) { return; }
		install.installed = true;
		Vue.component('AdminDashboard', component);
	}

	// Create module definition for Vue.use()
	var plugin = {
		install: install,
	};

	// Auto-install when vue is found (eg. in browser via <script> tag)
	var GlobalVue = null;
	if (typeof window !== 'undefined') {
		GlobalVue = window.Vue;
	} else if (typeof global !== 'undefined') {
		GlobalVue = global.Vue;
	}
	if (GlobalVue) {
		GlobalVue.use(plugin);
	}

	exports.install = install;
	exports.default = component;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
