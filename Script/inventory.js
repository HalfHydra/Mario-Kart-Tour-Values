//INVENTORY
let makeCharacters = ()=>{
    document.getElementById('inventorychar').innerHTML = "";
    //document.getElementById('inventoryshelves').innerHTML = "";
    let output = document.getElementById('inventorychar');
    characterid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `invcharpanel${t}`;
        panel.addEventListener('click', function() {
            invCharacter(characterid[i], i);
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

function invCharacter(selected, i) {
    let item = selected;

    if(isMultipleShelves){
    if (!viewshelvechar.includes(item)) {
        viewshelvechar.push(item);
        document.getElementById(`invtopimgselected${selected}`).className = `invtopimgselected`;
        let moreGoodAt = values[item].moreGoodAt;
        let goodAt = values[item].goodAt;
        let unlock3 = values[item].unlock3;
        let unlock6 = values[item].unlock6;
        console.log(moreGoodAt);
        console.log(goodAt);
        console.log(unlock3);
        console.log(unlock6);
        //values.selected.goodAt
        let output = document.getElementById('inventoryshelves');
        var shelfpanel = document.createElement('div');
        shelfpanel.className = 'shelfpanel stripedbg';
        shelfpanel.id = `shelfpanel${selected}`

        var namepanel = document.createElement('div');
        namepanel.className = 'namepanel';
        shelfpanel.appendChild(namepanel);

        let toptext = document.createElement('p');
        toptext.innerHTML = values[item].nameEng;
        toptext.className = 'toptext';
        switch (selected) {
        case '115':
            toptext.style.fontSize = "14px";
            break;
        case '126':
            toptext.style.fontSize = "16px";
            break;
        case '131':
            toptext.style.fontSize = "13.5px";
            break;
        case '178':
            toptext.style.fontSize = "15px";
            break;
        }
        namepanel.appendChild(toptext);

        let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtn';
        xbtn.addEventListener('click', function() {
            removeShelfPanel(item);
            viewshelvechar.splice(viewshelvechar.indexOf(item), 1);
            document.getElementById(`invtopimgselected${selected}`).className = `topimg`;
        });
        namepanel.appendChild(xbtn);

        let characterpanel = document.createElement('div');
        characterpanel.className = 'characterpanel';

        let rarityimage = document.createElement('img');
        switch (charrarity[characterid.indexOf(item)]) {
        case "1":
            rarityimage.src = `./Images/UI/invnormal.png`;
            break;
        case "2":
            rarityimage.src = `./Images/UI/invrare.png`;
            break;
        case "3":
            rarityimage.src = `./Images/UI/invhighend.png`;
            break;
        }
        rarityimage.className = 'rarityimg';

        var panel = document.createElement('div');
        panel.className = 'ckgpanel2';
        let bottomimg = document.createElement('img');
        switch (charrarity[characterid.indexOf(item)]) {
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
        bottomimg.className = 'bottomimg'
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newCharacter';
        newCharacter.src = `./Images/Character Icon/` + item + `.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (charrarity[characterid.indexOf(item)]) {
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
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + charitem[characterid.indexOf(item)] + `.png`;
        charaitem.className = 'itemboxitem';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Drivers[item];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `shelf_levelnumber${item}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }

        characterpanel.appendChild(panel);
        characterpanel.appendChild(rarityimage);

        let valuecount = 0;
        if (disableCityValue == true) {
            moreGoodAt.forEach((coursekey,i)=>{
                if (!moreGoodAt[i].includes('New_')) {
                    valuecount++;
                }
            }
            );
        } else {
            valuecount = moreGoodAt.length;
        }

        var valuecounttxt = document.createElement('p');
        valuecounttxt.className = "valuecounttxt";
        valuecounttxt.innerHTML = valuecount;
        characterpanel.appendChild(valuecounttxt);

        //comment this for no charcater image
        if(!disableCharPanel){
        shelfpanel.appendChild(characterpanel);
        } else {
        var minivaluecounttxt = document.createElement('p');
        minivaluecounttxt.className = "minivaluecounttxt";
        minivaluecounttxt.innerHTML = valuecount;
        namepanel.appendChild(minivaluecounttxt);
        }

        let whitebar3item = document.createElement('img');
        whitebar3item.src = `./Images/UI/3itemsbar.png`;
        whitebar3item.className = 'whitebar3item';
        shelfpanel.appendChild(whitebar3item);

        var moreGoodAtPanel = document.createElement('div');
        moreGoodAtPanel.className = 'goodAtPanel';

        moreGoodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanel';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxt';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            moreGoodAtPanel.appendChild(coursePanel);
        }
        );

        let whitebar2item = document.createElement('img');
        whitebar2item.src = `./Images/UI/2itemsbar.png`;
        whitebar2item.className = 'whitebar2item';

        var goodAtPanel = document.createElement('div');
        goodAtPanel.className = 'goodAtPanel';

        goodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanel';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg'
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxt';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            goodAtPanel.appendChild(coursePanel);
        }
        );

        shelfpanel.appendChild(moreGoodAtPanel);
        shelfpanel.appendChild(whitebar2item);
        shelfpanel.appendChild(goodAtPanel);

        output.appendChild(shelfpanel);

    } else {
        removeShelfPanel(item);
        viewshelvechar.splice(viewshelvechar.indexOf(item), 1);
        document.getElementById(`invtopimgselected${selected}`).className = `topimg`;
    }
}//if
else {
    removefrom2ndshelf = [];
    inventorymodal.style.display = "block";
    inventorymodal.scrollTo(0, 0);
    let moreGoodAt = values[item].moreGoodAt;
        let goodAt = values[item].goodAt;
        let unlock3 = values[item].unlock3;
        let unlock6 = values[item].unlock6;
        console.log(moreGoodAt);
        console.log(goodAt);
        console.log(unlock3);
        console.log(unlock6);
        //values.selected.goodAt
        //let output = document.getElementById('inventorymodal');
        //var shelfpanel = document.createElement('div');
        //shelfpanel.className = 'shelfpanel stripedbg';
        //shelfpanel.id = `shelfpanel${selected}`
        var shelfpanel = document.getElementById('singleinv');

        var namepanel = document.createElement('div');
        namepanel.className = 'namepanel';
        shelfpanel.appendChild(namepanel);

        let toptext = document.createElement('p');
        toptext.innerHTML = values[item].nameEng;
        toptext.className = 'toptext';
        namepanel.appendChild(toptext);

        let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtn';
        xbtn.addEventListener('click', function() {
            hideModal();
        });
        shelfpanel.appendChild(xbtn);

        let characterpanel = document.createElement('div');
        characterpanel.className = 'characterpanel';

        let rarityimage = document.createElement('img');
        switch (charrarity[characterid.indexOf(item)]) {
        case "1":
            rarityimage.src = `./Images/UI/invnormal.png`;
            break;
        case "2":
            rarityimage.src = `./Images/UI/invrare.png`;
            break;
        case "3":
            rarityimage.src = `./Images/UI/invhighend.png`;
            break;
        }
        rarityimage.className = 'rarityimgmodal';

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newCharacterModal';
        newCharacter.src = `./Images/Full Icon/Character/` + item + `.png`;
        characterpanel.appendChild(newCharacter);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + charitem[characterid.indexOf(item)] + `.png`;

        let levelpanel = document.createElement('div');
        levelpanel.className = ('levelmodalpanel');

        let itemlvl = savedata.Items.Drivers[item];
        if(itemlvl == 6){
            levelpanel.className = ('levelmodalpanelmax');
        }
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'leveliconmodal';
            levelicon.id = `shelf_levelnumber${item}`;
            levelpanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconmodal';
            levelpanel.appendChild(lvicon);
        }
        characterpanel.appendChild(levelpanel);
        characterpanel.appendChild(rarityimage);

        if(charrarity[characterid.indexOf(item)] == 2 && parseInt(itemlvl) > 4 ){
        charaitem.className = 'itemboxitemmodalplus';
        } else if(charrarity[characterid.indexOf(item)] == 3 && parseInt(itemlvl) > 3){
        charaitem.className = 'itemboxitemmodalplus';
        } else {
        charaitem.className = 'itemboxitemmodal';  
        }
        characterpanel.appendChild(charaitem);

        let valuecount = 0;
        if (disableCityValue == true) {
            moreGoodAt.forEach((coursekey,i)=>{
                if (!moreGoodAt[i].includes('New_')) {
                    valuecount++;
                }
            }
            );
        } else {
            valuecount = moreGoodAt.length;
        }

        var valuecounttxt = document.createElement('p');
        valuecounttxt.className = "valuecounttxtmodal";
        valuecounttxt.innerHTML = valuecount;
        characterpanel.appendChild(valuecounttxt);

        var valuecounttxtfooter = document.createElement('p');
        valuecounttxtfooter.className = "valuecounttxtfooter";
        valuecounttxtfooter.innerHTML = "Values";
        characterpanel.appendChild(valuecounttxtfooter);

        //comment this for no charcater image
        if(!disableCharPanel){
        shelfpanel.appendChild(characterpanel);
        } else {
        var minivaluecounttxt = document.createElement('p');
        minivaluecounttxt.className = "minivaluecounttxt";
        minivaluecounttxt.innerHTML = valuecount;
        namepanel.appendChild(minivaluecounttxt);
        }

        let whitebar3item = document.createElement('img');
        whitebar3item.src = `./Images/UI/3itemsbar.png`;
        whitebar3item.className = 'whitebar3item';
        shelfpanel.appendChild(whitebar3item);

        var moreGoodAtPanel = document.createElement('div');
        moreGoodAtPanel.className = 'goodAtPanel';

        moreGoodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtmodal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            moreGoodAtPanel.appendChild(coursePanel);
        }
        );

        unlock3.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            if(isDataEntered && savedata.Items.Drivers[item] == null || isDataEntered && savedata.Items.Drivers[item] < 3 || !isDataEntered){
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimgunlock3';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            let lockimg = document.createElement('img');
            lockimg.src = `./Images/UI/lock.png`;
            lockimg.className = 'courselockimg';
            coursePanel.appendChild(lockimg);

            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/3.png`;
            levelicon.className = 'leveliconunlock';
            levelicon.id = `inv_levelnumber${t}`;
            coursePanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconunlock';
            coursePanel.appendChild(lvicon);
            } else {
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            removefrom2ndshelf.push(t); 
            }

            moreGoodAtPanel.appendChild(coursePanel);
        });

        unlock6.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            if(isDataEntered && savedata.Items.Drivers[item] == null || isDataEntered && savedata.Items.Drivers[item] < 6 || !isDataEntered){
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimgunlock3';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            let lockimg = document.createElement('img');
            lockimg.src = `./Images/UI/lock.png`;
            lockimg.className = 'courselockimg';
            coursePanel.appendChild(lockimg);

            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/6.png`;
            levelicon.className = 'leveliconunlock';
            levelicon.id = `inv_levelnumber${t}`;
            coursePanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconunlock';
            coursePanel.appendChild(lvicon);
            } else {
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            removefrom2ndshelf.push(t); 
            }

            moreGoodAtPanel.appendChild(coursePanel);
        });

        valuecount += removefrom2ndshelf.length;
        valuecounttxt.innerHTML = valuecount;

        let whitebar2item = document.createElement('img');
        whitebar2item.src = `./Images/UI/2itemsbar.png`;
        whitebar2item.className = 'whitebar2item';

        var goodAtPanel = document.createElement('div');
        goodAtPanel.className = 'goodAtPanel';

        goodAt.forEach((t,i)=>{
            if(!removefrom2ndshelf.includes(t)){
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg'
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtmodal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            goodAtPanel.appendChild(coursePanel);
            }
        }
        );

        shelfpanel.appendChild(moreGoodAtPanel);
        shelfpanel.appendChild(whitebar2item);
        shelfpanel.appendChild(goodAtPanel);

}

}

let makeKarts = ()=>{
    document.getElementById('inventorykart').innerHTML = "";
    //document.getElementById('inventoryshelves').innerHTML = "";
    let output = document.getElementById('inventorykart');
    kartid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `invkartpanel${t}`;
        panel.addEventListener('click', function() {
            invKart(kartid[i], i);
        });

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
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + kartitem[i] + `.png`;
        charaitem.className = 'bonuspointtype';
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

        let savekarts = [];
        savekarts = Object.keys(savedata.Items.Karts);
        if(savekarts.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
        //output.appendChild(panel);
    }
    );
}

function invKart(selected, i) {
    let item = selected;

    if(isMultipleShelves){
    if (!viewshelvechar.includes(item)) {
        viewshelvechar.push(item);
        document.getElementById(`invtopimgselected${selected}`).className = `invtopimgselected`;
        let moreGoodAt = values[item].moreGoodAt;
        let goodAt = values[item].goodAt;
        let unlock3 = values[item].unlock3;
        let unlock6 = values[item].unlock6;
        console.log(moreGoodAt);
        console.log(goodAt);
        console.log(unlock3);
        console.log(unlock6);
        //values.selected.goodAt
        let output = document.getElementById('inventoryshelves');
        var shelfpanel = document.createElement('div');
        shelfpanel.className = 'shelfpanel';
        shelfpanel.id = `shelfpanel${selected}`

        var namepanel = document.createElement('div');
        namepanel.className = 'namepanel';
        shelfpanel.appendChild(namepanel);

        let toptext = document.createElement('p');
        toptext.innerHTML = values[item].nameEng;
        toptext.className = 'toptext';
        switch (selected) {
        case '115':
            toptext.style.fontSize = "14px";
            break;
        case '126':
            toptext.style.fontSize = "16px";
            break;
        case '131':
            toptext.style.fontSize = "13.5px";
            break;
        case '178':
            toptext.style.fontSize = "15px";
            break;
        }
        namepanel.appendChild(toptext);

        let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtn';
        xbtn.addEventListener('click', function() {
            removeShelfPanel(item);
            viewshelvechar.splice(viewshelvechar.indexOf(item), 1);
            document.getElementById(`invtopimgselected${selected}`).className = `topimg`;
        });
        namepanel.appendChild(xbtn);

        let characterpanel = document.createElement('div');
        characterpanel.className = 'characterpanel';

        let rarityimage = document.createElement('img');
        switch (kartrarity[kartid.indexOf(item)]) {
        case "1":
            rarityimage.src = `./Images/UI/invnormalkg.png`;
            break;
        case "2":
            rarityimage.src = `./Images/UI/invrarekg.png`;
            break;
        case "3":
            rarityimage.src = `./Images/UI/invhighendkg.png`;
            break;
        }
        rarityimage.className = 'rarityimg';

        var panel = document.createElement('div');
        panel.className = 'ckgpanel2';
        let bottomimg = document.createElement('img');
        switch (kartrarity[kartid.indexOf(item)]) {
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
        bottomimg.className = 'bottomimg'
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newKart';
        newCharacter.src = `./Images/Kart Icon/${item}.png`;
        panel.appendChild(newCharacter);

        let topimg = document.createElement('img');
        switch (kartrarity[kartid.indexOf(item)]) {
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
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + kartitem[i] + `.png`;
        charaitem.className = 'bonuspointtype';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Karts[item];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `shelf_levelnumber${item}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }

        characterpanel.appendChild(panel);
        characterpanel.appendChild(rarityimage);

        let valuecount = 0;
        if (disableCityValue == true) {
            moreGoodAt.forEach((coursekey,i)=>{
                if (!moreGoodAt[i].includes('New_')) {
                    valuecount++;
                }
            }
            );
        } else {
            valuecount = moreGoodAt.length;
        }

        var valuecounttxt = document.createElement('p');
        valuecounttxt.className = "valuecounttxt";
        valuecounttxt.innerHTML = valuecount;
        characterpanel.appendChild(valuecounttxt);

        //comment this for no charcater image
        if(!disableCharPanel){
        shelfpanel.appendChild(characterpanel);
        } else {
        var minivaluecounttxt = document.createElement('p');
        minivaluecounttxt.className = "minivaluecounttxt";
        minivaluecounttxt.innerHTML = valuecount;
        namepanel.appendChild(minivaluecounttxt);
        }

        let whitebar3item = document.createElement('img');
        whitebar3item.src = `./Images/UI/bonuspoints2x.png`;
        whitebar3item.className = 'whitebar3item';
        shelfpanel.appendChild(whitebar3item);

        var moreGoodAtPanel = document.createElement('div');
        moreGoodAtPanel.className = 'goodAtPanel';

        moreGoodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanel';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxt';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            moreGoodAtPanel.appendChild(coursePanel);
        }
        );

        let whitebar2item = document.createElement('img');
        whitebar2item.src = `./Images/UI/bonuspoints1.5x.png`;
        whitebar2item.className = 'whitebar2item';

        var goodAtPanel = document.createElement('div');
        goodAtPanel.className = 'goodAtPanel';

        goodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanel';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg'
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxt';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            goodAtPanel.appendChild(coursePanel);
        }
        );

        shelfpanel.appendChild(moreGoodAtPanel);
        shelfpanel.appendChild(whitebar2item);
        shelfpanel.appendChild(goodAtPanel);

        output.appendChild(shelfpanel);

    } else {
        removeShelfPanel(item);
        viewshelvechar.splice(viewshelvechar.indexOf(item), 1);
        document.getElementById(`invtopimgselected${selected}`).className = `topimg`;
    }
}//if
else {
    removefrom2ndshelf = [];
    inventorymodal.style.display = "block";
    inventorymodal.scrollTo(0, 0);
    let moreGoodAt = values[item].moreGoodAt;
        let goodAt = values[item].goodAt;
        let unlock3 = values[item].unlock3;
        let unlock6 = values[item].unlock6;
        console.log(moreGoodAt);
        console.log(goodAt);
        console.log(unlock3);
        console.log(unlock6);
        //values.selected.goodAt
        //let output = document.getElementById('inventorymodal');
        //var shelfpanel = document.createElement('div');
        //shelfpanel.className = 'shelfpanel stripedbg';
        //shelfpanel.id = `shelfpanel${selected}`
        var shelfpanel = document.getElementById('singleinv');

        var namepanel = document.createElement('div');
        namepanel.className = 'namepanel';
        shelfpanel.appendChild(namepanel);

        let toptext = document.createElement('p');
        toptext.innerHTML = values[item].nameEng;
        toptext.className = 'toptext';
        namepanel.appendChild(toptext);

        let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtn';
        xbtn.addEventListener('click', function() {
            hideModal();
        });
        shelfpanel.appendChild(xbtn);

        let characterpanel = document.createElement('div');
        characterpanel.className = 'characterpanel';

        let rarityimage = document.createElement('img');
        switch (kartrarity[kartid.indexOf(item)]) {
        case "1":
            rarityimage.src = `./Images/UI/invnormalkg.png`;
            break;
        case "2":
            rarityimage.src = `./Images/UI/invrarekg.png`;
            break;
        case "3":
            rarityimage.src = `./Images/UI/invhighendkg.png`;
            break;
        }
        rarityimage.className = 'rarityimgmodal';

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newKartModal';
        newCharacter.src = `./Images/Kart Icon/` + item + `.png`;
        characterpanel.appendChild(newCharacter);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + kartitem[kartid.indexOf(item)] + `.png`;
        charaitem.className = 'itemboxitemmodal';
        characterpanel.appendChild(charaitem);

        let levelpanel = document.createElement('div');
        levelpanel.className = ('levelmodalpanel');

        let itemlvl = savedata.Items.Karts[item];
        if(itemlvl == 6){
            levelpanel.className = ('levelmodalpanelmax');
        }
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'leveliconmodal';
            levelicon.id = `shelf_levelnumber${item}`;
            levelpanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconmodal';
            levelpanel.appendChild(lvicon);
        }
        characterpanel.appendChild(levelpanel);
        characterpanel.appendChild(rarityimage);

        let valuecount = 0;
        if (disableCityValue == true) {
            moreGoodAt.forEach((coursekey,i)=>{
                if (!moreGoodAt[i].includes('New_')) {
                    valuecount++;
                }
            }
            );
        } else {
            valuecount = moreGoodAt.length;
        }

        var valuecounttxt = document.createElement('p');
        valuecounttxt.className = "valuecounttxtmodal";
        valuecounttxt.innerHTML = valuecount;
        characterpanel.appendChild(valuecounttxt);

        //comment this for no charcater image
        if(!disableCharPanel){
        shelfpanel.appendChild(characterpanel);
        } else {
        var minivaluecounttxt = document.createElement('p');
        minivaluecounttxt.className = "minivaluecounttxt";
        minivaluecounttxt.innerHTML = valuecount;
        namepanel.appendChild(minivaluecounttxt);
        }

        let whitebar3item = document.createElement('img');
        whitebar3item.src = `./Images/UI/3itemsbar.png`;
        whitebar3item.className = 'whitebar3item';
        shelfpanel.appendChild(whitebar3item);

        var moreGoodAtPanel = document.createElement('div');
        moreGoodAtPanel.className = 'goodAtPanel';

        moreGoodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtmodal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            moreGoodAtPanel.appendChild(coursePanel);
        }
        );

        unlock3.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            if(isDataEntered && savedata.Items.Karts[item] == null || isDataEntered && savedata.Items.Karts[item] < 3 || !isDataEntered){
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimgunlock3';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            let lockimg = document.createElement('img');
            lockimg.src = `./Images/UI/lock.png`;
            lockimg.className = 'courselockimg';
            coursePanel.appendChild(lockimg);

            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/3.png`;
            levelicon.className = 'leveliconunlock';
            levelicon.id = `inv_levelnumber${t}`;
            coursePanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconunlock';
            coursePanel.appendChild(lvicon);
            } else {
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            removefrom2ndshelf.push(t); 
            }

            moreGoodAtPanel.appendChild(coursePanel);
        });

        unlock6.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            if(isDataEntered && savedata.Items.Karts[item] == null || isDataEntered && savedata.Items.Karts[item] < 6 || !isDataEntered){
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimgunlock3';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            let lockimg = document.createElement('img');
            lockimg.src = `./Images/UI/lock.png`;
            lockimg.className = 'courselockimg';
            coursePanel.appendChild(lockimg);

            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/6.png`;
            levelicon.className = 'leveliconunlock';
            levelicon.id = `inv_levelnumber${t}`;
            coursePanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconunlock';
            coursePanel.appendChild(lvicon);
            } else {
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            removefrom2ndshelf.push(t); 
            }

            moreGoodAtPanel.appendChild(coursePanel);
        });

        valuecount += removefrom2ndshelf.length;
        valuecounttxt.innerHTML = valuecount;

        let whitebar2item = document.createElement('img');
        whitebar2item.src = `./Images/UI/2itemsbar.png`;
        whitebar2item.className = 'whitebar2item';

        var goodAtPanel = document.createElement('div');
        goodAtPanel.className = 'goodAtPanel';

        goodAt.forEach((t,i)=>{
            if(!removefrom2ndshelf.includes(t)){
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg'
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtmodal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            goodAtPanel.appendChild(coursePanel);
            }
        }
        );

        shelfpanel.appendChild(moreGoodAtPanel);
        shelfpanel.appendChild(whitebar2item);
        shelfpanel.appendChild(goodAtPanel);

}

}

let makeGliders = ()=>{
    document.getElementById('inventoryglider').innerHTML = "";
    //document.getElementById('inventoryshelves').innerHTML = "";
    let output = document.getElementById('inventoryglider');
    gliderid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `invgliderpanel${t}`;
        panel.addEventListener('click', function() {
            invGlider(gliderid[i], i);
        });

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
        if (viewshelvechar.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `invtopimgselected${t}`;
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + glideritem[i] + `.png`;
        charaitem.className = 'bonuspointtype';
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

        let savegliders = [];
        savegliders = Object.keys(savedata.Items.Gliders);
        if(savegliders.includes(t) && isDataEntered){
        output.appendChild(panel);
       } else if(onlyOwnedItemsInv == false){
        output.appendChild(panel);
       }
        //output.appendChild(panel);
    }
    );
}

function invGlider(selected, i) {
    let item = selected;

    if(isMultipleShelves){
    if (!viewshelvechar.includes(item)) {
        viewshelvechar.push(item);
        document.getElementById(`invtopimgselected${selected}`).className = `invtopimgselected`;
        let moreGoodAt = values[item].moreGoodAt;
        let goodAt = values[item].goodAt;
        console.log(moreGoodAt);
        console.log(goodAt);
        //values.selected.goodAt
        let output = document.getElementById('inventoryshelves');
        var shelfpanel = document.createElement('div');
        shelfpanel.className = 'shelfpanel';
        shelfpanel.id = `shelfpanel${selected}`

        var namepanel = document.createElement('div');
        namepanel.className = 'namepanel';
        shelfpanel.appendChild(namepanel);

        let toptext = document.createElement('p');
        toptext.innerHTML = values[item].nameEng;
        toptext.className = 'toptext';
        switch (selected) {
        case '115':
            toptext.style.fontSize = "14px";
            break;
        case '126':
            toptext.style.fontSize = "16px";
            break;
        case '131':
            toptext.style.fontSize = "13.5px";
            break;
        case '178':
            toptext.style.fontSize = "15px";
            break;
        }
        namepanel.appendChild(toptext);

        let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtn';
        xbtn.addEventListener('click', function() {
            removeShelfPanel(item);
            viewshelvechar.splice(viewshelvechar.indexOf(item), 1);
            document.getElementById(`invtopimgselected${selected}`).className = `topimg`;
        });
        namepanel.appendChild(xbtn);

        let characterpanel = document.createElement('div');
        characterpanel.className = 'characterpanel';

        let rarityimage = document.createElement('img');
        switch (gliderrarity[i]) {
        case "1":
            rarityimage.src = `./Images/UI/invnormalkg.png`;
            break;
        case "2":
            rarityimage.src = `./Images/UI/invrarekg.png`;
            break;
        case "3":
            rarityimage.src = `./Images/UI/invhighendkg.png`;
            break;
        }
        rarityimage.className = 'rarityimg';

        var panel = document.createElement('div');
        panel.className = 'ckgpanel2';
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
        bottomimg.className = 'bottomimg'
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newGlider';
        newCharacter.src = `./Images/Full Icon/Glider/${item}.png`;
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
        panel.appendChild(topimg);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + glideritem[i] + `.png`;
        charaitem.className = 'bonuspointtype';
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Gliders[item];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `shelf_levelnumber${item}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }

        characterpanel.appendChild(panel);
        characterpanel.appendChild(rarityimage);

        let valuecount = 0;
        if (disableCityValue == true) {
            moreGoodAt.forEach((coursekey,i)=>{
                if (!moreGoodAt[i].includes('New_')) {
                    valuecount++;
                }
            }
            );
        } else {
            valuecount = moreGoodAt.length;
        }

        var valuecounttxt = document.createElement('p');
        valuecounttxt.className = "valuecounttxt";
        valuecounttxt.innerHTML = valuecount;
        characterpanel.appendChild(valuecounttxt);

        //comment this for no charcater image
        if(!disableCharPanel){
        shelfpanel.appendChild(characterpanel);
        } else {
        var minivaluecounttxt = document.createElement('p');
        minivaluecounttxt.className = "minivaluecounttxt";
        minivaluecounttxt.innerHTML = valuecount;
        namepanel.appendChild(minivaluecounttxt);
        }

        let whitebar3item = document.createElement('img');
        whitebar3item.src = `./Images/UI/bigcombotimeboost.png`;
        whitebar3item.className = 'whitebar3item';
        shelfpanel.appendChild(whitebar3item);

        var moreGoodAtPanel = document.createElement('div');
        moreGoodAtPanel.className = 'goodAtPanel';

        moreGoodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanel';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxt';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            moreGoodAtPanel.appendChild(coursePanel);
        }
        );

        let whitebar2item = document.createElement('img');
        whitebar2item.src = `./Images/UI/combotimeboost.png`;
        whitebar2item.className = 'whitebar2item';

        var goodAtPanel = document.createElement('div');
        goodAtPanel.className = 'goodAtPanel';

        goodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanel';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg'
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxt';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            goodAtPanel.appendChild(coursePanel);
        }
        );

        shelfpanel.appendChild(moreGoodAtPanel);
        shelfpanel.appendChild(whitebar2item);
        shelfpanel.appendChild(goodAtPanel);

        output.appendChild(shelfpanel);

    } else {
        removeShelfPanel(item);
        viewshelvechar.splice(viewshelvechar.indexOf(item), 1);
        document.getElementById(`invtopimgselected${selected}`).className = `topimg`;
    }

}//if
else {
    removefrom2ndshelf = [];
    inventorymodal.style.display = "block";
    inventorymodal.scrollTo(0, 0);
    let moreGoodAt = values[item].moreGoodAt;
        let goodAt = values[item].goodAt;
        let unlock3 = values[item].unlock3;
        let unlock6 = values[item].unlock6;
        console.log(moreGoodAt);
        console.log(goodAt);
        console.log(unlock3);
        console.log(unlock6);
        //values.selected.goodAt
        //let output = document.getElementById('inventorymodal');
        //var shelfpanel = document.createElement('div');
        //shelfpanel.className = 'shelfpanel stripedbg';
        //shelfpanel.id = `shelfpanel${selected}`
        var shelfpanel = document.getElementById('singleinv');

        var namepanel = document.createElement('div');
        namepanel.className = 'namepanel';
        shelfpanel.appendChild(namepanel);

        let toptext = document.createElement('p');
        toptext.innerHTML = values[item].nameEng;
        toptext.className = 'toptext';
        namepanel.appendChild(toptext);

        let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtn';
        xbtn.addEventListener('click', function() {
            hideModal();
        });
        shelfpanel.appendChild(xbtn);

        let characterpanel = document.createElement('div');
        characterpanel.className = 'characterpanel';

        let rarityimage = document.createElement('img');
        switch (gliderrarity[gliderid.indexOf(item)]) {
        case "1":
            rarityimage.src = `./Images/UI/invnormalkg.png`;
            break;
        case "2":
            rarityimage.src = `./Images/UI/invrarekg.png`;
            break;
        case "3":
            rarityimage.src = `./Images/UI/invhighendkg.png`;
            break;
        }
        rarityimage.className = 'rarityimgmodal';

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newGliderModal';
        newCharacter.src = `./Images/Glider Icon/` + item + `.png`;
        characterpanel.appendChild(newCharacter);

        let charaitem = document.createElement('img');
        charaitem.src = `./Images/Items/` + glideritem[gliderid.indexOf(item)] + `.png`;
        charaitem.className = 'itemboxitemmodal';
        characterpanel.appendChild(charaitem);

        let levelpanel = document.createElement('div');
        levelpanel.className = ('levelmodalpanel');

        let itemlvl = savedata.Items.Gliders[item];
        if(itemlvl == 6){
            levelpanel.className = ('levelmodalpanelmax');
        }
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'leveliconmodal';
            levelicon.id = `shelf_levelnumber${item}`;
            levelpanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconmodal';
            levelpanel.appendChild(lvicon);
        }
        characterpanel.appendChild(levelpanel);
        characterpanel.appendChild(rarityimage);

        let valuecount = 0;
        if (disableCityValue == true) {
            moreGoodAt.forEach((coursekey,i)=>{
                if (!moreGoodAt[i].includes('New_')) {
                    valuecount++;
                }
            }
            );
        } else {
            valuecount = moreGoodAt.length;
        }

        var valuecounttxt = document.createElement('p');
        valuecounttxt.className = "valuecounttxtmodal";
        valuecounttxt.innerHTML = valuecount;
        characterpanel.appendChild(valuecounttxt);

        //comment this for no charcater image
        if(!disableCharPanel){
        shelfpanel.appendChild(characterpanel);
        } else {
        var minivaluecounttxt = document.createElement('p');
        minivaluecounttxt.className = "minivaluecounttxt";
        minivaluecounttxt.innerHTML = valuecount;
        namepanel.appendChild(minivaluecounttxt);
        }

        let whitebar3item = document.createElement('img');
        whitebar3item.src = `./Images/UI/3itemsbar.png`;
        whitebar3item.className = 'whitebar3item';
        shelfpanel.appendChild(whitebar3item);

        var moreGoodAtPanel = document.createElement('div');
        moreGoodAtPanel.className = 'goodAtPanel';

        moreGoodAt.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtmodal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            moreGoodAtPanel.appendChild(coursePanel);
        }
        );

        unlock3.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            if(isDataEntered && savedata.Items.Gliders[item] == null || isDataEntered && savedata.Items.Gliders[item] < 3 || !isDataEntered){
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimgunlock3';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            let lockimg = document.createElement('img');
            lockimg.src = `./Images/UI/lock.png`;
            lockimg.className = 'courselockimg';
            coursePanel.appendChild(lockimg);

            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/3.png`;
            levelicon.className = 'leveliconunlock';
            levelicon.id = `inv_levelnumber${t}`;
            coursePanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconunlock';
            coursePanel.appendChild(lvicon);
            } else {
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            removefrom2ndshelf.push(t); 
            }

            moreGoodAtPanel.appendChild(coursePanel);
        });

        unlock6.forEach((t,i)=>{
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            if(isDataEntered && savedata.Items.Gliders[item] == null || isDataEntered && savedata.Items.Gliders[item] < 6 || !isDataEntered){
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimgunlock3';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            let lockimg = document.createElement('img');
            lockimg.src = `./Images/UI/lock.png`;
            lockimg.className = 'courselockimg';
            coursePanel.appendChild(lockimg);

            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/6.png`;
            levelicon.className = 'leveliconunlock';
            levelicon.id = `inv_levelnumber${t}`;
            coursePanel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconunlock';
            coursePanel.appendChild(lvicon);
            } else {
            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg';
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtunlock3modal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            removefrom2ndshelf.push(t); 
            }

            moreGoodAtPanel.appendChild(coursePanel);
        });

        valuecount += removefrom2ndshelf.length;
        valuecounttxt.innerHTML = valuecount;

        let whitebar2item = document.createElement('img');
        whitebar2item.src = `./Images/UI/2itemsbar.png`;
        whitebar2item.className = 'whitebar2item';

        var goodAtPanel = document.createElement('div');
        goodAtPanel.className = 'goodAtPanel';

        goodAt.forEach((t,i)=>{
            if(!removefrom2ndshelf.includes(t)){
            var coursePanel = document.createElement('div');
            coursePanel.className = 'coursepanelmodal';

            let courseimg = document.createElement('img');
            courseimg.src = `./Images/Course Image/${t}.png`;
            courseimg.className = 'courseimg'
            coursePanel.appendChild(courseimg);

            let coursetxt = document.createElement('p');
            coursetxt.innerHTML = coursenames[t];
            coursetxt.className = 'coursetxtmodal';
            switch(t){
        case "Classic_Gn64_KoopaTroopaBeachRX":
        coursetxt.style.fontSize = "9.5px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2X":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_Gsfc_KoopaTroopaBeach2R":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonX":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonR":
        coursetxt.style.fontSize = "10px";
        break;
        case "Classic_G3ds_CheepCheepLagoonRX":
        coursetxt.style.fontSize = "9px";
        break;
       }
            coursePanel.appendChild(coursetxt);

            goodAtPanel.appendChild(coursePanel);
            }
        }
        );

        shelfpanel.appendChild(moreGoodAtPanel);
        shelfpanel.appendChild(whitebar2item);
        shelfpanel.appendChild(goodAtPanel);

}

}

function removeShelfPanel(id) {
    document.getElementById(`shelfpanel${id}`).remove();
}
