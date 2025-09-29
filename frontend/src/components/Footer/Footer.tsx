import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import logo from '../../assets/Logo (1).png';
import footer_img from '../../assets/footer_img.png'


const Footer = () => {
  const { t, i18n } = useTranslation();
  const firstGrid = t("footer.grids", { returnObjects: true });

  // Only 3 icons for the last grid's first 3 items
  const images = [
    <FaPhone className="text-red-500" size={18} />,
    <AiFillInstagram className="text-red-500" size={18}/>,
    <FaTelegram className="text-red-500" size={18} />,
  ];

   const experience = t("footer.experience", { returnObjects: true });
   const cards = t("footer.cards", {returnObjects: true});

  // First line
  const firstLine = experience[0];

  // Remaining lines
  const remainingLines = experience.slice(1);

  return (
    <div className="w-full bg-gray-100 pt-10 h-auto xl:h-[778px] mt-20">
      <div className={`w-[90%] xl:w-[1220px] mx-auto border-b-gray-200 border-b-2 pb-6 ${i18n.language === "ar" ? "pr-6" : "pl-6"}`}>
        <div className=" max-w-fit mx-auto">
          <h3 className="heading-3">{t("footer.heading")}</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
          {firstGrid.map((grid, gridIndex) => (
            <div key={gridIndex} className="gap-1 flex flex-col">
              <h6 className="body-xxs !font-semibold">{grid.title}</h6>
              {grid.items.map((item, itemIndex) => {
                const isLastGrid = gridIndex === firstGrid.length - 1;

                if (isLastGrid && itemIndex < images.length) {
                  return (
                    <div key={itemIndex} className="flex gap-2 items-center">
                      {images[itemIndex]}
                      <p className="caption-md text-[#717171]">{item}</p>
                    </div>
                  );
                }

                return (
                  <p key={itemIndex} className="caption-md text-[#717171]">
                    {item}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
      </div>

     <div className="w-[90%] xl:w-[1220px] mx-auto pt-8">
  <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ${i18n.language === "ar" ? "pr-6" : "pl-6"}`}>
    {/* Column 1: Image + Experience */}
    <div className="space-y-1">
      <img src={logo} alt="logo" className="w-[187px] mb-4" />
      <p className="body-xs !font-semibold">{firstLine}</p>
      <div>
        {remainingLines.map((ele, index) => (
          <p key={index} className="caption-md text-[#353535]">{ele}</p>
        ))}
      </div>
    </div>

    {/* Columns 2-4: Cards */}
    {cards?.map((card, index) => (
      <div key={index}>
        <p className="caption-lg">{card?.title}</p>
        <div className="gap-1">
          {card?.items.map((ele, i) => (
            <p key={i} className="caption-md text-[#717171]">{ele}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
 
        <img src={footer_img} alt="footer image" className="mx-auto mt-12" />
        <p className="mt-5 text-center caption-md text-[#909090]">{t('footer.footerCopyright')}</p>

 
    </div>
  );
};

export default Footer;
