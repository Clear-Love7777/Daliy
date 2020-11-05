
<template>
  <div>
    <!-- <h3>当前最新的count值为：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="subN(3)">-n</button>
    <button @click="subAsync">-1 async</button>
    <button @click="subNAsync(5)">-n async</button>


    
  </div>
</template>
<script>
// 第二种方法 导入mapstate
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  data() { 
    return {}
  },
   computed:{
    ...mapState(['count']),
    // 第二种方法使用getters
    ...mapGetters(['showNum']),
  },
  methods:{
    // 触发mutation第二种方式
    ...mapMutations(['sub','subN']),
    ...mapActions(['subAsync','subNAsync']),
    btnHandler1(){
      this.sub()
    },
    // 简化直接调用
    //   btnHandler2(){
    //   this.subN(4)
    // },
  }
}
</script>

