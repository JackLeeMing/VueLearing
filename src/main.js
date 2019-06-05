import Vue from 'vue'
import router from './routes'
import store from './store'
import Index from './IndexPage'
import Antd from 'ant-design-vue'
import iView from 'iview';

import 'ant-design-vue/dist/antd.css'
import 'iview/dist/styles/iview.css';

// import App from './App.vue'

// import App from './App3.vue'
// import App from './App4.vue'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(iView)

let vue = new Vue({
  router,
  store,
  render: h => h(Index),
});
vue.$mount('#app');
