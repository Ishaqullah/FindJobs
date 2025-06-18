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
    <div className="mb-8 lg:mb-10">
      <div className="flex items-center justify-between mb-3 lg:mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-sm lg:text-base font-semibold text-gray-900">{title}</h2>
          {seeAllLink && (
            <a
              href="#"
              className="text-xs text-blue-600 underline font-medium hidden sm:inline"
            >
              {seeAllLink}
            </a>
          )}
        </div>
        {seeAllLink && (
          <a
            href="#"
            className="text-xs text-blue-600 underline font-medium sm:hidden"
          >
            See All
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 lg:gap-4">
        {jobs.map((job, index) => (
          <JobCard key={job.id || index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobSection;
