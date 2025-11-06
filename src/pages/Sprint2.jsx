import { Link } from 'react-router-dom'

function Sprint2() {
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
        Sprint 2: Prototyping & Subsystem Development
      </h1>
      <div className="w-24 h-2 bg-blue-600 mb-8"></div>

      {/* Overview */}
      <div className="mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Sprint 2 focused on developing and testing individual subsystems. Each team member 
          took ownership of specific components while maintaining regular integration checkpoints 
          to ensure compatibility.
        </p>
      </div>

      {/* Key Decisions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Decisions & Rationale</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Selection</h3>
            <p className="text-gray-700">
              Upgraded central motor to Nema 23 (4.0A) and driver to TB6600 to ensure sufficient torque and current handling for disc rotation.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Chuck Design</h3>
            <p className="text-gray-700">
              Developed a custom 3-jaw chuck prototype to securely hold various disc sizes without slippage or damage.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Brush Actuation</h3>
            <p className="text-gray-700">
              Implemented a servo motor for precise control over brush positioning and pressure.
            </p>
          </div>
        </div>
      </div>

      {/* Sprint 2 Goals */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sprint 2 Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ⚙
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Full Scale Model</h3>
              <p className="text-gray-700 text-sm">A fully assembled model with sensors and components mounted.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              💨
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Pneumatics</h3>
              <p className="text-gray-700 text-sm">Pneumatics system will be assembled (assuming parts arrive).</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              📦
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Enclosure</h3>
              <p className="text-gray-700 text-sm">Space claims completed; inner enclosure assembled with chuck and central motors.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              🔧
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Chuck Integration</h3>
              <p className="text-gray-700 text-sm">Integrated with the inner enclosure.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              📡
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Sensors</h3>
              <p className="text-gray-700 text-sm">Motor encoder integrated (to detect tightening); Pi Camera outputting values to the Pi.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              ⚡
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Power Supply</h3>
              <p className="text-gray-700 text-sm">A power supply will be decided upon.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              🔩
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Central Motors</h3>
              <p className="text-gray-700 text-sm">Integrated with the inner enclosure and wired to the Pi.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              🖌
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Brush Motor</h3>
              <p className="text-gray-700 text-sm">Brush motor will be controlled and wired to the Pi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Outcome */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Each subsystem was validated independently before proceeding to integration, which 
          helped us identify and fix issues early in the development process.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <Link 
          to="/process/sprint1" 
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Previous: Sprint 1
        </Link>
        <Link 
          to="/process/sprint3" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Next: Sprint 3 →
        </Link>
      </div>
    </div>
  )
}

export default Sprint2

