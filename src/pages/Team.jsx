function Team() {
  const teamMembers = [
    {
      name: "Connor Hoang",
      role: "Electrical & Computer Systems (EE/CS)",
      learningGoal: "Gain hands-on experience with component specification and system integration. Learn how to properly spec electrical components for real-world applications and work with the Raspberry Pi in a complex system with multiple sensors and actuators.",
      reflection: ""
    },
    {
      name: "Hong Zhang",
      role: "Electrical & Computer Systems (EE/CS)",
      learningGoal: "Develop expertise in full-stack embedded systems development, from hardware specification to software implementation. Learn to properly spec, wire, and program the Raspberry Pi to integrate all electrical components with mechanical systems.",
      reflection: ""
    },
    {
      name: "Emily Boyd",
      role: "Mechanical Engineering (ME)",
      learningGoal: "Design a more complex mechanism with multiple interacting parts, including the custom chuck, motor integration, and brush actuation system.",
      reflection: ""
    },
    {
      name: "Mateo Otero-Diaz",
      role: "Mechanical Engineering (ME)",
      learningGoal: "Design a viable, well-scoped system that demonstrates tangible mechanical engineering skills through the complete design lifecycle: from concept and CAD design through fabrication and testing.",
      reflection: ""
    },
    {
      name: "Henry Tejada Deras",
      role: "Mechanical Engineering (ME)",
      learningGoal: "Gain experience speccing out and designing a complete mechanical system, then fabricating it using shop tools. Learn proper fabrication techniques and understand how design decisions affect manufacturability.",
      reflection: ""
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3 accent-line text-center">
        Team & Reflections
      </h1>
      <p className="text-gray-600 text-lg mb-12 text-center">
        Meet our team and learn about their individual learning goals and reflections from this project.
      </p>

      {/* Top Row - 3 Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {teamMembers.slice(0, 3).map((member, index) => (
          <div 
            key={index} 
            className="glass-card rounded-xl p-6 hover-lift border-t-4 border-blue-600"
          >
            {/* Header with Avatar, Name, Role */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-gray-900 font-bold text-xl mx-auto mb-4">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold text-sm">
                {member.role}
              </p>
            </div>
            
            {/* Initial Learning Goal */}
            <div className="mb-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 flex items-center">
                <span className="w-1 h-4 bg-blue-600 mr-2"></span>
                Initial Learning Goal
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.learningGoal}
              </p>
            </div>

            {/* Reflection */}
            <div>
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 flex items-center">
                <span className="w-1 h-4 bg-green-500 mr-2"></span>
                Reflection
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.reflection}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row - 2 Members Centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {teamMembers.slice(3, 5).map((member, index) => (
          <div 
            key={index + 3} 
            className="glass-card rounded-xl p-6 hover-lift border-t-4 border-blue-600"
          >
            {/* Header with Avatar, Name, Role */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-gray-900 font-bold text-xl mx-auto mb-4">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold text-sm">
                {member.role}
              </p>
            </div>
            
            {/* Initial Learning Goal */}
            <div className="mb-4">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 flex items-center">
                <span className="w-1 h-4 bg-blue-600 mr-2"></span>
                Initial Learning Goal
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.learningGoal}
              </p>
            </div>

            {/* Reflection */}
            <div>
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2 flex items-center">
                <span className="w-1 h-4 bg-green-500 mr-2"></span>
                Reflection
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {member.reflection}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
