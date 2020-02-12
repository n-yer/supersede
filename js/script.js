const label = document.querySelector("#test-lbl");


//run hero typing animation if on front page
if ($("body.has-hero-typer").length>0)
{
    typical("#test-lbl",75);
    setTimeout(function(){
        typical("#sub-header",80);
    },3000)
}


$(document).ready(function(){
    
    //run inview lib if on about page
    if($("body.has-story").length>0){
        $(".story-part2").inview({'viewFactor': 0.7});
    }
    
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
    for(i=0; i<words.length; i++){
        
        
        let currentPhrase = words[i];
        
        
        // Type Forward
        for(j=0; j<words[i].length; j++){
            let theChar = words[i].charAt(j);
            
            setTimeout(function(){
            
               $(lbl.toString()).append(theChar);
                //console.log(theChar);
               
           }, counter*speed);
            counter++;
                                    
            
        }
        
        // break if last word reached
        if(i == words.length-1){
            break;
        }
        
        //wait between words
        setTimeout(function(){
            
        },counter*speed);
        counter++;
        
        
        // Backspace
        for(k=words[i].length; k>0; k--){
            
            
            setTimeout(function(){
                currentPhrase = currentPhrase.slice(0,-1);
                $(lbl.toString()).text(currentPhrase);
                //console.log(currentPhrase);
               

            }, counter*speed);
            counter++;
            

        }
        
    }
    
    
}