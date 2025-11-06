import { NavLink } from 'react-router-dom'

function Header() {
  const navLinkClass = ({ isActive }) => 
    isActive 
      ? "text-blue-600 font-semibold px-4 py-2 text-sm border-b-2 border-blue-600"
      : "text-gray-600 px-4 py-2 text-sm border-b-2 border-transparent"

  return (
    <nav className="bg-white sticky top-0 z-50 border-b-2 border-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Project Title */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">
              Disc Golf Disc Cleaner
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/team" className={navLinkClass}>
              Team & Reflections
            </NavLink>
            <NavLink to="/design" className={navLinkClass}>
              System Design
            </NavLink>
            <NavLink to="/process" className={navLinkClass}>
              Design Process
            </NavLink>
            <NavLink to="/budget" className={navLinkClass}>
              Budget (BOM)
            </NavLink>
            <NavLink to="/code" className={navLinkClass}>
              Code & Resources
            </NavLink>
          </div>

          {/* Mobile menu button (optional - for future mobile responsiveness) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

