/* $(document).ready(function(){

}) */
$(function(){
    $('body').append('<div class="div">123</div>')
    $('div').css({widht:'100px',height:'100px','background':'red'})
    $('body').append('<button class="btn">123</button>')
    $('.btn').click(function(){
        $(".div").slideDown('fast');
    })
})
