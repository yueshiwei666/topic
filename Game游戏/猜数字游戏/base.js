window.onload = () =>{
    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.className = 'input';
    
    let div = document.createElement('div');
    div.innerHTML = '猜猜我是几'
    div.className = 'div';

    document.body.appendChild(div);
    document.body.appendChild(input);
    
    let el = document.querySelector('.input');
    var number = ((Math.random())*11).toFixed(1);

    let numbers = document.createElement('span');
    numbers.innerHTML = '它的值是：'+number;
    
    var big_small = document.createElement('div');
    document.body.appendChild(big_small);

    var temp = 1; //创建一个临时更改的变量
    el.onclick = function(){
        el.onkeyup = function(event){
            event = event || window.even
            if(event.keyCode == 37 ||
               event.keyCode == 38 ||
               event.keyCode == 39 || 
               event.keyCode == 40){
                 //把正确答案输出一下 
                 document.body.appendChild(numbers);

                 let guess = Number(input.value);

                 if(isNaN(guess)){
                    alert('输入的不是数字')
                 }
                 
                 if(guess == number){
                     alert('你胜利了！！！')
                  }else{
                      if(guess > number){
                          big_small.innerHTML = '你输入的大了'
                      }else{
                        big_small.innerHTML = '你输入的小了'
                      }
                     div.innerHTML = '第'+temp+'次猜错了'
                     temp += 1;
                  }
            }
        }
    }
    
}


