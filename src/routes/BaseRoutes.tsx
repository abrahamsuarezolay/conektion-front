import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../layout/home/Home";
import Navbar1 from "../features/navbars/componentes/Navbar1/Navbar1";
import DashboardLayout from "../features/dashboard/layout/DashboardLayout";
import ProjectsLayout from "../features/projects/layout/ProjectsLayout";
import ImagesLayout from "../features/images/layout/ImagesLayout";
import SettingsLayout from "../features/settings/layout/SettingsLayout";
import NewLayout from "../features/new/layout/NewLayout";


export const BaseRoutes = () => {

  // const { usuario } = useContext(AuthContext)

  return (
    <>
      <Navbar1 />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/projects" element={<ProjectsLayout />} />
        <Route path="/images" element={<ImagesLayout />} />
        <Route path="/settings" element={<SettingsLayout />} />
        <Route path="/new" element={<NewLayout />} />


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