// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"小程序数据",
    app:"home",
    rows:[
      // {id:1,name:"华为"},
      // {id:2,name:"iphone xs max"}
    ],
    products:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url:"http://www.codeboy.com/admin/data/product_list.php",
    // //   method:"get",
    // //   success:(req,res)=>{

    // //   }
    // // }),
    // wx.request({
    //   url:"http://localhost:3000/prodcts",
    //   method:"GET",
    //   success: (res)=>{
    //     console.log(res.data)
    //     // this.rows = res.data
    //     this.setData({
    //       products:res.data
    //     })
    //   }
    // }),
    // wx.request({
    //   url:"http://localhost:3000/sales",
    //   method:"GET",
    //   success: (res)=>{
    //     console.log(res.data)
    //     // this.rows = res.data
    //     this.setData({
    //       rows:res.data
    //     })
    //   }
    // })
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