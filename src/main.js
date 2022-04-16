import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { ValidationProvider, ValidationObserver } from './validations';

Vue.config.productionTip = false;

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
