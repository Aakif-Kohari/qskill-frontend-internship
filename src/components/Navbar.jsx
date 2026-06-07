import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
    ${isActive 
      ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100/50' 
      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60 shadow-sm shadow-slate-100/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md group-hover:shadow-blue-200 transition-all duration-300 group-hover:-translate-y-0.5">
              Q
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight">
              Skill Projects
            </span>
          </Link>
          
          <div className="flex gap-2 items-center">
            {/* Navigation links */}
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/translator" className={linkClass}>Translator</NavLink>
            <NavLink to="/string-generator" className={linkClass}>String Generator</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
