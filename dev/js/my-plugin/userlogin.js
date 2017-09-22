define(["jquery"], function($) {
  return {
    userLogin: function() {
      var $login = $("#index_userlogin");
      $login.click(function() {
        var $username = $("#username");
        var $pwd = $("#pwd");
        var ipt_username = $username.val();
        var ipt_pwd = $pwd.val();
        console.log(ipt_username);
        console.log(ipt_pwd);
        $.ajax({
          type: "get",
          url: "http://datainfo.duapp.com/shopdata/userinfo.php",
          data: {
            status: "login",
            userID: ipt_username,
            password: ipt_pwd
          },
          success: function(res) {
            var isSuccess = typeof JSON.parse(res) == "object";
            if (typeof JSON.parse(res) == "object") {
              alert("登录成功");
            } else if (res == "0") {
              alert("用户名不存在");
            } else if (res == "2") {
              alert("用户名密码不符");
            }
          }
        });
      });
    }
  };
});
