import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "../../mainPage/Main.module.css";
import { useState } from "react";
import Item from "./Item";

const Buyers = () => {
  const [more, setMore] = useState(false);
  const ReedMore = () => {
    more ? setMore(false) : setMore(true);
  };
  return (
    <>
      <div className="d-flex flex-column mt-5 m-4">
        <div
          className={`d-flex align-items-center ${styles.catergoryTitleContainer} `}
        >
          <span className={styles.catergoryTitle}>
            Food and Agricultural Product Buyers
          </span>
          <span className={styles.seeMore}>See more</span>
        </div>
        <div className="row row-cols-2 gx-5 px-3">
          <div className="d-flex flex-column  ">
            <Item />
          </div>
          <div className="d-flex flex-column  ">
            <Item />
          </div>
          <div className="d-flex flex-column">
            <Item />
          </div>
          <div className="d-flex flex-column ">
            <Item />
          </div>
        </div>
      </div>
    </>
  );
};
export default Buyers;
