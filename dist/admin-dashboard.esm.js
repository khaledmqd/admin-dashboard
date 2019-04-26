(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css="body { background-color: rgba(0,0,0,0.5); } body .el-menu--vertical { left: 200px !important; } body > .el-menu--vertical { left: 63px !important; } body[dir=rtl] .el-menu--vertical { right: 200px !important; } body[dir=rtl] > .el-menu--vertical { right: 63px !important; } body[dir=rtl] .el-submenu__title .el-icon-arrow-right { right: 150px !important; } body[dir=rtl] .el-icon-arrow-right, body[dir=rtl] .el-icon-arrow-left { transform: scaleX(-1); } .container { height: calc(100vh - 20px); } .el-container { background-color: #fff; border-radius: 10px; border: none; } .el-header { background-color: #addba3; color: #333; line-height: 60px; border-radius: 0 10px 0 0; } .header-title { text-align: center; font-size: 18px; font-weight: bold; color: #333; opacity: 0.5; } .header-actions { text-align: right; } .header-toggle-btn { text-align: left; color: #fff; } .header-toggle-btn i { padding: 10px; cursor: pointer; } .el-main { padding-top: 0 !important; z-index: 99; border-left: 1px solid #e6e6e6; } .content { padding-top: 20px; } .el-submenu__title>span { padding-left: 20px; font-size: 16px; } .el-breadcrumb { padding: 20px; margin-left: -20px; position: -webkit-sticky; position: sticky; top: 0; background-color: #fff; border-bottom: 1px solid rgba(0,0,0,0.04); } .el-menu { background-color: #fff; height: 100%; } .el-menu.el-menu--inline { background-color: rgba(0,255,0,0.04) !important; } .el-menu-item { color: rgba(0,128,0,0.49) !important; } .el-menu-item.is-active { color: #000 !important; } .el-menu-item >span { padding-left: 20px; font-size: 16px; } .menu-opened { width: 250px !important; } .el-aside { width: 200px; transition: width 0.5s; color: #333; border-radius: 0 10px 10px 0; } .el-aside > .el-menu { background-color: transparent; border: none; } .el-aside.menu-closed { width: 50px !important; } .el-aside.menu-closed .el-submenu__icon-arrow { display: none; } .el-menu--vertical { width: 200px; } .rtl .el-main { border-right: 1px solid #e6e6e6; border-left: none !important; } .rtl .el-aside { border-radius: 0 10px 10px 0; } .rtl.el-container { border-radius: 10px; } .rtl .el-menu { padding-right: 0; } .rtl .el-submenu.is-opened { padding-right: 0; } .rtl .el-submenu__title { padding-left: 0 !important; padding-right: 20px !important; } .rtl .el-submenu__title > span { padding-left: 0 !important; padding-right: 20px; } .rtl .el-icon-message { margin-right: 0 !important; margin-left: 5px; } .rtl .el-submenu__icon-arrow { left: 20px; right: auto !important; } .rtl .el-header { text-align: left; border-radius: 10px 0 0 0; } .rtl .el-breadcrumb { margin-left: 0px !important; margin-right: -20px; } .rtl .el-breadcrumb__item { float: right; } .rtl [class*=el-col-] { float: right; } .rtl .header-actions { text-align: left; } .rtl .header-toggle-btn { text-align: right; } .rtl .el-menu-item>span { padding-right: 20px; } .rtl .el-aside { transition: width 0.5s; color: #333; border-radius: 10px 0 0 10px; } .rtl .el-aside .el-menu-item.single-item { width: 50px; } .rtl .el-aside > .el-menu { background-color: transparent; border: none; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var AdminDashboard = {
  template: "<template lang=\"html\">\n  <el-container :class=\"{'container': true, 'rtl': !ltr}\">\n    <el-aside :class=\"{'menu-closed': !menuOpen, 'menu-opened': menuOpen}\">\n      <el-menu :router=\"true\" :default-openeds=\"[activeItem.path]\" :default-active=\"activeItem.path\" class=\"el-menu-vertical-demo\" :collapse=\"!menuOpen\">\n        <div v-for=\"(item, index) in items\" :key=\"index\">\n          <el-submenu v-if=\"item.children\" :index=\"item.title\">\n            <template slot=\"title\">\n              <fa :icon=\"[item.icon.type, item.icon.name]\"/>\n              <span slot=\"title\">{{ item.title }}</span>\n            </template>\n            <div v-for=\"(item, index) in item.children\" :key=\"index\">\n              <el-submenu v-if=\"item.children\" :index=\"item.title\">\n                <span slot=\"title\">{{ item.title }}</span>\n                <div v-for=\"(item, index) in item.children\" :key=\"index\">\n                  <el-submenu v-if=\"item.children\" :index=\"item.title\">\n                    <span slot=\"title\">{{ item.title }}</span>\n                    <el-menu-item v-for=\"(item, index) in item.children\" :key=\"index\" :index=\"item.path\">{{ item.title }}</el-menu-item>\n                  </el-submenu>\n                  <el-menu-item v-else :index=\"item.path\">{{ item.title }}</el-menu-item>\n                </div>\n              </el-submenu>\n\n              <el-menu-item v-else :index=\"item.path\">{{ item.title }}</el-menu-item>\n            </div>\n          </el-submenu>\n            \n          <el-menu-item v-else :index=\"item.path\">\n            <fa :icon=\"[item.icon.type, item.icon.name]\"/>\n\n            <span slot=\"title\">{{ item.title }}</span>\n          </el-menu-item>\n        </div>\n      </el-menu>\n    </el-aside>\n\n    <el-container>\n      <el-header>\n      <el-row>\n        <el-col :span=\"2\" class=\"header-toggle-btn\">\n          <i v-if=\"ltr\" :class=\"{'el-icon-caret-left': menuOpen, 'el-icon-caret-right': !menuOpen}\" @click=\"toggleMenu()\"></i>\n          <i v-else :class=\"{'el-icon-caret-right': menuOpen, 'el-icon-caret-left': !menuOpen}\" @click=\"toggleMenu()\"></i>\n        </el-col>\n        <el-col :span=\"18\" class=\"header-title\">\n          <slot name=\"title\">&nbsp;</slot>\n        </el-col>\n        <el-col :span=\"4\" class=\"header-actions\">\n          <slot name=\"actions\"></slot>\n        </el-col>\n      </el-row>\n      \n      </el-header>\n\n      <el-main>\n        <el-breadcrumb v-if=\"breadcrumb.length > 0\" :separator=\"ltr ? '/' : '\\'\">\n            <el-breadcrumb-item v-for=\"(item, index) in breadcrumb\" :key=\"index\" :to=\"{ path: item.path }\">\n              <!-- <a v-if=\"item.path\"> -->\n                {{ item.title }}\n              <!-- </a> -->\n              <!-- <span v-else>\n                {{ item.title }}\n              </span> -->\n            </el-breadcrumb-item>\n\n          <!-- <el-breadcrumb-item><a href=\"/\">الأعضاء</a></el-breadcrumb-item> -->\n          <!-- <el-breadcrumb-item>الأعضاء الجدد</el-breadcrumb-item> -->\n          <!-- <el-breadcrumb-item>بيانات العضو</el-breadcrumb-item> -->\n        </el-breadcrumb>\n        <div class=\"content\">\n          <slot>\n          </slot>\n        </div>\n      </el-main>\n    </el-container>\n  </el-container>\n</template>",
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
      default: function () { return []; }
    }
  },
  data: function data() {
    return {
      menuOpen: true,
      activeItem: "dashboard"
      // breadcrumb: [
      //   {
      //     title: 'myTitle',
      //     path: '/myPath'
      //   }
      // ]
    };
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
  created: function created() {
    if (!this.ltr) {
      document.body.setAttribute("dir", "rtl");
    }
    var firstItem = this.items[0];
    if (firstItem.children) {
      var firstItem$1 = firstItem$1.children[0];
      if (firstItem$1.children) {
        var firstItem$2 = firstItem$2.children[0];
        this.activeItem = firstItem$2;
      } else {
        this.activeItem = firstItem$1;
      }
    } else {
      this.activeItem = firstItem;
    }
  }
};

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('AdminDashboard', AdminDashboard);
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

export default AdminDashboard;
export { install };
