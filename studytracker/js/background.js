Timer = function (webString)
{

  var timerName = webString;
  var sec=0;
  var myTime;
  var isStarted=false;

  funtion getName ()
  {
    return timerName;
  }

  function Start()
  {
    	if (get_isStarted() == false)
      {
    		set_isStarted(true);
    		myTime = setInterval(counter, 1000);
    		set_interval(myTime);
    	}
  }

  function Stop()
  {
  	clearInterval(get_interval());
  	set_isStarted(false);
  	set_sec(0);
  }

  function Pause()
  {
  	clearInterval(get_interval());
  	set_isStarted(false);
  }

  function counter()
  {
  	sec++;
  	set_sec(sec);
  }

  function set_isStarted(bool)
  {
  	isStarted=bool;
  }

  function get_isStarted()
  {
  	return isStarted;
  }


  function set_interval(interval)
  {
  	myTime=interval;
  }

  function set_sec(second)
  {
  	sec=second;
  }

  function get_interval()
  {
  	return myTime;
  }

  function get_sec()
  {
  	return sec;
  }


}


	var goodTimer = new Timer();

	var badTimer = new Timer();

	var TimerArr = [];



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
					if(get_isStarted()==true){
						//Authors: Luke Dercher, Dylan Egnoske
						var port = chrome.runtime.connect({name: "message"});


						if (confirm("Are you sure you want get on social media? (Click Cancel to redirect to Google") == true)
						{
							badTimer.Start();
							goodTimer.Pause();
						}

						else
						{

							goodTimer.Start();
							chrome.tabs.update({url: "https://www.google.com"});
							badTimer.Pause();

						}
					}
				}
			});
		});
	}
});


//@author Dylan Egnoske, Luke Dercher
//This line opens up a long-lived connection to your background page.
chrome.runtime.onConnect.addListener(function(port)
{
	console.assert(port.name == "message");
	port.onMessage.addListener(function(msg)
	{
		if (msg.message == "pause")
		{
			goodTimer.Pause();
		}
		else if (msg.message == "startBad")
		{
			badTimer.Start();
		}
		else if (msg.message == "start")
		{
			goodTimer.Start();
		}
	});
});
