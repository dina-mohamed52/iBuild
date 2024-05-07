import { useRef, useState } from "react";
import styles from "./Feedback2.module.css";
import img1 from "../../assets/images/feedback/WhatsApp Image 2024-05-06 at 12.21.09 AM (1).jpeg";
import img2 from "../../assets/images/feedback/WhatsApp Image 2024-05-06 at 12.21.09 AM (2).jpeg";
import img3 from "../../assets/images/feedback/WhatsApp Image 2024-05-06 at 12.21.09 AM.jpeg";
import Logo from "../../ui/Logo";

function Feedback2() {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3];

  const scrollToSlide = (index) => {
    if (containerRef.current) {
      setCurrentSlide(index);
      containerRef.current.scrollTo({
        left: index * containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <Logo />
      <h1 className={`${styles.heading} italic`}>
        Echoes of Excellence: Customer Feedback
      </h1>
      {/* Images */}
      <div className={styles.imageContainer} ref={containerRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`img${index}`}
            className={`${styles.image} ${
              index === currentSlide ? styles.active : ""
            }`}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${
            currentSlide === 0 ? styles.activeButton : ""
          }`}
          onClick={() => scrollToSlide(0)}
        >
          1
        </button>
        <button
          className={`${styles.button}
                  
           ${currentSlide === 1 ? styles.activeButton : ""}`}
          onClick={() => scrollToSlide(1)}
        >
          2
        </button>
        <button
          className={`${styles.button} ${
            currentSlide === 2 ? styles.activeButton : ""
          }`}
          onClick={() => scrollToSlide(2)}
        >
          3
        </button>
      </div>
    </div>
  );
}

export default Feedback2;
