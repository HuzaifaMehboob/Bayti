import { useTranslation } from 'react-i18next';
import logo from '../../assets/Logo (1).png';
import { useState, useEffect } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { CgProfile } from "react-icons/cg";
import { MdOutlineNewspaper, MdOutlineBusiness, MdOutlineHouse, MdShoppingCart, MdKey } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState(false);
  const userName = "پویا موحد";

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const changeLanguage = (lng: 'en' | 'ar') => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const endItems = t('navbar.end', { returnObjects: true });
  const liItems = t('navbar.li', { returnObjects: true });

  const liIcons = [
    <MdOutlineNewspaper size={18} />,
    <MdOutlineBusiness size={18} />,
    <MdOutlineHouse size={18} />,
    <MdShoppingCart size={18} />,
    <MdKey size={18} />,
  ];

  return (
    <nav className="absolute top-0 md:top-6 left-1/2 -translate-x-1/2 flex items-center justify-between max-w-[1220px] w-full md:w-[90%] h-[80px] bg-gray-100 px-4 md:px-10 md:rounded-2xl shadow-sm z-50">
      {/* Left Section */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />

        {/* Desktop Links */}
        <div
          className={`hidden lg:flex gap-8 items-center ${
            i18n.language === 'ar' ? 'mr-10' : 'ml-10'
          }`}
        >
          {liItems.map((item: string, index: number) => (
            <a
              key={index}
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="menu_items text-gray-800 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 rounded-lg border border-gray-400 hover:bg-gray-200 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* Desktop Buttons (hide logout here, move to dropdown) */}
        {!user && (
          <div className="hidden xl:flex items-center gap-4">
            <button
              onClick={() => setUser(true)}
              className="menu_items flex items-center justify-center px-6 h-10 rounded-xl border border-black hover:bg-gray-200 transition"
            >
              {endItems[0]} {/* Login */}
            </button>
            <a
              href={`/${i18n.language}/${endItems[1].toLowerCase().replace(/\s+/g, '-')}`}
              className="menu_items flex items-center justify-center px-6 h-10 rounded-xl border-[2px] border-orange-500 hover:bg-orange-50 !text-orange-900 font-medium transition"
            >
              {endItems[1]} {/* Post Ad */}
            </a>
          </div>
        )}

        {/* Language Dropdown */}
        <div className="relative z-100">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="menu_items flex items-center justify-center gap-2 px-6 h-10 rounded-xl border border-gray-400 hover:bg-gray-200 transition"
          >
            {i18n.language.toUpperCase()}
            <FiChevronDown
              className={`text-gray-700 transition-transform duration-200 ${
                langOpen ? 'rotate-180' : ''
              }`}
              size={18}
            />
          </button>
          {langOpen && (
            <div
              className={`absolute menu_items ${
                i18n.language === 'ar' ? 'left-0' : 'right-0'
              } mt-2 w-full bg-white rounded-xl shadow-md overflow-hidden z-10`}
            >
              <button
                onClick={() => changeLanguage('en')}
                className={`block w-full text-center px-2 py-2 menu_items hover:bg-gray-100 transition ${
                  i18n.language === 'en' ? 'bg-gray-200 font-semibold' : ''
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('ar')}
                className={`block w-full text-center px-2 py-2 menu_items hover:bg-gray-100 transition ${
                  i18n.language === 'ar' ? 'bg-gray-200 font-semibold' : ''
                }`}
              >
                AR
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dropdown (Mobile) */}
      {menuOpen && (
        <div
          className={`absolute top-full mt-3 ${
            i18n.language === 'ar' ? 'left-0' : 'right-0'
          } w-full bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 z-20`}
        >
          {/* Show user profile if logged in */}
          {user && (
            <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50">
              <CgProfile size={24} />
              <span className="menu_items">{userName}</span>
            </div>
          )}

          {/* Main Links */}
          {liItems.map((item: string, index: number) => (
            <div key={index} className="flex items-center justify-between">
              <a
                href={`/${i18n.language}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="menu_items flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition"
                onClick={() => setMenuOpen(false)}
              >
                {liIcons[index]} <span>{item}</span>
              </a>
              {i18n.language === "ar" ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
            </div>
          ))}

          {/* Auth Buttons inside dropdown */}
          {!user ? (
            <>
              <button
                onClick={() => {
                  setUser(true);
                  setMenuOpen(false);
                }}
                className="menu_items max-w-fit flex items-center justify-center px-6 h-10 rounded-xl border border-black hover:bg-gray-200 transition"
              >
                {endItems[0]} {/* Login */}
              </button>
              <a
                href={`/${i18n.language}/${endItems[1].toLowerCase().replace(/\s+/g, '-')}`}
                className="menu_items max-w-fit flex items-center justify-center px-6 h-10 rounded-xl border-[2px] border-orange-500 hover:bg-orange-50 !text-orange-900 font-medium transition"
              >
                {endItems[1]} {/* Post Ad */}
              </a>
            </>
          ) : (
            <button
              onClick={() => {
                setUser(false);
                setMenuOpen(false);
              }}
              className="menu_items max-w-fit flex items-center justify-center px-6 h-10 rounded-xl border-[2px] border-orange-500 hover:bg-orange-50 !text-orange-900 font-medium transition"
            >
              {endItems[2]} {/* Logout */}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
