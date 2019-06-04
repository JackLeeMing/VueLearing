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
    count: 0,
    obj:{
      
    }
  },
  // 更改 Vuex 的 store 中的状态的唯一方法 reducer
  mutations:{
    // 载荷（Payload） 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload)
    'increment': (state, payload={amount : 1})=>{
      state.count += payload.amount;
    }
  },
  actions:{
    increment(action){
     let p =  new Promise((resolve)=>{
          setTimeout(()=>{
            resolve('done')
          }, 3000)
      });
      p.then((data)=>{
        if(data == 'done'){
          action.commit('increment');
        }
      });
    }
  },
  getters:{
    doubleCount: state => {
      return state.count * 2;
    }
  }
})
let vue = new Vue({
  store,
  render: h => h(App),
});
vue.$mount('#app');
