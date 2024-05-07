import FeedbackCards from "../component/FeedBack/FeedbackCards";
import styles from "./FeedBack.module.css"
function FeedBack() {
  return (
    <>
      <div
        className={` ${styles.textcontainer} ${styles.container} text-center   `}
      >
        <h1 className="   capitalize pt-[3rem] pb-[3.5rem] mb-[-2rem] text-5xl mt-[0] text-[beige] italic">
          {" "}
          {/* customers feedback */}
        </h1>
        <div>
          <FeedbackCards />
        </div>
      </div>
    </>
  );
}

export default FeedBack
