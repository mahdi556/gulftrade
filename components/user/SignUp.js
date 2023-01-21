import styles from "components/user/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div className="col-12">
        <div className={`  col-9 mx-auto mt-3`}>
          <div className={`d-flex align-items-center ${styles.titleCard}`}>
            TRADEGULF.COM -{" "}
            <span className={`${styles.membershipTitle}`}>
              MEMBERSHIP REGISTRATION
            </span>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column col-md-8 pe-4">
              <small className=" ms-auto mt-4">
                <span className=" text-left text-danger">
                  *All fields are mandatory unless otherwise indicated
                </span>
              </small>
              <div className={`${styles.titleCard} mt-2 mb-4`}>
                <h4 className="titr">Create your Login</h4>
              </div>
              <div className="form-group col-6 mb-3">
                <label className="control-label mb-1" for="">
                  User Name
                </label>
                <input className="form-control" />
              </div>
              <div className="form-group col-6 mb-3">
                <label className="control-label mb-1" for="">
                  Password
                </label>
                <input className="form-control" />
              </div>
              <div className="form-group col-6 mb-3">
                <label className="control-label mb-1" for="">
                  Confirm Password
                </label>
                <input className="form-control" />
              </div>
              <div className={`${styles.titleCard} mt-3 mb-4`}>
                <h4 className="titr">Your Contact Details</h4>
              </div>
              <div className="row">
                <div className="form-group col-12 mb-4">
                  <label className="control-label mb-1" for="">
                    Your Company Name
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-12 mb-4">
                  <label className="control-label mb-1" for="">
                    Postal Address
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    cols=""
                  ></textarea>
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    City
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Zip/Postal Code
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    State/ Province
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Country
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Your Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Contact Person
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Designation / Position in the Company
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-12 mb-4">
                  <label className="control-label mb-1" for="">
                    Email Address
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-12 mb-4">
                  <label className="control-label mb-1" for="">
                    Mobile Number
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-12 mb-4">
                  <label className="control-label mb-1" for="">
                    Landline/Fixedline Number(Country Code -Area Code - Number)
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Fax Number
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Website Address
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Year established
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Certifications Your Company Received
                  </label>
                  <input className="form-control" />
                </div>
                <div className="form-group col-12 mb-4">
                  <label className="control-label mb-1" for="">
                    We are Supplier of:
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    cols=""
                  ></textarea>
                </div>
                <div className="form-group col-12 mb-4">
                  <label className="control-label mb-1" for="">
                    We are Buyer of:
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    cols=""
                  ></textarea>
                </div>
                <div className="form-group col-12 mb-4">
                  <label className="control-label mb-1" for="">
                    We are Provide the following trade services:
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    cols=""
                  ></textarea>
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Your Primary Business:
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Your Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>{" "}
                </div>
                <div className="form-group col-6 mb-4">
                  <label className="control-label mb-1" for="">
                    Your approx Annual Sales:
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Your Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>{" "}
                </div>
                <div className="d-flex mb-5">
                  <button
                    className="btn btn-primary bg-siteBlue mx-auto"
                    type=""
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 ps-4">
              <div className={`${styles.loginCard} d-flex flex-column mt-4 `}>
                <div className={`${styles.loginCardHead} col-12`}>
                  <h3 className={`${styles.loginCardTitle} px-3 py-2`}>
                    Join a community of Over a million Suppliers world wide
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
                      get Buy Requirements and contact details of Buyers and
                      Importers from your Business area on regular basis
                    </li>
                    <li className=" d-flex align-items-start mb-2">
                      <FontAwesomeIcon
                        className="me-2  text-success pt-1"
                        icon={faCheck}
                        style={{ fontSize: 13 }}
                      />
                      filter and get only those Buy Requirements which interest
                      you the most
                    </li>
                    <li className=" d-flex align-items-start mb-2">
                      <FontAwesomeIcon
                        className="me-2  text-success pt-1"
                        icon={faCheck}
                        style={{ fontSize: 13 }}
                      />
                      get access to over 2,000 latest Buy Requirements added
                      every week
                    </li>
                  </ul>
                  <div className="d-flex flex-column   align-items-center mb-3">
                    <b>Already A Member ?</b>
                    <Link href="#">
                      <button
                        className="btn  btn-success  border border-0"
                        type=""
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
