import styles from "components/buyLead/BuyLead.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";

const Expire = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon
          icon={faHourglassEnd}
          style={{ fontSize: 13, color: "#00a9ea" }}
        />
        <span className={`ms-1 ${styles.expires}`}>Expires in 90 Days</span>
      </div>
    </>
  );
};
export default Expire;
