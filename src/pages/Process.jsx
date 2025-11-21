import { Link } from 'react-router-dom'

function Process() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Development Journey</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Design Process & Rationale
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-stone-600 text-lg mb-16 text-center max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Follow our journey through three sprints of iterative design, prototyping, and integration. 
          Click on any sprint to explore the details.
        </p>
      </div>

      {/* GitHub-Style Tree Timeline - Centered */}
      <div className="relative max-w-6xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        {/* Main Vertical Line with gradient - CENTERED */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-300 via-nobel-gold to-stone-300 transform -translate-x-1/2"></div>
        
        {/* Timeline Items */}
        <div className="space-y-32">
          {/* Sprint 1 - LEFT BRANCH */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Dot on CENTER LINE - at midpoint */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full border-4 border-stone-300 shadow-sm z-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Short line ONLY in the gap - from center to left */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-8 h-px bg-stone-300 z-10 transform -translate-x-full -translate-y-1/2"></div>
            
            {/* Content on LEFT */}
            <div className="md:order-1 order-2 flex justify-end">
              <Link to="/process/sprint1" className="group block w-full">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 group-hover:shadow-lg group-hover:border-nobel-gold group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-nobel-gold font-serif font-bold text-xl mr-4 border border-stone-100">
                      01
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Sprint 1: Ideation</h3>
                  </div>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    Concept development, initial prototyping, and feasibility analysis
                  </p>
                  <div className="flex items-center text-stone-500 font-semibold text-sm uppercase tracking-wider group-hover:text-nobel-gold transition-colors">
                    <span>Explore Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Empty space on RIGHT */}
            <div className="hidden md:block md:order-2"></div>
          </div>

          {/* Sprint 2 - RIGHT BRANCH */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Dot on CENTER LINE - at midpoint */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full border-4 border-nobel-gold shadow-sm z-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Short line ONLY in the gap - from center to right */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-8 h-px bg-stone-300 z-10 transform -translate-y-1/2"></div>
            
            {/* Empty space on LEFT */}
            <div className="hidden md:block md:order-1"></div>
            
            {/* Content on RIGHT */}
            <div className="md:order-2 order-2 flex justify-start">
              <Link to="/process/sprint2" className="group block w-full">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 group-hover:shadow-lg group-hover:border-nobel-gold group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-nobel-gold font-serif font-bold text-xl mr-4 border border-stone-100">
                      02
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Sprint 2: Prototyping</h3>
                  </div>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    Subsystem development, testing, and component integration
                  </p>
                  <div className="flex items-center text-stone-500 font-semibold text-sm uppercase tracking-wider group-hover:text-nobel-gold transition-colors">
                    <span>Explore Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Sprint 3 - LEFT BRANCH */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Dot on CENTER LINE - at midpoint */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full border-4 border-stone-900 shadow-sm z-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Short line ONLY in the gap - from center to left */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-8 h-px bg-stone-300 z-10 transform -translate-x-full -translate-y-1/2"></div>
            
            {/* Content on LEFT */}
            <div className="md:order-1 order-2 flex justify-end">
              <Link to="/process/sprint3" className="group block w-full">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 group-hover:shadow-lg group-hover:border-nobel-gold group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-nobel-gold font-serif font-bold text-xl mr-4 border border-stone-100">
                      03
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Sprint 3: Integration</h3>
                  </div>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    System integration, comprehensive testing, and MVP delivery
                  </p>
                  <div className="flex items-center text-stone-500 font-semibold text-sm uppercase tracking-wider group-hover:text-nobel-gold transition-colors">
                    <span>Explore Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Empty space on RIGHT */}
            <div className="hidden md:block md:order-2"></div>
          </div>
        </div>
      </div>

      {/* Quick Overview Section */}
      <div className="mt-20 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6 text-center">Project Timeline Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-stone-50 rounded-lg border border-stone-100">
            <div className="text-4xl font-serif font-bold text-nobel-gold mb-2">3</div>
            <div className="text-stone-800 font-semibold mb-1 uppercase tracking-wider text-sm">Sprints</div>
            <div className="text-stone-500 text-sm">Iterative development cycles</div>
          </div>
          <div className="text-center p-6 bg-stone-50 rounded-lg border border-stone-100">
            <div className="text-4xl font-serif font-bold text-nobel-gold mb-2">5</div>
            <div className="text-stone-800 font-semibold mb-1 uppercase tracking-wider text-sm">Team Members</div>
            <div className="text-stone-500 text-sm">Collaborative effort</div>
          </div>
          <div className="text-center p-6 bg-stone-50 rounded-lg border border-stone-100">
            <div className="text-4xl font-serif font-bold text-nobel-gold mb-2">1</div>
            <div className="text-stone-800 font-semibold mb-1 uppercase tracking-wider text-sm">Final Product</div>
            <div className="text-stone-500 text-sm">Fully functional automated system</div>
          </div>
        </div>
      </div>

      {/* Key Learnings */}
      <div className="mt-16 pt-12 border-t border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8 text-center">Key Learnings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="flex items-start p-4 hover:bg-stone-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 w-12 h-12 bg-white border border-stone-200 rounded-lg flex items-center justify-center mr-4 shadow-sm text-nobel-gold">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">Early Integration Testing</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Building benchtop prototypes early helped identify and resolve integration issues before full assembly.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 hover:bg-stone-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 w-12 h-12 bg-white border border-stone-200 rounded-lg flex items-center justify-center mr-4 shadow-sm text-nobel-gold">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">Iterative Design Process</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Pivoting from IR sensors to rotary encoders demonstrated the value of flexibility in design decisions.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 hover:bg-stone-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 w-12 h-12 bg-white border border-stone-200 rounded-lg flex items-center justify-center mr-4 shadow-sm text-nobel-gold">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">Cross-Functional Collaboration</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Regular team meetings between ME and EE/CS members ensured mechanical and electrical systems worked together seamlessly.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 hover:bg-stone-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 w-12 h-12 bg-white border border-stone-200 rounded-lg flex items-center justify-center mr-4 shadow-sm text-nobel-gold">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">Safety First Approach</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
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
