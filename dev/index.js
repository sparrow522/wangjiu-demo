require(["js/config"], function() {
  require(["jquery", "banner", "floornav"], function($, banner, floornav) {
    $(function() {
      // 加载侧边栏
      $("#right_frame").load("/dev/rightframe.html", function() {});
      // 加载头部
      $("#header").load("/dev/header.html", function() {
        require(["js/config"], function() {
          require(["jquery", "search", "userlogin"], function($, search, login) {
            // 下拉搜索
            search.init({
              callback: function(data) {
                console.log("%c" + data, "color: red");
              }
            });
            // 用户登录
            login.userLogin();
          });
        });
      });
      // 加载footer
      $("#footer").load("/dev/footer.html", function() {});
      // 轮播图
      banner.init();
      // 楼梯导航
      floornav.navInit();
      floornav.scroll();
    });
  });
});
