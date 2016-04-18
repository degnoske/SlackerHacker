function Timer(webString)
{

  this.timerName = "webString";
  this.sec=0;
  this.myTime;
  this.isStarted=false;

  this.getName = function()
  {
    return this.timerName;
  };

  this.Start = function()
  {
    	if (this.get_isStarted() == false)
      {
    		this.set_isStarted(true);
    		this.myTime = setInterval(this.counter(), 1000);
    		this.set_interval(this.myTime);
    	}
      console.log("timer started");
  };

  this.Stop = function()
  {
  	clearInterval(this.get_interval());
  	this.set_isStarted(false);
  	this.set_sec(0);
    console.log("timer stopped");
  };

  this.Pause= function()
  {
  	clearInterval(this.get_interval());
  	this.set_isStarted(false);
    console.log("timer paused");
  };

  this.set_sec = function (second)
  {
    this.sec=second;
  };

  this.counter = function()
  {
  	this.sec++;
  	this.set_sec(this.sec);
  };

  this.set_isStarted = function(bool)
  {
  	this.isStarted=bool;
  };

  this.get_isStarted = function()
  {
  	return this.isStarted;
  };


  this.set_interval = function(interval)
  {
  	this.myTime=interval;
  };



  this.get_interval = function ()
  {
  	return this.myTime;
  };

  this.get_sec = function()
  {
  	return this.sec;
  };

}


	var goodTimer = new Timer(goodTimer);

	var badTimer = new Timer(badTimer);

	var TimerArr = [];

  chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "exTimers");
    port.onMessage.addListener(function(msg) {
      if (msg.timer == "Start")
        goodTimer.Start();
      else if (msg.timer == "Stop")
        goodTimer.Stop();
      else if (msg.timer == "Pause")
        goodTimer.Pause();
    });
  });


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
