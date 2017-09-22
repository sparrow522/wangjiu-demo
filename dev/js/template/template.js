define([], function() {
  /*定义所有的模板*/
  return {
    temp_commentlist: `
      <% for(var i=0; i<data.length; i++) { %>
        <div class="pinglun clear">
          <div class="person_pinglun clear">
            <div class="person_left clear">
              <img src="http://img1.wangjiu.com/face/20170324/default/1490304785603922" alt="">
              <label class="level_name"><%= data[i].LEVEL_NAME %></label>
              <label class="nick_name"><%= data[i].NICKNAME %></label>
            </div>
            <div class="person_right clear">
              <div class="right_ico"></div>
              <div class="mark clear">
                <p>评分：</p>
                <em><label style="width:100%;"></label></em>
                <span><%= data[i].create_at %></span>
              </div>
              <div class="pinglun_content"><%= data[i].content %></div>
            </div>
          </div>
        </div>
      <% } %>`
  };
});
