import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import Login from './Login.vue';
import router from './router';
import store from './store/index';

import HttpService from './services/http.service';

const http = new HttpService();

Vue.use(ElementUI);
Vue.config.productionTip = false;

http.get('/user')
    .then((res) => {
        store.dispatch('user/setUser', res);
        new Vue({
            store,
            router: router.app,
            render: h => h(App),
        }).$mount('#app');
    })
    .catch((e) => {
        console.error(e);
        new Vue({
            store,
            router: router.login,
            render: h => h(Login),
        }).$mount('#app');
    });

