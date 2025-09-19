import { Outlet, Link } from "react-router-dom";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={reactLogo} alt="React Logo" />
              <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">
                React Router Demo
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  About
                </Link>
                <a
                  href="https://vite.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Vite Docs
                </a>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  React Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} React Router Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="text-center">
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

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto">
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
    </div>
  );
}

export { Layout, Home };
