//global
var isDataEntered = false;
var values;
var disableCityValue = false;
var disableCharPanel = false;
var resettingCourses = false;

var topshelfmode = 0;

var missingCourses = [];

let savedata = {
    Items: {
        Drivers: {},
        Karts: {},
        Gliders: {}
    }
}

//inventory
var characterid = ["25", "26", "23", "27", "24", "6", "10", "14", "30", "31", "32", "33", "34", "35", "37", "5", "7", "9", "11", "2", "16", "22", "4", "80", "67", "3", "1", "50", "13", "17", "21", "20", "15", "70", "117", "38", "76", "107", "51", "58", "60", "59", "111", "93", "18", "57", "41", "47", "44", "43", "132", "46", "40", "19", "142", "79", "144", "120", "143", "78", "122", "161", "150", "140", "149", "153", "112", "137", "62", "82", "138", "159", "139", "169", "155", "92", "49", "85", "179", "170", "121", "12", "131", "126", "89", "115", "158", "164", "128", "127", "165", "91", "45", "145", "52", "178"];
var charrarity = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"];
var charitem = ["22", "16", "16", "16", "22", "30", "31", "30", "30", "22", "16", "15", "19", "31", "26", "12", "26", "20", "26", "25", "25", "15", "12", "22", "20", "18", "19", "33", "30", "18", "31", "31", "17", "32", "12", "21", "26", "21", "27", "22", "14", "12", "21", "35", "12", "35", "17", "31", "35", "36", "15", "36", "12", "36", "17", "20", "36", "32", "35", "15", "14", "14", "26", "14", "25", "17", "15", "20", "31", "27", "32", "26", "17", "25", "36", "15", "27", "31", "12", "25", "19", "18", "32", "35", "28", "36", "32", "36", "33", "28", "32", "12", "17", "32", "23", "28"];
var kartid = ["70048", "70015", "70038", "70081", "70043", "70122", "70053", "70141", "70131", "70173", "70060", "70037", "70117", "70035", "70051", "70125", "70146", "70027", "70024", "70065", "70029", "70085", "70119", "70040", "70028", "70039", "70110", "70130", "70020", "70151", "70137", "70074", "70194", "70200", "70108", "70186", "70023", "70206", "70077", "70058", "70116", "70121", "70032", "70124", "70082", "70101", "70182", "70009", "70208", "70011", "70118", "70092", "70030", "70094", "70061", "70120", "70098", "70123", "70099", "70128", "70109", "70016", "70147", "70097", "70143", "70155", "70158", "70104", "70148", "70159", "70105", "70160", "70161", "70172", "70187", "70178", "70171", "70189", "70201", "70202", "70204", "70163", "70203", "70041", "70205", "70192", "70176", "70169", "70222", "70227", "70224", "70226", "70230", "70234", "70235", "70251", "70162", "70249", "70250", "70252", "70256", "70259", "70013", "70127", "70129", "70062", "70188", "70210", "70207", "70193", "70228", "70229", "70113", "70236", "70240", "70247", "70241", "70245", "70248", "70219", "70243", "70244"];
var kartrarity = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
var kartitem = ["B", "C", "D", "A", "B", "B", "D", "C", "B", "A", "B", "A", "A", "E", "B", "E", "D", "B", "C", "D", "E", "E", "E", "B", "D", "B", "B", "A", "E", "B", "A", "A", "D", "C", "D", "C", "E", "A", "A", "A", "D", "D", "E", "E", "D", "E", "A", "B", "A", "C", "C", "D", "A", "C", "B", "B", "C", "C", "C", "A", "D", "E", "A", "C", "B", "D", "E", "C", "B", "A", "C", "E", "B", "D", "C", "E", "D", "C", "D", "C", "D", "E", "A", "B", "E", "B", "E", "D", "A", "C", "B", "E", "C", "E", "C", "D", "E", "E", "D", "C", "E", "D", "E", "E", "A", "D", "D", "D", "E", "C", "D", "A", "E", "D", "A", "C", "B", "A", "D", "E", "C", "B"];
var gliderid = ["30001", "30020", "30021", "30015", "30082", "30083", "30090", "30080", "30084", "30024", "30017", "30075", "30099", "30148", "30211", "30209", "30205", "30224", "30062", "30087", "30069", "30172", "30061", "30147", "30029", "30143", "30074", "30076", "30140", "30150", "30145", "30088", "30174", "30184", "30177", "30179", "30180", "30193", "30171", "30202", "30109", "30181", "30192", "30201", "30151", "30225", "30222", "30155", "30054", "30159", "30188", "30170", "30139", "30190", "30257", "30200", "30255", "30265", "30156", "30196", "30261", "30241", "30281", "30208", "30010", "30063", "30019", "30108", "30141", "30146", "30163", "30239", "30207", "30164", "30276", "30284", "30111", "30114", "30112", "30116", "30113", "30117", "30133", "30123", "30124"]
var gliderrarity = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"];
var glideritem = ["4", "6", "2", "2", "6", "1", "6", "4", "34", "3", "1", "3", "10", "24", "34", "13", "2", "2", "5", "2", "9", "9", "1", "6", "13", "24", "4", "34", "3", "4", "13", "3", "10", "2", "13", "4", "13", "5", "3", "24", "9", "1", "3", "10", "34", "1", "5", "24", "5", "34", "3", "13", "5", "4", "24", "9", "5", "10", "10", "1", "2", "10", "4", "34", "5", "9", "10", "10", "24", "13", "1", "1", "2", "6", "6", "6", "4", "3", "34", "9", "6", "34", "9", "3", "24"];

var viewshelvechar = [];

var currentmode = -1;

var dataFieldsMade = false;

var courseListMade = false;

var topShelfPreviewMade = false;

var selectedcourses = [];

changemode(0);
function changemode(mode) {
    switch (mode) {
    case 0:
        document.getElementById('intro').style.display = "block";
        document.getElementById('data').style.display = "none";
        document.getElementById('inventory').style.display = "none";
        document.getElementById('courses').style.display = "none";
        document.getElementById('missing').style.display = "none";
        document.getElementById('settings').style.display = "none";
        break;
    case 1:
        if (!dataFieldsMade) {
            makeDataFields();
            dataFieldsMade = true;
        }
        document.getElementById('intro').style.display = "none";
        document.getElementById('data').style.display = "block";
        document.getElementById('inventory').style.display = "none";
        document.getElementById('courses').style.display = "none";
        document.getElementById('missing').style.display = "none";
        document.getElementById('settings').style.display = "none";
        break;
    case 2:
        changeckg(currentmode);
        document.getElementById('intro').style.display = "none";
        document.getElementById('data').style.display = "none";
        document.getElementById('inventory').style.display = "block";
        document.getElementById('courses').style.display = "none";
        document.getElementById('missing').style.display = "none";
        document.getElementById('settings').style.display = "none";
        break;
    case 3:
        generateCourseList();
        document.getElementById('intro').style.display = "none";
        document.getElementById('data').style.display = "none";
        document.getElementById('inventory').style.display = "none";
        document.getElementById('courses').style.display = "block";
        document.getElementById('missing').style.display = "none";
        document.getElementById('settings').style.display = "none";
        if(!courseListMade){
                makeCourseList();
                courseListMade = true;
        }
        changecoursemode(0);
        break;
    case 4:
        document.getElementById('intro').style.display = "none";
        document.getElementById('data').style.display = "none";
        document.getElementById('inventory').style.display = "none";
        document.getElementById('courses').style.display = "none";
        document.getElementById('missing').style.display = "block";
        document.getElementById('settings').style.display = "none";
        break;
    case 5:
        document.getElementById('intro').style.display = "none";
        document.getElementById('data').style.display = "none";
        document.getElementById('inventory').style.display = "none";
        document.getElementById('courses').style.display = "none";
        document.getElementById('missing').style.display = "none";
        document.getElementById('settings').style.display = "block";
        break;
    }
}

function changecoursemode(mode) {
    switch (mode) {
    case 0:
        document.getElementById('selectcourses').style.display = "block";
        document.getElementById('topshelfpreview').style.display = "none";
        document.getElementById('selectedcourses').style.display = "none";
        document.getElementById('itemspecificcourses').style.display = "none";
        document.getElementById('items3barslc').style.display = "none";
        document.getElementById('items2barslc').style.display = "none";
        document.getElementById('courseitembtns').style.display = "none";
        document.getElementById('coursebtns').style.marginLeft = "524px";

        break;
    case 1:
        if(!topShelfPreviewMade || resettingCourses){
        makeTopShelfPreview();
        topShelfPreviewMade = true;
        document.getElementById('coursedriversbtn').src = "./Images/UI/invcharbtnselected.png";
        }
        document.getElementById('selectcourses').style.display = "none";
        document.getElementById('topshelfpreview').style.display = "block";
        document.getElementById('selectedcourses').style.display = "none";
        document.getElementById('itemspecificcourses').style.display = "none";
        document.getElementById('items3barslc').style.display = "none";
        document.getElementById('items2barslc').style.display = "none";
        document.getElementById('courseitembtns').style.display = "inline-block";
        document.getElementById('coursebtns').style.marginLeft = "320px";
        break;
    case 2:
        document.getElementById('selectcourses').style.display = "none";
        document.getElementById('topshelfpreview').style.display = "none";
        document.getElementById('selectedcourses').style.display = "block";
        document.getElementById('itemspecificcourses').style.display = "none";
        document.getElementById('items3barslc').style.display = "inline-block";
        document.getElementById('items2barslc').style.display = "inline-block";
        document.getElementById('courseitembtns').style.display = "none";
        document.getElementById('coursebtns').style.marginLeft = "524px";
        selectedCourses();
        break;
    case 3:
        document.getElementById('selectcourses').style.display = "none";
        document.getElementById('topshelfpreview').style.display = "none";
        document.getElementById('selectedcourses').style.display = "none";
        document.getElementById('itemspecificcourses').style.display = "block";
        document.getElementById('items3barslc').style.display = "none";
        document.getElementById('items2barslc').style.display = "none";
        document.getElementById('courseitembtns').style.display = "none";
        document.getElementById('coursebtns').style.marginLeft = "524px";
        break;
    }
}

function changeckg(mode) {
    switch (mode) {
    case 0:
        if (currentmode == 0) {
            document.getElementById('driversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('inventorychar').style.display = 'none';
            currentmode = -1;
        } else {
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('driversbtn').src = './Images/UI/invcharbtnselected.png';
            makeCharacters();
            document.getElementById('inventorychar').style.display = 'block'
            document.getElementById('inventorykart').style.display = 'none';
            document.getElementById('inventoryglider').style.display = 'none';
            currentmode = 0;
        }
        break;
    case 1:
        if (currentmode == 1) {
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('inventorykart').style.display = 'none';
            currentmode = -1;
        } else {
            document.getElementById('driversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtnselected.png';
            makeKarts();
            document.getElementById('inventorychar').style.display = 'none';
            document.getElementById('inventorykart').style.display = 'block';
            document.getElementById('inventoryglider').style.display = 'none';
            currentmode = 1;
        }
        break;
    case 2:
        if (currentmode == 2) {
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtn.png';
            document.getElementById('inventoryglider').style.display = 'none';
            currentmode = -1;
        } else {
            document.getElementById('driversbtn').src = './Images/UI/invcharbtn.png';
            document.getElementById('kartsbtn').src = './Images/UI/invkartbtn.png';
            document.getElementById('glidersbtn').src = './Images/UI/invglidebtnselected.png';
            makeGliders();
            document.getElementById('inventorychar').style.display = 'none';
            document.getElementById('inventorykart').style.display = 'none';
            document.getElementById('inventoryglider').style.display = 'block';
            currentmode = 2;
        }
        break;
    }
}

function changecourseckg(mode) {
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

function changecityvalue() {
    if (document.getElementById('changecityvalue').checked) {
        disableCityValue = true;
    } else {
        disableCityValue = false;
    }
}

function changecharpanelvalue() {
    if (document.getElementById('changecharpanelvalue').checked) {
        disableCharPanel = true;
    } else {
        disableCharPanel = false;
    }
}

function zoomLevel(zoom) {
    document.getElementById('bigbody').style.zoom = `${zoom}%`
}
