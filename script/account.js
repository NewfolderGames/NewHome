var infoList = window.localStorage.getItem(window.sessionStorage.getItem("user")).split(" ");
var infoDisplay = $("#Info ul li");

$(infoDisplay[0]).html("아이디 : " + infoList[0]);
$(infoDisplay[1]).html("이메일 : " + infoList[2]);

//

var cart = window.localStorage.getItem(window.sessionStorage.getItem("user") + "Cart");
var cartList = [];

var cartAmount = 0;
var cartPrice = 0;

if(cart != null) {
	
	cartList = cart.split(",");
	for(var i in cartList) {
		
		var name = cartList[i].split("_")[0];
		for(var j in itemList) {
			
			if(name == itemList[j].name) {
				
				var amount = parseInt(cartList[i].split("_")[1]);
				cartAmount += amount;
				cartPrice += itemList[j].price * amount;
				
				var itemDiv = ItemDisplay(itemList[j], "#Cart .container .item-container", "");
				var itemP = document.createElement("p");
				itemP.className = "amount";
				itemP.innerHTML = amount + " 개";
				$(itemDiv).children(".info").append(itemP);
				break;
				
			}
			
		}
		
	}
	
}
$("#Cart .container > .info > .amount").html("총 " + cartAmount + " 개");
$("#Cart .container > .info > .price").html("₩ " + cartPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")); //왜 여기는 천 단위가 없는거지???

//

$("#Info .sign-out").on("click", function() {
	
	window.sessionStorage.removeItem("user");
	window.location.href = "./signin.html";
	
});

//

$("#Cart .clear-cart").on("click", function() {
	
	window.localStorage.removeItem(window.sessionStorage.getItem("user") + "Cart");
	window.location.reload();
	
});
