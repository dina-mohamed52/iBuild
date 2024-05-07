/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

export function CustomSelect({ options, name, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
      window.addEventListener("keydown", handleEscapeKey);
    } else {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <div
      className="flex  items-center mb-[-4rem] justify-end ml-[8rem] mt-[-1rem] p-[2rem]
      
          relative"
      ref={dropdownRef}
    >
      <span className="capitalize  font-medium text-2xl text-black mr-2">
        filter by location
      </span>
      <div
        className={`bg-[#000000c5]
            hover:bg-[rgba(204, 169, 93, 0.945)] capitalize 
          border border-yellow-500 rounded-md  text-lg text-[#cca95dc5]
          cursor-pointer p-[1rem] w-[14rem]
        `}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        role="button" // Add role attribute
      >
        {value || name}
      </div>
      {isOpen && (
        <div
          className={`absolute mt-[13.5rem] z-10 w-[14rem]  bg-[#000000c5] text-[#cca95dc5] border border-[#cca95dc5] rounded-md overflow-y-auto max-h-40`}
        >
          {options.map((option, index) => (
            <div
              key={index} // Use the index as the key if option.value is not unique
              className="px-4 py-2  cursor-pointer hover:bg-[#000000c1]"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
