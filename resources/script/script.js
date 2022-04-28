$(document).ready(function() {
  
  // sticky navigation------------------------------------------------------------------------------
  $('.js-section-features').waypoint(function(direction) {
      if (direction == "down") {
            $('nav').addClass('sticky');
      }else{
        $('nav').removeClass('sticky');
      }
  })

  // button scroll-----------------------------------------------------------------------------------
  $('.js-scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
  })

  $('.js-scroll-to-features').click(function() {
    $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
  })

  // navigation scroll-------------------------------------------------------------------------------
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Animations on scroll
  $('.js-waypoint-1').waypoint(function(direction) {
    $('.js-waypoint-1').addClass('animate__animated animate__fadeIn');
  },{ offset: '50%'});

  $('.js-waypoint-2').waypoint(function(direction) {
    $('.js-waypoint-2').addClass('animate__animated animate__fadeInUp');
  },{ offset: '50%'});

  $('.js-waypoint-3').waypoint(function(direction) {
    $('.js-waypoint-3').addClass('animate__animated animate__fadeIn');
  },{ offset: '50%'});

  $('.js-waypoint-4').waypoint(function(direction) {
    $('.js-waypoint-4').addClass('animate__animated animate__pulse');
  },{ offset: '50%'});

  //mobile nav----to make the nav appear when the menu button is clicked
  $('.js-mobile-nav-icon').click(function() {
    var nav = $('.js-main-nav');
    nav.slideToggle(200);
    if($(".js-mobile-nav-icon ion-icon").attr('name') == "menu-outline"){
      $('.js-mobile-nav-icon ion-icon').removeAttr('name', 'menu-outline');
      $('.js-mobile-nav-icon ion-icon').attr('name', 'close-outline');
    }else{
      $('.js-mobile-nav-icon ion-icon').removeAttr('name', 'close-outline');
      $('.js-mobile-nav-icon ion-icon').attr('name', 'menu-outline');
    }
  });
});