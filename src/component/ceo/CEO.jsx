    import { useState } from "react";
import Logo from "../../ui/Logo";

    import styles from "./CEO.module.css"
import { useLanguage } from "../../helpers/useLanguage";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";


function CEOComponent ()
{
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
      edu: "كلية الهندسة، جامعة القاهرة",
      text: `نحن بمفردنا لا يمكننا فعل الكثير؛ معًا يمكننا فعل الكثير`,
      author: "وسيم ر. مختار",
      location: "مصر، القاهرة",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      header: "المدير المالي الرئيسي (CFO)",
      edu: "كلية التجارة، جامعة عين شمس",
      text: `بحب كبير، ومعًا يمكننا فعل شيء رائع`,
      author: "رامي النمري",
      location: "مصر، القاهرة",
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      header: "المدير التنفيذي العملي (COO)",
      edu: "كلية الهندسة، جامعة القاهرة",
      text: `التجمع هو بداية، البقاء معًا هو تقدم،
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
      edu: "Faculty of Engineering, Cairo University",
      text: `Alone we can do so little; together we can do so much`,
      author: "Wassim R. Mokhtar",
      location: "Egypt, Cairo",
      photo:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      id: 1,
      header: "Chief Financial Officer (CFO)",
      edu: "Faculty of Commerce, Ain Shams University",
      text: `with great love, and together we can do something wonderful`,
      author: "Ramy El Nemry",
      location: "Egypt, Cairo",
      photo:
        "https://media.istockphoto.com/id/1167768487/photo/indian-businessman-wearing-white-elegant-shirt-standing-over-isolated-yellow-background.jpg?s=612x612&w=0&k=20&c=_Z82yRj8KM22ma6iiwzjM_h0VIYfx-zJ4wPLX2MNsv4=",
    },
    {
      id: 2,
      header: "Chief Operating Officer (COO)",
      edu: "Faculty of Engineering, Cairo University",
        text: `Coming together is a beginning, staying together is progress,
      and working together is success.`,
      author: "Peter Rafla",
      location: "Egypt, Cairo",
      photo:
        "https://media.istockphoto.com/id/1167768487/photo/indian-businessman-wearing-white-elegant-shirt-standing-over-isolated-yellow-background.jpg?s=612x612&w=0&k=20&c=_Z82yRj8KM22ma6iiwzjM_h0VIYfx-zJ4wPLX2MNsv4=",
    },
    {
      id: 3,
      header: "Team Marketing",
      text: `Teamwork begins by building trust.
And the only way to do that is to overcome our need for invulnerability.`,
      author: "Marketing Team",
      location: "Egypt, Cairo",
      photo:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
    },
  ];
  const slides = isArabic ? slidesArabic : slidesEnglish;
  return (
    <>
      <div className={`${styles.container} relative `}>
        <Logo />
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
        <div>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide1}
          
            flex-none w-full px-4 ${
              index === currentSlide ? "" : "hidden"
            } transition-opacity duration-500 
             
            `}
            >
              <div className={`${styles.divider}`}>
                <div className={`${styles.image1}`}>
                  <img src={slide.photo} alt="image" className="rounded-full" />
                </div>
                <div className={`${styles.content} `}>
                  <h1 className="font-bold  text-xl md:text-2xl lg:text-3xl">
                    {slide.header}
                  </h1>
                  <p className="text-sm md:text-base lg:text-xl text-gray-950">
                    {slide.edu}
                  </p>
                  <p className="text-sm md:text-base lg:text-xl">
                    {slide.text}
                  </p>

                  <div className={`${styles.subcontent} mt-2 md:mt-4 lg:mt-6`}>
                    <h2 className="font-semibold   text-base md:text-lg lg:text-xl">
                      {slide.author}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-950">
                      {slide.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex   items-center justify-end absolute right-[1rem]
         top-1/2 transform -translate-y-1/2 "
        >
          <button
            className={` ${styles.slider__btnN} w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white rounded-full flex items-center justify-center`}
            onClick={nextSlide}
          >
            <GrFormNextLink size={24} />
          </button>
        </div>
        {/* Slide indicators */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={` w-4 h-4 bg-gray-400 rounded-full  *:
                   mt-[24rem] ${styles.dots} active:bg-black
                  mx-1 focus:outline-none 
                  ${index === currentSlide ? "bg-yellow-500" : ""}
                  `}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}

    export default CEOComponent;
