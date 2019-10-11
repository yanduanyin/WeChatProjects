// pages/details/details.js
let ls_coupon_data_item
var app = getApp();

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    coupon_data_item: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    let eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      // console.log(data)
      ls_coupon_data_item = data
    })
    // console.log(ls_coupon_data_item.data) 
    this.setData({
      coupon_data_item: ls_coupon_data_item.data
    })
  },
  // 点击购买传递数据到我的兑换卷页面去
  clickBuy (e) {
    let index =  e.target.dataset.index
    // console.log(index)
    // console.log(this.coupon_data_item) // undefined
    console.log(ls_coupon_data_item.data[index - 1]);
    // console.log(app.globalData.NoUsed_data)
    let ls_NoUsed_data = app.globalData.NoUsed_data
    console.log(ls_NoUsed_data, '获取上一次本地缓存给全局变量globalData的数据')
    ls_NoUsed_data.forEach(item => {
      if (item.title === ls_coupon_data_item.data[index - 1].title) {
        wx.showModal({
          title: '提示',
          content: '您已经购买同样的卷了',
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              return
            } else if (res.cancel) {
              console.log('用户点击取消')
              return
            }
          }
        })
      } else {
        console.log('2')
      }
    })  
    wx.setStorage({
      key:"key1",
      data: [...ls_NoUsed_data, ls_coupon_data_item.data[index - 1]]
    })
    wx.getStorage({
      key:"key1",
      success: function(res) {
        console.log(res.data,'将点击的列表数据传到了本地缓存并打印出来本地缓存的数据')
        app.globalData.NoUsed_data = res.data
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