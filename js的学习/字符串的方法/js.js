let str= 'qqq'
// console.log(str.length); 3

let str1= 'string' //返回指定位置的字符
//charAt方法返回指定位置的字符串从0开始  长度是string.length
//console.log(str1.charAt(1)); //t

let str2 = 'string1'  //返回字符串
//字符串和数组一样可以返回某个位置的字符
//console.log(str2[2]);//r

let str3 = '\'srt\''   //转义字符
//使用\转义后面的符号
//console.log(str3); // 'str'

let str4 = 'string'  //返回字符串的下标
//indexOf()来定位字符串中某一个指定的字符首次出现的位置：
//查找首个字符串的位置 位置是根据字符串所在的下标
//如果没有找到的话就返回-1,括号中的串需要全部在str4中出现，一个没有就-1
//console.log(str4.indexOf('ing'));//3
//console.log(str4.indexOf('iqqqq'));//-1
//console.log(str4.indexOf('S'));//-1

let str5 = 'string'  
//match('查找的字符串')  找到返回一个数组  没有找到是null
// Array [ "ing" ],ing
//console.log(str5.match('ing')+','+str5.match('ing'[0]);

let str6 = 'string'  //替换字符串的操作
//替换字符串中的字符并且返回，但是原本的字符串不发生变化
//console.log(str6.replace('s','q'),str6); //qtring string

let str7 = 'String'  //字符串的大小写的相互转换
//console.log(str7.toLocaleLowerCase()); //string
//console.log(str7.toLocaleUpperCase()); //STRING

let str8 = 's,t,r,i,n,g' //查找到对应的字符标识，对其切割放入一个数组中
//返回值是一个数组
//console.log(str8.split(',')); //[ 's', 't', 'r', 'i', 'n', 'g' ]

let str9 = 'string' //返回指定字符串的下标
//console.log(str9.search('s')); //0

let str10 = 'string hello' //切割一部分的字符串返回出来
//slice() 参数说明第一个是切割字符串的位置  第二个是切割几个字符串
//console.log(str10.slice(2));//ring hello
//console.log(str10.slice(2,5));//rin












