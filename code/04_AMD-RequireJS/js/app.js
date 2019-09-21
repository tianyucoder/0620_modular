/*
* AMD模块化规范的固定引入方式，要写配置文件
* */

//paths里配置的是，所有要用到的模块的：名字+路径
requirejs.config({
  baseUrl: './js/',
  paths: {
    module1: 'modules/module1',
    module2: 'modules/module2',
    jquery:'libs/jquery-1.10.1'
  }
});

requirejs(['module2','jquery'],function (module2,$) {
  let result = module2.getDataAndMsg()
  console.log(result)
  $('body').css('backgroundColor','red')
  console.log($)
});

