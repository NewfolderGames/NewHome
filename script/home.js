// Main Image Scroll List

scrollList = [];
scrollList.push(itemList[8]);
scrollList.push(itemList[12]);
scrollList.push(itemList[14]);

for (var i = 0; i < scrollList.length; i++) {

    ItemDisplay(scrollList[i], "#Image-Scroll", "");

}

// Home ImageScroll Sliding

var imageScroll = false;
var imageScrollList = $("header .container .item");
var imageScrollNumber = 0;
var buttonList = $("header .container .button");

$(buttonList[0]).on("click", function () {
    
    if(!imageScroll) {
        
        imageScroll = true;

        $(imageScrollList[imageScrollNumber]).animate({ left: "100%" }, 1000, function () {

            $(this).css({left : "-100%"});

        });

        if (--imageScrollNumber < 0) imageScrollNumber = imageScrollList.length - 1;

        $(imageScrollList[imageScrollNumber]).css({left : "-100%"});
        $(imageScrollList[imageScrollNumber]).animate({

            left: "0"

        }, 1000, function() { imageScroll = false; });
        
    } 
    
});

$(buttonList[1]).on("click", function () {

    if(!imageScroll) {

    	imageScroll = true;

        $(imageScrollList[imageScrollNumber]).animate({ left: "-100%" }, 1000, function () {

            $(this).css({left : "100%"});

        });

        if (++imageScrollNumber >= imageScrollList.length) imageScrollNumber = 0;

        $(imageScrollList[imageScrollNumber]).css({left : "100%"});
        $(imageScrollList[imageScrollNumber]).animate({

            left: "0"

        }, 1000, function() { imageScroll = false; });
        
    }
    
});

$(imageScrollList[0]).css({left: 0});

// Trending Item

var itemTrending = [];
itemTrending.push(itemList[4]);
itemTrending.push(itemList[9]);
itemTrending.push(itemList[1]);
itemTrending.push(itemList[13]);
itemTrending.push(itemList[3]);
itemTrending.push(itemList[6]);

for(var i in itemTrending) {
	
	ItemDisplay(itemTrending[i], "#Trending > .container > .item-container", "");
	
}

// Trending Item

var itemNew = [];
itemNew.push(itemList[itemList.length - 1]);
itemNew.push(itemList[itemList.length - 2]);
itemNew.push(itemList[itemList.length - 3]);
itemNew.push(itemList[itemList.length - 4]);
itemNew.push(itemList[itemList.length - 5]);
itemNew.push(itemList[itemList.length - 6]);

for(var i in itemNew) {
	
	ItemDisplay(itemNew[i], "#New > .container > .item-container", "");
	
}