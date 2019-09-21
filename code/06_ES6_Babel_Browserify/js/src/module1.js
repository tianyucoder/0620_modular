/*
* 模块一，用的是：分别暴露
*
* */
let data = 'hello,atguigu'

export function demo1() {
  console.log('我是module1里的demo1方法',data.toLowerCase())
}

export function test1() {
  console.log('我是module1里的test1方法',data.toUpperCase())
}
