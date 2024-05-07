import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/loggoo.png";
import { IoIosMenu } from "react-icons/io";
import  styles from "./NavBar.module.css";
import { MdOutlineDesignServices, MdOutlineRealEstateAgent } from "react-icons/md";
import { BsBuildings, BsInfoCircle } from "react-icons/bs";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { Link as ScrollLink} from "react-scroll";
import { useLanguage } from "../helpers/useLanguage";
const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

 const { isArabic, toggleLanguage } = useLanguage();


  const closeSidebar = () => {
    setIsClicked(true);
    setSidebarOpen(false);
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {!isSidebarOpen && (
        <div
          className={ `fixed top-[1rem] p-2 left-[2rem]  w-[5rem] h-[5rem] rounded-full cursor-pointer z-[100] flex items-center 
          ${styles.navIcon}
          justify-center transition-transform transform-gpu hover:scale-110`}
          onClick={openSidebar}
        >
          <IoIosMenu color="beige" size={50} />
        </div>
      )}
      <div
        id="sidebar"
        className={`fixed inset-y-0   left-0 w-[18rem] z-[100]   text-black flex flex-col  items-center transform transition duration-500 ${
          isSidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          boxShadow: "0 0 0.8rem rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="p-6    mt-[1rem] mr-[1rem]">
          <img src={Logo} alt="logo" className="w-[12rem] h-[12rem]" />
        </div>
        <nav className=" mt-[-2rem] flex flex-col items-start space-y-4">
          <ScrollLink
            smooth={true}
            duration={500}
            to="/home"
            className={`${styles.a} cursor-pointer group flex gap-6 px-6 py-3 text-2xl italic font-meduim transition-colors duration-300 ease-in-out`}
          >
            <IoHomeOutline className="group-hover:text-yellow-500" /> Home
          </ScrollLink>

          <ScrollLink
            smooth={true}
            duration={500}
            to="/about"
            className={`${styles.a} cursor-pointer group flex gap-6 px-6 py-3 text-2xl italic font-meduim transition-colors duration-300 ease-in-out`}
          >
            <BsInfoCircle className="group-hover:text-yellow-500" /> About us
          </ScrollLink>
          <ScrollLink
            smooth={true}
            duration={500}
            to="/services"
            className={`${styles.a} cursor-pointer group flex gap-6 px-6 py-3 text-2xl italic font-meduim transition-colors duration-300 ease-in-out`}
          >
            <MdOutlineDesignServices className="group-hover:text-yellow-500" />{" "}
            Services
          </ScrollLink>
          <ScrollLink
            smooth={true}
            duration={500}
            to="/projects"
            className={`${styles.a} cursor-pointer group flex gap-6 px-6 py-3 text-2xl italic font-meduim transition-colors duration-300 ease-in-out`}
          >
            <BsBuildings className="group-hover:text-yellow-500" /> our projects
          </ScrollLink>
          <Link
            smooth={true}
            duration={500}
            to="/realState"
            className={`${styles.a} cursor-pointer group flex gap-6 px-6 py-3 text-2xl italic font-meduim transition-colors duration-300 ease-in-out`}
          >
            <MdOutlineRealEstateAgent className="group-hover:text-yellow-500" />{" "}
            real state
          </Link>
          <ScrollLink
            smooth={true}
            duration={500}
            offset={70}
            to="/contact"
            className={`${styles.a} cursor-pointer group flex gap-6 px-6 py-3 text-2xl italic font-meduim transition-colors duration-300 ease-in-out`}
          >
            <IoCallOutline className="group-hover:text-yellow-500" /> Contacts
          </ScrollLink>
        </nav>
        <div className=" mt-[1rem] py-4 px-6">
          <button
            onClick={toggleLanguage}
            className={` ${styles.button} text-black italic font-meduim text-2xl py-3 `}
          >
            {isArabic ? "Switch to English" : "تبديل إلى العربية"}
          </button>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          id="time"
          className={`fixed top-4 left-[1.5rem] cursor-pointer text-4xl transition-all duration-500 z-[100] ${
            isClicked ? "text-yellow-500" : "text-black"
          }`}
          onClick={closeSidebar}
        >
          &times;
        </div>
      )}
    </>
  );
};

export default NavBar;
