// pages/circle/circle.js
var app = getApp();
// 定义一些用来承载不同数据的全局变量
let  coupon_data_item1= [],
    coupon_data_item2= [],
    coupon_data_item3= [],
    coupon_data_item4= [],
    coupon_data_item5= [],
    coupon_data_item6= [],
    coupon_data_item7= [],
    coupon_data_item8= []
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.coupon_data)    
    let _type,
    arr = app.globalData.coupon_data,
    Aitem1 = [],Aitem2 = [],Aitem3 = [],Aitem4 = [],
    Aitem5 = [],Aitem6 = [],Aitem7 = [],Aitem8 = [];
    arr.forEach(item => {
      // console.log(item.coupon_type)
      _type = item.coupon_type
      switch(_type){
        case '日常甜蜜' :
          Aitem1.push(item);
           break; //可选
        case '日常闹别扭' :
          Aitem2.push(item);
           break; //可选
        case '想出去走走' :
          Aitem3.push(item);
           break; //可选
        case '你我的梦' :
          Aitem4.push(item);
           break; //可选
        case '日常小活动' :
          Aitem5.push(item);
           break; //可选
        case '嘻嘻哈哈' :
          Aitem6.push(item);
           break; //可选
        case '睡个懒觉' :
          Aitem7.push(item);
           break; //可选
        default : //可选
          Aitem8.push(item);
      }
    })
    // console.log(Aitem1)
      coupon_data_item1 = Aitem1,
      coupon_data_item2 = Aitem2,
      coupon_data_item3 = Aitem3,
      coupon_data_item4 = Aitem4,
      coupon_data_item5 = Aitem5,
      coupon_data_item6 = Aitem6,
      coupon_data_item7 = Aitem7,
      coupon_data_item8 = Aitem8
  },
  clickSort (e) {
    // console.log(e)
    let index = e.currentTarget.dataset.index
    // console.log(index)
    wx.navigateTo({
      url: '../details/details?id=1',
      success: (res) => {
        // 通过eventChannel向被打开页面传送数据
        // console.log(index)
        switch(index){
          case '1' :
            res.eventChannel.emit('acceptDataFromOpenerPage', {data: coupon_data_item1})
             break; //可选
          case '2' :
            res.eventChannel.emit('acceptDataFromOpenerPage', {data: coupon_data_item2})
             break; //可选
          case '3' :
            res.eventChannel.emit('acceptDataFromOpenerPage', {data: coupon_data_item3})
             break; //可选
          case '4' :
            res.eventChannel.emit('acceptDataFromOpenerPage', {data: coupon_data_item4})
             break; //可选
          case '5' :
            res.eventChannel.emit('acceptDataFromOpenerPage', {data: coupon_data_item5})
             break; //可选
          case '6' :
            res.eventChannel.emit('acceptDataFromOpenerPage', {data: coupon_data_item6})
             break; //可选
          case '7' :
            res.eventChannel.emit('acceptDataFromOpenerPage', {data: coupon_data_item7})
             break; //可选
          default : //可选
            res.eventChannel.emit('acceptDataFromOpenerPage', {data: coupon_data_item8})
        }
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