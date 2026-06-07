import { useState, useCallback, useEffect } from 'react'

function StringGenerator() {
  const [generatedString, setGeneratedString] = useState('')
  const [strLength, setStrLength] = useState(16)
  const [charTypes, setCharTypes] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  })
  const [copied, setCopied] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleGenerate = useCallback(() => {
    setErrorMsg('')
    
    let charset = ''
    if (charTypes.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (charTypes.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (charTypes.numbers) charset += '0123456789'
    if (charTypes.symbols) charset += '!@#$%^&*'

    if (charset === '') {
      setErrorMsg('Please select at least one character type!')
      setGeneratedString('')
      return
    }

    let result = ''
    const array = new Uint32Array(strLength)
    window.crypto.getRandomValues(array)
    
    for (let i = 0; i < strLength; i++) {
      result += charset[array[i] % charset.length]
    }
    
    setGeneratedString(result)
  }, [strLength, charTypes])

  useEffect(() => {
    handleGenerate()
  }, [handleGenerate])

  const handleCopy = () => {
    if (!generatedString) return
    navigator.clipboard.writeText(generatedString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCheckboxChange = (type) => {
    setCharTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 sm:p-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-3xl shadow-lg shadow-indigo-500/30 mb-6">
          *#
        </div>
        <h1 className="text-4xl font-bold text-slate-800 tracking-tight mb-3">String Generator</h1>
        <p className="text-slate-500 font-medium">Generate secure, randomized strings with granular control</p>
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        {/* Error message */}
        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium animate-in fade-in flex items-center gap-3">
            <span className="text-lg">⚠️</span> {errorMsg}
          </div>
        )}

        {/* Output Box */}
        <div className="flex flex-col sm:flex-row items-stretch group rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <div className="flex-1 p-6 min-h-[90px] bg-slate-900 text-emerald-400 text-xl md:text-2xl font-mono break-all flex items-center justify-center shadow-inner border-r border-slate-800 transition-all">
            {generatedString || <span className="text-slate-600 text-base font-sans italic">Output will appear here...</span>}
          </div>
          <button 
            onClick={handleCopy}
            disabled={!generatedString}
            className="px-6 py-4 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none flex flex-col items-center justify-center min-w-[120px]"
          >
            <span className="mb-2">
              {copied ? (
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              ) : (
                <svg className="w-6 h-6 text-slate-500 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </span>
            <span className={copied ? "text-emerald-600" : ""}>{copied ? 'Copied!' : 'Copy Text'}</span>
          </button>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-8">
          {/* Length Slider */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <label className="text-sm font-semibold text-slate-700">String Length</label>
              <div className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-bold text-indigo-600 shadow-sm">
                {strLength}
              </div>
            </div>
            <input 
              type="range" 
              min="4" 
              max="64" 
              value={strLength}
              onChange={(e) => setStrLength(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500 transition-all"
            />
          </div>

          {/* Checkboxes */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-4">Character Types</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries({
                uppercase: 'Uppercase (A-Z)',
                lowercase: 'Lowercase (a-z)',
                numbers: 'Numbers (0-9)',
                symbols: 'Symbols (!@#$)'
              }).map(([key, label]) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-200 hover:shadow-sm">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      checked={charTypes[key]}
                      onChange={() => handleCheckboxChange(key)}
                      className="peer w-5 h-5 text-indigo-600 bg-white border-slate-300 rounded focus:ring-indigo-500 focus:ring-offset-slate-50 cursor-pointer transition-all"
                    />
                  </div>
                  <span className="text-slate-700 font-medium select-none">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button 
          onClick={handleGenerate}
          className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-indigo-600/20 active:scale-[0.98]"
        >
          Re-Generate String
        </button>
      </div>
    </div>
  )
}

export default StringGenerator
