import { useState, useCallback, useEffect } from 'react'

function StringGenerator() {
  // basic state for the UI
  const [generatedString, setGeneratedString] = useState('')
  const [strLength, setStrLength] = useState(12)
  const [charTypes, setCharTypes] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  })
  const [copied, setCopied] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // generate function using useCallback so it doesn't recreate every render
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
    for (let i = 0; i < strLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      result += charset[randomIndex]
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
    <div className="max-w-2xl mx-auto mt-10 p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-slate-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Random String Generator</h1>
        <p className="text-slate-500">
          Customize your options below to generate a random string.
        </p>
      </div>

      <div className="space-y-6">
        {/* Error message */}
        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
            {errorMsg}
          </div>
        )}

        {/* Output Box */}
        <div className="relative">
          <div className="w-full p-4 min-h-[60px] bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-lg break-all flex items-center">
            {generatedString || <span className="text-slate-400 italic">String will appear here...</span>}
          </div>
          <button 
            onClick={handleCopy}
            className="absolute right-2 top-2 px-3 py-1.5 bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm font-medium rounded-md transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Length Slider */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-slate-700">Length</label>
            <span className="text-sm font-bold text-blue-600">{strLength}</span>
          </div>
          <input 
            type="range" 
            min="4" 
            max="64" 
            value={strLength}
            onChange={(e) => setStrLength(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        {/* Checkboxes */}
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={charTypes.uppercase}
              onChange={() => handleCheckboxChange('uppercase')}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="text-slate-700">Uppercase (A-Z)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={charTypes.lowercase}
              onChange={() => handleCheckboxChange('lowercase')}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="text-slate-700">Lowercase (a-z)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={charTypes.numbers}
              onChange={() => handleCheckboxChange('numbers')}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="text-slate-700">Numbers (0-9)</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={charTypes.symbols}
              onChange={() => handleCheckboxChange('symbols')}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="text-slate-700">Symbols (!@#$...)</span>
          </label>
        </div>

        {/* Generate Button */}
        <button 
          onClick={handleGenerate}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm transition-colors"
        >
          Re-Generate String
        </button>
      </div>
    </div>
  )
}

export default StringGenerator
