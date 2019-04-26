<script>
export default {
  template: `<template lang="html">
  <el-container :class="{'container': true, 'rtl': !ltr}">
    <el-aside :class="{'menu-closed': !menuOpen, 'menu-opened': menuOpen}">
      <el-menu :router="true" :default-openeds="[activeItem.path]" :default-active="activeItem.path" class="el-menu-vertical-demo" :collapse="!menuOpen">
        <div v-for="(item, index) in items" :key="index">
          <el-submenu v-if="item.children" :index="item.title">
            <template slot="title">
              <fa :icon="[item.icon.type, item.icon.name]"/>
              <span slot="title">{{ item.title }}</span>
            </template>
            <div v-for="(item, index) in item.children" :key="index">
              <el-submenu v-if="item.children" :index="item.title">
                <span slot="title">{{ item.title }}</span>
                <div v-for="(item, index) in item.children" :key="index">
                  <el-submenu v-if="item.children" :index="item.title">
                    <span slot="title">{{ item.title }}</span>
                    <el-menu-item v-for="(item, index) in item.children" :key="index" :index="item.path">{{ item.title }}</el-menu-item>
                  </el-submenu>
                  <el-menu-item v-else :index="item.path">{{ item.title }}</el-menu-item>
                </div>
              </el-submenu>

              <el-menu-item v-else :index="item.path">{{ item.title }}</el-menu-item>
            </div>
          </el-submenu>
            
          <el-menu-item v-else :index="item.path">
            <fa :icon="[item.icon.type, item.icon.name]"/>

            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
      <el-row>
        <el-col :span="2" class="header-toggle-btn">
          <i v-if="ltr" :class="{'el-icon-caret-left': menuOpen, 'el-icon-caret-right': !menuOpen}" @click="toggleMenu()"></i>
          <i v-else :class="{'el-icon-caret-right': menuOpen, 'el-icon-caret-left': !menuOpen}" @click="toggleMenu()"></i>
        </el-col>
        <el-col :span="18" class="header-title">
          <slot name="title">&nbsp;</slot>
        </el-col>
        <el-col :span="4" class="header-actions">
          <slot name="actions"></slot>
        </el-col>
      </el-row>
      
      </el-header>

      <el-main>
        <el-breadcrumb v-if="breadcrumb.length > 0" :separator="ltr ? '/' : '\\'">
            <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="{ path: item.path }">
              <!-- <a v-if="item.path"> -->
                {{ item.title }}
              <!-- </a> -->
              <!-- <span v-else>
                {{ item.title }}
              </span> -->
            </el-breadcrumb-item>

          <!-- <el-breadcrumb-item><a href="/">الأعضاء</a></el-breadcrumb-item> -->
          <!-- <el-breadcrumb-item>الأعضاء الجدد</el-breadcrumb-item> -->
          <!-- <el-breadcrumb-item>بيانات العضو</el-breadcrumb-item> -->
        </el-breadcrumb>
        <div class="content">
          <slot>
          </slot>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>`,
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
};
</script>


<style lang="stylus">
$colorHeader = #addba3;
$colorHeaderText = #333;
$colorItem = #0080007d;
$colorItemActive = #000;
$colorItemBG = #fff;
$colorItemBGActive = #ecf5ff;
$colorMenu = #fff;

body {
  background-color: rgba(0, 0, 0, 0.5);

  .el-menu--vertical {
    left: 200px !important;
  }

  > .el-menu--vertical {
    left: 63px !important;
  }

  &[dir=rtl] {
    .el-menu--vertical {
      right: 200px !important;
    }

    > .el-menu--vertical {
      right: 63px !important;
    }

    .el-submenu__title {
      // .el-submenu__icon-arrow
      .el-icon-arrow-right {
        right: 150px !important;
      }
    }

    .el-icon-arrow-right, .el-icon-arrow-left {
      transform: scaleX(-1);
    }
  }
}

.container {
  height: calc(100vh - 20px);
}

.el-container {
  background-color: #fff;
  border-radius: 10px;
  border: none;
}

.el-header {
  background-color: $colorHeader;
  color: $colorHeaderText;
  line-height: 60px;
  border-radius: 0 10px 0 0;
}

.header-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: $colorHeaderText;
  opacity: 0.5;
}

.header-actions {
  text-align: right;
}

.header-toggle-btn {
  text-align: left;
  color: $colorMenu;

  i {
    padding: 10px;
    cursor: pointer;
  }
}

.el-main {
  padding-top: 0 !important;
  z-index: 99;
  border-left: 1px solid #e6e6e6;
}

.content {
  padding-top: 20px;
}

.el-submenu__title>span {
  padding-left: 20px;
  font-size: 16px;
}

.el-breadcrumb {
  padding: 20px;
  margin-left: -20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.el-menu {
  background-color: $colorMenu;
  height: 100%;

  &.el-menu--inline {
    background-color: rgba(0, 255, 0, 0.04) !important;
  }
}

.el-menu-item {
  color: $colorItem !important;

  &.is-active {
    color: $colorItemActive !important;
  }

  >span {
    padding-left: 20px;
    font-size: 16px;
  }
}

.menu-opened {
  width: 250px !important;
}

.el-aside {
  width: 200px;
  transition: width 0.5s;
  color: #333;
  border-radius: 0 10px 10px 0;

  > .el-menu {
    background-color: transparent;
    border: none;
  }

  &.menu-closed {
    width: 50px !important;

    .el-submenu__icon-arrow {
      display: none;
    }
  }
}

.el-menu--vertical {
  width: 200px;
}

.rtl {
  .el-main {
    border-right: 1px solid #e6e6e6;
    border-left: none !important;
  }

  .el-aside {
    border-radius: 0 10px 10px 0;
  }

  &.el-container {
    border-radius: 10px;
  }

  .el-menu {
    padding-right: 0;
  }

  .el-submenu {
    &.is-opened {
      padding-right: 0;
    }
  }

  .el-submenu__title {
    padding-left: 0 !important;
    padding-right: 20px !important;

    > span {
      padding-left: 0 !important;
      padding-right: 20px;
    }
  }

  .el-icon-message {
    margin-right: 0 !important;
    margin-left: 5px;
  }

  .el-submenu__icon-arrow {
    left: 20px;
    right: auto !important;
  }

  .el-header {
    text-align: left;
    border-radius: 10px 0 0 0;
  }

  .el-breadcrumb {
    margin-left: 0px !important;
    margin-right: -20px;
  }

  .el-breadcrumb__item {
    float: right;
  }

  [class*=el-col-] {
    float: right;
  }

  .header-actions {
    text-align: left;
  }

  .header-toggle-btn {
    text-align: right;
  }

  .el-menu-item>span {
    padding-right: 20px;
  }

  .el-aside {
    transition: width 0.5s;
    color: #333;
    border-radius: 10px 0 0 10px;

    .el-menu-item.single-item {
      width: 50px;
    }

    > .el-menu {
      background-color: transparent;
      border: none;
    }
  }
}
</style>
