/* 获取元素id的函数 */
function getid (id){
    return document.getElementById(id)
}
/* 首先创建地图吧 */
var border = document.createElement('div');
border.className = 'border'
document.body.appendChild(border)
/* 创建一开始的界面 */
for(let i=0;i<4;i++){
    switch(i){
        case 0:{
            let div = document.createElement('div')
            div.className = 'div'
            div.innerHTML = '开始'
            div.id = 'start'
            border.appendChild(div)
        }
        break;
        case 1:{
            let div = document.createElement('div')
            div.className = 'div'
            div.innerHTML = '简单'
            border.appendChild(div)
        }
        break;
        case 2:{
            let div = document.createElement('div')
            div.className = 'div'
            div.innerHTML = '中等'
            border.appendChild(div)
        }
        break;
        case 3:{
            let div = document.createElement('div')
            div.className = 'div'
            div.innerHTML = '困难'
            border.appendChild(div)
        }
        break;
    }
}
/* 当我点击开始的时候就把所有的元素都none */
var start = document.getElementById('start')
start.onclick = function(){
   /* 当点击开始的时候就把4个div都给隐藏了 */
   for(let i=0;i<4;i++){
     let div = document.getElementsByClassName('div')[i]
     div.style.display = 'none'
   }

   /* 点击开始的时候开始创建敌人的飞机了 */
   foe()

   /* 一点击开始就把我的飞机给显示出来 */
   myplane.style.display = 'block'
   let div = document.createElement('div');
    div.innerHTML = '按空格键开始或暂停游戏'
    div.className = 'showtext'
    border.appendChild(div)
    /* 控制元素可以显示多长的时间 */
    let opacity = 1;
    let timer = setInterval(() => {
        let show = document.getElementsByClassName('showtext')[0]
        opacity -= 0.1
        show.style.opacity = opacity
        if(getComputedStyle(show,null)['opacity'] == 0){
            clearInterval(timer)
        }
    }, 200);
}



/* 然后在创建己方的飞机 */
var myplane = document.createElement('img')
myplane.setAttribute('src','./plane.jpg')
myplane.className = 'myplane'
border.appendChild(myplane)
/* 让我的飞机移动起来，当鼠标放上去的时候 */
border.onmousemove = function(e){
    let left = border.offsetLeft
    let top = border.offsetTop
    myplane.style.left = e.clientX - left - 1 + 'px'
    myplane.style.top = e.clientY - top - 20 + 'px'
}
/* 当我在飞机上点击的时候时 */
myplane.onclick = function(){
    CreateBullet()
}

/* 保存子弹的数组 */
var bullets = []
/* 创造子弹的函数 */
function CreateBullet(){
    let bullet = document.createElement('div')
    bullet.className = 'bullet'
    border.appendChild(bullet)
    bullets.push(bullet)
    bullet.style.left = myplane.offsetLeft + 'px'
    bullet.style.top = myplane.offsetTop + 'px'
    let timer = setInterval(() => {
        /*子弹动起来*/
        console.log('1111111');
        
        bullet.style.top = bullet.offsetTop - 10 + 'px'
        /* 第一种情况是到达最上面的时候把定时器清楚 */
        if(bullet.offsetTop <= 0){
            clearInterval(timer)
            bullet.style.display = 'none'
        }
        /* 第二种情况是碰到飞机的时候定时器清除 */
        for (let index = 0; index < foearr.length; index++) {
            if(bullet.offsetLeft <= foearr[index].offsetLeft &&
               bullet.offsetLeft + 50 >= foearr[index].offsetLeft){
                  if (bullet.offsetTop < foearr[index].offsetTop) {
                        foearr[index].style.display = 'none'
                  }       
            }
               
        }
    }, 20);
}

/* 当我按空格键的时候就开始游戏 */
var start_stop = false

/* document.onkeyup = function(e){
    e = e || window.e
    if(e.keyCode = 32){
        start_stop = !start_stop
        if(start_stop){

        }
        foe()
    }
} */
var foearr = []
var index = 0;/* 记录位置的一个值 */
 function foe(){
     /* 外层定时器随机的创建元素的 */
    let timer = setInterval(() => {
        var foeplane = document.createElement('img');
        foeplane.className = 'foeplane'
        foeplane.setAttribute('src','plane.jpg')
        foeplane.style.left = Math.floor(Math.random()*450) + 'px'
        border.appendChild(foeplane)
        index += 1;
        foearr.index = index
        foearr.push(foeplane)
        /* 内层的定时器是不断的改变元素的top值的 */
        let timer = setInterval(() => {
            /* 不停的改变top的值 */
            foeplane.style.top = foeplane.offsetTop+10+'px'
            /* 位置移动好保存一下数值 */
            foeplane.left = foeplane.offsetLeft
            foeplane.top = foeplane.offsetTop
            /* 删除数组中的元素 */
            for(let i=0;i<foearr.length;i++){
                if(foeplane.index == foearr[i].index){
                    foearr.splice(i,1,foeplane) 
                }
            }
            /* 到达最下面的时候就清楚定时器， */
            if(foeplane.offsetTop > 650){
                /* 删除父节点中的某个子节点 */
                clearInterval(timer)
                for(let i=0;i<foearr.length;i++){
                    if(foearr[i].offsetTop > 650){
                        foearr.splice(i,1) 
                        border.removeChild(foeplane)
                    }
                }
            }
        }, 200);
    }, 600);
} 
{
   let  arr = ['1','2']
   delete arr[0]
}
{
    setTimeout(() => {
        console.log(foearr);
        
    }, 5000);
}

/* 创建一个游戏的类 */
class Game{
    /* 这个是Game的构造函数 */
    constructor(){
        /* 这个就是一个Game的普通的函数 */
        this.bullet = ['1']
    }
    /* 在Game原型中添加了函数 */
    bullets(){
        console.log('1111111111111');
    }
}
var Games = new Game()


















