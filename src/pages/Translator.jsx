import { useState } from 'react'
import axios from 'axios'

function Translator() {
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [targetLang, setTargetLang] = useState('hi')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to translate.')
      return
    }

    setIsLoading(true)
    setError(null)

    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY
    if (!apiKey || apiKey === 'your_rapidapi_key_here') {
      setError('API key issue - check your .env file.')
      setIsLoading(false)
      return
    }

    try {
      const response = await axios.post(
        'https://google-translator9.p.rapidapi.com/v2',
        {
          q: inputText,
          source: 'en',
          target: targetLang,
          format: 'text'
        },
        {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com'
          }
        }
      )

      if (response.data && response.data.data && response.data.data.translations) {
        setTranslatedText(response.data.data.translations[0].translatedText)
      } else {
        setError('Translation failed. Invalid response format.')
      }
    } catch (err) {
      if (err.response?.status === 403) {
        setError('API Key is invalid or not subscribed to the RapidAPI endpoint.')
      } else if (err.response?.status === 429) {
        setError('Too many requests. Please slow down.')
      } else {
        setError('Something went wrong. Try again later.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 sm:p-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/60 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-3xl shadow-lg shadow-blue-500/30 mb-6">
          Aあ
        </div>
        <h1 className="text-4xl font-bold text-slate-800 tracking-tight mb-3">Text Translator</h1>
        <p className="text-slate-500 font-medium">Instantly translate English text into multiple languages</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Input Area */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3 ml-1">
            Source Text (English)
          </label>
          <textarea
            className="w-full p-5 bg-slate-50/50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-300 resize-none placeholder:text-slate-400 text-slate-700"
            rows="4"
            placeholder="Type or paste your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-5 items-end bg-slate-50 p-5 rounded-2xl border border-slate-100">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-semibold text-slate-700 mb-3 ml-1">
              Target Language
            </label>
            <div className="relative">
              <select
                className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none cursor-pointer appearance-none text-slate-700 font-medium transition-all"
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
              >
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="te">Telugu</option>
                <option value="mr">Marathi</option>
                <option value="ta">Tamil</option>
                <option value="ur">Urdu</option>
                <option value="gu">Gujarati</option>
                <option value="kn">Kannada</option>
                <option value="ml">Malayalam</option>
                <option value="pa">Punjabi</option>
                <option value="ja">Japanese</option>
                <option value="ar">Arabic</option>
                <option value="pt">Portuguese</option>
                <option value="ko">Korean</option>
                <option value="zh-CN">Chinese</option>
                <option value="ru">Russian</option>
                <option value="it">Italian</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                ▼
              </div>
            </div>
          </div>
          
          <div className="w-full sm:w-1/2">
            <button
              onClick={handleTranslate}
              disabled={isLoading}
              className="w-full py-4 px-6 bg-slate-900 hover:bg-blue-600 disabled:bg-slate-300 disabled:text-slate-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]"
            >
              {isLoading ? 'Translating...' : 'Translate Text'}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium animate-in fade-in flex items-center gap-3">
            <span className="text-lg">⚠️</span> {error}
          </div>
        )}

        {/* Output Area */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3 ml-1">
            Translation Result
          </label>
          <div className="w-full p-6 min-h-[120px] bg-blue-50/50 border border-blue-100 rounded-2xl text-slate-800 shadow-inner">
            {translatedText ? (
              <p className="text-lg leading-relaxed">{translatedText}</p>
            ) : (
              <p className="text-slate-400 italic">Translation will appear here...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Translator
