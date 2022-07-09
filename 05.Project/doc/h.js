

$(document).ready(function() {
    //            $('ul.dropdownmenu li ul').hide();
    //            $('.menu_box').hide();
  
                $('ul.dropdownmenu').hover(
                   function() { 
                      $('ul.dropdownmenu li.menu ul').fadeIn('slow',function(){$(this).stop();});
                     $('#headerWrap').animate({height:280},'fast').clearQueue();
                   },
                  function() {
         
           $('ul.dropdownmenu li.menu ul').fadeOut('fast');
             $('#headerWrap').animate({height:80},'fast').clearQueue();
                 });
                 
                 $('ul.dropdownmenu li.menu').hover(
                   function() { 
            $('a', this).animate({top:-18},'fast').clearQueue();
                   },
                  function() {
           $('a', this).animate({top:0},'fast').clearQueue();
                 });
              
              // tab키 처리
                  $('ul.dropdownmenu li.menu .depth1').bind('focus', function () {        
                      $('ul.dropdownmenu li.menu ul').slideDown('fast');
                 $('#headerWrap').animate({height:280},'fast').clearQueue();
  
            });
  
           $('ul.dropdownmenu li.m6 li:last').find('a').bind('blur', function () {        
                    $('ul.dropdownmenu li.menu ul').slideUp('fast');
                $('#headerWrap').animate({height:80},'fast').clearQueue();
  
           });
  
            });