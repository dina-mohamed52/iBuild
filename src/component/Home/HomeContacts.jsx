import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function HomeContacts ()
{
  
  const handleWhatsappClick = () => {
    window.open("https://wa.me/+201092080749", "_blank");
  };

  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/iBuild.REI?mibextid=ZbWKwL",
      "_blank"
    );
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/i7uME11YN9x258RD6", "_blank");
  };

  const handleMailClick = () => {
    window.open("mailto:ibuild@ibuild-egy.com", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/ibuild.design/", "_blank");
  };

  return (
    <div className="mt-[-8rem] flex items-center justify-center space-x-4">
      <div
        onClick={handleWhatsappClick}
        className="bg-green-500 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <FaWhatsapp className="text-2xl" />
      </div>
      <div
        onClick={handleFacebookClick}
        className="bg-blue-500 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <FaFacebook className="text-2xl" />
      </div>
      <div
        onClick={handleLocationClick}
        className="bg-red-500 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <CiLocationOn className="text-2xl" />
      </div>
      <div
        onClick={handleMailClick}
        className="bg-yellow-500 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <CgMail className="text-2xl" />
      </div>
      <div
        onClick={handleInstagramClick}
        className="bg-pink-700 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <FaInstagram className="text-2xl" />
      </div>
    </div>
  );
}

export default HomeContacts;
