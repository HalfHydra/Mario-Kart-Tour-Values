var coursedata = {
    Courses: {}
}

var coursedataeng = {
    Courses: {}
}

function generateCourseList() {
    Object.keys(coursenames).forEach((t,i)=>{
        coursedata.Courses[t] = {};
        coursedata.Courses[t].moreGoodAt = {};
        coursedata.Courses[t].goodAt = {};
        coursedata.Courses[t].unlock3 = {};
        coursedata.Courses[t].unlock6 = {};
        coursedata.Courses[t].moreGoodAt.Drivers = [];
        coursedata.Courses[t].moreGoodAt.Karts = [];
        coursedata.Courses[t].moreGoodAt.Gliders = [];
        coursedata.Courses[t].goodAt.Drivers = [];
        coursedata.Courses[t].goodAt.Karts = [];
        coursedata.Courses[t].goodAt.Gliders = [];
        coursedata.Courses[t].unlock3.Drivers = [];
        coursedata.Courses[t].unlock3.Karts = [];
        coursedata.Courses[t].unlock3.Gliders = [];
        coursedata.Courses[t].unlock6.Drivers = [];
        coursedata.Courses[t].unlock6.Karts = [];
        coursedata.Courses[t].unlock6.Gliders = [];
        coursedataeng.Courses[t] = {};
        coursedataeng.Courses[t].moreGoodAt = {};
        coursedataeng.Courses[t].goodAt = {};
        coursedataeng.Courses[t].unlock3 = {};
        coursedataeng.Courses[t].unlock6 = {};
        coursedataeng.Courses[t].moreGoodAt.Drivers = [];
        coursedataeng.Courses[t].moreGoodAt.Karts = [];
        coursedataeng.Courses[t].moreGoodAt.Gliders = [];
        coursedataeng.Courses[t].goodAt.Drivers = [];
        coursedataeng.Courses[t].goodAt.Karts = [];
        coursedataeng.Courses[t].goodAt.Gliders = [];
        coursedataeng.Courses[t].unlock3.Drivers = [];
        coursedataeng.Courses[t].unlock3.Karts = [];
        coursedataeng.Courses[t].unlock3.Gliders = [];
        coursedataeng.Courses[t].unlock6.Drivers = [];
        coursedataeng.Courses[t].unlock6.Karts = [];
        coursedataeng.Courses[t].unlock6.Gliders = [];
        characterid.forEach((charid,i)=>{
            let moreGoodAt = values[charid].moreGoodAt;
            let goodAt = values[charid].goodAt;
            let unlock3 = values[charid].unlock3;
            let unlock6 = values[charid].unlock6;
            moreGoodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Drivers'].push(charid);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Drivers'].push(charid);
                }
            }
            );

            unlock3.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedata.Courses[t].unlock3['Drivers'].push(charid);
                }
            }
            );
            unlock6.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedata.Courses[t].unlock6['Drivers'].push(charid);
                }
            }
            );

            moreGoodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedataeng.Courses[t].moreGoodAt['Drivers'].push(values[charid].nameEng);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedataeng.Courses[t].goodAt['Drivers'].push(values[charid].nameEng);
                }
            }
            );

            unlock3.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedataeng.Courses[t].unlock3['Drivers'].push(values[charid].nameEng);
                }
            }
            );
            unlock6.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedataeng.Courses[t].unlock6['Drivers'].push(values[charid].nameEng);
                }
            }
            );
        }
        );
        kartid.forEach((karid,i)=>{
            let moreGoodAt = values[karid].moreGoodAt;
            let goodAt = values[karid].goodAt;
            let unlock3 = values[karid].unlock3;
            let unlock6 = values[karid].unlock6;
            moreGoodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Karts'].push(karid);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Karts'].push(karid);
                }
            }
            );

            unlock3.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedata.Courses[t].unlock3['Karts'].push(karid);
                }
            }
            );
            unlock6.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedata.Courses[t].unlock6['Karts'].push(karid);
                }
            }
            );

            moreGoodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedataeng.Courses[t].moreGoodAt['Karts'].push(values[karid].nameEng);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedataeng.Courses[t].goodAt['Karts'].push(values[karid].nameEng);
                }
            }
            );

            unlock3.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedataeng.Courses[t].unlock3['Karts'].push(values[karid].nameEng);
                }
            }
            );
            unlock6.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedataeng.Courses[t].unlock6['Karts'].push(values[karid].nameEng);
                }
            }
            );
        }
        );
        gliderid.forEach((glidid,i)=>{
            let moreGoodAt = values[glidid].moreGoodAt;
            let goodAt = values[glidid].goodAt;
            let unlock3 = values[glidid].unlock3;
            let unlock6 = values[glidid].unlock6;
            moreGoodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Gliders'].push(glidid);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Gliders'].push(glidid);
                }
            }
            );

            unlock3.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedata.Courses[t].unlock3['Gliders'].push(glidid);
                }
            }
            );
            unlock6.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedata.Courses[t].unlock6['Gliders'].push(glidid);
                }
            }
            );

            moreGoodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedataeng.Courses[t].moreGoodAt['Gliders'].push(values[glidid].nameEng);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                if (courseid == t) {
                    coursedataeng.Courses[t].goodAt['Gliders'].push(values[glidid].nameEng);
                }
            }
            );

            unlock3.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedataeng.Courses[t].unlock3['Gliders'].push(values[glidid].nameEng);
                }
            }
            );
            unlock6.forEach((courseid,i)=>{
                if(courseid == t){
                  coursedataeng.Courses[t].unlock6['Gliders'].push(values[glidid].nameEng);
                }
            }
            );
        }
        );

    }
    );
}

function makeCourseList() {
       generateCourseList();
       let courses = Object.keys(coursedata.Courses);

       let output = document.getElementById('selectcourses');

       courses.forEach((t,i)=>{
       var coursePanel = document.createElement('div');
       coursePanel.className = 'coursepanel';
       coursePanel.id = `selectcourse_${t}`
       coursePanel.addEventListener('click', function() {
            selectCourse(t);
        });

       let courseimg = document.createElement('img');
       courseimg.src = `./Images/Course Image/${t}.png`;
       courseimg.className = 'courseimg';
       coursePanel.appendChild(courseimg);

       let coursetxt = document.createElement('p');
       coursetxt.innerHTML = coursenames[t];
       coursetxt.className = 'coursetxt';
       coursePanel.appendChild(coursetxt);

       output.appendChild(coursePanel);


       });
}

function selectCourse(course) {
       if(!selectedcourses.includes(course)){
              selectedcourses.push(course);
              document.getElementById(`selectcourse_${course}`).className = `coursepanelselected`;
              if(topShelfPreviewMade){
              document.getElementById(`coursets_${course}`).className = `coursepaneltopshelfselected`;
              }
       } else {
              selectedcourses.splice(selectedcourses.indexOf(course), 1);
              document.getElementById(`selectcourse_${course}`).className = `coursepanel`;
              if(topShelfPreviewMade){
              document.getElementById(`coursets_${course}`).className = `coursepaneltopshelf`;
              }
       }
       selectedCourses();
}

function selectspecificitem(){
       //var specificdriver = document.createElement('div');
       var specificitem = document.getElementById('specificitem');
       specificitem.innerHTML = "";
       specificitem.className = 'coursepanelspecificitem';
       //specificdriver.id = `specificdriver`;
       if(startToggle){
              var panel = document.createElement('div');
              panel.className = 'ckgpanel';
              let bottomimg = document.createElement('img');
              bottomimg.src = `./Images/UI/bgnormal.png`;
              bottomimg.className = 'bottomimg';
              panel.appendChild(bottomimg);
              let topimg = document.createElement('img');
              topimg.src = `./Images/UI/outlinenormal.png`;
              topimg.className = 'topimg';
              panel.appendChild(topimg);

              var additembtn = document.createElement('img');
              additembtn.src = `./Images/UI/additembtn.png`;
              additembtn.className = 'additembtn';
              additembtn.addEventListener('click', function() {
              specificitemcourses();
        });


              specificitem.appendChild(panel);
              specificitem.appendChild(additembtn);
       } else {
       var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        //panel.id = `specificitempanel${t}`;

        let bottomimg = document.createElement('img');
        switch (currentitemrarity) {
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

        let newItem = document.createElement('img');
        switch(currentitemtype){
              case 0:
              newItem.className = 'newCharacter';
              newItem.src = `./Images/Character Icon/${currentspecificitem}.png`;
              break;
              case 1:
              newItem.className = 'newKart';
              newItem.src = `./Images/Kart Icon/${currentspecificitem}.png`;
              break;
              case 2:
              newItem.className = 'newGlider';
              newItem.src = `./Images/Glider Icon/${currentspecificitem}.png`;
              break;
       }
        panel.appendChild(newItem);

        let topimg = document.createElement('img');
        switch (currentitemrarity) {
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
        switch(currentitemtype){
        case 0:
        charaitem.src = `./Images/Items/` + currentitemitem + `.png`;
        charaitem.className = 'itemboxitem';
        break;
        case 1:
        charaitem.src = `./Images/Items/` + currentitemitem + `.png`;
        charaitem.className = 'bonuspointtype';
        break;
        case 2:
        charaitem.src = `./Images/Items/` + currentitemitem + `.png`;
        charaitem.className = 'bonuspointtype';
        break;
       }
        panel.appendChild(charaitem);

        let itemlvl = savedata.Items.Drivers[currentspecificitem];
        if (itemlvl != null) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            //levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        }

        var additembtn = document.createElement('img');
              additembtn.src = `./Images/UI/additembtn.png`;
              additembtn.className = 'additembtn';
              additembtn.addEventListener('click', function() {
              specificitemcourses();
        });

        specificitem.appendChild(panel);
        specificitem.appendChild(additembtn);
       }

}

function specificitemcourses(){
       var specificitemcourses = document.getElementById('itemspecificcourses');
       var specificitemcourse = document.createElement('div');
       specificitemcourses.innerHTML = "";
       specificitemcourse.className = 'specificitemcourse';
       characterid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `specificcharpanel${t}`;
        panel.addEventListener('click', function() {
            specificchoicemade(t, 0, charrarity[i],charitem[i]);
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
        specificitemcourse.appendChild(panel);
       } else if(onlyOwnedItems == false){
        specificitemcourse.appendChild(panel);
       }
        specificitemcourses.appendChild(specificitemcourse);
    }
    );
       kartid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `specifickartpanel${t}`;
        panel.addEventListener('click', function() {
            specificchoicemade(t, 1, kartrarity[i],kartitem[i]);
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

        specificitemcourse.appendChild(panel);
        specificitemcourses.appendChild(specificitemcourse);
    }
    );
       gliderid.forEach((t,i)=>{
        var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        panel.id = `specificgliderpanel${t}`;
        panel.addEventListener('click', function() {
            specificchoicemade(gliderid[i], 2, gliderrarity[i],glideritem[i]);
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

        specificitemcourse.appendChild(panel);
        specificitemcourses.appendChild(specificitemcourse);
    }
    );
}

function specificchoicemade(t, type, rarity, item) {
       var specificitemcourses = document.getElementById('itemspecificcourses');
       var specificitem = document.getElementById('specificitem');
       specificitemcourses.innerHTML = "";
       let courses = values[t].moreGoodAt;
       currentspecificitem = t;
       currentitemtype = type;
       currentitemrarity = rarity;
       currentitemitem = item;
       startToggle = false;
       selectspecificitem();

       courses.forEach((t,i)=>{ 
                     var coursePanel = document.createElement('div');
       coursePanel.className = 'coursepanelslcselected';
       coursePanel.id = `coursets_${t}`;

       let courseimg = document.createElement('img');
       courseimg.src = `./Images/Course Image/${t}.png`;
       courseimg.className = 'courseimgslc';
       //courseimg.style.zoom = "90%"
       courseimg.addEventListener('click', function() {
            selectCourse(t);
        });
       coursePanel.appendChild(courseimg);

       let coursetxt = document.createElement('p');
       coursetxt.innerHTML = coursenames[t];
       coursetxt.className = 'coursetxtslc';
       //coursetxt.style.zoom = "90%"
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
       if(selectedcourses.includes(t)){
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
       specificitemcourses.appendChild(coursePanel);
       });

}

function makeTopShelfPreview() {
       if(resettingCourses){
              document.getElementById('topshelfpreview').innerHTML = "";
              resettingCourses = false;
       }
       let courses = Object.keys(coursedata.Courses);

       let output = document.getElementById('topshelfpreview');

       courses.forEach((t,i)=>{
       var coursePanel = document.createElement('div');
       coursePanel.className = 'coursepaneltopshelf';
       coursePanel.id = `coursets_${t}`;
       coursePanel.addEventListener('click', function() {
            selectCourse(t);
        });

       let courseimg = document.createElement('img');
       courseimg.src = `./Images/Course Image/${t}.png`;
       courseimg.className = 'courseimgtopshelf';
       //courseimg.style.zoom = "90%"
       coursePanel.appendChild(courseimg);

       let coursetxt = document.createElement('p');
       coursetxt.innerHTML = coursenames[t];
       coursetxt.className = 'coursetxttopshelf';
       //coursetxt.style.zoom = "90%"
       coursePanel.appendChild(coursetxt);

       var topShelfPanel = document.createElement('div');
       topShelfPanel.className = 'coursepreviewtopshelfpanel';
       if(selectedcourses.includes(t)){
              coursePanel.className = `coursepaneltopshelfselected`;
       }


       let topshelves = [];
       let topshelvestypes = [];
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
       let tempOwnedTypes = [];
       let tempOwnedIndex = 0;
       let tempNotOwned = [];
       let tempNotOwnedTypes = [];
       let tempNotOwnedIndex = 0;
       if(isDataEntered){
            switch(topshelfmode){
              case 0:
              coursedata.Courses[t].moreGoodAt.Drivers.forEach((t,i)=>{ 
                     if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 0;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t);
                     tempNotOwnedTypes[tempOwnedIndex] = 0;
                     tempNotOwnedIndex++;       
                     }
              });
              coursedata.Courses[t].unlock3.Drivers.forEach((t,i)=>{ 
                     if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 1;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 1;
                     tempNotOwnedIndex++;           
                     }
              });
              coursedata.Courses[t].unlock6.Drivers.forEach((t,i)=>{ 
                     if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 2;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 2;
                     tempNotOwnedIndex++;           
                     }
              });
              break;
              case 1:
              coursedata.Courses[t].moreGoodAt.Karts.forEach((t,i)=>{ 
                     if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 0;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t);
                     tempNotOwnedTypes[tempOwnedIndex] = 0;
                     tempNotOwnedIndex++;       
                     }
              });
              coursedata.Courses[t].unlock3.Karts.forEach((t,i)=>{ 
                     if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 1;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 1;
                     tempNotOwnedIndex++;           
                     }
              });
              coursedata.Courses[t].unlock6.Karts.forEach((t,i)=>{ 
                     if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 2;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 2;
                     tempNotOwnedIndex++;           
                     }
              });
              break;
              case 2:
              coursedata.Courses[t].moreGoodAt.Gliders.forEach((t,i)=>{ 
                     if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 0;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t);
                     tempNotOwnedTypes[tempOwnedIndex] = 0;
                     tempNotOwnedIndex++;       
                     }
              });
              coursedata.Courses[t].unlock3.Gliders.forEach((t,i)=>{ 
                     if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 1;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 1;
                     tempNotOwnedIndex++;           
                     }
              });
              coursedata.Courses[t].unlock6.Gliders.forEach((t,i)=>{ 
                     if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 2;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 2;
                     tempNotOwnedIndex++;           
                     }
              });
              break;
              }  





       topshelves = tempOwned.concat(tempNotOwned);
       topshelvestypes = tempOwnedTypes.concat(tempNotOwnedTypes);
       console.log(topshelves);
       console.log(topshelvestypes);

       }

       /*
       let unlock3topshelves = [];
       let unlock6topshelves = [];
       switch(topshelfmode){
              case 0:
              coursedata.Courses[t].unlock3.Drivers.forEach((t,i)=>{ 
              unlock3topshelves.push(t)
              });
              coursedata.Courses[t].unlock6.Drivers.forEach((t,i)=>{ 
              unlock6topshelves.push(t)
              });
              break;
              case 1:
              coursedata.Courses[t].unlock3.Karts.forEach((t,i)=>{ 
              unlock3topshelves.push(t)
              });
              coursedata.Courses[t].unlock6.Karts.forEach((t,i)=>{ 
              unlock6topshelves.push(t)
              });
              break;
              case 2:
              coursedata.Courses[t].unlock3.Gliders.forEach((t,i)=>{ 
              unlock3topshelves.push(t)
              });
              coursedata.Courses[t].unlock6.Gliders.forEach((t,i)=>{ 
              unlock6topshelves.push(t)
              });
              break;
       }*/

       topshelves.forEach((t,i)=>{ 
       var panel = document.createElement('div');
        panel.className = 'ckgpanel';
        //panel.style.zoom = "75%"
        panel.id = `coursetscharpanel${t}`;

        let bottomimg = document.createElement('img');
        switch(topshelfmode){

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
        switch(topshelfmode){
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
        switch (topshelfmode){
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
        switch(topshelfmode){
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


        let itemlvl = savedata.Items.Drivers[t];
        switch(topshelfmode){
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
        } else if(topshelvestypes[i] == 1 && itemlvl > 2) {
          let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `coursets_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        } else if(topshelvestypes[i] == 2 && itemlvl > 5) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `coursets_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        } else if(topshelvestypes[i] == 1 && itemlvl < 3){
          //purposefuly empty
        } else if(topshelvestypes[i] == 2 && itemlvl < 6) {
          //purposefuly empty
        } else {
            panel.className = 'ckgpaneldisabled';
        }

        if(topshelvestypes[i] == 1 && itemlvl < 3){
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
        }
        if(topshelvestypes[i] == 2 && itemlvl < 6){
          let lockimg = document.createElement('img');
            lockimg.src = `./Images/UI/lock.png`;
            lockimg.className = 'courselockimgts';
            lockimg.style.filter = "grayscale(0%)";
            panel.appendChild(lockimg);

            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/6.png`;
            levelicon.className = 'leveliconunlockts';
            levelicon.style.filter = "grayscale(0%)";
            levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconunlockts';
            lvicon.style.filter = "grayscale(0%)";
            panel.appendChild(lvicon);
        }

        if(!isDataEntered){
              panel.className = 'ckgpanel';
        }

        topShelfPanel.appendChild(panel);

       });

      

       coursePanel.appendChild(topShelfPanel);
       output.appendChild(coursePanel);


       });
}

       function selectedCourses(){
              document.getElementById('selectedcourses').innerHTML = "";
       let output = document.getElementById('selectedcourses');

              selectedcourses.forEach((t,i)=>{ 
                     var coursePanel = document.createElement('div');
       coursePanel.className = 'coursepanelslcselected';
       coursePanel.id = `coursets_${t}`;

       let courseimg = document.createElement('img');
       courseimg.src = `./Images/Course Image/${t}.png`;
       courseimg.className = 'courseimgslc';
       //courseimg.style.zoom = "90%"
       courseimg.addEventListener('click', function() {
            selectCourse(t);
        });
       coursePanel.appendChild(courseimg);

       let coursetxt = document.createElement('p');
       coursetxt.innerHTML = coursenames[t];
       coursetxt.className = 'coursetxtslc';
       //coursetxt.style.zoom = "90%"
       coursePanel.appendChild(coursetxt);

       let combTS = document.createElement('div');
       combTS.className = 'combTS'

       let combTS2 = document.createElement('div');
       combTS2.className = 'combTS'

       let topshelves = [];

       for(var m = 0; m<2;m++){//topshelf and middleshelf
       for(var x = 0; x<3;x++){//drivers karts and gliders
       var topShelfPanel = document.createElement('div');
       topShelfPanel.className = 'coursepreviewselectedpanel';
       if(selectedcourses.includes(t)){
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
       let tempOwnedTypes = [];
       let tempOwnedIndex = 0;
       let tempNotOwned = [];
       let tempNotOwnedTypes = [];
       let tempNotOwnedIndex = 0;
       if(isDataEntered){
              if(m == 0){
            switch(x){
              case 0:
              coursedata.Courses[t].moreGoodAt.Drivers.forEach((t,i)=>{ 
                     if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 0;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t);
                     tempNotOwnedTypes[tempOwnedIndex] = 0;
                     tempNotOwnedIndex++;       
                     }
              });
              coursedata.Courses[t].unlock3.Drivers.forEach((t,i)=>{ 
                     if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 1;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 1;
                     tempNotOwnedIndex++;           
                     }
              });
              coursedata.Courses[t].unlock6.Drivers.forEach((t,i)=>{ 
                     if(savedata.Items.Drivers[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 2;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 2;
                     tempNotOwnedIndex++;           
                     }
              });
              break;
              case 1:
              coursedata.Courses[t].moreGoodAt.Karts.forEach((t,i)=>{ 
                     if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 0;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t);
                     tempNotOwnedTypes[tempOwnedIndex] = 0;
                     tempNotOwnedIndex++;       
                     }
              });
              coursedata.Courses[t].unlock3.Karts.forEach((t,i)=>{ 
                     if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 1;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 1;
                     tempNotOwnedIndex++;           
                     }
              });
              coursedata.Courses[t].unlock6.Karts.forEach((t,i)=>{ 
                     if(savedata.Items.Karts[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 2;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 2;
                     tempNotOwnedIndex++;           
                     }
              });
              break;
              case 2:
              coursedata.Courses[t].moreGoodAt.Gliders.forEach((t,i)=>{ 
                     if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 0;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t);
                     tempNotOwnedTypes[tempOwnedIndex] = 0;
                     tempNotOwnedIndex++;       
                     }
              });
              coursedata.Courses[t].unlock3.Gliders.forEach((t,i)=>{ 
                     if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 1;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 1;
                     tempNotOwnedIndex++;           
                     }
              });
              coursedata.Courses[t].unlock6.Gliders.forEach((t,i)=>{ 
                     if(savedata.Items.Gliders[t] != null){
                     tempOwned.push(t)
                     tempOwnedTypes[tempOwnedIndex] = 2;
                     tempOwnedIndex++;
                     } else {
                     tempNotOwned.push(t)
                     tempNotOwnedTypes[tempOwnedIndex] = 2;
                     tempNotOwnedIndex++;           
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
       topshelvestypes = tempOwnedTypes.concat(tempNotOwnedTypes);

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
        if (itemlvl != null && isDataEntered && topshelvestypes[i] == 0  || m == 0) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `coursets_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        } else if(topshelvestypes[i] == 1 && itemlvl > 2) {
          let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `coursets_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        } else if(topshelvestypes[i] == 2 && itemlvl > 5) {
            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/${itemlvl}.png`;
            levelicon.className = 'levelicon';
            levelicon.id = `coursets_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lvicon';
            panel.appendChild(lvicon);
        } else if(topshelvestypes[i] == 1 && itemlvl < 3){
          //purposefuly empty
        } else if(topshelvestypes[i] == 2 && itemlvl < 6) {
          //purposefuly empty
        } else {
            panel.className = 'ckgpaneldisabled';
        }

        if(topshelvestypes[i] == 1 && itemlvl < 3){
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
        }
        if(topshelvestypes[i] == 2 && itemlvl < 6){
          let lockimg = document.createElement('img');
            lockimg.src = `./Images/UI/lock.png`;
            lockimg.className = 'courselockimgts';
            lockimg.style.filter = "grayscale(0%)";
            panel.appendChild(lockimg);

            let levelicon = document.createElement('img');
            levelicon.src = `./Images/UI/6.png`;
            levelicon.className = 'leveliconunlockts';
            levelicon.style.filter = "grayscale(0%)";
            levelicon.id = `inv_levelnumber${t}`;
            panel.appendChild(levelicon);

            let lvicon = document.createElement('img');
            lvicon.src = './Images/UI/lv.png';
            lvicon.className = 'lviconunlockts';
            lvicon.style.filter = "grayscale(0%)";
            panel.appendChild(lvicon);
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
