import styles from "components/user/User.module.css";
import Input from "rsuite/Input";
import InputGroup from "rsuite/InputGroup";
import MaskedInput from "rsuite/MaskedInput";
const AddProduct = () => {
  return (
    <>
      <div className={`  py-3 mt-4 ${styles.newPrCard}`}>
        <div className={` px-3  ${styles.titleCard}`}>
          <h3 className="titr">Edit Product</h3>
          <span className="text-muted">* indicates required fields</span>
        </div>
        <div className="px-3 mt-3 col-12">
          <div className="row col-8">
            <div className="form-group col-7 me-auto">
              <label className="control-label" for="">
                Name:
              </label>
              <Input className="form-control" placeholder="sadsdsdasd" />
            </div>
            <div className="form-group col-4">
              <label className="control-label" for="">
                * Price FOB in USD:
              </label>
              <Input className="form-control" placeholder="sadsdsdasd" />
            </div>
          </div>
          <div className="form-group mt-3 col-8">
            <label className="control-label" for="">
              * Product Detailed Description:
            </label>
            <Input
              className="form-control"
              as="textarea"
              rows={5}
              placeholder="Textarea"
            />{" "}
          </div>
          <div className="row col-10 mt-3 ">
            <div className="form-group col-5 me-auto">
              <label className="control-label" for="">
                Seller Product Code:
              </label>
              <Input className="form-control" placeholder="sadsdsdasd" />
            </div>
            <div className="form-group col-5  ">
              <label className="control-label" for="">
                Product Standards:
              </label>
              <Input className="form-control" placeholder="sadsdsdasd" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
