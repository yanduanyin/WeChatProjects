//app.js
App({
  onLaunch: function () {
  //  云开发初始化
  wx.cloud.init({
    env: "yanduanyin-fa8bq",
    traceUser: true
  })
  },
  globalData: {
    userInfo: null,
    NoUsed_data: []
  }
})