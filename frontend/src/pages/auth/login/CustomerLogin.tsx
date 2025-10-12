import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CustomerLogin = () => {
  const { t, i18n } = useTranslation();
  const [loginType, setLoginType] = useState('email');
  const [inputValue, setInputValue] = useState('');

  // Ensure RTL/LTR direction on language change
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const handleTypeChange = (type) => {
    setLoginType(type);
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${loginType}:`, inputValue);
  };

  return (
    <div
      className={`w-full max-w-lg mx-auto flex flex-col items-center p-6 bg-white mt-10 ${
        i18n.language === 'ar' ? 'text-right' : 'text-left'
      }`}
    >
      <h3 className="text-2xl font-semibold text-gray-800">{t('login.title')}</h3>
      <p className="text-gray-600 mt-2">{t('login.welcome')}</p>
      <p className="text-sm text-gray-500 mt-1">{t('login.instruction')}</p>

      {/* Language-aware button order */}
      <div
        className={`flex justify-center gap-4 mt-6 ${
          i18n.language === 'ar' ? 'flex-row-reverse' : ''
        }`}
      >
        <button
          onClick={() => handleTypeChange('email')}
          className={`px-4 py-2 rounded-lg border transition ${
            loginType === 'email'
              ? 'bg-[#CB1B1B] text-white border-[#CB1B1B]'
              : 'bg-gray-100 text-gray-700 border-gray-300'
          }`}
        >
          {t('login.email_placeholder')}
        </button>
        <button
          onClick={() => handleTypeChange('phone')}
          className={`px-4 py-2 rounded-lg border transition ${
            loginType === 'phone'
              ? 'bg-[#CB1B1B] text-white border-[#CB1B1B]'
              : 'bg-gray-100 text-gray-700 border-gray-300'
          }`}
        >
          {t('login.phone_placeholder')}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center mt-6">
        <input
          type={loginType === 'email' ? 'email' : 'tel'}
          placeholder={
            loginType === 'email'
              ? t('login.email_placeholder')
              : t('login.phone_placeholder')
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-[90%] focus:ring-2 focus:ring-[#CB1B1B] outline-none transition"
          style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}
        />

        <label
          className={`text-sm text-gray-500 mt-3 flex items-center gap-2 `}
        >
          <input type="checkbox" className="accent-[#CB1B1B]" />
          {t('login.agree_terms')}
        </label>

        <button
          type="submit"
          className="bg-[#CB1B1B] text-white px-6 py-2 rounded-lg transition mt-5 hover:bg-red-600 w-[90%]"
        >
          {t('login.send_otp')}
        </button>
      </form>
    </div>
  );
};

export default CustomerLogin;
