
$(function(){
"use strict";

  	// Define Some Elements
  	var allWindow = $(window),
        body = $('body'),
        top = allWindow.scrollTop(),
        navBar = $(".nav-wrapper");



    var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elm = document.createElement('div');

    if( elm.style.animationName !== undefined ) { animation = true; }

    if( animation === false ) {
      for( var i = 0; i < domPrefixes.length; i++ ) {
        if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
          pfx = domPrefixes[ i ];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animation = true;
          break;
        }
      }
    }


/*---------------------------------------------------------------------
  Javascript Function For Sticky Navigation Bar AND SMOOTH SCROLLING
----------------------------------------------------------------------*/

    // Define stikyNav Function
    function stikyNav() {

      top = allWindow.scrollTop();

      if ( top >= 100 ) {
        navBar.addClass("nav-sticky");

      } else {
        navBar.removeClass("nav-sticky");
      }

      // SHow Also Scroll up Button
      if ( top >= 300 ) {
        $('.scroll-up').addClass("show-up-btn");
      } else {
        $('.scroll-up').removeClass("show-up-btn");
      }
    }

    // Select all links with hashes
    $('a.scroll').on('click', function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash),
              speed= $(this).data("speed") || 800;
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, speed);
          }
        }
    });

    $(".scroll-up").on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 900);
    });


    function scrollFunctions() {
      stikyNav();
   
    }

    // add Event listener to window
    allWindow.on('scroll', function() {
      scrollFunctions();
    });


});