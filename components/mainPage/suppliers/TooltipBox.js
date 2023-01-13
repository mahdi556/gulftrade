import Link from "next/link";
import styles from "../../mainPage/Main.module.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faEdit,
  faStar,
  faImage,
  faCheck,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

const TooltipBox = () => {
  return (
    <>
      <section className={`${styles.tooltipBox}`}>
        <div className="d-flex flex-column">
          <div className={`  ${styles.trustScoreContainer}`}>
            <div className={`d-flex ${styles.trustScoreBox}`}>
              <div
                className={`d-flex align-items-center ${styles.trustScoreText}`}
              >
                TRUST SCORE
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ fontSize: 14, color: "#555" }}
                  className="ms-1"
                />
              </div>
            </div>
            <div className={` ${styles.trustScore}`}>
              <span className={` ${styles.trustScorePoint}`}>4.2</span> Of 5.0
            </div>
          </div>
          <Link href="#">
            <button className={` btn mt-4 ${styles.siteBtn}`}>
              {" "}
              Rate this Member
            </button>
          </Link>
          <Link href="#">
            <div className="d-flex align-items-start justify-content-center mt-2">
              <FontAwesomeIcon
                icon={faEdit}
                style={{ fontSize: 14, color: "#00a9ea" }}
                className="me-1"
              />
              <span className={styles.seeReviewsLink}>See all reviews (0)</span>
            </div>
          </Link>
          <div
            className={`d-flex flex-column mt-4 ${styles.sellerAchievmentContainer}`}
          >
            <div className={`${styles.sellerAchievementsTitle}`}>
              MEMBER'S ACHIEVEMENTS
            </div>
            <div className="d-flex flex-column align-items-start mt-2 px-3 ">
              <div className="d-flex align-items-start">
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ fontSize: 11, color: "#009900" }}
                  className="me-1"
                />{" "}
                <span className={styles.sellerAchives}>
                  Member since Jul, 2018
                </span>
              </div>
              <div className="d-flex align-items-center mt-1">
                <FontAwesomeIcon
                  icon={faImage}
                  style={{ fontSize: 13, color: "#009900" }}
                  className="me-1"
                />{" "}
                <span className={styles.sellerAchives}>
                  Products With Images
                </span>
              </div>
              <div className="d-flex align-items-start mt-1">
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  style={{ fontSize: 14, color: "#009900" }}
                  className="me-1"
                />{" "}
                <span className={styles.sellerAchives}>Verified Documents</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TooltipBox;
