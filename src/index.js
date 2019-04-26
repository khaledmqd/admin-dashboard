import Vue from 'vue';
import AdminDashboard from './components/admin-dashboard.vue';

const Components = {
	AdminDashboard
};

Object.keys(Components).forEach(name => {
	Vue.component(name, Components[name])
});

export default Components;