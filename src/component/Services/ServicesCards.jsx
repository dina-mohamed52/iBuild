

import styles from "./ServicesCards.module.css";
import { useLanguage } from "../../helpers/useLanguage";
import Logo from "../../ui/Logo";
import im1 from "../../assets/images/feedback/1.png";
import im2 from "../../assets/images/feedback/2.png";
import im3 from "../../assets/images/feedback/mm.png";
import im4 from "../../assets/images/feedback/ooo.png";
import im5 from "../../assets/images/feedback/4.png";
import im6 from "../../assets/images/feedback/5.png";
import im7 from "../../assets/images/feedback/6.png";
import im8 from "../../assets/images/feedback/7.png";
import im9 from "../../assets/images/feedback/8.png";
import { MdOutlineConstruction, MdOutlineEngineering } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { SiAffinitydesigner } from "react-icons/si";

function ServicesCards() {
  const { isArabic } = useLanguage();

  const getTranslation = (english, arabic) => {
    return isArabic ? arabic : english;
  };

  return (
    <div className=" relative">
      <Logo />
      <div className={` ${styles.container} absolute  h-[4rem]`}>
        {/* Construction and Integrated Finishes Card */}
        <div className={`${styles.card}`}>
          <div
            className={` ${styles.icon1} sm:mt-[-1.5rem]  mt-[5rem] 
          sm:mb-[0.5rem]  mb-[0rem]
          `}
          >
            <MdOutlineConstruction size={50} color="#cca95dc5" />
          </div>
          <div className={` ${styles.Hcontainer1} `}>
            <h1 className={`${styles.heading1} sm:mt-[-1.6rem]  mt-[0rem]`}>
              {getTranslation(
                "Construction and Integrated Finishes:",
                "إنهاء البناء والتكميلات المتكاملة"
              )}
            </h1>
            <div
              className={`${styles.subHeading1}   ${
                isArabic ? " text-right  sm:ml-[-1.2rem] ml-[-0.5rem]" : ""
              } sm:mt-4 mt-[-0.2rem]
              sm:mb-[2rem] mb-[1rem] 
                `}
            >
              <h2>
                {" "}
                {getTranslation(" \u2212Contracting", "المقاولات \u2212")}
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
                  "\u2212All Types of Insulation Works",
                  " جميع أنواع أعمال العزل \u2212"
                )}
              </h2>

              <h2>
                {" "}
                {getTranslation(
                  " \u2212Construction and maintenance of swimming pools",
                  "بناء وصيانة حمامات السباحة \u2212"
                )}
              </h2>
              <h2>
                {" "}
                {getTranslation(" \u2212Light structure", "هيكل خفيف\u2212")}
              </h2>
            </div>
            <div className="flex items-center justify-around gap-8 sm:mt-[0rem] py-[2.5rem] sm:py-[0rem] mt-[-4rem] ">
              <img
                src={im7}
                alt="img"
                className="sm:w-[6rem] w-[5rem] sm:h-[6rem] h-[4rem] "
              />
              <img
                src={im5}
                alt="img"
                className="sm:w-[6rem] w-[5rem] sm:h-[6rem] h-[5rem] "
              />
            </div>
          </div>
        </div>

        {/* Engineering Services Card */}
        <div className={`${styles.card}  ${isArabic ? styles.arabicText : ""}`}>
          <div
            className={` flex items-center justify-center 
            sm:mb-[0.1rem]  mb-[0rem]
            sm:mt-[-0.5rem]  mt-[8rem]  w-[10rem] h-[5rem] ${styles.icon2}`}
          >
            <MdOutlineEngineering size={50} color="#cca95dc5" />
          </div>
          <div
            className={` ${styles.Hcontainer1}
        
          `}
          >
            <h1 className={`${styles.heading1}  sm:mt-[-1.6rem]  mt-[0rem]  `}>
              {getTranslation("Engineering Services", "خدمات الهندسة ")}
            </h1>
            <div
              className={`${styles.subHeading1}   ${
                isArabic ? " text-right  sm:ml-[-1.2rem] ml-[-0.3rem] " : ""
              } sm:mt-4 mt-[-0.2rem] `}
            >
              <h2>
                {" "}
                {getTranslation("\u2212Plumbing Works", "أعمال السباكة\u2212")}
              </h2>
              <h2>
                {" "}
                {getTranslation(
                  "\u2212Electricity Works",
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
                  "\u2212Gypsum Board Works",
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
            <div className="flex items-center justify-center gap-0 sm:mt-[0rem] py-[5.5rem] sm:py-0 mt-[-8rem] ">
              <img
                src={im4}
                alt="img"
                className="sm:w-[5rem] w-[3rem] sm:h-[5rem] h-[3rem] "
              />
              <img
                src={im9}
                alt="img"
                className="sm:w-[5rem] w-[3rem] sm:h-[5rem] h-[3rem] "
              />
              <img
                src={im3}
                alt="img"
                className="sm:w-[6rem] w-[5rem] sm:h-[7rem] h-[6rem] mt-4 "
              />
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
              isArabic
                ? "hidden "
                : ""
            }   sm:mt-[-3rem] mt-[5.5rem]   sm:mb-[1rem] mb-[0rem]   `}
          >
            <GrServices size={50} color="#cca95dc5" />
          </div>
          <div
            className={` ${styles.Hcontainer1}  ${
              isArabic ? " sm:mt-[3.5rem] mt-[9rem] mb-[4rem]" : ""
            } 
            sm:mb-0 mb-[-0.3rem]
              `}
          >
            <h1 className={`${styles.heading1}   sm:mt-[-2rem] mt-[0rem] `}>
              {getTranslation("Specialized Services:", "الخدمات المتخصصة")}
            </h1>
          </div>
          {/* ${isArabic ? "mt-[3rem]" : ""} */}
          <div
            className={`${styles.subHeading2}   ${
              isArabic ? " text-right  ml-[-1.2rem]" : ""
            }
            sm:pb-0 pb-[2rem]
              ${
                isArabic
                  ? "sm:mb-[3.5rem] sm:mt-[1rem] mt-[-5rem] mb-[2rem] "
                  : ""
              } 
             
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
          <div
            className={` ${
              isArabic ? "sm:mt-[-1rem] " : ""
            } flex items-center justify-center gap-0 sm:mt-[1.5rem] py-[5.5rem] sm:py-0 mt-[-7rem] `}
          >
            <img
              src={im8}
              alt="img"
              className="sm:w-[5rem] w-[3rem] sm:h-[5rem] h-[3rem]"
            />
            <img
              src={im6}
              alt="img"
              className="sm:w-[5rem] w-[3rem] sm:h-[5rem] h-[3rem] "
            />
            <img
              src={im1}
              alt="img"
              className="sm:w-[5rem] w-[3rem] sm:h-[5rem] h-[3rem]"
            />
          </div>
        </div>

        {/* Interior and Exterior Design Card */}
        <div
          className={`${styles.card}  ${isArabic ? styles.arabicText : ""}  `}
        >
          <div
            className={` ${styles.icon4}  sm:mt-[-3rem]  mt-0
           sm:mb-[2rem]  mb-0
          `}
          >
            <SiAffinitydesigner size={50} color="#cca95dc5" />
          </div>
          <div
            className={` ${styles.Hcontainer1} 
         
          `}
          >
            <h1
              className={`${styles.heading1} sm:mt-[-3rem]  mt-0
             sm:mb-[2rem]  mb-0
            `}
            >
              {getTranslation(
                "Interior and Exterior Design:",
                "التصميم الداخلي والخارج"
              )}
            </h1>
          </div>
          <div
            className={`${styles.subHeading2} 
          ${isArabic ? "text-right  ml-[-1.2rem]" : ""}
            sm:mt-[-2rem]  mt-0
            `}
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
          <div className="flex items-center justify-center gap-8 sm:mt-[4rem] py-[2.5rem] sm:py-[0rem] mt-[-4rem] ">
            <img src={im2} alt="img" className="w-[6rem] h-[6rem] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
