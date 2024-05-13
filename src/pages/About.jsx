

import Logo from "../assets/images/loggoo.png";
import TypedText from "../component/Home/typed-function";
import useSectionVisibility from "../helpers/moveText";
import { useLanguage } from "../helpers/useLanguage";
import styles from "./About.module.css";
import img from "../assets/images/uni-removebg-preview.png";

function About() {
  const isContactsVisible = useSectionVisibility("/about");
  const { isArabic } = useLanguage();
 


  
  return (
    <div className={styles.container}>
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div
          className={` ${styles.img} w-full lg:w-[32rem] h-[32rem] lg:h-[32rem] mb-8 lg:mb-0 lg:mr-8`}
        >
          <img src={Logo} alt="logo" />
        </div>
        <div
          className={`${
            isArabic ? "text-center" : ""
          }  max-w-full lg:max-w-[40rem]`}
        >
          <h1 className={`${styles.H1} ${isContactsVisible ? styles.H2 : ""} `}>
            {!isContactsVisible &&
              (isArabic
                ? "يتلاشى الجمال، ولكن الأساس القوي يدوم إلى الأبد"
                : "Beauty fades, but a strong foundation lasts forever.")}
            {isContactsVisible && (
              <TypedText
                text={
                  isArabic
                    ? ".يتلاشى الجمال، ولكن الأساس القوي يدوم إلى الأبد"
                    : "Beauty fades, but a strong foundation lasts forever."
                }
                speed={50}
              />
            )}
          </h1>
          <div className=" text-justify">
            <p
              className={` ${styles.animate} text-xl mt-4 ${
                isContactsVisible ? styles.contactVisible : ""
              } ${isContactsVisible ? styles.P : ""} ${styles.firstP} `}
            >
              {isArabic
                ? "تتميز شركتنا بقيادة قادرة، وقوة عاملة ماهرة، وعلاقات عمل ممتازة، وسجل سلامة قوي، وعلاقات جيدة مع العملاء. نحن نعمل بجد للاستفادة من قدراتنا المثبتة وسجلنا السلامة. من الناحية الشركات، نحن نتخذ دورًا متزايدًا في دعم جهود تطوير الأعمال لشركاء عملائنا. ستقوم هذه المبادرة التنموية التعاونية بأداء العديد من الوظائف الحيوية: تكون وسيطًا، تسهل الحوار المستمر بين الشخصيات التشغيلية الميدانية وشركاء المشروع"
                : "Our company is characterized by able leadership, a skilled workforce, excellent labour relations, a strong safety record, and good customer relationships. We are working hard to capitalize on our proven capabilities and safety record."}
            </p>
            <p
              className={`${styles.P} ${isContactsVisible ? styles.H2 : ""} ${
                styles.P
              } mt-[2rem] text-xl`}
            >
              {isArabic
                ? "على المستوى الشركاتي، نحن نتخذ دورًا متزايدًا في دعم جهود تطوير الأعمال لشركاء عملائنا. ستقوم هذه المبادرة التنموية التعاونية بأداء العديد من الوظائف الحيوية: تكون وسيطًا، تسهل الحوار المستمر بين الشخصيات التشغيلية الميدانية وشركاء المشروع"
                : "On a corporate level, we are taking an increasing role in supporting the business development efforts of our client partners. This cooperative business development initiative will perform several vital functions: Act as a liaison, facilitating an ongoing dialogue between field operating personnel and venture partners."}
            </p>
          </div>
          <div
            className={` ${styles.unioncontainer} flex items-center justify-around`}
          >
            <div className=" mt-[2rem] ml-[-2rem] pr-[1rem] w-[10rem] h-[8rem] mb-[2rem] relative ">
              <img src={img} alt="imgLogo" />
            </div>
            <div>
              <div className="absolute mt-[-3.5rem]  mr-[1rem] h-[10rem] border-l-2 border-yellow-300"></div>
              <p
                className={`${styles.animate} pl-[2rem]  ${
                  isContactsVisible ? styles.P : ""
                } font-semibold `}
              >
                {isArabic
                  ? "عضو في الاتحاد المصري لمقاولي البناء والمقاولين - التسجيل #83300"
                  : "Member of the Egyptian Federation of Construction and Building Contractors -reg#83300"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
