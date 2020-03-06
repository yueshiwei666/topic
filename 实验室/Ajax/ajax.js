 
//XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新，
        //XMLHttpRequest 是 AJAX 的基础。
//1:  创建 XMLHttpRequest 对象的语法：
    /* var xmlhttp=new XMLHttpRequest(); */

//2:  设置发送请求的相关的参数
    //open(method,url,async)
      /*method：请求的类型；GET 或 POST
        url：文件在服务器上的位置
        async：true（异步）或 false（同步） */
    /* xmlhttp = open('GET','http://106.54.54.237:8000/api/wh/home/data?type=sell&page=1',true) */

// 3：send(string)  将请求发送到服务器  string参数：仅用于 POST 请求
      /* xmlhttp.send() */  //发送请求  


//4: 当请求被发送到服务器时，对结果做一个相应的处理
     //每当 readyState（准备的状态） 改变时，就会触发 onreadystatechange 事件。 */
    // readyState存有网络请求的状态  
            /*readyState 属性存有XMLHttpRequest 的状态。从 0 到 4 发生变化。
            0: 请求未初始化
            1: 服务器连接已建立
            2: 请求已接收
            3: 请求处理中
            4: 请求已完成，且响应已就绪 */
    // status
          /*200: "OK"
            404: 未找到页面 */    
        /* xmlhttp.onreadystatechange = function()
        {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                console.log('1');
                
            }
        } */



          $.ajax({
            type: "GET",
            url: "http://123.207.32.32:8000/api/wh/home/multidata",
            data:'qweqwe',
            success:function(e){
                console.log(e);
            }
          });
    
    









