 var bg = chrome.extension.getBackgroundPage();

function changeDevDisp(){
		console.log("changing start val");

	if(bg.goodTimer.get_isStarted())
	{
		document.getElementById('startPage').innerHTML = "timer started";
	}
}

setInterval(changeDevDisp,1000);
