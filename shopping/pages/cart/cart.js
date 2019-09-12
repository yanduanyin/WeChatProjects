// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList:false,
    carts:[],
    selectAllStatus:true,
    totalPrice:''
  },
  selectList(e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    let select = `carts[${index}].selected`
    //该属性设置选项的当前状态，如果为 true，则该选项被选中。该属性的初始值来自 <option> 的 selected 属性。
    this.setData({
      [select]: !this.data.carts[index].selected
    })
    this.getTotalPrice()
  },
  getTotalPrice() {
    let carts = this.data.carts
    let total = 0
    for(let i = 0; i < carts.length;i++) {
      if(carts[i].selected) {
        total += carts[i].num * carts[i].price
      }
    }
    this.setData({
      totalPrice:total.toFixed(2)//保留两位小数
    })
  },
  selectAll() {
    console.log(213)
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    for(let i = 0;i < carts.length;i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({  //返回数据源数据
      selectAllStatus:selectAllStatus,
      carts:carts
    })
    this.getTotalPrice() 
  },
  deleteList(e) {
    const index = e.currentTarget.dataset.index
    let carts = this.data.carts
    carts.splice(index, 1)//切割数组的原生js自带方法splice()
    this.setData({
      carts:carts
    })
    if(!carts.length) {
      this.dataset({
        hasList:false
      })
    } else {
      this.getTotalPrice()
    }
  },
  addCount(e) {
    const index = e.currentTarget.dataset.index
    console.log(index)
    let carts = this.data.carts
    let num = carts[index].num
    num = num + 1
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice() 
  },
  jianCount (e) {
    const index = e.currentTarget.dataset.index
    console.log(index)
    let carts = this.data.carts  //获取列表
    let num = carts[index].num
    num -= 1
    if(num > 0) {
      carts[index].num = num
    }else if(num === 0 ){
      if(carts.length > 1) {
        carts = carts.splice(index-1, 1)
      }else {
        carts.length = 0;//删除最后一个列表
      }
    
    }
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    setTimeout(() => {
      this.setData({
        hasList:true,
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ]
      })
      this.getTotalPrice()
    }, 1000)
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