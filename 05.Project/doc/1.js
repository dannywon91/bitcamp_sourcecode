$(document).ready(function() {
    $('.gnb_bar').hide();

    $('.menu').hover(
        function() { 
            $('.dropdownmenu ul').fadeIn('fast',function(){$(this).stop();});
            $('.dropdownmenu ul').animate({height:280},'fast').clearQueue();
        },
        function() {
            $('ul.dropdownmenu li.menu ul').fadeOut('fast');
            $('#headerWrap').animate({height:80},'fast').clearQueue();
    });

});
