
$(document).ready(function () {

   /*  FOR THE STICKY NAVIGATION  */
   $('.js--about-joel').waypoint(function (direction) {
      if (direction == "down") {
         $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky');
      }
   }, {
      offset: '8%;'
   });

   /* SCROLL ON BUTTONS CLICK TO CONTACT*/
   $('.js--scroll-start-Contact, .js--scroll-to-Contact').click(function () {
      $('html, body').animate({ scrollTop: $('.js--contact-now').offset().top }, 1000);
   });

   /* NAVIGATION SCROLL PAGE*/
   $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
               $('html,body').animate({
                  scrollTop: target.offset().top
               }, 1700);
               return false;
            }
         }
      });
   });

   /*PAGE ANIMATION EFFECT ON SCROLL */
   $('.js--wp-a').waypoint(function (direction) {
      $('.js--wp-a').addClass('animated bounceInDown');
   }, {
      offset: '55%'
   });

   $('.js--wp-1').waypoint(function (direction) {
      $('.js--wp-1').addClass('animated fadeInRight');
   }, {
      offset: '55%'
   });

   $('.js--wp-b').waypoint(function (direction) {
      $('.js--wp-b').addClass('animated fadeInLeft');
   }, {
      offset: '55%'
   });

   $('.js--wp-c').waypoint(function (direction) {
      $('.js--wp-c').addClass('animated fadeInRight');
   }, {
      offset: '55%'
   });

   $('.js--wp-d').waypoint(function (direction) {
      $('.js--wp-d').addClass('animated zoomIn');
   }, {
      offset: '55%'
   });

   $('.js--wp-e').waypoint(function (direction) {
      $('.js--wp-e').addClass('animated zoomIn');
   }, {
      offset: '55%'
   });

   $('.js--wp-f').waypoint(function (direction) {
      $('.js--wp-f').addClass('animated pulse');
   }, {
      offset: '55%'
   });


   /*  MOBILE NAVIGATION  */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--nav-links');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });  

   /*  END MOBILE NAVIGATION  */

});
