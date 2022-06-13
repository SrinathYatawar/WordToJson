const ExcelJson=require('../node_modules/convert-excel-to-json');
const JsonData=ExcelJson({

    sourceFile:'Data.xlsx',
    sheets:[{
        name:'PGEducationDetails',

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
            G:'DEGREENAME',
            H:'BRANCH',
             I:'INSTNAME',
           J:'YEARPASS',
           K:'BOARD_UNI',
            L:'MARK_CGPA',
            M:'MAXMARK_CGPA',
            N:'PERC_MARKS_CGPA',
            o:'PASSDIVID',
            P:'IPADDRESS',
            Q:'SPECIALIZATION',
           
        },

    }]

})
require('fs').writeFile('datajson/PGEducationDetails.json', JSON.stringify(JsonData), (error) => {
    if (error) {
        throw error;
    }
});

