$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 900) ? scrollButton.fadeIn(600): scrollButton.fadeOut(600);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});

var wow = new WOW();
wow.init();



// parallaxInstance.friction(0.2, 0.2);
$(document).ready(function() {
    if ($(window).width() >= 992) {
        var scene = $('#scene').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    // Langding Page Links
    $(".toabout").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });
    $(".tofeatures").click(function() {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 500);
    });
    $(".toadvantages").click(function() {
        $('html, body').animate({
            scrollTop: $("#advantages").offset().top
        }, 600);
    });
    $(".totakamol").click(function() {
        $('html, body').animate({
            scrollTop: $("#takamol").offset().top
        }, 700);
    });
    $(".tocs").click(function() {
        $('html, body').animate({
            scrollTop: $("#cs").offset().top
        }, 700);
    });


    $(".feature-item").hover(function() {
        $('.feature-item').removeClass("opacity-in");
        $(this).addClass("opacity-in");
    });



    $('.apps .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 10,
        // stagePadding: 5,
        rtl: true,
        navText: ["<span class='lnr lnr-arrow-right'></span>", "<span class='lnr lnr-arrow-left'></span>"],
        responsiveClass: true,
        dots: true,
        nav: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1,
                margin: 30,
                center: false,
                stagePadding: 15,
            },
            500: {
                items: 2,
                margin: 20,
                center: false,
                stagePadding: 15,
            },
            700: {
                items: 3,
                margin: 10,
                center: true,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            },
            1510: {
                items: 7,
            }
        }
    });
    $(".mo-tabs a").on("shown.bs.tab", function(e) {
        let $owl = $(".apps .owl-carousel");
        $owl.trigger('refresh.owl.carousel');
    });


    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 20,
        // stagePadding: 5,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        dots: true,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
            1510: {
                items: 6,
            }
        }
    });

    //This is To make faetures as slider in small screens
    if ($(window).width() <= 991) {
        $(".features-items-box").addClass("owl-carousel owl-theme");
        $(".features-items-box .feature-item").removeClass("owl-carousel");
        $('.features-items-box').owlCarousel({
            loop: false,
            margin: 0,
            rtl: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1

                }
            }
        })
    } else {
        $(".features-box .feature").removeClass("owl-carousel");
        $(".features-box .feature").removeClass("owl-carousel");
    };


    //This is to Open Side Menu in Small Screens
    // $(".menu").click(function() {
    //     $(".menu .menu-icon").removeClass("open-menu")
    //     $(".menu .menu-icon").addClass("close-menu")
    //     $(".mo-nav").addClass("menu-open");
    //     $("body").addClass("overflow")
    // });
    // $(".close,.nav-li .nav-link").click(function() {
    //     $(".menu .menu-icon").addClass("open-menu")
    //     $(".menu .menu-icon").removeClass("close-menu")
    //     $(".mo-nav").removeClass("menu-open");
    //     $("body").removeClass("overflow")
    // });

    $(".menu").click(function() {
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
            // $(".mo-nav").slideDown(500);
        $(".mo-nav").addClass("menu-down");
        $("body").addClass("overflow")
    });
    $(".close,.nav-li .nav-link").click(function() {
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
            // $(".mo-nav").slideUp(500);
        $(".mo-nav").removeClass("menu-down");
        $("body").removeClass("overflow")
    });

});

$(document).ready(function () {
    $(".pt").on("click", ".pt_control", function () {
        var l = $(this);
        if (l.hasClass("pt_control_all")) {
            var o = $(".pt_category").has(".pt_control");
            l.toggleClass("collapsed"),
                o.toggleClass("collapsed", l.hasClass("collapsed")),
                $(".showMoreBtn").remove()
        } else { l.closest(".pt_category").toggleClass("collapsed") }
    })
});