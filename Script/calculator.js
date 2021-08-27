      var activepanels = [];
      var intCalcPanels = [];

      function makeCalcPanel(itemid, type, rarity, item){
      var output = document.getElementById('bonuspointspanels');
      document.getElementById(`calcpanelimg_${itemid}`).className = `invtopimgselected`;

      if(openedCalcPanels.includes(itemid)){
        return;
      }

      openedCalcPanels.push(itemid);
      intCalcPanels.push(parseInt(itemid));


      var calcpaneldateid = new Date().getTime();
      var calcpanel = document.createElement('div');
      calcpanel.className = 'calcpanel';
      calcpanel.id = `calcpanel_${calcpaneldateid}`;

      /*let newLineBar = document.createElement('img');
      newLineBar.className = "newLineBar";
      newLineBar.src = `./Images/UI/Calculator/linebar.png`;
      output.appendChild(newLineBar);

      let newLineBar2 = document.createElement('img');
      newLineBar2.className = "newLineBar2";
      newLineBar2.src = `./Images/UI/Calculator/linebar.png`;
      output.appendChild(newLineBar2);*/

      //itemid = 70011;
      //type = 1;
      //rarity = "3";
      //item = "E";
      var points = 1400;
      switch(type){
      case 0:
      switch(rarity) {
        case "1":
        points = 600
        break;
        case "2":
        points = 675
        break;
        case "3":
        points = 800
        break;
      }
      break;
      case 1:
      switch(rarity) {
        case "1":
        points = 300
        break;
        case "2":
        points = 330
        break;
        case "3":
        points = 400
        break;
      }
      break;
      case 2:
      switch(rarity) {
        case "1":
        points = 300
        break;
        case "2":
        points = 330
        break;
        case "3":
        points = 400
        break;
      }
      break;
      }

      var panel = document.createElement('div');
        panel.className = 'ckgpanelcalc';
        //panel.id = `specificitempanel${t}`;

        let bottomimg = document.createElement('img');
        switch(type){
        case 0:
        switch (rarity) {
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
        switch (rarity) {
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
        switch (rarity) {
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
        switch(type){
              case 0:
              newItem.className = 'newCharacter';
              newItem.src = `./Images/Character Icon/${itemid}.png`;
              break;
              case 1:
              newItem.className = 'newKart';
              newItem.src = `./Images/ItemIcon/${itemid}.png`;
              break;
              case 2:
              newItem.className = 'newGlider';
              newItem.src = `./Images/ItemIcon/${itemid}.png`;
              break;
       }
        panel.appendChild(newItem);

        let topimg = document.createElement('img');
        switch (rarity) {
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
        switch(type){
        case 0:
        charaitem.src = `./Images/Items/` + item + `.png`;
        charaitem.className = 'itemboxitemcalc';
        break;
        case 1:
        charaitem.src = `./Images/Items/` + item + `.png`;
        charaitem.className = 'bonuspointtypecalc';
        break;
        case 2:
        charaitem.src = `./Images/Items/` + item + `.png`;
        charaitem.className = 'bonuspointtypecalc';
        break;
       }
        panel.appendChild(charaitem);

        let itemlvl = "";
        switch(type){
          case 0:
          itemlvl = savedata.Items.Drivers[itemid];
          break;
          case 1:
          itemlvl = savedata.Items.Karts[itemid];
          break;
          case 2:
          itemlvl = savedata.Items.Gliders[itemid];
          break;
        }
        

            let lviconinputimg = document.createElement('img');
            lviconinputimg.src = './Images/UI/lv.png';
            lviconinputimg.className = 'lviconcalcimg';
            panel.appendChild(lviconinputimg);

            let lviconinput = document.createElement('input');
            lviconinput.className = "lviconinput";
            lviconinput.id = `levelinput_${calcpaneldateid}`
            lviconinput.type = "number";
            lviconinput.value = "1";
            lviconinput.min = "1";
            lviconinput.max = "7";
            lviconinput.addEventListener("change", function() { changelevel(calcpaneldateid)});
            panel.appendChild(lviconinput);

            let pointsiconinputimg = document.createElement('img');
            pointsiconinputimg.src = './Images/UI/Icon/Ticket.png';
            pointsiconinputimg.className = 'pointsiconcalcimg';
            panel.appendChild(pointsiconinputimg);

            let pointsiconinput = document.createElement('input');
            pointsiconinput.className = "pointsiconinput";
            pointsiconinput.id = `pointsinput_${calcpaneldateid}`
            //pointsiconinput.type = "number";
            pointsiconinput.value = points;
            pointsiconinput.min = "250";
            pointsiconinput.max = "1400";
            pointsiconinput.addEventListener("input", function() { changepoints(calcpaneldateid)});
            panel.appendChild(pointsiconinput);

            let ccinputimg = document.createElement('img');
            ccinputimg.id = `ccimg_${calcpaneldateid}`
            ccinputimg.src = './Images/UI/CC/150.png';
            ccinputimg.className = 'cccalcimg';
            panel.appendChild(ccinputimg);

            let ccinput = document.createElement('select');
            ccinput.className = 'ccinput';
            ccinput.id = `ccinput_${calcpaneldateid}`

            let option50 = document.createElement('option');
            option50.value = "50cc";
            option50.innerHTML = "50cc";
            ccinput.appendChild(option50);
            let option100 = document.createElement('option');
            option100.value = "100cc";
            option100.innerHTML = "100cc";
            ccinput.appendChild(option100);
            let option150 = document.createElement('option');
            option150.value = "150cc";
            option150.innerHTML = "150cc";
            ccinput.appendChild(option150);
            let option200 = document.createElement('option');
            option200.value = "200cc";
            option200.innerHTML = "200cc";

            ccinput.appendChild(option200);
            ccinput.value = "150cc";
            ccinput.addEventListener("change", function() { changecc(calcpaneldateid)});
            //ccinput.onChange = `changecc(${calcpaneldateid})`

            panel.appendChild(ccinput);

            if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.id = `panellevel_${calcpaneldateid}`
            levelicon.className = 'leveliconcalc';
            //levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconcalc';
            panel.appendChild(lvicon);

            let pointsicon = document.createElement('div');
            //pointsicon.src = './Images/UI/lv.png';
            pointsicon.id = `pointsicon_${calcpaneldateid}`
            pointsicon.className = 'pointsiconcalc';
            panel.appendChild(pointsicon);

            //convert to the numbers
            var charoutput = [];
            var sNumber = points.toString();

            for (var i = 0, len = sNumber.length; i < len; i += 1) {
                charoutput.push(+sNumber.charAt(i));
            }
            charoutput.forEach((t,i)=>{
              var number = document.createElement('img');
              //number.className = `score-${t}`;
              number.className = `scoreNumber`;
              number.src = `./Images/UI/PointsNum/${t}.png`
              pointsicon.appendChild(number);
            });

            lviconinput.value = itemlvl;

            } else {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/1.png`;
            levelicon.id = `panellevel_${calcpaneldateid}`
            levelicon.className = 'leveliconcalc';
            //levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconcalc';
            panel.appendChild(lvicon);

            let pointsicon = document.createElement('div');
            //pointsicon.src = './Images/UI/lv.png';
            pointsicon.id = `pointsicon_${calcpaneldateid}`
            pointsicon.className = 'pointsiconcalc';
            panel.appendChild(pointsicon);

            //convert to the numbers
            var charoutput = [];
            var sNumber = points.toString();

            for (var i = 0, len = sNumber.length; i < len; i += 1) {
                charoutput.push(+sNumber.charAt(i));
            }
            charoutput.forEach((t,i)=>{
              var number = document.createElement('img');
              //number.className = `score-${t}`;
              number.className = `scoreNumber`;
              number.src = `./Images/UI/PointsNum/${t}.png`
              pointsicon.appendChild(number);
            });

            lviconinput.value = 1;
        }
            let textdiv = document.createElement('div');
            textdiv.className = "bppatextdiv"

            let textpart1 = document.createElement('p');

            textpart1.innerHTML = "This item gives "
            textpart1.className = 'textpart1';
            textdiv.appendChild(textpart1);

            let bppa = document.createElement('p');
            bppa.id = `bppaoutput_${calcpaneldateid}`;
            bppa.innerHTML = "4.95";
            bppa.className = 'bppa';
            textdiv.appendChild(bppa);

            let textpart2 = document.createElement('p');
            textpart2.innerHTML = "Bonus Points per Action!"
            textpart2.className = 'textpart2';
            textdiv.appendChild(textpart2);

            calcpanel.appendChild(textdiv);

        let xbtn = document.createElement('img');
        xbtn.src = "./Images/UI/xbtn.png";
        xbtn.className = 'xbtncalc';
        xbtn.addEventListener('click', function() {
            removeCalcPanel(calcpaneldateid);
            openedCalcPanels.splice(openedCalcPanels.indexOf(itemid), 1);
            intCalcPanels.splice(intCalcPanels.indexOf(parseInt(itemid)), 1);
            if(document.getElementById(`calcpanelimg_${itemid}`) != null){
            document.getElementById(`calcpanelimg_${itemid}`).className = `topimg`;
            }
        });
        calcpanel.appendChild(xbtn);


        calcpanel.appendChild(panel);







        output.appendChild(calcpanel);
        updatePanel(calcpaneldateid);
      }
      function changelevel(current){
          var levelinput = document.getElementById(`levelinput_${current}`);
          document.getElementById(`panellevel_${current}`).src = `./Images/UI/${levelinput.value}.png`;
          updatePanel(current);
      }

      function changepoints(current){
          var pointsinput = document.getElementById(`pointsinput_${current}`);
          //convert to the numbers
            var charoutput = [];
            var sNumber = pointsinput.value;
            if(parseInt(sNumber) > 1400){
              sNumber = "1400";
              pointsinput.value = "1400";
            }

            for (var i = 0, len = sNumber.length; i < len; i += 1) {
                charoutput.push(+sNumber.charAt(i));
            }
            document.getElementById(`pointsicon_${current}`).innerHTML = "";
            charoutput.forEach((t,i)=>{
              var number = document.createElement('img');
              //number.className = `score-${t}`;
              number.className = `scoreNumber`;
              number.src = `./Images/UI/PointsNum/${t}.png`
              document.getElementById(`pointsicon_${current}`).appendChild(number);
            });

          updatePanel(current);
      }

      function changecc(current){
          var ccinput = document.getElementById(`ccinput_${current}`);
          switch(ccinput.value){
            case "50cc":
            document.getElementById(`ccimg_${current}`).src = "./Images/UI/CC/50.png";
            break;
            case "100cc":
            document.getElementById(`ccimg_${current}`).src = "./Images/UI/CC/100.png";
            break;
            case "150cc":
            document.getElementById(`ccimg_${current}`).src = "./Images/UI/CC/150.png";
            break;
            case "200cc":
            document.getElementById(`ccimg_${current}`).src = "./Images/UI/CC/200.png";
            break;
          }
          updatePanel(current);
      }

      function updatePanel(current){
          //Calculation is Bonus Points per Action = Base Points * (Level - 1) * (CC/30000, Max 150cc)
          var base_points = parseInt(document.getElementById(`pointsinput_${current}`).value);
          var item_level = parseInt(document.getElementById(`levelinput_${current}`).value);
          item_level = parseInt(item_level) - 1;
          var cc_type = document.getElementById(`ccinput_${current}`).value;
          cc_type = cc_type.substring(0, cc_type.length-2);
          if(parseInt(cc_type) > 150){
            cc_type = 150;
          }
          var bppa = base_points * item_level * (cc_type / 30000);
          bppa = bppa.toFixed(2);

          //var outputText = `This item gives ${bppa} bonus points per action!`;
          if(!isNaN(bppa)){
          document.getElementById(`bppaoutput_${current}`).innerHTML = bppa;
          } else {
          document.getElementById(`bppaoutput_${current}`).innerHTML = `???`;
          }

      }

      function removeCalcPanel(id) {
          document.getElementById(`calcpanel_${id}`).remove();
      }

    let makeCalcCharacters = ()=>{
    document.getElementById('choosedriver').innerHTML = "";
    //document.getElementById('inventoryshelves').innerHTML = "";
    let output = document.getElementById('choosedriver');
    characterid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `calccharpanel${t}`;
        panel.addEventListener('click', function() {
            makeCalcPanel(t, 0, charrarity[i],charitem[i]);
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
        if (openedCalcPanels.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `calcpanelimg_${t}`;
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

let makeCalcKarts = ()=>{
    document.getElementById('choosekart').innerHTML = "";
    //document.getElementById('inventoryshelves').innerHTML = "";
    let output = document.getElementById('choosekart');
    kartid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `invkartpanel${t}`;
        panel.addEventListener('click', function() {
            makeCalcPanel(t, 1, kartrarity[i],kartitem[i]);
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
        if (openedCalcPanels.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `calcpanelimg_${t}`;
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

let makeCalcGliders = ()=>{
    document.getElementById('chooseglider').innerHTML = "";
    //document.getElementById('inventoryshelves').innerHTML = "";
    let output = document.getElementById('chooseglider');
    gliderid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `invgliderpanel${t}`;
        panel.addEventListener('click', function() {
            makeCalcPanel(gliderid[i], 2, gliderrarity[i],glideritem[i]);
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
        if (openedCalcPanels.includes(t)) {
            topimg.className = 'invtopimgselected';
        }
        topimg.id = `calcpanelimg_${t}`;
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