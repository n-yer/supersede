

$(document).ready(function(){
    
    //run inview lib if on about page
    if($("body.has-story").length>0){
        $(".story-part2").inview({'viewFactor': 0.7});
    }
    
    $(".nav-expand").hide();
    
    
    $('#storyPart1 p').css({opacity:0, position: "relative", top: "50px"});
    $('#storyPart2 p').css({opacity:0, position: "relative", top: "50px"});
    $('#storyPart3 p').css({opacity:0, position: "relative", top: "50px"});
    $('#storyPart4 p').css({opacity:0, position: "relative", top: "50px"});
    
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > $('.story-part').height()/1.5) {
            $('#storyPart1 p').animate({opacity:1, top: "0px"},1500,function(){});         
        }
        if(y > 900 + $('.story-part').height()){
            $('#storyPart2 p').animate({opacity:1, top: "0px"},1500,function(){});
        }
        
        if(y > (900 + $('.story-part').height()*2)){
            $('#storyPart3 p').animate({opacity:1, top: "0px"},1500,function(){});
        }
        if(y > (900 + $('.story-part').height()*3)){
            $('#storyPart4 p').animate({opacity:1, top: "0px"},1500,function(){});
        }

    });
    
    // Burger menu activate animation and toggle full screen menu
    
    $("#navicon").on("click",function(){
        $(".nav-expand").slideToggle();
        $(this).toggleClass('is-active');
        
        $(".nav-expand").css('visibility', 'visible');
        
        
    });
    
    
    
    //Nav bar hover and focus on link animation
    
    $("header nav ul li").mouseenter(function(){
        $(this).siblings().css("opacity", 0.4).fadeIn();
        $(this).css("opacity", 1).fadeIn();
    });
    $("header nav ul li").mouseleave(function(){
        $("header nav ul li").css("opacity", 1).fadeIn();
        
    });
    
    
    
});
