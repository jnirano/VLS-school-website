$(document).ready(function () {
   
   /*Sticky Navigation */
   $('.js--section-about').waypoint(function(direction) {
      if(direction == "down") {
         $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky');
      }
   }, {

      offset: '20%;'
   });

   /* Scroll on buttons Click */
   $('.js--scroll-to-vl-schools').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-vl-schools').offset().top}, 1000); 
   });
   $('.js--scroll-to-events-news').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-events-news').offset().top}, 1000); 
   });
    
   $('a[href*="#"]') // Select all links with hashes
   .not('[href="#"]').not('[href="#0"]').click(function(event) { // Remove links that don't actually link to anything
   // On-page links
   if (  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
         // Only prevent default if animation is actually gonna happen
         event.preventDefault();
         $('html, body').animate({
            scrollTop: target.offset().top}, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
            // Checking if the target was focused
            return false;
            }
         }); 
      }}
   });

   /*  Animation on scrolling the website page  Using JQuery Plugin (Waypoint)*/
   $('.js--jq-plugin-wp-2').waypoint(function(direction) {
      $('.js--jq-plugin-wp-2').addClass('animated fadeIn');
   }, {
      offset: '50%'
   });
   $('.js--jq-plugin-wp-3').waypoint(function(direction) {
      $('.js--jq-plugin-wp-3').addClass('animated bounceInDown');
   }, {
      offset: '50%'
   });
   $('.js--jq-plugin-wp-4').waypoint(function(direction) {
      $('.js--jq-plugin-wp-4').addClass('animated pulse');
   }, {
      offset: '20%'
   });
   $('.js--jq-plugin-wp-5').waypoint(function(direction) {
      $('.js--jq-plugin-wp-5').addClass('animated fadeInRight');
   }, {
      offset: '50%'
   });
   $('.js--jq-plugin-wp-6').waypoint(function(direction) {
      $('.js--jq-plugin-wp-6').addClass('animated pulse');
   }, {
      offset: '40%'
   });
   $('.js--jq-plugin-wp-7').waypoint(function(direction) {
      $('.js--jq-plugin-wp-7').addClass('animated pulse');
   }, {
      offset: '35%'
   });

   /* Mobile Navigation */
   $('.js--mobile-nav-icon').click(function () {
      let mobileNav = $('.navbar-nav-main');
      let icon = $('.js--mobile-nav-icon i');

      mobileNav.slideToggle(200);

      if (icon.hasClass('ion-navicon-round')) {
         icon.addClass('ion-close-round');
         icon.removeClass('ion-navicon-round');
      } else {
         icon.addClass('ion-navicon-round');
         icon.removeClass('ion-close-round');
      }   
   });
});
