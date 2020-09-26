var coursedata = {
                         Courses: {}
         			}
                     function generateCourseList(){
                     	Object.keys(coursenames).forEach((t, i) => { 
                     		coursedata.Courses[t] = {};
                     		coursedata.Courses[t].moreGoodAt = {};
                     		coursedata.Courses[t].goodAt = {};
                     		coursedata.Courses[t].moreGoodAt.Drivers = [];
                     		coursedata.Courses[t].moreGoodAt.Karts = [];
                     		coursedata.Courses[t].moreGoodAt.Gliders = [];
                     		coursedata.Courses[t].goodAt.Drivers = [];
                     		coursedata.Courses[t].goodAt.Karts = [];
                     		coursedata.Courses[t].goodAt.Gliders = [];
                     		characterid.forEach((charid, i) => {
                     			let moreGoodAt = values[charid].moreGoodAt;
                     			let goodAt = values[charid].goodAt;
                     			moreGoodAt.forEach((courseid, i) => {
                     			//console.log('if ' + courseid + ' == ' + t);
                     			if(courseid == t){
                     				coursedata.Courses[t].moreGoodAt['Drivers'].push(charid);  
                     			}
                     			});
                     			goodAt.forEach((courseid, i) => {
                     			//console.log('if ' + courseid + ' == ' + t);
                     			if(courseid == t){
                     				coursedata.Courses[t].goodAt['Drivers'].push(charid);  
                     			}
                     			});
                     		});
                     		kartid.forEach((karid, i) => {
                     			let moreGoodAt = values[karid].moreGoodAt;
                     			let goodAt = values[karid].goodAt;
                     			moreGoodAt.forEach((courseid, i) => {
                     			//console.log('if ' + courseid + ' == ' + t);
                     			if(courseid == t){
                     				coursedata.Courses[t].moreGoodAt['Karts'].push(karid);  
                     			}
                     			});
                     			goodAt.forEach((courseid, i) => {
                     			//console.log('if ' + courseid + ' == ' + t);
                     			if(courseid == t){
                     				coursedata.Courses[t].goodAt['Karts'].push(karid);  
                     			}
                     			});
                     		});
                     		gliderid.forEach((glidid, i) => {
                     			let moreGoodAt = values[glidid].moreGoodAt;
                     			let goodAt = values[glidid].goodAt;
                     			moreGoodAt.forEach((courseid, i) => {
                     			//console.log('if ' + courseid + ' == ' + t);
                     			if(courseid == t){
                     				coursedata.Courses[t].moreGoodAt['Gliders'].push(glidid);  
                     			}
                     			});
                     			goodAt.forEach((courseid, i) => {
                     			//console.log('if ' + courseid + ' == ' + t);
                     			if(courseid == t){
                     				coursedata.Courses[t].goodAt['Gliders'].push(glidid);  
                     			}
                     			});
                     		});
         
                     	});
                     }
         			
                     function makeCourseIcons(){
         
                     }