$('li').mouseenter(function(){
    $(this).addClass('active');
    $('li').not($(this)).removeClass('active');
    
    i=$(this).index('li')
    $('.row').eq(i).show(500);
    $('.row').not($('.row').eq(i)).hide(500);
});
$('.row').eq(0).show(500);

