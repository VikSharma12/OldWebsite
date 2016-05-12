var main = function(){
    $('.article').click(function(){
        $('.article').removeClass('current');
        //$('.description').hide(); //closes all other open descriptions
        $(this).addClass('current');
        $(this).children('.description').toggle();
    });
    
    $(document).keypress(function(event){
        if (event.which === 111){
            $('.current').children('.description').toggle();
        } 
        else if (event.which === 110){
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            
            if(nextArticle.length == 0) {
                nextArticle = $('#1');
            }

            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });

    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "285px"
        }, 200);
    });


    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-285px"
        }, 200);

        $('body').animate({
            left: "0px"
        }, 200);    
    });    
};

$(document).ready(main);