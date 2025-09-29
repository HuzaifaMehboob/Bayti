import ConsultantSection from "../../components/ConsultantSection/ConsultantSection"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/HeroSection/HeroSection"
import HowItWorks from "../../components/HowItWorkSection/HowItWorkSection"
import Navbar from "../../components/Navbar/Navbar"
import NewsSection from "../../components/NewsSection/NewsSection"
import PropertySection from "../../components/PropertySection/PropertySection"
import PropertyTypeSection from "../../components/PropertyTypeSection/PropertyTypeSection"


const HomePage = () => {
  return (
     <div className="bg-white text-3xl text-black">
       {/* <Navbar/> */}
       <HeroSection/>
       <HowItWorks/>
       <PropertySection/>
       <ConsultantSection/>
       <PropertyTypeSection/>
       <NewsSection/>
       {/* <Footer/> */}
    </div>
  )
}

export default HomePage