import img1 from "../../assets/images/rr.jpeg";
import img2 from "../../assets/images/ee.jpeg";
import img3 from "../../assets/images/dd.jpeg";
import img4 from "../../assets/images/bb.jpeg";

import styles from "./FeedbackCards.module.css";
import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const images = [img1, img2, img3, img4];

function FeedbackCards() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section
      className={` ${styles.sectionbg} relative flex items-center justify-center min-h-screen`}
    >
      <button
        className={` ${styles.slider__btnPp} w-10 h-10 md:w-12 md:h-12
         lg:w-16 lg:h-16 ml-2 md:ml-8  md:z-30  sm:z-30  absolute
          left-0 top-1/2 transform -translate-y-1/2
           text-white rounded-full flex items-center justify-center`}
        onClick={prevSlide}
      >
        <GrFormPreviousLink size={24} />
      </button>

      <div
        className={` ${styles.sliderContainerr}  relative max-w-4xl w-full mx-auto`}
      >
        <div className={`flex`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={` ${styles.imageContainerr} flex-none  ${
                index === currentSlide ? "" : "hidden"
              } transition-opacity duration-500  `}
            >
              {/* <div className={` ${styles.slider} `}> */}
              <img
                src={image}
                alt={`img${index}`}
                className={` ${styles.immg}  w-[55rem] h-[16rem] mt-[-2rem] ml-[2rem] object-auto mb-4 rounded-lg`}
              />
         
            </div>
          ))}
        </div>

        <button
          className={` ${styles.slider__btnNn} absolute text-center 
   w-10 h-10 md:w-12 md:h-12  lg:w-16 lg:h-16  right-[-20rem] top-1/2 
   transform -translate-y-1/2 text-white rounded-full flex items-center justify-center`}
          onClick={nextSlide}
        >
          <div className="next-btn">
            <GrFormNextLink size={24} />
          </div>
        </button>

        <div className="flex justify-center ml-[5rem] mt-[-1rem]">
          {images.map((_, index) => (
            <button
              key={index}
              className={` w-4 h-4 bg-gray-400 rounded-full  *:
                   mt-[6rem] active:bg-black
                
                  mx-[0.5rem] focus:outline-none ${
                    index === currentSlide ? "bg-yellow-500" : ""
                  }
                  `}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeedbackCards;
