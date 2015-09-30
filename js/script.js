$(function() {

  $(".next").click(function() {
    var slideToHide = $(".active");
        slideToShow = slideToHide.next();

    if (slideToHide.is(":last-child")) {
      slideToShow = $(".carousel-slide:first-child");
    }

    // Find active slide, remove active class then add active class to next slide
    slideToHide.removeClass("active");
    slideToShow.addClass("active");

    // Add class active to dot - tracker reference number

  });

  $(".previous").click(function() {
    var slideToHide = $(".active");
        slideToShow = slideToHide.prev();

    if (slideToHide.is(":first-child")) {
      slideToShow = $(".carousel-slide:last-child");
    }

    // Find active slide, remove active class then add active class to next slide
    slideToHide.removeClass("active");
    slideToShow.addClass("active");

  });

// count carousel-slide

var $carouselSlide = $(".carousel-slide");
var numSlide = $carouselSlide.size();

// generate dots

for(i=0; i<numSlide; i++) {
  $('.indicator-dot').append('<li><div class="dot"></div></li>')
}




});
