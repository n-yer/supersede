const label = document.querySelector("#hero-lbl");
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

//run hero typing animation if on front page
if ($("body.has-hero-typer").length>0)
{
    typical("#hero-lbl",75);
    setTimeout(function(){
        typical("#sub-header",80);
    },4500)
}



$(document).ready(function(){
    
    
    
    $(".nav-expand").hide();
    $("#works-container").hide();
    
    $("#works-btn").on("click", function(e){
        e.preventDefault();
        
        $("#home-container").slideToggle(function(){
            $("#works-container").slideToggle();
        });
        
   }); 
    
    $("#home-btn").on("click", function(e){
        e.preventDefault();
        $("#works-container").slideToggle(function(){
            $("#home-container").slideToggle();
        });

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
    
    
    //slider init
    $(".slider-container li").not(":first-child").hide();
    var sliderIndex = 0;
    
    $(".slider-nav").click(function(){
        
        sliderIndex++;
        if(sliderIndex > $(".slider-container").children().length-1){
            sliderIndex = 0;
        }
        $(".slider-container").find("li").eq(sliderIndex).fadeIn();
        $(".slider-container").find("li").eq(sliderIndex).siblings().hide();
        
        $(".slider-nav").css("transform", "rotate(" + (sliderIndex*180) + "deg)");
        
        
    });
    
    
   
    //show on scroll
    if (screen && screen.width > 480) {
        if($("body").hasClass("case-study")){
            $('main .mockup-part').css({opacity:0, position: "relative", top: "50px"});

            $(document).scroll(function() {
                var y = $(this).scrollTop();
                if (y > vh) {
                    $('main').children('.mockup-part').eq(0).animate({opacity:1, top: "0px"},1500,function(){});
                }
                if(y>vh*2){
                    $('main').children('.mockup-part').eq(1).animate({opacity:1, top: "0px"},1500,function(){});
                }
                if(y>vh*3){
                    $('main').children('.mockup-part').eq(2).animate({opacity:1, top: "0px"},1500,function(){});
                }


            });
        }
    }

    
    
    
});

function appendTyper(lbl){
    $(lbl.toString()).append("|");
}

function typical(lbl,speed){
    
    let word1 = $(lbl.toString()).attr("data-word1");
   
    let word2 = $(lbl.toString()).attr("data-word2");
   
    let word3 = $(lbl.toString()).attr("data-word3");
    
    let word4 = $(lbl.toString()).attr("data-word4");
    let words = [word1, word2, word3, word4];
    let counter = 0;
    let offset = 7;
    for(i=0; i<words.length; i++){
        
        
        let currentPhrase = words[i];
        
        //skip this iteration if the current word is NULL
        if(currentPhrase.length == 0){
            continue;
        }
        //console.log(currentPhrase + String(counter*speed))
        
        
        
        // Type Forward
        for(j=0; j<words[i].length; j++){
            let theChar = words[i].charAt(j);
            
            setTimeout(function(){
            
               $(lbl.toString()).append(theChar);
                
               
           }, counter*speed);
            //console.log(counter*speed);
            counter++;
                                    
            
        }
        
        // break if last word reached
        if(i == words.length-1){
            break;
        }
        
        //wait between words
        
        //console.log("wait here - " + String(counter*speed));
        for(l=0; l<10; l++){
            setTimeout(function(){},counter*speed);
            counter++;
        }    
        
       
        
        // Backspace
        for(k=words[i].length; k>0; k--){
            
            setTimeout(function(){
                currentPhrase = currentPhrase.slice(0,-1);
                $(lbl.toString()).text(currentPhrase);               

            }, counter*speed);
            //console.log(counter*speed);
            counter++;
            

        }
        
        
    }
    
    
}