/*
* 定义一个有依赖的模块，module4,依赖于module2和module3
* */

define(function (require,exports,module) {
  let msg = 'module4-----内容'

  //同步引入module2
  let module2 = require('./module2')
  module2.fun2()

  //异步引入module3
  require.async('./module3',function (module3) {
    module3.fun3()
  })

  function fun4() {
    console.log(msg.toUpperCase())
  }
  module.exports = fun4
})