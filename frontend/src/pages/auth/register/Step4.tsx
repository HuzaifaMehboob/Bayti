import { useTranslation } from "react-i18next";

const Step4 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 w-[80%] mx-auto">
      {/* Heading */}
      <h2 className="text-xl font-semibold">{t("register.step4.heading")}</h2>

      {/* Row 1: Parking & Bathroom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step4.parkingLabel")}</label>
          <input
            placeholder={t("register.step4.parkingPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step4.bathroomLabel")}</label>
          <input
            placeholder={t("register.step4.bathroomPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Row 2: Storage & Bathroom Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step4.storageLabel")}</label>
          <input
            placeholder={t("register.step4.storagePlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step4.bathroomTypeLabel")}</label>
          <input
            placeholder={t("register.step4.bathroomTypePlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Row 3: Elevator & Cooling System */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step4.elevatorLabel")}</label>
          <input
            placeholder={t("register.step4.elevatorPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step4.coolingSystemLabel")}</label>
          <input
            placeholder={t("register.step4.coolingSystemPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Row 4: Floor Material & Heating System */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step4.floorMaterialLabel")}</label>
          <input
            placeholder={t("register.step4.floorMaterialPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">{t("register.step4.heatingSystemLabel")}</label>
          <input
            placeholder={t("register.step4.heatingSystemPlaceholder")}
            value={""}
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button className="bg-white text-[#CB1B1B] px-6 py-2 rounded-lg border border-[#CB1B1B] transition">
          {t("register.step4.previousButton")}
        </button>

        <button className="bg-[#CB1B1B] text-white px-6 py-2 rounded-lg transition">
          {t("register.step4.nextButton")}
        </button>
      </div>
    </div>
  );
};

export default Step4;
