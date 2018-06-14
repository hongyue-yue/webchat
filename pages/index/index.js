//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cities: app.globalData.cities,
    index: 0,
    selected_city: app.globalData.cities[0].city ,
    salary:"",
    payment:"",
    computed:{
      CPF:"",
      Medicare:"",
      Pension:"",
      EI:"",
      Tax:"",//个税
      total:"",//税后所得
    }
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
     
  },
  getUserInfo: function(e) {
   
  },
 cityChange: function (e){
       this.setData({
         index: e.detail.value,
         selected_city: this.data.cities[e.detail.value].city
      })
  },
 bindSalaryInput: function (e){
   this.setData({
     salary: e.detail.value
   })
  },
  bindPaymentInput: function (e) {
   this.setData({
     payment: e.detail.value
   })
 }
})
