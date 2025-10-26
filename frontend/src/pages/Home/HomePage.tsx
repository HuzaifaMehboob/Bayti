import ConsultantSection from "../../components/ConsultantSection/ConsultantSection"
import UserLogin from "../../components/dialogs/UserLogin"
import Footer from "../../components/Footer/Footer"
import HeroSection from "../../components/HeroSection/HeroSection"
import HowItWorks from "../../components/HowItWorkSection/HowItWorkSection"
import Navbar from "../../components/Navbar/Navbar"
import NewsSection from "../../components/NewsSection/NewsSection"
import PropertySection from "../../components/PropertySection/PropertySection"
import PropertyTypeSection from "../../components/PropertyTypeSection/PropertyTypeSection"
import { useEffect } from "react";
import { useState } from "react";
  
const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
     <div className="bg-white text-3xl text-black">
       {/* <Navbar/> */}
       <HeroSection/>
       <HowItWorks/>
       <PropertySection/>
       <ConsultantSection/>
       <PropertyTypeSection/>
       <NewsSection/>
         {showLogin && <UserLogin onClose={() => setShowLogin(false)} />}
       {/* <Footer/> */}
    </div>
  )
}

export default HomePage