import { useContext, useState, useEffect } from "react";
import "./Navbar1.scss"
import logo from '../../../../assets/mainlogoblackcrop.png'
import { NavLink, useNavigate } from "react-router-dom";
import LanguageContext from "../../../../context/LangContext";
import { IoMdMenu } from "react-icons/io";

function Navbar1() {

  const { language, setLangCode } = useContext(LanguageContext)
  if (!language || !setLangCode) return

  const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(true);
  const [openNavResponsive, setOpenNavResponsive] = useState(false)
  const [navBarResponsive, setNavBarResponsive] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowDimensions.width < 928) {
      setNavBarResponsive(true)
    } else {
      setNavBarResponsive(false)
    }
  }, [windowDimensions])


  const handleShowNavBar = () => {
    setShowNavbar(prevShowNavBar => !prevShowNavBar)
  }

  const handleOpenNavbarResponsive = () => {
    const burgerIcon = document.querySelector(".burguer-icon"); // Selecciona el elemento correcto
    if (burgerIcon) {
      burgerIcon.classList.toggle("change");
    }
    setOpenNavResponsive(prevOpenNavbarResponsive => !prevOpenNavbarResponsive);
  };

  const handleNavigateHome = () => {
    navigate("/")
  }

  return (
    <>
      {navBarResponsive ? (
        <>
          <div className="navbar1-responsive">
            <div className="burguer-icon" onClick={handleOpenNavbarResponsive}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className="responsive-logo-container" onClick={handleNavigateHome}>
              <img src={logo} alt='conektion-logo' />
            </div>
            <div className="responsive-lang-selector">
              <span onClick={() => setLangCode('EN')}>EN</span>
              <div style={{ width: '0px', height: '20px', borderRight: '1px solid #EDF0ED' }}></div>
              <span onClick={() => setLangCode('ES')}>ES</span>
            </div>
          </div>
          {openNavResponsive && <div className="responsive-nav">
            <ul className="list-container-responsive">
              <NavLink to="/about" className="navlink-responsive">
                <li id="dashboard-nav">{language?.navbar?.aboutUs}</li>
              </NavLink>
              <NavLink to="/casestudies" className="navlink-responsive">
                <li id="dashboard-nav">{language?.navbar?.caseStudies}</li>
              </NavLink>
              <NavLink to="/installation" className="navlink-responsive">
                <li id="dashboard-nav">{language?.navbar?.instalation}</li>
              </NavLink>
              <NavLink to="/rental" className="navlink-responsive">
                <li id="dashboard-nav">{language?.navbar?.rental}</li>
              </NavLink>
              <NavLink to="/othersolutions" className="navlink-responsive">
                <li id="dashboard-nav">{language?.navbar?.otherSolutions}</li>
              </NavLink>
              <NavLink to="/comingevents" className="navlink-responsive">
                <li id="dashboard-nav">{language?.navbar?.comingEvents}</li>
              </NavLink>
              <NavLink to="/contact" className="navlink-responsive">
                <li id="dashboard-nav">{language?.navbar?.contact}</li>
              </NavLink>
            </ul>
          </div>}
        </>
      ) : (
        <div className="navbar1-container">
          <div className={showNavbar ? "nav-container-show" : "nav-container-hide"}>
            <div className="logo-container" onClick={handleNavigateHome}>
              <img src={logo} alt='conektion-logo' />
            </div>
            <ul className="list-container">
              <NavLink to="/about" className="navlink">
                <li id="dashboard-nav">{language?.navbar?.aboutUs}</li>
              </NavLink>
              <NavLink to="/casestudies" className="navlink">
                <li id="dashboard-nav">{language?.navbar?.caseStudies}</li>
              </NavLink>
              <NavLink to="/installation" className="navlink">
                <li id="dashboard-nav">{language?.navbar?.instalation}</li>
              </NavLink>
              <NavLink to="/rental" className="navlink">
                <li id="dashboard-nav">{language?.navbar?.rental}</li>
              </NavLink>
              <NavLink to="/othersolutions" className="navlink">
                <li id="dashboard-nav">{language?.navbar?.otherSolutions}</li>
              </NavLink>
              <NavLink to="/comingevents" className="navlink">
                <li id="dashboard-nav">{language?.navbar?.comingEvents}</li>
              </NavLink>
              <NavLink to="/contact" className="navlink">
                <li id="dashboard-nav">{language?.navbar?.contact}</li>
              </NavLink>
            </ul>
            <div className="navbar-lang-selector">
              <span onClick={() => setLangCode('EN')}>EN</span>
              <div style={{ width: '0px', height: '20px', borderRight: '1px solid #EDF0ED' }}></div>
              <span onClick={() => setLangCode('ES')}>ES</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar1