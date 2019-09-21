//module1模块是分别暴露的，要用如下方式引入module1
import {demo1,test1} from './module1'
//import * as module1 from './module1' //此种引入方式，可以避免命名冲突

//module2模块是统一暴露的，要用如下方式引入module2
//import {student,demo2} from './module2'
import {haha1,haha2} from './module2'
//import * as module2 from './module2'//此种引入方式，可以避免命名冲突

//module3模块是默认暴露的，要用如下方式引入module3
import module3 from './module3'
//import * as module3 from './module3'//默认暴露也可以使用import * as形式，但是不推荐。

import module4,{obj,demo,arr,obj2,haha4} from './module4'

//引入jquery
import $ from 'jquery'

demo1()
test1()
console.log(haha1)
haha1.speak()
haha2()
module3()
$('body').css('backgroundColor','gray')
console.log(obj2)
console.log(obj)
demo()
console.log(arr)
haha4()
console.log(module4)

