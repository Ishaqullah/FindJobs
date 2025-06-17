import React from 'react';
import JobCard from './JobCard';
import { Job } from '../types';

interface JobSectionProps {
  title: string;
  jobs: Job[];
  seeAllLink?: string;
}

const JobSection: React.FC<JobSectionProps> = ({ title, jobs, seeAllLink }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-[14px] font-semibold text-gray-900">{title}</h2>
          {seeAllLink && (
            <a
              href="#"
              className="text-xs text-blue-600 underline font-medium"
            >
              {seeAllLink}
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobSection;
