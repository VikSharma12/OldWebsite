var main = function(){
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });

    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

      
        if(nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
  });
  
  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
    
    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    
    if(prevSlide.length == 0) {
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
    
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

  $("#email").mouseover(function(){
    $(this).animate({width: "80px"}, 'slow');
  });
  $("#email").mouseout(function(){
    $(this).animate({width: "60px"}, 'slow');
  });

  $("#linkedin").mouseover(function(){
    $(this).animate({width: "100px"}, 'slow');
  });
  $("#linkedin").mouseout(function(){
    $(this).animate({width: "75px"}, 'slow');
  });

  $("#github").mouseover(function(){
    $(this).animate({width: "100px"}, 'slow');
  });
  $("#github").mouseout(function(){
    $(this).animate({width: "75px"}, 'slow');
  });    
};

$(document).ready(main);