

$(document).ready(
				  
function() {

	//Set Default State of each portfolio piece
	$(".paging").show();
	$(".paging a:first").addClass("active");

	//Get size of images, how many there are, then determin the size of the image reel.
	var slideWidth = $(".slide_content").width();
	var slideSum = $("#top_news_container .slide_content").size();
	var slideReelWidth = slideWidth * slideSum;

	//Adjust the image reel to its new size
	$("#top_news_container").css({'width' : slideReelWidth});

	//Paging + Slider Function
	rotate = function(){	
	    var triggerID = $active.attr("rel") - 1; //Get number of times to slide
	    var slide_reelPosition = triggerID * slideWidth; //Determines the distance the image reel needs to slide
	
	    $(".paging a").removeClass('active'); //Remove all active class
	    $active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function 
		
	    //Slider Animation
	    $("#top_news_container").animate({ 
	        left: -slide_reelPosition
	    }, 500 ); 
	
		
	}; 

	//Rotation + Timing Event
	rotateSwitch = function(){	
		
	    play = setInterval(function(){ //Set timer - this will repeat itself every 3 seconds
	        $active = $('.paging a.active').next();
	        if ( $active.length === 0) { //If paging reaches the end...
	            $active = $('.paging a:first'); //go back to first
	        }
	        rotate(); //Trigger the paging and slider function
	    }, 6000); //Timer speed in milliseconds (3 seconds)	
	
	};
	
	rotateSwitch(); //Run function on launch

 //On Click
    $(".paging a").click(function() {    
        $active = $(this); //Activate the clicked paging
        //Reset Timer
        clearInterval(play); //Stop the rotation
        rotate(); //Trigger rotation immediately
        rotateSwitch(); // Resume rotation
        return false; //Prevent browser jump to link anchor
    });    

	
$("#main-menu li a").click(function(){
// e.preventDefault();
 $(this).parent().toggleClass("active");
 //$("#main-menu li a").not(this).removeClass("active");
});	

$("#edit-name").click(function(){
 $(this).val("");
});
$("#edit-pass").click(function(){
 $(this).val("");
});


});

