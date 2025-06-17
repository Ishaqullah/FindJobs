import React from 'react';
import { Search } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-12">
 
          <div className="flex items-center">
            <img
                src={logo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
          </div>

          <nav className="flex items-center space-x-6">
            <a href="#"  className="text-[14px] text-[#0154AA] hover:text-blue-600 font-medium">
              Find Jobs
            </a>
            <a href="#" className="text-[14px] text-gray-500 hover:text-blue-600 ">
              Top Companies
            </a>
            <a href="#" className="text-[14px] text-gray-500 hover:text-blue-600 ">
              Job Tracker
            </a>
            <a href="#" className="text-[14px] text-gray-500 hover:text-blue-600 ">
              My Calendar
            </a>
            <a href="#" className="text-[14px] text-gray-500 hover:text-blue-600 ">
              Documents
            </a>
            <a href="#" className="text-[14px] text-gray-500 hover:text-blue-600 ">
              Messages
            </a>
            <a href="#" className="text-[14px] text-gray-500 hover:text-blue-600 ">
              Notifications
            </a>
          </nav>


          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
 
                className="pl-9 pr-4 border border-gray-300 bg-[#F6F9FF]rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm h-[29px] w-[219px]"
              />
            </div>


            <button  className="bg-blue-600 bg-[#0154AA] text-white px-4 py-0 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors h-[29px]">
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
        </div>
      </div>
    </header>
  );
};

export default Header;