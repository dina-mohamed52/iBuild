/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import styles from "./ProjectsDetails.module.css";
import Spinner from "../../ui/Spinner";

function ProjectsDetails({ project, onClose, detailsLoading }) {
  const [imageUrls, setImageUrls] = useState([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    if (!project) {
      return;
    }

    let urls = [];
    project.forEach((obj) => {
      const imageKeys = Object.keys(obj).filter(
        (key) => key.startsWith("img") && obj[key] !== null
      );
      const objUrls = imageKeys.map((key) => obj[key]);
      urls = [...urls, ...objUrls];
    });

    setImageUrls(urls);
  }, [project]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles.container}`)) {
        onClose();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            const src = image.getAttribute("data-src");
            image.src = src;
            observer.unobserve(image);
          }
        });
      },
      { rootMargin: "50px 0px" } // Adjust root margin as needed
    );

    imagesRef.current.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, [imageUrls]);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling on the background content
    return () => {
      document.body.style.overflow = ""; // Re-enable scrolling on the background content when component is unmounted
    };
  }, []);

  return (
    <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50">
      <div className={` ${styles.container} `}>
        <div className=" mr-[-1.5rem] flex items-end justify-end  ">
          <button className={`${styles.btn}`} onClick={onClose}>
            &times;
          </button>
        </div>
        {detailsLoading && <Spinner />}
        {/* Spinner while loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              data-src={imageUrl}
              alt={`Image ${index}`}
              className={`${styles.imgg} w-full`}
              style={{ display: detailsLoading ? "none" : "block" }} // Hide images while loading
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsDetails;
