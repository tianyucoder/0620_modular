/*
* 入口js，所有的模块要引人入到这个js里
* */

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');

//如何使用一个模块？如何使用取决于如何暴露的
console.log(module1.data)
module1.demo()
module2()
console.log(module3.arr)
console.log(module3.obj)

/*module1.demo()
module1.haha()*/
//内置关系
//module.exports = exports = {}
