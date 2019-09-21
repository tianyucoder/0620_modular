/*
* 定义一个没有依赖的模块，module1
* */

define(function (require,exports,module) {
  let msg = 'module1-----内容'

  function fun1() {
    console.log(msg.toUpperCase())
  }

  module.exports = fun1
})