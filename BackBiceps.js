images = ['http://cms.bbcomcdn.com/fun/images/2015/10-best-back-exercises-for-building-muscle-7b.jpg', 'http://cms.bbcomcdn.com/fun/images/2015/5-back-workouts-for-mass_06.jpg', 'http://cms.bbcomcdn.com/fun/images/2015/10-best-back-exercises-for-building-muscle-2b.jpg', 'http://cms.bbcomcdn.com/fun/images/2013/cellucor_built_by_science_days_1-3_craig_graphics-back.jpg', 'http://cms.bbcomcdn.com/fun/images/2015/jim-stoppanis-back-and-fourth-back-workout-mobile-6.jpg','http://www.bodybuilding.com/fun/images/2015/5-beastly-biceps-routines-5.jpg','http://www.bodybuilding.com/images/2016/january/the-5-best-biceps-exercises-for-size_01.jpg','https://lh4.ggpht.com/ft4SesIRQmksZAVGTIgSh99V_pYBy2bDVUHin6uPu4ikC7d3AN21y_M9Hga8bzJgV5Q=h900','http://bodybuildingadvisor.com/wp-content/uploads/2015/03/best-bicep-workouts-for-size.jpg','http://cms.bbcomcdn.com/fun/images/2014/5-biceps-blasting-workouts-graphic-5.jpg'];


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

