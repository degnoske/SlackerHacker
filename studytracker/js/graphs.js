var bg = chrome.extension.getBackgroundPage();



      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     9],
          ['Facebook',  2],
          ['YouTube',  2],
          ['Searching', 2],
          ['ku.edu',    7],
		  ['Other', 4]
        ]);

        var options = {
          title: 'My Daily Productivity',
          pieHole: 0.1,
		  'width': 300,
		  'height':200
        };
		//var chdiv = document.getElementById('donutchart');
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
		google.visualization.events.addListener(chart, 'ready', function () {
			document.getElementById('png').outerHTML = '<a href="' + chart.getImageURI() + '">Printable version - Random graph </a>';
			//console.log(chdiv.innerHTML);
      })
        chart.draw(data, options);


      }

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
}
window.onload = function()
{
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(makeGraphs);

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

		var Pie = new DailyGraph("Study Time", dailyGoodTime, dailyBadTime, 300, 200, 'graphchart');

    Pie.draw();

    getGraphPNG(Pie);
}

function getGraphPNG(graph)
{
  //var chart = new google.visualization.PieChart(document.getElementById('graphchart'));
google.visualization.events.addListener(graph.Chart, 'ready', function () {
document.getElementById('png1').outerHTML = '<a href="' + Pie.Chart.getImageURI() + '">Printable version - Daily productivity </a>';
})
}
