import { Link } from 'react-router-dom'

function Sprint3() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Navigation */}
      <Link 
        to="/process" 
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
      >
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Timeline
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Sprint 3: System Integration & Testing
      </h1>
      <div className="w-24 h-2 bg-blue-600 mb-8"></div>

      {/* Overview */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          The final sprint involved integrating all subsystems and conducting comprehensive 
          testing. This phase revealed several integration challenges that required collaborative 
          problem-solving across the team.
        </p>
      </div>

      {/* Key Decisions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Decisions & Rationale</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Load Sensing Pivot</h3>
            <p className="text-gray-700">
              Replaced IR sensors with a rotary encoder for more reliable disc detection by measuring motor RPM changes.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Assisted Flip</h3>
            <p className="text-gray-700">
              Decided on a user-prompted disc flip for the MVP to simplify mechanical design and focus on core cleaning functionality.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Stop</h3>
            <p className="text-gray-700">
              Integrated a physical E-STOP button for immediate system shutdown, prioritizing safety.
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Challenges */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Challenges</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 text-red-500 mr-3 mt-0.5">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Disc Centering</h3>
              <p className="text-gray-700 text-sm">Ensuring precise disc centering for pre-programmed brush paths.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 text-red-500 mr-3 mt-0.5">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Clamping Force</h3>
              <p className="text-gray-700 text-sm">Applying sufficient clamping force without damaging the disc.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 text-red-500 mr-3 mt-0.5">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Clamp Coverage</h3>
              <p className="text-gray-700 text-sm">Cleaning the portions of the disc surface covered by the clamps.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 text-red-500 mr-3 mt-0.5">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Synchronization</h3>
              <p className="text-gray-700 text-sm">Synchronizing disc rotation, brush movement, and sensors.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 text-red-500 mr-3 mt-0.5">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Power Management</h3>
              <p className="text-gray-700 text-sm">Power management to handle high, simultaneous power draw from multiple motors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Outcome */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Rigorous testing ensured that all components functioned as intended 
          and met our project objectives. The final system demonstrates robust performance and 
          met all of our initial design requirements.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <p className="text-green-900 font-semibold">
            ✓ MVP Successfully Completed
          </p>
          <p className="text-green-800 text-sm mt-2">
            All core systems integrated and functioning. Ready for demonstration and stretch goal implementation.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link 
          to="/process/sprint2" 
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Previous: Sprint 2
        </Link>
        <Link 
          to="/process" 
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          Back to Timeline →
        </Link>
      </div>
    </div>
  )
}

export default Sprint3

