import { useTranslation } from "react-i18next";

const Step1 = ({ nextStep, previousStep }: { nextStep: () => void; previousStep: () => void; }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 w-[80%] mx-auto">
      {/* Heading */}
      <h2 className="text-xl font-semibold">{t("register.step1.heading")}</h2>

      {/* Two-column Grid (City & Area) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step1.cityLabel")}</label>
          <input
            placeholder={t("register.step1.cityPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step1.areaLabel")}</label>
          <input
            placeholder={t("register.step1.areaPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Two-column Grid (Main Street & Side Street) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step1.mainStreetLabel")}</label>
          <input
            placeholder={t("register.step1.mainStreetPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step1.sideStreetLabel")}</label>
          <input
            placeholder={t("register.step1.sideStreetPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Button row */}
      <div className="flex justify-end gap-3 mt-6">
        <button type="button" className="bg-white text-[#CB1B1B] px-6 py-2 rounded-lg border border-[#CB1B1B] transition" onClick={previousStep}>
          {t("register.step1.previousButton")}
        </button>
        <button type="button" className="bg-[#CB1B1B] text-white px-6 py-2 rounded-lg transition" onClick={nextStep}>
          {t("register.step1.nextButton")}
        </button>
      </div>
    </div>
  );
};

export default Step1;
