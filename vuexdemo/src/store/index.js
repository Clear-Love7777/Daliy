import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  //只有mutation中的函数才能修改state中的数据
  mutations: {
    add(state){
      // 不要在mutations函数中，执行异步操作
      // setTimeout(()=>{
      //   state.count++
      // },1000)
      state.count++
    },
    addN(state,step){
       state.count += step  
    },
    sub(state){
      state.count--
    },
    subN(state,step){
      state.count -= step  
   },
  },
  actions: {
    addAsync(context){
      setTimeout(()=>{
        //在actions中，不能直接修改state中的数据
        //必须通过context.commit() 触发mutation才行
        context.commit('add')
      },2000)
    }
  },
  modules: {
  }
})
