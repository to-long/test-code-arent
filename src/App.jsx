import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noopener"
            className="group"
          >
            <img
              src={viteLogo}
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-110"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener"
            className="group"
          >
            <img
              src={reactLogo}
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-110 animate-spin"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Vite + React + Tailwind
        </h1>

        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Noto Sans JP (Primary Font - All Text)
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            こんにちは！これは日本語のテキストです。Noto Sans JP
            フォントを使用しています。This is English text using the same font.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <button
            type="button"
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Edit{" "}
            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              src/App.jsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Inter (Secondary Font - Headings Only)
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            This paragraph uses Noto Sans JP (primary font) for body text. All
            headings (h1-h6) automatically use Inter font.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
