import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      {/* Header section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">QSkill Internship Projects</h1>
        <p className="text-slate-500">
          Frontend Development Internship | Slab 1 Tasks
        </p>
      </div>

      <div className="space-y-6">
        {/* Task 1 Description */}
        <div className="bg-white p-6 rounded-lg shadow border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Task 1: Text Translator</h2>
          <p className="text-slate-600 mb-4">
            A simple translation app that takes English text and converts it into various other languages. 
            I used <strong>React State</strong> to manage the input text and selected language. 
            The translation data is fetched from the Google Translate API via <strong>RapidAPI</strong> using the <strong>Axios</strong> library.
          </p>
          <Link to="/translator" className="text-blue-600 font-medium hover:underline">
            Go to Translator →
          </Link>
        </div>

        {/* Task 2 Description */}
        <div className="bg-white p-6 rounded-lg shadow border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Task 2: Random String Generator</h2>
          <p className="text-slate-600 mb-4">
            An interactive tool to generate random strings based on selected criteria like length, uppercase, lowercase, numbers, and symbols. 
            This task specifically focuses on React Hooks: <strong>useState</strong> for managing all the checkbox and slider values, <strong>useCallback</strong> to memoize the generation logic, and <strong>useEffect</strong> to automatically generate a string when the page first loads.
          </p>
          <Link to="/string-generator" className="text-blue-600 font-medium hover:underline">
            Go to String Generator →
          </Link>
        </div>

        {/* Task 3 Description */}
        <div className="bg-white p-6 rounded-lg shadow border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-2">Task 3: Client-Side Routing</h2>
          <p className="text-slate-600 mb-2">
            This entire application demonstrates client-side routing using <strong>react-router-dom</strong>.
            Instead of multiple separate HTML pages, the app is a Single Page Application (SPA).
            The navigation bar at the top allows switching between the Translator, String Generator, and this Home page instantly without reloading the browser.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
