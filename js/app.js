$(document).ready(function () {
    
    // Start Header Section 
    // Start Banner Section
    $(".carousel").carousel({
        interval: 500
    });
    // End Banner Section 
    // End Header Section 
    
    // Start Info Section 
    $(window).scroll(function() {
        
        let getscrollpoint = $(this).scrollTop();
        
        if(getscrollpoint >= 520) {
            $(".infotexts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        } else {
            $(".infotexts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights");
        }
    });
    // End Info Section

    // Start Premises Section 
    $("#lightslider").lightSlider({
        auto: true,
        items: 4,
        loop: true,
        slideMove: 1,
        speed: 600,
        autoWidth: true,
    }).play(); 
    // End Premises Section

    // Start Pricing Section 
    $(window).scroll(function() {
        
        let getscroll = $(this).scrollTop();
        
        if(getscroll >= 2730) {
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights")
        } else {
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }
    });
    // End Pricing Section 

    // Start Adv Section
    $("#videos").click("click", function() {
        
        var getmodalbox = $(this).data("bs-target");
        var video = $(this).data("video");
        var videoautoplay = video + "?autoplay=1";
        
        $(`${getmodalbox} iframe`).attr("src", videoautoplay);

        // sound close when pressed button
        $(`${getmodalbox} button.btn-close`).click("click", function() {
            $(`${getmodalbox} iframe`).attr("src", video);
        });

        // sound close when pressed overlay
        $(`${getmodalbox}`).click("hidden.bs.modal", function() {
            $(`${getmodalbox} iframe`).attr("src", video);
        });
    });
    // End Adv Section
    
    // Start Join Us Section
    $("#accordion").accordion();
    // End Join Us Section
    
    // Start Footer Section 
    let today = new Date();
    $("#getyears").text(today.getUTCFullYear());
    // End Footer Section
    
    // Start Progress
    $(window).scroll(function() {
        
        var getprogress = $("#progresss");
        var getprogressvalue = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        
        // By jQuery
        var getscrollheight = $(document).height();
        var getclientheight = $(this).height();
        
        // By JavaScript
        // var getscrollheight = document.documentElement.scrollHeight;
        // var getclientheight = document.documentElement.clientHeight;
        
        var calcheight = getscrollheight - getclientheight;
        
        var final = Math.round((getscrolltop / calcheight) * 100);
        
        getprogressvalue.text(`${final}%`);
        
        getprogress.css({
            background: `conic-gradient(steelblue ${final}%, #eee ${final}%)`
        });
        
        // formula => scrolltop / doc.height - client.height * 100
    });
    // End Progress 
    
});