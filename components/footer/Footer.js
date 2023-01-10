import Link from "next/link";
import styles from "../mainPage/Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center bg-body-secondary  mb-2">
        <div className="d-flex mt-3">
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
          |
          <Link href="#" className="ms-1 me-3">
            About US
          </Link>
        </div>

        <div className="d-flex mt-3">
          <div className={` ${styles.social}`}>
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ fontSize: 22, color: "#fff" }}
            />
          </div>
          <div className={` ${styles.social}`}>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ fontSize: 22, color: "#fff" }}
            />
          </div>
          <div className={` ${styles.social}`}>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 22, color: "#fff" }}
            />
          </div>
          <div className={` ${styles.social}`}>
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: 22, color: "#fff" }}
            />
          </div>
        </div>
        <div>
          <h6 className="mt-2">&#169; TradeGulf.com</h6>
        </div>
      </div>
    </>
  );
};
export default Footer;
