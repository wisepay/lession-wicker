var navInnerHeight = $("#nav_Box").innerHeight();

$(document).ready(function(){
    $("body").css("paddingTop", navInnerHeight)
});

$(document).ready(function(){
    screenFit();
});

$(window).resize(function(){
    screenFit();
})

function screenFit(){
    var windowHeight = $(window).height();
    $("#slide_Bar01, .slide-list").height(windowHeight - navInnerHeight);
}

// full width slider widht dynamic slide count:-
$("#slide_Bar01").on('init afterChange', function (event, slick, currentSlide, nextSlide) {
    var slickCount = $(".slide-count");
    var index = (currentSlide ? currentSlide : 0) + 1;
    slickCount.text(index + ' / ' + slick.slideCount);
});

$("#slide_Bar01").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    adaptiveHeight: false,
    cssEase: 'linear',
    asNavFor: '',
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    appendArrows: '.slide-arrows',
    appendDots: '.slide-dots',
    arrows: true,
    dots: false,
    responsive: [
        {
            breakpoint: 768,
            mobileFirst: true,
            settings: {
                arrows: false,
                dots: true
            }
        }
    ]
});


// function for carousel sldier:-
$("#arival_Bar01").on('init afterChange', function (event, slick, currentSlide, nextSlide) {
    var slickCount = $(".arival-count");
    var index = (currentSlide ? currentSlide : 0) + 1;
    slickCount.text(index + ' / ' + slick.slideCount);
});

$("#arival_Bar01").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    infinite: false,
    autoplay: false,
    centerMode: false,
    cssEase: 'linear',
    asNavFor: '',
    prevArrow: '<button type="button" aria-label="Previous" class="slick-prev"></button>',
    nextArrow: '<button type="button" aria-label="Next" class="slick-next"></button>',
    appendArrows: '.arival-arrows',
    appendDots: '.arival-dots',
    arrows: true,
    dots: false,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});




// function for scroll down:-
$(function() {
    $("#scroll_btn01").click (function() {
      $("html, body").animate({scrollTop: $("#gallery_Box01").offset().top - 80}, 'slow');
      return false;
    });
});

// function for fancybox:-
$('[data-fancybox="product_link"]').fancybox({
	// Options will go here
    openEffect: "none",
    closeEffect: "none"
});

$('[data-fancybox="factory_link"]').fancybox({
	// Options will go here
    openEffect: "none",
    closeEffect: "none"
});


// function for sub menu:-
$(document).on("click", "#sub_menu", function(e){

    $(this).find("dl").slideToggle();
    e.stopPropagation();

    if($(this).find("a").children("i").hasClass("fa-angle-down")){
        $(this).find("a").children("i").removeClass("fa-angle-down");
        $(this).find("a").children("i").addClass("fa-angle-up");
    }else{
        $(this).find("a").children("i").removeClass("fa-angle-up");
        $("#sub_menu").find("a").children("i").addClass("fa-angle-down");
    }

});

