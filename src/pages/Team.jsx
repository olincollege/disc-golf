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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Our People</div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Team & Reflections
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Meet our team and learn about their individual learning goals and reflections from this project.
        </p>
      </div>

      {/* Top Row - 3 Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {teamMembers.slice(0, 3).map((member, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-nobel-gold group"
          >
            {/* Header with Avatar, Name, Role */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center text-nobel-gold font-serif font-bold text-2xl mx-auto mb-5 border border-stone-200 group-hover:border-nobel-gold transition-colors shadow-inner">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                {member.name}
              </h3>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">
                {member.role}
              </p>
            </div>
            
            {/* Initial Learning Goal */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-2"></span>
                Initial Goal
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                {member.learningGoal}
              </p>
            </div>

            {/* Reflection */}
            <div>
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mr-2"></span>
                Reflection
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm italic">
                {member.reflection || "Coming soon..."}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row - 2 Members Centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {teamMembers.slice(3, 5).map((member, index) => (
          <div 
            key={index + 3} 
            className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-nobel-gold group"
          >
            {/* Header with Avatar, Name, Role */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center text-nobel-gold font-serif font-bold text-2xl mx-auto mb-5 border border-stone-200 group-hover:border-nobel-gold transition-colors shadow-inner">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                {member.name}
              </h3>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">
                {member.role}
              </p>
            </div>
            
            {/* Initial Learning Goal */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-2"></span>
                Initial Goal
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                {member.learningGoal}
              </p>
            </div>

            {/* Reflection */}
            <div>
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mr-2"></span>
                Reflection
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm italic">
                {member.reflection || "Coming soon..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
