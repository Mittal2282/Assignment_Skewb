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
    <div className="container mx-auto my-4 p-4 text-center">
      <div id="bar-chart-container" className="mx-auto my-8 w-full max-w-4xl h-96"></div>
      <p className="highcharts-description text-center mt-4 text-white">
          Bar chart showing the comparative Rainfall in different cities
      </p>
      <div className="text-left text-white mt-4">
        <h1 className="font-bold text-2xl">Key Insights :</h1>
        <br/>
        <ul>
          <li>
            <strong>Impact on Business Operations:</strong> Understanding these rainfall patterns can aid businesses in various sectors. For instance, industries reliant on outdoor activities or agriculture in cities like Sydney might need to prepare for seasonal fluctuations, while infrastructure projects in cities with stable rainfall, like Tokyo, might face fewer weather-related delays.
          </li>
          <br />
          <li>
            <strong>Market Opportunities:</strong> Products or services related to water management, such as drainage systems or rainwater harvesting, might find greater demand in cities with higher rainfall, such as Sydney or London, compared to cities with lower rainfall, like Tokyo or New York.
          </li>
          <br />
          <li>
            <strong>Urban Planning Considerations:</strong> Municipalities can utilize this data to enhance urban planning efforts, such as improving drainage systems in cities prone to heavy rainfall or implementing water conservation measures in regions with lower rainfall, contributing to sustainable city development.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BarChart;
