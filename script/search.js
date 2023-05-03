// Search Query

var queryFull = window.location.hash.substring(1);
var queryList = queryFull.split("_");

var list = [];
var first = true;

for(var i in queryList) {
	
	var querySliced = queryList[i].split(":");
	var query = querySliced.length == 1 ? "name" : querySliced[0];
	var input = querySliced.length == 1 ? querySliced[0] : querySliced[1];
	var operator = "";
	
	switch(query) {
			
		case "이름": query = "name"; break;
		case "태그": query = "tag"; break;
		case "가격": query = "price"; break;
		case "평가": query = "rating"; break;
			
	}
	switch(input[0]) {
					
		case "=": if(input[1] == "=") input = ipnut.substring(2); operator = "=="; break;
		case ">": case "%3C": if(input[1] == "=") { operator = ">="; input = input.substring(2); } else { operator = ">"; input = input.substring(1); } break;
		case "<": case "%3E": if(input[1] == "=") { operator = "<="; input = input.substring(2); } else { operator = "<"; input = input.substring(1); } break;
		default: operator = "==="; break;
					
	}
	if(typeof(input) == "string") input = "\"" + input + "\"";
	
	var tempList = [];
	if(i == 0) tempList = itemList;
	else tempList = list;
	list = [];
	
	for (var j in tempList) {

		console.log(eval("tempList[j]." + query));
		if (eval("tempList[j]." + query + operator + input)) {
			
			list.push(tempList[j]);

		}
	}
	
}
if(list.length != 0) {
	
	$("#Result > .container > .item-container > .no-result").css({ display: "none" });
	for(var o in list) ItemDisplay(list[o], "#Result > .container > .item-container", "");

}

