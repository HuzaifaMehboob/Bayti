import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import RentPage from "./pages/Rent/RentPage"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import PropertyPage from "./pages/PropertyPage/PropertyPage"
import RealEstatePage from "./pages/RealEstatePage/RealEstatePage"
import AgentListingPage from "./pages/AgentListingPage/AgentListingPage"
import AgentProfile from "./pages/AgentProfile/AgentProfile"
import AdminPage from "./pages/admin/AdminPage"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rent" element={<RentPage/>} />
            <Route path="/property" element={<PropertyPage/>} />
            <Route path="/real-estate" element={<RealEstatePage/>} />
            <Route path="/real-estate-agents" element={<AgentListingPage/>} />
            <Route path= "/agent-profile" element={<AgentProfile/>} />
            <Route path="/admin" element={<AdminPage/>} />
          </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App