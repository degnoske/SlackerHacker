/* author:Luke Dercher, Dylan Egnoske
Creates a prompt that will direct pause the good timer and start the bad timer or restart goot timer ad redirect the user to google.com*/
  
window.onfocus = function() 
{
	 var port = chrome.runtime.connect({name: "message"});
	port.postMessage({message: "pause"});

	if (confirm("Are you sure you want get on social media? (Click Cancel to redirect to Google") == true) 
	{
		port.postMessage({message: "startbad"});
    } 
    else 
    {
        location = 'http://www.google.com';
        port.postMessage({message: "start"});
       
    }

}
