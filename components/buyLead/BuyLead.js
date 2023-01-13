import Flag from "components/buyLead/Flag";
import Verified from "components/mainPage/Buyers/Verified";
import styles from "components/buyLead/BuyLead.module.css";
import Expire from "components/buyLead/Expire";
import DetailItem from "components/buyLead/DetailItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCartPlus,
  faCertificate,
  faGlobe,
  faShip,
  faThumbsDown,
  faThumbsUp,
  faUsd,
} from "@fortawesome/free-solid-svg-icons";
import Description from "./Description";
import Link from "next/link";
import Contact from "./Contact";

const BuyLead = () => {
  return (
    <>
      <div className="row col-12">
        <div className="col-8">
          <div className="col-10 ms-auto">
            <div className="d-flex flex-column ">
              <h1 className={`text-center ${styles.proRate} my-3 ms-1`}>
                Wanted: Wheat Flour
              </h1>
              <div
                className={`d-flex justify-content-between align-items-center pt-1  ${styles.topSection}`}
              >
                <Flag country="Buyer From United Arab Emirates" fl="ae" />
                <Verified />
                <Expire />
              </div>
              <div className={`row mt-5 col-12 ${styles.leadDetailes}`}>
                <DetailItem
                  icon={faGlobe}
                  title="Destination"
                  value="Jebel Ali,United Arab Emirates"
                />
                <DetailItem
                  icon={faCalendar}
                  title="Date:"
                  value="Jan 13,2013"
                />
                <DetailItem
                  icon={faUsd}
                  title="Target Price"
                  value="Negotiable"
                />
                <DetailItem
                  icon={faCartPlus}
                  title="Quantity Required"
                  value="10-20 twenty-foot container"
                />
                <DetailItem
                  icon={faCertificate}
                  title="Payment Terms"
                  value="To be discussed with supplier"
                />
                <DetailItem icon={faShip} title="Shipping Terms" value="CIF" />
                <DetailItem
                  icon={faGlobe}
                  title="Looking for suppliers from"
                  value="Worldwide"
                />
              </div>
              <Description />
              <div
                className={`d-flex justify-content-end mt-2 pb-3 ${styles.rate}`}
              >
                <Link href="#">
                  {" "}
                  <FontAwesomeIcon
                    className="me-1"
                    icon={faThumbsUp}
                    style={{ fontSize: 15, color: "#090" }}
                  />
                  Rate This Member
                </Link>
                <Link href="#" className="ms-3">
                  {" "}
                  <FontAwesomeIcon
                    className="me-1"
                    icon={faThumbsDown}
                    style={{ fontSize: 15, color: "#a94442" }}
                  />
                  File a complaint
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Contact />
        </div>
      </div>
    </>
  );
};
export default BuyLead;
