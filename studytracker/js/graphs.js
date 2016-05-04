var bg = chrome.extension.getBackgroundPage();

	  //"Javascript "class" for a daily productivity graph
//@author Luke Weber
//@pre aTitle = title for graph, aArrayOfSites = array of sites that will be added to graph, aArrayOfTime = array of times corresponding to time on sites, aWidth = width of graph
//@return a Pie chart graph object.
function DailyGraph(aTitle, goodTime, badTime, aWidth, aHeight, aHtmlId)
{
	this.lTitle = aTitle;

	//create table of data
	  var lData = new google.visualization.DataTable();
	lData.addColumn('string', 'Study/Not Study');
	lData.addColumn('number', 'Time');



		lData.addRows([
      ['Study', goodTime],
      ['Not Study', badTime]
    ]);



	this.width = aWidth;
	this.height = aHeight;
	this.options = ""

	this.setOptions = function(aTitle, aWidth, aHeight) {this.options = {'title':aTitle, 'width': aWidth, 'height': aHeight};};

	this.setOptions(this.lTitle,this.width, this.height);

	this.setHeight = function(aHeight){this.height=aHeight;};
	this.setWidth = function(aWidth){this.width = aWidth}

	this.Chart = new google.visualization.PieChart(document.getElementById(aHtmlId));

	this.draw = function(){
		this.Chart.draw(lData, this.options);
	}
}

//@author Luke Weber
//@pre aTitle = title for graph, a'Day' =  how much time productive on 'Day', aWidth = width of graph
//@return a Pie chart graph object.
function SiteGraph(aSites, aTimePerSite, aTitle, aWidth, aHeight, aHtmlId)
{
	this.lTitle = aTitle;

	//create table of data
	  var lData = new google.visualization.DataTable();
	lData.addColumn('string', 'Site');
	lData.addColumn('number', 'Time');


	if(aSites.length <= aTimePerSite.length)
  {
	   for(i=0; i<aSites.length; i++)
	    {
		      lData.addRows([[aSites[i], aTimePerSite[i]]]);
	    }
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
//@author Luke Weber
//@pre none
//@return none
function makeGraphs()
{
  drawChart();
    drawTwoValueGraph();
    drawSiteGraph();
}
window.onload = function()
{
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(makeGraphs);

}

function drawSiteGraph()
{
  bg.storeAllSiteTime();
  var lTimes = bg.getAllSiteTimes();
  var lNames = bg.getAllSiteStorageNames();
  bg.pauseAllSiteTimers();
  if(lNames.length<1)
  {
    document.getElementById('SiteGraph').innerHTML = "NO DATA! PLEASE START TIMER"
  }
  else
  {


  var lSiteGraph = new SiteGraph(lNames, lTimes, 'Site Usage', 300, 200, 'SiteGraph');
  lSiteGraph.draw();
  }
}
function drawTwoValueGraph()
{
  var dailyGoodTime = bg.goodStorage.getValue();
  var dailyBadTime = bg.badStorage.getValue();

  dailyGoodTime = dailyGoodTime + bg.goodTimer.get_sec();
  dailyBadTime = dailyBadTime + bg.badTimer.get_sec();

  //reset timer
  if(bg.goodTimer.get_isStarted())
  {
    bg.goodTimer.Stop();
    bg.goodTimer.Start();

  }
  if(bg.badTimer.get_isStarted())
  {
    bg.badTimer.Stop();
    bg.badTimer.Start()
  }


  bg.goodStorage.setValue(dailyGoodTime);
  bg.badStorage.setValue(dailyBadTime);

  if(!dailyGoodTime && !dailyBadTime)
  {
    document.getElementById('graphchart').innerHTML = "NO DATA! PLEASE START TIMER"
  }
  else {


		var Pie = new DailyGraph("Study Time", dailyGoodTime, dailyBadTime, 300, 200, 'graphchart');
    Pie.draw();
	function ajaxCall(){
			var name = "graph" + Date.now() +".html";
			var dar = '<img src="' + Pie.Chart.getImageURI() + '">';
			var jqxhr = $.post("http://people.eecs.ku.edu/~psundara/exten/pages/controller.php", {dataToSendToServer1: Pie.Chart.getImageURI() ,dataToSendToServer2: name , dataToSendToServer3: dar}, function(data)
			{
		  		$('#page').html(data);
				var link = document.getElementById("page").innerHTML;
				document.getElementById("page").innerHTML = "";
				//document.getElementById("page").setAttribute("href",link);
				window.open(link);

			});
		}

		$( document ).ready(function() {
			// When button is clicked do the following
			$('button').click(function(e){
				// Prevent form submission
				e.preventDefault();
				ajaxCall();
			});

		});
    getGraphPNG(Pie);

  }
}

function getGraphPNG(graph)
{
  //var chart = new google.visualization.PieChart(document.getElementById('graphchart'));
google.visualization.events.addListener(graph.Chart, 'ready', function () {
document.getElementById('png1').outerHTML = '<a href="' + Pie.Chart.getImageURI() + '">Printable version - Daily productivity </a>';

})
}
