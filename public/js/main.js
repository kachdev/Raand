
// Partner Logo Footer 
    function partnersLogo () {
        var logoSlide = $("#award-content");
        if(logoSlide.length) {
            logoSlide.owlCarousel({
              loop:true,
              margin:-1,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:2000,
              autoplaySpeed:1000,
              lazyLoad:true,
              singleItem:true,
              responsive:{
                  0:{
                      items:1
                  },
                  550:{
                      items:2
                  },
                  751:{
                      items:3
                  },
                  1001:{
                      items:5
                  }
              }
          })
        }
      }

      // Client SLider
function clientSlider () {
    var cSldier = $("#liontestimonial");
    if(cSldier.length) {
        cSldier.owlCarousel({
          animateOut: 'slideOutLeft',
          loop:true,
          nav:false,
          navText:false,
          dots:true,
          autoplay:true,
          autoplayTimeout:7000,
          autoplaySpeed:5500,
          lazyLoad:true,
          items:1,
      })
    }
  }



      // DOM ready function
jQuery(document).on('ready', function() {
	(function ($) {
     partnersLogo ();
     clientSlider ();
  })(jQuery);
});
      