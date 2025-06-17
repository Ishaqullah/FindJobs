import React from 'react';
import { ChevronDown } from 'lucide-react';
import { User } from '../types';

interface SidebarProps {
  user: User;
}

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  return (
    <div className="w-80 bg-[#F5F6F8] p-4 rounded-xl">

      <div className="relative bg-white rounded-xl overflow-hidden pb-4">
        {/* Cover Image */}
        <div className="h-28 rounded-t-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Picture */}
        <div className="absolute top-[72px] left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-[3px] border-white overflow-hidden bg-white">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Add vertical space to accommodate the overlapping avatar */}
        <div className="mt-12 text-center">
          <h2 className="text-[15px] font-semibold text-gray-900">{user.name}</h2>
          <p className="text-xs text-gray-600 mt-1">{user.title}</p>
          <p className="text-xs text-gray-500 mt-1">{user.location}</p>
        </div>
      </div>



      <div className="bg-white mt-6 rounded-lg divide-y border border-gray-100">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-gray-600">Profile Visitors</span>
          <span className="text-sm font-medium text-[#0154AA]">{user.stats.profileVisitors}</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-gray-600">Resume Viewers</span>
          <span className="text-sm font-medium text-[#0154AA]">{user.stats.resumeViewers}</span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-gray-600">My Jobs</span>
          <span className="text-sm font-medium text-[#0154AA]">{user.stats.myJobs}</span>
        </div>
      </div>

      <div className="bg-white mt-4 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-800">My calendar</h3>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <p className="text-xs text-gray-500 mt-1">Upcoming Interviews</p>
      </div>
    </div>
  );
};

export default Sidebar;
