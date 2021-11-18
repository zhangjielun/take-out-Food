import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { Notify } from 'vant';

// 全局注册
Vue.use(Notify);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
