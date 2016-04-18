images = ['http://cms.bbcomcdn.com/fun/images/2015/10-best-chest-exercises-for-building-muscle-graphics-flat-bench-dumbbell-press-c.jpg', 'http://www.muscleandperformance.com/content/content/11115/dumbbell-pullover.jpg', 'http://cms.bbcomcdn.com/fun/images/2015/pec-blastin-101_11.jpg', 'http://cms.bbcomcdn.com/fun/images/2014/chest-workout-hunter-labradas-5-moves-to-powerful-pecs-4.jpg', 'http://www.muscleandperformance.com/content/content/11115/cable-crossover.jpg','http://cms.bbcomcdn.com/fun/images/2015/6-strategies-to-target-your-triceps-lateral-head-and-build-bigger-arms_graphics_cellucor-machine-dip.jpg','http://cms.bbcomcdn.com/fun/images/2014/squat-deadlift-bench-press-only-better-graphics-3.jpg','http://cms.bbcomcdn.com/fun/images/2014/finishing-moves_torching-triceps_graphics-1.jpg','http://cms.bbcomcdn.com/fun/images/2014/8-effective-arms-exercises-you-have-to-try-1.jpg','http://cms.bbcomcdn.com/fun/images/2014/8-effective-arms-exercises-you-have-to-try-2.jpg'];


$(document).ready(function(){
    
    $("p").click(function(){
        $(this).hide();
    });

 beginNow = setInterval(forwardImage, 6000);

    $('#leftArrow').click(function() {
        clearInterval(beginNow);
        backwardsImage();
    });

    $('#rightArrow').click(function() {
        clearInterval(beginNow);
        forwardImage();
    });


    //This function will find the key for the current Image

    function currentImageKey() {
        i = jQuery.inArray($('#slideshow').attr('src'), images);
        return i;
    }


    //This function will move the slideshow backwards one
    function backwardsImage() {
        currentImageKey();
        if (i == 0) {
            //changeImage(images.length - 1);
        } else {
            changeImage(i - 1);
        }
        checkArrows(i-1);
    }


    //This function will move the slideshow forward one
    function forwardImage() {
        currentImageKey();
        if (i < images.length - 1) {
            changeImage(i + 1);
        } else {
            //changeImage(0);
        }
        checkArrows(i+1) ;
    }

    


    //this function checks the arrows                  
    function checkArrows(i) {
        if (i == 0) {
            $('#leftArrow').css('display', 'none');
            $('#rightArrow').css('display', 'inline');
        } else if (i == images.length - 1) {
            $('#rightArrow').css('display', 'none');
            $('#leftArrow').css('display', 'inline');
        } else {
            $('#rightArrow').css('display', 'inline');
            $('#leftArrow').css('display', 'inline');
        }            
    }


    //This function will change to image to whatever the variable i passes to it


    function changeImage(i) {
        $('#slideshow').stop().animate({
            opacity: 0,
        }, 400, function() {
            $('#slideshow').attr('src', images[i]);
            $('#holder img').load(function() {
                $('#slideshow').stop().animate({
                    opacity: 1,
                }, 400)
            })
        })
    }

});

