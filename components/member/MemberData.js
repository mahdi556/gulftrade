import styles from "components/member/Member.module.css";
import CompanyProfile from "components/member/CompanyProfile";
import Facilities from "components/member/Facilities";
import { useState } from "react";

const MemberData = () => {
  const [tab, setTab] = useState("cp");
  return (
    <>
      <div className="d-flex justify-content-center mt-3 ">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              type=""
              className={` btn me-1   ${
                tab == 'cp' ? styles.tabBtnActive : styles.tabBtn
              }`}
              onClick={() => setTab("cp")}
            >
              Our Company
            </button>
            <button
              type=""
              className={` btn  ${
                tab == 'fa' ? styles.tabBtnActive : styles.tabBtn
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
    </>
  );
};
export default MemberData;
