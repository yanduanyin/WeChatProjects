// pages/circle/circle.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupon_data: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: 'key1',
      success: function(res) {
        // 异步接口在success回调才能拿到返回值
        // console.log(res.data)
        app.globalData.NoUsed_data = res.data
        // console.log(app.globalData.NoUsed_data)
        that.setData({
          coupon_data: app.globalData.NoUsed_data
        });
      },
      fail: function() {
        console.log('读取key发生错误')
      }
      
    })
    
   
  },
  // 清除本地缓存
  removeStorage: function() {
    wx.removeStorage({
      key:'key1',
      success: function(res) {
        console.log(res,'清除了本地缓存的数据')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})