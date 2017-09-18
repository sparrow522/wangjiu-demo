//轮播图
define(["jquery", "swiper"], function($, Swiper) {
  function Banner() {
    this.init = function() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: 2000, //可选选项，自动滑动
        speed: 1000, //可选选项，动画运行时间
        loop: true, //可选选项，开启循环
        // 淡入
        effect: "fade",
        // 如果需要分页器
        pagination: ".swiper-pagination",
        // 如果需要前进后退按钮
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true
      });
    };
  }
  return new Banner();
});
