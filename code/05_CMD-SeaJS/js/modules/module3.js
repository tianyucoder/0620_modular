/*
* 定义一个没有依赖的模块，module3
* */

define(function (require,exports,module) {
  let msg = 'module3-----内容'

  function fun3() {
    console.log(msg.toUpperCase())
  }

  exports.fun3 = fun3
})