export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  timePosted: string;
  applicants: number;
  isPromoted?: boolean;
  companyLogo?: string;
}

export interface UserStats {
  profileVisitors: number;
  resumeViewers: number;
  myJobs: number;
}

export interface User {
  name: string;
  title: string;
  location: string;
  avatar: string;
  stats: UserStats;
}