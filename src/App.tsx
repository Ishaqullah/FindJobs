import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchForm from './components/SearchForm';
import JobSection from './components/JobSection';
import { mockUser, featuredJobs, recommendedJobs, latestJobs } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex justify-center">
        <div className="flex w-full max-w-7xl">
          <Sidebar user={mockUser} />

          <main className="flex-1 p-8">
            <div className="max-w-5xl mx-auto">
              <SearchForm />

              <JobSection 
                title="Featured Jobs" 
                jobs={featuredJobs} 
                seeAllLink="See Featured Jobs"
              />

              <JobSection 
                title="Recommended Jobs" 
                jobs={recommendedJobs} 
                seeAllLink="See Recommended Jobs"
              />

              <JobSection 
                title="Latest Jobs" 
                jobs={latestJobs} 
                seeAllLink="See Latest Jobs"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
