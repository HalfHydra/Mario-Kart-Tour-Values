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

        output.appendChild(panel);
    }
    );
}

function invCharacter(selected, i) {
    let item = selected;

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

        output.appendChild(panel);
    }
    );
}

function invKart(selected, i) {
    let item = selected;

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
        switch (kartrarity[i]) {
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
        bottomimg.className = 'bottomimg'
        panel.appendChild(bottomimg);

        let newCharacter = document.createElement('img');
        newCharacter.className = 'newKart';
        newCharacter.src = `./Images/Kart Icon/${item}.png`;
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

        output.appendChild(panel);
    }
    );
}

function invGlider(selected, i) {
    let item = selected;

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
        newCharacter.src = `./Images/Glider Icon/${item}.png`;
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

}

function removeShelfPanel(id) {
    document.getElementById(`shelfpanel${id}`).remove();
}
