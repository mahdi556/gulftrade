import styles from "components/member/Member.module.css";

const MemberTabs = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-3 ">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button type="" className={` btn me-1 ${styles.tabBtn}`}>
              Our Company
            </button>
            <button type="" className={` btn ${styles.tabBtn}`}>
              Facilities
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MemberTabs;
