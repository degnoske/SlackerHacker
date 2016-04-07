(function() {
  
  var quotes = [
	"'Argue with idiots, and you become an idiot.' - Paul Graham",
	"'Be yourself; everyone else is already taken.' - Oscar Wilde",
    "'Simplicity is the ultimate sophistication.' - Leonardo Da Vinci",
	"Positive thoughts are medicinal.",
	"Have you smiled today?",
	"If you judge a book by its cover, you might miss out an amazing story."
  ];
  
  var reminder = [
    "A good breakfast will kick off your day!",
	"Drink plenty of water throughout the day.",
	"Fill your lunch with vegetable and healthy options.",
	"Drinking tea can boost your metabolism.",
	"Tired? How's about a short nap :p",
	"'Excuses burn zero calories. Get up!' - Vuong Nguyen",
	"Dream and believe in your dreams...when you sleep.",
	"Still working? Grab some coffee."
	];
	var rand = Math.floor(Math.random() * quotes.length);
	
      document.getElementById("quotes").innerHTML = quotes[rand];
	  
	var bgImage = ['../img/run.jpg','../img/running.jpg'],
    selectBG = bgImage[Math.floor(Math.random() * bgImage.length)];
 
	document.getElementByClassName("intro").style.backgroundImage = 'url(' + selectBG + ')';
})(); 

 
function bgTimer() {
	
	//get clock time
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m); s = checkTime(s);
    
	//period of time
	if () {
		
	} else if () {
		
	}
    var t = setTimeout(bgTimer, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

