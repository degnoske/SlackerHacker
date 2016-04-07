google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

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
		  'width': 600,
		  'height':600
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }