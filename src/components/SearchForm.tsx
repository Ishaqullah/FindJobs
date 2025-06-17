import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const SearchForm: React.FC = () => {
  const [jobQuery, setJobQuery] = useState('');
  const [location, setLocation] = useState('Select Location');
  const [jobType, setJobType] = useState('Job Type');

  const similarTags = ['Frontend', 'Backend', 'Graphic Designer'];

  return (
    <div className="bg-transparent p-6 rounded-md">
      <div className="mb-6">
        <h1 className="text-[20px] font-semibold text-gray-900 mb-1">
          Find your Dream Job, <span className="text-[#0154AA] font-semibold">Albert!</span>
        </h1>
        <p className="text-sm text-gray-500">
          Explore the latest job openings and apply for the best opportunities available today!
        </p>
      </div>
      <div className="bg-white p-4 rounded-xl flex items-center gap-3 mb-5 shadow-sm h-[77px]">
        <input
          type="text"
          placeholder="Job Title, Company, or Keywords"
          value={jobQuery}
          onChange={(e) => setJobQuery(e.target.value)}
          className="flex-1 h-[48px] px-4  rounded-md text-sm focus:ring-1 focus:ring-[#0154AA] focus:border-[#0154AA]"
        />

        <div className="relative w-[160px]">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-[48px] w-full px-4 pr-8  rounded-md text-sm appearance-none bg-white focus:ring-1 focus:ring-[#0154AA] focus:border-[#0154AA]"
          >
            <option>Select Location</option>
            <option>Seattle, USA</option>
            <option>New York, USA</option>
            <option>San Francisco, USA</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative w-[120px]">
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="h-[48px] w-full px-4 pr-8  rounded-md text-sm appearance-none bg-white focus:ring-1 focus:ring-[#0154AA] focus:border-[#0154AA]"
          >
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Remote</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <button className="flex items-center justify-center h-[30px] px-5 bg-[#0154AA] text-white text-sm font-medium rounded-md hover:bg-[#014a94] transition-colors">
          <Search className="w-4 h-4 mr-2" />
          Search
        </button>
      </div>
      <div className="flex items-center gap-2 ml-1">
        <span className="text-sm text-gray-600">Similar:</span>
        {similarTags.map((tag) => (
          <button
            key={tag}
            className="px-3 py-1 border border-gray-300 rounded-md text-[13px] text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
