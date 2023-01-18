import Flag from "components/buyLead/Flag";
import Verified from "components/mainPage/Buyers/Verified";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Contact from "components/buyLead/Contact";
import { Rate } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import styles from "components/member/Member.module.css";
import MemberData from "./MemberData";
import SeoLinks from "components/buyLead/common/SeoLinks";

const Member = () => {
  return (
    <>
      <div className="row col-12">
        <div className="col-9">
          <div className="col-10 pe-5 ms-auto">
            <div className="d-flex flex-column   ">
              <h1 className={`text-center ${styles.companyTitle} mt-4  `}>
                Al Blessed Foodstuff Trading LLC
              </h1>
              <div className="d-flex align-items-start mx-auto">
                <Rate
                  defaultValue={3}
                  size="xs"
                  style={{
                    fontSize: 12,
                    width: 80,
                  }}
                  color="blue"
                />
                <span className={`${styles.proRate}  `}>(4.6)</span>
              </div>
              <div className={`d-flex align-items-start mb-2 ms-2 `}>
                <FontAwesomeIcon
                  className="me-1"
                  icon={faStar}
                  style={{ fontSize: 15, color: "goldenrod" }}
                />
                <span className={styles.goldMember}>GOLD Member,</span>
              </div>
              <div
                className={`d-flex justify-content-between align-items-center pt-1  ${styles.goldLine}`}
              >
                <Flag country="Member From United Arab Emirates" fl="ae" />
                <div className="d-flex ms-auto me-5">
                  <Verified />
                  <small>Apr-02-22</small>
                </div>
              </div>
              <MemberData />
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
export default Member;
