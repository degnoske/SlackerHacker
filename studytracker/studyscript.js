 var bg = chrome.extension.getBackgroundPage();

window.onload = function() {

    var start = document.getElementById("start");
    start.onclick = start_time;

    var view = document.getElementById("view");
   view.onclick = view_time;


    var pause = document.getElementById("pause");
    pause.onclick=pause_time;

    var resume = document.getElementById("resume");
    resume.onclick=start_time;

    var stop = document.getElementById("stop");
    stop.onclick=stop_time;
};

  /**
   * updates time Display every 1000 ms
   */
  function view_time() {
         setInterval(function () {
          document.getElementById("time").innerHTML = formatTime();
         }, 1000);

  }
function pause_time(){
    bg.Pause();

}
  function start_time() {

      bg.Start();
      document.getElementById("start").innerHTML = "Studying";
  }



function stop_time() {

    bg.Stop();
    document.getElementById("start").innerHTML = "Start Studying!";
}
  /**
   *
   * @returns Formatted Time String
   */
  function formatTime(){
   var totalsec= bg.get_sec();

    var hr  = Math.floor(totalsec / 3600);
    var min = Math.floor((totalsec - (hr * 3600))/60);
    var sec = Math.floor(totalsec - (hr * 3600) -  (min * 60));

    if (hr < 10)   { hr    = "0" + hr; }
    if (min < 10) { min = "0" + min; }
    if (sec < 10)  { sec  = "0" + sec; }

    return("Study Time: " + hr + ":" + min + ":" + sec)

}
	
