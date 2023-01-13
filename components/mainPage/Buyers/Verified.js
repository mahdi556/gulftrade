import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "components/mainPage/Main.module.css";
const Verified = () => {
  return (
    <>
      <div
        className="d-flex align-items-center me-5 pointer"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i
          className={`${styles.verifiedIcon} me-1 bi bi-check-square-fill`}
        ></i>
        <h4 className={`${styles.verified} me-1 `}> VERIFIED</h4>
        <i className={`bi bi-question-circle ${styles.questionCircle}`}></i>
      </div>
    </>
  );
};
export default Verified;
