import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "components/buyLead/BuyLead.module.css";

const DetailItem = ({icon,title,value}) => {
  return (
    <>
      <div className="col-6 mb-3">
        <ul>
          <li className={`d-flex align-items-center ${styles.liDetail}`}>
            <FontAwesomeIcon
              icon={icon}
              style={{ fontSize: "2em", color: "#666" }}
            />
            <span className={` ms-2 ${styles.detailTitle}`}>{title}</span>
            <span className={`ms-1 ${styles.detailValue}`}>
               {value}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default DetailItem;
