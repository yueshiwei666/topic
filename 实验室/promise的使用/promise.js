/*
Promise 是异步编程的一种解决方案：从语法上讲，promise是一个对象，从它可以获取异步操作的消息；
从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；
状态一旦改变，就不会再变。创造promise实例后，它会立即执行
*/
//什么是promise？
//1：promise是一个通过构造函数来使用的操作
//2：promise是一个js的异步操作，并且可以得到返回的数据
//本身js是一个同步的进程，除了定时器在某个程序没有处理完的时候，下面的
//程序是不能运行的，这个时候promise是处理这个问题的


new Promise((resolve,reject)=>{
    //第一个参数是成功的，第二个是失败的
    //两个都是一个通过函数来使用的

    /* 两个都执行的话谁先执行就开始谁的，下面的程序就不执行了 */
    resolve('message')//当执行这个的时候就把resolve括号的数据当成一个参数来调用.then中的第一个参数（他是一个对象）
    reject('err')//当执行这个函数的时候就把括号中的那个当成一个参数去调用下面的catch函数
}).then((data)=>{/* 这个data就是上面resolve括号中的数据 */
    console.log(data);
    
}).catch((err)=>{/* 这个err就是上面的reject括号的的数据 */
    console.log(err);
})




new Promise((resolve,reject)=>{
    //第一个参数是成功的，第二个是失败的
    //两个都是一个通过函数来使用的
    resolve('message')//当执行这个的时候就把resolve括号的数据当成一个参数来调用.then中的第一个参数（他是一个对象）
    //reject('err')//当执行这个函数的时候就把括号中的那个当成一个参数去调用下面的catch函数
}).then((data)=>{/* 这个data就是上面resolve括号中的数据 */
    console.log('在这个then中可以有两个函数，第一个是成功的，第二个就是catch函数，catch函数也可以写在这里的');
},)





/* 用法2：简写的方式 */
/* 需求：多次处理一个回调函数，对数据进行一个操作在进行到下一个回调函数中 */
new Promise((resolve,rejece)=>{
    resolve('succeed')/* 这个就是需要操作的数据 */
}).then((data)=>{
    /* 成功之后处理的代码 */
    console.log(data+'第一层处理成功代码的操作');
    /* 第一次来操作数据*/
    return new Promise((resolve)=>{
        resolve(data+'111')
    })
}).then((data)=>{
    console.log(data+'第二层处理成功的代码');
    return new Promise((resolve)=>{
        resolve(data+'222')
    })
}).then(data=>{
    console.log(data+'第三层');
    
})



/* 终极简写的方式：3 */
new Promise((resolve,rejece)=>{
    resolve('succeed')/* 这个就是需要操作的数据 */
}).then((data)=>{
    /* 成功之后处理的代码 */
    console.log(data+'3第一层处理成功代码的操作');
    /* 第一次来操作数据*/
    return Promise.resolve(data+'111')
    
}).then((data)=>{
    console.log(data+'3第二层处理成功的代码');
    return Promise.reject(data+'222')

}).then(data=>{
    console.log(data+'3第三层');
}).catch(err=>{
    console.log(err+'失败了');
    
})


/* 还要一个就是多个程序都执行的话  需求：当程序都执行完的时候在往下面来执行程序的 */
Promise.all([
    new Promise((resolve,reject)=>{
        setTimeout(() => {/* 用定时器来模拟网络的请求 */
            resolve({'name':'11111'})
        }, 500);
    }),
    new Promise((resolve,reject)=>{
        setTimeout(() => {/* 用定时器来模拟网络的请求 */
            resolve({'name':'2222'})
        }, 500);
    })
]).then(data=>{
    console.log('这个时候两个网络的请求都执行完毕了');
    
    console.log(data);
    console.log(data[0]);
    console.log(data[1]);
    
    
})


















