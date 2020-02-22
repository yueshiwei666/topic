//初始化地图和蛇随机开始的位置
window.onload = function () {
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        start()
    }
    var stopp = this.document.getElementById('stop');
    stopp.onclick = function(){
        stop()
    }

    var step = 30
    var direction = 'right';
    var timer = null;/* 保存定时器 */
    var snake = []
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td')
            tr.appendChild(td);
        }
        let table = document.querySelector('table')
        table.appendChild(tr)
    }
    var table = document.querySelector('table')
    table.style.position = 'relative'
    var div = document.createElement('div');
    div.style.cssText = `left:0px;width:30px; height:30px;background:red;position:absolute;`
    table.appendChild(div)
    div.style.position = 'absolute'
    div.style.top='0px';


    /* 食物隨機出現的位置 */
    var food = document.createElement('div');
    food.style.cssText='position:absolute;width:30px;height:30px;background:green;'
    table.appendChild(food);
    /* 隨即設置topleft值 */

    var food_for = true;/* 决定食物的循环 */
    var food_top;
    var food_left;
    do{
         food_top = 30 * Math.floor(Math.random()*10) + 'px' ;
         food_left = 30 * Math.floor(Math.random()*10) + 'px' ;
        food.style.top = food_top
        food.style.left = food_left
        if(!(parseInt(getComputedStyle(food,null)['top']) == 0
                                  &&
           parseInt(getComputedStyle(food,null)['left']) == 0)){
         food_for = false;
        }
    }while(food_for) 
    console.log(div.offsetLeft+'--'+div.offsetTop);
    console.log(food.offsetLeft+'--'+food.offsetTop);
    

    function start(){
        timer = setInterval(game,200);
    }
    function stop(){
        clearInterval(timer)
    }
    function game(){
        if(direction == 'left'){
            div.style['left'] = div.offsetLeft - step + 'px';
        }
        if(direction == 'right'){
            div.style['left'] = div.offsetLeft + step + 'px';
        }
        if(direction == 'top'){
            div.style['top'] = div.offsetTop - step + 'px';
        }
        if(direction == 'bottom'){
            div.style['top'] = div.offsetTop + step + 'px';
        }

        if(div.offsetLeft == food.offsetLeft
                         && 
           div.offsetTop ==  food.offsetTop){
                food.style.display = 'none'
                food_for = true
        }
        
        /* 吃掉食物后再创建一个食物 */
        while(food_for){
            food_top = 30 * Math.floor(Math.random()*10) + 'px' ;
            food_left = 30 * Math.floor(Math.random()*10) + 'px' ;
            food.style.top = food_top
            food.style.left = food_left
            if(food.offsetLeft !== div.offsetLeft
                                ||
                food.offsetTop !== food.offsetTop){
            food_for = false;
            food.style.display = 'block'
            }
        }
        /* 判断游戏结束的条件 */
        if(div.offsetLeft >270 || div.offsetTop >270 
            || div.offsetLeft < 0 || div.offsetTop <0){
            alert('game over')
            clearInterval(timer)
        }
    }
        
    
    /* 更改方向的函数 */
    document.onkeydown = function(event){
        //65左  87上 68右 83下  
        event = event || window.event
        /* event.witch IE6 ==  event.keyCode */

        if(event.keyCode == 65){
            
            direction = 'left';
        }else if(event.keyCode == 87){
            
            direction = 'top'
        }else if(event.keyCode == 68){
           
            direction = 'right';
        }else if(event.keyCode == 83){
            
            direction = 'bottom'
        }
    }
}