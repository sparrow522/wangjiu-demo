require(["js/config"], function () {
  require(["jquery"], function ($) {
    $.ajax({
      type: "get",
      data: {
        userID: "liujiabin"
      },
      url: "http://datainfo.duapp.com/shopdata/getCar.php",
      success: function (res) {
        console.log(res);
      }
    });
  });
});