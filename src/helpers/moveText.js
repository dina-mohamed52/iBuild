import { useEffect, useState } from "react";

function useSectionVisibility(section) {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const top = sectionElement.getBoundingClientRect().top;
        setIsSectionVisible(top < window.innerHeight && top >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [section]);

  return isSectionVisible;
}

export default useSectionVisibility;
