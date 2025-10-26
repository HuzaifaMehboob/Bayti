import { useTranslation } from "react-i18next"
import SimpleMap from "../../components/SimpleMap/SimpleMap";

const ContactUsPage = () => {
    const {t} = useTranslation();
  return (

    <div className="w-[95%] xl:w-[1224px] mx-auto mt-40 mb-40 px-15">
        <h3 className="header-4">{t("contact-us-page.title")}</h3>
        <div className="w-full text-center mt-10">
            <h3 className="body-2xlg font-semibold text-[#871212]">{t("contact-us-page.contact_message")}</h3>
            <p className="body-lg text-[#717171]">{t("contact-us-page.contact_full")}</p>

            <p className="body-xs text-[#717171]">{t("contact-us-page.support")}</p>
            <button className="mt-2 bg-[#CB1B1B] text-white button-md px-26 py-2 rounded-md">{t("contact-us-page.phone")}</button>
        </div>
        {/* <div className="w-full md:w-[80%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto mt-10 gap-10">
            <div className="col-span-1 xl:col-span-2 body-xs text-[#353535] max-w-xl">
                {t("about-us-page.paragraph")}
            </div>
            <div className="col-span-1">
                <img src={image} className="w-full h-full object-contain" />
            </div>
        </div> */}
        <div className="h-80 relative w-full mt-20 bg-blue-200">
             <div className="absolute inset-0 z-0">
    <SimpleMap />
  </div>
            <div className="absolute inset-0 flex z-100 justify-center items-center h-50 my-auto">
          {/* White Card */}
          <div className="bg-white shadow-lg rounded-r-2xl p-6 w-60 h-full flex flex-col justify-center text-center">
            <h4 className=" text-[#353535] !font-semibold body-xs">
              {t("contact-us-page-cards.office_title")}
            </h4>
            <p className="body-xxs text-[#717171] mt-2">
              {t("contact-us-page-cards.address")}
            </p>
          </div>

          {/* Red Card */}
          <div className="bg-[#CB1B1B] shadow-lg rounded-l-2xl p-6 w-60 h-full flex items-center justify-center text-center text-white">
            <h4 className="bpdy-xs !font-bold"> 
              {t("contact-us-page-cards.google_map")}
            </h4>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ContactUsPage