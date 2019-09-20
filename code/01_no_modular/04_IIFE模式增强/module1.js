/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */

((w,$)=>{
  //敏感数据，不可以触碰
  var data = 'atguigu'
  var data2 = 123

  function demo1() {
    console.log(data.toLowerCase())
  }

  function demo2() {
    console.log(data.toUpperCase())
  }

  $('body').css('backgroundColor','gray')

  w.myModule = {demo1,demo2}
})(window,jQuery)
