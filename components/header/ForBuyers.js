import Link from "next/link";
import styles from "../header/Header.module.css";

const ForBuers = () => {
  return (
    <>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <Link className={`dropdown-item ${styles.subMenuItem} `} href="#">
            <i className={`bi bi-window-desktop ${styles.subMenuIcon} `}></i>
            Buyers Dashboard
          </Link>
        </li>
        <li>
          <Link className={`dropdown-item ${styles.subMenuItem} `} href="#">
            {" "}
            <i className={`bi bi-cart-dash-fill ${styles.subMenuIcon} `}></i>Get
            Quotes From Suppliers
          </Link>
        </li>
        <li>
          <Link className={`dropdown-item ${styles.subMenuItem} `} href="#">
            {" "}
            <i className={`bi bi bi-envelope-fill ${styles.subMenuIcon} `}></i>
            Post Your Buy Requiements
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className={`dropdown-item ${styles.subMenuItem} `} href="#">
            {" "}
            <i className={`bi bi-globe ${styles.subMenuIcon} `}></i>Trading
            Resources
          </Link>
        </li>
      </ul>
    </>
  );
};
export default ForBuers;
