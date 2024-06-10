import LineChart from "./Components/LineChart";
import BarChart from "./Components/BarChart";
import HeatmapChart from "./Components/HeatmapChart";
import PieChart from "./Components/PieChart";
// import SolarRad from "./Components/SolarRad";

const App = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      <div className="w-full md:w-1/2 p-4">
        <LineChart />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <BarChart />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <HeatmapChart />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <PieChart/>
      </div>
    </div>
  );
};

export default App;
