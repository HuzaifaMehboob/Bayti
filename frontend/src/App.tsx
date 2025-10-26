import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RentPage from "./pages/Rent/RentPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PropertyPage from "./pages/PropertyPage/PropertyPage";
import RealEstatePage from "./pages/RealEstatePage/RealEstatePage";
import AgentListingPage from "./pages/AgentListingPage/AgentListingPage";
import AgentProfile from "./pages/AgentProfile/AgentProfile";
import AdminPage from "./pages/admin/AdminPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/Login";
import AgentSignup from "./pages/auth/Signup/Signup";
// useEffect was previously imported but unused; removed to satisfy linter

const Layout = () => {
  const location = useLocation();

  // Define routes where you DON'T want Navbar & Footer
  const hideLayoutRoutes = ["/login", "/register", "/signup"];

  const shouldHideLayout = hideLayoutRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<AgentSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/real-estate-agents" element={<AgentListingPage />} />
        <Route path="/agent-profile" element={<AgentProfile />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
