class Animation {
    constructor()
    {
        const blocks = [".skills-block",".flex-left",".flex-right"];
        const fadeTime = 800;
        this.blocks = blocks; 
    }
    hideBlock() // hide all elements
    {
        
        this.blocks.forEach((value)=>{
            $(value).hide();
        })
            /* $(".skills-block").hide();
                $(".flex-left").hide();
                $(".flex-right").hide(); /** */
        
    }
    fadeAndAnimation()
    {
        this.blocks.forEach((value)=>{
            $(value).fadeIn(this.fadeTime);
        })
    }



}
// ----------------------------------Main Part----------------------------------
var anim = new Animation();
const fadeTime = 800; // time to date objects
function fadeAndAnimation()
{
    /*
    $(".flex-left").fadeIn(fadeTime);
    $(".flex-right").fadeIn(fadeTime);
    $(".skills-block").fadeIn(fadeTime);
    */
}



$(document).ready(function(){
    anim.hideBlock();
    anim.fadeAndAnimation();
    
    
})
