
import ContactForm from "../../component/contacts/ContactsForm";
import ContactsHeader from "../../component/contacts/ContactsHeader";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <>
    <div
      className={`${styles.container} md:flex md:items-start md:justify-around`}
      >
      <ContactsHeader />
      <ContactForm />
    </div>
      
      </>
  );
};

export default Contacts;
