
var sec=0;
var myTime;
var isStarted=false;

function Start(){
	if (isStarted == false) {
		set_isStarted(true);
		myTime = setInterval(counter, 1000);
		set_interval(myTime);
	}
}

function Stop(){

	clearInterval(get_interval());
	set_isStarted(false);
	set_sec(0);
}

function Pause(){
	clearInterval(get_interval());
	set_isStarted(false);
}


function counter() {

	sec++;

	set_sec(sec);
}
function set_isStarted(bool){
	isStarted=bool;
}
function get_isStarted(){
	return isStarted;
}
function set_interval(interval){
	myTime=interval;

}
function set_sec(second){
	sec=second;
}
function get_interval(){
	return myTime;
}
function get_sec(){

	return sec;

}

///////////////////
////Bad Timer/////
//////////////////

var bad_sec=0;
var bad_Time;
var isBadStarted=false;

function BadStart(){
	if (isBadStarted == false) {
		set_isBadStarted(true);
		bad_Time = setInterval(counter, 1000);
		set_interval(bad_time);
	}
}

function BadStop(){

	clearInterval(get_interval());
	set_isSBadtarted(false);
	set_Badsec(0);
}

function BadPause(){
	clearInterval(get_interval());
	set_isBadStarted(false);
}


function Badcounter() {

	bad_sec++;

	set_sec(bad_sec);
}
function set_isBadStarted(bool){
	isBadStarted=bool;
}
function get_isBadStarted(){
	return isStarted;
}
function set_Badinterval(interval){
	bad_Time=interval;

}
function set_Badsec(second){
	bad_sec=second;
}
function get_Badinterval(){
	return bad_Time;
}
function get_Badsec(){

	return bad_sec;

}




//This line opens up a long-lived connection to your background page.
chrome.runtime.onConnect.addListener(function(port)
 {
  console.assert(port.name == "message");
  port.onMessage.addListener(function(msg)
   {
	  if (msg.message == "pause")
	  {
	  	      Pause();
	  }
	  else if (msg.message == "startBad")
	  {
	  		  StartBad();
	  }
	  else if (msg.message == "start")
	  {
	  			Start();
	  }
  });
});

//taken from this example http://stackoverflow.com/questions/6132018/how-can-i-get-the-current-tab-url-for-chrome-extension
//checks if current tab is not facebook. If it isn't it starts the timer and pauses the bad timer. 
//not verifiably working yet. No way to see bad timer.

chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = arrayOfTabs[0];
     var activeTabURL = activeTab.url;; // or do whatever you need
	
	if(activeTabURL != "https://www.facebook.com/")
	{	
		BadPause();
		
		Start();

	}
  });
