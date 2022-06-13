const ExcelJson=require('../node_modules/convert-excel-to-json');
const JsonData=ExcelJson({

    sourceFile:'Data.xlsx',
    sheets:[{
        name:'ResearchPublications',

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
            G:'RESTYPE',
            H:'RESCAT',
             I:'PAPERTITLE',
           J:'JOURNALNAME',
           K:'RESEARCHPLACE',
            L:'RESEARCHYEAR',
            M:'VOLUME',
           N:'RESEARCHSTATUS',
            o:'RPROLE',
            P:'NOAUTHOR',
           
        },

    }]

})
require('fs').writeFile('datajson/ResearchPublications.json', JSON.stringify(JsonData), (error) => {
    if (error) {
        throw error;
    }
});

