import React, { useEffect } from 'react';
import registerImage from '../../../assets/register_image.png';
import { useTranslation } from 'react-i18next';
import CustomerLogin from './CustomerLogin';
import CustomerOtp from './CustomerOtp';
import AgentLogin from './AgentLogin';

function Login() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [i18n.language, isArabic]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Desktop / md+ layout: side-by-side */}
      <div className="hidden md:flex h-full w-full">
        <div className="w-[40vw] h-full shrink-0">
          <img src={registerImage} alt="Register" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center flex-1">
          {/* <CustomerOtp/> */}
          <AgentLogin />
          {/* <CustomerLogin/> */}
          {/* <AgentLogin /> */}
        </div>
      </div>

      {/* Mobile layout: image full-screen with centered overlay */}
      <div className="md:hidden h-full w-full">
        <img src={registerImage} alt="Register" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-transparent rounded-2xl p-6 w-[90%] max-w-md">
            {/* <CustomerLogin /> */}
            <AgentLogin/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
