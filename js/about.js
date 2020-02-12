

$(document).ready(function(){
    
    //run inview lib if on about page
    if($("body.has-story").length>0){
        $(".story-part2").inview({'viewFactor': 0.7});
    }
    
    $(".nav-expand").hide();
    
    
    
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
