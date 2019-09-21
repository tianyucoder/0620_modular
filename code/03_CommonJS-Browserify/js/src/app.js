let module1 = require('./module1')
let module2 = require('./module2')
let module3 = require('./module3')
let $ = require('jquery')

console.log(module1.data);
module1.demo()
module2()
console.log(module3.arr);
console.log(module3.obj);
$('body').css('backgroundColor','skyblue')