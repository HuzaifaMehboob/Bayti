import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import item1 from '../../assets/item1.png';
import item2 from '../../assets/item2.png';
import item3 from '../../assets/item3.png';

const PropertyListingSection = () => {
  const { t, i18n } = useTranslation();
  const images = [item1, item2, item3];

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const cards = t("consultantsSection.cards", { returnObjects: true }) as { title: string }[];

  return (
    <div className="w-[1200px] mx-auto mt-24">
      {/* Heading + Description */}
      <div className="max-w-fit text-center mx-auto mb-10">
        <h3 className="body-xlg">{t("consultantsSection.heading")}</h3>
        <p className="body-smd">{t("consultantsSection.description")}</p>
      </div>

      {/* Cards */}
      <div className="flex justify-between gap-6">
        {cards.map(
          (card: { title: string }, index: number) => (
            <div
              key={index}
              className={`max-w-[404px] border border-gray-200 h-[150px] px-4 flex items-center py-6 gap-[28px] bg-white rounded-xl shadow-sm ${i18n.language === "ar" ? "text-right" : "text-left"}`}
            >
              <img src={images[index]} alt={`card-${index}`} className="mb-3" />
              <p className="body-s">{card.title}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PropertyListingSection;
