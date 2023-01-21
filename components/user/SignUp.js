import styles from "components/user/User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "context/AuthContext";
import { Countries } from "components/staticData/Country";
import { BusinessType, AnnualSales } from "components/staticData/Business";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    c_password: "",
    name: "",
    companyName: "",
    postalAddress: "",
    city: "",
    postalCode: "",
    state: "",
    country_id: "",
    contactPerson: "",
    designation: "",
    cellphone: "",
    landline: "",
    fax: "",
    website: "",
    yearEstablished: "",
    certifications: "",
    supplierOf: "",
    buyerOf: "",
    services: "",
    businessId: "",
    annualSalesId: "",
  });
  const { register } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (userName == "" || password == "" || c_password == "") {
    //   toast.error("all fildes is required");
    //   return;
    // }
    // if (password !== c_password) {
    //   toast.error("password do not match");
    //   return;
    // }
    register(data);
  };
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
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group col-6 mb-3">
                  <label htmlFor="username" className="control-label mb-1">
                    User Name
                  </label>
                  <input
                    className="form-control"
                    id="username"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    type="email"
                  />
                </div>
                <div className="form-group col-6 mb-3">
                  <label className="control-label mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    id="password"
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                  />
                </div>
                <div className="form-group col-6 mb-3">
                  <label className="control-label mb-1" htmlFor="c_password">
                    Confirm Password
                  </label>
                  <input
                    className="form-control"
                    id="c_password"
                    onChange={(e) => setData({ ...data, c_password: e.target.value })}
                  />
                </div>
                <div className={`${styles.titleCard} mt-3 mb-4`}>
                  <h4 className="titr">Your Contact Details</h4>
                </div>
                <div className="row">
                  <div className="form-group col-12 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Your Name
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-12 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Your Company Name
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, companyName: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-12 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Postal Address
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      cols=""
                      onChange={(e) =>
                        setData({ ...data, postalAddress: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      City
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, city: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Zip/Postal Code
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, postalCode: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      State/ Province
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, state: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Country
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Select Your Country</option>
                      {Countries.map((item, key) => (
                        <option
                          value={item.id}
                          key={item.id}
                          onClick={() => setData({ ...data, country_id: item.id })}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Contact Person
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, contactPerson: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Designation / Position in the Company
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, designation: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-12 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Mobile Number
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, cellphone: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-12 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Landline/Fixedline Number(Country Code -Area Code -
                      Number)
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, landline: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Fax Number
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, fax: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Website Address
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, website: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Year established
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, yearEstablished: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Certifications Your Company Received
                    </label>
                    <input
                      className="form-control"
                      onChange={(e) =>
                        setData({ ...data, certifications: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-12 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      We are Supplier of:
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      cols=""
                      onChange={(e) =>
                        setData({ ...data, supplierOf: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="form-group col-12 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      We are Buyer of:
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      cols=""
                      onChange={(e) =>
                        setData({ ...data, buyerOf: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="form-group col-12 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      We are Provide the following trade services:
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      cols=""
                      onChange={(e) =>
                        setData({ ...data, services: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Your Primary Business:
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Select on option</option>
                      {BusinessType.map((item, key) => (
                        <option
                          value={item.id}
                          key={item.id}
                          onClick={() => setData({ ...data, businessId: item.id })}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group col-6 mb-4">
                    <label className="control-label mb-1" htmlFor="">
                      Your approx Annual Sales:
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Select one option</option>
                      {AnnualSales.map((item, key) => (
                        <option
                          value={item.id}
                          key={item.id}
                          onClick={() => setData({ ...data, annualSalesId: item.id })}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex mb-5">
                    <button
                      className="btn btn-primary bg-siteBlue mx-auto"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
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
