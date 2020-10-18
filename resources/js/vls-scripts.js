$(document).ready(function () {
   /*Sticky Navigation */
   $('.js--section-about').waypoint(function(direction) {
      if(direction == "down") {
         $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky');
      }
   }, {
   offset: '6opx;'
   });

   /*Scroll on Button Click */
   $('.js--scroll-to-vl-schools').click(function () { 
      $('html, body').animate({scrollTop: $('.js--section-vl-schools').offset().top}, 1000);
   });
   
   $('.js--scroll-to-events-news').click(function () { 
      $('html, body').animate({scrollTop: $('.js--section-events-news').offset().top}, 1000);
   });
   
   /*Navigation Scroll */
   $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
   });


});
