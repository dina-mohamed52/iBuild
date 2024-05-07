
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeHeader from "../component/Home/HomeHeader";
import HomeContacts from "../component/Home/HomeContacts";
import Carousel from "../component/Home/Carousel";
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts/Contacts";
import Services from "./Services";
import styles from "./Home.module.css"
import Footer from "../component/Footer/Footer";
import Discounts from "./Discounts/Discounts";
import CEO from "../component/ceo/CEO";
import Logo from "../ui/Logo";
import NavBar from "../ui/NavBar";
import Feedback2 from "../component/Feedback2/Feedback2";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div id="/home" className={`h-screen ${styles.container} `}>
        <Logo />
        <NavBar />
        <HomeHeader />
        <Carousel />
        <HomeContacts />
      </div>
      <div id="/about" className={`h-auto ${styles.container} `}>
        <About />
      </div>

      <div className={`h-screen ${styles.container} `}>
        <CEO />
      </div>
      <div id="/services" className={` ${styles.service} h-auto`}>
        <Services />
      </div>
      <div className="h-auto">
        <Discounts />
      </div>
      <div id="/projects" className="h-auto bg-[beige] ">
        <Projects />
      </div>

      <div className={`h-auto ${styles.container} `}>
        <Feedback2 />
      </div>
      <div id="/contact" className={`h-auto ${styles.container} `}>
        <Contacts />
      </div>
      <div className="h-auto bg-black ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
