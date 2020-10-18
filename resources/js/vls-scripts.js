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

   /*  Animation when scrolling the website page */
   $('.js--jq-plugin-wp-1').waypoint(function(direction) {
      $('.js--jq-plugin-wp-1').addClass('animated fadeInUp');
   }, {
      offset: '50%'
   });
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
      $('.js--jq-plugin-wp-4').addClass('animated fadeInLeft');
   }, {
      offset: '50%'
   });
   $('.js--jq-plugin-wp-5').waypoint(function(direction) {
      $('.js--jq-plugin-wp-5').addClass('animated fadeInRight');
   }, {
      offset: '50%'
   });
   $('.js--jq-plugin-wp-6').waypoint(function(direction) {
      $('.js--jq-plugin-wp-6').addClass('animated pulse');
   }, {
      offset: '50%'
   });
   $('.js--jq-plugin-wp-7').waypoint(function(direction) {
      $('.js--jq-plugin-wp-7').addClass('animated zoomIn');
   }, {
      offset: '50%'
   });
   



});
