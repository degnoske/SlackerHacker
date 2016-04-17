
 var bg = chrome.extension.getBackgroundPage();
  var port = chrome.runtime.connect({name: "exTimers"});



  /**
   * updates time Display every 1000 ms
   */
  //function view_time() {
    //     setInterval(function () {
      //    document.getElementById("time").innerHTML = formatTime();
      //   }, 1000);
var flag = 0;
  //}
function pause_time(){
    port.postMessage({timer: "Pause"});
}
  function start_time() {

      port.postMessage({timer: "Start"});
      flag = 1;
  }

function stop_time() {

    port.postMessage({timer: "Stop"});
    flag = 2;
}
  /**
   *
   * @returns Formatted Time String
   */
  function formatTime(){
   var totalsec= bg.goodTimer.get_sec();

    var hr  = Math.floor(totalsec / 3600);
    var min = Math.floor((totalsec - (hr * 3600))/60);
    var sec = Math.floor(totalsec - (hr * 3600) -  (min * 60));

    if (hr < 10)   { hr    = "0" + hr; }
    if (min < 10) { min = "0" + min; }
    if (sec < 10)  { sec  = "0" + sec; }

    return("Study Time: " + hr + ":" + min + ":" + sec)

}


window.onload = function() {
    var start = document.getElementById("start");
    start.onclick = start_time;

    //var view = document.getElementById("view");
   //view.onclick = view_time;


    var pause = document.getElementById("pause");
    pause.onclick=pause_time;

    //var resume = document.getElementById("resume");
    //resume.onclick=start_time;

    var stop = document.getElementById("stop");
    stop.onclick=stop_time;

    if(flag == 1)
    {
      document.getElementById("start").value = "Studying";
    }
    else if (flag == 2)
    {
      document.getElementById("start").value = "Start Studying!";
    }
  }

	//var viewStats = document.getElementById("viewStats");
	//viewStats.onclick=Hello;


	//var viewTime = document.getElementById("time");
	//viewTime = view_time();


//taken from this example http://stackoverflow.com/questions/6132018/how-can-i-get-the-current-tab-url-for-chrome-extension

/*chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {

     // since only one tab should be active and in the current window at once
     // the return variable should only have one entry
     var activeTab = arrayOfTabs[0];
     var activeTabURL = activeTab.url;; // or do whatever you need

	if(activeTabURL == "https://www.facebook.com/")
	{
		//do something here

	}
  });*/
