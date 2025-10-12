import { useTranslation } from "react-i18next";

const Step5 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 w-[80%] mx-auto">
      {/* Heading */}
      <h2 className="text-xl font-semibold">{t("register.step5.heading")}</h2>

      {/* Textarea for notes */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium">{t("register.step5.notesLabel")}</label>
        <textarea
          placeholder={t("register.step5.notesPlaceholder")}
          rows={10}
          className="border rounded-lg p-3 w-full resize-none focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button className="bg-white text-[#CB1B1B] px-6 py-2 rounded-lg border border-[#CB1B1B] transition">
          {t("register.step5.previousButton")}
        </button>

        <button className="bg-[#CB1B1B] text-white px-6 py-2 rounded-lg transition">
          {t("register.step5.nextButton")}
        </button>
      </div>
    </div>
  );
};

export default Step5;
