import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../components/Input/Input';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  identifier: string;
};

const CustomerLogin: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [loginType, setLoginType] = React.useState<'email' | 'phone'>('email');

  const { register, handleSubmit, formState: { errors }, watch, trigger, resetField, setValue } = useForm<FormValues>({ mode: 'onBlur' });

  // Ensure RTL/LTR direction on language change
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // When loginType changes, clear identifier and revalidate
  useEffect(() => {
    // setValue('identifier', '');
    // trigger('identifier');
  }, [loginType, setValue, trigger]);

  const handleTypeChange = (type: 'email' | 'phone') => setLoginType(type);

  const onSubmit = (data: FormValues) => {
    const payload = {
      name: data.name.trim(),
      identifier: data.identifier.trim(),
      type: loginType,
    };
    console.log('submit', payload);
  };

  // Validation helpers
  const nameValidate = (v: string) => {
    const trimmed = (v ?? '').trim();
    if (!trimmed) return t('signup.errors.required');
    // Unicode letters + spaces only
    if (!/^[\p{L} ]+$/u.test(trimmed)) return t('signup.errors.invalid_name') || 'Invalid name';
    return true;
  };

  const identifierValidate = (v: string) => {
    const trimmed = (v ?? '').trim();
    if (!trimmed) return loginType === 'email' ? t('signup.errors.required_email') : t('signup.errors.required_phone');
    if (loginType === 'email') {
      return /\S+@\S+\.\S+/.test(trimmed) || t('signup.errors.invalid_email');
    }
    // phone
    return /^\+?[0-9]{7,15}$/.test(trimmed) || t('signup.errors.invalid_phone');
  };

  return (
    <div
      className={`w-full max-w-lg mx-auto flex flex-col items-center p-6 rounded-3xl md:rounded-none bg-white mt-10 ${
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
          type="button"
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
          type="button"
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

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center mt-6">
        {/* Name input */}
        <Input
          id="name"
          {...register('name', { validate: nameValidate })}
          placeholder={t('signup.first_name') || 'Name'}
          className="border border-gray-300 rounded-lg p-3 w-[90%] focus:ring-2 focus:ring-[#CB1B1B] outline-none transition mb-3"
          wrapperClassName="w-full flex justify-center"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message as string}</p>}

        {/* Identifier: email or phone */}
        <Input
          id="identifier"
          {...register('identifier', { validate: identifierValidate })}
          type={loginType === 'email' ? 'email' : 'tel'}
          placeholder={loginType === 'email' ? t('login.email_placeholder') : t('login.phone_placeholder')}
          className="border border-gray-300 rounded-lg p-3 w-[90%] focus:ring-2 focus:ring-[#CB1B1B] outline-none transition"
          wrapperClassName="w-full flex justify-center"
        />
        {errors.identifier && <p className="text-red-500 text-sm mt-2">{errors.identifier.message as string}</p>}

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
