/*
* 定义一个没有依赖的模块,该模块暴露一个提供数据的方法
* */

define(function () {
  let data = 'hello,atguigu'//私密数据
  
  function getData() {
    return data
  }

  return {getData}
})
