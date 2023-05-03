console.log(window.sessionStorage.getItem("user"));
if(window.sessionStorage.getItem("user") != null) {
	
	console.log($("#nav-menu li:last-child a"));
	$("#nav-menu li:last-child a").html("ACCOUNT");
	$("#nav-menu li:last-child a").attr("href", "./account.html");
	
} 

//

var navOpen = false;
var navButton = document.getElementById("nav-button");
var navMenu = document.getElementById("nav-menu");

navButton.onclick = function () {
    
    navOpen = !navOpen;
    if(navOpen) {
        
        navButton.innerHTML = "close";
		navButton.style = "transform: rotate(90deg);";
        navMenu.style.height = "6em";
        
    } else {
        
        navButton.innerHTML = "menu";
		navButton.style = "transform: rotate(0deg);";
        navMenu.style.height = 0;
        
    }
    
};