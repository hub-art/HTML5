//地理定位
//浏览器 v8引擎
//javascript 目的=获取DOM对象完成该对象的增删改查
  //         ES语法+window提供API
   //        DOM window.document == 访问html文档内的标签对象
 //          BOM window.screen window.history window.location window.navigator  ...
// window.navigator
console.dir(navigator)
//3.

//     构造函数==function Fun(){}
//new                           constructor     new       constructor
//实例化对象       [[prototype]]       原型对象

//4. window.navigator.geolocation.getCurrentPosition(第一个参数，第二个参数，第三个参数)
//window.navigator.geolocation.getCurrentPosition(第一个参数，第二个参数，第三个参数)
//其中：
//第一个参数:获取地理定位成功后执行的回调函数
//第二个参数：获取地理定位失败后执行的回调函数
// 第三个参数:忽略

//回调函数:函数作为另一个函数的参数

//5. 单线程
//同步执行 暂停
let arr=[]
for(let i= 0; i < 1000000 ; i++) {
   arr[i] = i
   }
   console.dir(arr)

//异步执行  事件绑定，setTimeout（） setInterval（），ajax...
//主线程  任务队列（辅助线程）
console.log("开始==============")
//setTimeout(异步的函数，设置超时时间)
setTimeout(function(){
   console.log("异步函数被执行了")
},1000)
console.log("结束===============")

setTimeout(function(){
   console.log("one")
   setTimeout(function(){
   console.log(function(){
       console.log("three")
   },1000)
},2000)
},3000)

//ES6 连缀（链式） Promise
console.dir(Promise)
let pm = new Promise(function(resolve,reject){
   //JS引擎
       resolve("123")
})
console.dir()
//三个状态：初始化，成功，失败
//两个方法：then，catch


//ES5 匿名函数 function（）{}
//ES6  箭头函数 （）=>{}
pm.then(function(){
   console.log(data)
})
then(function(){
   console.log("two=========")
})
then(function(){
   console.log("three========")
})


//z终极解决方案 Promise优化   async..await
//6.window.navigator.geolocation.getCurrentPosition()
document.getElementById("btn").onclick=function(){
   //数据类型转化：显型 隐式
   //if 表达式-String Number Boolean Object（Array，Function，Object）
   //
   if(navigator){
       //获取地理位置
       navigator.geolocation.getCurrentPosition(showPosition,showError)
       function showPosition(position){
           console.dir(position)
           console.log(position.coords.latitude)
           console.log(position.coords.longitude)
       }
       function showError(error){
           console.dir(error)
       }
   }else{
   console.log("当前浏览器不支持地理定位")
   }
}