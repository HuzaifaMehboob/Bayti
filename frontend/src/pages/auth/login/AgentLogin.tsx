import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../components/Input/Input';
import { useForm } from 'react-hook-form';
const AgentLogin = () => {
  const { t, i18n } = useTranslation();
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');

  type FormValues = {
    password: string;
    identifier: string;
  };

  const { register, handleSubmit } = useForm<FormValues>({ mode: 'onBlur' });

  // Ensure RTL/LTR direction on language change
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const handleTypeChange = (type: 'email' | 'phone') => {
    setLoginType(type);
  };

  const onSubmit = (data: FormValues) => {
    const payload = {
      identifier: data.identifier.trim(),
      password: data.password,
      type: loginType,
    };
    console.log('submit', payload);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(`${loginType}:`, inputValue);
  // };

  return (
    <div
      className={`w-full max-w-lg mx-auto flex flex-col items-center rounded-2xl md:rounded-none p-6 bg-white mt-10 ${i18n.language === 'ar' ? 'text-right' : 'text-left'
        }`}
    >
      <h3 className="header-6 text-gray-800">{t('login.title')}</h3>
      <p className="text-gray-600 body-md !font-semibold mt-2">{t('login.welcome')}</p>
      <p className="text-sm text-gray-500 body-xs text-center mt-1">{t('login.instruction')}</p>

      {/* Language-aware button order */}
      <div
        className={`flex justify-center gap-4 mt-6 ${i18n.language === 'ar' ? 'flex-row-reverse' : ''
          }`}
      >
        <button
          onClick={() => handleTypeChange('email')}
          className={`px-3 md:px-4 button-md py-1 md:py-2 rounded-lg border transition ${loginType === 'email'
              ? 'bg-[#CB1B1B] text-white border-[#CB1B1B]'
              : 'bg-gray-100 text-gray-700 border-gray-300'
            }`}
        >
          {t('login.email_placeholder')}
        </button>
        <button
          onClick={() => handleTypeChange('phone')}
          className={`px-2 md:px-4 py-1 md:py-2 button-md rounded-lg border transition ${loginType === 'phone'
              ? 'bg-[#CB1B1B] text-white border-[#CB1B1B]'
              : 'bg-gray-100 text-gray-700 border-gray-300'
            }`}
        >
          {t('login.phone_placeholder')}
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto flex flex-col items-center mt-6 ">

        <Input
        id="identifier"
        type={loginType === 'email' ? 'email' : 'tel'}
        placeholder={loginType === 'email' ? t('login.email_placeholder') : t('login.phone_placeholder')}
        {...register('identifier', {
          required: t('signup.errors.required') as string,
          pattern: loginType === 'email'
            ? {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t('signup.errors.invalid_email') as string,
              }
            : {
                value: /^\+?[1-9]\d{1,14}$/,
                message: t('signup.errors.invalid_phone') as string,
              },
        })}
        className="border mb-4 md:mb-6 border-gray-300 rounded-lg p-2 md:p-3 w-[90%] focus:ring-2 focus:ring-[#CB1B1B] outline-none transition"
        style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}

        />
        <Input
          type={'password'}
          placeholder={t('login.password_placeholder')}
          {...register('password', {
            required: t('signup.errors.required') as string,
            minLength: { value: 6, message: t('signup.errors.min_length') as string },
          })}
          //   onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 md:p-3 w-[90%] focus:ring-2 focus:ring-[#CB1B1B] outline-none transition"
          style={{ direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}
        />


        <label
          className={`body-xs text-gray-500 mt-2 flex items-center gap-2 `}
        >
          <input type="checkbox" className="accent-[#CB1B1B]" />
          {t('login.agree_terms')}
        </label>

        <button
          type="submit"
          className="bg-[#CB1B1B] button-md text-white px-6 py-1 md:py-2 rounded-lg transition mt-5 hover:bg-red-600 w-[90%]"
        >
          {t('login.send_otp')}
        </button>
      </form>
    </div>
  );
};

export default AgentLogin;
