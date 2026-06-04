import { useState } from 'react'
import axios from 'axios'

function Translator() {
  const [inputText, setInputText] = useState('')
  const [targetLang, setTargetLang] = useState('es')
  const [translatedText, setTranslatedText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTranslate = async () => {
    // don't do anything if input is empty
    if (!inputText.trim()) {
      setError('Please enter some text first.')
      return
    }

    setIsLoading(true)
    setError('')
    setTranslatedText('')

    try {
      const res = await axios.post(
        'https://google-translator9.p.rapidapi.com/v2',
        {
          q: inputText,
          source: 'en',
          target: targetLang,
          format: 'text'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
            'x-rapidapi-host': 'google-translator9.p.rapidapi.com'
          }
        }
      )

      // grab the translated text from the response
      const result = res.data.data.translations[0].translatedText
      setTranslatedText(result)
    } catch (err) {
      console.error(err)
      if (err.response && err.response.status === 403) {
        setError('API key issue - check your .env file.')
      } else if (err.response && err.response.status === 429) {
        setError('Too many requests. Wait a bit and try again.')
      } else {
        setError('Something went wrong. Try again later.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-slate-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Text Translator</h1>
        <p className="text-slate-500">Enter English text and choose a language to translate</p>
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
            placeholder="Type something in English..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>

        {/* Language dropdown + translate button */}
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
          </div>
          
          <div className="w-full sm:w-1/2">
            <button
              onClick={handleTranslate}
              disabled={isLoading}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors shadow-sm"
            >
              {isLoading ? 'Translating...' : 'Translate'}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Output Area */}
        <div className="mt-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Result
          </label>
          <div className="w-full p-4 min-h-[120px] bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
            {isLoading ? (
              <p className="text-slate-400">Loading...</p>
            ) : translatedText ? (
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
