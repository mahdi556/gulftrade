import Link from "next/link";
import { useContext } from "react";
import AuthContext from "context/AuthContext";
import styles from "../header/Header.module.css";

const SignIn = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          {user ? (
            <Link className={`dropdown-item    ${styles.subMenuItem}`} href="#">
              <i
                className={`bi bi bi-pencil-square ${styles.subMenuIcon} `}
              ></i>
              Edit Profile
            </Link>
          ) : (
            <Link className={`dropdown-item ${styles.subMenuItem} `} href="/user/login">
              {" "}
              <i
                className={`bi bi-box-arrow-in-right ${styles.subMenuIcon} `}
              ></i>
              SignIn
            </Link>
          )}
        </li>
        <li>
          {user ? (
            <>
              <div
                className={`dropdown-item text-secondary ${styles.subMenuIteminActive} ${styles.subMenuItem}`}
              >
                <i
                  className={`bi bi bi-pencil-square ${styles.subMenuIcon} `}
                ></i>
                Not A Member? Free SignUp
              </div>
            </>
          ) : (
            <Link className={`dropdown-item ${styles.subMenuItem}`} href="/user/new">
              {" "}
              <i
                className={`bi bi bi-pencil-square ${styles.subMenuIcon} `}
              ></i>
              Not A Member? Free SignUp
            </Link>
          )}
        </li>
        <li>
          {!user ? (
            <div
              className={`dropdown-item text-secondary ${styles.subMenuIteminActive} ${styles.subMenuItem}`}
            >
              <i className={`bi bi-box-arrow-right  me-1`}></i>
              Sign Out
            </div>
          ) : (
            <Link
              className={`dropdown-item ${styles.subMenuItem} `}
              href="#"
              onClick={() => logout()}
            >
              <i className={`bi bi-box-arrow-right me-1 ${styles.subMenuIcon} `}></i>
              Sign Out
            </Link>
          )}
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
