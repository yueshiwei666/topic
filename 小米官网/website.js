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
}