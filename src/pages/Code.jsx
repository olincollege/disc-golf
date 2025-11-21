function Code() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Technical Implementation</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Code & Resources
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
      </div>

      {/* Main Control Software */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Main Control Software (Raspberry Pi)
        </h2>
        <p className="text-stone-600 mb-6 leading-relaxed">
          The primary control software runs on the Raspberry Pi 5 (8GB) and is written in Python. 
          It orchestrates all system components including motor control, sensor reading, button input processing, 
          and the core cleaning cycle state machine.
        </p>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-stone-800 mb-3">Key Features:</h3>
          <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
            <li>State machine for cleaning cycle control (IDLE, LOADING, CLEANING, FLIP_PROMPT, COMPLETE)</li>
            <li>Rotary encoder monitoring for RPM-based load sensing</li>
            <li>Stepper motor control via TB6600 driver (Nema 23, 4.0A)</li>
            <li>Servo motor control for brush actuation and positioning</li>
            <li>Physical button input handling (START, RESET, STOP)</li>
            <li>Pre-programmed brush motion patterns (spiral, radial, etc.)</li>
            <li>Safety interlocks and emergency stop functionality</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-stone-800 mb-3">Python Dependencies:</h3>
          <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
            <li><code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm border border-stone-200">RPi.GPIO</code> - GPIO control for buttons and sensors</li>
            <li><code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm border border-stone-200">gpiozero</code> - High-level device control</li>
            <li><code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm border border-stone-200">time / threading</code> - Timing and concurrent operations</li>
            <li><code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm border border-stone-200">pigpio</code> - Hardware PWM for stepper control</li>
          </ul>
        </div>

        <a 
          href="https://github.com/yourusername/disc-cleaner-control" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-stone-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-stone-800 transition-colors shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View Control Software on GitHub
        </a>
      </div>

      {/* AI Vision Software (Stretch Goal) */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center mb-4">
          <span className="bg-[#F5F4F0] text-stone-600 text-xs font-bold px-2.5 py-1 rounded mr-3 border border-stone-200 tracking-wide uppercase">Feature</span>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            AI Vision System (Mud Detection)
          </h2>
        </div>
        <p className="text-stone-600 mb-6 leading-relaxed">
          Machine learning model for automated cleanliness verification using the Raspberry Pi Camera. 
          The system will analyze disc images to detect remaining mud/dirt and determine if additional 
          cleaning cycles are needed.
        </p>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-stone-800 mb-3">Planned Features:</h3>
          <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
            <li>Image capture and preprocessing using Pi Camera</li>
            <li>Color-based segmentation to identify brown/muddy regions</li>
            <li>Basic ML classification model (clean vs. dirty)</li>
            <li>Real-time feedback to control system</li>
            <li>Data logging for model improvement</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-stone-800 mb-3">Potential Libraries:</h3>
          <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
            <li><code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm border border-stone-200">picamera2</code> - Pi Camera interface</li>
            <li><code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm border border-stone-200">opencv-python</code> - Image processing</li>
            <li><code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm border border-stone-200">scikit-learn</code> - Machine learning</li>
            <li><code className="bg-stone-100 text-stone-800 px-2 py-1 rounded text-sm border border-stone-200">tensorflow-lite</code> - Lightweight ML inference</li>
          </ul>
        </div>

        <a 
          href="https://github.com/yourusername/disc-cleaner-vision" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-stone-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-stone-800 transition-colors shadow-md hover:shadow-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View Vision System (WIP)
        </a>
      </div>

      {/* Additional Resources Section */}
      <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">
          Additional Resources & Documentation
        </h2>
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
            <svg className="w-6 h-6 text-nobel-gold mr-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div>
              <h3 className="font-semibold text-stone-900">Setup & Installation Guide</h3>
              <p className="text-stone-600 text-sm mt-1">Step-by-step instructions for setting up the Raspberry Pi, installing dependencies, and configuring GPIO pins for motors and sensors.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
            <svg className="w-6 h-6 text-nobel-gold mr-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-semibold text-stone-900">CAD Files & 3D Models</h3>
              <p className="text-stone-600 text-sm mt-1">SolidWorks assemblies and STL files for the custom 3-jaw chuck, enclosure components, and brush mounting brackets.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
            <svg className="w-6 h-6 text-nobel-gold mr-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <div>
              <h3 className="font-semibold text-stone-900">Wiring Diagrams</h3>
              <p className="text-stone-600 text-sm mt-1">Complete wiring schematics showing connections between Raspberry Pi, TB6600 motor driver, Nema 23 stepper, servo motor, rotary encoder, and button panel.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
            <svg className="w-6 h-6 text-nobel-gold mr-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <h3 className="font-semibold text-stone-900">Component Datasheets</h3>
              <p className="text-stone-600 text-sm mt-1">Links to datasheets for Nema 23 motor, TB6600 driver, rotary encoder, and other key electrical components.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Code

