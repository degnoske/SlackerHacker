

/**
 * @author Luke Weber
 * @pre The key for the store
 * @return create storage obj;
 */
function StorageObj(aKey)
{
    var self = this;
    self.mKey = aKey;
	//getValue doesn't work at the moment

    self.getValue = function()
    {

      var value = localStorage.getItem(self.mKey)
      if(!value)
      {
        return 0;
      }
      else
       {
        return Number(value)
      }
    }

	/**
     * @author Luke Weber
     * @pre the value to send to storage.
     */
    self.setValue = function(aVal)
    {

     localStorage.setItem(self.mKey, aVal)

    }
    self.getKey = function()
    {
      return(self.mKey);
    }
    self.setKey = function()
    {
      return(self.mKey);
    }
}
