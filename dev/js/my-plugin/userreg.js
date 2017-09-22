define(["jquery"], function($) {
  return {
    userReg: function() {
      const reg_username = /^[a-zA-Z_]\w{5,19}$/;
      const reg_pwd = /^[0-9a-zA-Z-_=&\$#@]{6,30}$/;

      var $username = $("#username");
      var $pwd = $("#password");
      var $reg = $("#user_register");

      $username.blur(function() {
        var ipt_username = $username.val();
        var isUsername = reg_username.test(ipt_username);
        $("#span_username").text("");
        if (!isUsername) {
          $("#span_username").text("用户名长度至少6位，且不能以数字开头！！！");
        }
      });

      $pwd.blur(function() {
        var ipt_pwd = $pwd.val();
        var isPwd = reg_pwd.test(ipt_pwd);
        $("#span_pwd").text("");
        if (!isPwd) {
          $("#span_pwd").text("请输入正确的密码！");
        }
      });
      
      $reg.click(function() {
        var ipt_username = $username.val();
        var isUsername = reg_username.test(ipt_username);
        var ipt_pwd = $pwd.val();
        var isPwd = reg_pwd.test(ipt_pwd);
        if (isUsername && isPwd) {
          $.ajax({
            type: "get",
            url: "http://datainfo.duapp.com/shopdata/userinfo.php",
            data: {
              status: "register",
              userID: ipt_username,
              password: ipt_pwd
            },
            success: function(res) {
              switch (res) {
                case "0":
                  alert("用户名重名");
                  break;
                case "1":
                  alert("注册成功");
                  break;
                case "2":
                  alert("数据库报错");
                  break;
                default:
                  break;
              }
            }
          });
        }
      });
    }
  };
});
