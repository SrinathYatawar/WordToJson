var APPLICATIONDATAARRAY=require('../FilteredData/APPLICATIONIDDATA.json');
var PATENETDATA=require('../FilteredData/PATENETDATA.json');
var BOOKPUBLICATIONDATA=require('../FilteredData/BOOKPUBLICATIONDATA.json');
var ADMINISTRATIVEACTIVITIES=require('../FilteredData/ADMINISTRATIVEACTIVITIES.json');
var CONSULTANCYPROJECT=require('../FilteredData/CONSULTANCYPROJECT.json');
var CONFERENEORGANISED=require('../FilteredData/CONFERENEORGANISED.json');
var ESTABLISHMENTOFNEWLAB=require('../FilteredData/ESTABLISHMENTOFNEWLAB.json');
var FDP_STTP_STC_WORKSHOPS=require('../FilteredData/FDP_STTP_STC_WORKSHOPS.json');
var NATIONALPROGRAMORGANISED=require('../FilteredData/NATIONALPROGRAMORGANISED.json');
var OUTREACHACTIVITY=require('../FilteredData/OUTREACHACTIVITY.json');
var PERSONALDETAILS=require('../FilteredData/PERSONALDETAILS.json');
var PGDESERTATIONDETAILS=require('../FilteredData/PGDESERTATIONDETAILS.json');
var PGEDUCATIONDETAILS=require('../FilteredData/PGEDUCATIONDETAILS.json');
var PHDDETAILS=require('../FilteredData/PHDDETAILS.json');
var PHDTHESISSUPERVISED=require('../FilteredData/PHDTHESISSUPERVISED.json');
var PLACEMENTPERCENTAGE=require('../FilteredData/PLACEMENTPERCENTAGE.json');
var PRESENTEMPLOYER=require('../FilteredData/PRESENTEMPLOYER.json');
var PROFFETIONALAFFILIATION=require('../FilteredData/PROFFETIONALAFFILIATION.json');
var RESEARCHPUBLICATIONS=require('../FilteredData/RESEARCHPUBLICATIONS.json');
var SPONCEREDPROJECT=require('../FilteredData/SPONCEREDPROJECT.json');
var UGPROJECTS=require('../FilteredData/UGPROJECTS.json');
var UGEDUCATIONDETAILS=require('../FilteredData/UGEDUCATIONDETAILS.json');
var THEORYTEACHINGDETAILS=require('../FilteredData/THEORYTEACHINGDETAILS.json');
const fs = require('fs');




console.log('Finalizing Started')



var RESULTDATAARRAYFINAL=[];

for(var i=0; i<APPLICATIONDATAARRAY.length; i++){

    var APPLRESULTOBJ={
        APPLID:APPLICATIONDATAARRAY[i].APLID,
        APPlPERSONALDETAILS:null,
         QUALIFICATIONS:{
             APPLUG:{
                APPLUGEDUCATIONALDETAILS:null,
                APPLUGPROJECTDETAILS:null,
             },
             APPLPG:{
                 APPLPGEDUCATIONALDETAILS:null,
                 APPLPGDESERTATIONDETAILS:null,
             },
             APPLPHD:{
                 APPLPHDDETAILS:null,
                 APPLPHDTHESISSUPERVISEDDETAILS:null,

             },
         },
         APPLPATENETDETAILS:null,
         APPLSPONCEREDPROJECTSDETAILS:null,
         APPLCONSULTANCYPROJECTDETAILS:null,
         APPLRESEARCHPUBLICATIONSDETAILS:null,
         APPLBOOKPUBLICATIONDETAILS:null,
         APPLCONFERENEORGANISED:null,
         APPLNATIONALPROGRAMORGANISED:null,
         APPLOUTREACHACTIVITY:null,
         APPLADMINISTRATIVEACTIVITIES:null,
         APPLFDP_STTP_STC_WORKSHOPS:null,
         APPLTHEORYTEACHINGDETAILS:null,
         APPLPRESENTEMPLOYER:null,
         APPLPROFFETIONALAFFILIATION:null,
         APPLPLACEMENTPERCENTAGE:null,
         APPLESTABLISHMENTOFNEWLAB:null,
         Status:[],
         Remarks:null,
         Eligible:null,
         Marks:{
            UGMarks:null,
            PGMarks:null,
            PHDMarks:null,
            PatenetsMarks:null,
            SponsoredMarks:null,
            ConsultancyMarks:null,
            BookPubMarks:null,
            ResPubMarks:null,
            ConferenceOrgMarks:null,
            NationalProMarks:null,
            OutreachActMarks:null,
            AdmistrativeMarks:null,
            FssWorkshopMarks:null,
            TeachingMarks:null,
            ProFFesionalMarks:null,
            PlacementPercMarks:null,
            EstOfLabMarks:null
         },
    };


    for(var j=0; j<PERSONALDETAILS.length; j++){

        if(APPLICATIONDATAARRAY[i].APLID===PERSONALDETAILS[j].APLID){
               APPLRESULTOBJ.APPlPERSONALDETAILS=PERSONALDETAILS[j].APLPERSONALDETAILS[0];
        }
    }

    for(var j=0; j<PATENETDATA.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===PATENETDATA[j].APLID){
            APPLRESULTOBJ.APPLPATENETDETAILS=PATENETDATA[j].APLPATENTS;
        }
    }

    for(var j=0; j<SPONCEREDPROJECT.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===SPONCEREDPROJECT[j].APLID){
            APPLRESULTOBJ.APPLSPONCEREDPROJECTSDETAILS=SPONCEREDPROJECT[j].APLSPONCEREDPROJECT;
        }
    }

    for(var j=0; j<CONSULTANCYPROJECT.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===CONSULTANCYPROJECT[j].APLID){
            APPLRESULTOBJ.APPLCONSULTANCYPROJECTDETAILS=CONSULTANCYPROJECT[j].APLCONSULTANCYPROJECT;
        }
    }

    for(var j=0; j<RESEARCHPUBLICATIONS.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===RESEARCHPUBLICATIONS[j].APLID){
            APPLRESULTOBJ.APPLRESEARCHPUBLICATIONSDETAILS=RESEARCHPUBLICATIONS[j].APLRESEARCHPUBLICATIONS;
        }
    }
 
    for(var j=0; j<BOOKPUBLICATIONDATA.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===BOOKPUBLICATIONDATA[j].APLID){
            APPLRESULTOBJ.APPLBOOKPUBLICATIONDETAILS=BOOKPUBLICATIONDATA[j].APLBOOKPUBLICATION;
        }
    }

    for(var j=0; j<CONFERENEORGANISED.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===CONFERENEORGANISED[j].APLID){
            APPLRESULTOBJ.APPLCONFERENEORGANISED=CONFERENEORGANISED[j].APLCONFERENEORGANISED;
        }
    }

    for(var j=0; j<NATIONALPROGRAMORGANISED.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===NATIONALPROGRAMORGANISED[j].APLID){
            APPLRESULTOBJ.APPLNATIONALPROGRAMORGANISED=NATIONALPROGRAMORGANISED[j].APLNATIONALPROGRAMORGANISED;
        }
    }

    for(var j=0; j<OUTREACHACTIVITY.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===OUTREACHACTIVITY[j].APLID){
            APPLRESULTOBJ.APPLOUTREACHACTIVITY=OUTREACHACTIVITY[j].APLOUTREACHACTIVITY;
        }
    }
    for(var j=0; j<ADMINISTRATIVEACTIVITIES.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===ADMINISTRATIVEACTIVITIES[j].APLID){
            APPLRESULTOBJ.APPLADMINISTRATIVEACTIVITIES=ADMINISTRATIVEACTIVITIES[j].APLADMINISTRATIVEACTIVITIES;
        }
    }
    for(var j=0; j<FDP_STTP_STC_WORKSHOPS.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===FDP_STTP_STC_WORKSHOPS[j].APLID){
            APPLRESULTOBJ.APPLFDP_STTP_STC_WORKSHOPS=FDP_STTP_STC_WORKSHOPS[j].APLFDP_STTP_STC_WORKSHOPS;
        }
    }
    for(var j=0; j<THEORYTEACHINGDETAILS.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===THEORYTEACHINGDETAILS[j].APLID){
            APPLRESULTOBJ.APPLTHEORYTEACHINGDETAILS=THEORYTEACHINGDETAILS[j].APLTHEORYTEACHINGDETAILS;
        }
    }
    for(var j=0; j<PRESENTEMPLOYER.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===PRESENTEMPLOYER[j].APLID){
            APPLRESULTOBJ.APPLPRESENTEMPLOYER=PRESENTEMPLOYER[j].APLPRESENTEMPLOYER;
        }
    }

    for(var j=0; j<PROFFETIONALAFFILIATION.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===PROFFETIONALAFFILIATION[j].APLID){
            APPLRESULTOBJ.APPLPROFFETIONALAFFILIATION=PROFFETIONALAFFILIATION[j].APLPROFFETIONALAFFILIATION;
        }
    }
    for(var j=0; j<PLACEMENTPERCENTAGE.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===PLACEMENTPERCENTAGE[j].APLID){
            APPLRESULTOBJ.APPLPLACEMENTPERCENTAGE=PLACEMENTPERCENTAGE[j].APLPLACEMENTPERCENTAGE;
        }
    }
    for(var j=0; j<ESTABLISHMENTOFNEWLAB.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===ESTABLISHMENTOFNEWLAB[j].APLID){
            APPLRESULTOBJ.APPLESTABLISHMENTOFNEWLAB=ESTABLISHMENTOFNEWLAB[j].APLESTABLISHMENTOFNEWLAB;
        }
    }


  for(var j=0; j<UGEDUCATIONDETAILS.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===UGEDUCATIONDETAILS[j].APLID){
            APPLRESULTOBJ.QUALIFICATIONS.APPLUG.APPLUGEDUCATIONALDETAILS=UGEDUCATIONDETAILS[j].APLUGEDUCATIONDETAILS[0];
        }
    }
    for(var j=0; j<UGPROJECTS.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===UGPROJECTS[j].APLID){
            APPLRESULTOBJ.QUALIFICATIONS.APPLUG.APPLUGPROJECTDETAILS=UGPROJECTS[j].APLUGPROJECTS;
        }
    }

    for(var j=0; j<PGEDUCATIONDETAILS.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===PGEDUCATIONDETAILS[j].APLID){
            APPLRESULTOBJ.QUALIFICATIONS.APPLPG.APPLPGEDUCATIONALDETAILS=PGEDUCATIONDETAILS[j].APLPGEDUCATIONDETAILS[0];
        }
    }


    for(var j=0; j<PGDESERTATIONDETAILS.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===PGDESERTATIONDETAILS[j].APLID){
            APPLRESULTOBJ.QUALIFICATIONS.APPLPG.APPLPGDESERTATIONDETAILS=PGDESERTATIONDETAILS[j].APLPGDESERTATIONDETAILS;
        }
    }

    for(var j=0; j<PHDDETAILS.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===PHDDETAILS[j].APLID){
            APPLRESULTOBJ.QUALIFICATIONS.APPLPHD.APPLPHDDETAILS=PHDDETAILS[j].APLPHDDETAILS[0];
        }
    }


    for(var j=0; j<PHDTHESISSUPERVISED.length; j++){
        if(APPLICATIONDATAARRAY[i].APLID===PHDTHESISSUPERVISED[j].APLID){
            APPLRESULTOBJ.QUALIFICATIONS.APPLPHD.APPLPHDTHESISSUPERVISEDDETAILS=PHDTHESISSUPERVISED[j].APLPHDTHESISSUPERVISED;
        }
    }






RESULTDATAARRAYFINAL.push(APPLRESULTOBJ);


}

console.log('<==========================================FINILAZING COMPLETED AND FILE SAVING IS DONE!==================================>')

fs.writeFile('finaldata.json',JSON.stringify(RESULTDATAARRAYFINAL),function(err){
    if(err){
        throw err;
    }
})