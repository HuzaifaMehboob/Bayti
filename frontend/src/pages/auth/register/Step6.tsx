import { useTranslation } from "react-i18next";
import { FiUploadCloud } from "react-icons/fi";

const Step6 = () => {
  const { t } = useTranslation();

  // In a real app, you would manage uploaded files via state
  const imageSlots = Array(6).fill(null); // 3x3 grid

  return (
    <div className="space-y-8 w-[80%] mx-auto">
      {/* Heading */}
      <div>
        <h2 className="text-xl font-semibold">{t("register.step6.heading")}</h2>
        <p className="text-gray-600 mt-2">{t("register.step6.subHeading")}</p>
      </div>

      {/* Image format note */}
      <p className="text-sm text-gray-500">{t("register.step6.imageFormatNote")}</p>

      {/* Image upload grid */}
      <div className="grid grid-cols-3 gap-4">
        {imageSlots.map((_, index) => (
          <div
            key={index}
            className="border border-gray-400 border-dashed rounded-lg flex items-center justify-center h-32 cursor-pointer hover:bg-gray-50 transition"
          >
            <FiUploadCloud className="text-3xl text-gray-400" />
          </div>
        ))}
      </div>

      {/* Video upload note */}
      <div className="space-y-2 mt-6">
        <p className="text-sm text-gray-500">{t("register.step6.videoFormatNote")}</p>
        <p className="text-sm text-gray-500">{t("register.step6.videoWarning")}</p>
      </div>

      {/* Video upload button */}
      <div>
        <button className="border border-black text-black px-6 py-2 rounded-lg transition hover:bg-gray-100">
          {t("register.step6.selectVideoButton")}
        </button>
      </div>

      {/* Buttons row */}
      <div className="flex justify-end gap-3 mt-8">
        <button className="bg-white text-[#CB1B1B] px-6 py-2 rounded-lg border border-[#CB1B1B] transition">
          {t("register.step1.previousButton")}
        </button>
        <button className="bg-[#CB1B1B] text-white px-6 py-2 rounded-lg transition">
          {t("register.step1.nextButton")}
        </button>
      </div>
    </div>
  );
};

export default Step6;
