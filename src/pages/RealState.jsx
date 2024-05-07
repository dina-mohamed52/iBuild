import { TbArrowBack } from "react-icons/tb";
import Logo from "../ui/Logo";
import { useNavigate } from "react-router-dom";
import styles from "./RealState.module.css";

function RealState() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <Logo />
      <div
        className={` ${styles.container} text-white flex flex-col items-center justify-center h-screen`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center">
          Coming Soon<span className={`${styles.loader} ml-[38rem]`}></span>
        </h1>
        <div className="mt-8 flex items-center justify-center">
          <button className="text-xl  p-[1.5rem] font-medium ml-2" onClick={handleNavigate}>
            Back to Home Page
          </button>
          <TbArrowBack className="ml-2" size={70} />
        </div>
      </div>
    </>
  );
}

export default RealState;
