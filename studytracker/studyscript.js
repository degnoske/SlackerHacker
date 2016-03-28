  var bg = chrome.extension.getBackgroundPage();

window.onload = function() {

    var start = document.getElementById("start");
    start.onclick = start_time;

    var view = document.getElementById("view");
   view.onclick = view_time;


    var pause = document.getElementById("pause");
    pause.onclick=pause_time;
};

  function view_time() {


         setInterval(function () {
          document.getElementById("time").innerHTML = "Study Time:  " + bg.get_sec();
         }, 1000);

  }

  function start_time() {

      bg.Start();
  }

  function pause_time(){
      clearInterval(bg.get_interval());


  }


	

    
