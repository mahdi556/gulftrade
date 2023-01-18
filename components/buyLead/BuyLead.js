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
import Description from "components/buyLead/Description";
import Link from "next/link";
import Contact from "components/buyLead/Contact";
import SellerResponse from "components/buyLead/SellerResponse";
import BePremium from "components/buyLead/BePremium";
import SimilarWanted from "components/buyLead/SimilarWanted";
import Like from "./Like";

const BuyLead = () => {
  return (
    <>
      <div className="row col-12">
        <div className="col-9">
          <div className="col-10 pe-5 ms-auto">
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
              <Like />
              <SellerResponse />
              <div className={`text-right siteBlue fs-6 mt-2 `}>
                This lead has received 1 more responses
              </div>
              <BePremium />
              <div className={`text-right siteBlue fs-6 my-4 `}>
                <Link href="#">Buyer Of Artificial Jewellery</Link>{" "}
              </div>
              <div className="row mt-5">
                <h4
                  className="text-black "
                  style={{
                    fontSize: 18,
                  }}
                >
                  More Items Similiar to: Wanted : Imitation Jewellery
                </h4>
              </div>
              <SimilarWanted />
              <SimilarWanted />
              <SimilarWanted />
              <SimilarWanted />
              <SimilarWanted />
              <div className="row mt-2 mb-5">
                <Link href="#" className="siteBlue">
                  Search More Like "Wanted : Gloves Like Leather, Nitrile
                  Gloves"
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <Contact />
        </div>
      </div>
    </>
  );
};
export default BuyLead;
