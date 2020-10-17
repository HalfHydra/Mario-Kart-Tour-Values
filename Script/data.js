//DATA
let makeDataFields = ()=>{
    let output = document.getElementById('data');
    characterid.forEach((t,i)=>{
        var field = document.createElement('div');
        field.className = 'datafield';
        field.id = `datafield${t}`;

        var panel = document.createElement('div');
        panel.className = 'datackgpanel';
        panel.id = `invcharpanel${t}`;

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
        //topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + charitem[i] + `.png`;
        charaitem.className = 'itemboxitem';
        panel.appendChild(charaitem);

        let levelicon = document.createElement('img');
        levelicon.src = './Images/UI/0.png';
        levelicon.className = 'levelicon';
        levelicon.id = `data_levelnumber${t}`;
        panel.appendChild(levelicon);

        let lvicon = document.createElement('img');
        lvicon.src = './Images/UI/lv.png';
        lvicon.className = 'lvicon';
        panel.appendChild(lvicon);

        field.appendChild(panel);

        let numbers = document.createElement('div');
        numbers.className = 'numberpanel';

        let itemenabledbox = document.createElement(`input`);
        itemenabledbox.type = "checkbox";
        itemenabledbox.id = `itemenabledbox${t}`;
        itemenabledbox.className = 'itemenabledbox';
        itemenabledbox.addEventListener('click', function() {
            enableItem(t, 1);
        });
        field.appendChild(itemenabledbox);

        for (let k = 0; k < 6; ++k) {
            let levelbtn = document.createElement('div');
            levelbtn.className = "levelbtn";
            levelbtn.addEventListener('click', function() {
                changeLevel(t, k + 1, 1);
            });

            let numberbtn = document.createElement('img');
            numberbtn.className = 'numberbtn';
            numberbtn.id = `datafield${t}num${k + 1}`;
            numberbtn.src = `./Images/UI/emptybtn3.png`;
            //numberbtn.src = `./Images/UI/${k+1}.png`;
            levelbtn.appendChild(numberbtn);

            let numberimg = document.createElement('img');
            numberimg.className = 'numberimg';
            numberimg.src = `./Images/UI/${k + 1}.png`;
            levelbtn.appendChild(numberimg);
            numbers.appendChild(levelbtn);

        }
        field.appendChild(numbers);

        output.appendChild(field);
    }
    );

    let spacer = document.createElement('div');
    output.appendChild(spacer);

    kartid.forEach((t,i)=>{
        var field = document.createElement('div');
        field.className = 'datafield';
        field.id = `datafield${t}`;

        var panel = document.createElement('div');
        panel.className = 'datackgpanel';
        panel.id = `invkartpanel${t}`;

        let bottomimg = document.createElement('img');
        switch (kartrarity[i]) {
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
        newCharacter.className = 'newKart';
        newCharacter.src = `./Images/Kart Icon/${t}.png`;
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
        //topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + kartitem[i] + `.png`;
        charaitem.className = 'bonuspointtype';
        panel.appendChild(charaitem);

        let levelicon = document.createElement('img');
        levelicon.src = './Images/UI/0.png';
        levelicon.className = 'levelicon';
        levelicon.id = `data_levelnumber${t}`;
        panel.appendChild(levelicon);

        let lvicon = document.createElement('img');
        lvicon.src = './Images/UI/lv.png';
        lvicon.className = 'lvicon';
        panel.appendChild(lvicon);

        field.appendChild(panel);

        let numbers = document.createElement('div');
        numbers.className = 'numberpanel';

        let itemenabledbox = document.createElement(`input`);
        itemenabledbox.type = "checkbox";
        itemenabledbox.id = `itemenabledbox${t}`;
        itemenabledbox.className = 'itemenabledbox';
        itemenabledbox.addEventListener('click', function() {
            enableItem(t, 2);
        });
        field.appendChild(itemenabledbox);

        for (let k = 0; k < 6; ++k) {
            let levelbtn = document.createElement('div');
            levelbtn.className = "levelbtn";
            levelbtn.addEventListener('click', function() {
                changeLevel(t, k + 1, 2);
            });

            let numberbtn = document.createElement('img');
            numberbtn.className = 'numberbtn';
            numberbtn.id = `datafield${t}num${k + 1}`;
            numberbtn.src = `./Images/UI/emptybtn3.png`;
            //numberbtn.src = `./Images/UI/${k+1}.png`;
            levelbtn.appendChild(numberbtn);

            let numberimg = document.createElement('img');
            numberimg.className = 'numberimg';
            numberimg.src = `./Images/UI/${k + 1}.png`;
            levelbtn.appendChild(numberimg);
            numbers.appendChild(levelbtn);

        }
        field.appendChild(numbers);

        output.appendChild(field);
    }
    );

    let spacer2 = document.createElement('div');
    output.appendChild(spacer2);

    gliderid.forEach((t,i)=>{
        var field = document.createElement('div');
        field.className = 'datafield';
        field.id = `datafield${t}`;

        var panel = document.createElement('div');
        panel.className = 'datackgpanel';
        panel.id = `invgliderpanel${t}`;

        let bottomimg = document.createElement('img');
        switch (gliderrarity[i]) {
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
        newCharacter.className = 'newGlider';
        newCharacter.src = `./Images/Glider Icon/${t}.png`;
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
        //topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + glideritem[i] + `.png`;
        charaitem.className = 'bonuspointtype';
        panel.appendChild(charaitem);

        let levelicon = document.createElement('img');
        levelicon.src = './Images/UI/0.png';
        levelicon.className = 'levelicon';
        levelicon.id = `data_levelnumber${t}`;
        panel.appendChild(levelicon);

        let lvicon = document.createElement('img');
        lvicon.src = './Images/UI/lv.png';
        lvicon.className = 'lvicon';
        panel.appendChild(lvicon);

        field.appendChild(panel);

        let numbers = document.createElement('div');
        numbers.className = 'numberpanel';

        let itemenabledbox = document.createElement(`input`);
        itemenabledbox.type = "checkbox";
        itemenabledbox.id = `itemenabledbox${t}`;
        itemenabledbox.className = 'itemenabledbox';
        itemenabledbox.addEventListener('click', function() {
            enableItem(t, 3);
        });
        field.appendChild(itemenabledbox);

        for (let k = 0; k < 6; ++k) {
            let levelbtn = document.createElement('div');
            levelbtn.className = "levelbtn";
            levelbtn.addEventListener('click', function() {
                changeLevel(t, k + 1, 3);
            });

            let numberbtn = document.createElement('img');
            numberbtn.className = 'numberbtn';
            numberbtn.id = `datafield${t}num${k + 1}`;
            numberbtn.src = `./Images/UI/emptybtn3.png`;
            //numberbtn.src = `./Images/UI/${k+1}.png`;
            levelbtn.appendChild(numberbtn);

            let numberimg = document.createElement('img');
            numberimg.className = 'numberimg';
            numberimg.src = `./Images/UI/${k + 1}.png`;
            levelbtn.appendChild(numberimg);
            numbers.appendChild(levelbtn);

        }
        field.appendChild(numbers);

        output.appendChild(field);
    }
    );
}

var enableditems = [];
function enableItem(item, type) {
    if(!isDataEntered){
        isDataEntered = true;
    }
    switch (type) {
    case 1:
        if (document.getElementById(`itemenabledbox${item}`).checked) {
            enableditems.push(item);
            document.getElementById(`invcharpanel${item}`).className = "datackgpanelenabled"
            document.getElementById(`datafield${item}num1`).className = 'numberbtnselected';
            document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/1.png";
            savedata.Items.Drivers[item] = '1';
        } else {
            enableditems.splice(enableditems.indexOf(item), 1);
            document.getElementById(`invcharpanel${item}`).className = "datackgpanel"
            document.getElementById(`datafield${item}num1`).className = 'numberbtn';
            document.getElementById(`datafield${item}num2`).className = 'numberbtn';
            document.getElementById(`datafield${item}num3`).className = 'numberbtn';
            document.getElementById(`datafield${item}num4`).className = 'numberbtn';
            document.getElementById(`datafield${item}num5`).className = 'numberbtn';
            document.getElementById(`datafield${item}num6`).className = 'numberbtn';
            delete savedata.Items.Drivers[item];
            document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/0.png";
        }
        break;
    case 2:
        if (document.getElementById(`itemenabledbox${item}`).checked) {
            enableditems.push(item);
            document.getElementById(`invkartpanel${item}`).className = "datackgpanelenabled"
            document.getElementById(`datafield${item}num1`).className = 'numberbtnselected';
            document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/1.png";
            savedata.Items.Karts[item] = '1';
        } else {
            enableditems.splice(enableditems.indexOf(item), 1);
            document.getElementById(`invkartpanel${item}`).className = "datackgpanel"
            document.getElementById(`datafield${item}num1`).className = 'numberbtn';
            document.getElementById(`datafield${item}num2`).className = 'numberbtn';
            document.getElementById(`datafield${item}num3`).className = 'numberbtn';
            document.getElementById(`datafield${item}num4`).className = 'numberbtn';
            document.getElementById(`datafield${item}num5`).className = 'numberbtn';
            document.getElementById(`datafield${item}num6`).className = 'numberbtn';
            delete savedata.Items.Karts[item];
            document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/0.png";
        }
        break;
    case 3:
        if (document.getElementById(`itemenabledbox${item}`).checked) {
            enableditems.push(item);
            document.getElementById(`invgliderpanel${item}`).className = "datackgpanelenabled"
            document.getElementById(`datafield${item}num1`).className = 'numberbtnselected';
            document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/1.png";
            savedata.Items.Gliders[item] = '1';
        } else {
            enableditems.splice(enableditems.indexOf(item), 1);
            document.getElementById(`invgliderpanel${item}`).className = "datackgpanel"
            document.getElementById(`datafield${item}num1`).className = 'numberbtn';
            document.getElementById(`datafield${item}num2`).className = 'numberbtn';
            document.getElementById(`datafield${item}num3`).className = 'numberbtn';
            document.getElementById(`datafield${item}num4`).className = 'numberbtn';
            document.getElementById(`datafield${item}num5`).className = 'numberbtn';
            document.getElementById(`datafield${item}num6`).className = 'numberbtn';
            delete savedata.Items.Gliders[item];
            document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/0.png";
        }
        break;
    }
}

function changeLevel(item, level, type) {
    if(!isDataEntered){
        isDataEntered = true;
    }
    switch (type) {
    case 1:
        document.getElementById(`invcharpanel${item}`).className = "datackgpanelenabled"
        break
    case 2:
        document.getElementById(`invkartpanel${item}`).className = "datackgpanelenabled"
        break;
    case 3:
        document.getElementById(`invgliderpanel${item}`).className = "datackgpanelenabled"
        break;
    }
    document.getElementById(`itemenabledbox${item}`).checked = true;
    switch (level) {
    case 1:
        document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/1.png";
        document.getElementById(`datafield${item}num1`).className = 'numberbtnselected';
        document.getElementById(`datafield${item}num2`).className = 'numberbtn';
        document.getElementById(`datafield${item}num3`).className = 'numberbtn';
        document.getElementById(`datafield${item}num4`).className = 'numberbtn';
        document.getElementById(`datafield${item}num5`).className = 'numberbtn';
        document.getElementById(`datafield${item}num6`).className = 'numberbtn';
        switch (type) {
        case 1:
            savedata.Items.Drivers[item] = '1';
            break;
        case 2:
            savedata.Items.Karts[item] = '1';
            break;
        case 3:
            savedata.Items.Gliders[item] = '1';
            break;
        }
        break;
    case 2:
        document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/2.png";
        document.getElementById(`datafield${item}num1`).className = 'numberbtn';
        document.getElementById(`datafield${item}num2`).className = 'numberbtnselected';
        document.getElementById(`datafield${item}num3`).className = 'numberbtn';
        document.getElementById(`datafield${item}num4`).className = 'numberbtn';
        document.getElementById(`datafield${item}num5`).className = 'numberbtn';
        document.getElementById(`datafield${item}num6`).className = 'numberbtn';
        switch (type) {
        case 1:
            savedata.Items.Drivers[item] = '2';
            break;
        case 2:
            savedata.Items.Karts[item] = '2';
            break;
        case 3:
            savedata.Items.Gliders[item] = '2';
            break;
        }
        break;
    case 3:
        document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/3.png";
        document.getElementById(`datafield${item}num1`).className = 'numberbtn';
        document.getElementById(`datafield${item}num2`).className = 'numberbtn';
        document.getElementById(`datafield${item}num3`).className = 'numberbtnselected';
        document.getElementById(`datafield${item}num4`).className = 'numberbtn';
        document.getElementById(`datafield${item}num5`).className = 'numberbtn';
        document.getElementById(`datafield${item}num6`).className = 'numberbtn';
        switch (type) {
        case 1:
            savedata.Items.Drivers[item] = '3';
            break;
        case 2:
            savedata.Items.Karts[item] = '3';
            break;
        case 3:
            savedata.Items.Gliders[item] = '3';
            break;
        }
        break;
    case 4:
        document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/4.png";
        document.getElementById(`datafield${item}num1`).className = 'numberbtn';
        document.getElementById(`datafield${item}num2`).className = 'numberbtn';
        document.getElementById(`datafield${item}num3`).className = 'numberbtn';
        document.getElementById(`datafield${item}num4`).className = 'numberbtnselected';
        document.getElementById(`datafield${item}num5`).className = 'numberbtn';
        document.getElementById(`datafield${item}num6`).className = 'numberbtn';
        switch (type) {
        case 1:
            savedata.Items.Drivers[item] = '4';
            break;
        case 2:
            savedata.Items.Karts[item] = '4';
            break;
        case 3:
            savedata.Items.Gliders[item] = '4';
            break;
        }
        break;
    case 5:
        document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/5.png";
        document.getElementById(`datafield${item}num1`).className = 'numberbtn';
        document.getElementById(`datafield${item}num2`).className = 'numberbtn';
        document.getElementById(`datafield${item}num3`).className = 'numberbtn';
        document.getElementById(`datafield${item}num4`).className = 'numberbtn';
        document.getElementById(`datafield${item}num5`).className = 'numberbtnselected';
        document.getElementById(`datafield${item}num6`).className = 'numberbtn';
        switch (type) {
        case 1:
            savedata.Items.Drivers[item] = '5';
            break;
        case 2:
            savedata.Items.Karts[item] = '5';
            break;
        case 3:
            savedata.Items.Gliders[item] = '5';
            break;
        }
        break;
    case 6:
        document.getElementById(`data_levelnumber${item}`).src = "./Images/UI/6.png";
        document.getElementById(`datafield${item}num1`).className = 'numberbtn';
        document.getElementById(`datafield${item}num2`).className = 'numberbtn';
        document.getElementById(`datafield${item}num3`).className = 'numberbtn';
        document.getElementById(`datafield${item}num4`).className = 'numberbtn';
        document.getElementById(`datafield${item}num5`).className = 'numberbtn';
        document.getElementById(`datafield${item}num6`).className = 'numberbtnselected';
        switch (type) {
        case 1:
            savedata.Items.Drivers[item] = '6';
            break;
        case 2:
            savedata.Items.Karts[item] = '6';
            break;
        case 3:
            savedata.Items.Gliders[item] = '6';
            break;
        }
        break;
    }
}

function downloadsavedata(data) {
    var data = JSON.stringify(savedata, null, 2);
    var filename = "MKTValuesSave.json";
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

document.getElementById('inputsavedata').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function() {
        savedata = JSON.parse(this.result);
        document.getElementById('json').innerHTML = JSON.stringify(savedata, null, 2);
        makeCourseList();
        courseListMade = true;
        calcMissingValues();
        isDataEntered = true;

        let savedrivers = [];
        savedrivers = Object.keys(savedata.Items.Drivers);
        let savedriverslvl = [];
        savedriverslvl = Object.values(savedata.Items.Drivers);
        savedrivers.forEach((t,i)=>{
            changeLevel(t, parseInt(savedriverslvl[i]), 1);
        }
        );

        let savekarts = [];
        savekarts = Object.keys(savedata.Items.Karts);
        let savekartslvl = [];
        savekartslvl = Object.values(savedata.Items.Karts);
        savekarts.forEach((t,i)=>{
            changeLevel(t, parseInt(savekartslvl[i]), 2);
        }
        );

        let savegliders = [];
        savegliders = Object.keys(savedata.Items.Gliders);
        let savegliderslvl = [];
        savegliderslvl = Object.values(savedata.Items.Gliders);
        savegliders.forEach((t,i)=>{
            changeLevel(t, parseInt(savegliderslvl[i]), 3);
        }
        );

        resettingCourses = true;
        

    }
    reader.readAsText(this.files[0]);

});
