import Logo from "../../ui/Logo";
import NavBar from "../../ui/NavBar";
import styles from "./FixedMenu.module.css";

function FixedMenu() {
  return (
    <div className={`${styles.container}`}>
    
    
        {/* <Logo /> */}
     
      <NavBar />
    </div>
  );
}

export default FixedMenu;
