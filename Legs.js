images = ['https://stefaniemariefit.files.wordpress.com/2015/05/bulgarian-db-split-squat.jpg', 'http://bodybuildingadvisor.com/wp-content/uploads/2015/09/stretching-exercises-for-quadriceps.jpg', 'http://www.bodybuilding.com/images/2016/february/build-monster-legs-with-this-workout-graphics-4.jpg', 'http://cms.bbcomcdn.com/fun/images/2014/8-techniques-to-build-monster-quads-4.jpg', 'http://cms.bbcomcdn.com/fun/images/2015/3-essential-moves-for-powerhouse-hamstrings_graphics-romanian.jpg','http://www.cutandjacked.com/sites/default/files/images/articles/Calve_Guide/2%20seated%20calve%20raise.jpg','http://www.bodybuilding.com/fun/images/2013/how-squats-are-superior-to-leg-press-1.jpg','http://cms.bbcomcdn.com/fun/images/2015/8-ways-to-build-bigger-and-stronger-hamstrings-cellucor-graphic-1.jpg','http://cms.bbcomcdn.com/fun/images/2015/3-essential-moves-for-powerhouse-hamstrings_graphics-hip-thrust.jpg','http://www.myprotein.com/thezone/wp-content/uploads/seated-hamstring-curls1.jpg'];


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

