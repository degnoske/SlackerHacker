 var bg = chrome.extension.getBackgroundPage();
//formats time output to see on dev page
 function formatgoodTime(){
   var hr,min,sec,totalsec;
   if(bg.goodTimer.get_isStarted())
   {
     bg.goodTimer.Start();
     totalsec= setInterval(bg.goodTimer.get_sec(),1000);
   }
   if (bg.goodTimer.get_isPaused())
   {
     bg.goodTimer.Pause()
     return("Study Time: is paused");
   }
   if(bg.goodTimer.get_isStarted()==false && bg.goodTimer.get_isPaused()==false)
   {
     bg.goodTimer.Stop();
     bg.goodTimer.set_sec(0);
     return("Study Time: " + 0 + ":" + 0 + ":" + 0);
   }
   hr  = Math.floor(totalsec / 3600);
   min = Math.floor((totalsec - (hr * 3600))/60);
   sec = Math.floor(totalsec - (hr * 3600) -  (min * 60));

   if (hr < 10)   { hr    = "0" + hr; }
   if (min < 10) { min = "0" + min; }
   if (sec < 10)  { sec  = "0" + sec; }

   return("Study Time: " + hr + ":" + min + ":" + sec);

 }
//displays bad time clock
 function formatbadTime(){
   var hr,min,sec,totalsec;
   if(bg.badTimer.get_isStarted())
   {
     bg.badTimer.Start();
     totalsec= setInterval(bg.badTimer.get_sec(),1000);
   }
   if (bg.goodTimer.get_isStarted()==true)
   {
     badTimer.Pause()
     bg.badTimer.set_sec(0);
     return("Bad Timer: is paused");
   }
   if(bg.badTimer.get_isStarted()==false && bg.badTimer.get_isPaused()==false)
   {
     bg.badTimer.Stop()
     bg.badTimer.set_sec(0);
     return("Bad Timer: " + 0 + ":" + 0 + ":" + 0);
   }
   hr  = Math.floor(totalsec / 3600);
   min = Math.floor((totalsec - (hr * 3600))/60);
   sec = Math.floor(totalsec - (hr * 3600) -  (min * 60));

   if (hr < 10)   { hr    = "0" + hr; }
   if (min < 10) { min = "0" + min; }
   if (sec < 10)  { sec  = "0" + sec; }

   return("Bad Timer: " + hr + ":" + min + ":" + sec);

 }
//changes html page to show when the time is started stopped, paused and current time on clock
function changeDevDisp(){
		console.log("changing start val");

	if(bg.goodTimer.get_isStarted())
	{
		document.getElementById('startPage').innerHTML = "timer started";
	}
  else
  {
      document.getElementById('startPage').innerHTML = "start timer";
  }

  if(bg.goodTimer.get_isPaused())
	{
		document.getElementById('pausePage').innerHTML = "timer paused";
	}
  else
  {
      document.getElementById('pausePage').innerHTML = "pause timer";
  }

  if(bg.goodTimer.get_isStarted()==true)
	{
		document.getElementById('stopPage').innerHTML = "stop timer";
	}
  else
  {
      if(!bg.goodTimer.get_isPaused())
      {
      document.getElementById('stopPage').innerHTML = "timer stopped";
      }
  }

  document.getElementById('goodTimer').innerHTML= formatgoodTime();

  document.getElementById('badTimer').innerHTML = formatbadTime();



}

//changedisp is called every second to keep updateing the page
setInterval(changeDevDisp,1000);
