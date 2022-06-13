const ExcelJson=require('../node_modules/convert-excel-to-json');
const JsonData=ExcelJson({

    sourceFile:'Data.xlsx',
    sheets:[{
        name:'PersonalDetails',

      header:{
          rows:1,
          column:1
      },

        columnToKey:{
            A:'APLID',
            B:'APLNAME',
            C:'FATHERNAME',
            D:'APLUSERNAME',
            E:'POSTNAME',
            F:'DEPTNAME',
            G:'ADVTNO',
            H:'GENDER',
             I:'CATEGORY',
           J:'APLEMAIL',
           K:'APLMOBILE',
            L:'BIRTHDATE',
            M:'SPECDETAILS',
            N:'STATENAME',
            o:'PERMADDRESS',
            p:'CORRADDRESS',
            Q:'ADHARNO',
            R:'PANNO',
            S:'AGE',

        },

    }]

})
require('fs').writeFile('datajson/PersonalDetails.json', JSON.stringify(JsonData), (error) => {
    if (error) {
        throw error;
    }
});

