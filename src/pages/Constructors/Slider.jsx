import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import styles from "./Slider.module.css";
import { useLanguage } from "../../helpers/useLanguage";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
const { isArabic } = useLanguage();
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };
  const slidesArabic = [
    {
      id: 0,
      header: "المدير التنفيذي الرئيسي (CEO)",
      text: `كلية الهندسة، جامعة القاهرة
نحن بمفردنا لا يمكننا فعل الكثير؛ معًا يمكننا فعل الكثير`,
      author: "وسيم ر. مختار",
      location: "مصر، القاهرة",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      header: "المدير المالي الرئيسي (CFO)",
      text: `كلية التجارة، جامعة عين شمس
بحب كبير، ومعًا يمكننا فعل شيء رائع`,
      author: "رامي النمري",
      location: "مصر، القاهرة",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      header: "المدير التنفيذي العملي (COO)",
      text: `كلية الهندسة، جامعة القاهرة
التجمع هو بداية، البقاء معًا هو تقدم،
والعمل معًا هو النجاح.`,
      author: "بيتر رفلة",
      location: "مصر، القاهرة",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      header: "فريق التسويق",
      text: `العمل الجماعي يبدأ ببناء الثقة.
والطريقة الوحيدة للقيام بذلك هي التغلب على حاجتنا للجبروت.`,
      author: "فريق التسويق",
      location: "مصر، القاهرة",
      photo: "https://via.placeholder.com/150",
    },
  ];

  const slidesEnglish = [
    {
      id: 0,
      header: "Chief Executive Officer (CEO)",
      text: `Faculty of Engineering, Cairo University 
Alone we can do so little; together we can do so much`,
      author: "Wassim R. Mokhtar",
      location: "Egypt, Cairo",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      header: "Chief Financial Officer (CFO)",
      text: `Faculty of Commerce, Ain Shams University
with great love, and together we can do something wonderful`,
      author: "Ramy El Nemry",
      location: "Egypt, Cairo",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      header: "Chief Operating Officer (COO)",
      text: `Faculty of Engineering, Cairo University
Coming together is a beginning, staying together is progress,
and working together is success.`,
      author: "Peter Rafla",
      location: "Egypt, Cairo",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      header: "Team Marketing",
      text: `Teamwork begins by building trust.
And the only way to do that is to overcome our need for invulnerability.`,
      author: "Marketing Team",
      location: "Egypt, Cairo",
      photo: "https://via.placeholder.com/150",
    },
    
  ];
const slides = isArabic ? slidesArabic : slidesEnglish;
  return (
    <section
      className={` ${styles.sectionbg} relative flex items-center justify-center min-h-screen`}
    >
      <div className="flex items-center justify-start">
        <button
          className={` ${styles.slider__btnP} w-10 h-10 md:w-12 md:h-12
        lg:w-16 lg:h-16 ml-2 md:ml-8  md:z-30  sm:z-30  absolute
       top-1/2 transform -translate-y-1/2
        text-white rounded-full flex items-center justify-center`}
          onClick={prevSlide}
        >
          <GrFormPreviousLink size={24} />
        </button>
      </div>

      <div
        className={` ${styles.sliderContainer}  relative max-w-4xl w-full mx-auto`}
      >
        <div className={`flex`}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={` flex-none w-full px-4 ${
                index === currentSlide ? "" : "hidden"
              } transition-opacity duration-500  `}
            >
              <div
                className={` ${styles.slider} p-6 w-[50rem]  rounded-lg shadow-md`}
              >
                <h5 className="text-lg font-bold mb-2">{slide.header}</h5>
                <p className={`${styles.sliderText}  italic`}>
                  {slide.text}
                </p>
                <address className={`  flex items-center mt-4`}>
                  <img
                    src={slide.photo}
                    alt=""
                    className={`w-12 h-12 rounded-full mr-4`}
                  />
                  <div className={`${styles.author}`}>
                    <h6 className="font-bold">{slide.author}</h6>
                    <p className="text-gray-500">{slide.location}</p>
                  </div>
                </address>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end mr-[-20rem] ">
          <button
            className={` ${styles.slider__btnN} absolute
   w-10 h-10 md:w-12 md:h-12  lg:w-16 lg:h-16   top-1/2 
   transform -translate-y-1/2 text-white rounded-full flex items-center justify-center`}
            onClick={nextSlide}
          >
            <GrFormNextLink size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={` w-4 h-4 bg-gray-400 rounded-full  *:
                   mt-[6rem] active:bg-black
                  mx-1 focus:outline-none ${
                    index === currentSlide ? "bg-blue-500" : ""
                  }
                  `}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
