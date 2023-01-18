import Link from "next/link";
import styles from "../header/Header.module.css";

const SignIn = () => {
  return (
    <>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <Link className={`dropdown-item ${styles.subMenuItem} `} href="#">
            {" "}
            <i
              className={`bi bi-box-arrow-in-right ${styles.subMenuIcon} `}
            ></i>
            Sign In
          </Link>
        </li>
        <li>
          <Link className={`dropdown-item ${styles.subMenuItem} `} href="#">
            {" "}
            <i className={`bi bi bi-pencil-square ${styles.subMenuIcon} `}></i>
            Not A Member? Free SignUp
          </Link>
        </li>
        <li>
          <Link className={`dropdown-item ${styles.subMenuItem} `} href="#">
            {" "}
            <i className={`bi bi-box-arrow-right ${styles.subMenuIcon} `}></i>
            Sign Out
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className={`dropdown-item ${styles.subMenuItem} `} href="#">
            {" "}
            <i className={`bi bi-hand-thumbs-up ${styles.subMenuIcon} `}></i>
            Become Premium Member
          </Link>
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
export default SignIn;
