import { useTranslation } from "react-i18next";

const Step2 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 w-[80%] mx-auto">
      {/* Heading */}
      <h2 className="text-xl font-semibold">{t("register.step2.heading")}</h2>

      {/* Two-column Grid (Deal Type & Property Type) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step2.dealTypeLabel")}</label>
          <input
            placeholder={t("register.step2.dealTypePlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step2.propertyTypeLabel")}</label>
          <input
            placeholder={t("register.step2.propertyTypePlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Two-column Grid (Deposit & Rent) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step2.depositLabel")}</label>
          <input
            placeholder={t("register.step2.depositPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step2.rentLabel")}</label>
          <input
            placeholder={t("register.step2.rentPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Convertible Toggle / Checkbox */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="convertible" className="w-4 h-4" />
        <label htmlFor="convertible" className="font-medium">
          {t("register.step2.convertibleLabel")}
        </label>
      </div>

      {/* Button row */}
      <div className="flex justify-end gap-3 mt-6">
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

export default Step2;
