import styles from "components/buyLead/BuyLead.module.css";
import ResponseItem from "./ResponseItem";
const SellerResponse = () => {
  return (
    <>
      <h3 className={`text-left ${styles.sellerTitle} mt-3  ms-1`}>
        SellerResponse(6)
      </h3>
       <ResponseItem fl="ae" />
       <ResponseItem fl="ae" />
       <ResponseItem fl="ae" />
       <ResponseItem fl="ae" />
       <ResponseItem fl="ae" />
       <ResponseItem fl="ae" />
    </>
  );
};
export default SellerResponse;
