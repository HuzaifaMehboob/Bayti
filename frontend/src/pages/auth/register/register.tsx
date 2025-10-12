import registerImage from '../../../assets/register_image.png';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import RegisterError from './RegsiterError';
import SuccessStep from './SuccessStep';
import StepProgressBar from '../../../components/StepProgressBar/StepProgressBar';

const Register = () => {
  const [step, setStep] = useState(6);
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({});
  const { i18n, t } = useTranslation();

  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [i18n.language, isArabic]);

  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      {/* Fixed Image Section */}
      <div
        className={`hidden md:block fixed top-0 ${
          isArabic ? 'right-0' : 'left-0'
        } w-[30vw] h-screen`}
      >
        <img
          src={registerImage}
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrollable Steps Section */}
      <div
        className={`flex flex-col flex-1 h-screen overflow-y-auto px-6  items-center scrollbar-hide py-8 ${
          isArabic ? 'md:mr-[30vw]' : 'md:ml-[30vw]'
        }`}
      >
        <div className='w-full h-auto'>
        {!success && !error && <div className='w-[80%] mx-auto'><StepProgressBar step={step} totalSteps={6} /></div>}
        { error ? (<RegisterError/>) : success ? ( <SuccessStep /> ) :
        (
        <>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {step === 6 && <Step6 />}
        </>)
}
        </div>
      </div>
    </div>
  );
};

export default Register;
