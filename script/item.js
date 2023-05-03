// Item Object

function Item(name, sub, price, priceString, image, tag, description, rating) {

	this.name = name;
	this.sub = sub;
	this.price = price;
	this.priceString = priceString;
	this.image = image;
	this.description = description;
	this.tag = tag;
	this.rating = rating;

}

// Item Display

function ItemDisplay(item, parent, path) {

	console.log(item);
	
	var itemDiv = document.createElement("div");
	itemDiv.className = "item item-close";

			var itemImg = document.createElement("img");
			itemImg.setAttribute("src", path + item.image);
			itemImg.setAttribute("alt", item.name);
			itemDiv.appendChild(itemImg);

			var itemInfo = document.createElement("div");
			itemInfo.className = "info";

				var itemName = document.createElement("p");
				itemName.className = "name";
				itemName.innerHTML = item.name;
				itemInfo.appendChild(itemName);

				var itemSub = document.createElement("p");
				itemSub.className = "sub";
				itemSub.innerHTML = item.sub;
				itemInfo.appendChild(itemSub);
	
				var itemTag = document.createElement("p");
				itemTag.className = "tag";
				itemTag.innerHTML = item.tag;
				itemInfo.appendChild(itemTag);

				var itemRating = document.createElement("p");
				itemRating.className = "rating";
				for (var i = 0; i < 5; i++) {

					if (i + 1 < item.rating) itemRating.innerHTML += "★";
					else itemRating.innerHTML += "☆";

				}
				itemRating.innerHTML += item.rating;
				itemInfo.appendChild(itemRating);
	
				var itemPriceString = document.createElement("p");
				itemPriceString.className = "price";
				itemPriceString.innerHTML = item.priceString;
				itemInfo.appendChild(itemPriceString);

				var itemDescription = document.createElement("p");
				itemDescription.className = "description";
				itemDescription.innerHTML = item.description;
				itemInfo.appendChild(itemDescription);
	
				var itemAdd = document.createElement("a");
				itemAdd.className = "add";
				itemAdd.innerHTML = "Cart <i class=\"material-icons\">add_shopping_cart</i>"
				itemAdd.onclick = function() {
					
					var user = window.sessionStorage.getItem("user");
					if(user == null) {
						
						alert("로그인을 먼저 하세요.");
						window.location.href = "./signin.html";
						return;
						
					}
					var cart = window.localStorage.getItem(user + "Cart");
					var name = $(this).parent().children(".name").html();
					console.log(name);
					if(cart == null) {
						
						window.localStorage.setItem(user + "Cart", name + "_" + 1);
						alert("장바구니에 " + name + "추가 완료! \n현재 개수 : " + 1 + " 개");
						return;
						
					}
					var cartList = cart.split(",");
					for(var i in cartList) {
						
						if(cartList[i].indexOf(name) != -1) {

							var amount = parseInt(cartList[i].split("_")[1]) + 1;
							cartList[i] = name + "_" + amount;
							window.localStorage.setItem(user + "Cart", cartList.join());
							alert("장바구니에 " + name + " 추가 완료! \n현재 개수 : " + amount + " 개");
							return;
							
						}
						
					}
					cartList.push(name + "_" + 1);
					window.localStorage.setItem(user + "Cart", cartList.join());
					alert("장바구니에 " + name + "추가 완료! \n현재 개수 : " + 1 + " 개");
					return;
					
				}
				itemInfo.appendChild(itemAdd);

		itemImg.onclick = function () {

			if(this.parentElement.className == "item item-close") this.parentElement.className = "item item-open";
			else this.parentElement.className = "item item-close";
			
		}
	
		itemDiv.appendChild(itemInfo);

	$(parent).append(itemDiv);

	return itemDiv;

}

// Item Database

var itemList = [];

itemList.push(new Item(	"HAMMARN", "소파베드, 크니사 다크그레이, 블랙", 99000, "₩ 99,000", "./image/hammarn.png", "의자", "2인용 침대로도 사용할 수 있어요. 가벼워서 쉽게 옮길 수 있습니다. 커버를 벗겨서 세탁할 수 있습니다.", 4.5));
itemList.push(new Item(	"HYLLIS", "선반유닛, 실내외겸용 아연도금", 15000, "₩ 15,000", "./image/hyllis.png", "선반", "실내외 어디에서나 사용할 수 있습니다. 제품구성에 포함된 플라스틱 다리받침을 사용하면 바닥에 흠집이 생기지 않습니다.", 3.9));
itemList.push(new Item(	"HELMER", "이동식서랍유닛, 화이트", 27900, "₩ 27,900", "./image/helmer.png", "수납", "서랍마다 라벨칸이 있어서 물건을 쉽게 정리하고 찾을 수 있습니다. 서랍에 스톱 기능이 있어서 안전하게 열 수 있습니다.", 4.2));
itemList.push(new Item(	"KLIPPAN", "2인용소파, 비슬레 그레이", 199000, "₩ 199,000", "./image/klippan.png", "의자", "새로운 분위기를 연출하고 싶다면 커버를 교체해보세요. 커버를 벗겨서 물세탁할 수 있습니다. 10년 품질보증. 자세한 내용은 품질보증 브로슈어를 참조하세요.", 4.7));
itemList.push(new Item(	"DOMBÅS", "옷장, 화이트", 399000, "₩ 399,000", "./image/dombas.png", "옷장", "선반의 높이와 간격을 조절하여 나에게 꼭 맞는 수납공간을 만들 수 있습니다. 조절식 경첩으로 도어를 똑바로 달 수 있습니다.", 4.6));
itemList.push(new Item(	"UTÅKER", "적층식침대+매트리스2, 소나무, 모스훌트 하드", 399000, "₩ 399,000", "./image/utaker.png", "침대", "", 4.6));
itemList.push(new Item(	"SLÄKT", "침대프레임+보조침대/수납, 화이트", 289000, "₩ 289,000", "./image/slakt.png", "침대", "", 4.4));
itemList.push(new Item(	"LERHAMN", "테이블+의자4, 블랙브라운, 비타뤼드 베이지", 199000, "₩ 199,000", "./image/lerhamn.png", "식탁", "", 4.6));
itemList.push(new Item(	"BILLY", "책장+유리도어, 다크블루", 199000, "₩ 199,0000", "./image/billy.png", "수납", "유리도어를 달면 좋아하는 물건을 잘 보이게 놓아둘 수 있고 먼지도 쌓이지 않아요. 하나의 유닛은 한정된 공간에서 그 자체로 충분한 수납공간으로 기능하며, 필요에 따라 더 큰 수납공간으로 확장할 수도 있습니다.", 4.8));
itemList.push(new Item(	"FREDDE", "워크스테이션, 블랙", 249000, "₩ 249,0000", "./image/fredde.png", "책상", "워크스테이션에서 더욱 편하게 일해보세요. 곡선 디자인이기 때문에 책상에 가까이 다가앉을 수 있고 손목과 팔을 편안하게 올려놓을 수 있습니다.", 4.9));
itemList.push(new Item(	"VITTSJÖ", "노트북책상, 블랙브라운, 유리", 39900, "₩ 39,9000", "./image/vittsjo.png", "책상", "강화유리와 메탈 소재를 사용하여 내구성이 뛰어나고 경쾌한 느낌을 줍니다. 선반 한 면은 블랙브라운, 또 다른 면은 블랙으로 마감 처리되어 있어서 공간에 맞게 원하는 느낌을 표현할 수 있습니다.", 4.1));
itemList.push(new Item(	"MARKUS", "회전의자, 비슬레 다크그레이", 199000, "₩ 199,0000", "./image/markus.png", "의자", "10년 품질보증. 자세한 내용은 품질보증 브로슈어를 참조하세요. 각도를 조절하고 고정시킬 수 있어서 더욱 안전하며 원하는 자세로 편하게 앉을 수 있습니다.", 4.5));
itemList.push(new Item(	"ÅDUM", "장모러그, 페일핑크", 49900, "₩ 49,900", "./image/adum.png", "러그", "촘촘하고 도톰한 러그로 방음효과가 뛰어나며 부드럽고 푹신합니다. 합성 섬유로 제작된 러그로 튼튼하고 때가 타지 않으며 관리가 쉽습니다.", 4.3));
itemList.push(new Item(	"VRÅBY", "단모러그, 그레이/화이트", 99000, "₩ 99,900", "./image/vraby.png", "러그", "합성 섬유로 제작된 러그로 튼튼하고 때가 타지 않으며 관리가 쉽습니다. 굵은 파일을 사용하여 푹신하고 방음 효과가 뛰어납니다.", 4.7));
itemList.push(new Item(	"TJENA", "수납함+뚜껑, 화이트", 3900, "₩ 3,900", "./image/tjena.png", "수납", "종이와 사진, 기념품 등을 넣어두세요. 손잡이가 있는 튼튼한 수납상자로 쉽게 꺼내 들어올릴 수 있습니다. 라벨홀더를 활용하면 내용물을 한눈에 확인하고 빠르게 찾을 수 있습니다", 3.6));
itemList.push(new Item(	"FJÄLLBO", "커피테이블, 블랙", 49900, "₩ 49,900", "./image/fjallbo.png", "커피테이블", "메탈과 원목 소재의 소박한 커피테이블로, 별도의 선반에는 잡지 등을 두고 편리하게 사용할 수 있습니다.", 4.1));
itemList.push(new Item(	"VIMLE", "4인용소파, 긴의자, 오르스타 골든옐로우", 1099000, "₩ 1,099,000", "./image/vimle.png", "쇼파", "긴의자는 좌우 어디에든 놓을 수 있고 언제든지 위치를 바꿀 수 있습니다. 10년 품질보증. 자세한 내용은 품질보증 브로슈어를 참조하세요.", 4.6));
itemList.push(new Item(	"ALÄNG", "플로어스탠드, 니켈 도금, 화이트", 59900, "₩ 59,900", "./image/alang.png", "전등", "나에게 맞게 높이를 조절할 수 있습니다.", 4.8));

// Tag Database;

var tagList = [];

tagList.push("모두");
tagList.push("의자");
tagList.push("선반");
tagList.push("수납");
tagList.push("침대");
tagList.push("식탁");
tagList.push("책상");
tagList.push("러그");
tagList.push("커피테이블");
tagList.push("쇼파");
tagList.push("전등");