function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left: Project Info */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Disc Golf Disc Cleaner
          </h1>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            An automated disc cleaning station designed to thoroughly clean disc golf discs after muddy rounds.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The system uses intelligent load sensing, secure rotation, and automated brush control to provide a 
            complete cleaning cycle for both sides of a disc.
          </p>
          <div className="flex gap-4">
            <a href="#features" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </a>
            <a href="/design" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Design
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://placehold.co/600x400/3b82f6/ffffff?text=Placeholder+Image" 
              alt="Disc Golf Disc Cleaner" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-900/30 rounded-full -z-10"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-100 rounded-full -z-10"></div>
        </div>
      </div>

      {/* Key Features Section */}
      <div id="features" className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Key Features</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 hover:transform hover:-translate-y-1 hover:bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Detection</h3>
              <p className="text-gray-600 leading-relaxed">
                Load sensing via rotary encoder measures motor RPM to detect disc presence automatically
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 hover:transform hover:-translate-y-1 hover:bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Chuck Design</h3>
              <p className="text-gray-600 leading-relaxed">
                3-jaw chuck securely clamps and rotates discs during cleaning without causing damage
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 hover:transform hover:-translate-y-1 hover:bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Raspberry Pi 5 orchestrates all sensors, motors, and brush movements intelligently
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dream Vision Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Vision</h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          
          <p className="text-lg text-gray-700 mb-6">
            We're building a fully automated disc cleaning station with advanced features:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-gray-900 font-bold mr-4 flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Disc Detection</h4>
                <p className="text-gray-600">Rotary encoder-based load sensing by measuring motor RPM</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-gray-900 font-bold mr-4 flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Secure Rotation</h4>
                <p className="text-gray-600">Custom 3-jaw chuck holds and rotates the disc safely</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-gray-900 font-bold mr-4 flex-shrink-0 mt-1">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Complete Clean</h4>
                <p className="text-gray-600">Automated brush cleans both sides (user flips disc when prompted)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-gray-900 font-bold mr-4 flex-shrink-0 mt-1">
                ⭐
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">AI Vision (Stretch)</h4>
                <p className="text-gray-600">ML model confirms cleanliness using Pi Camera</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-gray-900 font-bold mr-4 flex-shrink-0 mt-1">
                ⭐
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Pneumatics (Stretch)</h4>
                <p className="text-gray-600">Compressed air for thorough dirt removal</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-gray-900 font-bold mr-4 flex-shrink-0 mt-1">
                ⭐
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Touchscreen GUI (Stretch)</h4>
                <p className="text-gray-600">Polished interface for real-time status and control</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MVP Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://placehold.co/600x400/3b82f6/ffffff?text=Placeholder+Image" 
              alt="MVP Prototype" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right: MVP Info */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Minimum Viable Product</h2>
          <div className="w-16 h-1 bg-blue-600 mb-6"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A functional physical prototype integrating all core systems to demonstrate a complete cleaning cycle.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2"></div>
              <p className="text-gray-700">Enclosure with disc feed-in mechanism</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2"></div>
              <p className="text-gray-700">Raspberry Pi 5 control system</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2"></div>
              <p className="text-gray-700">Custom 3-jaw chuck with central rotation motor</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2"></div>
              <p className="text-gray-700">Servo-controlled brush actuation</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2"></div>
              <p className="text-gray-700">Physical button controls (START/RESET/STOP)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2"></div>
              <p className="text-gray-700">Rotary encoder load sensing system</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery & Demo Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Gallery & Demo</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8"></div>

        {/* Demo Video */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Final Demo Video</h3>
          <div className="aspect-video bg-white rounded-2xl overflow-hidden shadow-xl flex items-center justify-center border-2 border-gray-200">
            <div className="text-center">
              <svg 
                className="mx-auto h-24 w-24 text-gray-600 mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <p className="text-gray-600 text-lg">
                Demo Video Coming Soon
              </p>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="rounded-xl overflow-hidden shadow-md border-2 border-gray-200 hover:border-blue-600 transition-all transform hover:scale-105">
                <img 
                  src={`https://placehold.co/400x300/3b82f6/ffffff?text=Photo+${num}`}
                  alt={`Project photo ${num}`} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
