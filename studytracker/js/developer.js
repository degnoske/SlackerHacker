 var bg = chrome.extension.getBackgroundPage();

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


}

setInterval(changeDevDisp,1000);
