import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 pb-12 animate-in fade-in duration-500">
      {/* Hero section */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-blue-100/50 blur-3xl -z-10 rounded-full" />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 tracking-tight mb-4">
          QSkill Internship Portfolio
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          A showcase of React applications (slab 1) built during my frontend development internship 
          at Qskill (Squarcell Resource India Pvt. Ltd).
        </p>
      </div>

      {/* Project cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Translator card */}
        <div className="group bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 ease-out">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-300">
              🌐
            </div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Task 1: Text Translator</h2>
          </div>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[60px]">
            A seamless translation utility supporting 20+ global languages. Powered by the Google Translate API via RapidAPI, providing real-time text conversion.
          </p>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">React State</span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">Axios</span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">RapidAPI</span>
            </div>
          </div>
          <Link 
            to="/translator" 
            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300"
          >
            Launch Application
          </Link>
        </div>

        {/* String Generator card */}
        <div className="group bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 hover:shadow-xl hover:shadow-indigo-900/5 hover:-translate-y-1 transition-all duration-300 ease-out">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl group-hover:scale-110 transition-transform duration-300">
              🔤
            </div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Task 2: String Generator</h2>
          </div>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed min-h-[60px]">
            A highly customizable cryptography-style string generator. Offers granular control over string length and character subsets, equipped with one-click clipboard integration.
          </p>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">useState</span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">useCallback</span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">useEffect</span>
            </div>
          </div>
          <Link 
            to="/string-generator" 
            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-indigo-600 transition-colors duration-300"
          >
            Launch Application
          </Link>
        </div>
      </div>

      {/* Routing info section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-lg shadow-slate-900/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
            🔀
          </div>
          <h2 className="text-xl font-bold tracking-tight">Task 3: Client-Side Routing</h2>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          This ecosystem is built as a Single Page Application (SPA) utilizing <strong className="text-white">react-router-dom</strong>. 
          Component transitions are handled entirely on the client side, ensuring zero page-reloads and instantaneous state preservation across views.
        </p>
      </div>
    </div>
  )
}

export default Home
