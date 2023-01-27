import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "components/user/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
const ResetPassword = ({token}) => {
  const [password, setPassword] = useState(null);
  const [c_password, setC_Password] = useState(null);
  const [email, setEmail] = useState(null);
  const { resetPassword, loading } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (c_password == "" || password == "") {
      toast.error("all fildes is required");
      return;
    }
    resetPassword({ password, c_password,token,email });
  };
  return (
    <>
      <div className="col-12">
        <div className={`  col-10 mx-auto mt-3`}>
          <div className={`d-flex align-items-center ${styles.titleCard}`}>
            TRADEGULF.COM -{" "}
            <span className={`${styles.membershipTitle}`}>RESET PASSWORD</span>
          </div>
          <div className="d-flex mt-1 border-bottom pb-3">
            <div className="d-flex flex-column col-md-6 mt-4 pe-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="col-10 mb-3">
                  <label for="">Email</label>
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
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-10 mb-3">
                  <label for="">New Password</label>
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
                      type="Password"
                      placeholder="password"
                    />
                  </div>
                </div>
                <div className="col-10 mb-3">
                  <label for="">Confirm New Password</label>
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
                      onChange={(e) => setC_Password(e.target.value)}
                      type="Password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column  col-10 mb-3 ">
                  <button
                    className="btn btn-primary bg-siteBlue mx-auto mb-4"
                    type="submit"
                    disabled={loading}
                  >
                    Submit
                    {loading && (
                      <div
                        className="spinner-border spinner-border-sm text-whith ms-2"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
