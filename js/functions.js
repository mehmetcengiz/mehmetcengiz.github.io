$(document).on("ready", function() {
  console.log("document ready");

  $('.mec-skill-subprogress').hide();
  $('#panelweb').show();

  $(".rotate").textrotator({
    animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });

  $('.circle').circleProgress({
        size: 100,
        fill: {
          color:'white'
        }
    });

  $('.mec-skill-progressbar').on('click', function(){ 
    var $panel = $('#' + $(this).attr('data-panelid')),
        $iconElm = $(this).find("i");

    if($panel.hasClass('mec-skill-panel-open')){
      //it s open

      $panel.slideUp();
      $iconElm.removeClass("fa-chevron-up").addClass("fa-chevron-down");

      $panel.removeClass('mec-skill-panel-open');
    }else{
      // it s close

      $panel.slideDown();
      $iconElm.removeClass("fa-chevron-down").addClass("fa-chevron-up");

      $panel.addClass('mec-skill-panel-open');
    }

  });

  
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:1,
      loop:true,
      margin:10,
      autoplay:false,
      mouseDrag: false,
      touchDrag: false
  });
  $(".owl-nav").on("click", function(e) {
    e.preventDefault();

    var $this = $(this),
        slideIndex = $this.attr("data-slide-index");

    $(".owl-nav").removeClass("active");
    $this.addClass("active");

    owl.trigger('to.owl.carousel', slideIndex - 1);
  });

  $('.smooth-scroll').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target),
        offset = $(this).attr("data-smooth-scroll-offset");

    offset = parseInt(typeof offset === "undefined" ? 0 : offset);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + offset
    }, 500, 'swing', function() {
      window.location.hash = target;
    });
  });

});
