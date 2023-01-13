import Buyers from "./Buyers/Buyers";
import Slider from "./Slider";
import Suppliers from "./suppliers/Suppliers";
import styles from "../mainPage/Main.module.css";
import Region from "./Region/Region";

const MainPage = () => {
  return (
    <>
      <Slider />
      <div className={`${styles.section}`}>
        <Suppliers />
        <Buyers />
      </div>
      <div className={`${styles.section}`}>
        {/* <Suppliers /> */}
        <Buyers />
      </div>
      <div className={`${styles.section}`}>
        <Region />
      </div>
    </>
  );
};
export default MainPage;
