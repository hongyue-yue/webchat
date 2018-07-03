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
      CPF: "",//公积金
      Medicare: "",//医保
      Pension: "",//养老保险
      EI: "",//失业
      Tax:"",//个税
      total:"",//税后所得
    }
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
 },
 computed:function(e){
     let standard = this.data.cities[this.data.index]
     let salary = this.data.salary  //税前工资
     let payment = this.data.payment  //社保缴纳基准
     let sum = payment * standard.CPF + payment * standard.Medicare + payment * standard.Pension + payment * standard.EI //社保缴纳总和
     let computed = salary - sum-3500   //个税计算基准
     let Tax
     if (computed<=1500){
       Tax = computed*0.03
     } else if (1500 < computed && computed<=4500){
       Tax = computed * 0.1-105
     } else if (4500 < computed && computed <= 9000){
       Tax = computed * 0.2 - 555
     } else if (9000 < computed && computed<= 35000){
       Tax = computed * 0.25 - 1005
     } else if (35000 < computed && computed<= 55000){
       Tax = computed * 0.3 - 2755
     } else if (55000 < computed && computed<= 80000){
       Tax = computed * 0.35 - 5505
     } else if (computed > 80000){
       Tax = computed * 0.45 - 13505
     }
     this.setData({
       computed: {
         CPF: payment * standard.CPF,
         Medicare: payment * standard.Medicare,
         Pension: payment * standard.Pension,
         EI: payment * standard.EI,
         Tax: Tax.toFixed(2),
         total: salary - sum - Tax
       }
     })
 }
})
