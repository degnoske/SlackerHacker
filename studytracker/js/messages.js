(function() {
  
  var quotes = [
	"'Argue with idiots, and you become an idiot.' - Paul Graham",
	"'Be yourself; everyone else is already taken.' - Oscar Wilde",
    "'Simplicity is the ultimate sophistication.' - Leonardo Da Vinci",
	"Positive thoughts are medicinal.",
	"Have you smiled today?",
	"If you judge a book by its cover, you might miss out an amazing story."
  ];
  
	var rand = Math.floor(Math.random() * quotes.length);
	
      document.getElementById("quote").innerHTML = quotes[rand];
	
	bgTimer();
	
})(); 

function bgTimer() {
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
	//get clock time
    var today = new Date();
    var h = today.getHours();
    
	//period of time
	if (h>5 && h<=9) {
		$(".intro").addClass("breakfast");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h>9 && h<=10) {
		$(".intro").addClass("water");
		document.getElementById("reminders").innerHTML = reminder[1];
	} else if (h>10 && h<=13) {
		$(".intro").addClass("lunch");
		document.getElementById("reminders").innerHTML = reminder[2];
	} else if (h>13 && h<=15) {
		$(".intro").addClass("tea");
		document.getElementById("reminders").innerHTML = reminder[3];
	} else if (h>15 && h <=16) {
		$(".intro").addClass("nap");
		document.getElementById("reminders").innerHTML = reminder[4];
	} else if (h>16 && h < 19) {
		$(".intro").addClass("run");
		document.getElementById("reminders").innerHTML = reminder[5];
	} else if (h>21 && h<=23) {
		$(".intro").addClass("dream");
		document.getElementById("reminders").innerHTML = reminder[6];
	} else if (h >= 0 && h <=5) {
		$(".intro").addClass("coffee");
		document.getElementById("reminders").innerHTML = reminder[7];
	} 
    var t = setTimeout(bgTimer, 500);
}


