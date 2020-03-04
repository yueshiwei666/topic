/* 游戏本身有延迟，需要一开始就创建一个定时器
子弹太牛逼了，让他不牛逼一点就可以了 */
var border = document.createElement('div');
border.style.cssText = 'position:relative;width:500px;height:700px;border:1px solid red;margin:0px auto;'
border.className = 'border'
document.body.appendChild(border)

/* 创建我控制的飞机吧 */
var img = document.createElement('img');
img.src = 'plane.jpg'
img.className = 'img'
img.style.cssText = `widht:50px;height:50px;position:relative;
top:645px;left:50%;`
border.appendChild(img)

/* 当有按键被按下的时候 */
document.onkeydown = function(e){
    e = e || window.e
    if(e.keyCode == 65){ /* 左边 */
        launch()
        if(img.offsetLeft == 30){
            return
        }
       img.style.left = img.offsetLeft - 10 + 'px' 
    }
    if(e.keyCode == 68){/* 右边 */
        launch()
        if(img.offsetLeft == 470){
            return
        }
       img.style.left = img.offsetLeft + 10 + 'px' 
    }
     if(e.keyCode == 87){/* 上边 */
        launch()
        if(img.offsetTop <= 5){
            return
        }
        img.style.top = img.offsetTop - 10 + 'px' 
    }
     if (e.keyCode == 83){/* 下边 */
        launch()
        if(img.offsetTop > 635){
            return
        }
        img.style.top = img.offsetTop + 10 + 'px' 
    }

}

/*发射子弹函数*/
function launch(){ 
    var bullet = document.createElement('div');
    bullet.style.top = img.offsetTop + 'px'
    bullet.style.left = img.offsetLeft + 'px'
    border.appendChild(bullet);
    bullet.className = 'bullet'

    var timer = setInterval(() => {
        bullet.style.top = bullet.offsetTop - 10 + 'px'
        if(bullet.offsetTop <= -5){
            clearInterval(timer)
            bullet.style.display = 'none'
        }
        for (const item of obj) {
            if(item.offsetTop == bullet.offsetTop && 
                item.offsetLeft == bullet.offsetLeft){
                    
            }
        }
        
    }, 20);
    
}


/* 开始让小飞机都从上面出来向下依次的运动就可以了 */
        /* 创建小飞机 */
   
var obj = []
    setInterval(() => {
        img.style.background = "red"
        let planes = document.createElement('img')
        planes.src = 'plane.jpg'
        planes.className = 'planes'
        planes.style.cssText = `widht:50px;height:50px;position:absolute;`
        border.appendChild(planes)
        obj.push(planes)
        let left =Math.floor(Math.random()*470) 
        planes.style.left = left + 'px'

        var smallp = setInterval(() => {
            planes.style.top = planes.offsetTop + 20 + 'px'
            if(planes.offsetTop >=635){
                planes.style.display = 'none'
                clearInterval(smallp)
            }
        }, 100);
    }, 700);














