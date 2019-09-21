/*
* 入口js，所有的模块要引人入到这个js里
* */
//自定义模块的引入，需要写相对地址的形式（）
let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');
//第三方模块的引入，直接写包名即可
let uniq = require('uniq')//unqi可以对数组进行：去重+字典排序

//如何使用一个模块？如何使用取决于如何暴露的
console.log(module1.data)
module1.demo()
module2()
console.log(module3.arr)
console.log(module3.obj)
let arr = [21,1,3,4,5,2,3,4,5,8,7,6,9,8,6,5,11,10]
let result = uniq(arr)
console.log(result)

/*module1.demo()
module1.haha()*/
//内置关系
//module.exports = exports = {}
//console.log(module.exports === exports,module.exports)
