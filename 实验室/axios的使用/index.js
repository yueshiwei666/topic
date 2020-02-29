var axios = require('axios')

/* 方法1： */
/* var re = axios.create({
    url:'http://106.54.54.237:8000/api/hy/home/data?type=sell&page=1',
    timeout:5000
})
re().then(result=>{
    console.log(result);
    
}) */

/* 方法2： */
function request(config){
    var instance = axios.create({
        baseURL:'http://106.54.54.237:8000',
        timeout:1000
    })
           /* 执行实例的函数他返回的是一个promise */
    return instance(config)
}
function data(){
    return request({
        url:'/api/hy/home/data?type=sell&page=1'
    })
}
data().then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})


//http://106.54.54.237:8000/api/hy/home/data?type=sell&page=1
