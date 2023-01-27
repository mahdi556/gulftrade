import styles from "components/user/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const RightLoginBox = () => {
  return (
    <>
      <div className="col-6 ps-4">
        <div className={`${styles.loginCard} d-flex flex-column mt-4 `}>
          <div className={`${styles.loginCardHead2} col-12`}>
            <h3 className={`${styles.loginCardTitle} text-white px-3  pt-2 `}>
              You must log in to
            </h3>
          </div>
          <div className={`px-3 mt-3 ${styles.loginCardBody}`}>
            <ul className="list-unstyled">
              <li className=" d-flex align-items-start mb-2">
                <FontAwesomeIcon
                  className="me-2  text-success pt-1"
                  icon={faCheck}
                  style={{ fontSize: 13 }}
                />
                Use your Inquiry Manager to contact buyers
              </li>
              <li className=" d-flex align-items-start mb-2">
                <FontAwesomeIcon
                  className="me-2  text-success pt-1"
                  icon={faCheck}
                  style={{ fontSize: 13 }}
                />
                Post a Buy Requirement and contact your target suppliers
              </li>
              <li className=" d-flex align-items-start mb-2">
                <FontAwesomeIcon
                  className="me-2  text-success pt-1"
                  icon={faCheck}
                  style={{ fontSize: 13 }}
                />
                Edit your profile
              </li>
              <li className=" d-flex align-items-start mb-2">
                <FontAwesomeIcon
                  className="me-2  text-success pt-1"
                  icon={faCheck}
                  style={{ fontSize: 13 }}
                />
                Upgrade your Membership
              </li>
              <li className=" d-flex align-items-start mb-2">
                <FontAwesomeIcon
                  className="me-2  text-success pt-1"
                  icon={faCheck}
                  style={{ fontSize: 13 }}
                />
                Change your password
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default RightLoginBox;
