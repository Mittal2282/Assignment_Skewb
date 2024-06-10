import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import '../index.css';

// Initialize the Highcharts exporting modules
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

function BarChart() {
  useEffect(() => {
    Highcharts.chart('bar-chart-container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Average Rainfall'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        title: {
          text: 'Month'
        }
      },
      yAxis: {
        title: {
          text: 'Rainfall (mm)'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Tokyo',
        data: [50, 40, 60, 70, 80, 90, 100, 110, 90, 80, 70, 60]
      },
      {
        name: 'New York',
        data: [40, 30, 50, 60, 70, 80, 90, 100, 80, 70, 60, 50]
      },
      {
        name: 'Berlin',
        data: [60, 50, 70, 80, 90, 100, 110, 120, 100, 90, 80, 70]
      },
      {
        name: 'London',
        data: [70, 60, 80, 90, 100, 110, 120, 130, 110, 100, 90, 80]
      },
      {
        name: 'Sydney',
        data: [80, 70, 90, 100, 110, 120, 130, 140, 120, 110, 100, 90]
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
        <div id="bar-chart-container" className="w-full max-w-4xl h-96"></div>
        <p className="highcharts-description text-center mt-4 text-white">
          Bar chart showing the comparative Average rainfall in different cities
        </p>
      </figure>
    </div>
  );
}

export default BarChart;
