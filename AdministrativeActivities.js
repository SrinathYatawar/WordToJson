const ExcelJson=require('../node_modules/convert-excel-to-json');
const JsonData=ExcelJson({

    sourceFile:'Data.xlsx',
    sheets:[{
        name:'AdministrativeActivities',

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
            G:'ADMTYPE',
            H:'ORGNAME',
             I:'POSTHELD',
           J:'NO_OF_SEMISTER',
           K:'FROMDATE',
            L:'TODATE',
            M:'WORKNATURE',
           /* N:'PERC_MARKS_CGPA',
            o:'PASSDIVID',
            p:'FROMDATE',
            Q:'TODATE',
            R:'BOARDUNI_TYPE',
            S:'NIRF_RANK'
*/
        },

    }]

})
require('fs').writeFile('datajson/AdministrativeActivities.json', JSON.stringify(JsonData), (error) => {
    if (error) {
        throw error;
    }
});

