import { useState, useEffect } from "react";
import styles from "./HomeHeader.module.css";
import TypedText from "./typed-function";
import useSectionVisibility from "../../helpers/moveText";
import { useLanguage } from "../../helpers/useLanguage";

function HomeHeader() {
  const sentencesEnglish = [
    "Good design conveys positive energy",
    "We design your bedroom to reflect your taste by specifying your materials",
    "And choosing your favorite colors",
    "We provide you with suitable designs and models for decoration",
    "And we provide suitable lighting distribution and create space for movement",
    "So that you can enjoy a comfortable and attractive bedroom",
    "Modern ideas and models to choose from",
    "Contact us and book your appointment now",
    "We are happy to communicate with us as we are happy to serve you",
  ];

  const sentencesArabic = [
    "التصميم الجيد ينقل الطاقة الإيجابية",
    "نصمم غرفة نومك بما يعكس ذوقك بتحديد خاماتك",
    "واختيارك للألوان المفضلة",
    "نوفر لك تصاميم ونماذج مناسبة للديكور",
    "ونوفر توزيعًا مناسبًا للإضاءة ونخلق فسحًا للحركة",
    " لكي تستمتع بغرفة نوم مريحة وجذابة",
    "أفكار ونماذج حديثة للاختيار من بينها",
    "اتصل بنا واحجز موعدك الآن",
    "يسعدنا تواصلك معنا كما يسعدنا خدمتك",
  ];

  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) =>
        prev === sentencesEnglish.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [sentencesEnglish.length]);

  const isContactsVisible = useSectionVisibility("/home");
  const { isArabic } = useLanguage();

  const sentences = isArabic ? sentencesArabic : sentencesEnglish;

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className={`${styles.headerContainer} absolute z-10`}>
        <div className="flex flex-col items-center text-3xl ">
          <h1
            className={` ${styles.logoName} text-3xl  uppercase  mb-[1.4rem] font-semibold`}
          >
            <span className="lowercase ">I</span>
            {!isContactsVisible && (
              <span>
                build
                {isArabic ? "التصميم يلبي الرغبة" : "(Design meets desire)"}
              </span>
            )}
            {isContactsVisible && (
              <TypedText
                text={`build ${
                  isArabic ? "التصميم يلبي الرغبة" : "(Design meets desire)"
                }`}
                speed={80}
              />
            )}
          </h1>
          <h1 className={`${styles.headerText}`}>
            <TypedText text={sentences[currentSentence]} speed={100} />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
