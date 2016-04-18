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
