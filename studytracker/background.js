
var sec=0;

var myTime;
var isStarted=false;
var start=document.getElementById("start");

//Pause Function Not Working
var pause=document.getElementById("pause");



function Start(){
	if (isStarted == false) {
		set_isStarted(true);
		myTime = start.onclick = setInterval(counter, 1000);
		set_interval(myTime);
	}
}

function Pause(){
	clearInterval(myTime);
}
function counter() {

	sec++;

	set_sec(sec);
}
function set_isStarted(bool){
	isStarted=bool;
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


