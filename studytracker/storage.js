function StorageObj(aKey)
{
    this.mKey = aKey;

    this.getValue = function()
    {
      chrome.storage.local.get(this.mKey, function(obj)
      {

          if(!chrome.runtime.lastError)
          {

            alert(obj[aKey]);
          }
      })
    }
    this.setValue = function(aVal)
    {
      var obj = {};
      obj[aKey] = aVal;
      chrome.storage.local.set(obj, function(){alert("saved")});
    }
}

function runeverything()
{
  var myStorage = new StorageObj('cool');
  myStorage.setValue(2);
  myStorage.getValue();
}

window.onload = function()
{
  runeverything();
}
