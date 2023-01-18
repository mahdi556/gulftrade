import styles from "components/member/Member.module.css";
import CompanyProfile from "components/member/CompanyProfile";
import Facilities from "components/member/Facilities";
import { useState } from "react";
import AddProduct from "components/user/AddProduct";

const Dashboard = () => {
  const [tab, setTab] = useState("cp");
  return (
    <>
      <div className="d-flex justify-content-center mt-3 ">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              type=""
              className={` btn me-1   ${
                tab == "cp" ? styles.tabBtnActive : styles.tabBtn
              }`}
              onClick={() => setTab("cp")}
            >
              Your Membership
            </button>
          </li>
          <li className="nav-item">
            <button
              type=""
              className={` btn me-1   ${
                tab == "cp" ? styles.tabBtnActive : styles.tabBtn
              }`}
              onClick={() => setTab("cp")}
            >
               Company
            </button>
          </li>
          <li className="nav-item">
            <button
              type=""
              className={` btn me-1   ${
                tab == "cp" ? styles.tabBtnActive : styles.tabBtn
              }`}
              onClick={() => setTab("cp")}
            >
              HomePage
            </button>
          </li>
          <li className="nav-item">
            <button
              type=""
              className={` btn me-1   ${
                tab == "cp" ? styles.tabBtnActive : styles.tabBtn
              }`}
              onClick={() => setTab("pr")}
            >
              Products
            </button>
          </li>
          <li className="nav-item">
            <button
              type=""
              className={` btn me-1   ${
                tab == "cp" ? styles.tabBtnActive : styles.tabBtn
              }`}
              onClick={() => setTab("cp")}
            >
              Buy Requirement
            </button>
          </li>
          <li className="nav-item">
            <button
              type=""
              className={` btn me-1   ${
                tab == "cp" ? styles.tabBtnActive : styles.tabBtn
              }`}
              onClick={() => setTab("cp")}
            >
              Management
            </button>
          </li>
          <li>
            <button
              type=""
              className={` btn  ${
                tab == "fa" ? styles.tabBtnActive : styles.tabBtn
              }`}
              onClick={() => setTab("fa")}
            >
              Facilities
            </button>
          </li>
        </ul>
      </div>
      {tab == "cp" && <CompanyProfile />}
      {tab == "fa" && <Facilities />}
      {tab == "pr" && <AddProduct />}
    </>
  );
};
export default Dashboard;
