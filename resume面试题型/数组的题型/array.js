//对这个数组实现从大到小的排序
//对数组去重

//统计一个字符串中出现最多的字符
    //总结：
        //1:两个循环，内层循环是匹配的字符，外层是挨个出现的字符
        //2：把他们都放入一个对象中，注意重复的字符不可以放进去
        //3：找出对象中出现次数最大的那个数字
        //4:然后在来一次循环只要是最大额那个数字就放进去一个数组中
        //5：对那个数组进行一个join(',')切割等于一个字符串输出ok

function delereuse(string){
    var obj={}
    let temp = 0;
    for(let i=0;i<string.length;i++){
        let t = string[i];
        if(obj[t]){
            continue;
        }
        for(let j=0;j<string.length;j++){
            if(string[i] == string[j]){
                temp +=1;
            }
        }
        obj[t] = temp;
        temp = 0;/* 最后清零 */
    }
    console.log(obj);
    let key = []
    let value = []
    let num = 0;
    let objj = []
    for (const key in obj) {
       let temp =obj[key]
       if(temp >= num){
            num = temp;
       }
    }
    /* 出现字符最多的次数num */
    console.log(num);
    let push = []
    for (const key in obj) {
        if(obj[key] == num){
            push.push(key)
        }
    }
    console.log(push);
    let str = push.join(',')
    console.log('出现最多的字符是'+ str + ':次数是' + num);
    
}
//delereuse('yyeuehsiwei66yuey')
