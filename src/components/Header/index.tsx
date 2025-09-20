import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopLinks = [
    { name: "自分の記録", icon: "memo.svg", link: "/my-record" },
    { name: "チャレンジ", icon: "challenge.svg", link: "/challenge" },
    {
      name: "お知らせ",
      icon: "info.svg",
      link: "/notification",
      notification: 1,
    },
  ];

  const mobileLinks = [
    { name: "自分の記録", link: "/my-record" },
    { name: "体重グラフ", link: "/weight-graph" },
    { name: "目標", link: "/goal" },
    { name: "選択中のコース", link: "/course" },
    { name: "コラム一覧", link: "/column" },
    { name: "設定", link: "/setting" },
  ];

  return (
    <header className="w-ful bg-[#414141] shadow-sm sticky top-0 z-10">
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
            {desktopLinks.map((link, index) => (
              <Link key={index} to={link.link}>
                <a
                  href={link.link}
                  className="inline-flex min-w-[160px] hover:opacity-70 items-center gap-2 p-2"
                >
                  <div className="h-8 w-8 flex-shrink-0 relative">
                    <img src={`/icons/${link.icon}`} alt={link.name} />
                    {link.notification && (
                      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                        <span className="text-white text-xs text-[10px]">
                          {link.notification}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-white text-base">{link.name}</span>
                </a>
              </Link>
            ))}
          </nav>

          <div className="p2 relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" text-gray-500 hover:opacity-70"
              type="button"
            >
              <img
                src={isMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                alt="Menu"
                className="h-8 w-8"
              />
            </button>
            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="absolute top-[50px] right-0 min-w-[280px] bg-(--color-gray-400)">
                {mobileLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    className="flex items-center font-medium text-white py-8 px-6"
                    style={{
                      borderBottom: "1px solid #2E2E2E",
                      borderTop: "1px solid #8b8b8b",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-white text-base">{link.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
