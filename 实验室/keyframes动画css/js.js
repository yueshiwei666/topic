/* 这个是除了火狐浏览器的事件 */
document.body.onmousewheel = function(event){
    event = event || window.event;
    console.dir(event);
}


/*这个是火狐浏览器的事件  */
document.body.addEventListener("DOMMouseScroll",function(event){
    
})