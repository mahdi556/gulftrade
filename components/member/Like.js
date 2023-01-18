import styles from "components/buyLead/BuyLead.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const Like = () => {
  return (
    <>
      <div className={`d-flex justify-content-end mt-2 pb-1  `}>
        <Link href="#">
          {" "}
          <FontAwesomeIcon
            className="me-1"
            icon={faThumbsUp}
            style={{ fontSize: 15, color: "#090" }}
          />
          Rate This Member
        </Link>
        <Link href="#" className="ms-3">
          {" "}
          <FontAwesomeIcon
            className="me-1"
            icon={faThumbsDown}
            style={{ fontSize: 15, color: "#a94442" }}
          />
          File a complaint
        </Link>
      </div>
    </>
  );
};
export default Like;
