 var bg = chrome.extension.getBackgroundPage();
 var startFlag = false;
 var pauseFlag = false;
 var stopFlag = false;
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
   if (bg.badTimer.get_isStarted()==false)
   {
     bg.badTimer.Pause()
     bg.badTimer.set_sec(0);
     return("Bad Timer: is paused");
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
    startFlag = true;
	}
  else
  {
      document.getElementById('startPage').innerHTML = "start timer";
  }

  if(bg.goodTimer.get_isPaused())
	{
		document.getElementById('pausePage').innerHTML = "timer paused";
    pauseFlag = true;
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
      stopFlag = true;
      }
  }

  document.getElementById('goodTimer').innerHTML= formatgoodTime();

  document.getElementById('badTimer').innerHTML = formatbadTime();

  testSuite();
}

function testSuite()
{
  if(startFlag)
  {
    document.getElementById('startGoodTimer').innerHTML ="test passed";
  }
  if(pauseFlag)
  {
    document.getElementById('pauseGoodTimer').innerHTML ="test passed";
  }
  if(stopFlag)
  {
    document.getElementById('stopGoodTimer').innerHTML ="test passed";
  }
  if(bg.goodTimer.getName() == "goodTimer")
  {
    document.getElementById('timerName').innerHTML ="test passed";
  }
  if(bg.badTimer.get_isStarted())
  {
    document.getElementById('startBadTimer').innerHTML ="test passed";
  }
  if(bg.badTimer.get_isPaused())
  {
    document.getElementById('pauseBadTimer').innerHTML ="test passed";
  }
  if(!bg.badTimer.get_isStarted())
  {
    document.getElementById('startBadTimer').innerHTML ="test passed";
  }
  if(bg.getpopUpShown())
  {
    document.getElementById('popUpTest').innerHTML ="test passed";
  }
  if(bg.getBadStarted())
  {
    document.getElementById('badTimerTest').innerHTML ="test passed";
  }
  if(bg.getredirToGoogle())
  {
    document.getElementById('redirToGoogle').innerHTML ="test passed";
  }

}


//changedisp is called every second to keep updateing the page
setInterval(changeDevDisp,1000);
