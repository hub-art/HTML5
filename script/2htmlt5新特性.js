    // 1.本地存储   ctrl + /
    //浏览器兼容：HTML5新增
    // console.log()
    // console.dir()
    // console.info()
    
    console.log(localStorage)
    /*
        Storage 对象
        属性
        [[prototype]] : 原型对象Storage    继承的方式   原型链(公有方法)
        getItem():获取
        setItem():设置
        removeItem():删除
            length:
            arguments:
            [[prototype]]:object    顶级对象(公有方法)
    */
   //localStorage   语法
   //通过setItem()设置本地存储
   localStorage.setItem("username","zhangsan")
   //通过getItem()获取本地存储
   console.log(localStorage.getItem("username"))
   localStorage.removeItem("username")

   //2.本地存储练习
        //浏览器开  -   自动生成window
                //  屏幕的相关属性  BOM - 
                //  文档的相关属性  DOM - document

        //获取用户的输入：var   变量名(数字、字母、_，数字不能开头)    =   捕获输入框inpute对象，输入内容属性
            //log()字符串输出
        console.log(document)
            //dir()对象结构输出
        console.dir(document)
            //属性、[[prototype]] - 共有方法+on

            //捕获标签对象
            //getElementById()  通过id名获取标签对象
            //getElementByClassName 通过class属性名批量获取标签对象集合
            //getElementByTagName() 通过标签名批量获取标签对象集合
            var val =  document.getElementById("inp1").value
            // console.log(val)
            // console.dir(val)
        //单击按钮后
            //在"在搜索历史"下方显示用户的输入
            //将用户输入实现本地存储
    
    //JavaScrip = ECMAScip语法 + 浏览器接口API(BOM+DOM)
    //            ES5
    
    console.dir("========"+p_arr)   //变量提升，先访问后声明
    var p_arr = document.getElementsByTagName("p")
    console.dir("********"+p_arr)   //类数组对象 对象.属性  对象["属性"]
    //for(循环变量初始化只执行依次;判定循环结束的条件;下一次循环变量取值){}
    for(var i = 0;i<p_arr.length;i++){
        p_arr[i] = function fun1(){}
    }
