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

        <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-8">
          Vite + React + Tailwind
        </h1>

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

        <p className="text-gray-500 dark:text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
