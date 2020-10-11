
<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">-n</button>
    
  </div>
</template>
<script>
// 第二种方法 导入mapstate
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {}
  },
   computed:{
    ...mapState(['count'])
  },
  methods:{
    // 触发mutation第二种方式
    ...mapMutations(['sub','subN']),
    btnHandler1(){
      this.sub()
    },
      btnHandler2(){
      this.subN(4)
    },
  }
}
</script>

