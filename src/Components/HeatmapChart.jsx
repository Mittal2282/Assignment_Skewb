import { useEffect } from 'react';
import Highcharts from 'highcharts';
import Heatmap from 'highcharts/modules/heatmap';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import '../index.css';

// Initialize the Highcharts modules
Heatmap(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

function HeatmapChart() {
  useEffect(() => {
    Highcharts.chart('heatmap-container', {
      chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
      },
      title: {
        text: 'Air Quality Index (AQI)'
      },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      },
      yAxis: {
        categories: ['Tokyo', 'New York', 'Berlin', 'London', 'Sydney'],
        title: null
      },
      colorAxis: {
        min: 0,
        stops: [
          [0, '#3060cf'],
          [0.5, '#fffbbc'],
          [0.9, '#c4463a'],
          [1, '#c4463a']
        ]
      },
      legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
      },
      tooltip: {
        formatter: function () {
          return `<b>${this.series.yAxis.categories[this.point.y]}</b><br>
                  ${this.series.xAxis.categories[this.point.x]}: <b>${this.point.value}</b>`;
        }
      },
      series: [{
        name: 'AQI',
        borderWidth: 1,
        data: [
          [0, 0, 45], [0, 1, 38], [0, 2, 55], [0, 3, 66], [0, 4, 42],
          [1, 0, 50], [1, 1, 42], [1, 2, 60], [1, 3, 70], [1, 4, 48],
          [2, 0, 65], [2, 1, 55], [2, 2, 75], [2, 3, 85], [2, 4, 58],
          [3, 0, 70], [3, 1, 60], [3, 2, 80], [3, 3, 90], [3, 4, 62],
          [4, 0, 40], [4, 1, 30], [4, 2, 50], [4, 3, 60], [4, 4, 35],
          [5, 0, 55], [5, 1, 45], [5, 2, 65], [5, 3, 75], [5, 4, 50],
          [6, 0, 60], [6, 1, 50], [6, 2, 70], [6, 3, 80], [6, 4, 55],
          [7, 0, 80], [7, 1, 70], [7, 2, 90], [7, 3, 100], [7, 4, 78],
          [8, 0, 75], [8, 1, 65], [8, 2, 85], [8, 3, 95], [8, 4, 72],
          [9, 0, 55], [9, 1, 45], [9, 2, 65], [9, 3, 75], [9, 4, 50],
          [10, 0, 35], [10, 1, 25], [10, 2, 45], [10, 3, 55], [10, 4, 30],
          [11, 0, 25], [11, 1, 15], [11, 2, 35], [11, 3, 45], [11, 4, 20],
        ],
        dataLabels: {
          enabled: true,
          color: '#000000'
        }
      }],
      exporting: {
        buttons: {
          contextButton: {
            menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
          }
        }
      }
    });
  }, []);

  return (
    <div className="container mx-auto my-12 p-4 text-center">
      <div id="heatmap-container" className="w-full max-w-4xl h-96 mx-auto"></div>
      <p className="highcharts-description text-center mt-4 text-white">
        Heatmap showing the Air Quality Index (AQI) in different cities over the months.
      </p>
      <div className="text-left text-white mt-4">
        <h1 className="font-bold text-2xl">Key Insights :</h1>
        <br/>
        <ul>
          <li>
            <strong>Comparative Analysis:</strong> Sydney consistently maintains better air quality compared to other cities, with AQI levels predominantly below 65 throughout the year. This could be attributed to stringent environmental regulations or geographical factors like oceanic breezes aiding pollutant dispersion.
          </li>
          <br />
          <li>
            <strong>Urban Planning Implications:</strong> High AQI levels, particularly in densely populated cities like Tokyo and London, during specific months may indicate potential health risks and necessitate targeted urban planning interventions such as emissions control measures or green infrastructure development.
          </li>
          <br />
          <li>
            <strong>Business Opportunities:</strong> Companies specializing in air purification technologies or indoor air quality monitoring systems might find opportunities in cities with consistently poor AQI levels, such as New York during summer months, where AQI can exceed 70 due to factors like increased traffic and industrial activity.
          </li>
          <br />
          <li>
            <strong>Tourism and Quality of Life:</strong> Air quality data can influence tourism decisions and city branding efforts. Cities with consistently lower AQI levels, like Sydney and New York during certain months, can leverage their environmental quality as a selling point for attracting tourists and residents seeking a high quality of life.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeatmapChart;
