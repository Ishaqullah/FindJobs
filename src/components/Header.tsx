import{ useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12 lg:h-16">

          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto lg:h-10"
            />
          </div>


          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-sm text-[#0154AA] hover:text-blue-600 font-medium">
              Find Jobs
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Top Companies
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Job Tracker
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              My Calendar
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Documents
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Messages
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Notifications
            </a>
          </nav>


          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 border border-gray-300 bg-[#F6F9FF] rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm h-[29px] w-[219px]"
              />
            </div>
            <button className="bg-[#0154AA] text-white px-4 py-0 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors h-[29px]">
              Resume Builder
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

 
          <div className="flex lg:hidden items-center space-x-3">
            <Search className="w-5 h-5 text-gray-600" />
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>


        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm text-[#0154AA] font-medium py-2">
                Find Jobs
              </a>
              <a href="#" className="text-sm text-gray-500 py-2">
                Top Companies
              </a>
              <a href="#" className="text-sm text-gray-500 py-2">
                Job Tracker
              </a>
              <a href="#" className="text-sm text-gray-500 py-2">
                My Calendar
              </a>
              <a href="#" className="text-sm text-gray-500 py-2">
                Documents
              </a>
              <a href="#" className="text-sm text-gray-500 py-2">
                Messages
              </a>
              <a href="#" className="text-sm text-gray-500 py-2">
                Notifications
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-9 pr-4 border border-gray-300 bg-[#F6F9FF] rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm h-10"
                />
              </div>
              <button className="w-full bg-[#0154AA] text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Resume Builder
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;