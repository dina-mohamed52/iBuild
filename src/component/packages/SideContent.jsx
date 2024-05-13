import { useLanguage } from "../../helpers/useLanguage";
import s from "./SideContent.module.css";

function SideContent() {
  const { isArabic } = useLanguage();

  const getTranslation = (english, arabic) => {
    return isArabic ? arabic : english;
  };

  return (
    <div className={` ${s.container}  rounded-lg shadow-lg`}>
      <div className={`${s.customPack} mb-4`}>
        <p className="text-white text-lg md:text-2xl font-semibold">
          {getTranslation("Customize Your Package", "قم بتخصيص حزمتك")}
        </p>
        <p className="text-white text-sm md:text-lg">
          {getTranslation(
            "You can also customize your own package",
            "يمكنك أيضًا تخصيص حزمتك الخاصة"
          )}
        </p>
      </div>
      <div className="border-t border-white pt-4 flex flex-col md:flex-row md:justify-around">
        <h2 className="mt-[1rem] p-4 border-r-4 text-white text-[2rem] mr-[2rem] md:text-2xl font-semibold">
          {getTranslation("Pay With", "ادفع بواسطة")}
        </h2>
        <div className="flex flex-col items-start text-[1.5rem]">
          <p className="text-white flex flex-row items-center justify-center">
            {getTranslation("Valu", "Valu")}
            <img
              className={` ml-[4.2rem] mb-4 w-[3rem] h-[3rem] rounded-full`}
              src="https://d2tm09s6lgn3z4.cloudfront.net/2023/08/BfOA0nM8-1692768785_608_194204_369535132_747623750738714_1517114919078158862_n-jpg.webp"
              alt="logo2"
            />
          </p>
          <p
            className={` text-white flex flex-row items-center justify-center`}
          >
            {getTranslation("Souhoola", "Souhoola")}
            <img
              className={`  ml-[1rem] w-[3rem] h-[3rem] rounded-full`}
              src="https://cdn6.aptoide.com/imgs/3/e/1/3e1fcddce63b57257ee1d6bbcbe5746c_icon.png"
              alt="logo"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideContent;
