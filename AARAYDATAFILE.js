
const fs=require('fs');
var PatenetDetails=require('../datajson/PatenetDetails.json').PatenetDetails;
var BookPublication=require('../datajson/Bookpublication.json').BookPublication;
var AdministrativeActivities=require('../datajson/AdministrativeActivities.json').AdministrativeActivities;
var ConfereneOrganised=require('../datajson/ConfereneOrganised.json').ConfereneOrganised;
var ConsultancyProject=require('../datajson/ConsultancyProjects.json').ConsultancyProjects;
var OutreachActivity=require('../datajson/OutreachActivity').OutreachActivity;
var EstablishmentOfNewLab=require('../datajson/EstablishmentOfNewLab').EstablishmentOfNewLab;
var FDP_STTP_STC_Workshops=require('../datajson/FDP_STTP_STC_Workshops').FDP_STTP_STC_Workshops;
var NationalProgramOrganised=require('../datajson/NationalProgramOrganised').NationalProgramOrganised;
var PersonalDetails=require('../datajson/PersonalDetails').PersonalDetails;
var PGDesertationDetails=require('../datajson/PGDesertationDetails').PGDesertationDetails;
var PGEducationDetails=require('../datajson/PGEducationDetails').PGEducationDetails;
var PHDDetails=require('../datajson/PHDDetails').PHDDetails;
var PHDThesisSupervised=require('../datajson/PHDThesisSupervised').PHDThesisSupervised;
var PlacementPercentage=require('../datajson/PlacementPercentage').PlacementPercentage;
var PresentEmployer=require('../datajson/PresentEmployer').PresentEmployer;
var ProffetionalAffiliation=require('../datajson/ProffetionalAffiliation').ProffetionalAffiliation;
var ResearchPublications=require('../datajson/ResearchPublications').ResearchPublications;
var SponceredProject=require('../datajson/SponceredProject').SponceredProject;
var TheoryTeachingDetails=require('../datajson/TheoryTeachingDetails').TheoryTeachingDetails;
var UGEducationDetails=require('../datajson/UGEducationDetails').UGEducationDetails;
var UGProjects=require('../datajson/UGProjects').UGProjects;

var ARRAYFILE=[];
ARRAYFILE.push(PatenetDetails);
ARRAYFILE.push(BookPublication);
ARRAYFILE.push(AdministrativeActivities);
ARRAYFILE.push(ConsultancyProject);
ARRAYFILE.push(ConfereneOrganised);
ARRAYFILE.push(EstablishmentOfNewLab);
ARRAYFILE.push(FDP_STTP_STC_Workshops);
ARRAYFILE.push(NationalProgramOrganised);
ARRAYFILE.push(OutreachActivity);
ARRAYFILE.push(PersonalDetails);
ARRAYFILE.push(PGDesertationDetails);
ARRAYFILE.push(PGEducationDetails);
ARRAYFILE.push(PHDDetails);
ARRAYFILE.push(PHDThesisSupervised);
ARRAYFILE.push(PlacementPercentage);
ARRAYFILE.push(PresentEmployer);
ARRAYFILE.push(ProffetionalAffiliation);
ARRAYFILE.push(ResearchPublications);
ARRAYFILE.push(SponceredProject);
ARRAYFILE.push(UGProjects);
ARRAYFILE.push(UGEducationDetails);
ARRAYFILE.push(TheoryTeachingDetails);

fs.mkdirSync('FilteredData');

console.log('created Filtered DataFolder')

var APLIDARRAY=[]

for(var i=0; i<PersonalDetails.length; i++){

    APLIDARRAY.push({APLID:PersonalDetails[i].APLID});

}

fs.writeFile('FilteredData/APPLICATIONIDDATA.json',JSON.stringify(APLIDARRAY),function(err){
    if(err){
        throw err;
    }
})



for(var k=0; k<ARRAYFILE.length; k++){
 
    
var i=0;j=0;
var DataIndex=[];
while(i<ARRAYFILE[k].length&&j<ARRAYFILE[k].length){
    if(ARRAYFILE[k][i].APLID===ARRAYFILE[k][j].APLID){
             j++;
    }
    else{
        var obj={
            I:i,
            J:j
        }

        DataIndex.push(obj);
       
        i=j;
    }
}
DataIndex.push({I:i,J:j});


var NAMECATCH;
if(k===0){
    NAMECATCH='PATENETDATA'
}
if(k===1){
    NAMECATCH='BOOKPUBLICATIONDATA'
}

if(k===2){
NAMECATCH='ADMINISTRATIVEACTIVITIES'
}

if(k===3){
    NAMECATCH='CONSULTANCYPROJECT'
}

if(k===4){
    NAMECATCH='CONFERENEORGANISED'
}

if(k===5){
    NAMECATCH='ESTABLISHMENTOFNEWLAB'
}

if(k===6){
    NAMECATCH='FDP_STTP_STC_WORKSHOPS'
}

if(k===7){
    NAMECATCH='NATIONALPROGRAMORGANISED'
}

if(k===8){
    NAMECATCH='OUTREACHACTIVITY'
}

if(k===9){
    NAMECATCH='PERSONALDETAILS';
}

if(k===10){
    NAMECATCH='PGDESERTATIONDETAILS'
}

if(k===11){
    NAMECATCH='PGEDUCATIONDETAILS'
}

if(k===12){
    NAMECATCH='PHDDETAILS'
}

if(k===13){
    NAMECATCH='PHDTHESISSUPERVISED'
}

if(k===14){
    NAMECATCH='PLACEMENTPERCENTAGE'
}

if(k===15){
    NAMECATCH='PRESENTEMPLOYER'
}

if(k===16){
    NAMECATCH='PROFFETIONALAFFILIATION'
}

if(k===17){
    NAMECATCH='RESEARCHPUBLICATIONS'
}

if(k===18){
    NAMECATCH='SPONCEREDPROJECT'
}

if(k===19){
    NAMECATCH='UGPROJECTS'
}

if(k===20){
    NAMECATCH='UGEDUCATIONDETAILS'
}

if(k===21){
    NAMECATCH='THEORYTEACHINGDETAILS'
}


var DATAARRAY=[];

var X=0

while(X<DataIndex.length){
var obj=DataIndex[X];
var Data=[];
for(var i=obj.I; i<obj.J; i++){
  /*  if(ARRAYFILE[k][i].DATEAWARD||ARRAYFILE[k][i].FROMDATE||ARRAYFILE[k][i].TODATE||ARRAYFILE[k][i].BIRTHDATE){
        const D=new Date(PatenetDetails[i].DATEAWARD);
        PatenetDetails[i].DATEAWARD=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
    }*/

    if(k===0){
        const D=new Date(ARRAYFILE[k][i].DATEAWARD);
        ARRAYFILE[k][i].DATEAWARD=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
        const Obj={
            Marks:null,
        }
        ARRAYFILE[k][i]={
            ...ARRAYFILE[k][i],
            ...Obj,
        }
    }
    if(k===2){
        const D=new Date(ARRAYFILE[k][i].FROMDATE);
        ARRAYFILE[k][i].FROMDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
        const E=new Date(ARRAYFILE[k][i].TODATE);
        ARRAYFILE[k][i].TODATE=(E.getDate()+'/'+(E.getMonth()+1)+'/'+E.getFullYear());  
    }
    
    if(k===3){
        const D=new Date(ARRAYFILE[k][i].FROMDATE);
        ARRAYFILE[k][i].FROMDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
        const E=new Date(ARRAYFILE[k][i].TODATE);
        ARRAYFILE[k][i].TODATE=(E.getDate()+'/'+(E.getMonth()+1)+'/'+E.getFullYear());  
    }
    
    if(k===4){
        const D=new Date(ARRAYFILE[k][i].FROMDATE);
        ARRAYFILE[k][i].FROMDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
        const E=new Date(ARRAYFILE[k][i].TODATE);
        ARRAYFILE[k][i].TODATE=(E.getDate()+'/'+(E.getMonth()+1)+'/'+E.getFullYear());  
    }
    
    if(k===6){
        const D=new Date(ARRAYFILE[k][i].FROMDATE);
        ARRAYFILE[k][i].FROMDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
        const E=new Date(ARRAYFILE[k][i].TODATE);
        ARRAYFILE[k][i].TODATE=(E.getDate()+'/'+(E.getMonth()+1)+'/'+E.getFullYear());  
    }
    
    if(k===7){
        const D=new Date(ARRAYFILE[k][i].FROMDATE);
        ARRAYFILE[k][i].FROMDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
        const E=new Date(ARRAYFILE[k][i].TODATE);
        ARRAYFILE[k][i].TODATE=(E.getDate()+'/'+(E.getMonth()+1)+'/'+E.getFullYear());  
    }
    
    if(k===9){
        const D=new Date(ARRAYFILE[k][i].BIRTHDATE);
        ARRAYFILE[k][i].BIRTHDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());

        
        var Case1="Assistant Professor(G-II) L10"
        var Case2="Assistant Professor(G-II) L11 For Internal Candidate Only"
        var Case3="Assistant Professor(G-II) L11 For External Candidate Only"
        var Case4="Associate Professor for External Candidate Only"
        var Case5="Assistant Professor(G-I) For External Candidate Only"
        var Case6="Assistant Professor(G-I) For Internal Candidate Only"
        var Case7="Professor For Internal Candidate Only"
        var Case8="Professor For External Candidate Only"
        var Case9="Associate Professor for Internal Candidate Only"


        if(ARRAYFILE[k][i].POSTNAME===Case1){

        ARRAYFILE[k][i].POSTNAME="Assistant Professor";
        const Obj={
            Level:"L10",
        }
        ARRAYFILE[k][i]={
            ...ARRAYFILE[k][i],
            ...Obj,
        }
        }

        if((ARRAYFILE[k][i].POSTNAME===Case2)||(ARRAYFILE[k][i].POSTNAME===Case3)){

            ARRAYFILE[k][i].POSTNAME="Assistant Professor";
            const Obj={
                Level:"L11",
            }
            ARRAYFILE[k][i]={
                ...ARRAYFILE[k][i],
                ...Obj,
            }
            }

    if((ARRAYFILE[k][i].POSTNAME===Case5)||(ARRAYFILE[k][i].POSTNAME===Case6)){

            ARRAYFILE[k][i].POSTNAME="Assistant Professor";
            const Obj={
                Level:"L12",
            }
            ARRAYFILE[k][i]={
                ...ARRAYFILE[k][i],
                ...Obj,
            }
            }  

            if((ARRAYFILE[k][i].POSTNAME===Case7)||(ARRAYFILE[k][i].POSTNAME===Case8)){

                ARRAYFILE[k][i].POSTNAME="Professor";
               
                } 
                
                if((ARRAYFILE[k][i].POSTNAME===Case4)||(ARRAYFILE[k][i].POSTNAME===Case9)){

                    ARRAYFILE[k][i].POSTNAME="Associate Professor";
                   
                    } 




    }
    
    if(k===12){
        const D=new Date(ARRAYFILE[k][i].AWARDDATE);
        ARRAYFILE[k][i].AWARDDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
    }
    
    if(k===13){
        const D=new Date(ARRAYFILE[k][i].THESISDATE);
        ARRAYFILE[k][i].THESISDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
    }
    
    if(k===15){
        const D=new Date(ARRAYFILE[k][i].FROMDATE);
        ARRAYFILE[k][i].FROMDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
    }
    
    if(k===18){
        const D=new Date(ARRAYFILE[k][i].FROMDATE);
        ARRAYFILE[k][i].FROMDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
        const E=new Date(ARRAYFILE[k][i].TODATE);
        ARRAYFILE[k][i].TODATE=(E.getDate()+'/'+(E.getMonth()+1)+'/'+E.getFullYear());  
    }
    
    
    if(k===20){
        const D=new Date(ARRAYFILE[k][i].FROMDATE);
        ARRAYFILE[k][i].FROMDATE=(D.getDate()+'/'+(D.getMonth()+1)+'/'+D.getFullYear());
        const E=new Date(ARRAYFILE[k][i].TODATE);
        ARRAYFILE[k][i].TODATE=(E.getDate()+'/'+(E.getMonth()+1)+'/'+E.getFullYear());   
    }






Data.push(ARRAYFILE[k][i]);
//console.log(PATENTSDETAILS[i]);
}
if(k===0){
    
var Obj2={
    APLID: ARRAYFILE[k][obj.I].APLID,
    APLPATENTS:Data
}
}
if(k===1){
    
    var Obj2={
        APLID: ARRAYFILE[k][obj.I].APLID,
        APLBOOKPUBLICATION:Data
    }
    }
    if(k===2){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLADMINISTRATIVEACTIVITIES:Data
        }
    }

    if(k===3){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLCONSULTANCYPROJECT:Data
        }
    }
    if(k===4){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLCONFERENEORGANISED:Data
        }
    }
    if(k===5){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLESTABLISHMENTOFNEWLAB:Data
        }
    }
    if(k===6){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLFDP_STTP_STC_WORKSHOPS:Data
        }
    }
    if(k===7){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLNATIONALPROGRAMORGANISED:Data
        }
    }
    if(k===8){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLOUTREACHACTIVITY:Data
        }
    }
    if(k===9){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLPERSONALDETAILS:Data
        }
    }
    if(k===10){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLPGDESERTATIONDETAILS:Data
        }
    }
    if(k===11){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLPGEDUCATIONDETAILS:Data
        }
    }
    if(k===12){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLPHDDETAILS:Data
        }
    }
    if(k===13){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLPHDTHESISSUPERVISED:Data
        }
    }
    if(k===14){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLPLACEMENTPERCENTAGE:Data
        }
    }
    if(k===15){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLPRESENTEMPLOYER:Data
        }
    }
    if(k===16){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLPROFFETIONALAFFILIATION:Data
        }
    }
    if(k===17){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLRESEARCHPUBLICATIONS:Data
        }
    }
    if(k===18){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLSPONCEREDPROJECT:Data
        }
    }
    if(k===19){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLUGPROJECTS:Data
        }
    }
    if(k===20){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLUGEDUCATIONDETAILS:Data
        }
    }
    if(k===21){
    
        var Obj2={
            APLID: ARRAYFILE[k][obj.I].APLID,
            APLTHEORYTEACHINGDETAILS:Data
        }
    }

DATAARRAY.push(Obj2);
X++;
}
console.log('created '+`${NAMECATCH}`+' File Succesfully');

fs.writeFile('FilteredData/'+`${NAMECATCH}`+'.json',JSON.stringify(DATAARRAY),function(err){
    if(err){
        throw err;
    }
})
}
console.log('<=================================================Created All Files===============================================>')