const fs = require('fs');
fs.mkdirSync('datajson');

console.log('<---------------------------------PHASE 1 START --------------------------------------------->')
var Personaldetails=require('./JSFILESOFSHEET/Personaldetails');
var OutreachActivity=require('./JSFILESOFSHEET/OutreachActivity');
var AdministrativeActivites=require('./JSFILESOFSHEET/AdministrativeActivities');
var BookPublicatino=require('./JSFILESOFSHEET/BookPublication');
var ConfereneOrganised=require('./JSFILESOFSHEET/ConfereneOrganised');
var ConsultancyProjects=require('./JSFILESOFSHEET/ConsultancyProjects');
var EstablishmentOfNewLab=require('./JSFILESOFSHEET/EstablishmentOfNewLab');
var FDP_STTP_STC_Workshops=require('./JSFILESOFSHEET/FDP_STTP_STC_Workshops');
var NationalProgramOrganised=require('./JSFILESOFSHEET/NationalProgramOrganised');
var PatenetDetails=require('./JSFILESOFSHEET/PatenetDetails');
var PGDesertationDetails=require('./JSFILESOFSHEET/PGDesertationDetails');
var PGEducationDetails=require('./JSFILESOFSHEET/PGEducationDetails');
var PHDDetails=require('./JSFILESOFSHEET/PHDDetails');
var PHDThesisSupervised=require('./JSFILESOFSHEET/PHDThesisSupervised');
var PlacementPercentage=require('./JSFILESOFSHEET/PlacementPercentage');
var PresentEmployer=require('./JSFILESOFSHEET/PresentEmployer');
var ProffetionalAffiliation=require('./JSFILESOFSHEET/ProffetionalAffiliation');
var ResearchPublications=require('./JSFILESOFSHEET/ResearchPublications');
var SponceredProject=require('./JSFILESOFSHEET/SponceredProject');
var TheoryTeachingDetails=require('./JSFILESOFSHEET/TheoryTeachingDetails');
var UGEducationDetails=require('./JSFILESOFSHEET/UGEducationDetails');
var UGProjects=require('./JSFILESOFSHEET/UGProjects');

console.log('<---------------------------------PHASE 2 START --------------------------------------------->')
setTimeout(() => {
    var FILTERER=require('./CONVERTINGFILES/AARAYDATAFILE');
    
}, 5000);
setTimeout(()=>{
    var FINALBUILDFILE=require('./CONVERTINGFILES/ARRANGINGDATA');
},10000);

console.log('FILES BUILD COMPLITED');