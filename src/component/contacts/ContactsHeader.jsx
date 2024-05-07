/* eslint-disable react/no-unescaped-entities */
import styles from "./ContactsHeader.module.css";
import Logo from "../../assets/images/loggoo.png";
import TypedText from "../Home/typed-function";
import HomeContacts from "../Home/HomeContacts";
import useSectionVisibility from "../../helpers/moveText";
import { useLanguage } from "../../helpers/useLanguage";


function ContactsHeader() {
  const { isArabic } = useLanguage();
  const isContactsVisible = useSectionVisibility("/contact");

  const getTranslation = (english, arabic) => {
    return isArabic ? arabic : english;
  };

  return (
    <div
      className={`${styles.Hcontainer} ml-[-3rem] container mx-auto mt-32 px-4`}
    >
      <div className="text-center">
        <div
          className={`  ${
            isContactsVisible ? styles.H1 : ""
          } flex items-center  justify-center text-[4rem] font-bold uppercase text-[#e7b74e]  `}
        >
          <span className={`${styles.logo}`}>
            {" "}
            <span className="lowercase text-gray-950 ">i </span>Build
          </span>
          <img src={Logo} className="w-[6rem] h-[6rem] " alt="logo" />
        </div>
        <div className={styles.text}>
          <h1 className="text-3xl mt-4 mb-6">
            {!isContactsVisible && (
              <h1>
                {getTranslation(
                  "The official working hours are from 9:00 AM to 5:00 PM daily.",
                  "ساعات العمل الرسمية من الساعة 9:00 صباحًا إلى الساعة 5:00 مساءً يوميًا."
                )}
              </h1>
            )}
            {isContactsVisible && (
              <TypedText
                text={getTranslation(
                  "The official working hours are from 9:00 AM to 5:00 PM daily.",
                  "ساعات العمل الرسمية من الساعة 9:00 صباحًا إلى الساعة 5:00 مساءً يوميًا."
                )}
                speed={80}
              />
            )}
          </h1>
          <h2
            className={` ${
              isContactsVisible ? styles.subHeader : ""
            }   text-2xl mt-2}`}
          >
            {getTranslation(
              "Except for Friday and official holidays.",
              "باستثناء يوم الجمعة والعطلات الرسمية."
            )}
          </h2>
        </div>
      </div>

      <div
        className={`  mt-[12rem] ${isContactsVisible ? styles.contacts : ""} `}
      >
        <HomeContacts />
      </div>
    </div>
  );
}

export default ContactsHeader;
