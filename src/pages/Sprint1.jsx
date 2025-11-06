import { Link } from 'react-router-dom'

function Sprint1() {
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
        Sprint 1: Ideation & Concept Development
      </h1>
      <div className="w-24 h-2 bg-blue-600 mb-8"></div>

      {/* Overview */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          During the initial ideation phase, our team brainstormed multiple concepts and 
          evaluated them against key criteria including feasibility, impact, and alignment with 
          learning goals. We created rough sketches and simple prototypes to test fundamental 
          assumptions about each concept.
        </p>
      </div>

      {/* Key Decisions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Decisions & Rationale</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Concept Selection</h3>
            <p className="text-gray-700">
              Chose the disc cleaner due to its clear mechatronics challenges (sensing, actuation, control) and practical utility.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Control Platform</h3>
            <p className="text-gray-700">
              Considered Arduino Uno for simplicity, but later pivoted to Raspberry Pi for more complex logic and potential AI integration.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sensing Approach</h3>
            <p className="text-gray-700">
              Initially explored IR distance sensors for disc detection, but identified limitations due to disc morphology.
            </p>
          </div>
        </div>
      </div>

      {/* Sprint Progress */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sprint 1 Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Enclosure</h3>
              <p className="text-gray-700 text-sm">Cardboard prototype built.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Chuck</h3>
              <p className="text-gray-700 text-sm">Small physical 3D-printed prototype created.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Central Motor</h3>
              <p className="text-gray-700 text-sm">Benchtop test successful with Nema 23 motor, Raspberry Pi 5, and TB6600 driver.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Brush</h3>
              <p className="text-gray-700 text-sm">Mock brush actuated on a servo.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Vision</h3>
              <p className="text-gray-700 text-sm">Research and example screenshots of mud detection.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Controls</h3>
              <p className="text-gray-700 text-sm">Physical button logic (START/RESET/STOP) implemented.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Pneumatics</h3>
              <p className="text-gray-700 text-sm">Research completed on a 40 PSI system.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges & Pivots</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Schedule Delay
            </h3>
            <p className="text-gray-700 ml-5 mb-2">
              Team was slightly behind due to SHPE conference attendance.
            </p>
            <p className="text-gray-600 text-sm ml-5 italic">
              <strong>Solution:</strong> Held additional team meetings and work sessions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Integration Risk
            </h3>
            <p className="text-gray-700 ml-5 mb-2">
              Developing systems in parallel risked major failures during combination.
            </p>
            <p className="text-gray-600 text-sm ml-5 italic">
              <strong>Solution:</strong> De-risked by building a benchtop prototype (Pi, motor drivers, encoder) early.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Sensing Pivot
            </h3>
            <p className="text-gray-700 ml-5 mb-2">
              Original plan for 3 IR distance sensors was flawed due to indistinct disc morphology.
            </p>
            <p className="text-gray-600 text-sm ml-5 italic">
              <strong>New Plan:</strong> Pivoted to rotary encoder for "load sensing" (measuring motor RPM), which is more robust.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link 
          to="/process" 
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Back to Timeline
        </Link>
        <Link 
          to="/process/sprint2" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Next: Sprint 2 →
        </Link>
      </div>
    </div>
  )
}

export default Sprint1

