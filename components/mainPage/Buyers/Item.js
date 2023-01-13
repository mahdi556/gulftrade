import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "components/mainPage/Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Verified from "components/mainPage/Buyers/Verified";

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
          <h2 className={`${styles.proRate} ms-1`}>Wanted :</h2>
          <h2 className={`${styles.proRate} ms-1`}>Brass Honey Scrab</h2>
        </div>
       <Verified />
      </div>
      <div className="d-flex justify-content-between mb-1">
        <span className={styles.buyerSubtitle}>Buyer From India</span>
        <span className={styles.buyerDate}>Jan-06-23</span>
      </div>
      <p className={styles.buyerContent}>
        Buyer is interested to receive quotations for the following RFQ -
        Product Name: Fresh Fruits Specifications : Variety:
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
          Apple, Orange, Mango, Pineapple, Guava, Etc. Style: Fresh Quantity
          Required : 1 Twenty-Foot Container Shipping Terms : CIF Or FOB
          Destination Port : United Kingdom Payment Terms : T/T Or L/C Looking
          for suppliers from : Worldwide Contact : Danish
        </span>
      </p>
      <button className="ms-auto bg-body" onClick={() => ReedMore()} id="myBtn">
        {more ? (
          <FontAwesomeIcon
            icon={faAngleUp}
            style={{ fontSize: 21, color: "#00a9ea" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faAngleDown}
            style={{ fontSize: 21, color: "#00a9ea" }}
          />
        )}
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <i
                className={`${styles.verifiedIcon} me-1 bi bi-check-square-fill`}
              ></i>
              <h6 class="modal-title fs-6" id="staticBackdropLabel">
                VERIFIED
              </h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Buying Lead Verification. During the lead verification process,
              our agents speak with each buyer. We discard any leads where:
              Buyer is seemingly fraudulent or ambiguous Value of purchase does
              not meet minimum purchase thresholds The lead lacks in other
              qualitative parameters Member Verification. During profile
              verification, our agents verify: Company Registration Certificate
              and/or Govt. Tax Ids. Profile owner's identity and address proof.
              However, you are still required to carry out complete and thorough
              due diligence before dealing with any buyer or seller you meet on
              our website.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
