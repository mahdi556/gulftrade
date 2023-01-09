import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "../../mainPage/Main.module.css";


const Item = () => {
         const [more, setMore] = useState(false);
        const ReedMore = () => {
          more ? setMore(false) : setMore(true);
        };
  return (
    <>
      <div className="d-flex me-5 align-items-center">
        <span className={`fi fi-gr ${styles.flag}`}></span>
        <div className="d-flex ms-4 me-auto">
          <h5 className={`${styles.proRate} ms-1`}>Wanted :</h5>
          <h6 className={`${styles.proRate} ms-1`}>Brass Honey Scrab</h6>
        </div>
        <div className="d-flex align-items-center">
          <i
            className={`${styles.proRate} me-1 bi bi-check-square-fill text-success`}
          ></i>
          <h4 className={`${styles.verified} me-1 `}>Verified</h4>
          <i className="bi bi-question-circle"></i>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <h4 className="">Buyer From India</h4>
        <h6>Jan-06-23</h6>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
        <span
          style={{
            display: more ? "none" : "",
          }}
        >
          ...
        </span>
        <span
          style={{
            display: more ? "" : "none",
          }}
        >
          erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
          congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
          aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim
          ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec
          vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
          non fermentum. Sed dapibus pulvinar nibh tempor porta.
        </span>
      </p>
      <button className="ms-auto" onClick={() => ReedMore()} id="myBtn">
        {more ? (
          <i class="bi bi-arrow-down-short fs-3 text-primary"></i>
        ) : (
          <i class="bi bi-arrow-up-short fs-3 text-primary"></i>
        )}
      </button>
    </>
  );
};
export default Item;
