/*
* 模块三，使用的是：默认暴露，默认暴露只能暴露一次
* */
export default function () {
  setTimeout(()=>{
      console.log('我是module3里的demo函数中开启的定时器')
  },1000)
}
