import Slider from "react-slick";
import styles from "./Carousel.module.css";
//img
import img1 from "../../assets/images/NW3.png";
import img2 from "../../assets/images/NW4.png";
import img3 from "../../assets/images/2.png";
import img4 from "../../assets/images/dsf.png";
import img5 from "../../assets/images/1.png";
import img6 from "../../assets/images/3.png";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    fade: true,
    cssEase: "linear",
    customPaging: function () {
      return <div></div>;
    },
    appendDots: (dots) => (
      <div
        style={{
          bottom: "10px",
          right: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    beforeChange: function () {
      const slider = document.querySelector(".slick-slider");
      if (slider) {
        slider.classList.add("zoomed");
        setTimeout(() => {
          slider.classList.remove("zoomed");
        }, 800);
      }
    },
  };

  return (
    <Slider {...settings}>
      <div className={`${styles.zoomOut} h-screen`}>
        <img src={img1} alt="slide1" className="object-cover h-full w-full" />
      </div>
      <div className={`${styles.zoomOut} h-screen`}>
        <img src={img4} alt="slide2" className="object-cover h-full w-full" />
      </div>
      <div className={`${styles.zoomOut} h-screen`}>
        <img src={img5} alt="slide3" className="object-cover h-full w-full" />
      </div>
      <div className={`${styles.zoomOut} h-screen`}>
        <img src={img2} alt="slide4" className="object-cover h-full w-full" />
      </div>
      <div className={`${styles.zoomOut} h-screen`}>
        <img src={img3} alt="slide5" className="object-cover h-full w-full" />
      </div>
      <div className={`${styles.zoomOut} h-screen`}>
        <img src={img6} alt="slide6" className="object-cover h-full w-full" />
      </div>
    </Slider>
  );
}

export default Carousel;
