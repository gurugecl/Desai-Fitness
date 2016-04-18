images = ['http://cdn-maf0.heartyhosting.com/sites/muscleandfitness.com/files/Dumbbell-Lateral-Raise.jpg', 'http://fitnedio.com/wp-content/uploads/2016/02/Front-Cable-Raise.jpg', 'http://cms.bbcomcdn.com/fun/images/2015/true-muscle-phase-3-overview-graphics-2.jpg', 'http://seannal.com/images/bent-over-rear-delt-raises.jpg', 'http://cms.bbcomcdn.com/fun/images/2015/how-to-build-monster-traps-graphics-db-shrug.jpg','http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/photo_gallery_full/public/30-best-ab-exercises-dip-leg-raise_0.jpg?itok=lKBWk9yu','https://s-media-cache-ak0.pinimg.com/originals/99/dc/ed/99dced419b563238f74c08421ecf64b1.jpg','https://www.popworkouts.com/wp-content/uploads/2012/11/bicycle-crunches-exercise2.jpg','http://build-muscle-101.com/wp-content/uploads/2014/12/Cross-Body-Crunch.jpg','http://www.md-health.com/images/10416579/lower-ab-workouts-for-men-06.jpg'];


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

