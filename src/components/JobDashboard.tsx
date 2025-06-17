

const JobDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <header className="bg-white shadow px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src="/logo.svg" alt="Logo" className="h-6" />
          <nav className="text-sm text-gray-700 flex gap-4">
            <a href="#" className="font-semibold text-blue-600">Find Jobs</a>
            <a href="#">Top Companies</a>
            <a href="#">Job Tracker</a>
            <a href="#">My Calendar</a>
            <a href="#">Documents</a>
            <a href="#">Messages</a>
            <a href="#">Notifications</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search" className="border rounded px-3 py-1.5 text-sm" />
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded">Resume Builder</button>
          <img src="/avatar.png" className="h-8 w-8 rounded-full" />
        </div>
      </header>

      <div className="flex px-8 py-6 gap-6">

        <aside className="w-64 bg-white rounded shadow p-4 text-sm">
          <div className="flex flex-col items-center text-center">
            <img src="/user.jpg" className="w-16 h-16 rounded-full mb-2" />
            <h2 className="font-semibold text-gray-800">Albert Flores</h2>
            <p className="text-xs text-gray-500">
              Senior Product Designer | UI/UX Designer | Graphic Designer | Web…
            </p>
            <p className="text-gray-400 text-xs mt-1">Glenrock, Maryland</p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between py-1 border-b">
              <span>Profile Visitors</span><span className="text-blue-600">140</span>
            </div>
            <div className="flex justify-between py-1 border-b">
              <span>Resume Viewers</span><span className="text-blue-600">20</span>
            </div>
            <div className="flex justify-between py-1 border-b">
              <span>My Jobs</span><span className="text-blue-600">88</span>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <strong>My calendar</strong><br />
              Upcoming Interviews
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <h1 className="text-2xl font-semibold mb-2">Find your Dream Job, <span className="text-blue-600">Albert!</span></h1>
          <p className="text-sm text-gray-500 mb-4">Explore the latest job openings and apply for the best opportunities available today!</p>

          <div className="bg-white p-4 rounded shadow flex flex-wrap gap-4 items-center mb-6">
            <input
              type="text"
              placeholder="Job Title, Company, or Keywords"
              className="border p-2 rounded flex-1 min-w-[200px]"
            />
            <select className="border p-2 rounded">
              <option>Select Location</option>
            </select>
            <select className="border p-2 rounded">
              <option>Job Type</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
          </div>

          <div className="flex gap-2 mb-6 text-sm">
            <span className="bg-gray-200 px-3 py-1 rounded-full">Frontend</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Backend</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Graphic Designer</span>
          </div>

          <section className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Featured Jobs</h2>
              <a href="#" className="text-sm text-blue-600">See Featured Jobs</a>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <JobCard key={i} featured />
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Recommended Jobs</h2>
              <a href="#" className="text-sm text-blue-600">See Recommended Jobs</a>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <JobCard key={i} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const JobCard = ({ featured = false }) => (
  <div className="bg-white p-4 rounded shadow-sm text-sm relative">
    {featured && (
      <div className="text-xs font-bold text-blue-600 absolute top-2 right-2">Promoted</div>
    )}
    <img src="/company-logo.png" className="h-8 mb-2" alt="Company Logo" />
    <h3 className="font-semibold mb-1">UI/UX Designer</h3>
    <p className="text-gray-500 text-xs">Teams</p>
    <p className="text-gray-500 text-xs">Seattle, USA (Remote)</p>
    <p className="text-gray-400 text-xs mb-2">1 day ago | 22 applicants</p>
    <button className="bg-blue-600 text-white w-full py-1 rounded text-sm">Apply Now</button>
  </div>
);

export default JobDashboard;
