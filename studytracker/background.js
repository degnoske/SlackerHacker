
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

//This line opens up a long-lived connection to your background page.
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "message");
  port.onMessage.addListener(function(msg) {
    if (msg.message == "pause")
      Pause();
  });
});
