import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import '../index.css';

// Initialize the Highcharts exporting modules
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

function LineChart() {
  useEffect(() => {
    Highcharts.chart('line-chart-container', {
      title: {
        text: 'Monthly Average Temperature',
        align: 'center'
      },
      subtitle: {
        text: 'Source:WorldClimate.com',
        align: 'center'
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      xAxis: {
        title:{
          text:'Time'
        },
        accessibility: {
          rangeDescription: 'Range: January to December'
        },
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          }
        }
      },
      series: [{
        name: 'Tokyo',
        data: [7.5, 7.0, 10.0, 15.0, 19.0, 22.0, 26.0, 27.0, 24.0, 19.0, 14.0, 10.0]
      },
      {
        name: 'New York',
        data: [-1.0, 1.0, 6.0, 12.0, 18.0, 23.0, 26.0, 25.0, 21.0, 15.0, 10.0, 3.0]
      },
      {
        name: 'Berlin',
        data: [-1.5, 1.0, 4.0, 9.0, 14.0, 18.0, 20.0, 19.0, 15.0, 10.0, 5.0, 2.0]
      },
      {
        name: 'London',
        data: [4.0, 5.0, 6.0, 9.0, 12.0, 16.0, 18.0, 17.0, 15.0, 11.0, 7.0, 5.0]
      },
      {
        name: 'Sydney',
        data: [23.0, 23.0, 22.0, 19.0, 16.0, 13.0, 12.0, 14.0, 16.0, 18.0, 20.0, 22.0]
      }],
      exporting: {
        buttons: {
          contextButton: {
            menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
          }
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    });
  }, []);

  return (
    <div className="container mx-auto my-8">
      <figure className="highcharts-figure mx-auto my-8">
        <div id="line-chart-container" className="w-full max-w-4xl h-96"></div>
        <p className="highcharts-description text-center mt-4 text-white">
          Line chart showing the comparative Average temperature in different cities
        </p>
      </figure>
    </div>
  );
}

export default LineChart;
