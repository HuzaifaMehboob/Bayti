import { useTranslation } from "react-i18next";
import registerErrorImage from '../../../assets/register_error_image.png';
const RegisterError = () => {
  const { t } = useTranslation();

  return (
    <div className="max-h-screen overflow-y-hidden flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">
        {t("register.error.heading")}
      </h2>
      <p className="text-gray-700 mb-8 max-w-md">
        {t("register.error.description")}
      </p>
      <button
        onClick={() => window.history.back()}
        className="border border-black text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition"
      >
        {t("register.error.backButton")}
      </button>

      <img src={registerErrorImage} alt="Error Illustration" className="mt-10 md:w-[300px] md:h-[220px] xl:w-[381px] xl:h-[250px] object-contain" />  
    </div>
  );
};

export default RegisterError;
