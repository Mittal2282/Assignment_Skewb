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
    <div className="container mx-auto my-4 p-4">
      <div className="text-center">
        <figure className="highcharts-figure mx-auto my-8">
          <div id="pie-container" className="w-full max-w-4xl h-96 mx-auto"></div>
          <p className="highcharts-description text-center mt-4 text-white">
            Pie chart showing the air quality composition in Tokyo for January.
          </p>
        </figure>
      </div>
      <div className="text-left text-white mt-4">
        <h1 className="font-bold text-2xl">Key Insights :</h1>
        <br/>
        <ul>
          <li>
            <strong>What's in Tokyo's Air (January):</strong> Imagine Tokyo's air as a pie, and the biggest slice, accounting for 40%, is PM2.5 particles. These tiny particles are a major contributor to the city's pollution. Following closely behind, at 30%, is PM10, another type of harmful particle. It's like knowing the biggest ingredients in a recipe, but in this case, they're not so appetizing—they're pollutants that can affect our health.
          </li>
          <br />
          <li>
            <strong>Breathing Concerns:</strong> When PM2.5 and PM10 levels are high, it's like Tokyo's air is putting up a red flag for health issues. These particles can make it hard to breathe and even lead to serious health problems, especially for people with conditions like asthma or heart disease. Imagine trying to take a deep breath through a smoggy haze—it's not easy.
          </li>
          <br />
          
          <li>
            <strong>Spreading Awareness:</strong> Knowing what's in our air is the first step to making it cleaner. By raising awareness about pollution and its effects, we empower people to take action. It's like shining a light on a problem so we can work together to solve it. Whether it's through education, community initiatives, or innovative solutions, we all have a part to play in clearing the air.
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default PieChart;
