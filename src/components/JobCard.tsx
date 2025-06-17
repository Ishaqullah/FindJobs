import React from 'react';
import { MapPin, Clock, Bookmark } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow transition-shadow duration-200 text-[12px]">
      {job.isPromoted && (
        <div className="text-[10px] text-gray-500 font-medium mb-2">Promoted</div>
      )}

      <div className="flex items-center space-x-2 mb-2">
        <div className="w-6 h-6 bg-[#e6f0ff] flex items-center justify-center rounded">
          <img
            src="https://img.icons8.com/color/48/microsoft-teams.png"
            alt="Teams"
            className="w-4 h-4"
          />
        </div>
        <div>
          <p className="text-[12px] font-medium text-black leading-4">
            {job.title}
          </p>
          <p className="text-[11px] text-gray-500 leading-4">{job.company}</p>
        </div>
      </div>

      <div className="flex items-center text-gray-500 mb-1 text-xs">
        <MapPin className="w-3 h-3 mr-1" />
        <span>{job.location}</span>
      </div>

      <div className="flex items-center text-gray-500 mb-3 whitespace-nowrap text-xs">
        <Clock className="w-3 h-3 mr-1" />
        <span>{job.timePosted}</span>
        <span className="mx-1">|</span>
        <span className="text-blue-600">{job.applicants} applicants</span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button className="w-full bg-[#0154AA] text-white text-[12px] py-1.5 rounded-md font-medium hover:bg-blue-700">
          Apply Now
        </button>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
