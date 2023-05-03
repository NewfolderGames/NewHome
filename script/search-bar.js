// Search Bar

document.getElementById("Search-Bar").onkeypress = function (e) {

	if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
		
		window.location.href = "./search.html#" + this.value.replace(new RegExp(" ", "g"), '_');
		if(window.location.href.indexOf("search.html") != -1) window.location.reload();
		
	}
	
}

// Search Help 

var queryOpen = false;
var queryButton = document.getElementById("Query-Button");
var queryMenu = document.getElementById("Query");

queryButton.onclick = function () {
    
    queryOpen = !queryOpen;
    if(queryOpen) {
        
		queryButton.getElementsByTagName("i")[0].style = "transform: rotate(-180deg);";
        queryMenu.style.height = "35em";
        
    } else {
        
		queryButton.getElementsByTagName("i")[0].style = "transform: rotate(0deg);";
        queryMenu.style.height = "2em";
        
    }
    
};