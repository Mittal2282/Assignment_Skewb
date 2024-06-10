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

function SolarRad() {
  useEffect(() => {
    Highcharts.chart('heatmap-container', {
      chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
      },
      title: {
        text: 'Monthly Solar Radiation in Different Cities'
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
                  ${this.series.xAxis.categories[this.point.x]}: <b>${this.point.value}</b> kWh/m²`;
        }
      },
      series: [{
        name: 'Solar Radiation',
        borderWidth: 1,
        data: [
          [0, 0, 3.5], [0, 1, 2.8], [0, 2, 4.2], [0, 3, 5.0], [0, 4, 3.8],
          [1, 0, 3.8], [1, 1, 3.1], [1, 2, 4.5], [1, 3, 5.2], [1, 4, 4.0],
          [2, 0, 4.0], [2, 1, 3.4], [2, 2, 4.8], [2, 3, 5.5], [2, 4, 4.3],
          [3, 0, 4.2], [3, 1, 3.6], [3, 2, 5.0], [3, 3, 5.7], [3, 4, 4.5],
          [4, 0, 3.0], [4, 1, 2.5], [4, 2, 3.8], [4, 3, 4.5], [4, 4, 3.2],
          [5, 0, 3.5], [5, 1, 2.9], [5, 2, 4.1], [5, 3, 4.8], [5, 4, 3.5],
          [6, 0, 4.0], [6, 1, 3.3], [6, 2, 4.6], [6, 3, 5.3], [6, 4, 4.0],
          [7, 0, 4.8], [7, 1, 4.1], [7, 2, 5.5], [7, 3, 6.0], [7, 4, 4.8],
          [8, 0, 4.5], [8, 1, 3.8], [8, 2, 5.2], [8, 3, 5.8], [8, 4, 4.5],
          [9, 0, 3.8], [9, 1, 3.1], [9, 2, 4.4], [9, 3, 5.0], [9, 4, 3.8],
          [10, 0, 2.5], [10, 1, 2.0], [10, 2, 3.0], [10, 3, 3.5], [10, 4, 2.5],
          [11, 0, 1.8], [11, 1, 1.5], [11, 2, 2.2], [11, 3, 2.8], [11, 4, 1.8],
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
    <div className="container mx-auto my-8">
      <figure className="highcharts-figure mx-auto my-8">
        <div id="heatmap-container" className="w-full max-w-4xl h-96"></div>
        <p className="highcharts-description text-center mt-4 text-white">
          Heatmap showing the Solar Radiation (kWh/m²) in different cities over the months.
        </p>
      </figure>
    </div>
  );
}

export default SolarRad;
