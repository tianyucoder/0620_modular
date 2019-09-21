//module1模块是分别暴露的，要用如下方式引入module1
import {demo1,test1} from './module1'

//module2模块是统一暴露的，要用如下方式引入module2
import {student,demo2} from './module2'

//module3模块是默认暴露的，要用如下方式引入module3
import module3 from './module3'

//引入jquery
import $ from 'jquery'

demo1()
test1()
console.log(student)
student.speak()
demo2()
module3()
$('body').css('backgroundColor','gray')
