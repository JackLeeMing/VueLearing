import Vue from 'vue'
// import App from './App.vue'
// import App from './App2.vue'
// import App from './App3.vue'
// import App from './App4.vue'
import App from './App5.vue'
import Vuex from 'vuex'
import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue'
import types from './mutations/mutation-types'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Vuex)

function getData(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({a:1, b:2});
    }, 2000)
  });
}

function getOtherData(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({c:2, d:3});
    }, 2000)
  });
}

const store = new Vuex.Store({
  state:{
    count: 0,
    obj:{
      meto: 'OPOPOP'
    },
    result:{

    }
  },
  // 更改 Vuex 的 store 中的状态的唯一方法 reducer
  // Mutation 必须是同步函数
  mutations:{
    // 载荷（Payload） 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload)
    [types.INCREMENT]: (state, payload={amount : 1})=>{
      state.count += payload.amount;
    },
    [types.PromiseSET_OBJ]:(state, payload={count: 0, name: 'x'}) => {
      state.obj = {...state.obj, ...payload};
    },
    gotData:(state, payload)=>{
      if(payload){
        state.result = { ...state.result, ...payload}
      }
    },
    gotOtherData:(state, payload)=>{
      if(payload){
        state.result = { ...state.result, ...payload}
      }
    }
  },
  // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
  // 因此你可以调用 context.commit 提交一个 mutation，
  // 或者通过 context.state 和 context.getters 来获取 state 和 getters。

  // Action 通过 store.dispatch 方法触发
  actions:{
    // 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [types.ASYNC_INCREMENT](){
     let p =  new Promise((resolve)=>{
          setTimeout(()=>{
            resolve({status: 'done', amount: 66})
          }, 3000)
      });
      return p;
    },
    async actionA({ commit }){
      commit('gotData', await getData())
    },
    async actionB({dispatch, commit}){
      await dispatch("actionA");
      // 这里 如果 await 修饰的函数 返回的是 Promise 那么 表达式最终的结果返回的结果为 resolve的结果而不是 Promise对象
      commit("gotOtherData", await getOtherData())
    }
  },
  getters:{
    doubleCount: state => {
      return state.count * 2;
    },
    result: state=>{
      return JSON.stringify(state.result);
    }
  }
})
let vue = new Vue({
  store,
  render: h => h(App),
});
vue.$mount('#app');
