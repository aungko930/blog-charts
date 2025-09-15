google.charts.load('current', {packages:['corechart']});
google.charts.setOnLoadCallback(drawChartPost);

function drawChartPost() {
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Views'],
    ['Sep 10', 120],
    ['Sep 11', 300],
    ['Sep 12', 450],
    ['Sep 13', 700],
    ['Sep 14', 900]
  ]);

  var options = {
    title: 'Blog Views',
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#3366cc']
  };

  var chart = new google.visualization.LineChart(
    document.getElementById('chart_post')
  );
  chart.draw(data, options);
}
