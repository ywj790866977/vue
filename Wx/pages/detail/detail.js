// pages/detail/detail.js
Page({
  // tapHdandle:function(e){
  //   var id = e.target.dataset.index;
  //   console.log(id)
  // },
  // tapHdandle1:function(){
  //   console.log("父元素")
  // },
  // tapHdandle2:function(){
  //   console.log("阻止子元素")
  // },
  // tapHdandle3:function(){
  //   console.log("阻止父元素")
  // },
  subNum:function(){
    var n = this.data.number -1;
    if(n < 1) n=1;
    this.setData({
      number:n
    })
  },
  addNum:function(){
    var n = this.data.number +1;
    if(n>999) n=999;
    this.setData({
      number:n
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    number:1,
    imagelist:[],
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    wx.request({
      url:"http://localhost:3000/message",
      method:"GET",
      success:(res)=>{
        this.setData({
          imagelist:res.data
        })
      }
    });
    var pid = options.pid;
    wx.request({
      url:"http://localhost:3000/detail",
      data:{pid:pid},
      success:(res)=>{
        this.setData({
          info:res.data
        })
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