
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white border border-white p-2 m-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold"><Link to="/" className="hover:text-orange-300">Chart Components</Link></h1>
        <ul className="flex space-x-4">
          <li><Link to="/line-chart" className="hover:text-gray-300">Line Chart</Link></li>
          <li><Link to="/bar-chart" className="hover:text-gray-300">Bar Chart</Link></li>
          <li><Link to="/heatmap-chart" className="hover:text-gray-300">Heatmap Chart</Link></li>
          <li><Link to="/pie-chart" className="hover:text-gray-300">Pie Chart</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
