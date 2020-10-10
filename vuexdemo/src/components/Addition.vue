<template>
  <div>
    <!-- 第一种访问state数据方式 this.$store.state.count -->
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click="btnHandler1">+1</button>
     <button @click="btnHandler2">+n</button>
     <button @click="btnHandler3">+1 Async</button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods:{
    btnHandler1(){
       this.$store.commit('add')
    },
     btnHandler2(){
       //commit作用： 调用某个mutation函数（第一种方式）
       this.$store.commit('addN',3)
    },
    // 异步地让count+1
    btnHandler3(){
      //这里的dispatch函数，专门用来触发 action
      this.$store.dispatch('addAsync')
    }
  }
}
</script>

