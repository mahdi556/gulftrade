import styles from "components/buyLead/BuyLead.module.css";
import Verified from "components/mainPage/Buyers/Verified";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

const SimilarWanted = () => {
  return (
    <>
      <div className={`mb-4 px-3 py-2 ${styles.similarContainer}`}>
        <div className={`d-flex borderBottom`}>
          <div className="d-flex col-6 ms-auto me-5 justify-content-between">
            <Verified />
            <span className={styles.similarDate}>Dec-28-22</span>
          </div>
        </div>
        <div className="ms-3">
          <div className="row">
            <div className="d-flex align-items-center ">
              <span className={`fi fi-ae `}></span>
              <Link href="#">
                <h2
                  className={`ms-2 ${styles.similarItemTitle}`}
                  title="Nitrile Gloves wholesale buyer from India"
                >
                  <span>Wanted : Nitrile Gloves</span>
                </h2>
              </Link>
            </div>
          </div>
          <div className="row">
            <span className={` ${styles.similarSubtitle}`}>
              Buyer From Singapore
            </span>
          </div>
          <div className={`row mt-3 me-3 ${styles.similarDescription} `}>
            <p>
              Buyer is interested to receive quotations for the following RFQ -
              Product Name: Gloves Specifications : Type: Industrial Leather
              Hand Gloves Material: Leather, Latex, Customized Leather Quantity
              Required : 1 Twenty-Foot Container Shipping Terms : FOB
              Destination Port : Singapore Payment Terms : L/C Or T/T Looking
              for suppliers from : Worldwide Contact : Chingwan
            </p>
          </div>
          <div className="d-flex mt-3 ">
            <Link href="#" className="siteBlue">Buyer Of Medical Gloves</Link>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <Link href="#" className="siteBlue">Nitrile Disposable Gloves</Link>
          </div>
          <div className="d-flex mt-4 fs15 fw-400 siteBlue">
            <Link href="#" >
              <FontAwesomeIcon
                className="me-1"
                icon={faEnvelope}
                style={{ fontSize: 16, color: "#090" }}
              />
              <span className="fs15 fw-400 siteBlue">Inqure Now</span>
              
            </Link>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <Link href="#" >
              <FontAwesomeIcon
                className="me-1"
                icon={faHeart}
                style={{ fontSize: 16, color: "#090" }}
              />
              <span className="fs15 fw-400 siteBlue"> Add to Favorites</span>
             </Link>
          </div>
        </div>
      </div>
           
    </>
  );
};
export default SimilarWanted;
