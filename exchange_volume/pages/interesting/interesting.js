const app = getApp()
// const coupon_data = db.collection('coupon_data')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    coupon_data: [],
    imgUrls:[
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:800
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.coupon_data)
    this.setData({
      coupon_data: app.globalData.coupon_data
    });
  }
})