import { useContext, useState, useEffect } from "react";
import "./Navbar1.scss"
import logo from '../../../../assets/mainlogoblackcrop.png'
import { NavLink, useNavigate } from "react-router-dom";
import LanguageContext from "../../../../context/LangContext";

function Navbar1() {

  const { language, setLangCode } = useContext(LanguageContext)
  if(!language || !setLangCode) return

  const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(true);
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
    if(windowDimensions.width < 928){
      setNavBarResponsive(true)
    }else{
      setNavBarResponsive(false)
    }
  }, [windowDimensions])


  const handleShowNavBar = () => {
    setShowNavbar(prevShowNavBar => !prevShowNavBar)
  }

  const handleNavigateHome = () => {
    navigate("/")
  }

  return (
    <>
    {navBarResponsive ? (
          <div className="navbar1-responsive">
            <span>Nav bar responsive</span>

        </div>
    ) : (
      <div className="navbar1-container">
      <div className={showNavbar ? "nav-container-show" : "nav-container-hide"}>
        <div className="logo-container" onClick={handleNavigateHome}>
          <img src={logo} alt='conektion-logo' />
        </div>
        <ul className="list-container">
          <li id="dashboard-nav"><NavLink to="/about" className="navlink">{language?.navbar?.aboutUs}</NavLink></li>
          <li id="dashboard-nav"><NavLink to="/casestudies" className="navlink">{language?.navbar?.caseStudies}</NavLink></li>
          <li id="dashboard-nav"><NavLink to="/installation" className="navlink">{language?.navbar?.instalation}</NavLink></li>
          <li id="dashboard-nav"><NavLink to="/rental" className="navlink">{language?.navbar?.rental}</NavLink></li>
          <li id="dashboard-nav"><NavLink to="/othersolutions" className="navlink">{language?.navbar?.otherSolutions}</NavLink></li>
          <li id="dashboard-nav"><NavLink to="/comingevents" className="navlink">{language?.navbar?.comingEvents}</NavLink></li>
          <li id="dashboard-nav"><NavLink to="/contact" className="navlink">{language?.navbar?.contact}</NavLink></li>
        </ul>
        <div className="navbar-lang-selector">
          <span onClick={() => setLangCode('EN')}>EN</span>
          <div style={{width: '0px', height: '20px', borderRight: '1px solid #EDF0ED'}}></div>
          <span onClick={() => setLangCode('ES')}>ES</span>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default Navbar1