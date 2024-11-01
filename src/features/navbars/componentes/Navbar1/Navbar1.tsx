import { useState } from "react";
import "./Navbar1.scss"
import { IoMdMenu } from "react-icons/io";
import { FaProjectDiagram, FaImage } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Navbar1() {

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavBar = () => {
    setShowNavbar(prevShowNavBar => !prevShowNavBar )
  }

  return (
    <div className="navbar1-container">
      <div className={showNavbar ? "nav-container-show" : "nav-container-hide"}>
        <ul className="list-container">
        <li id="dashboard-nav"><NavLink to="/dashboard" className="navlink"><BiSolidDashboard className="dashboard-icon" size={40} />Dashboard</NavLink></li>
          <li id="projects-nav"><NavLink to="/projects" className="navlink"><FaProjectDiagram className="project-icon" size={40} />Projects</NavLink></li>
          <li id="images-nav"><NavLink to="/images" className="navlink"><FaImage className="image-icon" size={40} />Images</NavLink></li>
          <li id="settings-nav"><NavLink to="/settings" className="navlink"><VscSettings className="settings-icon" size={40} />Settings</NavLink></li>
          <li id="new-nav"><NavLink to="/new" className="navlink"><CiEdit className="new-icon" size={40} />New</NavLink></li>
        </ul>
      </div>
      <div className="burguer-button-container">
        <button className="burguer-button" onClick={handleShowNavBar}>
        {
          showNavbar ? (
            <AiOutlineClose size={40} />
          ) : (
            <IoMdMenu size={40} />
          )
        }
        </button>
      </div>
    </div >
  )
}

export default Navbar1