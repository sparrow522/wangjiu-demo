require(["js/config"], function() {
  require(["jquery", "banner", "header"], function($, ba, header) {
    // 加载header
    $("#header").load("http://localhost:8080/dev/header.html", function (){

    });
   // 轮播图
    ba.init();
    // 加载footer
    $("#footer").load("http://localhost:8080/dev/footer.html", function() {
      
    });
  });
});
