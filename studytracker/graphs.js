

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(main);

//"Javascript "class" for a daily productivity graph
//
function DailyGraph(aTitle, aArrayOfSites, aArrayOfTime, aWidth, aHeight, aHtmlId)
{
	this.lTitle = aTitle;
	
	//create table of data
	  var lData = new google.visualization.DataTable();
	lData.addColumn('string', 'Site');
	lData.addColumn('number', 'Time');
	
	if(aArrayOfSites.length == aArrayOfTime.length)
	{
		for(i=0; i<aArrayOfSites.length; i++)
		{
			lData.addRows([[aArrayOfSites[i], aArrayOfTime[i]]]);
		}
	}
	else
	{
		alert("ERROR: DailyGraph must have the same number of sites as time on sites. ");
	}
	
	this.width = aWidth;
	this.height = aHeight;
	this.options = ""
	
	this.setOptions = function(aTitle, aWidth, aHeight) {this.options = {'title':aTitle, 'width': aWidth, 'height': aHeight};};
	
	this.setOptions(this.lTitle,this.width, this.height);
	
	this.setHeight = function(aHeight){this.height=aHeight;};
	this.setWidth = function(aWidth){this.width = aWidth}
	
	this.Chart = new google.visualization.PieChart(document.getElementById(aHtmlId));
	
	this.draw = function(){this.Chart.draw(lData, this.options)}
}

//"Javascript "class" for a daily productivity graph
//
function WeeklyGraph(aTitle, aMonday, aTuesday, aWednesday, aThursday, aFriday, aWidth, aHeight, aHtmlId)
{
	this.lTitle = aTitle;
	
	//create table of data
	  var lData = new google.visualization.DataTable();
	lData.addColumn('string', 'Day Of The Week');
	lData.addColumn('number', 'Time');
	
	var lArrayOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
	var lArrayOfTime = [aMonday, aTuesday, aWednesday, aThursday, aFriday]
	
	for(i=0; i<lArrayOfDays.length; i++)
	{
		lData.addRows([[lArrayOfDays[i], lArrayOfTime[i]]]);
	}
	
	
	this.width = aWidth;
	this.height = aHeight;
	this.options = ""
	
	this.setOptions = function(aTitle, aWidth, aHeight) {this.options = {'title':aTitle, 'width': aWidth, 'height': aHeight};};
	
	this.setOptions(this.lTitle,this.width, this.height);
	
	this.setHeight = function(aHeight){this.height=aHeight;};
	this.setWidth = function(aWidth){this.width = aWidth}
	
	this.Chart = new google.visualization.BarChart(document.getElementById(aHtmlId));
	
	this.draw = function(){this.Chart.draw(lData, this.options)}
}
 
function main()
{
		 //create piechart object
	var PieChart = new DailyGraph("Daily productivity", ["Facebook", "Youtube", "Study"], [1, 3, 1], 400, 300, "chart_div")
	PieChart.draw();
	var BarChart = new WeeklyGraph("Weekly Productivity", 1, 2, 4, 22, 0, 400, 300, "prod_div")
	BarChart.draw();
}

 