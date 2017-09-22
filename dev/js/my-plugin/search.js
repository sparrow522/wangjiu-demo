//搜索框
define(["jquery", "jquery-ui"], function($) {
  return {
    init: function(options) {
      //输入框下拉提示插件
      $("#search").autocomplete({
        //数据源，可以是静态json数据，也可以是远程数据
        source: function(request, response) {
          //这里使用了原生的JSONP方式请求百度的suggest接口
          $.ajax({
            url: "http://suggestion.baidu.com/su",
            dataType: "jsonp",
            data: {
              wd: request.term
            },
            jsonp: "cb",
            success: function(res) {
              response(res.s);
            }
          });

          /*window.test = function(data) {
						response(data.s);
					}
					var _script = document.createElement("script");
					//request当中，只有一个term属性，代表了输入框的value值
					_script.src = "http://suggestion.baidu.com/su?wd=" + request.term + "&cb=test";
					document.body.appendChild(_script);*/
        },
        select: function(event, ui) {
          //select是列表项的选中函数，单击或回车都可以
          //event就是event，ui代表了选中的那项数据
          //item属性就是数据的value值
          //ui.item.value;
          //插件会把文字自动写入输入框, 同时允许我们做一些额外操作
          options.callback ? options.callback(ui.item.value) : "";
        }
      });
    }
  };
});
