function SystemDesign() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 accent-line text-center">
        System Design
      </h1>

      {/* System Diagram Section */}
      <div className="mb-16 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          System Architecture Overview
        </h2>
        <p className="text-gray-700 mb-6">
          The Disc Golf Disc Cleaner integrates mechanical, electrical, and software subsystems to create 
          an automated cleaning station. The system uses a Raspberry Pi as the central controller, 
          coordinating motor control, sensor feedback, and user interface components.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
          <img 
            src="https://placehold.co/900x600/3b82f6/ffffff?text=Placeholder+Image" 
            alt="System Architecture" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Mechanical Design Section */}
      <div className="mb-16 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mechanical Design
        </h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enclosure</h3>
            <p className="text-gray-700">
              A housing structure designed to encapsulate circuits and wires, featuring an inner box for the 
              cleaning area. Initially prototyped in cardboard, the enclosure includes a door for disc insertion 
              and a removable tray for debris collection.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom 3-Jaw Chuck</h3>
            <p className="text-gray-700">
              Inspired by lathe chuck designs, our custom 3-jaw chuck securely clamps the disc during rotation. 
              The initial prototype is 3D-printed in plastic, designed to apply sufficient clamping force without 
              damaging the disc while ensuring precise centering.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Systems</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Central Motor:</strong> StepperOnline Nema 23 stepper motor (4.0A) rotates the chuck 
                and disc at controlled speeds for thorough cleaning
              </li>
              <li>
                <strong>Brush Motor:</strong> Servo motor acts as a "wrist" to actuate the brush and position 
                it across the disc surface in pre-programmed patterns
              </li>
            </ul>
          </div>
        </div>
        
        {/* CAD Renderings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg overflow-hidden shadow-md border-2 border-gray-300 hover:border-blue-600 transition-all">
            <img 
              src="https://placehold.co/400x300/3b82f6/ffffff?text=Placeholder+Image" 
              alt="Chuck CAD Rendering" 
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md border-2 border-gray-300 hover:border-blue-600 transition-all">
            <img 
              src="https://placehold.co/400x300/3b82f6/ffffff?text=Placeholder+Image" 
              alt="Enclosure CAD" 
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md border-2 border-gray-300 hover:border-blue-600 transition-all">
            <img 
              src="https://placehold.co/400x300/3b82f6/ffffff?text=Placeholder+Image" 
              alt="Brush Mechanism" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Electrical Design Section */}
      <div className="mb-16 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Electrical Design
        </h2>
        
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Control System</h3>
            <p className="text-gray-700">
              <strong>Raspberry Pi 5 (8GB):</strong> The main controller, upgraded from our initial Arduino Uno 
              plan to handle more complex processing requirements including potential AI/ML workloads and 
              multi-threaded control logic.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Control</h3>
            <p className="text-gray-700">
              <strong>TB6600 Motor Driver (4.0A):</strong> Upgraded from the Adafruit Motorshield V2 (1.2A) 
              to properly handle the Nema 23 motor's 4.0A current draw. Provides precise stepper control with 
              microstepping capability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sensing & Input</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Rotary Encoder:</strong> Performs "load sensing" by measuring motor RPM to detect disc 
                presence. Distinguishes between fast "No-Load" speed and slower "Loaded" speed. This replaced 
                our original flawed plan of using 3 IR distance sensors.
              </li>
              <li>
                <strong>Pi Camera (Stretch Goal):</strong> For AI/ML-based mud detection and cleanliness verification
              </li>
              <li>
                <strong>Physical Button Panel:</strong> START, RESET, and STOP buttons for manual control
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Power Management</h3>
            <p className="text-gray-700">
              Power supply system designed to handle simultaneous high current draw from multiple motors 
              while maintaining stable voltage for the Raspberry Pi and sensors.
            </p>
          </div>
        </div>
        
        {/* Circuit Diagram */}
        <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
          <img 
            src="https://placehold.co/900x600/3b82f6/ffffff?text=Placeholder+Image" 
            alt="Circuit Diagram" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Software & Controls Section */}
      <div className="mb-16 pb-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Software & Control Logic
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Control Interface</h3>
            <p className="text-gray-700">
              Physical button panel with three operation modes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li><strong>START:</strong> Initiates the cleaning cycle</li>
              <li><strong>RESET:</strong> Stops central motor and returns brush to home position</li>
              <li><strong>STOP:</strong> Emergency stop - halts all movement immediately</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Brush Motion Control</h3>
            <p className="text-gray-700">
              Pre-programmed brush movement patterns (e.g., spiraling outward from the center) ensure complete 
              disc coverage. The Raspberry Pi coordinates brush position with disc rotation speed for optimal 
              cleaning efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Load Sensing Algorithm</h3>
            <p className="text-gray-700">
              Software monitors the rotary encoder to calculate real-time motor RPM. By comparing against 
              calibrated thresholds, the system detects disc presence without requiring additional sensors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User Prompts</h3>
            <p className="text-gray-700">
              System prompts the user to flip the disc after completing the first side, enabling two-sided 
              cleaning with a single machine setup.
            </p>
          </div>

          <div className="bg-blue-900/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Stretch Goals</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>AI/ML vision system for automated cleanliness verification</li>
              <li>Touchscreen GUI for enhanced user experience</li>
              <li>Automatic disc flipping mechanism</li>
              <li>CNC-controlled brush for variable disc sizes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemDesign
