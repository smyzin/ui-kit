// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import element from 'element-ui';
// import './assets/upoint-ui/index.min.css';
import '../static/index.min.css';
import locale from 'element-ui/lib/locale/lang/ru-RU.js'
// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(element, {locale, size:'mini'});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
