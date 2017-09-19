require(["js/config"], function() {
  require(["jquery", "banner", "header"], function($, ba, header) {
    $(function() {
      // 侧边栏
      $("#right_frame").load("/dev/rightframe.html", function() {});
      // 楼梯导航
      scroll();
      navInit();
      // 加载header
      $("#header").load("/dev/header.html", function() {});
      // 轮播图
      ba.init();
      // 加载footer
      $("#footer").load("/dev/footer.html", function() {});
    });
    /*--------------------------- 楼梯导航 开始 ------------------------*/
    function navInit() {
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
            scrollTop: 1000 + index * 600
          },
          1000
        );
      });
    }
    function scroll() {
      $(window).scroll(function() {
        var _scrolltop = $(this).scrollTop();
        if (_scrolltop > 1000) {
          $("#floor_nav").fadeIn(500);
        } else {
          $("#floor_nav").fadeOut(500);
        }
      });
      $(window).scroll(function() {
        var _scrolltop = $(this).scrollTop();
        var index = parseInt((_scrolltop - 1000) / 600);
        var $currentNav = $("#LoutiNav ul li").eq(index);
        $currentNav.find("span").addClass("active");
        $currentNav
          .siblings()
          .find("span")
          .removeClass("active");
      });
    }
    /*--------------------------- 楼梯导航 结束 ------------------------*/
  });
});
