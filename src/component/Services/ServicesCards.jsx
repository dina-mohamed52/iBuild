
import { GrServices } from "react-icons/gr";
import { MdOutlineConstruction} from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import styles from "./ServicesCards.module.css";
import { useLanguage } from "../../helpers/useLanguage";
import Logo from "../../ui/Logo";
import im1 from "../../assets/images/feedback/WhatsApp_Image_2024-05-24_at_4.25.23_PM-removebg-preview.png";
import im2 from "../../assets/images/feedback/WhatsApp_Image_2024-05-24_at_4.25.26_PM-removebg-preview.png";
import im3 from "../../assets/images/feedback/WhatsApp_Image_2024-05-24_at_4.25.26_PM__1_-removebg-preview.png";
import im4 from "../../assets/images/feedback/ooo.png";

function ServicesCards() {
  const { isArabic } = useLanguage();

  const getTranslation = (english, arabic) => {
    return isArabic ? arabic : english;
  };

  return (
    <div className=" relative">
      <Logo />
      <div className={` ${styles.container} absolute `}>
        {/* Construction and Integrated Finishes Card */}
        <div className={`${styles.card}`}>
          <div className={` ${styles.icon1} `}>
            {/* <MdOutlineConstruction size={50} color="#cca95dc5" /> */}
            <img
              className=" mt-[0.6rem] mb-[-1.2rem] w-[8rem] h-[6rem] "
              src={im4}
              alt="Construction and Integrated"
            />
          </div>
          <div className={` ${styles.Hcontainer1} `}>
            <h1 className={`${styles.heading1}`}>
              {getTranslation(
                "Construction and Integrated Finishes:",
                "إنهاء البناء والتكميلات المتكاملة"
              )}
            </h1>
            <div
              className={`${styles.subHeading1}  ${
                isArabic ? styles.arabicText : ""
              } `}
            >
              <h2>
                {" "}
                {getTranslation(" \u2212 Contracting", "المقاولات \u2212")}
              </h2>

              <h2>
                {" "}
                {getTranslation(
                  " \u2212Architectural Designs",
                  "تصميمات معمارية \u2212"
                )}
              </h2>
              <h2>
                {" "}
                {getTranslation(
                  "\u2212 All Types of Insulation Works",
                  " جميع أنواع أعمال العزل \u2212"
                )}
              </h2>

              <h2>
                {" "}
                {getTranslation(
                  " \u2212 AutoCad and 3DMax Designs",
                  "تصميمات AutoCad و 3DMax \u2212"
                )}
              </h2>
            </div>
          </div>
        </div>

        {/* Engineering Services Card */}
        <div className={`${styles.card} ${isArabic ? styles.arabicText : ""}`}>
          <div className={`  w-[10rem] h-[5rem] ${styles.icon2}`}>
            {/* <MdOutlineEngineering size={50} color="#cca95dc5" /> */}
            <img   src={im1} alt=" Engineering Services" />
          </div>
          <div
            className={` ${styles.Hcontainer1}
        
          `}
          >
            <h1 className={`${styles.heading1}`}>
              {getTranslation("Engineering Services:", "خدمات الهندسة ")}
            </h1>
            <div
              className={`${styles.subHeading1}   ${
                isArabic ? styles.arabicText : ""
              } `}
            >
              <h2>
                {" "}
                {getTranslation("\u2212 Plumbing Works", "أعمال السباكة\u2212")}
              </h2>
              <h2>
                {" "}
                {getTranslation(
                  "\u2212 Electricity Works",
                  "أعمال الكهرباء\u2212"
                )}
              </h2>
              <h2>
                {" "}
                {getTranslation(
                  "\u2212Aluminum Works",
                  "أعمال الألومنيوم\u2212"
                )}
              </h2>
              <h2>
                {" "}
                {getTranslation(
                  "\u2212 Gypsum Board Works",
                  "أعمال الجبس\u2212"
                )}
              </h2>
              <h2>
                {" "}
                {getTranslation(
                  " \u2212Iron Works (Trusses, Sheet Cladding, Fences)",
                  "أعمال الحديد (الهياكل، تلبيس الصفائح، السياج)\u2212"
                )}
              </h2>
              <h2>
                {" "}
                {getTranslation(
                  "\u2212All Types of Cladding (Marble, Stone, Wood)",
                  "جميع أنواع التلبيس (الرخام، الحجر، الخشب)\u2212"
                )}
              </h2>
            </div>
          </div>
        </div>

        {/* Specialized Services Card */}
        <div
          className={`${styles.card} ${isArabic ? styles.arabicText : ""}
       
        `}
        >
          <div
            className={` ${styles.icon3}  ${
              isArabic ? " absolute mt-[-11rem] mb-[8rem]" : ""
            } `}
          >
            {/* <GrServices size={50} color="#cca95dc5" /> */}
            <img
              className=" mt-[0.3rem] mb-[-1rem] w-[6rem] h-[6rem] "
              src={im3}
              alt="Specialized Services"
            />
          </div>
          <div
            className={` ${styles.Hcontainer1}  ${
              isArabic ? " mt-[-1rem] mb-[4rem]" : ""
            } `}
          >
            <h1 className={`${styles.heading1}`}>
              {getTranslation("Specialized Services:", "الخدمات المتخصصة")}
            </h1>
          </div>
          <div
            className={`${styles.subHeading2}   ${
              isArabic ? styles.arabicText : ""
            }
               ${isArabic ? " mt-[-3rem]" : ""}
             `}
          >
            <h2>
              {" "}
              {getTranslation(
                "\u2212Home Furnishings",
                "المفروشات المنزلية\u2212"
              )}
            </h2>
            <h2>
              {" "}
              {getTranslation(
                "\u2212Annual Building Maintenance",
                "صيانة المباني السنوية\u2212"
              )}
            </h2>
            <h2>
              {" "}
              {getTranslation(
                "\u2212Landscape Design and Implementation",
                "تصميم وتنفيذ المناظر الطبيعية\u2212"
              )}
            </h2>
            <h2>
              {" "}
              {getTranslation(
                "\u2212Renovations and Building Maintenance",
                "التجديد وصيانة المباني\u2212"
              )}
            </h2>
            <h2>
              {" "}
              {getTranslation(
                "\u2212Early Warning and Extinguishing Systems",
                "أنظمة الإنذار المبكر والإطفاء\u2212"
              )}
            </h2>
          </div>
        </div>

        {/* Interior and Exterior Design Card */}
        <div className={`${styles.card} ${isArabic ? styles.arabicText : ""} `}>
          <div className={` ${styles.icon4} `}>
            {/* <SiAffinitydesigner size={50} color="#cca95dc5" /> */}
            <img
              className=" mt-[-3.5rem] mb-[-1rem]  w-[8rem] h-[9rem]"
              src={im2}
              alt="Interior and Exterior Design"
            />
          </div>
          <div
            className={` ${styles.Hcontainer1} 
         
          `}
          >
            <h1 className={`${styles.heading1}`}>
              {getTranslation(
                "Interior and Exterior Design:",
                "التصميم الداخلي والخارج"
              )}
            </h1>
          </div>
          <div
            className={`${styles.subHeading2} 
            ${isArabic ? styles.arabicText : ""}`}
          >
            <h2>
              {" "}
              {getTranslation(
                "\u2212Architectural Designs",
                "تصميمات معمارية\u2212"
              )}
            </h2>
            <h2>
              {" "}
              {getTranslation(
                "\u2212AutoCad and 3DMax Designs",
                "تصميمات AutoCad و 3DMax\u2212"
              )}
            </h2>
            <h2>
              {" "}
              {getTranslation(
                "\u2212All Types of Insulation Works",
                "جميع أنواع أعمال العزل\u2212"
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
