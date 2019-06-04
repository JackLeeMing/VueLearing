import Vue from 'vue'
// import App from './App.vue'
// import App from './App2.vue'
// import App from './App3.vue'
// import App from './App4.vue'
import App from './App5.vue'
import Vuex from 'vuex'
import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count: 0
  },
  mutations:{
    increment(state){
      state.count += 1;
    }
  },
  actions:{
    increment({commit}){
      setTimeout(()=>{
        commit('increment');
      }, 3000)
    }
  },
  getters:{
    doubleCount(state){
      return state.count * 2;
    }
  }
})
let vue = new Vue({
  store,
  render: h => h(App),
});
vue.$mount('#app');
