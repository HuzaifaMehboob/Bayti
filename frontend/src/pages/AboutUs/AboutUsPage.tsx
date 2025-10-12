import { useTranslation } from "react-i18next"
import image from '../../assets/aboutpageImage.png';

const AboutUsPage = () => {
    const {t, i18n} = useTranslation();
  return (
    <div className="w-[90%] xl:w-[1224px] mx-auto mt-40 mb-40 px-6">
        <h3 className="header-4">{t("about-us-page.heading")}</h3>
        <div className="w-full text-center mt-10">
            <h3 className="body-2xlg font-semibold text-[#871212]">{t("about-us-page.subheading")}</h3>
            <p className="body-lg text-[#717171]">{t("about-us-page.tagline")}</p>
        </div>
        <div className="w-full md:w-[80%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto mt-10 gap-10">
            <div className="col-span-1 xl:col-span-2 body-xs text-[#353535] max-w-xl">
                {t("about-us-page.paragraph")}
            </div>
            <div className="col-span-1">
                <img src={image} className="w-full h-full object-contain" />
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage