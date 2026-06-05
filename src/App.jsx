import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Translator from './pages/Translator'
import StringGenerator from './pages/StringGenerator'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/string-generator" element={<StringGenerator />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
