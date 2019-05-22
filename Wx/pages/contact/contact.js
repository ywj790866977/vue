// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  submitHandle:function(e){
    var uname = e.detail.value.uname;
    var upwd  = e.detail.value.upwd
    // console.log(uname+":"+upwd)
    var reg = /^[a-z0-9]{3,12}$/i;
    if(!reg.test(uname)){
      wx.showToast({
        title: '用户名不能为空',
        icon: 'loading',
        // image: '',
        duration: 1500,
        mask: false
      });
      setTimeout(()=>{
        wx.hideToast();
      },3000)
      return;
    }
    //验证通过
    console.log(uname)
    wx.request({
      url: 'http://localhost:3000/addUser',
      data: {uname:uname,upwd:upwd},
      method: 'POST',
      success: (res) => {
        console.log(res.data)
      }
    });
  },
  data: {

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