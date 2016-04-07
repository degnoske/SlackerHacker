(function() {
  
  var quotes = [
	"'Stay Hungry. Stay Foolish.' - Steve Jobs",
	"'Good Artists Copy, Great Artists Steal' - Pablo Picasso",
	"'Argue with idiots, and you become an idiot.' - Paul Graham",
	"'Be yourself; everyone else is already taken.' - Oscar Wilde",
    "'Simplicity is the ultimate sophistication.' - Leonardo Da Vinci",
	"'Excuses burn zero calories. Get up!' - Vuong Nguyen"
  ];
    
	var rand = Math.floor(Math.random() * quotes.length);
	
      document.getElementById("quotes").innerHTML = quotes[rand];
	  
	var bgImage = ['../img/run.jpg','../img/running.jpg'],
    selectBG = bgImage[Math.floor(Math.random() * bgImage.length)];
 
	document.getElementByClassName("intro").style.backgroundImage = 'url(' + selectBG + ')';
})(); 

$(document).ready(function() {

	$(".intro").RandBG({
		ClassPrefix: "bg",
		count: 10
	});
}); 


