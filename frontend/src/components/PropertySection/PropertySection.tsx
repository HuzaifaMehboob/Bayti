import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import property1 from "../../assets/property1.png";
import property2 from "../../assets/property2.png";
import property3 from "../../assets/property3.png";
import property4 from "../../assets/property4.png";

const PropertySection = () => {
  const { t, i18n } = useTranslation();

  const images = [property1, property2, property3, property4];

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const numbers = t("propertySection.stats.numbers", {
    returnObjects: true,
  }) as string[];
  const types = t("propertySection.stats.types", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="w-[90%] xl:w-[1224px] mx-auto mt-20">
      <h3 className="heading-3">{t("propertySection.question")}</h3>

      {/* ✅ Mobile: Horizontal Scroll with Snap (2 cards per view) */}
      <div
        className={`flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory mt-6 ${
          i18n.language === "ar" ? "flex-row-reverse" : ""
        }`}
      >
        {numbers.map((num, idx) => (
          <div
            key={idx}
            className="min-w-[calc(50%-0.5rem)] h-[214px] flex flex-col overflow-hidden rounded-lg border-2 border-gray-200 items-center snap-start"
          >
            <div className="h-[145px]">
              <img src={images[idx]} alt="images" className="object-contain" />
            </div>
            <span className="body-reg14 mt-2 text-gray-700">{types[idx]}</span>
            <span className="ht-bold16 mt-1 text-[#CB1B1B]">
              {num}
            </span>
          </div>
        ))}
      </div>

      {/* ✅ Desktop: Normal Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6 text-center">
        {numbers.map((num, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-lg border-2 border-gray-200 items-center"
          >
            <div className="h-auto lg:h-[180px] xl:h-[240px]">
              <img src={images[idx]} alt="images" className="object-contain" />
            </div>
            <span className="text-2xl mt-2 text-gray-700">{types[idx]}</span>
            <span className="text-lg font-bold mb-3 mt-1 text-[#CB1B1B]">
              {num}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySection;
