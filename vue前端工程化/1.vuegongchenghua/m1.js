let a = 10
let c = 20 
let d = 30
function show(){
    console.log('1111111');
  }

// d没有导出所以没有打印出来
// 默认导出 只能唯一一次
export default {
    a,
    c,
    show 
}

//按需导出可以多次
export let s1 = 'aaaa'
export let s2 = 'bbbb'
export function say(){
 console.log('111111');
}






