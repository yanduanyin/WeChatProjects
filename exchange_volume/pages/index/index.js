const app = getApp()
const db = wx.cloud.database({})
Page ({
  data:{
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
    let that = this;
    db.collection('coupon_data').get({
      success(res) {
        // console.log(res.data)
        // console.log(that)
        that.setData({
          coupon_data: res.data
        })
      app.globalData.coupon_data = res.data
      }
    })
  }
})