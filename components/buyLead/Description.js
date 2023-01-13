import styles from "components/buyLead/BuyLead.module.css";
const Description = () => {
  return (
    <>
      <div className={`ms-3 ${styles.description}`}>
        <span className={`  ${styles.detailTitle}`}>Product Description:</span>
        <div className={` ms-3 mt-1 ${styles.detailValue}`}>
          Buyer is interested to receive quotations for the following RFQ -
          <br />
          Product Name: Wheat Flour
          <br />
          <br />
          Specifications :
          <br />
          Type: Refined
          <br />
          <br />
          Contact : Syed Shamas
        </div>
      </div>
    </>
  );
};
export default Description;
