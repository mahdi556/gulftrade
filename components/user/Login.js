import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "components/user/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
import RightLoginBox from "./RightLoginBox";
const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, loading } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      toast.error("all fildes is required");
      return;
    }
    login({ email, password });
  };
  return (
    <>
      <div className="col-12">
        <div className={`  col-10 mx-auto mt-3`}>
          <div className={`d-flex align-items-center ${styles.titleCard}`}>
            TRADEGULF.COM -{" "}
            <span className={`${styles.membershipTitle}`}>MEMBER'S LOGIN</span>
          </div>
          <div className="d-flex mt-1 border-bottom pb-3">
            <div className="d-flex flex-column col-md-6 mt-4 pe-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="col-10 mb-3">
                  <div class="input-group ">
                    <div class="input-group-prepend d-flex ">
                      <span
                        class="input-group-text bg-white"
                        id="basic-addon1"
                        style={{
                          borderRadius: 0,
                          border: "solid 1px #ccc",
                          borderRightStyle: "none",
                        }}
                      >
                        <FontAwesomeIcon
                          className="me-1 text-muted  "
                          icon={faUser}
                        />
                      </span>
                    </div>
                    <input
                      className={`form-control  ${styles.inputLoginForm} `}
                      id="username"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-10 mb-3">
                  <div class="input-group ">
                    <div class="input-group-prepend d-flex ">
                      <span
                        class="input-group-text bg-white"
                        id="basic-addon1"
                        style={{
                          borderRadius: 0,
                          border: "solid 1px #ccc",
                          borderRightStyle: "none",
                        }}
                      >
                        <FontAwesomeIcon
                          className="me-1 text-muted  "
                          icon={faLock}
                        />
                      </span>
                    </div>
                    <input
                      className={`form-control  ${styles.inputLoginForm} `}
                      id="username"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column  col-10 mb-3 ">
                  <button
                    className="btn btn-primary bg-siteBlue mx-auto mb-4"
                    type="submit"
                    disabled={loading}
                  >
                    Login
                    {loading && (
                      <div
                        className="spinner-border spinner-border-sm text-whith ms-2"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </button>
                  <Link
                    className={`mx-auto text-center text-primary ${styles.fs15}`}
                    href={{
                      pathname: "/user/password-reset",
                      query: { type: "enterEmail" },
                    }}
                  >
                    Forgot Password ?
                  </Link>
                </div>
              </form>
            </div>
            <RightLoginBox />
          </div>
          {/* <hr /> */}
          <div className=" col-5 mt-3">
            <div className="d-flex justify-content-between align-items-start">
              <h4 className={`${styles.Title1} ps-3`}>Not a Member Yet ?</h4>
              <Link href="/user/new">
                <button className="btn btn-danger btn-sm" type="">
                  Create your Account
                </button>
              </Link>
            </div>
            <div className={` mt-3 ${styles.loginCardBody1}`}>
              <ul className="list-unstyled">
                <li className=" d-flex align-items-start mb-2">
                  <FontAwesomeIcon
                    className="me-2  text-success pt-1"
                    icon={faCheck}
                    style={{ fontSize: 13 }}
                  />
                  Join a community of over a million suppliers and exporters
                  from 210 countries.
                </li>
                <li className=" d-flex align-items-start mb-2">
                  <FontAwesomeIcon
                    className="me-2  text-success pt-1"
                    icon={faCheck}
                    style={{ fontSize: 13 }}
                  />
                  Get latest Buy requirements matching your business category on
                  your email.
                </li>
                <li className=" d-flex align-items-start mb-2">
                  <FontAwesomeIcon
                    className="me-2  text-success pt-1"
                    icon={faCheck}
                    style={{ fontSize: 13 }}
                  />
                  Post your Buy Requirement and contact all matching suppliers
                  with just a button click.
                </li>

                <li className=" d-flex align-items-start mb-2">
                  <FontAwesomeIcon
                    className="me-2  text-success pt-1"
                    icon={faCheck}
                    style={{ fontSize: 13 }}
                  />
                  <Link href="/user/new" className="text-danger">
                    Click here to become a member Now!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
