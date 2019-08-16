Page({
  //CRUD
  navigateToAdd: function(event) {
    //Create
    wx.navigateTo({//wx.navigateTo({})保留当前页面，跳转到应用内的某个页面
      url: '../add/add',
    })
  },
  //列表
  navigateToIndex: function() {
    //Qu
    wx.navigateTo({
      url: '../index/index',
    })
  }
})