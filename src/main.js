import Vue from 'vue'
// import App from './App.vue'
// import App from './App2.vue'
// import App from './App3.vue'
// import App from './App4.vue'
import App from './App5.vue'
import Vuex from 'vuex'
import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue'
import {INCREMENT, SET_OBJ, ASYNC_INCREMENT} from './mutations/mutation-types'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count: 0,
    obj:{
      meto: 'OPOPOP'
    }
  },
  // 更改 Vuex 的 store 中的状态的唯一方法 reducer
  // Mutation 必须是同步函数
  mutations:{
    // 载荷（Payload） 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload)
    [INCREMENT]: (state, payload={amount : 1})=>{
      state.count += payload.amount;
    },
    [SET_OBJ]:(state, payload={count: 0, name: 'x'}) => {
      state.obj = {...state.obj, ...payload};
    }
  },
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
  // 因此你可以调用 context.commit 提交一个 mutation，
  // 或者通过 context.state 和 context.getters 来获取 state 和 getters。

  // Action 通过 store.dispatch 方法触发
  actions:{
    // 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [ASYNC_INCREMENT](context){
     let p =  new Promise((resolve)=>{
          setTimeout(()=>{
            resolve('done')
          }, 3000)
      });
      p.then((data)=>{
        if(data == 'done'){
          context.commit(INCREMENT);
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
