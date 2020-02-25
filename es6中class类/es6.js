//        https://www.jianshu.com/p/84c158c068e5
class Math {       //es6
    // 构造函数
    //  Math === Math.prototype.constructor; // true

        //class Math {
            // ...
        //}   
        //console.log(typeof Math);   答案是 function
    
    //相当于function Math(){}
    constructor(x,y) {   
        this.x = x;
        this.y = y;
        function qqq(){}
    }

    //相当于Math.prototype.add = function(){}
    add() {
        return this.x + this.y;
    }
}
let math = new Math(1,2);
console.log(math.add()); //3











// 一个数学计算的方法
function Math(x, y) {   //es5
    this.x = x;
    this.y = y;
    var lll = '111'
    function qqq(){}
}
// 在原型中添加 add方法， 其作用是返回两个数的和
Math.prototype.add = function() {
    console.log(this);
    return this.x + this.y;
}
var math = new Math(1,2);
console.log(math.add()) //3



