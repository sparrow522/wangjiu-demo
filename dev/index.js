require(["js/config"], function () {
  require(["jquery", "banner", "floornav", "search", "userlogin"], function ($, banner, floornav, search, login) {
    $(function () {
      // 加载侧边栏
      $("#right_frame").load("/dev/wzq-rightFixedBar.html", function () {});
      // 加载头部
      $("#header").load("/dev/header.html", function () {
        // 下拉搜索
        search.init();
        // 用户登录
        login.userLogin();
      });
      // 加载footer
      $("#footer").load("/dev/footer.html", function () {});
      // 轮播图
      banner.init();
      // 楼梯导航
      floornav.navInit();
      floornav.scroll();
    });
  });
});