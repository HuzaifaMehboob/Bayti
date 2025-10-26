import { useTranslation } from "react-i18next";

const Step3 = ({ nextStep, previousStep }: { nextStep: () => void; previousStep: () => void; }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 w-[80%] mx-auto">
      {/* Heading */}
      <h2 className="text-xl font-semibold">{t("register.step3.heading")}</h2>

      {/* Two-column Grid (Area & Rooms) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step3.areaLabel")}</label>
          <input
            placeholder={t("register.step3.areaPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step3.roomsLabel")}</label>
          <input
            placeholder={t("register.step3.roomsPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Two-column Grid (Floor & Total Floors) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step3.floorLabel")}</label>
          <input
            placeholder={t("register.step3.floorPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step3.totalFloorsLabel")}</label>
          <input
            placeholder={t("register.step3.totalFloorsPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Button row */}
      <div className="flex justify-end gap-3 mt-6">
        <button type="button" onClick={previousStep} className="bg-white text-[#CB1B1B] px-6 py-2 rounded-lg border border-[#CB1B1B] transition">
          {t("register.step3.previousButton")}
        </button>
        <button type="button" onClick={nextStep} className="bg-[#CB1B1B] text-white px-6 py-2 rounded-lg transition">
          {t("register.step3.nextButton")}
        </button>
      </div>
    </div>
  );
};

export default Step3;
