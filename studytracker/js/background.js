var graphsMade = false;
var consDateStorageKey = "Date";
var LastDate = new StorageObj(consDateStorageKey);
var goodStorage = new StorageObj('Good');
var badStorage = new StorageObj('Bad');
var SiteStorage = [];
var goodTimer = new Timer('goodTimer');
var badTimer = new Timer('badTimer');
var TimerArr = [];

/**@author Luke Dercher
*  @function bool and getter used to verify the confimation popup shows up
*/
var popUpShown = false;
function getpopUpShown()
{
	return popUpShown;
}

/**@author Luke Dercher
* @function bool and getter used to verify the badTimer is started upon visited a blacklisted website
*/
var badStarted = false
function getBadStarted()
{
		return badStarted;
}

/**@author Luke Dercher
* @function bool and getter used to verify the user is redirected to google when they click no on the pop up
*/
var redirectToGoogle = false;
function getredirToGoogle()
{
	return redirectToGoogle;
}


function addSiteStorage(aURL)
{
	SiteStorage.push(new StorageObj(aURL));
}

function getSiteStorage(aURL)
{
	for(i=0; i<SiteStorage.length; i++)
	{
		if(SiteStorage[i].getName() == aURL)
		{
			return(SiteStorage[i]);
		}
	}
	return(false);
}


function getAllSiteTimes()
{
	lReturn = [];
	for(i=0; i<SiteStorage.length; i++)
	{
			lReturn.push(SiteStorage[i].getValue());
	}
	return(lReturn);
}

function getAllSiteStorageNames()
{
	lReturn = [];
	for(i=0; i<SiteStorage.length; i++)
	{
			lReturn.push(SiteStorage[i].geName());
	}
	return(lReturn)
}
// function changeDevDisp(){
// 		console.log("changing start val");
//
// 	if(goodTimer.get_isStarted())
// 	{
// 		document.getElementById('startPage').innerHTML = "timer started";
// 	}
// }
//
// setInterval(changeDevDisp,1000);

//@Author Luke Weber
//@pre The url of site
function addSiteTimer(aURL)
{
	TimerArr.push(new Timer(aURL));
}

function getGoodTimer()
{
	console.log(goodTimer.getName());
	return goodTimer;
}

function getBadTimer()
{
	return badTimer;
}

function getAllSiteTimers()
{
	return TimerArr;
}

function pauseAllSiteTimers()
{
	for(i = 0; i< TimerArr.length; i++)
	{
		TimerArr[i].Pause();
	}
}

function getSiteTimer(aName)
{
	for (i=0; i<TimerArr.length; i++)
	{
		if (TimerArr[i].getName() == aName)
		{
			return(TimerArr[i]);
		}

	}
	//return false indicating that it doesn't exist
	return false;
}
chrome.webNavigation.onCompleted.addListener
(
	//@author Sri
	//@pre event of page loading completely
	//@post checks site for blacklist
	//@return none
	function(e)
	{
		var url =e.url;
		checkSite(url);
	}
);

//@Author Sri
//@pre the URL of alleged blocked site
//@post checks if blocks site and alerts user
//@return none
function checkSite(aURL)
{
  var n1 = aURL.indexOf("www.");
  var n2 = aURL.indexOf(".com") + 4;
  var domain = aURL.slice(n1,n2);

  //ensure that it's not empty
  if(domain!="")
  {

    $( document ).ready
	(
		function()
		{
			//post arguments php page, data to send[] , function to run on callback
		  var jqxhr = $.post
		  (
		  "http://people.eecs.ku.edu/~psundara/exten/checker.php", {dataToSendToServer1: domain, dataToSendToServer2: "server"},
			  function(data)
			  {
				//store boolean on HTML then retrieve that boolean
				$('#foo').html(data);
				if(document.getElementById("foo").innerHTML == 1 && goodTimer.get_isStarted())
				{
						popUpShown = true;
					chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
						chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});
					});

					chrome.runtime.onMessage.addListener(
						function(request, sender, sendResponse) {
							console.log(sender.tab ?
							"from a content script:" + sender.tab.url :
								"from the extension");
							if (request.action == "confirm")
							{
							badStarted = true;
								confirmationAlert(true, domain);
							}
							else if (request.action=="decline")
							{
								redirectToGoogle = true;

								confirmationAlert(false, domain);
							}
						});

				}
				else
				{

					badTimer.Pause();
					pauseAllSiteTimers();

				}
			  }
		  )
		}

	)

  }
}

/** @author Luke Dercher, Dylan Egnoske
*  @pre aBoolean from the confirmationAler
*  @post starts appropriate timers and redirects pages
*  @return none
*/
function confirmationAlert(aBoolean, aURL)
{
	//user stays on blocked page

	siteTimer = getSiteTimer(aURL);
	if (aBoolean)
	{
		badTimer.Start();
		goodTimer.Pause();

		if(!siteTimer)
		{
			addSiteTimer(aURL);
			siteTimer = getSiteTimer(aURL);
			siteTimer.Start();
		}
		else
		{
			siteTimer.Start();
		}
	}

	//user gets redirected to google
	else
	{
		goodTimer.Start();
		chrome.tabs.update({url: "https://www.google.com"});
		badTimer.Pause();

	}
}
function pauseAllTimers()
{
	goodTimer.Pause();
	badTimer.Pause();
	pauseAllSiteTimers();
}

/** @author Luke Weber
* @Pre on close of backgroundPage
* @Post adds timer values to storage
*/
window.close = function()
 {
	 extensionClose();
 }

function extensionClose()
{
	goodStorage.setValue(goodStorage.getValue()+goodTimer.get_sec());
	badStorage.setValue(badStorage.getValue() + goodTimer.get_sec());

	storeAllSiteTime();
	if(Date.prototype.getDate() != LastDate.getValue())
	{
		resetStorage();
	}
}

function getAllSiteTimes()
{
	var lReturnArr = [];
	for(i=0; i<SiteStorage.length; i++)
	{
		lReturnArr.push(SiteStorage[i].getValue())
	}
	return lReturnArr;
}

function getAllSiteStorageNames()
{
	var lReturnArr = [];
	for(i=0; i<SiteStorage.length; i++)
	{
		lReturnArr.push(SiteStorage[i].getKey())
	}
	return lReturnArr;
}
function storeAllSiteTime()
{
	for(i=0; i<TimerArr.length; i++)
	{
			storeSiteTime(TimerArr[i]);
	}
}
function storeSiteTime(aTimer)
{
	for(i=0; i<SiteStorage.length; i++)
	{
		if(SiteStorage[i].getKey() == aTimer.getName())
		{
			SiteStorage[i].setValue(SiteStorage[i].getValue() + aTimer.get_sec())
			return true
		}
	}
	var lDummyStorage = new StorageObj(aTimer.getName());
	lDummyStorage.setValue(aTimer.get_sec());
	SiteStorage.push(lDummyStorage);
}
function resetStorage()
{
		localStorage.clear();
		var ldate = new Date();
		var lday = ldate.getDate();

		LastDate.setValue(lday);
}
