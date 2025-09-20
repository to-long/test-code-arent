import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "my-record", icon: "memo.svg" },
    { name: "challenge", icon: "challenge.svg" },
    { name: "notification", icon: "info.svg" },
  ];

  return (
    <header className="w-ful bg-[#414141] shadow-sm">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex items-center max-w-[960px] bg-[#414141] mx-auto justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-[109px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="ml-auto mr-4 hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={`/${link.name === "ホーム" ? "" : link.name.toLowerCase()}`}
              >
                <a className="inline-flex min-w-[160px] hover:opacity-70 items-center gap-2 p-2">
                  <img
                    src={`/icons/${link.icon}`}
                    alt={link.name}
                    className="h-8 w-8 flex-shrink-0"
                  />
                  <span className="text-white text-base">{link.name}</span>
                </a>
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-500 hover:opacity-70"
          >
            <img
              src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt="Menu"
              className="h-8 w-8"
            />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={`/${
                    link.name === "ホーム" ? "" : link.name.toLowerCase()
                  }`}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src={`/icons/${link.icon}`}
                    alt={link.name}
                    className="h-5 w-5 mr-3"
                  />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
