/*
* 定义一个有依赖的模块，依赖于module1，要使用module1中的getData
* */

define(['module1'],function (module1) {
  let msg = '0620,就业顺利'

  function getDataAndMsg() {
    return `${ module1.getData()},${msg}`
  }

  return {getDataAndMsg}
})
