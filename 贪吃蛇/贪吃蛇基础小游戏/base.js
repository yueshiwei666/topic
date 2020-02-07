//初始化地图和蛇随机开始的位置
window.onload = function () {
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
    div.style.cssText = `width:30px; height:30px;background:red;`
    table.appendChild(div)
    div.style.position = 'absolute'
    div.style.top='0px';


    /* 食物隨機出現的位置 */
    let food = document.createElement('div');
    food.style.cssText='position:absolute;width:30px;height:30px;background:green;'
    table.appendChild(food);
    /* 隨即設置topleft值 */
    do{
        let top = 30 * Math.floor(Math.random()*10) + 'px' ;
        let left = 30 * Math.floor(Math.random()*10) + 'px' ;
        food.style.top = top
        food.style.left = left
    }while( parseInt(getComputedStyle(food,null)['top']) == 0
                               &&
           parseInt(getComputedStyle(food,null)['left']) == 0)
    

    var step_left = 0;
    var direction_left = 30
    var direction = 'left';
    setInterval(()=>{
        step_left = step_left + direction_left;
        div.style[direction] = step_left + 'px';
        document.onkeydown = function(event){
            //65左  87上 68右 83下  
            event = event || window.event
            if(event.keyCode == 65){
                direction_left = -30;
                direction = 'left';
            }else if(event.keyCode == 87){
                direction_left = -30;
                direction = 'top'
            }else if(event.keyCode == 68){
                direction_left = 30;
                direction = 'right';
            }else if(event.keyCode == 83){
                direction_left = 30;
                direction = 'top'
            }
        }
    },500)
    
}