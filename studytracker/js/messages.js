//@author Vuong Nguyen
//@pre an array of reminders, bgTimer() 
//@return Main function. Display the random reminders and call bgTimer() to change the background img
(function() {
  
  var quotes = [
	"Try to be a rainbow in someone's cloud. - Maya Angelou",
	"Put your heart, mind, and soul into even your smallest acts. This is the secret of success. - Swami Sivananda",
	"The best preparation for tomorrow is doing your best today. - H. Jackson Brown, Jr.",
	"'Argue with idiots, and you become an idiot.' - Paul Graham",
    "'Simplicity is the ultimate sophistication.' - Leonardo Da Vinci",
	"Positive thoughts are medicinal.",
	"Have you smiled today?",
	"If you judge a book by its cover, you might miss out an amazing story.",
	"'Be yourself; everyone else is already taken.' - Oscar Wilde"
  ];
  
	var rand = Math.floor(Math.random() * quotes.length);
	
      document.getElementById("quote").innerHTML = quotes[rand];
	
	bgTimer();
	
})(); 

//@author Vuong Nguyen
//@pre Load the real time clock from JavaScript, an array of reminders 
//@return Based on the clock time, use jQuery to change the background image, display the suitable reminder
function bgTimer() {
	var reminder = [
    "A good breakfast will kick off your day!",
	"Drink plenty of water throughout the day.",
	"Fill your lunch with vegetable and healthy options.",
	"Drinking tea can boost your metabolism.",
	"Tired? How's about a short nap?",
	"Excuses burn zero calories. Get up!",
	"Still working? Take a \<\ br \/ \>",
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
	} else if (h>13 && h<=14) {
		$(".intro").addClass("tea");
		document.getElementById("reminders").innerHTML = reminder[3];
	} else if (h>14 && h <=16) {
		$(".intro").addClass("nap");
		document.getElementById("reminders").innerHTML = reminder[4];
	} else if (h>16 && h <= 20) {
		$(".intro").addClass("run");
		document.getElementById("reminders").innerHTML = reminder[5];
	} else if (h> 20 && h<=22) {
		$(".intro").addClass("animal");
		document.getElementById("reminders").innerHTML = reminder[6];
	} else if (h>22 && h<=23) {
		$(".intro").addClass("dream");
		document.getElementById("reminders").innerHTML = reminder[7];
	} else if (h >= 0 && h <=5) {
		$(".intro").addClass("coffee");
		document.getElementById("reminders").innerHTML = reminder[9];
	} 
    var t = setTimeout(bgTimer, 500);
}


