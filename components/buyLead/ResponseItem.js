import styles from "components/buyLead/BuyLead.module.css";
import styles2 from "components/mainPage/Main.module.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Rate } from "rsuite";

const ResponseItem = ({ fl }) => {
  return (
    <>
      <div className={`d-flex flex-column pb-1 ${styles.reponseContainer}`}>
        <div className={`d-flex align-items-center ${styles.sellerItemTitle}`}>
          <span className={`fi fi-${fl} me-1 ${styles2.flagList}`}></span>
          G*** A*** Z*** I*** G*** P*** L***
          <div className="d-flex align-items-start ms-2">
            <Rate
              defaultValue={3}
              size="xs"
              style={{
                fontSize: 12,
                width: 80,
              }}
              color="blue"
            />
            <span className={`${styles2.proRate} ms-1`}>(4.6)</span>
          </div>
          <h4 className={`ms-auto ${styles.contact}   ms-1`}>Jan-13-23</h4>
        </div>
        <div className={`d-flex align-items-center `}>
          <FontAwesomeIcon
            className="me-1"
            icon={faStar}
            style={{ fontSize: 15, color: "goldenrod" }}
          />
          <span className={styles.goldMember}>GOLD Member,</span>
          <span className={`ms-3 ${styles.supplierFrom}`}>
            Supplier from SouthAfrica
          </span>
        </div>
      </div>
    </>
  );
};
export default ResponseItem;
