/*
* 定义一个没有依赖的模块，module2
* */

define(function (require,exports,module) {
  let msg = 'module2-----内容'

  function fun2() {
    console.log(msg.toUpperCase())
  }

  exports.fun2 = fun2
})