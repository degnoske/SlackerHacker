
window.onload = function() {
	 
		if (confirm("Are you sure you want get on social media? (Click OK to pause the study timer. Click Cancel to redirect to Google") == true) {
  var port = chrome.runtime.connect({name: "message"});
port.postMessage({message: "pause"});
    } 
    else {
        location = 'http://www.google.com';
       
    }

	}