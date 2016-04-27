function Timer(webString)
{
	var self = this;
	//console.log(webString+ " Timer created " + Date.now())
  self.timerName = webString;
  self.sec=0;
  self.myTime;
  self.isStarted=false;
	self.isPaused = false;

  self.getName = function()
  {
    return self.timerName;
  };

  self.Start = function()
  {
    if (self.get_isStarted() == false)
		{
    		self.set_isStarted(true);
				self.set_isPaused(false);
    		self.myTime = setInterval(self.counter, 1000);
    		self.set_interval(self.myTime);
    	}
      console.log("timer started");
  };

  self.Stop = function()
  {
  	clearInterval(self.get_interval());
  	self.set_isStarted(false);
		self.set_isPaused(false);
  	self.set_sec(0);
    console.log("timer stopped");
  };

  self.Pause= function()
  {
  	clearInterval(self.get_interval());
  	self.set_isStarted(false);
		self.set_isPaused(true);
    console.log(self.TimerName + " timer paused");
  };

  self.set_sec = function(second)
  {
    self.sec=second;
  };

  self.counter = function()
  {
  	self.sec++;
  	self.set_sec(self.sec);
		console.log("The seconds on timer " + self.timerName + ": " + self.sec);
  };

  self.set_isStarted = function(bool)
  {
	 console.log(self.getName() + " timer is started.")
  	self.isStarted=bool;
  };

  self.get_isStarted = function()
  {
  	return self.isStarted;
  };

	self.set_isPaused = function(bool)
  {
  	self.isPaused = bool;
  };

  self.get_isPaused = function()
  {
  	return self.isPaused;
  };


  self.set_interval = function(interval)
  {
  	self.myTime=interval;
  };



  self.get_interval = function ()
  {
  	return self.myTime;
  };

  self.get_sec = function()
  {
  	return self.sec;
  };

}
