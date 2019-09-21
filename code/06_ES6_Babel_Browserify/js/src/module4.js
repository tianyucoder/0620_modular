//分别暴露
export let obj = {
  name:'wade',
  age:20
}

export function demo() {
  console.log('我是来自于module4的模块中的demo函数')
}

let arr = [1,3,5,7,9]
let obj2 = {m:1,n:2}
function test4() {
  console.log('我是来自于module4的模块中的test4函数')
}

//统一暴露
export {arr,obj2,test4 as haha4}

//默认暴露
export default {
  name1:'kobe',
  name2:'wade'
}
