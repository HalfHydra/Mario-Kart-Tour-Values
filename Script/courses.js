var coursedata = {
    Courses: {}
}
function generateCourseList() {
    Object.keys(coursenames).forEach((t,i)=>{
        coursedata.Courses[t] = {};
        coursedata.Courses[t].moreGoodAt = {};
        coursedata.Courses[t].goodAt = {};
        coursedata.Courses[t].moreGoodAt.Drivers = [];
        coursedata.Courses[t].moreGoodAt.Karts = [];
        coursedata.Courses[t].moreGoodAt.Gliders = [];
        coursedata.Courses[t].goodAt.Drivers = [];
        coursedata.Courses[t].goodAt.Karts = [];
        coursedata.Courses[t].goodAt.Gliders = [];
        characterid.forEach((charid,i)=>{
            let moreGoodAt = values[charid].moreGoodAt;
            let goodAt = values[charid].goodAt;
            moreGoodAt.forEach((courseid,i)=>{
                //console.log('if ' + courseid + ' == ' + t);
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Drivers'].push(charid);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                //console.log('if ' + courseid + ' == ' + t);
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Drivers'].push(charid);
                }
            }
            );
        }
        );
        kartid.forEach((karid,i)=>{
            let moreGoodAt = values[karid].moreGoodAt;
            let goodAt = values[karid].goodAt;
            moreGoodAt.forEach((courseid,i)=>{
                //console.log('if ' + courseid + ' == ' + t);
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Karts'].push(karid);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                //console.log('if ' + courseid + ' == ' + t);
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Karts'].push(karid);
                }
            }
            );
        }
        );
        gliderid.forEach((glidid,i)=>{
            let moreGoodAt = values[glidid].moreGoodAt;
            let goodAt = values[glidid].goodAt;
            moreGoodAt.forEach((courseid,i)=>{
                //console.log('if ' + courseid + ' == ' + t);
                if (courseid == t) {
                    coursedata.Courses[t].moreGoodAt['Gliders'].push(glidid);
                }
            }
            );
            goodAt.forEach((courseid,i)=>{
                //console.log('if ' + courseid + ' == ' + t);
                if (courseid == t) {
                    coursedata.Courses[t].goodAt['Gliders'].push(glidid);
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

function makeTopShelfPreview() {
       let courses = Object.keys(coursedata.Courses);

       let output = document.getElementById('topshelfpreview');

       courses.forEach((t,i)=>{
       var coursePanel = document.createElement('div');
       coursePanel.className = 'coursepaneltopshelf';

       let courseimg = document.createElement('img');
       courseimg.src = `./Images/Course Image/${t}.png`;
       courseimg.className = 'courseimgtopshelf';
       coursePanel.appendChild(courseimg);

       let coursetxt = document.createElement('p');
       coursetxt.innerHTML = coursenames[t];
       coursetxt.className = 'coursetxttopshelf';
       coursePanel.appendChild(coursetxt);

       output.appendChild(coursePanel);


       });
}

