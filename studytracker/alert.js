
window.onload = function() 
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
