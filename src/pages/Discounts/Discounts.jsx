import { useQuery } from "react-query";
import styles from "./Discounts.module.css";
import { getDiscountApi } from "../../ApiServices/DiscountApi";
import Logo from "../../ui/Logo";

function Discounts() {
  const { data: discountData } = useQuery("Discount", getDiscountApi);

  return (
    <>
      <div className={`absolute  z-30  italic ${styles.h11}`} >

        <h1>Exclusive Offers</h1>
      </div>
    <div className={styles.container}>
      <Logo />
      <div className="flex flex-row">
        {discountData?.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles.imageContainer}`}
            >
            <img
              src={item.img1}
              alt={`Image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        {discountData?.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles.imageContainer}`}
          >
            <img
              src={item.img2}
              alt={`Image ${index + 2}`}
              className={styles.image}
              />
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        {discountData?.map((item, index) => (
          <div
          key={index}
          className={`${styles.card} ${styles.imageContainer}`}
          >
            <img
              src={item.img3}
              alt={`Image ${index + 3}`}
              className={styles.image}
              />
          </div>
        ))}
      </div>
    </div>
        </>
  );
}

export default Discounts;
