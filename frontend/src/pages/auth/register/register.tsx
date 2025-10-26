// import registerImage from '../../../assets/register_image.png';
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
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);
  const error = false;
  // const [formData, setFormData] = useState({});
  const { i18n } = useTranslation();

  const nextStep = () => setStep((prev) => {
    const newStep = Math.min(prev + 1, 6);
    if (newStep === 6) {setSuccess(true)};
    return newStep;
  });

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [i18n.language, isArabic]);

  return (
    <div className="w-full h-full flex relative overflow-hidden">
      {/* Fixed Image Section */}
     

      {/* Scrollable Steps Section */}
      <div
        className={`flex flex-col flex-1 h-full overflow-y-auto px-6  items-center scrollbar-hide py-8 `}
      >
        <div className='w-full h-auto'>
        {!success && !error && <div className='w-full md:w-[80%] mx-auto'><StepProgressBar step={step} totalSteps={6} /></div>}
        { error ? (<RegisterError/>) : success ? ( <SuccessStep /> ) :
        (
        <>
        {step === 1 && <Step1 nextStep={nextStep} previousStep={prevStep}/>}
        {step === 2 && <Step2 nextStep={nextStep} previousStep={prevStep} />}
        {step === 3 && <Step3 nextStep={nextStep} previousStep={prevStep} />}
        {step === 4 && <Step4 nextStep={nextStep} previousStep={prevStep} />}
        {step === 5 && <Step5 nextStep={nextStep} previousStep={prevStep} />}
        {step === 6 && <Step6 nextStep={nextStep} previousStep={prevStep} />}
        </>)
}
        </div>
      </div>
    </div>
  );
};

export default Register;
