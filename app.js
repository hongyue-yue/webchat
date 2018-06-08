//app.js
App({
  onLaunch: function () {
  
  },
  globalData: {
      city:{
        "杭州": { 
             "CPF": 0.12, //公积金
             "Medicare": 0.02, //医保
             "Pension":0.08, //养老保险
             "EI":0.005,//失业
        },
        "北京":{
          "CPF": 0.07, //公积金
          "Medicare": 0.02, //医保
          "Pension": 0.08, //养老保险
          "EI": 0.002,//失业
        },
        "上海":{
          "CPF": 0.07, //公积金
          "Medicare": 0.02, //医保
          "Pension": 0.08, //养老保险
          "EI": 0.01,//失业
        },
        "广州": {
          "CPF": 0.09, //公积金
          "Medicare": 0.02, //医保
          "Pension": 0.08, //养老保险
          "EI": 0.005,//失业
          },
        "深圳": {
          "CPF": 0.08, //公积金
          "Medicare": 0.02, //医保
          "Pension": 0.08, //养老保险
          "EI": 0.01,//失业
        },
      }
  }
})