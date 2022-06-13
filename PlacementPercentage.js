const ExcelJson=require('../node_modules/convert-excel-to-json');
const JsonData=ExcelJson({

    sourceFile:'Data.xlsx',
    sheets:[{
        name:'PlacementPercentage',

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
            G:'ACDYEAR',
            H:'STUDENTPLACE',
             I:'PLACPERCENTAGE',
           
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
require('fs').writeFile('datajson/PlacementPercentage.json', JSON.stringify(JsonData), (error) => {
    if (error) {
        throw error;
    }
});

