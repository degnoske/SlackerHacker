//Author: SRI GAYATRI
chrome.webNavigation.onCompleted.addListener(function(e)
	{
		var activeTab = window.location.hostname; 
		var url =e.url;
		var n1 = url.indexOf("www.");
		var n2 = url.indexOf(".com") + 4;
		var domain = url.slice(n1,n2);
		if(domain!="")
		{
			
			$( document ).ready(function() 
			{
				var jqxhr = $.post("http://people.eecs.ku.edu/~psundara/exten/checker.php", {dataToSendToServer1: domain, dataToSendToServer2: "server"}, function(data) 
				{
					$('#foo').html(data);
					if(document.getElementById("foo").innerHTML == 1)
					{
						//Author Luke Dercher
						var port = chrome.runtime.connect({name: "message"});
						port.postMessage({message: "pause"});

						if (confirm("Are you sure you want get on social media? (Click Cancel to redirect to Google") == true) 
						{
							BadStart();
							Pause();
					   	 } 
					   	 else 
					   	 {
							chrome.tabs.update({url: "https://www.google.com"});
							window.close();
							Start();
					   	 }
					   	
					}
				});
			});
			
		}
		
		
	});
//Author: Dylan Egnoske
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

var storageGood
function store_good_sec(aValue)
{
	storageGood = aValue
}

function get_good_store()
{
	if(!storageGood)
	{
		storageGood = 0;
	}
	return storageGood
}

var storageBad
function store_bad_sec(aValue)
{
	storageBad = aValue
}

function get_bad_store()
{
	if(!storageBad)
	{
		storageBad = 0;
	}
	return storageBad
}
//Author: Luke Dercher
///////////////////
////Bad Timer/////
//////////////////

var bad_sec=0;
var bad_Time;
var isBadStarted=false;

function BadStart(){
	if (isBadStarted == false) {
		
		set_isBadStarted(true);
		bad_Time = setInterval(Badcounter, 1000);
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
	set_Badsec(bad_sec);
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


