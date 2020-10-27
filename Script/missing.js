function missingCourses(){
      document.getElementById('missingcourses').innerHTML = "";
      let output = document.getElementById('missingcourses');
      let missingcourses = [];
      switch(missingmode) {
        case 0:
        missingcourses = missingcoursesd;
        break;
        case 1:
        missingcourses = missingcoursesk;
        break;
        case 2:
        missingcourses = missingcoursesg;
        break;
      }
              missingcourses.forEach((t,i)=>{ 
                     var coursePanel = document.createElement('div');
       coursePanel.className = 'coursepanelslcmissing';
       coursePanel.id = `coursets_${t}`;

       let courseimg = document.createElement('img');
       courseimg.src = `./Images/Course Image/${t}.png`;
       courseimg.className = 'courseimgslc';
       courseimg.addEventListener('click', function() {
            selectCourse(t);
        });
       coursePanel.appendChild(courseimg);

       let coursetxt = document.createElement('p');
       coursetxt.innerHTML = coursenames[t];
       coursetxt.className = 'coursetxtslc';
       coursePanel.appendChild(coursetxt);

       let combTS = document.createElement('div');
       combTS.className = 'combTS'

       let combTS2 = document.createElement('div');
       combTS2.className = 'combTS'

       let topshelves = [];
       let topshelvestypes = [];

       for(var m = 0; m<2;m++){
       for(var x = 0; x<3;x++){
       var topShelfPanel = document.createElement('div');
       topShelfPanel.className = 'coursepreviewselectedpanel';
       if(missingcourses.includes(t)){
              coursePanel.className = `coursepanelslcselected`;
       }

       topshelves.splice(0,topshelves.length);
       topshelvestypes.splice(0,topshelvestypes.length);
       if(!isDataEntered){
       if(m == 0){
       switch(x){
              case 0:
              coursedata.Courses[t].moreGoodAt.Drivers.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
              case 1:
              coursedata.Courses[t].moreGoodAt.Karts.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
              case 2:
              coursedata.Courses[t].moreGoodAt.Gliders.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
       }

       switch(x){
              case 0:
              coursedata.Courses[t].unlock3.Drivers.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Drivers.forEach((t,i)=>{ 
              //unlock6topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('2');
              });
              break;
              case 1:
              coursedata.Courses[t].unlock3.Karts.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Karts.forEach((t,i)=>{ 
              //unlock6topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('2');
              });
              break;
              case 2:
              coursedata.Courses[t].unlock3.Gliders.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Gliders.forEach((t,i)=>{ 
              //unlock6topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('2');
              });
              break;
       }
       }
       if(m == 1){
              switch(x){
              case 0:
              coursedata.Courses[t].goodAt.Drivers.forEach((t,i)=>{ 
              topshelves.push(t)
              });
              break;
              case 1:
              coursedata.Courses[t].goodAt.Karts.forEach((t,i)=>{ 
              topshelves.push(t)
              });
              break;
              case 2:
              coursedata.Courses[t].goodAt.Gliders.forEach((t,i)=>{ 
              topshelves.push(t)
              });
              break;
              }
       }
       
     }
     if(isDataEntered){
      if(m == 0){
        switch(x){
              case 0:
              coursedata.Courses[t].moreGoodAt.Drivers.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
              case 1:
              coursedata.Courses[t].moreGoodAt.Karts.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
              case 2:
              coursedata.Courses[t].moreGoodAt.Gliders.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
       }

       switch(x){
              case 0:
              coursedata.Courses[t].unlock3.Drivers.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Drivers.forEach((t,i)=>{ 
              //unlock6topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('2');
              });
              break;
              case 1:
              coursedata.Courses[t].unlock3.Karts.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Karts.forEach((t,i)=>{ 
              //unlock6topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('2');
              });
              break;
              case 2:
              coursedata.Courses[t].unlock3.Gliders.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Gliders.forEach((t,i)=>{ 
              //unlock6topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('2');
              });
              break;
       }
     }
     if(m == 1){
              switch(x){
              case 0:
              coursedata.Courses[t].goodAt.Drivers.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
              case 1:
              coursedata.Courses[t].goodAt.Karts.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
              case 2:
              coursedata.Courses[t].goodAt.Gliders.forEach((t,i)=>{ 
              topshelves.push(t)
              topshelvestypes.push('0');
              });
              break;
       }

       switch(x){
              case 0:
              coursedata.Courses[t].unlock3.Drivers.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Drivers.forEach((t,i)=>{ 
              //unlock6topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('2');
              });
              break;
              case 1:
              coursedata.Courses[t].unlock3.Karts.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Karts.forEach((t,i)=>{ 
              //unlock6topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('2');
              });
              break;
              case 2:
              coursedata.Courses[t].unlock3.Gliders.forEach((t,i)=>{ 
              //unlock3topshelves.push(t)
              topshelves.push(t)
              topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Gliders.forEach((t,i)=>{ 
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
       if(m == 0){
            switch(x){
              case 0:
              coursedata.Courses[t].moreGoodAt.Drivers.forEach((t,i)=>{ 
                     if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              case 1:
              coursedata.Courses[t].moreGoodAt.Karts.forEach((t,i)=>{ 
                     if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              case 2:
              coursedata.Courses[t].moreGoodAt.Gliders.forEach((t,i)=>{ 
                     if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              }  

       switch(x){
              case 0:
              coursedata.Courses[t].unlock3.Drivers.forEach((t,i)=>{ 
                if(savedata.Items.Drivers[t] != null){
                     temp3Owned.push(t)
                } else {
                     temp3NotOwned.push(t)       
                }

              //unlock3topshelves.push(t)
              //topshelves.push(t)
              //topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Drivers.forEach((t,i)=>{ 
                if(savedata.Items.Drivers[t] != null){
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
              coursedata.Courses[t].unlock3.Karts.forEach((t,i)=>{ 
                if(savedata.Items.Karts[t] != null){
                     temp3Owned.push(t)
                } else {
                     temp3NotOwned.push(t)       
                }
              //unlock3topshelves.push(t)
              //topshelves.push(t)
              //topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Karts.forEach((t,i)=>{ 
                if(savedata.Items.Karts[t] != null){
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
              coursedata.Courses[t].unlock3.Gliders.forEach((t,i)=>{ 
                if(savedata.Items.Gliders[t] != null){
                     temp3Owned.push(t)
                } else {
                     temp3NotOwned.push(t)       
                }
              //unlock3topshelves.push(t)
              //topshelves.push(t)
              //topshelvestypes.push('1');
              });
              coursedata.Courses[t].unlock6.Gliders.forEach((t,i)=>{ 
                if(savedata.Items.Gliders[t] != null){
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
      if(m == 1){
              tempOwned.splice(0,tempOwned.length);
              tempNotOwned.splice(0,tempNotOwned.length);
              switch(x){
              case 0:
              coursedata.Courses[t].goodAt.Drivers.forEach((t,i)=>{ 
              if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              case 1:
              coursedata.Courses[t].goodAt.Karts.forEach((t,i)=>{ 
              if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              case 2:
              coursedata.Courses[t].goodAt.Gliders.forEach((t,i)=>{ 
              if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              }
            }




       topshelves.splice(0,topshelves.length);
       topshelvestypes.splice(0,topshelvestypes.length);
       //topshelves = tempOwned.concat(tempNotOwned);
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
       tempOwned.forEach((t,i)=>{ 
          topshelvestypes.push('0');
       });
       temp3Owned.forEach((t,i)=>{ 
          topshelvestypes.push('1');
       });
       temp6Owned.forEach((t,i)=>{ 
          topshelvestypes.push('2');
       });
       tempNotOwned.forEach((t,i)=>{ 
          topshelvestypes.push('3');
       });
       temp3NotOwned.forEach((t,i)=>{ 
          topshelvestypes.push('4');
       });
       temp6NotOwned.forEach((t,i)=>{ 
          topshelvestypes.push('5');
       });
     }//isdataentered


       topshelves.forEach((t,i)=>{ 
       var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        //panel.style.zoom = "75%"
        panel.id = `coursetscharpanel${t}`;

        let bottomimg = document.createElement('img');
        switch(x){

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
        case 2:
        switch (gliderrarity[gliderid.indexOf(t)]) {
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
       }
        bottomimg.className = 'bottomimg';
        panel.appendChild(bottomimg);

        let newItem = document.createElement('img');
        switch(x){
              case 0:
              newItem.className = 'newCharacter';
              newItem.src = `./Images/Character Icon/${t}.png`;
              break;
              case 1:
              newItem.className = 'newKart';
              newItem.src = `./Images/Kart Icon/${t}.png`;
              break;
              case 2:
              newItem.className = 'newGlider';
              newItem.src = `./Images/Glider Icon/${t}.png`;
              break;
       }
        panel.appendChild(newItem);

        let topimg = document.createElement('img');
        switch (x){
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
        switch(x){
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
        switch(x){
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
        if(m == 0){
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

        if(!isDataEntered){
              panel.className = 'ckgpanel';
              switch(topshelvestypes[i]){
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

        if(isDataEntered){
          switch(topshelvestypes[i]){
                case "0":
                break;
                case "1":
            panel.className = 'ckgpanel';
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
            panel.className = 'ckgpanel';
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
        if(m == 1){
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
      

        if(!isDataEntered){
              panel.className = 'ckgpanel';
              switch(topshelvestypes[i]){
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

        topShelfPanel.appendChild(panel);
              });
       switch(m){
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

function calcMissingValues(){
      missingcoursesd = [];
      missingcoursesk = [];
      missingcoursesg = [];
       let courses = Object.keys(coursedata.Courses);

       courses.forEach((t,i)=>{
      for(var topshelfmode = 0; topshelfmode<3; topshelfmode++){

       let topshelves = [];
       switch(topshelfmode){
              case 0:
              coursedata.Courses[t].moreGoodAt.Drivers.forEach((t,i)=>{ 
              topshelves.push(t)
              });
              break;
              case 1:
              coursedata.Courses[t].moreGoodAt.Karts.forEach((t,i)=>{ 
              topshelves.push(t)
              });
              break;
              case 2:
              coursedata.Courses[t].moreGoodAt.Gliders.forEach((t,i)=>{ 
              topshelves.push(t)
              });
              break;
       }
       let tempOwned = [];
       let tempNotOwned = [];
       if(isDataEntered){
            switch(topshelfmode){
              case 0:
              coursedata.Courses[t].moreGoodAt.Drivers.forEach((t,i)=>{ 
                     if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              case 1:
              coursedata.Courses[t].moreGoodAt.Karts.forEach((t,i)=>{ 
                     if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              case 2:
              coursedata.Courses[t].moreGoodAt.Gliders.forEach((t,i)=>{ 
                     if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     } else {
                     tempNotOwned.push(t)       
                     }
              });
              break;
              }  
       if(tempOwned.length == 0){
              switch(topshelfmode){
                case 0:
                missingcoursesd.push(t);
                break;
                case 1:
                missingcoursesk.push(t);
                break;
                case 2:
                missingcoursesg.push(t);
                break;
              }
       }

       
      
       topshelves = tempOwned.concat(tempNotOwned);

       }
     }
   });
}