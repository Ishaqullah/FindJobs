import React from 'react';
import { ChevronDown } from 'lucide-react';
import { User } from '../types';

interface SidebarProps {
  user: User;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
 return (
    <div className="w-full lg:w-80 bg-[#F5F6F8] p-3 lg:p-4 rounded-xl mb-4 lg:mb-0">
      <div className="relative bg-white rounded-xl overflow-hidden pb-4">
 
        <div className="h-20 sm:h-24 lg:h-28 rounded-t-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="absolute top-[48px] sm:top-[56px] lg:top-[72px] left-1/2 transform -translate-x-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-full border-[3px] border-white overflow-hidden bg-white">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-8 lg:mt-12 text-center px-4">
          <h2 className="text-sm lg:text-base font-semibold text-gray-900">{user.name}</h2>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{user.title}</p>
          <p className="text-xs text-gray-500 mt-1">{user.location}</p>
        </div>
      </div>

      <div className="bg-white mt-4 lg:mt-6 rounded-lg divide-y border border-gray-100">
        <div className="flex items-center justify-between px-3 lg:px-4 py-2 lg:py-3">
          <span className="text-xs lg:text-sm text-gray-600">Profile Visitors</span>
          <span className="text-xs lg:text-sm font-medium text-[#0154AA]">{user.stats.profileVisitors}</span>
        </div>
        <div className="flex items-center justify-between px-3 lg:px-4 py-2 lg:py-3">
          <span className="text-xs lg:text-sm text-gray-600">Resume Viewers</span>
          <span className="text-xs lg:text-sm font-medium text-[#0154AA]">{user.stats.resumeViewers}</span>
        </div>
        <div className="flex items-center justify-between px-3 lg:px-4 py-2 lg:py-3">
          <span className="text-xs lg:text-sm text-gray-600">My Jobs</span>
          <span className="text-xs lg:text-sm font-medium text-[#0154AA]">{user.stats.myJobs}</span>
        </div>
      </div>

      <div className="bg-white mt-3 lg:mt-4 rounded-lg p-3 lg:p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs lg:text-sm font-medium text-gray-800">My calendar</h3>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <p className="text-[10px] lg:text-xs text-gray-500 mt-1">Upcoming Interviews</p>
      </div>
    </div>
  );
};

export default Sidebar;
