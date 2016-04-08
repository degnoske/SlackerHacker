

//@author Luke Weber
//@pre-The key for the store
//@return- create storage obj;
function StorageObj(aKey)
{
    this.mKey = aKey;
	//getValue doesn't work at the moment
/* 
    this.getValue = function()
    {
		//@callback doesn't work
      chrome.storage.local.get(this.mKey, function(obj)
      {

          if(!chrome.runtime.lastError)
          {

           
          }
      })
    } */
	
	//@author Luke Weber
	//@pre- the value to send to storage.
    this.setValue = function(aVal)
    {
      var obj = {};
      obj[aKey] = aVal;
      chrome.storage.local.set(obj, function(){});
    }
}



