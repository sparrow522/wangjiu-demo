require(["js/config"], function() {
  require(["jquery"], function($) {
    $.ajax({
      type: "get",
      data: {
        userID: "liujiabin"
      },
      dataType: "jsonp",
      url: "http://datainfo.duapp.com/shopdata/getCar.php",
      success: function(res) {
        console.log(res);
        var strlist = res
          .map(function(item) {
            return `
            <li>
              <div class="checkbox">
                <input type="checkbox" checked>
              </div>
              <div class="cart_good">
                <a class="img" href="javascript:void(0)">
                  <img src=${item["goodsListImg"]} alt="">
                </a>
                <a class="word" href="javascript: void(0)">${item[
                  "goodsName"
                ]}</a>
              </div>
              <span class="price">￥${item["price"]}.00</span>
              <div class="store">
                <div class="goodsadd">
                  <a class="sub" href="javascript:void(0)">-</a>
                  <input type="text" value="1">
                  <a class="add" href="javascript:void(0)">+</a>
                  <p>有货</p>
                </div>
              </div>
              <div class="total_price">${item["price"]}.00</div>
              <div class="operation">
                <a href="javascript:void(0)">收藏</a>
                <a href="javascript:void(0)">删除</a>
              </div>
            </li>
          `;
          })
          .join("");
          // console.log(strlist);
        $("#cart_goodslist").html(strlist);
      }
    });

    $(window).on("scroll", function() {
      var oT = $("#cart_settlement").offset().top,
        top = $(window).scrollTop() + $(window).height();
      // console.log(oT, top);
      if (oT >= top) {
        $("#cart_settlement").css({
          width: "100%",
          position: "fixed",
          bottom: "0"
        });
      } else if (oT < top) {
        /* if ($("#cart_settlement").css('position') == 'fixed') {
          return;
        } */
        $("#cart_settlement").css({
          width: "980px",
          position: "relative"
        });
      }
    });
  });
});
