var homeImages = [
	"imgs/skywayShortSmall2_01.png",
	"imgs/skywayShortSmall2_02.png",
	"imgs/skywayShortSmall2_03.png"
];

var aboutImages = [
	"imgs/1140_01_01.png",
	"imgs/1140_01_02.png",
	"imgs/1140_01_03.png"
];

var newsImages = [
	"imgs/1140_02_01.png",
	"imgs/1140_02_02.png",
	"imgs/1140_02_03.png"
];

var contactImages = [
	"imgs/1140_03_01.png",
	"imgs/1140_03_02.png",
	"imgs/1140_03_03.png"
];

var participateImages = [
	"imgs/1140_04_01.png",
	"imgs/1140_04_02.png",
	"imgs/1140_04_03.png"
];

var randomImage = function (whichArray) {
	var randomNumber = Math.floor(Math.random() * whichArray.length);
	document.getElementById("masthead").src = whichArray[randomNumber];
	console.log(randomNumber);
	console.log(whichArray);
	console.log(whichArray[randomNumber]);
}

// randomImage (homeImages);
