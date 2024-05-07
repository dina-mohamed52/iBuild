import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import styles from "./Footer.module.css";
import HomeContacts from "../Home/HomeContacts";

const Footer = () => {
  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/i7uME11YN9x258RD6", "_blank");
  };

  const handleMailClick = () => {
    window.open("mailto:ibuild@ibuild-egy.com", "_blank");
  };

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/+201092080749", "_blank");
  };

  return (
    <footer className="text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`${styles.contactContainer}`}>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p
              className="flex items-start cursor-pointer pt-[-1rem]"
              onClick={handleLocationClick}
            >
              <span className="pr-2">
                <CiLocationOn size={25} color="yellow" />
              </span>{" "}
              22 Ahmed Zaki, Highstep, Al-Nozha District, Cairo Governorate
            </p>
            <p
              className="ml-[0.3rem] cursor-pointer mt-2 flex items-start pt-[-1rem]"
              onClick={handleMailClick}
            >
              {" "}
              <span className="pr-2">
                {" "}
                <TfiEmail size={20} color="yellow" />
              </span>
              Email: ibuild@ibuild-egy.com
            </p>
            <div className="ml-[0.3rem]  mt-2 flex flex-col items-start pt-[-1rem]">
              <p
                className="ml-[0.3rem] mt-2 cursor-pointer flex items-start pt-[-1rem]"
                onClick={() => handlePhoneClick("+201227822584")}
              >
                <IoCallOutline size={20} color="yellow" />
                Phone: +20 122 782 2584
              </p>
              <p
                className="ml-[0.3rem] mt-2 cursor-pointer flex items-start pt-[-1rem]"
                onClick={() => handleWhatsappClick()}
              >
                <IoCallOutline size={20} color="yellow" />
                Phone: +20 109 208 0749
              </p>
              <p
                className="ml-[0.3rem] cursor-pointer mt-2 flex items-start pt-[-1rem]"
                onClick={() => handlePhoneClick("+0226201621")}
              >
                <IoCallOutline size={20} color="yellow" />
                Phone: +02 262 016 21
              </p>
            </div>
          </div>
          <div className={`${styles.servicesContainer}`}>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="text-lg">
              <li>Construction and Integrated Finishes</li>
              <li>Engineering Services</li>
              <li>Specialized Services</li>
              <li>Interior and Exterior Design</li>
            </ul>
          </div>
          <div className={`${styles.followContainer}`}>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="mt-[8rem] mr-[14rem] flex flex-col items-center justify-center space-y-4">
              <HomeContacts />
            </div>
          </div>
        </div>
        <div
          className={`${styles.copyRight} text-lg mt-[4rem] border-t border-gray-700 flex items-center justify-between`}
        >
          <div className="mt-[0.7rem] flex items-center">
            <span className="text-yellow-300">©</span> 2024 i Build. All rights
            reserved.
          </div>
          <div className="mt-[0.7rem]">
            i Build <span className="text-yellow-300">® </span> for
            architectural finishes, interior design and decoration
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
