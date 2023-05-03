// Sort

var hash = window.location.hash.substring(1).split("_");
var sortType = hash[0];
var sortOrder = hash[1];

var order = [];
var orderList = [];

switch(sortType) {
		
	case "name": case "price": case "rating": case "new": break;
	default: sortType = "new"; break;
		
}
switch(sortOrder) {
		
	case "as": case "de": break;
	default: switch(sortType) {
				
		case "name": case "price": case "new": sortOrder = "as"; break;
		case "rating": sortOrder = "de"; break;
				
	} break;
		
}
window.location.hash = sortType + "_" + sortOrder;

if(sortType != "new") {
	
	for(var i in itemList) orderList.push(eval("itemList[i]." + sortType + "+ \"_\" + " + i));
	switch(sortType) {
			
		case "name": orderList.sort(); break;
		case "price": orderList.sort(function(a, b) { return (parseInt(a) - parseInt(b)); }); break;
		case "rating": orderList.sort(function(a, b) { return (parseFloat(a) - parseFloat(b)); }); break;
			
	} // 이 끔찍한 지옥에서 절 구제 하시옵소서...
	if(sortOrder == "as") for(var i in orderList) ItemDisplay(itemList[parseInt(orderList[i].substring(orderList[i].lastIndexOf("_") + 1))], "#Item > .container > .item-container", "");
	else for(var i = orderList.length - 1; i >= 0; i--) ItemDisplay(itemList[parseInt(orderList[i].substring(orderList[i].lastIndexOf("_") + 1))], "#Item > .container > .item-container", "");
	
} else {
	
	if(sortOrder == "de") for(var i in itemList) ItemDisplay(itemList[i], "#Item > .container > .item-container", "");
	else for(var i = itemList.length - 1; i >= 0; i--) ItemDisplay(itemList[i], "#Item > .container > .item-container", "");

}

// Sort Button 

var sortButton = $("#Item > .container ul li");

for(var i in sortButton) {
	
	sortButton[i].onclick = function() {
		
		var type = this.id.substring(5);
		if(sortType != type) {
			
			window.location.hash = type;
			window.location.reload();
			
		} else {
			
			window.location.hash = sortOrder == "as" ? sortType + "_de" : sortType + "_as";
			window.location.reload();
			
		}

	};
	if(sortButton[i].id != undefined) {
		
		if(sortType == sortButton[i].id.substring(5)) {
		
			sortButton[i].style.color = "red";
			sortButton[i].getElementsByTagName("i")[0].innerHTML = sortOrder == "as" ? "arrow_drop_up" : "arrow_drop_down";

		}

	}
	
}
