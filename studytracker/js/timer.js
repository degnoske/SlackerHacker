function Timer(webString)
{
	console.log(webString+ " Timer created " + Date.now())
  this.timerName = webString;
  this.sec=0;
  this.myTime;
  this.isStarted=false;
	this.isPaused = false;

  this.getName = function()
  {
    return this.timerName;
  };

  this.Start = function()
  {
    	if (this.get_isStarted() == false)
		{

    		this.set_isStarted(true);
				this.set_isPaused(false);
    		this.myTime = setInterval(this.counter(), 1000);
    		this.set_interval(this.myTime);
    	}
      console.log("timer started");
  };

  this.Stop = function()
  {
  	clearInterval(this.get_interval());
  	this.set_isStarted(false);
		this.set_isPaused(false);
  	this.set_sec(0);
    console.log("timer stopped");
  };

  this.Pause= function()
  {
  	clearInterval(this.get_interval());
  	this.set_isStarted(false);
		this.set_isPaused(true);
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
	 console.log(this.getName() + " timer is started.")
  	this.isStarted=bool;
  };

  this.get_isStarted = function()
  {
  	return this.isStarted;
  };

	this.set_isPaused = function(bool)
  {
  	this.isPaused = bool;
  };

  this.get_isPaused = function()
  {
  	return this.isPaused;
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
