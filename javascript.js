var main = function(){    
  $("#email").mouseover(function(){
    $(this).animate({width: "70px"}, 'slow');
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