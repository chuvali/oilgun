// JavaScript Document

jQuery(document).ready(function($) {
  var owl_a = $('.banner .owl-carousel');
  owl_a.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ' +
    'resize.owl.carousel resized.owl.carousel ' +
    'refresh.owl.carousel refreshed.owl.carousel ' +
    'update.owl.carousel updated.owl.carousel ' +
    'drag.owl.carousel dragged.owl.carousel ' +
    'translate.owl.carousel translated.owl.carousel ' +
    'to.owl.carousel changed.owl.carousel',
    function(e) {
      $('.' + e.type)
        .removeClass('secondary')
        .addClass('success');
      window.setTimeout(function() {
        $('.' + e.type)
          .removeClass('success')
          .addClass('secondary');
      }, 500);
    });
  owl_a.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    //animateIn: 'fadeIn',/*flipInX*/
    //animateOut: 'fadeOut',/*slideOutDown,*/
    lazyLoad: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    video: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
  
  var owl_b = $('.indexB .owl-carousel');
  owl_b.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ' +
    'resize.owl.carousel resized.owl.carousel ' +
    'refresh.owl.carousel refreshed.owl.carousel ' +
    'update.owl.carousel updated.owl.carousel ' +
    'drag.owl.carousel dragged.owl.carousel ' +
    'translate.owl.carousel translated.owl.carousel ' +
    'to.owl.carousel changed.owl.carousel',
    function(e) {
      $('.' + e.type)
        .removeClass('secondary')
        .addClass('success');
      window.setTimeout(function() {
        $('.' + e.type)
          .removeClass('success')
          .addClass('secondary');
      }, 500);
    });
  owl_b.owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    //animateIn: 'fadeIn',/*flipInX*/
    //animateOut: 'fadeOut',/*slideOutDown,*/
    lazyLoad: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    video: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        autoplay: true
      },
      431: {
        items: 2,
        loop: true,
        autoplay: true
      },
      531: {
        items: 3,
      }
    }
  });
    
  var owl_c = $('.ind_P .owl-carousel');
  owl_c.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ' +
    'resize.owl.carousel resized.owl.carousel ' +
    'refresh.owl.carousel refreshed.owl.carousel ' +
    'update.owl.carousel updated.owl.carousel ' +
    'drag.owl.carousel dragged.owl.carousel ' +
    'translate.owl.carousel translated.owl.carousel ' +
    'to.owl.carousel changed.owl.carousel',
    function(e) {
      $('.' + e.type)
        .removeClass('secondary')
        .addClass('success');
      window.setTimeout(function() {
        $('.' + e.type)
          .removeClass('success')
          .addClass('secondary');
      }, 500);
    });
  owl_c.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    //animateIn: 'fadeIn',/*flipInX*/
    //animateOut: 'fadeOut',/*slideOutDown,*/
    lazyLoad: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    video: true,
    responsive: {
      0: {
        items: 1
      },
      431: {
        items: 2
      },
      769: {
        items: 3
      },
      1201: {
        items: 4
      }
    }
  });
  
  var owl_d = $('.ind_A .owl-carousel');
  owl_d.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ' +
    'resize.owl.carousel resized.owl.carousel ' +
    'refresh.owl.carousel refreshed.owl.carousel ' +
    'update.owl.carousel updated.owl.carousel ' +
    'drag.owl.carousel dragged.owl.carousel ' +
    'translate.owl.carousel translated.owl.carousel ' +
    'to.owl.carousel changed.owl.carousel',
    function(e) {
      $('.' + e.type)
        .removeClass('secondary')
        .addClass('success');
      window.setTimeout(function() {
        $('.' + e.type)
          .removeClass('success')
          .addClass('secondary');
      }, 500);
    });
  owl_d.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    //animateIn: 'fadeIn',/*flipInX*/
    //animateOut: 'fadeOut',/*slideOutDown,*/
    lazyLoad: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    video: true,
    responsive: {
      0: {
        items: 1
      },
      769: {
        items: 2
      }
    }
  });
  
  var owl_e = $('.ind_N .owl-carousel');
  owl_e.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ' +
    'resize.owl.carousel resized.owl.carousel ' +
    'refresh.owl.carousel refreshed.owl.carousel ' +
    'update.owl.carousel updated.owl.carousel ' +
    'drag.owl.carousel dragged.owl.carousel ' +
    'translate.owl.carousel translated.owl.carousel ' +
    'to.owl.carousel changed.owl.carousel',
    function(e) {
      $('.' + e.type)
        .removeClass('secondary')
        .addClass('success');
      window.setTimeout(function() {
        $('.' + e.type)
          .removeClass('success')
          .addClass('secondary');
      }, 500);
    });
  owl_e.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    //animateIn: 'fadeIn',/*flipInX*/
    //animateOut: 'fadeOut',/*slideOutDown,*/
    lazyLoad: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    video: true,
    responsive: {
      0: {
        items: 1
      },
      577: {
        items: 2
      },
      993: {
        items: 3
      }
    }
  });
  
  var owl_f = $('.relatedP .owl-carousel');
  owl_f.on('initialize.owl.carousel initialized.owl.carousel ' +
    'initialize.owl.carousel initialize.owl.carousel ' +
    'resize.owl.carousel resized.owl.carousel ' +
    'refresh.owl.carousel refreshed.owl.carousel ' +
    'update.owl.carousel updated.owl.carousel ' +
    'drag.owl.carousel dragged.owl.carousel ' +
    'translate.owl.carousel translated.owl.carousel ' +
    'to.owl.carousel changed.owl.carousel',
    function(e) {
      $('.' + e.type)
        .removeClass('secondary')
        .addClass('success');
      window.setTimeout(function() {
        $('.' + e.type)
          .removeClass('success')
          .addClass('secondary');
      }, 500);
    });
  owl_f.owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    //animateIn: 'fadeIn',/*flipInX*/
    //animateOut: 'fadeOut',/*slideOutDown,*/
    lazyLoad: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    video: true,
    responsive: {
      0: {
        items: 1
      },
      431: {
        items: 2
      },
      769: {
        items: 3
      },
      1201: {
        items: 4
      }
    }
  });
  
  
});