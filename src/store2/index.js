import types from '../mutations/mutation-types'
import Vue from 'vue'
import Vuex from 'vuex'
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
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    app: {
      namespaced: true,
      state:{
        count: 0,
        obj:{
          meto: 'OPOPOP'
        },
        result:{
    
        },
        input:'给 <input> 中绑定 value，然后侦听 input 或者 change 事件',
        input2:'双向绑定的计算属性'
      },
      // 更改 Vuex 的 store 中的状态的唯一方法 reducer
      // Mutation 必须是同步函数
      mutations:{
        // 载荷（Payload） 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload)
        [types.INCREMENT]: (state, payload={amount : 1})=>{
          state.count += payload.amount;
        },
        [types.SET_OBJ]:(state, payload={count: 0, name: 'x'}) => {
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
        },
        updateInput(state, val){
          state.input = val;
        },
        updateInput2(state, val){
          state.input2 = val;
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
        },
        input: state => {
          return state.input;
        },
        input2: state => {
          return state.input2;
        }
      }
    }
  },
})
export default store