/*
* 使用module.exports 语法暴露一个对象
* CommonJs模块化的规范当中，在一个js文件当中，不可以同时用：module.exports 和 exports.xxx方式
* 如果同时使用，exports.xxx失效。
* */

/*exports.haha = function () {
  console.log('我是module1里的haha函数')
}*/

module.exports = {
  data:'hello 0620',
  demo(){
    console.log(this.data.toUpperCase())
  }
}










