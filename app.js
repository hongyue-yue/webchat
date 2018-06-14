//app.js
App({
  onLaunch: function () {
  
  },
  globalData: {
      cities:[
         { 
             "city":"杭州",
             "CPF": 0.12, //公积金
             "Medicare": 0.02, //医保
             "Pension":0.08, //养老保险
             "EI":0.005,//失业
        },
        {
          "city":"北京",
          "CPF": 0.07, //公积金
          "Medicare": 0.02, //医保
          "Pension": 0.08, //养老保险
          "EI": 0.002,//失业
        },
        {
          "city": "上海",
          "CPF": 0.07, //公积金
          "Medicare": 0.02, //医保
          "Pension": 0.08, //养老保险
          "EI": 0.01,//失业
        },
        {
          "city": "广州",
          "CPF": 0.09, //公积金
          "Medicare": 0.02, //医保
          "Pension": 0.08, //养老保险
          "EI": 0.005,//失业
          },
          {
          "city": "深圳",
          "CPF": 0.08, //公积金
          "Medicare": 0.02, //医保
          "Pension": 0.08, //养老保险
          "EI": 0.01,//失业
        },
      ]
  }
})