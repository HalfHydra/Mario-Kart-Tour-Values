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
       courseimg.style.zoom = "90%"
       courseimg.addEventListener('click', function() {
            selectCourse(t);
        });
       coursePanel.appendChild(courseimg);

       let coursetxt = document.createElement('p');
       coursetxt.innerHTML = coursenames[t];
       coursetxt.className = 'coursetxtslc';
       coursetxt.style.zoom = "90%"
       coursePanel.appendChild(coursetxt);

       let combTS = document.createElement('div');
       combTS.className = 'combTS'

       let combTS2 = document.createElement('div');
       combTS2.className = 'combTS'

       let topshelves = [];

       for(var m = 0; m<2;m++){
       for(var x = 0; x<3;x++){
       var topShelfPanel = document.createElement('div');
       topShelfPanel.className = 'coursepreviewselectedpanel';
       if(missingcourses.includes(t)){
              coursePanel.className = `coursepanelslcselected`;
       }

       topshelves.splice(0,topshelves.length);
       if(m == 0){
       switch(x){
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
       let tempOwned = [];
       let tempNotOwned = [];
       if(isDataEntered){
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
       /*if(tempOwned.length == 0){
              missingCourses.push(t);
       }*/

       topshelves = tempOwned.concat(tempNotOwned);

       }

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
            topimg.className = 'invtopimgmissing';
        }*/
        topimg.id = `coursetopimgmissing${t}`;
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
       //console.log(tempOwned);
       //console.log(tempNotOwned);

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
       //console.log(topshelves);

       }
     }
   });
}