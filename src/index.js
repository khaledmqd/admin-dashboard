import Vue from 'vue';
import AdminDashboard from './components/admin-dashboard.vue';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ar'

library.add(fab, far, fas)

Vue.component('fa', FontAwesomeIcon)

Vue.use(Element, { locale })


const Components = {
	AdminDashboard
};

Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name])
});

export default Components;