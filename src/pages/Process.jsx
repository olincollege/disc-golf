import { Link } from 'react-router-dom'

function Process() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 accent-line text-center">
        Design Process & Rationale
      </h1>
      <p className="text-gray-600 text-lg mb-16 text-center max-w-3xl mx-auto">
        Follow our journey through three sprints of iterative design, prototyping, and integration. 
        Click on any sprint to explore the details.
      </p>

      {/* Interactive Timeline */}
      <div className="relative mb-16">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 hidden md:block"></div>
        
        {/* Timeline Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Sprint 1 */}
          <Link 
            to="/process/sprint1"
            className="group relative"
          >
            <div className="flex flex-col items-center">
              {/* Node Circle */}
              <div className="relative z-10 w-32 h-32 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-white transition-colors">01</div>
                  <div className="text-xs font-semibold text-gray-600 group-hover:text-white transition-colors">Sprint</div>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 group-hover:shadow-xl group-hover:border-blue-600 transition-all duration-300 w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Ideation</h3>
                <p className="text-gray-600 text-sm text-center mb-3">
                  Concept development and initial prototyping
                </p>
                <div className="flex items-center justify-center text-blue-600 font-semibold text-sm group-hover:underline">
                  Explore Sprint 1 →
                </div>
              </div>
            </div>
          </Link>

          {/* Sprint 2 */}
          <Link 
            to="/process/sprint2"
            className="group relative"
          >
            <div className="flex flex-col items-center">
              {/* Node Circle */}
              <div className="relative z-10 w-32 h-32 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-white transition-colors">02</div>
                  <div className="text-xs font-semibold text-gray-600 group-hover:text-white transition-colors">Sprint</div>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 group-hover:shadow-xl group-hover:border-blue-600 transition-all duration-300 w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Prototyping</h3>
                <p className="text-gray-600 text-sm text-center mb-3">
                  Subsystem development and testing
                </p>
                <div className="flex items-center justify-center text-blue-600 font-semibold text-sm group-hover:underline">
                  Explore Sprint 2 →
                </div>
              </div>
            </div>
          </Link>

          {/* Sprint 3 */}
          <Link 
            to="/process/sprint3"
            className="group relative"
          >
            <div className="flex flex-col items-center">
              {/* Node Circle */}
              <div className="relative z-10 w-32 h-32 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-white transition-colors">03</div>
                  <div className="text-xs font-semibold text-gray-600 group-hover:text-white transition-colors">Sprint</div>
                </div>
              </div>
              
              {/* Content Card */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 group-hover:shadow-xl group-hover:border-blue-600 transition-all duration-300 w-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Integration</h3>
                <p className="text-gray-600 text-sm text-center mb-3">
                  System integration and final testing
                </p>
                <div className="flex items-center justify-center text-blue-600 font-semibold text-sm group-hover:underline">
                  Explore Sprint 3 →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Quick Overview Section */}
      <div className="mt-20 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Timeline Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-700 font-semibold mb-1">Sprints</div>
            <div className="text-gray-600 text-sm">Iterative development cycles</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-700 font-semibold mb-1">Team Members</div>
            <div className="text-gray-600 text-sm">Collaborative effort</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
            <div className="text-gray-700 font-semibold mb-1">MVP Delivered</div>
            <div className="text-gray-600 text-sm">Fully functional prototype</div>
          </div>
        </div>
      </div>

      {/* Key Learnings */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Learnings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Integration Testing</h3>
              <p className="text-gray-700 text-sm">
                Building benchtop prototypes early helped identify and resolve integration issues before full assembly.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Iterative Design Process</h3>
              <p className="text-gray-700 text-sm">
                Pivoting from IR sensors to rotary encoders demonstrated the value of flexibility in design decisions.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Functional Collaboration</h3>
              <p className="text-gray-700 text-sm">
                Regular team meetings between ME and EE/CS members ensured mechanical and electrical systems worked together seamlessly.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First Approach</h3>
              <p className="text-gray-700 text-sm">
                Implementing physical E-STOP and other safety features from the start prevented issues during testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
