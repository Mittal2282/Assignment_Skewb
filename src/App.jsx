
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import LineChart from './Components/LineChart';
import BarChart from './Components/BarChart';
import HeatmapChart from './Components/HeatmapChart';
import PieChart from './Components/PieChart';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
            <Route path="/heatmap-chart" element={<HeatmapChart />} />
            <Route path="/pie-chart" element={<PieChart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
