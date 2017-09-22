define([], function() {
  return function(temp, data) {
    //正则处理字符串
    temp = temp.replace(/<%=(.+?)%>/g, "`) \n print($1) \n print(`");
    temp = temp.replace(/<%(.+?)%>/g, "`) \n $1 \n print(`");
    temp = "print(`" + temp + "`)";
    //准备一段代码，动态生成一个函数，把刚才的temp代码嵌入当中
    var funcStr = `(function(data){
            var strhtml = "";
            function print(str){
                strhtml += str;
            }
            ${temp} //把temp字符串放入该函数中，形成一个完整的函数
            return strhtml;
        })`;
    //使用eval执行代码，生成并返回这个函数
    var func = eval(funcStr);
    //调用这个函数，得到最终的HTML内容
    var res = func(data);
    return res;
  };
});
