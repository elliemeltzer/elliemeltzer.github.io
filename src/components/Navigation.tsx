import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Eleanor Meltzer
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About Me
            </Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}