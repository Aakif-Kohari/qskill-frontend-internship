import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">QSkill Projects</Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/translator" className="hover:text-blue-500">Translator</Link>
      </div>
    </nav>
  )
}

export default Navbar
