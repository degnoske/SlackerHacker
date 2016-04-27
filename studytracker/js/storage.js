

/**
 * @author Luke Weber
 * @pre The key for the store
 * @return create storage obj;
 */
function StorageObj(aKey)
{
    this.mKey = aKey;
	//getValue doesn't work at the moment

    this.getValue = function()
    {

      var value = localStorage.getItem(this.mKey)
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
    this.setValue = function(aVal)
    {

     localStorage.setItem(this.mKey, aVal)

    }
    this.getKey = function()
    {
      return(this.mKey);
    }
}
