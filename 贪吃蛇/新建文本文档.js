window.onload = function(){
   
    var table = document.getElementById('table');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var snake=[]
    var timer;
    var timer2;
    var direction = 'right'/* 默认的向右边开始移动 */
    var score = 0;
    var step = 30;
    /* 循环生成地图 */
    for(let i=0;i<10;i++){
        let tr= document.createElement('tr');
        for(let j=0;j<10;j++){
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr)
    }
    /* 创建蛇的身体 */
    for(let i=2;i>=0;i--){
        let div = document.createElement('div')
        div.style.cssText='position:absolute;width:30px;height:30px;background:red;'
        if(i == 2){
            div.innerHTML = '蛇头'
            div.style.cssText='line-height:30px;text-align:center;font-size:10px;position:absolute;width:30px;height:30px;background:pink;'
        }
        div.position = {
            left:i*step,
            top:0
        }
        div.style.left = i*step + 'px'
        div.style.top = 0 + 'px'
        table.appendChild(div)
        /* 每创建一个元素就push到snake数组中 */
        snake.push(div)
    }

    /* 决定循环,创建的食物 */
    var cycle = true
    let num=0;
    var food;
    do{
        food =  document.createElement('div')
        food.style.cssText='position:absolute;width:30px;height:30px;background:green;'
        food.style.left= Math.floor(Math.random()*10) *30 +'px'
        food.style.top= Math.floor(Math.random()*10) *30 +'px'
        table.appendChild(food)
        let food_left = food.offsetLeft;
        let food_top = food.offsetTop;
        for(let i=0;i<snake.length;i++){
            if(food_left !== snake[i].offsetLeft
                            ||
               food_top !== snake[i].offsetTop){
                    num++;
            }
        }
        if(num == snake.length){
            cycle = false
        }
    }while(cycle)

    /* 一切就绪开始动起来 */
    start.onclick = function(){
        timer = setInterval(move,400)
    }
    stop.onclick = function(){
        clearInterval(timer)
    }
    console.log(snake);
    
    function move(){
        let head = snake[0]
        /* 向个办法让蛇头移动一下，然后后面的每一个元素跟着他前一个元素的位置 */
        if(direction == 'right'){
            head.style.left = head.offsetLeft + step + 'px'
        }else if(direction == 'left'){
            head.style.left = head.offsetLeft - step + 'px'
        }else if(direction == 'top'){
            head.style.top = head.offsetTop - step + 'px'
        }else if(direction == 'bottom'){
            head.style.top = head.offsetTop + step + 'px'
        }
        /* 每一次的位置都向他的前一个元素的位置开始移动 */
        /* 在div元素创建好的时候就用一个对象记录一下他所在的位置*/
        for(let i=1;i<snake.length;i++){
            snake[i].style.left = snake[i-1].position.left + 'px';
            snake[i].style.top = snake[i-1].position.top + 'px';
        }
        /* 当元素都移动好之后，就开始保存各个元素所在的位置了 */
        for(let i=0;i<snake.length;i++){
            snake[i].position.left = snake[i].offsetLeft;
            snake[i].position.top = snake[i].offsetTop;
        }

        /*当蛇头碰到食物的时候*/
        if(head.offsetLeft == food.offsetLeft && head.offsetTop == food.offsetTop){
            score = score + 10
            console.log(score);
            food.style.display = 'none'
            /* 在随机的生成一个食物 */
            do{
                food =  document.createElement('div')
                food.style.cssText='position:absolute;width:30px;height:30px;background:green;'
                food.style.left= Math.floor(Math.random()*10) *30 +'px'
                food.style.top= Math.floor(Math.random()*10) *30 +'px'
                table.appendChild(food)
                let food_left = food.offsetLeft;
                let food_top = food.offsetTop;
                for(let i=0;i<snake.length;i++){
                    if(food_left !== snake[i].offsetLeft
                                    ||
                       food_top !== snake[i].offsetTop){
                            num++;
                    }
                }
                if(num == snake.length){
                    cycle = false
                    food.style.display = 'block'
                }
            }while(cycle)
            /* 对蛇的身体进行push元素 */
            let item = document.createElement('div');
            item.style.cssText='position:absolute;width:30px;height:30px;background:red;'
           
            item.position = {
                left: snake[snake.length-1].offsetLeft,
                top: snake[snake.length-1].offsetTop
            }
            snake.push(item)
            table.appendChild(item)
            item.style.left = snake[snake.length-1].offsetLeft
            item.style.top = snake[snake.length-1].offsetTop
        }

        /* 当蛇的身体碰到蛇的身体 */
        for(let i=1;i<snake.length;i++){
          if(head.position.left == snake[i].position.left
                             &&
            head.position.top == snake[i].position.top){
                 alert('Game over')
                 clearInterval(timer)
          }
            
        }

        /* 当蛇碰到墙壁的时候 */
        if(270 < head.offsetLeft || head.offsetLeft < 0){
            alert('Game over')
            clearInterval(timer)
            clearInterval(timer2)
        }
        if(270 < head.offsetTop || head.offsetTop < 0){
            alert('Game over')
            clearInterval(timer)
            clearInterval(timer2)
        }

        /* 这个就是更改方向的 */
        document.onkeydown = function(e){
            e = e || window.e  /* IE6中  keyCode是什么witch */
            //65 68 87 83
            console.log(e.keyCode);
            
            if(e.keyCode == 65){
                if(direction !== 'right'){
                    direction = 'left'
                } 
            }
            if(e.keyCode == 68){
                if(direction !== 'left'){
                    direction = 'right'
                } 
            }
            if(e.keyCode == 87){
                if(direction !== 'bottom'){
                    direction = 'top'
                } 
            }
            if(e.keyCode == 83){
                if(direction !== 'top'){
                    direction = 'bottom'
                } 
            }
            


             if(e.keyCode == 49){
                 clearInterval(timer2)
                timer2 = setInterval(move, 400);
             }   
             if(e.keyCode == 50){
                clearInterval(timer2)
             }

            
        }
       

        
    }
    
}