/* JAVASCRIPT CODES */

$(window).load(function() {
  setTimeout(function() {
    $('.header-overlay').velocity({
      translateX: "100%",
      opacity: "1",
    }, {
      duration: 850,
      easing: [0.6, 0, 0.3, 1],
    })
  }, 850);


  setTimeout(function() {
    $('#header-content').velocity({
      opacity: "1",
      complete: function() {
        setTimeout(function() {
          $('.text-intro').each(function(i) {
            (function(self) {
              setTimeout(function() {
                $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
              }, (i * 150) + 150);
            })(this);
          });
        }, 0);
      }
    }, {
      duration: 1000,
      easing: [0.7, 0, 0.3, 1],
    })
  }, 1600);
})


$(document).ready(function() {
  $('a#open-more-info').on("click", function() {
    $(".overlay").toggleClass("morp");
    $("#main-content").toggleClass("main-hide");
    $("#close-content").toggleClass("hide-close");
    $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');
    setTimeout(function() {
      $("#mcs_container").mCustomScrollbar("scrollTo", "#main-content", {
        scrollInertia: 500,
        callbacks: false
      });
    }, 350);
  });
  $('button#close-content').on("click", function() {
    $(".overlay").addClass("morp");
    $("#main-content").addClass("main-hide");
    $("#close-content").addClass("hide-close");
    $('.mCSB_scrollTools').removeClass('mCSB_scrollTools-left');
    setTimeout(function() {
      $("#mcs_container").mCustomScrollbar("scrollTo", "#main-content", {
        scrollInertia: 500,
        callbacks: false
      });
    }, 350);
  });


  $(function() {
    $('body').bind('mousewheel', function(event) {
      event.preventDefault();
      var scrollTop = this.scrollTop;
      this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
    });
  });
  
  var ifTouchDevices = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

  function scrollbar() {
    if (ifTouchDevices) {
      $('body').addClass('scroll-touch');
      $('a#open-more-info').on("click", function() {
        event.preventDefault();
        var target = "#" + this.getAttribute('data-target');
        $('body').animate({
          scrollTop: $(target).offset().top
        }, 500);
      });
    } else {
      $('body').mCustomScrollbar({
        scrollInertia: 150,
        axis: "y"
      });
    }
  }
  scrollbar();
});