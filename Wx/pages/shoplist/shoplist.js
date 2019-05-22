// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[],
    pageIndex:0,
    pageSize:8
  },

  /**
   * 生命周期函数--监听页面加载
   */
  loadMore:function(){
    wx.request({
      url:'http://localhost:3000/products',
      data:{
        pno:++this.data.pageIndex,
        pageSize:this.data.pageSize
      },
      method:"GET",
      success:(res)=>{
        // console.log(res.data.data)
        var rows = this.data.shopList.concat(res.data.data)
        this.setData({
          shopList:rows
        })
      }
    })
  },
  onLoad: function (options) {
    this.loadMore();
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
    this.setData({
      shopList:[],
      pageIndex:0
    });
    this.loadMore();
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事
   * 件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showdetail:function(e){
    var pid = e.target.dataset.pid;
    console.log(pid)
    //方式1.关闭当前
    // wx.redirectTo({
    //   // url: '../detail/detail'
    //   url:'/page/detail/detail'
    // });

    //方式2.保留当前页面
    wx.navigateTo({
      url: '../detail/detail?pid='+pid
    });

    //方式3. 无限制,
    // wx.reLaunch({
    //   url: '../detail/detail'
    // });
  }
})