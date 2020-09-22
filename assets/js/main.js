(function($) {
  "use strict";


  $(function() {
    $('#nnnn').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  jQuery('.bt').click(function(event){ 
      jQuery('.active').removeClass('active'); 
      jQuery(this).addClass('active'); 
      event.preventDefault();
  });
  
  $(".all-features-item").slick({ 
    infinite: true,   
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button><img src="assets/img/icon-left.svg" alt=""></button>',
    prevArrow: '<button class="next-arrow"><img src="assets/img/icon-right.svg" alt=""></button>'
  });


  
 
})(jQuery);
