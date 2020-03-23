//js是单线程的编程语言
//在js程序的执行有一个顺序，先来执行主程序的代码（栈结构），
    //只要是异步操作的代码就把他放到另外一个任务执行的内容中
//等待主程序中的函数都执行完毕之后
    //在来到另外的那个任务内容中，按照先后的顺序来依次的执行
    console.time('www')
function qq(callback){
    console.log('1');
    
    setTimeout(function(){
        var qq = 'qq函数'
        callback(qq)
    },0)
    console.log('2');
}
function ww(callback){
    console.log('3');
    setTimeout(function(){
        var qq = 'ww函数'
        callback(qq)
    },0)
    console.log('4');
}
console.timeEnd('www')
qq(function(q){
    console.log(q);
    
})
ww(function(q){
    console.log(q);
    
})
