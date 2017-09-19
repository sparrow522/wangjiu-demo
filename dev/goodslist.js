require(["js/config"], function() {
  require(["jquery", "header"], function($) {
    $(function() {
      // 右侧边栏
      $("#right_frame").load("http://localhost:8080/dev/rightframe.html", function() {});
      // 加载 header
      $("#header").load("http://localhost:8080/dev/header.html", function() {});
      // 加载 footer
      $("#footer").load("http://localhost:8080/dev/footer.html");
    });
    /*------------------------ 放大镜开始 ------------------------*/
    $(window).load(function() {
      var $smallImg = $(".detail_smallimg:first"); //小图
      var $bigImg = $(".detail_bigimg:first"); //大图
      var $smallCursor = $(".detail_smallcursor:first"); //小可视区域
      var $bigCursor = $(".detail_bigcursor:first"); //大可视区域
      $smallImg.hover(
        function() {
          $bigCursor.show();
        },
        function() {
          $bigCursor.hide();
        }
      );
      //根据比例重新计算小可视区的大小
      //公式：  小可视区宽度/大可视区宽度 = 小图宽度/大图宽度
      $smallCursor.width(
        $smallImg.outerWidth() * $bigCursor.outerWidth() / 800
      );
      $smallCursor.height(
        $smallImg.outerWidth() * $bigCursor.outerWidth() / 800
      );
      //由于小可视区域会隐藏，因此不能使用offsetWidth属性来计算宽度。
      //smallCursor的边长
      diameter = $smallCursor.outerWidth();
      //大小可视区比例
      var scale = $bigCursor.outerWidth() / diameter;
      $smallImg.mousemove(function(evt) {
        var e = evt || event;
        var disX = e.clientX - $smallImg.offset().left - diameter / 2;
        var disY = e.clientY - $smallImg.offset().top - diameter / 2;
        var leftSide = $smallImg.offset().left + diameter / 2;
        var topSide = $smallImg.offset().top + diameter / 2;
        var rightSide =
          $smallImg.offset().left + $smallImg.outerWidth() - diameter / 2;
        var downSide =
          $smallImg.offset().top + $smallImg.outerHeight() - diameter / 2;
        if (
          e.clientX >= leftSide &&
          e.clientX <= rightSide &&
          e.clientY >= topSide &&
          e.clientY <= downSide
        ) {
          $smallCursor.css("display", "block");
          //小图的位置
          $smallCursor.css("left", disX);
          $smallCursor.css("top", disY);
          //大图的位置
          $bigImg.css("left", -disX * scale);
          $bigImg.css("top", -disY * scale);
        } /* else {
          $smallCursor.css("display", "none");
        } */
      });
    });
    /*------------------------ 放大镜结束 ------------------------*/
  });
});
