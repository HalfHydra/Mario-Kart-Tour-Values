var convertedData = {};

function convertToUsable() {
	console.log(Object.keys(values));
	Object.keys(values).forEach((t,i)=>{
		convertedData[t] = {};
		convertedData[t].nameEng = values[t].nameEng;
		convertedData[t].rarityId = values[t].rarityId;
		convertedData[t].itemTypeId = values[t].itemTypeId;
		convertedData[t].sortId = values[t].sortId;
		convertedData[t].moreGoodAt = [];
		convertedData[t].goodAt = [];
		convertedData[t].unlock3 = [];
		convertedData[t].unlock6 = [];

		//console.log(Object.values(values[t].moreGoodAt));

		Object.values(values[t].moreGoodAt).forEach((y, i) => {
			convertedData[t].moreGoodAt.push(y.name);
		});

		Object.values(values[t].goodAt).forEach((y, i) => {
			switch(y.promotionLevel){
				case 0:
				convertedData[t].goodAt.push(y.name);
				break;
				case 3:
				convertedData[t].goodAt.push(y.name);
				convertedData[t].unlock3.push(y.name);
				break;
				case 6:
				convertedData[t].goodAt.push(y.name);
				convertedData[t].unlock6.push(y.name);
				break;
			}
		});

	});
	console.log(convertedData);
	console.log(values);
	values = convertedData;
	console.log(values);
	console.log(coursedata);
	generateCourseList();
}