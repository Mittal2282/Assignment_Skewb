import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import '../index.css';

// Initialize the Highcharts exporting modules
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

function PieChart() {
  useEffect(() => {
    Highcharts.chart('pie-container', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Air Quality Composition in Tokyo (January)'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Pollutants',
        colorByPoint: true,
        data: [{
          name: 'PM2.5',
          y: 40
        }, {
          name: 'PM10',
          y: 30
        }, {
          name: 'NO2',
          y: 15
        }, {
          name: 'SO2',
          y: 5
        }, {
          name: 'CO',
          y: 5
        }, {
          name: 'O3',
          y: 5
        }]
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
        <div id="pie-container" className="w-full max-w-4xl h-96"></div>
        <p className="highcharts-description text-center mt-4 text-white">
          Pie chart showing the air quality composition in Tokyo for January.
        </p>
      </figure>
    </div>
  );
}

export default PieChart;
