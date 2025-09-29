import { useTranslation } from 'react-i18next';
import logo from '../assets/Logo (1).png';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useEffect } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const changeLanguage = (lng: 'en' | 'ar') => {
    i18n.changeLanguage(lng);
    setLangOpen(false); 
  };

  return (
    <nav className="mx-auto flex items-center justify-between mt-12 w-[90%] h-[80px] bg-gray-100 px-10 rounded-2xl shadow-sm">
      {/* Logo + Middle Links */}
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />
       <div
        className={`flex gap-8 items-center ${
          i18n.language === 'ar' ? 'mr-10' : 'ml-10'
        }`}
        >
          {t('navbar.li', { returnObjects: true }).map((item: string, index: number) => (
            <a
              key={index}
              href={`/${i18n.language}/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="menu_items text-gray-800 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <div className="relative">
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
            <div className="absolute menu_items right-0 mt-2 w-full bg-white rounded-xl shadow-md overflow-hidden z-10">
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

        {/* Login + Post Ad */}
        {t('navbar.end', { returnObjects: true }).map((item: string, index: number) => {
          const isPostAd = index === 1;
          return (
            <a
              key={`end-${index}`}
              href={`/${i18n.language}/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`menu_items flex items-center justify-center px-6 h-10 rounded-xl border transition
                ${
                  isPostAd
                    ? 'border-[2px] border-orange-500 hover:bg-orange-50 !text-orange-900 font-medium'
                    : 'border border-black hover:bg-gray-200'
                }`}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
