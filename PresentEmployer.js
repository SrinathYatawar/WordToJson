const ExcelJson=require('../node_modules/convert-excel-to-json');
const JsonData=ExcelJson({

    sourceFile:'Data.xlsx',
    sheets:[{
        name:'PresentEmployer',

      header:{
          rows:1,
          column:1
      },

        columnToKey:{
            A:'APLID',
            B:'APLUSERNAME',
            C:'APLNAME',
            D:'ADVTNO',
            E:'POSTNAME',
            F:'DEPTNAME',
            G:'ORGNAME',
            H:'POSTHELD',
             I:'EMPTYPE',
           J:'FROMDATE',
           K:'PAYINBAND',
            L:'AGP',
            M:'BASICPAY',
           N:'WORKNATURE',
           
        },

    }]

})
require('fs').writeFile('datajson/PresentEmployer.json', JSON.stringify(JsonData), (error) => {
    if (error) {
        throw error;
    }
});

