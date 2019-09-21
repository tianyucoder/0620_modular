/*
* 模块二，用的是：统一暴露
* */

let arr = [2,4,6,8] //敏感数据，不暴露

let student = {
  name:'kobe',
  age:18,
  speak(){
    console.log(this.name,this.age)
  }
}

function demo2() {
  console.log('我是module2里的demo2',arr)
}

//统一暴露------第一种写法：简写的写法
//export {student,demo2}

//统一暴露------第二种写法：完整的写法
export {
  student as haha1,
  demo2 as haha2
}