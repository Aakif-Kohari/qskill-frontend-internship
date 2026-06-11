# qskill-frontend-internship

A multi-page React SPA built as the Slab 1 deliverable for my **Frontend Development Internship at QSkill** (Squarcell Resource India Pvt. Ltd), June–July 2026.

The project covers all three required tasks - a live text translator, a configurable random string generator, and client-side routing connecting them as a single seamless app.

---

## Project Overview

| Detail | Info |
|---|---|
| Internship | QSkill - Frontend Development |
| Duration | 1st June – 1st July 2026 |
| Slab | Slab 1 (Beginner) |
| Mode | Virtual |

All three Slab 1 tasks are implemented in a single React + Vite project:

- **Task 1** - Text Translator powered by Google Translate via RapidAPI
- **Task 2** - Random String Generator using `useState`, `useCallback`, and `useEffect`
- **Task 3** - Client-side routing with `react-router-dom` (the whole app is a SPA)

---

## Tech Stack

| Technology | Version | Used For |
|---|---|---|
| React | 19.x | UI library |
| Vite | 6.x | Build tool and dev server |
| Tailwind CSS | 4.x | Styling |
| react-router-dom | 7.x | Client-side routing (Task 3) |
| Axios | 1.x | API requests in Translator |
| RapidAPI - Google Translate | - | Translation backend |

---

## Pages and Features

### Home - `/`

Landing page with cards linking to both tools. Also serves as the documentation for Task 3 - navigation between all pages is handled entirely on the client without any full page reload.

---

### Text Translator - `/translator`

- Takes English text as input
- Lets you pick a target language from a dropdown (20 languages supported)
- Sends a POST request to `google-translator9.p.rapidapi.com` via Axios
- Displays the translated output, or a clear error message if something goes wrong (invalid key, rate limit, network error, etc.)

**Supported languages:**
Spanish, French, German, Hindi, Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Kannada, Malayalam, Punjabi, Japanese, Arabic, Portuguese, Korean, Chinese (Simplified), Russian, Italian

---

### Random String Generator - `/string-generator`

- Slider to set string length (4–64 characters)
- Checkboxes to toggle character types: Uppercase (A–Z), Lowercase (a–z), Numbers (0–9), Symbols (!@#$)
- Auto-generates on page load and re-generates whenever settings change
- Manual "Re-Generate" button
- One-click clipboard copy with visual confirmation
- Uses `window.crypto.getRandomValues()` for cryptographically random output

**React hooks used:** `useState`, `useCallback`, `useEffect`

---

## Project Structure

```
qskill-frontend-internship/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Sticky nav with active route highlighting
│   ├── pages/
│   │   ├── Home.jsx            # Landing page / Task 3 showcase
│   │   ├── Translator.jsx      # Task 1: Text Translator
│   │   └── StringGenerator.jsx # Task 2: Random String Generator
│   ├── App.jsx                 # Route definitions
│   ├── main.jsx                # App entry point with BrowserRouter
│   └── index.css               # Tailwind import + Google Fonts
├── .env.example                # Template for API key setup
├── vite.config.js
└── package.json
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Aakif-Kohari/qskill-frontend-internship.git
cd qskill-frontend-internship
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your environment variables

The Translator requires a RapidAPI key. Copy the example file and fill in your key:

```bash
cp .env.example .env
```

Open `.env` and replace the placeholder:

```
VITE_RAPIDAPI_KEY=your_actual_key_here
```

**How to get a RapidAPI key:**

1. Go to [https://rapidapi.com](https://rapidapi.com) and create a free account
2. Search for **Google Translator** (by IRCTCAPI)
3. Subscribe to the free tier
4. Copy your `X-RapidAPI-Key` from the API dashboard

> **Note:** The String Generator works without any API key. Only the Translator page needs one.

> **Warning:** Never commit your `.env` file - it is already listed in `.gitignore`.

---

## How to Run

```bash
# Start the development server
npm run dev
# Runs at http://localhost:5173

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## License

[MIT](./LICENSE)
