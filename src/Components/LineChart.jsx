import { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";

// Initialize the Highcharts exporting modules
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

const LineChart = () => {
  useEffect(() => {
    Highcharts.chart("line-chart-container", {
      title: {
        text: "Monthly Average Temperature",
        align: "center",
      },
      subtitle: {
        text: "Source: WorldClimate.com",
        align: "center",
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
      },
      xAxis: {
        title: {
          text: "Time",
        },
        accessibility: {
          rangeDescription: "Range: January to December",
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },
      series: [
        {
          name: "Tokyo",
          data: [
            7.5, 7.0, 10.0, 15.0, 19.0, 22.0, 26.0, 27.0, 24.0, 19.0, 14.0,
            10.0,
          ],
        },
        {
          name: "New York",
          data: [
            -1.0, 1.0, 6.0, 12.0, 18.0, 23.0, 26.0, 25.0, 21.0, 15.0, 10.0, 3.0,
          ],
        },
        {
          name: "Berlin",
          data: [
            -1.5, 1.0, 4.0, 9.0, 14.0, 18.0, 20.0, 19.0, 15.0, 10.0, 5.0, 2.0,
          ],
        },
        {
          name: "London",
          data: [
            4.0, 5.0, 6.0, 9.0, 12.0, 16.0, 18.0, 17.0, 15.0, 11.0, 7.0, 5.0,
          ],
        },
        {
          name: "Sydney",
          data: [
            23.0, 23.0, 22.0, 19.0, 16.0, 13.0, 12.0, 14.0, 16.0, 18.0, 20.0,
            22.0,
          ],
        },
      ],
      exporting: {
        buttons: {
          contextButton: {
            menuItems: [
              "downloadPNG",
              "downloadJPEG",
              "downloadPDF",
              "downloadSVG",
            ],
          },
        },
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    });
  }, []);

  return (
    <div className="container mx-auto my-4 p-4 text-center">
      <div
        id="line-chart-container"
        className="mx-auto my-8 w-full max-w-4xl h-96"
      ></div>
      <p className="highcharts-description text-center mt-4 text-white">
          Line chart showing the comparative Average temperature in different cities
      </p>
      <div className="text-left text-white mt-4">
        <h1 className="font-bold text-2xl">Key Insights :</h1>
        <br/>
        <ul>
          <li>
            <strong>Seasonal Temperature Trends:</strong> Different cities have
            different temperature patterns throughout the year. Businesses can
            predict when customers will need certain products or services based
            on these temperature changes. For example, Tokyo might need more air
            conditioning during hot summers, while New York might need more
            heating in cold winters.
          </li>
          <br />
          <li>
            <strong>Comparative Analysis Across Cities:</strong> Comparing
            temperatures between cities helps businesses understand their unique
            climates. For instance, businesses in Sydney might need to offer
            different products compared to those in Berlin because of their
            different temperature patterns.
          </li>
          <br />
          <li>
            <strong>Impact on Operational Planning:</strong> Knowing temperature
            patterns helps businesses plan their operations better. For example,
            restaurants in New York might change their menus based on seasonal
            temperature changes to match customer preferences.
          </li>
          <br />
          <li>
            <strong>Resilience Planning:</strong> The visualization shows how
            businesses can prepare for extreme weather events. By understanding
            climate risks, businesses can plan for them and take advantage of
            new opportunities that arise.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LineChart;
