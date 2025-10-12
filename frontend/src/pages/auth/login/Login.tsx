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
    <div
      className={`flex h-screen overflow-hidden `}
    >
      {/* Left/Right Image Section */}
      <div className="w-[40vw] h-full shrink-0">
        <img
          src={registerImage}
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center flex-1">
       {/* <CustomerLogin/> */}
       {/* <CustomerOtp />   */}
       <AgentLogin />
      </div>
    </div>
  );
}

export default Login;
