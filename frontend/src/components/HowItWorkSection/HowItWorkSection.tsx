import { useTranslation } from "react-i18next";
import image1 from '../../assets/illustration1.png';
import image2 from '../../assets/Illustration2.svg';
import image3 from '../../assets/illustration3.png';

const HowItWorks = () => {
  const { t, i18n } = useTranslation();

  const images = [image1, image2, image3];

  const cards = t("howItWorks.cards", { returnObjects: true }) as {
    heading: string;
    paragraph: string;
    button: string;
  }[];

  return (
    <section className="w-[90%] xl:w-[1224px] mx-auto my-16">
      <h2 className="heading-3 mb-10">{t("howItWorks.title")}</h2>

      {/* ✅ Mobile: Full-Width Snap Carousel */}
      <div
        className={`flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory ${
          i18n.language === "ar" ? "flex-row-reverse" : ""
        }`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-[90vw]  p-8 h-[480px] rounded-2xl shadow-md flex-shrink-0 flex flex-col space-y-6 border-2 text-center border-gray-200 items-center hover:shadow-lg transition snap-center"
          >
            <div className="w-[280px] h-[145px] flex items-center justify-center">
              <img src={images[index]} className="object-contain" />
            </div>
            <div className="h-[190px] space-y-3">
              <h3 className="heading-5">{card.heading}</h3>
              <p className="body-reg14">{card.paragraph}</p>
            </div>
            <button className="h-[40px] rounded-xl bg-[#CB1B1B] w-full button-md text-white transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Desktop: Keep Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-8 h-[480px] rounded-2xl shadow-md flex flex-col space-y-6 border-2 text-center border-gray-200 items-center hover:shadow-lg transition"
          >
            <div className="w-[280px] h-[145px] flex items-center justify-center">
              <img src={images[index]} className="object-contain" />
            </div>
            <div className="h-[190px] space-y-3">
              <h3 className="heading-5">{card.heading}</h3>
              <p className="body-reg14">{card.paragraph}</p>
            </div>
            <button className="h-[40px] rounded-xl bg-[#CB1B1B] w-full button-md text-white transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
