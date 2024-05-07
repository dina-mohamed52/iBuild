import { useState } from "react";
import styles from "./ContactsForm.module.css"
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const ContactForm = () =>
{
  const [ formData, setFormData ] = useState( {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  } );
  const [ errors, setErrors ] = useState( {} );

  const handleChange = ( e ) =>
  {
    const { name, value } = e.target;
  
    let error = "";

    switch ( name )
    {
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        error = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( value )
          ? "Invalid email address"
          : "";
        break;
      case "phone":
        error =
          !/^\+?([0-9]{1,3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3,4})[-. ]?([0-9]{4})$/.test(
            value
          )
            ? "Invalid phone number"
            : "";
        break;
      default:
        break;
    }

    setFormData( {
      ...formData,
      [ name ]: value,
    } );

    setErrors( {
      ...errors,
      [ name ]: error,
    } );
  };

  // service_ghcnhsp (sId)
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_ghcnhsp",
          "template_6wuapow",
          e.target,
          "5mXmteFrkS7NWkXWd"
        )
        .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
          console.log("message sent");
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error(error.text);
          toast.error("Failed to send message");
        });
    }
  };

  return (
    <form
      id={styles.form}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-8 sm:max-w-lg "
    >
      <div className=" ml-[-1rem] mb-4">
        <label htmlFor="name" className="block font-bold">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name..."
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>
      <div className="mb-4 ml-[-1rem]">
        <label htmlFor="company" className="block text-gray-700 font-bold">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name (If exist)..."
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        />
      </div>
      <div className="mb-4 ml-[-1rem] ">
        <label htmlFor="email" className="block text-gray-700 font-bold">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address..."
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>
      <div className="mb-4 ml-[-1rem] ">
        <label htmlFor="phone" className="block text-gray-700 font-bold">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number..."
          className={`mt-1 block w-full px-3 py-2 border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )}
      </div>
      <div className="mb-4 ml-[-1rem]  ">
        <label htmlFor="message" className="block text-gray-700 font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          placeholder="Your question or book an appointment..."
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
