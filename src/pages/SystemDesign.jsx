function SystemDesign() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Technical Specifications</div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          System Design
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
      </div>

      {/* System Diagram Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          System Architecture Overview
        </h2>
        <p className="text-stone-600 mb-6 leading-relaxed">
          The Disc Golf Disc Cleaner integrates mechanical, electrical, and software subsystems to create 
          an automated cleaning station. The system uses a Raspberry Pi as the central controller, 
          coordinating motor control, sensor feedback, and user interface components.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200">
          <img 
            src="https://placehold.co/900x600/C9A668/ffffff?text=System+Architecture" 
            alt="System Architecture" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Mechanical Design Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Mechanical Design
        </h2>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Enclosure</h3>
            <p className="text-stone-600 leading-relaxed">
              A housing structure designed to encapsulate circuits and wires, featuring an inner box for the 
              cleaning area. Initially prototyped in cardboard, the enclosure includes a door for disc insertion 
              and a removable tray for debris collection.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Custom 3-Jaw Chuck</h3>
            <p className="text-stone-600 leading-relaxed">
              Inspired by lathe chuck designs, our custom 3-jaw chuck securely clamps the disc during rotation. 
              The initial prototype is 3D-printed in plastic, designed to apply sufficient clamping force without 
              damaging the disc while ensuring precise centering.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Motor Systems</h3>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
              <li>
                <strong className="text-stone-800">Central Motor:</strong> StepperOnline Nema 23 stepper motor (4.0A) rotates the chuck 
                and disc at controlled speeds for thorough cleaning
              </li>
              <li>
                <strong className="text-stone-800">Brush Motor:</strong> Servo motor acts as a "wrist" to actuate the brush and position 
                it across the disc surface in pre-programmed patterns
              </li>
            </ul>
          </div>
        </div>
        
        {/* CAD Renderings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-md">
            <img 
              src="https://placehold.co/400x300/C9A668/ffffff?text=Chuck+CAD" 
              alt="Chuck CAD Rendering" 
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-md">
            <img 
              src="https://placehold.co/400x300/C9A668/ffffff?text=Enclosure+CAD" 
              alt="Enclosure CAD" 
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-md">
            <img 
              src="https://placehold.co/400x300/C9A668/ffffff?text=Brush+Mechanism" 
              alt="Brush Mechanism" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Electrical Design Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Electrical Design
        </h2>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Control System</h3>
            <p className="text-stone-600 leading-relaxed">
              <strong className="text-stone-800">Raspberry Pi 5 (8GB):</strong> The main controller, upgraded from our initial Arduino Uno 
              plan to handle more complex processing requirements including potential AI/ML workloads and 
              multi-threaded control logic.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Motor Control</h3>
            <p className="text-stone-600 leading-relaxed">
              <strong className="text-stone-800">TB6600 Motor Driver (4.0A):</strong> Upgraded from the Adafruit Motorshield V2 (1.2A) 
              to properly handle the Nema 23 motor's 4.0A current draw. Provides precise stepper control with 
              microstepping capability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Sensing & Input</h3>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
              <li>
                <strong className="text-stone-800">Rotary Encoder:</strong> Performs "load sensing" by measuring motor RPM to detect disc 
                presence. Distinguishes between fast "No-Load" speed and slower "Loaded" speed. This replaced 
                our original flawed plan of using 3 IR distance sensors.
              </li>
              <li>
                <strong className="text-stone-800">Pi Camera:</strong> For AI/ML-based mud detection and cleanliness verification
              </li>
              <li>
                <strong className="text-stone-800">Physical Button Panel:</strong> START, RESET, and STOP buttons for manual control
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Power Management</h3>
            <p className="text-stone-600 leading-relaxed">
              Power supply system designed to handle simultaneous high current draw from multiple motors 
              while maintaining stable voltage for the Raspberry Pi and sensors.
            </p>
          </div>
        </div>
        
        {/* Circuit Diagram */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200">
          <img 
            src="https://placehold.co/900x600/C9A668/ffffff?text=Circuit+Diagram" 
            alt="Circuit Diagram" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Software & Controls Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Software & Control Logic
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Control Interface</h3>
            <p className="text-stone-600 leading-relaxed">
              Physical button panel with three operation modes:
            </p>
            <ul className="list-disc list-inside text-stone-600 mt-2 space-y-1 ml-2">
              <li><strong className="text-stone-800">START:</strong> Initiates the cleaning cycle</li>
              <li><strong className="text-stone-800">RESET:</strong> Stops central motor and returns brush to home position</li>
              <li><strong className="text-stone-800">STOP:</strong> Emergency stop - halts all movement immediately</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Brush Motion Control</h3>
            <p className="text-stone-600 leading-relaxed">
              Pre-programmed brush movement patterns (e.g., spiraling outward from the center) ensure complete 
              disc coverage. The Raspberry Pi coordinates brush position with disc rotation speed for optimal 
              cleaning efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Load Sensing Algorithm</h3>
            <p className="text-stone-600 leading-relaxed">
              Software monitors the rotary encoder to calculate real-time motor RPM. By comparing against 
              calibrated thresholds, the system detects disc presence without requiring additional sensors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">User Prompts</h3>
            <p className="text-stone-600 leading-relaxed">
              System prompts the user to flip the disc after completing the first side, enabling two-sided 
              cleaning with a single machine setup.
            </p>
          </div>

          <div className="bg-[#F5F4F0] rounded-lg p-6 mt-6 border-l-4 border-nobel-gold">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Future Enhancements</h3>
            <ul className="list-disc list-inside text-stone-600 space-y-1 ml-2">
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
