import { useState } from 'react'

function Translator() {
  const [inputText, setInputText] = useState('')
  const [targetLang, setTargetLang] = useState('es')
  
  // This state will be used later when we connect to the API
  const [translatedText, setTranslatedText] = useState('')

  const handleTranslate = () => {
    // Basic validation
    if (!inputText.trim()) {
      alert('Please enter some text to translate')
      return
    }
    
    // Placeholder logic for now
    console.log('Translating:', inputText, 'to', targetLang)
    setTranslatedText('Translation will appear here once the API is connected in the next session.')
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-slate-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Text Translator</h1>
        <p className="text-slate-500">Enter text and choose a language to translate</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Input Area */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Text to translate
          </label>
          <textarea
            className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all"
            rows="5"
            placeholder="Type something here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>

        {/* Controls: Dropdown and Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Target Language
            </label>
            <select
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white cursor-pointer"
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
            >
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="hi">Hindi</option>
              <option value="ja">Japanese</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
          
          <div className="w-full sm:w-1/2">
            <button
              onClick={handleTranslate}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
            >
              Translate
            </button>
          </div>
        </div>

        {/* Output Area */}
        <div className="mt-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Result
          </label>
          <div className="w-full p-4 min-h-[120px] bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
            {translatedText ? (
              <p>{translatedText}</p>
            ) : (
              <p className="text-slate-400 italic">Translated text will show here</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Translator
