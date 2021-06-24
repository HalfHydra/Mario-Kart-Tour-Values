var season = {};
var seasonbonus_course2 = [77,70100,30365];
var seasonbonus_course3 = [46,189,70222,70296,30150,30188];
var cupBonus = {"LuigiCup":4,"ChoropooCup":93,"RosettaCup":22,"IggyCup":30,"MarioCup":5,"BbLuigiCup":24,"FunkyKongCup":128,"KinopioCup":2,"LudwigCup":33,"MetalPeachCup":19,"BrosFireCup":59,"MarioIceCup":161}

let courseSaveDefault = {
    driver: -1,
    kart: -1,
    glider: -1,
    score: 0,
    frenzy1: "00",
    frenzy2: "00",
    frenzy3: "00",
    coinboxCount: 0,
    actionCount: 0,
    placement: 1,
    completed: false
}

function changeTabTour(tour) {
    document.getElementById('cupselect').style.display = "none";
    document.getElementById('summary').style.display = "none";
    document.getElementById('text_cupselect').style.color = "white";
    document.getElementById('text_summary').style.color = "white";
    document.getElementById(tour).style.display = "block";
    document.getElementById(`text_${tour}`).style.color = "springgreen";
}

//Savedata
function loadSaveData() {
    prepareSave();
    makeCups();
    makeSummaryCharacters();
    makeSummaryKarts();
    makeSummaryGliders();
    makeSummaryItems();
    makeSummary();
}

function prepareSave() {
    if (savedata.Seasons == null) {
        savedata.Seasons = {};
    }

    let tour_courses = [];

    Object.keys(season).forEach((t, i) => {
        season[t].courses.forEach((course, i) => {
            tour_courses.push(course);
        });
    });

    tour_courses.reverse();

    if (savedata.Seasons[currentTourId] == undefined) {
    savedata.Seasons[currentTourId] = {};
    for (let i = 0; i < 12; i++) {
        savedata.Seasons[currentTourId][`Cup_${i}`] = {};
        savedata.Seasons[currentTourId][`Cup_${i}`][tour_courses.pop()] = {...courseSaveDefault};
        savedata.Seasons[currentTourId][`Cup_${i}`][tour_courses.pop()] = {...courseSaveDefault};
        savedata.Seasons[currentTourId][`Cup_${i}`][tour_courses.pop()] = {...courseSaveDefault};
    }
    }
    updateLocalSaveData();
}

//Summary
function makeSummary() {
    let tour_courses = [];

    Object.keys(season).forEach((t, i) => {
        season[t].courses.forEach((course, i) => {
            tour_courses.push(course);
        });
    });

    document.getElementById('summary').innerHTML = "";

    let summaryout = document.getElementById('summary');

    let headerimg = document.createElement('img');
    headerimg.src = "./Images/UI/Tour/header.png";
    headerimg.className = `tour_summary_headerimg`;
    summaryout.appendChild(headerimg);

    tour_courses.forEach((course, i) => {
        let currentCup = Math.floor(i/3);

        let summary_panel = document.createElement('div');
        summary_panel.id = `tour_summary_panel${i}`;
        summary_panel.className = "tour_summary_panel";
        summaryout.appendChild(summary_panel);

        let summary_coursepanel = document.createElement('div');
        summary_coursepanel.className = "tour_summary_coursepanel";
        summary_panel.appendChild(summary_coursepanel);

        let summary_courseimg = document.createElement('img');
        summary_courseimg.src = `./Images/Tour/Season54/${i}.png`;
        summary_courseimg.className = `tour_summary_courseimg`;
        summary_coursepanel.appendChild(summary_courseimg);

        let summary_coursetxt = document.createElement('p');
        summary_coursetxt.innerHTML = coursenames[course];
        summary_coursetxt.className = `tour_summary_coursetxt`;
        summary_coursepanel.appendChild(summary_coursetxt);

        let summary_driverdiv = document.createElement('div');
        summary_driverdiv.id = `tour_summary_driverdiv${i}`
        summary_driverdiv.className = `tour_summary_driverdiv`;
        summary_panel.appendChild(summary_driverdiv);

        let currentDriverId = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].driver;
        generateDriver(currentDriverId, i, currentCup, course);

        let summary_kartdiv = document.createElement('div');
        summary_kartdiv.id = `tour_summary_kartdiv${i}`
        summary_kartdiv.className = `tour_summary_kartdiv`;
        summary_panel.appendChild(summary_kartdiv);

        let currentKartId = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].kart;
        generateKart(currentKartId, i, currentCup, course);

        let summary_gliderdiv = document.createElement('div');
        summary_gliderdiv.id = `tour_summary_gliderdiv${i}`;
        summary_gliderdiv.className = `tour_summary_gliderdiv`;
        summary_panel.appendChild(summary_gliderdiv);

        let currentGliderId = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].glider;
        generateGlider(currentGliderId, i, currentCup, course);

        let summary_frenzy1div = document.createElement('div');
        summary_frenzy1div.id = `tour_summary_item1div${i}`;
        summary_frenzy1div.className = `tour_summary_frenzy1div`;
        summary_panel.appendChild(summary_frenzy1div);
        let current_frenzy1 = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].frenzy1;
        generateItem(current_frenzy1, i, currentCup, course, 1);

        let summary_frenzy2div = document.createElement('div');
        summary_frenzy2div.id = `tour_summary_item2div${i}`;
        summary_frenzy2div.className = `tour_summary_frenzy2div`;
        summary_panel.appendChild(summary_frenzy2div);
        let current_frenzy2 = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].frenzy2;
        generateItem(current_frenzy2, i, currentCup, course, 2);

        let summary_frenzy3div = document.createElement('div');
        summary_frenzy3div.id = `tour_summary_item3div${i}`;
        summary_frenzy3div.className = `tour_summary_frenzy3div`;
        summary_panel.appendChild(summary_frenzy3div);
        let current_frenzy3 = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].frenzy3;
        generateItem(current_frenzy3, i, currentCup, course, 3);

        let summary_scorediv = document.createElement('div');
        summary_scorediv.className = `tour_summary_scorediv`;
        summary_scorediv.id = `tour_summary_scorediv${i}`;
        summary_panel.appendChild(summary_scorediv);

        let summary_scoretxtdiv = document.createElement('div');
        summary_scoretxtdiv.id = `tour_summary_scoretxtdiv${i}`;
        summary_scoretxtdiv.className = `tour_summary_scoretxtdiv`;
        summary_scorediv.appendChild(summary_scoretxtdiv);

        let current_score = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].score;
        updateScore(current_score, i, currentCup, course);

        let summary_scoretxtin = document.createElement('input');
        summary_scoretxtin.id = `tour_summary_scoretxtin${i}`;
        summary_scoretxtin.className = `tour_summary_scoretxtin`;
        summary_scoretxtin.type = `number`;
        summary_scoretxtin.addEventListener('input', function() {
            updateScore(this.value, i, currentCup, course);
        });
        summary_scorediv.appendChild(summary_scoretxtin);

        let summary_cbcdiv = document.createElement('div');
        summary_cbcdiv.className = `tour_summary_cbcdiv`;
        summary_cbcdiv.id = `tour_summary_cbcdiv${i}`;
        summary_panel.appendChild(summary_cbcdiv);

        let summary_cbcimg = document.createElement('img');
        summary_cbcimg.id = `tour_summary_cbcimg`;
        summary_cbcimg.className = `tour_summary_cbcimg`;
        summary_cbcimg.src = `./Images/UI/Tour/option4.png`;
        summary_cbcdiv.appendChild(summary_cbcimg);

        let current_cbc = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].coinboxCount;

        let summary_cbcin = document.createElement('input');
        summary_cbcin.id = `tour_summary_cbcin${i}`;
        summary_cbcin.className = `tour_summary_cbcin`;
        summary_cbcin.type = `number`;
        summary_cbcin.addEventListener('input', function() {
            updateCoinbox(this.value, i, currentCup, course);
        });
        summary_cbcdiv.appendChild(summary_cbcin);
        updateCoinbox(current_cbc, i, currentCup, course);

        let summary_accdiv = document.createElement('div');
        summary_accdiv.className = `tour_summary_accdiv`;
        summary_accdiv.id = `tour_summary_accdiv${i}`;
        summary_panel.appendChild(summary_accdiv);

        let summary_accimg = document.createElement('img');
        summary_accimg.id = `tour_summary_accimg`;
        summary_accimg.className = `tour_summary_accimg`;
        summary_accimg.src = `./Images/UI/Tour/actions1.png`;
        summary_accdiv.appendChild(summary_accimg);

        let current_acc = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].actionCount;

        let summary_accin = document.createElement('input');
        summary_accin.id = `tour_summary_accin${i}`;
        summary_accin.className = `tour_summary_accin`;
        summary_accin.type = `number`;
        summary_accin.addEventListener('input', function() {
            updateActions(this.value, i, currentCup, course);
        });
        summary_accdiv.appendChild(summary_accin);
        updateActions(current_acc, i, currentCup, course);

        let summary_pcdiv = document.createElement('div');
        summary_pcdiv.className = `tour_summary_pcdiv`;
        summary_pcdiv.id = `tour_summary_pcdiv${i}`;
        summary_panel.appendChild(summary_pcdiv);

        let summary_pcimg = document.createElement('img');
        summary_pcimg.id = `tour_summary_pcimg${i}`;
        summary_pcimg.className = `tour_summary_pcimg`;
        summary_pcimg.src = `./Images/UI/Placement/1.png`;
        summary_pcdiv.appendChild(summary_pcimg);

        let current_pc = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].placement;

        let summary_pcin = document.createElement('input');
        summary_pcin.id = `tour_summary_pcin${i}`;
        summary_pcin.className = `tour_summary_pcin`;
        summary_pcin.type = `number`;
        summary_pcin.addEventListener('input', function() {
            updatePlacement(this.value, i, currentCup, course);
        });
        summary_pcdiv.appendChild(summary_pcin);
        updatePlacement(current_pc, i, currentCup, course);


        let summary_completedin = document.createElement('input');
        summary_completedin.id = `tour_summary_completedin${i}`;
        summary_completedin.className = `tour_summary_completedin`;
        summary_completedin.type = `checkbox`;
        summary_completedin.addEventListener('input', function() {
            updateCompleted(this.checked, i, currentCup, course);
        });
        summary_panel.appendChild(summary_completedin);
        let current_completed = savedata.Seasons[currentTourId][`Cup_${currentCup}`][course].completed;
        updateCompleted(current_completed, i, currentCup, course);

        let label = document.createElement('label')
        label.for = `tour_summary_completedin${i}`;
        label.className = `tour_summary_labelin`;
        label.innerHTML = "Completed?";
        summary_panel.appendChild(label);
    });
}

let currentSummaryCup = 0;
let currentSummaryCourse = ``;
let currentSummaryIndex = 0;
let currentSummaryIIndex = `00`;
let currentScrollY = 0;

function generateDriver(t, index, cup, course){
    document.getElementById(`tour_summary_driverdiv${index}`).innerHTML = "";
    let output = document.getElementById(`tour_summary_driverdiv${index}`);
    if(t != -1){
    var panel = document.createElement('div');
        panel.className = 'tour_ckgpanel';
        panel.addEventListener('click', function() {
            selectDriver(cup, course, index);
        });

        let bottomimg = document.createElement('img');
        switch (values[t].rarityId) {
        case 0:
            bottomimg.src = `./Images/UI/bgnormal.png`;
            break;
        case 1:
            bottomimg.src = `./Images/UI/bgrare.png`;
            break;
        case 2:
            bottomimg.src = `./Images/UI/bghighend.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newCharacter';
        newCharacter.src = `./Images/Character Icon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (values[t].rarityId) {
        case 0:
            topimg.src = `./Images/UI/outlinenormalchar.png`;
            break;
        case 1:
            topimg.src = `./Images/UI/outlinerarechar.png`;
            break;
        case 2:
            topimg.src = `./Images/UI/outlinehighendchar.png`;
            break;
        }
        topimg.className = 'topimg_pointer';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.addEventListener('click', function() {
            selectDriver(cup, course, index);
        });
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + values[t].itemTypeId + `.png`;
        charaitem.className = 'itemboxitem';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Drivers[t];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }
        let savedrivers = [];
        savedrivers = Object.keys(savedata.Items.Drivers);
        if(savedrivers.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
    } else {
        var panel = document.createElement('div');
        panel.className = 'tour_ckgpanel';

        let defaultimg = document.createElement('img');
        defaultimg.src = `./Images/UI/Tour/noitem.png`;
        defaultimg.className = `tour_summary_defaultimg`;
        defaultimg.addEventListener('click', function() {
            selectDriver(cup,course,index);
        });
        panel.appendChild(defaultimg);

        output.appendChild(panel);
    }
}

function selectDriver(cup, course, index){
    saveScroll();
    document.getElementById(`summary`).style.display = "none";
    document.getElementById(`summary_driver`).style.display = "block";
    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;
}

function selectedDriver(itemId){
    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse].driver = itemId;
    generateDriver(itemId, currentSummaryIndex, currentSummaryCup, currentSummaryCourse);
    document.getElementById(`summary`).style.display = "block";
    document.getElementById(`summary_driver`).style.display = "none";
    updateLocalSaveData();
    restoreScroll();
}

function generateKart(t, index, cup, course){
    document.getElementById(`tour_summary_kartdiv${index}`).innerHTML = "";
    let output = document.getElementById(`tour_summary_kartdiv${index}`);
    if(t != -1){
    var panel = document.createElement('div');
        panel.className = 'tour_ckgpanel';
        panel.addEventListener('click', function() {
            selectKart(cup, course, index);
        });

        let bottomimg = document.createElement('img');
        switch (values[t].rarityId) {
        case 0:
            bottomimg.src = `./Images/UI/bgnormalkg.png`;
            break;
        case 1:
            bottomimg.src = `./Images/UI/bgrarekg.png`;
            break;
        case 2:
            bottomimg.src = `./Images/UI/bghighendkg.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newKart';
        newCharacter.src = `./Images/ItemIcon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (values[t].rarityId) {
        case 0:
            topimg.src = `./Images/UI/outlinenormal.png`;
            break;
        case 1:
            topimg.src = `./Images/UI/outlinerare.png`;
            break;
        case 2:
            topimg.src = `./Images/UI/outlinehighend.png`;
            break;
        }
        topimg.className = 'topimg_pointer';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.addEventListener('click', function() {
            selectKart(cup, course, index);
        });
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + values[t].itemTypeId + `.png`;
        charaitem.className = 'itemboxitem';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Karts[t];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }
        let savedrivers = [];
        savedrivers = Object.keys(savedata.Items.Karts);
        if(savedrivers.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
    } else {
        var panel = document.createElement('div');
        panel.className = 'tour_ckgpanel';

        let defaultimg = document.createElement('img');
        defaultimg.src = `./Images/UI/Tour/noparts.png`;
        defaultimg.className = `tour_summary_defaultimg`;
        defaultimg.addEventListener('click', function() {
            selectKart(cup,course,index);
        });
        panel.appendChild(defaultimg);

        output.appendChild(panel);
    }
}

function selectKart(cup, course, index){
    saveScroll();
    document.getElementById(`summary`).style.display = "none";
    document.getElementById(`summary_kart`).style.display = "block";
    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;
}

function selectedKart(itemId){
    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse].kart = itemId;
    generateKart(itemId, currentSummaryIndex, currentSummaryCup, currentSummaryCourse);
    document.getElementById(`summary`).style.display = "block";
    document.getElementById(`summary_kart`).style.display = "none";
    updateLocalSaveData();
    restoreScroll();
}

function generateGlider(t, index, cup, course){
    document.getElementById(`tour_summary_gliderdiv${index}`).innerHTML = "";
    let output = document.getElementById(`tour_summary_gliderdiv${index}`);
    if(t != -1){
    var panel = document.createElement('div');
        panel.className = 'tour_ckgpanel';

        let bottomimg = document.createElement('img');
        switch (values[t].rarityId) {
        case 0:
            bottomimg.src = `./Images/UI/bgnormalkg.png`;
            break;
        case 1:
            bottomimg.src = `./Images/UI/bgrarekg.png`;
            break;
        case 2:
            bottomimg.src = `./Images/UI/bghighendkg.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newGlider';
        newCharacter.src = `./Images/ItemIcon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (values[t].rarityId) {
        case 0:
            topimg.src = `./Images/UI/outlinenormal.png`;
            break;
        case 1:
            topimg.src = `./Images/UI/outlinerare.png`;
            break;
        case 2:
            topimg.src = `./Images/UI/outlinehighend.png`;
            break;
        }
        topimg.className = 'topimg_pointer';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.addEventListener('click', function() {
            selectGlider(cup, course, index);
        });
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + values[t].itemTypeId + `.png`;
        charaitem.className = 'itemboxitem';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Gliders[t];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }
        let savedrivers = [];
        savedrivers = Object.keys(savedata.Items.Gliders);
        if(savedrivers.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
    } else {
        var panel = document.createElement('div');
        panel.className = 'tour_ckgpanel';

        let defaultimg = document.createElement('img');
        defaultimg.src = `./Images/UI/Tour/noparts.png`;
        defaultimg.className = `tour_summary_defaultimg`;
        defaultimg.addEventListener('click', function() {
            selectGlider(cup,course,index);
        });
        panel.appendChild(defaultimg);

        output.appendChild(panel);
    }
}

function selectGlider(cup, course, index){
    saveScroll();
    document.getElementById(`summary`).style.display = "none";
    document.getElementById(`summary_glider`).style.display = "block";
    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;
}

function selectedGlider(itemId){
    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse].glider = itemId;
    generateGlider(itemId, currentSummaryIndex, currentSummaryCup, currentSummaryCourse);
    document.getElementById(`summary`).style.display = "block";
    document.getElementById(`summary_glider`).style.display = "none";
    updateLocalSaveData();
    restoreScroll();
}

function generateItem(t, index, cup, course, iindex){
    document.getElementById(`tour_summary_item${iindex}div${index}`).innerHTML = "";
    let output = document.getElementById(`tour_summary_item${iindex}div${index}`);

    var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.addEventListener('click', function() {
            selectItem(cup,course,index, iindex);
        });

        let bottomimg = document.createElement('img');
        bottomimg.src = `./Images/UI/Tour/itembase.png`;
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newItem';
        newCharacter.src = `./Images/Items/Item00${t}.png`;
        panel.appendChild(newCharacter);
    output.appendChild(panel);
}

function selectItem(cup, course, index, iindex){
    saveScroll();
    document.getElementById(`summary`).style.display = "none";
    document.getElementById(`summary_item`).style.display = "block";
    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;
    currentSummaryIIndex = iindex;
}

function selectedItem(itemId){
    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse][`frenzy${currentSummaryIIndex}`] = itemId;
    generateItem(itemId, currentSummaryIndex, currentSummaryCup, currentSummaryCourse, currentSummaryIIndex);
    document.getElementById(`summary`).style.display = "block";
    document.getElementById(`summary_item`).style.display = "none";
    updateLocalSaveData();
    restoreScroll();
}

function updateScore(points, index, cup, course){
    document.getElementById(`tour_summary_scoretxtdiv${index}`).innerHTML = "";
    let output = document.getElementById(`tour_summary_scoretxtdiv${index}`);

    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;

    if(points > 99999) points = 99999;
    if(points < 0) points = 0;

    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse].score = points;

    var charoutput = [];
    var sNumber = points.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        charoutput.push(+sNumber.charAt(i));
    }
    charoutput.forEach((t,i)=>{
    var number = document.createElement('img');
    number.className = `tour_scoreNumber`;
    number.src = `./Images/UI/PointsNum/${t}.png`
    output.appendChild(number);
    });
    updateLocalSaveData();
}

function updateCoinbox(points, index, cup, course){
    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;

    if(points > 9) points = 9;
    if(points < 0) points = 0;

    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse].coinboxCount = points;

    document.getElementById(`tour_summary_cbcin${index}`).value = points;
    updateLocalSaveData();
}

function updateActions(points, index, cup, course){
    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;

    if(points > 500) points = 500;
    if(points < 0) points = 0;

    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse].actionCount = points;

    document.getElementById(`tour_summary_accin${index}`).value = points;
    updateLocalSaveData();
}

function updatePlacement(points, index, cup, course){
    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;

    if(points > 8) points = 8;
    if(points < 1) points = 1;

    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse].placement = points;

    document.getElementById(`tour_summary_pcin${index}`).value = points;
    document.getElementById(`tour_summary_pcimg${index}`).src = `./Images/UI/Placement/${points}.png`;
    updateLocalSaveData();
}

function updateCompleted(yon, index, cup, course){
    currentSummaryCup = cup;
    currentSummaryCourse = course;
    currentSummaryIndex = index;

    savedata.Seasons[currentTourId][`Cup_${currentSummaryCup}`][currentSummaryCourse].completed = yon;

    document.getElementById(`tour_summary_completedin${index}`).checked = yon;

    document.getElementById(`tour_summary_panel${index}`).value = yon;
    (yon ? document.getElementById(`tour_summary_panel${index}`).style.backgroundImage = `url('../Images/UI/Tour/panelbgcompleted.png')` : document.getElementById(`tour_summary_panel${index}`).style.backgroundImage = `url('../Images/UI/Tour/panelbg.png')`)
    updateLocalSaveData();
}

function saveScroll(){
    console.log(`scroll saved`);
    currentScrollY = window.pageYOffset;
}

function restoreScroll(){
    window.scrollTo(0, currentScrollY);
}


let makeSummaryCharacters = ()=>{
    document.getElementById('summary_driver_items').innerHTML = "";
    let output = document.getElementById('summary_driver_items');

    characterid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.addEventListener('click', function() {
            selectedDriver(t);
        });

        let bottomimg = document.createElement('img');
        switch (charrarity[i]) {
        case "1":
            bottomimg.src = `./Images/UI/bgnormal.png`;
            break;
        case "2":
            bottomimg.src = `./Images/UI/bgrare.png`;
            break;
        case "3":
            bottomimg.src = `./Images/UI/bghighend.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newCharacter';
        newCharacter.src = `./Images/Character Icon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (charrarity[i]) {
        case "1":
            topimg.src = `./Images/UI/outlinenormalchar.png`;
            break;
        case "2":
            topimg.src = `./Images/UI/outlinerarechar.png`;
            break;
        case "3":
            topimg.src = `./Images/UI/outlinehighendchar.png`;
            break;
        }
        topimg.className = 'topimg';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + charitem[i] + `.png`;
        charaitem.className = 'itemboxitem';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Drivers[t];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }
        let savedrivers = [];
        savedrivers = Object.keys(savedata.Items.Drivers);
        if(savedrivers.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
        //output.appendChild(panel);
    }
    );
}

let makeSummaryKarts = ()=>{
    document.getElementById('summary_kart_items').innerHTML = "";
    let output = document.getElementById('summary_kart_items');

    kartid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.addEventListener('click', function() {
            selectedKart(t);
        });

        let bottomimg = document.createElement('img');
        switch (kartrarity[i]) {
        case "1":
            bottomimg.src = `./Images/UI/bgnormalkg.png`;
            break;
        case "2":
            bottomimg.src = `./Images/UI/bgrarekg.png`;
            break;
        case "3":
            bottomimg.src = `./Images/UI/bghighendkg.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newKart';
        newCharacter.src = `./Images/ItemIcon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (kartrarity[i]) {
        case "1":
            topimg.src = `./Images/UI/outlinenormal.png`;
            break;
        case "2":
            topimg.src = `./Images/UI/outlinerare.png`;
            break;
        case "3":
            topimg.src = `./Images/UI/outlinehighend.png`;
            break;
        }
        topimg.className = 'topimg';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + kartitem[i] + `.png`;
        charaitem.className = 'itemboxitem';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Karts[t];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }
        let savedrivers = [];
        savedrivers = Object.keys(savedata.Items.Karts);
        if(savedrivers.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
    }
    );
}

let makeSummaryGliders = ()=>{
    document.getElementById('summary_glider_items').innerHTML = "";
    let output = document.getElementById('summary_glider_items');

    gliderid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.addEventListener('click', function() {
            selectedGlider(t);
        });

        let bottomimg = document.createElement('img');
        switch (gliderrarity[i]) {
        case "1":
            bottomimg.src = `./Images/UI/bgnormalkg.png`;
            break;
        case "2":
            bottomimg.src = `./Images/UI/bgrarekg.png`;
            break;
        case "3":
            bottomimg.src = `./Images/UI/bghighendkg.png`;
            break;
        }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newGlider';
        newCharacter.src = `./Images/ItemIcon/${t}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (gliderrarity[i]) {
        case "1":
            topimg.src = `./Images/UI/outlinenormal.png`;
            break;
        case "2":
            topimg.src = `./Images/UI/outlinerare.png`;
            break;
        case "3":
            topimg.src = `./Images/UI/outlinehighend.png`;
            break;
        }
        topimg.className = 'topimg';
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + glideritem[i] + `.png`;
        charaitem.className = 'itemboxitem';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Gliders[t];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }
        let savedrivers = [];
        savedrivers = Object.keys(savedata.Items.Gliders);
        if(savedrivers.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
    }
    );
}

let makeSummaryItems = ()=>{
    let output = document.getElementById('summary_item_items');

    itemarray.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.addEventListener('click', function() {
            selectedItem(t);
        });

        let bottomimg = document.createElement('img');
        bottomimg.src = `./Images/UI/Tour/itembase.png`;
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newItem';
        newCharacter.src = `./Images/Items/Item00${t}.png`;
        panel.appendChild(newCharacter);

        output.appendChild(panel);
    }
    );
}
//Cup Select

function makeCups() {
    document.getElementById('cupheaderdiv').innerHTML = "";
    let cupselect = document.getElementById('cupheaderdiv');

    let cup_roster = document.createElement('div');
    cup_roster.className = "tour_cuproster";
    cupselect.appendChild(cup_roster);

    let cup_names = [];
    Object.keys(season).forEach((t, i) => {
        cup_names.push(season[t].cupIcon);
    });

    for (let i = 0; i < 12; i++) {
        let cup0 = document.createElement('div');
        cup0.id = `cup_${i}`
        cup0.className = "tour_cup";
        cup0.addEventListener('click', function () {
            makeCupCourses(i);
        });
        cup_roster.appendChild(cup0);

        let cup_bg = document.createElement('img');
        cup_bg.src = `./Images/UI/cupinventory.png`
        cup_bg.className = `tour_cup_bg`;
        cup0.appendChild(cup_bg);

        let cup_img = document.createElement('img');
        cup_img.src = `./Images/Cups/${cup_names[i]}.png`
        cup_img.className = `tour_cup_img`;
        cup0.appendChild(cup_img);

    }
}

function makeCupCourses(cup) {
    document.getElementById('cupcourses').innerHTML = "";
    let output = document.getElementById('cupcourses');

    let coursebar = document.createElement('img');
    coursebar.src = "./Images/UI/Tour/coursebar.png";
    coursebar.className = "tour_coursebar";
    output.appendChild(coursebar);

    let cup_courses = [];
    cup_courses = season[`Cup_${cup}`].courses;

    cup_courses.forEach((t, i) => {
        let courseforlater = t;

        //document.getElementById(`selectcourse_${t}`).className = "coursepanelselected";
        var coursePanel = document.createElement('div');
        coursePanel.className = 'coursepanelslc';
        coursePanel.id = `coursets_${t}`;

        let bgimg = document.createElement('img');
        //let bgindex = courseimages.indexOf(t);
        bgimg.src = `./Images/Course Background/${courseimages[t]}.png`;
        bgimg.className = 'coursebgimg';
        coursePanel.appendChild(bgimg);

        let courseimg = document.createElement('img');
        courseimg.src = `./Images/Course Image/${t}.png`;
        courseimg.className = 'courseimgslc';
        courseimg.style.cursor = "default";
        courseimg.style.color = "gold";
        //courseimg.style.zoom = "90%"
        /*courseimg.addEventListener('click', function() {
             selectCourse(t);
         });*/
        coursePanel.appendChild(courseimg);

        let coursetxt = document.createElement('p');
        coursetxt.innerHTML = coursenames[t];
        coursetxt.className = 'coursetxtslc';
        coursetxt.style.color = "gold";
        switch (t) {
            case "Classic_Gn64_KoopaTroopaBeachRX":
                coursetxt.style.fontSize = "15.5px";
                break;
            case "Classic_Gsfc_KoopaTroopaBeach2X":
                coursetxt.style.fontSize = "16px";
                break;
            case "Classic_Gsfc_KoopaTroopaBeach2R":
                coursetxt.style.fontSize = "16px";
                break;
            case "Classic_G3ds_CheepCheepLagoonX":
                coursetxt.style.fontSize = "16px";
                break;
            case "Classic_G3ds_CheepCheepLagoonR":
                coursetxt.style.fontSize = "16px";
                break;
            case "Classic_G3ds_CheepCheepLagoonRX":
                coursetxt.style.fontSize = "15px";
                break;
            case "Remix_Grsfc_RainbowRoad1RX":
                coursetxt.style.fontSize = "15.5px";
                break;
        }
        //coursetxt.style.zoom = "90%"
        coursePanel.appendChild(coursetxt);

        let combTS = document.createElement('div');
        combTS.className = 'combTS'

        let combTS2 = document.createElement('div');
        combTS2.className = 'combTS'

        let bgimgCombTS = document.createElement('img');
        //let bgindex = courseimages.indexOf(t);
        bgimgCombTS.src = `./Images/Course Background/${courseimages[t]}.png`;
        bgimgCombTS.className = 'coursebgimgCombTS';
        combTS.appendChild(bgimgCombTS);

        let bgimgCombTS2 = document.createElement('img');
        //let bgindex = courseimages.indexOf(t);
        bgimgCombTS2.src = `./Images/Course Background/${courseimages[t]}.png`;
        bgimgCombTS2.className = 'coursebgimgCombTS';
        combTS2.appendChild(bgimgCombTS2);

        let currentcourse = {
            "moreGoodAt": {
                "Drivers": [],
                "Karts": [],
                "Gliders": []
            },
            "goodAt": {
                "Drivers": [],
                "Karts": [],
                "Gliders": []
            },
            "unlock3": {
                "Drivers": [],
                "Karts": [],
                "Gliders": []
            },
            "unlock6": {
                "Drivers": [],
                "Karts": [],
                "Gliders": []
            }
        };
        coursedata.Courses[t].moreGoodAt.Drivers.forEach((t, i) => {
            currentcourse.moreGoodAt.Drivers.push(t);
        });
        coursedata.Courses[t].moreGoodAt.Karts.forEach((t, i) => {
            currentcourse.moreGoodAt.Karts.push(t);
        });
        coursedata.Courses[t].moreGoodAt.Gliders.forEach((t, i) => {
            currentcourse.moreGoodAt.Gliders.push(t);
        });
        coursedata.Courses[t].goodAt.Drivers.forEach((t, i) => {
            currentcourse.goodAt.Drivers.push(t);
        });
        coursedata.Courses[t].goodAt.Karts.forEach((t, i) => {
            currentcourse.goodAt.Karts.push(t);
        });
        coursedata.Courses[t].goodAt.Gliders.forEach((t, i) => {
            currentcourse.goodAt.Gliders.push(t);
        });
        coursedata.Courses[t].unlock3.Drivers.forEach((t, i) => {
            currentcourse.unlock3.Drivers.push(t);
        });
        coursedata.Courses[t].unlock3.Karts.forEach((t, i) => {
            currentcourse.unlock3.Karts.push(t);
        });
        coursedata.Courses[t].unlock3.Gliders.forEach((t, i) => {
            currentcourse.unlock3.Gliders.push(t);
        });
        coursedata.Courses[t].unlock6.Drivers.forEach((t, i) => {
            currentcourse.unlock6.Drivers.push(t);
        });
        coursedata.Courses[t].unlock6.Karts.forEach((t, i) => {
            currentcourse.unlock6.Karts.push(t);
        });
        coursedata.Courses[t].unlock6.Gliders.forEach((t, i) => {
            currentcourse.unlock6.Gliders.push(t);
        });

        //EASY cup bonus
        let cupBonusId = cupBonus[season[`Cup_${cup}`].cupIcon].toString();
        if(currentcourse[`goodAt`][`Drivers`].includes(cupBonusId)){
            currentcourse[`moreGoodAt`][`Drivers`].push(cupBonusId);
            currentcourse[`goodAt`][`Drivers`].splice(currentcourse[`goodAt`][`Drivers`].indexOf(cupBonusId), 1);
        } else {
            currentcourse[`goodAt`][`Drivers`].push(cupBonusId);
        }

        //HARD tour bonus
        if(i == 1){
        seasonbonus_course2.forEach((t, i) => {
            let driversC2 = [];
            let kartsC2 = [];
            let glidersC2 = [];

            if (t.toString().length < 5) {
                driversC2.push(t.toString());
            }
            if (t.toString().length == 5 && Math.round(t / 1000) == 30) {
                glidersC2.push(t.toString());
            }
            if (t.toString().length == 5 && Math.round(t / 1000) == 70) {
                kartsC2.push(t.toString());
            }

            driversC2.forEach((driverC, i) => {
                if(!currentcourse[`moreGoodAt`][`Drivers`].includes(driverC)){
            if(currentcourse[`goodAt`][`Drivers`].includes(driverC)){
                currentcourse[`moreGoodAt`][`Drivers`].push(driverC);
                currentcourse[`goodAt`][`Drivers`].splice(currentcourse[`goodAt`][`Drivers`].indexOf(driverC), 1);
                if(currentcourse[`unlock3`][`Drivers`].indexOf(driverC) != -1){
                currentcourse[`unlock3`][`Drivers`].splice(currentcourse[`unlock3`][`Drivers`].indexOf(driverC), 1);
                }
                if(currentcourse[`unlock6`][`Drivers`].indexOf(driverC) != -1){
                    currentcourse[`unlock6`][`Drivers`].splice(currentcourse[`unlock6`][`Drivers`].indexOf(driverC), 1);
                    }
            } else {
                currentcourse[`goodAt`][`Drivers`].push(driverC);
            }
            }
            });

            kartsC2.forEach((kartC, i) => {
                if(!currentcourse[`moreGoodAt`][`Karts`].includes(kartC)){
                if(currentcourse[`goodAt`][`Karts`].includes(kartC)){
                    currentcourse[`moreGoodAt`][`Karts`].push(kartC);
                    currentcourse[`goodAt`][`Karts`].splice(currentcourse[`goodAt`][`Karts`].indexOf(kartC), 1);
                    if(currentcourse[`unlock3`][`Karts`].indexOf(kartC) != -1){
                        currentcourse[`unlock3`][`Karts`].splice(currentcourse[`unlock3`][`Karts`].indexOf(kartC), 1);
                        }
                        if(currentcourse[`unlock6`][`Karts`].indexOf(kartC) != -1){
                            currentcourse[`unlock6`][`Karts`].splice(currentcourse[`unlock6`][`Karts`].indexOf(kartC), 1);
                            }
                } else {
                    currentcourse[`goodAt`][`Karts`].push(kartC);
                }
                }  
            });

            glidersC2.forEach((gliderC, i) => {
                if(!currentcourse[`moreGoodAt`][`Gliders`].includes(gliderC)){
                if(currentcourse[`goodAt`][`Gliders`].includes(gliderC)){
                    currentcourse[`moreGoodAt`][`Gliders`].push(gliderC);
                    currentcourse[`goodAt`][`Gliders`].splice(currentcourse[`goodAt`][`Gliders`].indexOf(gliderC), 1);
                    if(currentcourse[`unlock3`][`Gliders`].indexOf(gliderC) != -1){
                        currentcourse[`unlock3`][`Gliders`].splice(currentcourse[`unlock3`][`Gliders`].indexOf(gliderC), 1);
                        }
                        if(currentcourse[`unlock6`][`Gliders`].indexOf(gliderC) != -1){
                            currentcourse[`unlock6`][`Gliders`].splice(currentcourse[`unlock6`][`Gliders`].indexOf(gliderC), 1);
                            }
                } else {
                    currentcourse[`goodAt`][`Gliders`].push(gliderC);
                }
                }
            });

        });
        }

        if(i == 2){
        seasonbonus_course3.forEach((t, i) => {
            let driversC2 = [];
            let kartsC2 = [];
            let glidersC2 = [];

            if (t.toString().length < 5) {
                driversC2.push(t.toString());
            }
            if (t.toString().length == 5 && Math.round(t / 1000) == 30) {
                glidersC2.push(t.toString());
            }
            if (t.toString().length == 5 && Math.round(t / 1000) == 70) {
                kartsC2.push(t.toString());
            }

            driversC2.forEach((driverC, i) => {
            if(!currentcourse[`moreGoodAt`][`Drivers`].includes(driverC)){
            if(currentcourse[`goodAt`][`Drivers`].includes(driverC)){
                currentcourse[`moreGoodAt`][`Drivers`].push(driverC);
                currentcourse[`goodAt`][`Drivers`].splice(currentcourse[`goodAt`][`Drivers`].indexOf(driverC), 1);
                if(currentcourse[`unlock3`][`Drivers`].indexOf(driverC) != -1){
                    currentcourse[`unlock3`][`Drivers`].splice(currentcourse[`unlock3`][`Drivers`].indexOf(driverC), 1);
                    }
                    if(currentcourse[`unlock6`][`Drivers`].indexOf(driverC) != -1){
                        currentcourse[`unlock6`][`Drivers`].splice(currentcourse[`unlock6`][`Drivers`].indexOf(driverC), 1);
                        }
            } else {
                currentcourse[`goodAt`][`Drivers`].push(driverC);
            }
            }
            });

            kartsC2.forEach((kartC, i) => {
                if(!currentcourse[`moreGoodAt`][`Karts`].includes(kartC)){
                if(currentcourse[`goodAt`][`Karts`].includes(kartC)){
                    currentcourse[`moreGoodAt`][`Karts`].push(kartC);
                    currentcourse[`goodAt`][`Karts`].splice(currentcourse[`goodAt`][`Karts`].indexOf(kartC), 1);
                    if(currentcourse[`unlock3`][`Karts`].indexOf(kartC) != -1){
                        currentcourse[`unlock3`][`Karts`].splice(currentcourse[`unlock3`][`Karts`].indexOf(kartC), 1);
                        }
                        if(currentcourse[`unlock6`][`Karts`].indexOf(kartC) != -1){
                            currentcourse[`unlock6`][`Karts`].splice(currentcourse[`unlock6`][`Karts`].indexOf(kartC), 1);
                            }
                } else {
                    currentcourse[`goodAt`][`Karts`].push(kartC);
                }
                }
            });

            glidersC2.forEach((gliderC, i) => {
                if(!currentcourse[`moreGoodAt`][`Gliders`].includes(gliderC)){
                if(currentcourse[`goodAt`][`Gliders`].includes(gliderC)){
                    currentcourse[`moreGoodAt`][`Gliders`].push(gliderC);
                    currentcourse[`goodAt`][`Gliders`].splice(currentcourse[`goodAt`][`Gliders`].indexOf(gliderC), 1);
                    if(currentcourse[`unlock3`][`Gliders`].indexOf(gliderC) != -1){
                        currentcourse[`unlock3`][`Gliders`].splice(currentcourse[`unlock3`][`Gliders`].indexOf(gliderC), 1);
                        }
                        if(currentcourse[`unlock6`][`Gliders`].indexOf(gliderC) != -1){
                            currentcourse[`unlock6`][`Gliders`].splice(currentcourse[`unlock6`][`Gliders`].indexOf(gliderC), 1);
                            }
                } else {
                    currentcourse[`goodAt`][`Gliders`].push(gliderC);
                }
                }
            });

        });
        }

        let topshelves = [];
        let topshelvestypes = [];

        for (var m = 0; m < 2; m++) {
            for (var x = 0; x < 3; x++) {
                var topShelfPanel = document.createElement('div');
                topShelfPanel.className = 'coursepreviewselectedpanel';
                if (selectedcourses.includes(t)) {
                    coursePanel.className = `coursepanelslcselected`;
                }

                topshelves.splice(0, topshelves.length);
                topshelvestypes.splice(0, topshelvestypes.length);



                if (!isDataEntered) {
                    if (m == 0) {
                        switch (x) {
                            case 0:
                                currentcourse.moreGoodAt.Drivers.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                            case 1:
                                currentcourse.moreGoodAt.Karts.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                            case 2:
                                currentcourse.moreGoodAt.Gliders.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                        }

                        switch (x) {
                            case 0:
                                currentcourse.unlock3.Drivers.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Drivers.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                            case 1:
                                currentcourse.unlock3.Karts.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Karts.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                            case 2:
                                currentcourse.unlock3.Gliders.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Gliders.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                        }
                    }
                    if (m == 1) {
                        switch (x) {
                            case 0:
                                currentcourse.goodAt.Drivers.forEach((t, i) => {
                                    topshelves.push(t)
                                });
                                break;
                            case 1:
                                currentcourse.goodAt.Karts.forEach((t, i) => {
                                    topshelves.push(t)
                                });
                                break;
                            case 2:
                                currentcourse.goodAt.Gliders.forEach((t, i) => {
                                    topshelves.push(t)
                                });
                                break;
                        }
                    }

                }
                if (isDataEntered) {
                    if (m == 0) {
                        switch (x) {
                            case 0:
                                currentcourse.moreGoodAt.Drivers.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                            case 1:
                                currentcourse.moreGoodAt.Karts.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                            case 2:
                                currentcourse.moreGoodAt.Gliders.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                        }

                        switch (x) {
                            case 0:
                                currentcourse.unlock3.Drivers.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Drivers.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                            case 1:
                                currentcourse.unlock3.Karts.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Karts.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                            case 2:
                                currentcourse.unlock3.Gliders.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Gliders.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                        }
                    }
                    if (m == 1) {
                        switch (x) {
                            case 0:
                                currentcourse.goodAt.Drivers.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                            case 1:
                                currentcourse.goodAt.Karts.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                            case 2:
                                currentcourse.goodAt.Gliders.forEach((t, i) => {
                                    topshelves.push(t)
                                    topshelvestypes.push('0');
                                });
                                break;
                        }

                        switch (x) {
                            case 0:
                                currentcourse.unlock3.Drivers.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Drivers.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                            case 1:
                                currentcourse.unlock3.Karts.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Karts.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                            case 2:
                                currentcourse.unlock3.Gliders.forEach((t, i) => {
                                    //unlock3topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Gliders.forEach((t, i) => {
                                    //unlock6topshelves.push(t)
                                    topshelves.push(t)
                                    topshelvestypes.push('2');
                                });
                                break;
                        }
                    }

                    let tempOwned = [];
                    let tempNotOwned = [];
                    let temp3Owned = [];
                    let temp6Owned = [];
                    let temp3NotLeveled = [];
                    let temp6NotLeveled = [];
                    let temp3NotOwned = [];
                    let temp6NotOwned = [];
                    //0 = Owned
                    //1 = Owned Unlock 3
                    //2 = Owned Unlock 6
                    //3 = Not Owned
                    //4 = Not Owned Unlock 3
                    //5 = Not Owned Unlock 6

                    if (m == 0) {
                        switch (x) {
                            case 0:
                                currentcourse.moreGoodAt.Drivers.forEach((t, i) => {
                                    if (savedata.Items.Drivers[t] != null) {
                                        tempOwned.push(t)
                                    } else {
                                        tempNotOwned.push(t)
                                    }
                                });
                                break;
                            case 1:
                                currentcourse.moreGoodAt.Karts.forEach((t, i) => {
                                    if (savedata.Items.Karts[t] != null) {
                                        tempOwned.push(t)
                                    } else {
                                        tempNotOwned.push(t)
                                    }
                                });
                                break;
                            case 2:
                                currentcourse.moreGoodAt.Gliders.forEach((t, i) => {
                                    if (savedata.Items.Gliders[t] != null) {
                                        tempOwned.push(t)
                                    } else {
                                        tempNotOwned.push(t)
                                    }
                                });
                                break;
                        }

                        switch (x) {
                            case 0:
                                currentcourse.unlock3.Drivers.forEach((t, i) => {
                                    if (savedata.Items.Drivers[t] != null) {
                                        temp3Owned.push(t)
                                    } else {
                                        temp3NotOwned.push(t)
                                    }

                                    //unlock3topshelves.push(t)
                                    //topshelves.push(t)
                                    //topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Drivers.forEach((t, i) => {
                                    if (savedata.Items.Drivers[t] != null) {
                                        temp6Owned.push(t)
                                    } else {
                                        temp6NotOwned.push(t)
                                    }
                                    //unlock6topshelves.push(t)
                                    //topshelves.push(t)
                                    //topshelvestypes.push('2');
                                });
                                break;
                            case 1:
                                currentcourse.unlock3.Karts.forEach((t, i) => {
                                    if (savedata.Items.Karts[t] != null) {
                                        temp3Owned.push(t)
                                    } else {
                                        temp3NotOwned.push(t)
                                    }
                                    //unlock3topshelves.push(t)
                                    //topshelves.push(t)
                                    //topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Karts.forEach((t, i) => {
                                    if (savedata.Items.Karts[t] != null) {
                                        temp6Owned.push(t)
                                    } else {
                                        temp6NotOwned.push(t)
                                    }
                                    //unlock6topshelves.push(t)
                                    //topshelves.push(t)
                                    //topshelvestypes.push('2');
                                });
                                break;
                            case 2:
                                currentcourse.unlock3.Gliders.forEach((t, i) => {
                                    if (savedata.Items.Gliders[t] != null) {
                                        temp3Owned.push(t)
                                    } else {
                                        temp3NotOwned.push(t)
                                    }
                                    //unlock3topshelves.push(t)
                                    //topshelves.push(t)
                                    //topshelvestypes.push('1');
                                });
                                currentcourse.unlock6.Gliders.forEach((t, i) => {
                                    if (savedata.Items.Gliders[t] != null) {
                                        temp6Owned.push(t)
                                    } else {
                                        temp6NotOwned.push(t)
                                    }
                                    //unlock6topshelves.push(t)
                                    //topshelves.push(t)
                                    //topshelvestypes.push('2');
                                });
                                break;
                        }
                    }
                    if (m == 1) {
                        tempOwned.splice(0, tempOwned.length);
                        tempNotOwned.splice(0, tempNotOwned.length);
                        switch (x) {
                            case 0:
                                currentcourse.goodAt.Drivers.forEach((t, i) => {
                                    if (savedata.Items.Drivers[t] != null) {
                                        tempOwned.push(t)
                                    } else {
                                        tempNotOwned.push(t)
                                    }
                                });
                                break;
                            case 1:
                                currentcourse.goodAt.Karts.forEach((t, i) => {
                                    if (savedata.Items.Karts[t] != null) {
                                        tempOwned.push(t)
                                    } else {
                                        tempNotOwned.push(t)
                                    }
                                });
                                break;
                            case 2:
                                currentcourse.goodAt.Gliders.forEach((t, i) => {
                                    if (savedata.Items.Gliders[t] != null) {
                                        tempOwned.push(t)
                                    } else {
                                        tempNotOwned.push(t)
                                    }
                                });
                                break;
                        }
                    }




                    topshelves.splice(0, topshelves.length);
                    topshelvestypes.splice(0, topshelvestypes.length);

                    //topshelves = tempOwned.concat(tempNotOwned);
                    topshelves = topshelves.concat(tempOwned);
                    topshelves = tempOwned.concat(temp3Owned);
                    topshelves = topshelves.concat(temp6Owned);
                    topshelves = topshelves.concat(tempNotOwned);
                    topshelves = topshelves.concat(temp3NotOwned);
                    topshelves = topshelves.concat(temp6NotOwned);
                    //console.log(topshelvestypes);
                    //0 = Owned
                    //1 = Owned Unlock 3
                    //2 = Owned Unlock 6
                    //3 = Not Owned
                    //4 = Not Owned Unlock 3
                    //5 = Not Owned Unlock 6
                    tempOwned.forEach((t, i) => {
                        topshelvestypes.push('0');
                    });
                    temp3Owned.forEach((t, i) => {
                        topshelvestypes.push('1');
                    });
                    temp6Owned.forEach((t, i) => {
                        topshelvestypes.push('2');
                    });
                    tempNotOwned.forEach((t, i) => {
                        topshelvestypes.push('3');
                    });
                    temp3NotOwned.forEach((t, i) => {
                        topshelvestypes.push('4');
                    });
                    temp6NotOwned.forEach((t, i) => {
                        topshelvestypes.push('5');
                    });
                    /*console.log("tempNotOwned");
                    console.log(tempNotOwned);
                    console.log("temp3NotOwned");
                    console.log(temp3NotOwned);
                    console.log("temp6NotOwned");
                    console.log(temp6NotOwned);*/
                }//isdataentered


                topshelves.forEach((t) => {
                    var panel = document.createElement('div');
                    panel.className = 'ckgpanel';
                    //panel.style.zoom = "75%"
                    panel.id = `coursetscharpanel${t}`;
                    switch (x) {
                        case 0:
                            panel.addEventListener('click', function () {
                                invCharacter(t);
                            });
                            break;
                        case 1:
                            panel.addEventListener('click', function () {
                                invKart(t);
                            });
                            break;
                        case 2:
                            panel.addEventListener('click', function () {
                                invGlider(t);
                            });
                            break;
                    }

                    let bottomimg = document.createElement('img');
                    switch (x) {

                        case 0:
                            switch (charrarity[characterid.indexOf(t)]) {
                                case "1":
                                    bottomimg.src = `./Images/UI/bgnormal.png`;
                                    break;
                                case "2":
                                    bottomimg.src = `./Images/UI/bgrare.png`;
                                    break;
                                case "3":
                                    bottomimg.src = `./Images/UI/bghighend.png`;
                                    break;
                            }
                            break;
                        case 1:
                            switch (kartrarity[kartid.indexOf(t)]) {
                                case "1":
                                    bottomimg.src = `./Images/UI/bgnormalkg.png`;
                                    break;
                                case "2":
                                    bottomimg.src = `./Images/UI/bgrarekg.png`;
                                    break;
                                case "3":
                                    bottomimg.src = `./Images/UI/bghighendkg.png`;
                                    break;
                            }
                            break;
                        case 2:
                            switch (gliderrarity[gliderid.indexOf(t)]) {
                                case "1":
                                    bottomimg.src = `./Images/UI/bgnormalkg.png`;
                                    break;
                                case "2":
                                    bottomimg.src = `./Images/UI/bgrarekg.png`;
                                    break;
                                case "3":
                                    bottomimg.src = `./Images/UI/bghighendkg.png`;
                                    break;
                            }
                            break;
                    }
                    bottomimg.className = 'bottomimg';
                    panel.appendChild(bottomimg);

                    let newItem = document.createElement('img');
                    switch (x) {
                        case 0:
                            newItem.className = 'newCharacter';
                            newItem.src = `./Images/Character Icon/${t}.png`;
                            break;
                        case 1:
                            newItem.className = 'newKart';
                            newItem.src = `./Images/ItemIcon/${t}.png`;
                            break;
                        case 2:
                            newItem.className = 'newGlider';
                            newItem.src = `./Images/ItemIcon/${t}.png`;
                            break;
                    }
                    panel.appendChild(newItem);

                    let topimg = document.createElement('img');
                    switch (x) {
                        case 0:
                            switch (charrarity[characterid.indexOf(t)]) {
                                case "1":
                                    topimg.src = `./Images/UI/outlinenormalchar.png`;
                                    break;
                                case "2":
                                    topimg.src = `./Images/UI/outlinerarechar.png`;
                                    break;
                                case "3":
                                    topimg.src = `./Images/UI/outlinehighendchar.png`;
                                    break;
                            }
                            break;
                        case 1:
                            switch (kartrarity[kartid.indexOf(t)]) {
                                case "1":
                                    topimg.src = `./Images/UI/outlinenormal.png`;
                                    break;
                                case "2":
                                    topimg.src = `./Images/UI/outlinerare.png`;
                                    break;
                                case "3":
                                    topimg.src = `./Images/UI/outlinehighend.png`;
                                    break;
                            }
                            break;
                        case 2:
                            switch (gliderrarity[gliderid.indexOf(t)]) {
                                case "1":
                                    topimg.src = `./Images/UI/outlinenormal.png`;
                                    break;
                                case "2":
                                    topimg.src = `./Images/UI/outlinerare.png`;
                                    break;
                                case "3":
                                    topimg.src = `./Images/UI/outlinehighend.png`;
                                    break;
                            }
                            break;
                    }
                    topimg.className = 'topimg';
                    /*if (viewshelvechar.includes(t)) {
                        topimg.className = 'invtopimgselected';
                    }*/
                    topimg.id = `coursetopimgselected${t}`;
                    panel.appendChild(topimg);

                    let charaitem = document.createElement('img');
                    switch (x) {
                        case 0:
                            charaitem.src = `./Images/Items/` + charitem[characterid.indexOf(t)] + `.png`;
                            charaitem.className = 'itemboxitem';
                            break;
                        case 1:
                            charaitem.src = `./Images/Items/` + kartitem[kartid.indexOf(t)] + `.png`;
                            charaitem.className = 'bonuspointtype';
                            break;
                        case 2:
                            charaitem.src = `./Images/Items/` + glideritem[gliderid.indexOf(t)] + `.png`;
                            charaitem.className = 'bonuspointtype';
                            break;
                    }
                    panel.appendChild(charaitem);


                    let itemlvl = 0;
                    switch (x) {
                        case 0:
                            itemlvl = savedata.Items.Drivers[t];
                            break;
                        case 1:
                            itemlvl = savedata.Items.Karts[t];
                            break;
                        case 2:
                            itemlvl = savedata.Items.Gliders[t];
                            break;
                    }
                    if(itemlvl == null){
                        topshelvestypes[i] = 3;
                    }
                    if (m == 0) {
                        if (itemlvl != null && isDataEntered && topshelvestypes[i] == 0) {
                            let levelicon = document.createElement('img');
                            levelicon.src = `./Images/UI/${itemlvl}.png`;
                            levelicon.className = 'levelicon';
                            levelicon.id = `coursets_levelnumber${t}`;
                            panel.appendChild(levelicon);

                            let lvicon = document.createElement('img');
                            lvicon.src = './Images/UI/lv.png';
                            lvicon.className = 'lvicon';
                            panel.appendChild(lvicon);
                        } else {
                            panel.className = 'ckgpaneldisabled';
                        }

                        if (!isDataEntered) {
                            panel.className = 'ckgpanel';
                            switch (topshelvestypes[i]) {
                                case "0":
                                    break;
                                case "1":
                                    let lockimg = document.createElement('img');
                                    lockimg.src = `./Images/UI/lock.png`;
                                    lockimg.className = 'courselockimgts';
                                    lockimg.style.filter = "grayscale(0%)";
                                    panel.appendChild(lockimg);

                                    let levelicon = document.createElement('img');
                                    levelicon.src = `./Images/UI/3.png`;
                                    levelicon.className = 'leveliconunlockts';
                                    levelicon.style.filter = "grayscale(0%)";
                                    levelicon.id = `inv_levelnumber${t}`;
                                    panel.appendChild(levelicon);

                                    let lvicon = document.createElement('img');
                                    lvicon.src = './Images/UI/lv.png';
                                    lvicon.className = 'lviconunlockts';
                                    lvicon.style.filter = "grayscale(0%)";
                                    panel.appendChild(lvicon);
                                    break;
                                case "2":
                                    let lockimg2 = document.createElement('img');
                                    lockimg2.src = `./Images/UI/lock.png`;
                                    lockimg2.className = 'courselockimgts';
                                    lockimg2.style.filter = "grayscale(0%)";
                                    panel.appendChild(lockimg2);

                                    let levelicon2 = document.createElement('img');
                                    levelicon2.src = `./Images/UI/6.png`;
                                    levelicon2.className = 'leveliconunlockts';
                                    levelicon2.style.filter = "grayscale(0%)";
                                    levelicon2.id = `inv_levelnumber${t}`;
                                    panel.appendChild(levelicon2);

                                    let lvicon2 = document.createElement('img');
                                    lvicon2.src = './Images/UI/lv.png';
                                    lvicon2.className = 'lviconunlockts';
                                    lvicon2.style.filter = "grayscale(0%)";
                                    panel.appendChild(lvicon2);
                                    break;
                            }
                        }

                        if (isDataEntered) {
                            switch (topshelvestypes[i]) {
                                case "0":
                                    break;
                                case "1":
                                    panel.className = 'ckgpanel';
                                    if (itemlvl < 3) {
                                        let lockimg = document.createElement('img');
                                        lockimg.src = `./Images/UI/lock.png`;
                                        lockimg.className = 'courselockimgts';
                                        lockimg.style.filter = "grayscale(0%)";
                                        panel.appendChild(lockimg);

                                        let levelicon = document.createElement('img');
                                        levelicon.src = `./Images/UI/3.png`;
                                        levelicon.className = 'leveliconunlockts';
                                        levelicon.style.filter = "grayscale(0%)";
                                        levelicon.id = `inv_levelnumber${t}`;
                                        panel.appendChild(levelicon);

                                        let lvicon = document.createElement('img');
                                        lvicon.src = './Images/UI/lv.png';
                                        lvicon.className = 'lviconunlockts';
                                        lvicon.style.filter = "grayscale(0%)";
                                        panel.appendChild(lvicon);
                                    } else {
                                        let levelicon = document.createElement('img');
                                        levelicon.src = `./Images/UI/${itemlvl}.png`;
                                        levelicon.className = 'levelicon';
                                        levelicon.id = `coursets_levelnumber${t}`;
                                        panel.appendChild(levelicon);

                                        let lvicon = document.createElement('img');
                                        lvicon.src = './Images/UI/lv.png';
                                        lvicon.className = 'lvicon';
                                        panel.appendChild(lvicon);
                                    }
                                    break;
                                case "2":
                                    panel.className = 'ckgpanel';
                                    if (itemlvl < 6) {
                                        let lockimg2 = document.createElement('img');
                                        lockimg2.src = `./Images/UI/lock.png`;
                                        lockimg2.className = 'courselockimgts';
                                        lockimg2.style.filter = "grayscale(0%)";
                                        panel.appendChild(lockimg2);

                                        let levelicon2 = document.createElement('img');
                                        levelicon2.src = `./Images/UI/6.png`;
                                        levelicon2.className = 'leveliconunlockts';
                                        levelicon2.style.filter = "grayscale(0%)";
                                        levelicon2.id = `inv_levelnumber${t}`;
                                        panel.appendChild(levelicon2);

                                        let lvicon2 = document.createElement('img');
                                        lvicon2.src = './Images/UI/lv.png';
                                        lvicon2.className = 'lviconunlockts';
                                        lvicon2.style.filter = "grayscale(0%)";
                                        panel.appendChild(lvicon2);
                                    } else {
                                        let levelicon = document.createElement('img');
                                        levelicon.src = `./Images/UI/${itemlvl}.png`;
                                        levelicon.className = 'levelicon';
                                        levelicon.id = `coursets_levelnumber${t}`;
                                        panel.appendChild(levelicon);

                                        let lvicon = document.createElement('img');
                                        lvicon.src = './Images/UI/lv.png';
                                        lvicon.className = 'lvicon';
                                        panel.appendChild(lvicon);
                                    }
                                    break;
                                case "3":
                                    break;
                                case "4":
                                    let lockimg3 = document.createElement('img');
                                    lockimg3.src = `./Images/UI/lock.png`;
                                    lockimg3.className = 'courselockimgts';
                                    lockimg3.style.filter = "grayscale(0%)";
                                    panel.appendChild(lockimg3);

                                    let levelicon3 = document.createElement('img');
                                    levelicon3.src = `./Images/UI/3.png`;
                                    levelicon3.className = 'leveliconunlockts';
                                    levelicon3.style.filter = "grayscale(0%)";
                                    levelicon3.id = `inv_levelnumber${t}`;
                                    panel.appendChild(levelicon3);

                                    let lvicon3 = document.createElement('img');
                                    lvicon3.src = './Images/UI/lv.png';
                                    lvicon3.className = 'lviconunlockts';
                                    lvicon3.style.filter = "grayscale(0%)";
                                    panel.appendChild(lvicon3);
                                    break;
                                case "5":
                                    let lockimg4 = document.createElement('img');
                                    lockimg4.src = `./Images/UI/lock.png`;
                                    lockimg4.className = 'courselockimgts';
                                    lockimg4.style.filter = "grayscale(0%)";
                                    panel.appendChild(lockimg4);

                                    let levelicon4 = document.createElement('img');
                                    levelicon4.src = `./Images/UI/6.png`;
                                    levelicon4.className = 'leveliconunlockts';
                                    levelicon4.style.filter = "grayscale(0%)";
                                    levelicon4.id = `inv_levelnumber${t}`;
                                    panel.appendChild(levelicon4);

                                    let lvicon4 = document.createElement('img');
                                    lvicon4.src = './Images/UI/lv.png';
                                    lvicon4.className = 'lviconunlockts';
                                    lvicon4.style.filter = "grayscale(0%)";
                                    panel.appendChild(lvicon4);
                                    break;
                            }
                        }//isdatanetered
                    }
                    if (m == 1) {
                        if (itemlvl != null && isDataEntered) {
                            let levelicon = document.createElement('img');
                            levelicon.src = `./Images/UI/${itemlvl}.png`;
                            levelicon.className = 'levelicon';
                            levelicon.id = `coursets_levelnumber${t}`;
                            panel.appendChild(levelicon);

                            let lvicon = document.createElement('img');
                            lvicon.src = './Images/UI/lv.png';
                            lvicon.className = 'lvicon';
                            panel.appendChild(lvicon);
                        } else {
                            panel.className = 'ckgpaneldisabled';
                        }


                        if (!isDataEntered) {
                            panel.className = 'ckgpanel';
                            switch (topshelvestypes[i]) {
                                case "0":
                                    break;
                                case "1":
                                    let lockimg = document.createElement('img');
                                    lockimg.src = `./Images/UI/lock.png`;
                                    lockimg.className = 'courselockimgts';
                                    lockimg.style.filter = "grayscale(0%)";
                                    panel.appendChild(lockimg);

                                    let levelicon = document.createElement('img');
                                    levelicon.src = `./Images/UI/3.png`;
                                    levelicon.className = 'leveliconunlockts';
                                    levelicon.style.filter = "grayscale(0%)";
                                    levelicon.id = `inv_levelnumber${t}`;
                                    panel.appendChild(levelicon);

                                    let lvicon = document.createElement('img');
                                    lvicon.src = './Images/UI/lv.png';
                                    lvicon.className = 'lviconunlockts';
                                    lvicon.style.filter = "grayscale(0%)";
                                    panel.appendChild(lvicon);
                                    break;
                                case "2":
                                    let lockimg2 = document.createElement('img');
                                    lockimg2.src = `./Images/UI/lock.png`;
                                    lockimg2.className = 'courselockimgts';
                                    lockimg2.style.filter = "grayscale(0%)";
                                    panel.appendChild(lockimg2);

                                    let levelicon2 = document.createElement('img');
                                    levelicon2.src = `./Images/UI/6.png`;
                                    levelicon2.className = 'leveliconunlockts';
                                    levelicon2.style.filter = "grayscale(0%)";
                                    levelicon2.id = `inv_levelnumber${t}`;
                                    panel.appendChild(levelicon2);

                                    let lvicon2 = document.createElement('img');
                                    lvicon2.src = './Images/UI/lv.png';
                                    lvicon2.className = 'lviconunlockts';
                                    lvicon2.style.filter = "grayscale(0%)";
                                    panel.appendChild(lvicon2);
                                    break;
                            }
                        }
                    }

                    if(x == 0 && t == cupBonusId){
                        let cupbonusicon = document.createElement('img');
                        cupbonusicon.src = `./Images/UI/Icon/Arrow2.png`;
                        cupbonusicon.className = 'tour_cupselect_cupbonus';
                        panel.appendChild(cupbonusicon);
                    }

                    if(seasonbonus_course2.includes(parseInt(t)) && i == 1){
                        let cupbonusicon = document.createElement('img');
                        cupbonusicon.src = `./Images/UI/Icon/Arrow2.png`;
                        cupbonusicon.className = 'tour_cupselect_cupbonus';
                        panel.appendChild(cupbonusicon);
                    }

                    if(seasonbonus_course3.includes(parseInt(t))&& i == 2 && !values[t].moreGoodAt.includes(courseforlater)){
                        let cupbonusicon = document.createElement('img');
                        cupbonusicon.src = `./Images/UI/Icon/Arrow2.png`;
                        cupbonusicon.className = 'tour_cupselect_cupbonus';
                        panel.appendChild(cupbonusicon);
                    }

                    topShelfPanel.appendChild(panel);
                });
                switch (m) {
                    case 0:
                        combTS.appendChild(topShelfPanel);
                        break;
                    case 1:
                        combTS2.appendChild(topShelfPanel);
                        break;
                }
            }
            coursePanel.appendChild(combTS);
            coursePanel.appendChild(combTS2);
        }
        output.appendChild(coursePanel);
    });

}