const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

$(document).ready(function(){
    
    //run inview lib if on about page
    if($("body.has-story").length>0){
        $(".story-part2").inview({'viewFactor': 0.7});
        $(".scroll-up").css("opacity", 0);
    }
    
    $(".nav-expand").hide();
    
    $(".preloader-container").slideUp();
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

        if(y > vh/2){
            $(".scroll-up").css("opacity", 1);
        }
        else{
            $(".scroll-up").css("opacity", 0);
        }
    });
    
    // Burger menu activate animation and toggle full screen menu
    var navClicked = 1;
    $("#navicon").on("click",function(){
        $(".nav-expand").slideToggle();
        $(this).toggleClass('is-active');
        
        $(".nav-expand").css('visibility', 'visible');
        
        if(navClicked){
            $("#navicon").css({position: "fixed", right: "1em"});
            
            navClicked = !navClicked;
        }
        else{
            $("#navicon").css("position", "sticky");
            navClicked = !navClicked;
        }
        
    });
    
    
    
    //Nav bar hover and focus on link animation
    
    $("header nav ul li").mouseenter(function(){
        $(this).siblings().css("opacity", 0.4).fadeIn();
        $(this).css("opacity", 1).fadeIn();
    });
    $("header nav ul li").mouseleave(function(){
        $("header nav ul li").css("opacity", 1).fadeIn();
        
    });

    //hover icons
    var randIndex = 0;
    setInterval(function(){
        randIndex = Math.floor(Math.random() * 4 +1);
        $(".icons-nav a:nth-child(" + randIndex +")").toggleClass("hover-animation");
    }, 2000)
        
    

    //set background images
    if (screen && screen.width < 480) {
        //$("#storyPart1").css({backgroundImage: "url('img/about-mobile.jpg')"});
        //$("#storyPart2").css({backgroundImage: "url('img/gradient-bg-mobile.jpg')"});

    }
    
    
    
    
});
