import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../layout/home/Home";
import Navbar1 from "../features/navbars/componentes/Navbar1/Navbar1";
import InstalacionLayout from "../features/instalacion/layout/InstalacionLayout";
import AboutUsLayout from "../features/aboutUs/layout/AboutUsLayout";
import CaseStudiesLayout from "../features/caseStudies/layout/CaseStudiesLayout";
import ComingEventsLayout from "../features/comingEvents/layout/ComingEventsLayout";
import ContactLayout from "../features/contact/layout/ContactLayout";
import OtherSolutionsLayout from "../features/otherSolutions/layout/OtherSolutionsLayout";
import RentalLayout from "../features/rental/layout/RentalLayout";
import BlogArchive from "../features/comingEvents/components/BlogArchive/BlogArchive";

export const BaseRoutes = () => {

  // const { usuario } = useContext(AuthContext)

  return (
    <>
      <Navbar1 />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<InstalacionLayout />} />
        <Route path="/about" element={<AboutUsLayout />} />
        <Route path="/casestudies" element={<CaseStudiesLayout />} />
        <Route path="/comingevents" element={<ComingEventsLayout />} />
        <Route path="/comingevents/archive" element={<ComingEventsLayout />} />
        <Route path="/contact" element={<ContactLayout />} />
        <Route path="/othersolutions" element={<OtherSolutionsLayout />} />
        <Route path="/rental" element={<RentalLayout />} />


        {/* Rutas privadas */}
        {/* <Route path="/home" element={
            <ProtectedRoute user={usuario}>
             Añadir aqui el componente privado
            </ProtectedRoute>
          } /> */}
      </Routes>
    </>
  )

}

export default BaseRoutes;