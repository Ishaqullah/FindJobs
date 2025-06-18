import React from 'react';
import { MapPin, Clock, Bookmark } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 hover:shadow transition-shadow duration-200 text-xs sm:text-sm">
      {job.isPromoted && (
        <div className="text-[10px] text-gray-500 font-medium mb-2">Promoted</div>
      )}

      <div className="flex items-center space-x-2 mb-2">
        <div className="w-6 h-6 bg-[#e6f0ff] flex items-center justify-center rounded flex-shrink-0">
          <img
            src="https://img.icons8.com/color/48/microsoft-teams.png"
            alt="Teams"
            className="w-4 h-4"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs sm:text-sm font-medium text-black leading-4 truncate">
            {job.title}
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500 leading-4 truncate">
            {job.company}
          </p>
        </div>
      </div>

      <div className="flex items-center text-gray-500 mb-1 text-[10px] sm:text-xs">
        <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
        <span className="truncate">{job.location}</span>
      </div>

      <div className="flex items-center text-gray-500 mb-3 text-[10px] sm:text-xs">
        <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
        <span className="truncate">{job.timePosted}</span>
        <span className="mx-1 hidden sm:inline">|</span>
        <span className="text-blue-600 truncate hidden sm:inline">
          {job.applicants} applicants
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button className="flex-1 bg-[#0154AA] text-white text-[10px] sm:text-xs py-1.5 rounded-md font-medium hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
