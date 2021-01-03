//tour specific
var currentTourName = "New Year's 2021 Tour";
var currentTourFileName = currentTourName.replace(/ /g, "");

//global
var currentCup = 0;
var isDataEntered = false;
var values;
var coursenames;
var courseimages;
var disableCityValue = false;
var disableCharPanel = false; //unused
var resettingCourses = false;

var isMissingCalculated = false;
var startToggle = true;
var currentspecificitem = 0;
var currentitemtype = 0;
var currentitemrarity = 0;
var currentitemitem = 0;

var topshelfmode = 0;
var missingmode = 0;
var coursesmode = 0;
var spcmode = 3;
var spcmodecalc = 4;

var missingcoursesd = [];
var missingcoursesk = [];
var missingcoursesg = [];

var missingcourses = [];

var viewshelvechar = [];

var openedCalcPanels = [];

var currentmode = -1;

var dataFieldsMade = false;

var courseListMade = false;

var topShelfPreviewMade = false;

var onlyOwnedItems = false;

var onlyOwnedItemsInv = false;

var isMultipleShelves = false;

var isInvCol = false;

var selectedcourses = [];

var removefrom2ndshelf = [];

var missingIncludesCityCourses = true;

var cityCourses = ["New_Gmob_NewYork1", "New_Gmob_NewYork1X", "New_Gmob_NewYork1R", "New_Gmob_NewYork1RX", "New_Gmob_Tokyo1", "New_Gmob_Tokyo1X", "New_Gmob_Tokyo1R", "New_Gmob_Tokyo1RX", "New_Gmob_Paris1", "New_Gmob_Paris1X", "New_Gmob_Paris1R", "New_Gmob_Paris1RX", "New_Gmob_London1", "New_Gmob_London1X", "New_Gmob_London1R", "New_Gmob_London1RX", "New_Gmob_NewYork2", "New_Gmob_NewYork2X", "New_Gmob_NewYork2R", "New_Gmob_NewYork2RX", "New_Gmob_Tokyo2", "New_Gmob_Tokyo2X", "New_Gmob_Tokyo2R", "New_Gmob_Tokyo2RX", "New_Gmob_Paris2", "New_Gmob_Paris2X", "New_Gmob_Paris2R", "New_Gmob_Paris2RX", "New_Gmob_Vancouver1", "New_Gmob_Vancouver1X", "New_Gmob_Vancouver1R", "New_Gmob_Vancouver1RX", "New_Gmob_London2", "New_Gmob_London2X", "New_Gmob_London2R", "New_Gmob_London2RX", "New_Gmob_Tokyo3", "New_Gmob_Tokyo3X", "New_Gmob_Tokyo3R", "New_Gmob_LosAngeles1", "New_Gmob_LosAngeles1X", "New_Gmob_LosAngeles1R", "New_Gmob_LosAngeles1RX", "New_Gmob_NewYork3", "New_Gmob_NewYork3X", "New_Gmob_NewYork3R", "New_Gmob_NewYork3RX"];

var disableDataUsage = false;

let savedata = {
    Items: {
        Drivers: {},
        Karts: {},
        Gliders: {}
    }
}
let settingsavedata = {
    Settings: {
        currentCup: 0,
        currentmode: 0,
        missingmode: 0,
        coursesmode: 0,
        topshelfmode: 0,
        currentspecificitem: 0,
        currentitemtype: 0,
        currentitemrarity: 0,
        currentitemitem: 0,
        isDataEntered: false,
        disableCityValue: false,
        isMultipleShelves: false,
        onlyOwnedItems: false,
        onlyOwnedItemsInv: false,
        missingIncludesCityCourses: true,
        selectedcourses: []
    }
}

var characterid = ["25", "26", "23", "27", "24", "6", "10", "14", "30", "31", "32", "33", "34", "35", "37", "5", "7", "9", "11", "2", "16", "22", "4", "80", "67", "3", "1", "50", "13", "17", "21", "20", "15", "70", "117", "38", "76", "107", "51", "58", "60", "59", "111", "93", "18", "57", "41", "47", "44", "43", "132", "46", "40", "19", "142", "79", "144", "120", "143", "78", "122", "161", "150", "140", "149", "153", "112", "137", "62", "82", "138", "159", "139", "169", "155", "92", "49", "85", "179", "170", "121", "90", "88", "42", "134", "54", "12", "131", "126", "89", "115", "158", "164", "128", "127", "165", "91", "45", "145", "52", "178","163","168","182", "186"];
var charrarity = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3","3","3","3","3","3","3","3","3","3"];
var charitem = ["22", "16", "16", "16", "22", "30", "31", "30", "30", "22", "16", "15", "19", "31", "26", "12", "26", "20", "26", "25", "25", "15", "12", "22", "20", "18", "19", "33", "30", "18", "31", "31", "17", "32", "12", "21", "26", "21", "27", "22", "14", "12", "21", "35", "12", "35", "17", "31", "35", "36", "15", "36", "12", "36", "17", "20", "36", "32", "35", "15", "14", "14", "26", "14", "25", "17", "15", "20", "31", "27", "32", "26", "17", "25", "36", "15", "27", "31", "12", "25", "19", "17", "12", "32", "27", "12", "18", "32", "35", "28", "36", "32", "36", "33", "28", "32", "12", "17", "32", "23", "28","23","36","36","17"];
var kartid = ["70048", "70015", "70038", "70081", "70043", "70122", "70053", "70141", "70131", "70173", "70060", "70037", "70117", "70035", "70051", "70125", "70146", "70027", "70024", "70065", "70029", "70085", "70119", "70040", "70028", "70039", "70110", "70130", "70020", "70151", "70137", "70074", "70194", "70200", "70108", "70186", "70023", "70206", "70268", "70269", "70077", "70058", "70116", "70121", "70032", "70124", "70082", "70101", "70182", "70009", "70208", "70011", "70118", "70092", "70030", "70094", "70061", "70120", "70098", "70123", "70099", "70128", "70109", "70016", "70147", "70097", "70143", "70155", "70158", "70104", "70148", "70159", "70105", "70160", "70161", "70172", "70187", "70178", "70171", "70189", "70201", "70202", "70204", "70163", "70203", "70041", "70205", "70192", "70176", "70169", "70222", "70227", "70224", "70226", "70230", "70234", "70235", "70251", "70162", "70249", "70250", "70252", "70256", "70259", "70054", "70261", "70262", "70267", "70106", "70270", "70197", "70215", "70013", "70127", "70129", "70062", "70188", "70210", "70207", "70193", "70228", "70229", "70113", "70236", "70240", "70247", "70241", "70245", "70248", "70219", "70243", "70244","70260","70263","70266","70271"];
var kartrarity = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3","3","3","3","3","3","3","3","3","3","3"]
var kartitem = ["B", "C", "D", "A", "B", "B", "D", "C", "B", "A", "B", "A", "A", "E", "B", "E", "D", "B", "C", "D", "E", "E", "E", "B", "D", "B", "B", "A", "E", "B", "A", "A", "D", "C", "D", "C", "E", "A", "E", "D", "A", "A", "D", "D", "E", "E", "D", "E", "A", "B", "A", "C", "C", "D", "A", "C", "B", "B", "C", "C", "C", "A", "D", "E", "A", "C", "B", "D", "E", "C", "B", "A", "C", "E", "B", "D", "C", "E", "D", "C", "D", "C", "D", "E", "A", "B", "E", "B", "E", "D", "A", "C", "B", "E", "C", "E", "C", "D", "E", "E", "D", "C", "E", "D", "A", "E", "D", "C", "B", "B", "A", "C", "E", "E", "A", "D", "D", "D", "E", "C", "D", "A", "E", "D", "A", "C", "B", "A", "D", "E", "C", "B","C","B","A","E"];
var gliderid = ["30001", "30020", "30021", "30015", "30082", "30083", "30090", "30080", "30084", "30024", "30017", "30075", "30099", "30148", "30211", "30209", "30205", "30224", "30212", "30062", "30087", "30069", "30172", "30061", "30147", "30029", "30143", "30074", "30076", "30140", "30150", "30145", "30088", "30174", "30184", "30177", "30179", "30180", "30193", "30171", "30202", "30109", "30181", "30192", "30201", "30151", "30225", "30222", "30155", "30054", "30159", "30188", "30170", "30139", "30190", "30257", "30200", "30255", "30265", "30156", "30196", "30261", "30241", "30281", "30208", "30287", "30110", "30306", "30152", "30161", "30204", "30310", "30320", "30010", "30063", "30019", "30108", "30141", "30146", "30163", "30239", "30207", "30164", "30276", "30284", "30097", "30111", "30114", "30112", "30116", "30113", "30117", "30133", "30123", "30124","30126","30129","30131"]
var gliderrarity = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3","3","3","3","3","3","3","3","3","3","3","3","3"];
var glideritem = ["4", "6", "2", "2", "6", "1", "6", "4", "34", "3", "1", "3", "10", "24", "34", "13", "2", "2", "24", "5", "2", "9", "9", "1", "6", "13", "24", "4", "34", "3", "4", "13", "3", "10", "2", "13", "4", "13", "5", "3", "24", "9", "1", "3", "10", "34", "1", "5", "24", "5", "34", "3", "13", "5", "4", "24", "9", "5", "10", "10", "1", "2", "10", "4", "34", "5", "1", "13", "9", "3", "10", "24", "13","5", "9", "10", "10", "24", "13", "1", "1", "2", "6", "6", "6", "2", "4", "3", "34", "9", "6", "34", "9", "3", "24","4","3","5"];

var inventorymodal = document.getElementById('inventorymodal');

window.onclick = function(event) {
  if (event.target == inventorymodal) {
    inventorymodal.style.display = "none";
    document.getElementById('singleinv').innerHTML = "";
  }
}

function hideModal() {
    inventorymodal.style.display = "none";
    document.getElementById('singleinv').innerHTML = "";
}

//changemode(0);
function changemode(mode) {
    switch (mode) {
    case 0:
        hideAllBesidesOne('intro');
        break;
    case 1:
        hideAllBesidesOne('data');
        break;
    case 2:
        hideAllBesidesOne('inventory');
        break;
    case 3:
        hideAllBesidesOne('courses');
        if(!courseListMade){
                makeCourseList();
                courseListMade = true;
        }
        console.log(coursesmode);
        changecoursemode(coursesmode);
        selectspecificitem();
        break;
    case 4:
        hideAllBesidesOne('bonuspoints');
        makeCalcCharacters();
        makeCalcKarts();
        makeCalcGliders();
        break;
    case 5:
        hideAllBesidesOne('settings');
        break;
    case 6:
        hideAllBesidesOne('ranked');
        getCurrentRanked();
        updateRanked();
        //alert('Ranked Review and Bonus Points Calculator - Coming Soon!');
        break;
    }
    currentCup = mode;
    settingsavedata.Settings.currentCup = mode;
    updateLocalSettingData();
}

function hideAllBesidesOne(mode){
    document.getElementById('intro').style.display = "none";
    document.getElementById('data').style.display = "none";
    document.getElementById('inventory').style.display = "none";
    document.getElementById('courses').style.display = "none";
    document.getElementById('bonuspoints').style.display = "none";
    document.getElementById('ranked').style.display = "none";
    document.getElementById('settings').style.display = "none";
    document.getElementById(mode).style.display = "block";
}

function changecoursemode(mode) {
    switch (mode) {
    case 0:
        document.getElementById('selectcourses').style.display = "block";
        document.getElementById('topshelfpreview').style.display = "none";
        document.getElementById('selectedcourses').style.display = "none";
        document.getElementById('itemspecificcourses').style.display = "none";
        document.getElementById('missingcourses').style.display = "none";
        document.getElementById('items3barslc').style.display = "none";
        document.getElementById('items2barslc').style.display = "none";
        document.getElementById('courseitembtnscourses').style.display = "none";
        document.getElementById('coursebtns').style.marginLeft = "650px";
        document.getElementById('specificitem').style.display = "none";
        document.getElementById('removeselected').style.display = "block";
        document.getElementById('courseitemspecificbtnscourses').style.display = "none";
        document.getElementById('courseitembtnsmissing').style.display = "none";
        document.getElementById('coursesoptionpanel').style.height = "110px";

        document.getElementById('courseselectbtn').src = './Images/UI/courseselectbtnselected.png';
        document.getElementById('coursetopshelfbtn').src = './Images/UI/coursetopshelfbtn.png';
        document.getElementById('courseselectedbtn').src = './Images/UI/courseselectedbtn.png';
        document.getElementById('coursedkgbtn').src = './Images/UI/coursedkgbtn.png';
        document.getElementById('coursemissingbtn').src = './Images/UI/coursemissingbtn.png';
        coursesmode = 0;
        break;
    case 1:
        /*if(!topShelfPreviewMade || resettingCourses){
        makeTopShelfPreview();
        topShelfPreviewMade = true;
        document.getElementById('coursedriversbtn').src = "./Images/UI/invcharbtnselected.png";
        }*/
        makeTopShelfPreview();
        document.getElementById('selectcourses').style.display = "none";
        document.getElementById('topshelfpreview').style.display = "block";
        document.getElementById('selectedcourses').style.display = "none";
        document.getElementById('itemspecificcourses').style.display = "none";
        document.getElementById('missingcourses').style.display = "none";
        document.getElementById('items3barslc').style.display = "none";
        document.getElementById('items2barslc').style.display = "none";
        document.getElementById('courseitembtnscourses').style.display = "inline-block";
        document.getElementById('coursebtns').style.marginLeft = "446px";
        document.getElementById('specificitem').style.display = "none";
        document.getElementById('removeselected').style.display = "none";
        document.getElementById('courseitemspecificbtnscourses').style.display = "none";
        document.getElementById('courseitembtnsmissing').style.display = "none";
        document.getElementById('coursesoptionpanel').style.height = "110px";

        document.getElementById('courseselectbtn').src = './Images/UI/courseselectbtn.png';
        document.getElementById('coursetopshelfbtn').src = './Images/UI/coursetopshelfbtnselected.png';
        document.getElementById('courseselectedbtn').src = './Images/UI/courseselectedbtn.png';
        document.getElementById('coursedkgbtn').src = './Images/UI/coursedkgbtn.png';
        document.getElementById('coursemissingbtn').src = './Images/UI/coursemissingbtn.png';
        coursesmode = 1;
        break;
    case 2:
        document.getElementById('selectcourses').style.display = "none";
        document.getElementById('topshelfpreview').style.display = "none";
        document.getElementById('selectedcourses').style.display = "block";
        document.getElementById('itemspecificcourses').style.display = "none";
        document.getElementById('missingcourses').style.display = "none";
        document.getElementById('items3barslc').style.display = "inline-block";
        document.getElementById('items2barslc').style.display = "inline-block";
        document.getElementById('courseitembtnscourses').style.display = "none";
        document.getElementById('coursebtns').style.marginLeft = "650px";
        document.getElementById('specificitem').style.display = "none";
        document.getElementById('removeselected').style.display = "block";
        document.getElementById('courseitemspecificbtnscourses').style.display = "none";
        document.getElementById('courseitembtnsmissing').style.display = "none";
        document.getElementById('coursesoptionpanel').style.height = "140px";
        selectedCourses();

        document.getElementById('courseselectbtn').src = './Images/UI/courseselectbtn.png';
        document.getElementById('coursetopshelfbtn').src = './Images/UI/coursetopshelfbtn.png';
        document.getElementById('courseselectedbtn').src = './Images/UI/courseselectedbtnselected.png';
        document.getElementById('coursedkgbtn').src = './Images/UI/coursedkgbtn.png';
        document.getElementById('coursemissingbtn').src = './Images/UI/coursemissingbtn.png';
        coursesmode = 2;
        break;
    case 3:
        selectspecificitem();
        document.getElementById('selectcourses').style.display = "none";
        document.getElementById('topshelfpreview').style.display = "none";
        document.getElementById('selectedcourses').style.display = "none";
        document.getElementById('itemspecificcourses').style.display = "block";
        document.getElementById('missingcourses').style.display = "none";
        document.getElementById('items3barslc').style.display = "inline-block";
        document.getElementById('items2barslc').style.display = "inline-block";
        document.getElementById('courseitembtnscourses').style.display = "none";
        document.getElementById('coursebtns').style.marginLeft = "650px";
        document.getElementById('specificitem').style.display = "inline";
        document.getElementById('removeselected').style.display = "block";
        if(startToggle){
        document.getElementById('courseitemspecificbtnscourses').style.display = "inline-block";
        }
        document.getElementById('courseitembtnsmissing').style.display = "none";
        document.getElementById('coursesoptionpanel').style.height = "140px";

        document.getElementById('courseselectbtn').src = './Images/UI/courseselectbtn.png';
        document.getElementById('coursetopshelfbtn').src = './Images/UI/coursetopshelfbtn.png';
        document.getElementById('courseselectedbtn').src = './Images/UI/courseselectedbtn.png';
        document.getElementById('coursedkgbtn').src = './Images/UI/coursedkgbtnselected.png';
        document.getElementById('coursemissingbtn').src = './Images/UI/coursemissingbtn.png';
        coursesmode = 3;
        break;
    case 4:
        document.getElementById('selectcourses').style.display = "none";
        document.getElementById('topshelfpreview').style.display = "none";
        document.getElementById('selectedcourses').style.display = "none";
        document.getElementById('itemspecificcourses').style.display = "none";
        document.getElementById('missingcourses').style.display = "block";
        document.getElementById('items3barslc').style.display = "inline-block";
        document.getElementById('items2barslc').style.display = "inline-block";
        document.getElementById('courseitembtnscourses').style.display = "none";
        document.getElementById('coursebtns').style.marginLeft = "650px";
        document.getElementById('specificitem').style.display = "none";
        document.getElementById('removeselected').style.display = "block";
        document.getElementById('courseitemspecificbtnscourses').style.display = "none";
        document.getElementById('courseitembtnsmissing').style.display = "inline-block";
        document.getElementById('coursesoptionpanel').style.height = "140px";
        /*if(!courseListMade){
                makeCourseList();
                courseListMade = true;
        }*/
        //changemissingckg(missingmode);
        if(isDataEntered && localStorage.getItem("MKTVSaveData") != null){
        calcMissingValues();
        missingCourses();
        }
        if(!isDataEntered && !document.getElementById('changeusedata').checked){
            alert('You need to enter your data first before this tab works! Be sure that the disable data usage is unchecked in the settings if you have entered your data.');
        }

        document.getElementById('courseselectbtn').src = './Images/UI/courseselectbtn.png';
        document.getElementById('coursetopshelfbtn').src = './Images/UI/coursetopshelfbtn.png';
        document.getElementById('courseselectedbtn').src = './Images/UI/courseselectedbtn.png';
        document.getElementById('coursedkgbtn').src = './Images/UI/coursedkgbtn.png';
        document.getElementById('coursemissingbtn').src = './Images/UI/coursemissingbtnselected.png';
        coursesmode = 4;
        break;
    }
    settingsavedata.Settings.coursesmode = coursesmode;
    updateLocalSettingData();
}

function changeckg(mode) {
    settingsavedata.Settings.currentmode = mode;
    switch (mode) {
    case 0:
        /*if (currentmode == 0) {
            document.getElementById('driversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('inventorychar').style.display = 'none';
            currentmode = -1;
        } else {*/
            document.getElementById('alldkgbtn').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('driversbtn').src = './Images/UI/invcharbtnselected.png';
            makeCharacters();
            document.getElementById('inventorychar').style.display = 'block'
            document.getElementById('inventorykart').style.display = 'none';
            document.getElementById('inventoryglider').style.display = 'none';
            currentmode = 0;
        //}
        break;
    case 1:
        /*if (currentmode == 1) {
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('inventorykart').style.display = 'none';
            currentmode = -1;
        } else {*/
            document.getElementById('alldkgbtn').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('driversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtnselected.png';
            makeKarts();
            document.getElementById('inventorychar').style.display = 'none';
            document.getElementById('inventorykart').style.display = 'block';
            document.getElementById('inventoryglider').style.display = 'none';
            currentmode = 1;
        //}
        break;
    case 2:
        /*if (currentmode == 2) {
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('inventoryglider').style.display = 'none';
            currentmode = -1;
        } else {*/
            document.getElementById('alldkgbtn').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('driversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtnselected.png';
            makeGliders();
            document.getElementById('inventorychar').style.display = 'none';
            document.getElementById('inventorykart').style.display = 'none';
            document.getElementById('inventoryglider').style.display = 'block';
            currentmode = 2;
        //}
        break;
    case 3:
        /*if (currentmode == 3) {
            document.getElementById('alldkgbtn').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('inventorychar').style.display = 'none';
            document.getElementById('inventorykart').style.display = 'none';
            document.getElementById('inventoryglider').style.display = 'none';
            currentmode = -1;
        } else {*/
            document.getElementById('alldkgbtn').src = './Images/UI/coursedkgbtnselected.png';
            document.getElementById('driversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtn.png';
            makeCharacters();
            makeKarts();
            makeGliders();
            document.getElementById('inventorychar').style.display = 'block';
            document.getElementById('inventorykart').style.display = 'block';
            document.getElementById('inventoryglider').style.display = 'block';
            currentmode = 3;
        //}
        break;
    }
    updateLocalSettingData();
}

function changedatackg(mode) {
    switch (mode) {
    case 0:
            document.getElementById('alldkgbtndata').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('kartsbtndata').src = './Images/UI/invkartbtn.png';
            document.getElementById('glidersbtndata').src = './Images/UI/invglidebtn.png';
            document.getElementById('driversbtndata').src = './Images/UI/invcharbtnselected.png';
            document.getElementById('driversdata').style.display = 'block'
            document.getElementById('kartsdata').style.display = 'none';
            document.getElementById('glidersdata').style.display = 'none';
        break;
    case 1:
            document.getElementById('alldkgbtndata').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('driversbtndata').src = './Images/UI/invcharbtn.png';
            document.getElementById('glidersbtndata').src = './Images/UI/invglidebtn.png';
            document.getElementById('kartsbtndata').src = './Images/UI/invkartbtnselected.png';
            document.getElementById('driversdata').style.display = 'none'
            document.getElementById('kartsdata').style.display = 'block';
            document.getElementById('glidersdata').style.display = 'none';
        break;
    case 2:
            document.getElementById('alldkgbtndata').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('driversbtndata').src = './Images/UI/invcharbtn.png';
            document.getElementById('kartsbtndata').src = './Images/UI/invkartbtn.png';
            document.getElementById('glidersbtndata').src = './Images/UI/invglidebtnselected.png';
            document.getElementById('driversdata').style.display = 'none'
            document.getElementById('kartsdata').style.display = 'none';
            document.getElementById('glidersdata').style.display = 'block';
        break;
    case 3:
            document.getElementById('alldkgbtndata').src = './Images/UI/coursedkgbtnselected.png';
            document.getElementById('driversbtndata').src = './Images/UI/invcharbtn.png';
            document.getElementById('kartsbtndata').src = './Images/UI/invkartbtn.png';
            document.getElementById('glidersbtndata').src = './Images/UI/invglidebtn.png';
            document.getElementById('driversdata').style.display = 'block'
            document.getElementById('kartsdata').style.display = 'block';
            document.getElementById('glidersdata').style.display = 'block';
        break;
    }
}

function changespcckg(mode){
    switch (mode) {
    case 0:
            document.getElementById('alldkgbtnspc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtnspc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtnspc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtnspc').src = './Images/UI/invglidebtn.png';
            document.getElementById('coursedriversbtnspc').src = './Images/UI/invcharbtnselected.png';
            spcmode = 0;
            specificitemcourses();
        break;
    case 1:
            document.getElementById('alldkgbtnspc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtnspc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtnspc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtnspc').src = './Images/UI/invglidebtn.png';
            document.getElementById('coursekartsbtnspc').src = './Images/UI/invkartbtnselected.png';
            spcmode = 1;
            specificitemcourses();
        break;
    case 2:
            document.getElementById('alldkgbtnspc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtnspc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtnspc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtnspc').src = './Images/UI/invglidebtn.png';
            document.getElementById('courseglidersbtnspc').src = './Images/UI/invglidebtnselected.png';
            spcmode = 2;
            specificitemcourses();
        break;
    case 3:
            document.getElementById('alldkgbtnspc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtnspc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtnspc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtnspc').src = './Images/UI/invglidebtn.png';
            document.getElementById('alldkgbtnspc').src = './Images/UI/coursedkgbtnselected.png';
            spcmode = 3;
            specificitemcourses();
        break;
    }
}

function changecalcckg(mode){
    switch (mode) {
    case 0:
            document.getElementById('alldkgbtncalc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtncalc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtncalc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtncalc').src = './Images/UI/invglidebtn.png';
            document.getElementById('coursedriversbtncalc').src = './Images/UI/invcharbtnselected.png';
            document.getElementById('nonebtn').src = './Images/UI/calcpanelbtn.png';
            spcmodecalc = 0;
            document.getElementById('choosedriver').style.display = 'block';
            document.getElementById('choosekart').style.display = 'none';
            document.getElementById('chooseglider').style.display = 'none';
        break;
    case 1:
            document.getElementById('alldkgbtncalc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtncalc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtncalc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtncalc').src = './Images/UI/invglidebtn.png';
            document.getElementById('coursekartsbtncalc').src = './Images/UI/invkartbtnselected.png';
            document.getElementById('nonebtn').src = './Images/UI/calcpanelbtn.png';
            spcmodecalc = 1;
            document.getElementById('choosedriver').style.display = 'none';
            document.getElementById('choosekart').style.display = 'block';
            document.getElementById('chooseglider').style.display = 'none';
        break;
    case 2:
            document.getElementById('alldkgbtncalc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtncalc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtncalc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtncalc').src = './Images/UI/invglidebtn.png';
            document.getElementById('courseglidersbtncalc').src = './Images/UI/invglidebtnselected.png';
            document.getElementById('nonebtn').src = './Images/UI/calcpanelbtn.png';
            spcmodecalc = 2;
            document.getElementById('choosedriver').style.display = 'none';
            document.getElementById('choosekart').style.display = 'none';
            document.getElementById('chooseglider').style.display = 'block';
        break;
    case 3:
            document.getElementById('alldkgbtncalc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtncalc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtncalc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtncalc').src = './Images/UI/invglidebtn.png';
            document.getElementById('alldkgbtncalc').src = './Images/UI/coursedkgbtnselected.png';
            document.getElementById('nonebtn').src = './Images/UI/calcpanelbtn.png';
            spcmodecalc = 3;
            document.getElementById('choosedriver').style.display = 'block';
            document.getElementById('choosekart').style.display = 'block';
            document.getElementById('chooseglider').style.display = 'block';
        break;
    
    case 4:
            document.getElementById('alldkgbtncalc').src = './Images/UI/coursedkgbtn.png';
            document.getElementById('coursedriversbtncalc').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtncalc').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtncalc').src = './Images/UI/invglidebtn.png';
            document.getElementById('nonebtn').src = './Images/UI/calcpanelbtnselected.png';
            spcmodecalc = 4;
            document.getElementById('choosedriver').style.display = 'none';
            document.getElementById('choosekart').style.display = 'none';
            document.getElementById('chooseglider').style.display = 'none';
    break;
    }
}

function changecourseckg(mode) {
    settingsavedata.Settings.topshelfmode = mode;
    switch (mode) {
    case 0:
            document.getElementById('coursedriversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('coursedriversbtn').src = './Images/UI/invcharbtnselected.png';
            topshelfmode = 0;
            resettingCourses = true;
            makeTopShelfPreview();
        break;
    case 1:
            document.getElementById('coursedriversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('coursekartsbtn').src = './Images/UI/invkartbtnselected.png';
            topshelfmode = 1;
            resettingCourses = true;
            makeTopShelfPreview();
        break;
    case 2:
            document.getElementById('coursedriversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('coursekartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('courseglidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('courseglidersbtn').src = './Images/UI/invglidebtnselected.png';
            topshelfmode = 2;
            resettingCourses = true;
            makeTopShelfPreview();
        break;
    }
    updateLocalSettingData();
}

function changemissingckg(mode) {
    settingsavedata.Settings.missingmode = mode;
    switch (mode) {
    case 0:
            document.getElementById('missingdriversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('missingkartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('missingglidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('missingdriversbtn').src = './Images/UI/invcharbtnselected.png';
            missingmode = 0;
            resettingMissing = true;
            missingCourses();
        break;
    case 1:
            document.getElementById('missingdriversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('missingkartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('missingglidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('missingkartsbtn').src = './Images/UI/invkartbtnselected.png';
            missingmode = 1;
            resettingMissing = true;
            missingCourses();
        break;
    case 2:
            document.getElementById('missingdriversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('missingkartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('missingglidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('missingglidersbtn').src = './Images/UI/invglidebtnselected.png';
            missingmode = 2;
            resettingMissing = true;
            missingCourses();
        break;
    }
    updateLocalSettingData();
}

function updatesavedata() {
    generateCourseList();
    document.getElementById('json').innerHTML = JSON.stringify(savedata, null, 2);
}

function changedebugsave() {
    if (document.getElementById('changedebugsave').checked) {
        document.getElementById('debugsave').style.display = "block";
    } else {
        document.getElementById('debugsave').style.display = "none";
    }
}

function changeusedata() {
    if (document.getElementById('changeusedata').checked) {
        isDataEntered = false;
        settingsavedata.Settings.isDataEntered = false;
    } else {
        if(localStorage.getItem("MKTVSaveData") != null){
        isDataEntered = true;
        settingsavedata.Settings.isDataEntered = true;
        }
    }
    updateLocalSettingData();
}

function changeowneditems() {
    if (document.getElementById('changeowneditems').checked) {
        onlyOwnedItems = true;
        settingsavedata.Settings.onlyOwnedItems = true;
    } else {
        onlyOwnedItems = false;
        settingsavedata.Settings.onlyOwnedItems = false;
    }
    updateLocalSettingData();
}

function changeowneditemsinv() {
    if (document.getElementById('changeowneditemsinv').checked) {
        onlyOwnedItemsInv = true;
        settingsavedata.Settings.onlyOwnedItemsInv = true;
    } else {
        onlyOwnedItemsInv = false;
        settingsavedata.Settings.onlyOwnedItemsInv = false;
    }
    changeckg(currentmode);
    updateLocalSettingData();
}

function changecityvalue() {
    if (document.getElementById('changecityvalue').checked) {
        disableCityValue = true;
        settingsavedata.Settings.disableCityValue = true;
    } else {
        disableCityValue = false;
        settingsavedata.Settings.disableCityValue = false;
    }
    updateLocalSettingData();
}

function changecharpanelvalue() {
    if (document.getElementById('changecharpanelvalue').checked) {
        disableCharPanel = true;
    } else {
        disableCharPanel = false;
    }
}

function changeinventorycol() {
    if (document.getElementById('changeuseinvcol').checked) {
        useInvCol = true;
        document.getElementById('inventorychar').style.width = "270px";
        document.getElementById('inventorykart').style.width = "270px";
        document.getElementById('inventoryglider').style.width = "270px";
        settingsavedata.Settings.useInvCol = true;
    } else {
        useInvCol = false;
        document.getElementById('inventorychar').style.width = "1020px";
        document.getElementById('inventorykart').style.width = "1020px";
        document.getElementById('inventoryglider').style.width = "1020px";
        settingsavedata.Settings.useInvCol = false;
    }
}

function changemultiplepanelvalue(){
    if (document.getElementById('changemultiplepanelvalue').checked) {
        isMultipleShelves = true;
        settingsavedata.Settings.isMultipleShelves = true;
    } else {
        isMultipleShelves = false;
        settingsavedata.Settings.isMultipleShelves = false;
    }
    updateLocalSettingData();
}

function changecitymissing(){
    if (document.getElementById('changecitymissing').checked) {
        missingIncludesCityCourses = false;
        settingsavedata.Settings.missingIncludesCityCourses = false;
    } else {
        missingIncludesCityCourses = true;
        settingsavedata.Settings.missingIncludesCityCourses = true;
    }
    updateLocalSettingData();
}

function removeselected(){
    settingsavedata.Settings.selectedcourses.forEach((t,i)=>{
    document.getElementById(`selectcourse_${t}`).className = `coursepanel`;
    document.getElementById(`coursets_${t}`).className = `coursepaneltopshelf`;
    if(values[currentspecificitem].moreGoodAt.includes(t)){
    document.getElementById(`courseslc_${t}`).className = `coursepanelslc`;
    }
    if(missingcourses.includes(t)){
    document.getElementById(`coursemissing_${t}`).className = `coursepanelslc`;
    }
    });
    delete settingsavedata.Settings.selectedcourses; 
    settingsavedata.Settings.selectedcourses = [];
    selectedcourses = settingsavedata.Settings.selectedcourses;
    updateLocalSettingData();
    makeCourseList();
    selectedCourses();
}

function updateLocalSaveData(){
    localStorage.setItem("MKTVSaveData",JSON.stringify(savedata, null, 2));
}

function updateLocalSettingData(){
    localStorage.setItem("MKTVSettingData",JSON.stringify(settingsavedata, null, 2));
}

function applyLocalSettings(){
    changecoursemode(settingsavedata.Settings.coursesmode);
    changecourseckg(settingsavedata.Settings.topshelfmode);
    if(settingsavedata.Settings.currentspecificitem != 0){
    specificchoicemade(settingsavedata.Settings.currentspecificitem,settingsavedata.Settings.currentitemtype,settingsavedata.Settings.currentitemrarity,settingsavedata.Settings.currentitemitem);
    }
    changemode(settingsavedata.Settings.currentCup);
    changeckg(settingsavedata.Settings.currentmode);
    changemissingckg(settingsavedata.Settings.missingmode);
    //disableData
    /*if (settingsavedata.Settings.isDataEntered) {
        isDataEntered = true;
    } else {
        isDataEntered = false;
        if(localStorage.getItem("MKTVSaveData") != null){
            document.getElementById('changeusedata').checked = true;
        }
    }*/
    //disableCityValue
    if (settingsavedata.Settings.disableCityValue) {
        disableCityValue = true;
        document.getElementById('changecityvalue').checked = true;
    } else {
        disableCityValue = false;
    }
    //isMultipleShelves
    if (settingsavedata.Settings.isMultipleShelves) {
        isMultipleShelves = true;
        document.getElementById('changemultiplepanelvalue').checked = true;
    } else {
        isMultipleShelves = false;
    }
    //onlyOwnedItems
    if (settingsavedata.Settings.onlyOwnedItems) {
        onlyOwnedItems = true;
        document.getElementById('changeowneditems').checked = true;
    } else {
        onlyOwnedItems = false;
    }
    //onlyOwnedItemsInv
    if (settingsavedata.Settings.onlyOwnedItemsInv) {
        onlyOwnedItemsInv = true;
        document.getElementById('changeowneditemsinv').checked = true;
    } else {
        onlyOwnedItemsInv = false;
    }
    //missingIncludesCityCourses
    if (settingsavedata.Settings.missingIncludesCityCourses) {
        missingIncludesCityCourses = true;
    } else {
        missingIncludesCityCourses = false;
        document.getElementById('changecitymissing').checked = true;
    }
    //useInvCol
    if (settingsavedata.Settings.useInvCol) {
        useInvCol = true;
        document.getElementById('changeuseinvcol').checked = true;
    } else {
        useInvCol = false;
    }
    changeinventorycol();
    //final
    selectedcourses = settingsavedata.Settings.selectedcourses;
    selectedCourses();
    missingCourses();
}

function downloadcoursejson(mode){
    generateCourseList();
    courseListMade = true;
    var data = "";
    switch(mode){
    case 0:
    data = JSON.stringify(coursedata, null, 2);
    break;
    case 1:
    data = JSON.stringify(coursedataeng, null, 2);
    break;
    case 2:
    data = JSON.stringify(values, null, 2);
    break;
    }
    var filename = "";
    switch(mode){
        case 0:
        filename = "MKTCoursesIDs" + currentTourFileName + ".json";
        break;
        case 1:
        filename = "MKTCoursesNames" + currentTourFileName + ".json";
        break;
        case 2:
        filename = "MKTValuesList" + currentTourFileName + ".json";
        break;
    }
    var type = "text";
    var a = document.createElement("a")
      , file = new Blob([data],{
        type: type
    });
    if (window.navigator.msSaveOrOpenBlob)
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
