import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import property1 from "../../assets/news1.png";
import property2 from "../../assets/property2.png";
import property3 from "../../assets/new2.png";
import property4 from "../../assets/new3.png";

const NewsSection = () => {
  const { t, i18n } = useTranslation();

  const images = [property1, property2, property3, property4];

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const cards = t("newsSection.cards", { returnObjects: true }) as {
    title: string;
  }[];

  return (
    <div className="w-[90%] xl:w-[1224px] mx-auto mt-20">
      <h3 className="heading-3">{t("newsSection.heading")}</h3>

      {/* ✅ Mobile: Show 2 cards at a time, scroll by 1 card */}
      <div
        className={`flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory mt-6 scroll-smooth ${
          i18n.language === "ar" ? "flex-row-reverse" : ""
        }`}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[calc(50%-0.5rem)] snap-start flex flex-col overflow-hidden rounded-lg border-2 border-gray-200"
          >
            <div className="w-full h-[160px]">
              <img
                src={images[idx]}
                alt="news"
                className="object-cover w-full h-full"
              />
            </div>
            <span
              className={`news-text px-3 pb-2 mt-2 text-[#505050] ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {card.title}
            </span>
          </div>
        ))}
      </div>

      {/* ✅ Desktop: Normal Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6 text-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-lg border-2 border-gray-200 items-center"
          >
            <div className="h-full w-full md:h-[180px] lg:h-[240px]">
              <img
                src={images[idx]}
                alt="news"
                className="object-fill w-full md:object-contain"
              />
            </div>
            <span
              className={`news-text px-3 pb-2 mt-2 text-[#505050] ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {card.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
