import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "../../mainPage/Main.module.css";

const Flag = ({fl,country}) => {
  return (
    <>
      <div className="d-flex align-items-center mt-4">
        <span className={`fi fi-${fl} ${styles.flagList}`}></span>
        <h6 className={`ms-1 ${styles.flagList}`}>{country}</h6>
      </div>
    </>
  );
};
export default Flag;
