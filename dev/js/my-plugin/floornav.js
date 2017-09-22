define(["jquery"], function($) {
      return {
        navInit: function(){
          var $navs = $("#floor_nav ul li");
          $navs.click(function() {
            var index = $(this).index();
            $(this)
              .siblings()
              .find("span")
              .removeClass("active");
            $(this)
              .find("span")
              .addClass("active");
            $("html").animate(
              {
                scrollTop: 1730 + index * 546
              },
              1000
            );
          });
        },
        scroll: function (){
          $(window).scroll(function() {
            var _scrolltop = $(this).scrollTop();
            if (_scrolltop > 1730) {
              $("#floor_nav").fadeIn(500);
            } else {
              $("#floor_nav").fadeOut(500);
            }
          });
          $(window).scroll(function() {
            var _scrolltop = $(this).scrollTop();
            var index = parseInt((_scrolltop - 1730) / 546);
            var $currentNav = $("#LoutiNav ul li").eq(index);
            $currentNav.find("span").addClass("active");
            $currentNav
              .siblings()
              .find("span")
              .removeClass("active");
          });
        }
      };
    });