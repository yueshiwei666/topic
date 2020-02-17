window.onload = function(){
    
    let search = document.getElementsByClassName('search')[0];
    search.onmouseover = function(){
        let border = document.getElementsByClassName('search-div')[0];
        border.style.borderLeft='1px solid red';
    }
    search.onmouseout = function(){
        let border = document.getElementsByClassName('search-div')[0];
        border.style.borderLeft='1px solid rgb(191, 188, 184)';
    }

    var download = document.getElementById('download');
    var timer = null;
    var logo = document.getElementsByClassName('title-div1-logo')[0];

    download.onmouseover = function(){
         alert('移入')
    }
    download.onmouseout = function(){
        alert('移出')
    }
    var backtop = document.getElementsByClassName('backTop')[0];
    
    window.onscroll = function() {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop = document.documentElement.scrollTop/*  || document.body.scrollTop; */
        if(scrollTop  >= 250){
            backtop.style.display = 'block'
        }
        if(scrollTop  < 250){
            backtop.style.display = 'none'
        }
        backtop.onclick = function(){
            window.scrollTo(0,0);  
        }
        console.log(scrollTop);
    }
}