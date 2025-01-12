import { useContext, useEffect } from "react"
import Navbar1 from "../../features/navbars/componentes/Navbar1/Navbar1"
import CarouselHome from "./components/carousel/CarouselHome"
import "./Home.scss"
import { getAllElementor } from "../../services/elementorApi.service"
import ElementorContext from "../../context/ElementorContext"

const Home = () => {


  const width = window.innerWidth
  const height = window.innerHeight




  return (
    <div className="home-container">
      <CarouselHome />
    </div>
  )
}

export default Home