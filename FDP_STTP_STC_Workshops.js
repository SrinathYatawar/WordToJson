const ExcelJson=require('../node_modules/convert-excel-to-json');
const JsonData=ExcelJson({

    sourceFile:'Data.xlsx',
    sheets:[{
        name:'FDP_STTP_STC_Workshops',

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
            G:'WORK_CATEGORY',
            H:'NO_DAYS',
             I:'WORKTITLE',
           J:'FROMDATE',
           K:'TODATE',
            L:'ORGPLACE',
            M:'WSROLE',
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
require('fs').writeFile('datajson/FDP_STTP_STC_Workshops.json', JSON.stringify(JsonData), (error) => {
    if (error) {
        throw error;
    }
});

