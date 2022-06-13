const ExcelJson=require('../node_modules/convert-excel-to-json');
const JsonData=ExcelJson({

    sourceFile:'Data.xlsx',
    sheets:[{
        name:'SponceredProject',

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
            G:'SPTITLE',
            H:'SPAGENCY',
             I:'FROMDATE',
           J:'TODATE',
           K:'AMOUNT',
            L:'SPSTATUS',
            M:'SPROLE',
            N:'NO_COINVESTIGATORS',
         
        },

    }]

})
require('fs').writeFile('datajson/SponceredProject.json', JSON.stringify(JsonData), (error) => {
    if (error) {
        throw error;
    }
});

