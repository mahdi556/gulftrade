import styles from "components/buyLead/BuyLead.module.css";
import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <h5 className={`text-center ${styles.contact} my-3 ms-1`}>
        Contact Buyer
      </h5>
      <div className="d-flex flex-column col-10 ">
        <div className="form-group">
          <label className="control-label mb-1" for="">
            Message
          </label>
          <textarea className="form-control" rows="5" cols=""></textarea>
        </div>
        <div className="form-group mt-3">
          <label className="control-label mb-1" for="">
            Company Name
          </label>
          <input className="form-control" type="" name="" value="" />
        </div>
        <div className="form-group mt-3">
          <label className="control-label mb-1" for="">
            Your Name
          </label>
          <input className="form-control" type="" name="" value="" />
        </div>
        <div className="form-group mt-3">
          <label className="control-label mb-1" for="">
            Your Email
          </label>
          <input className="form-control" type="" name="" value="" />
        </div>
        <div className="form-group mt-3">
          <label className="control-label mb-1" for="">
            Phone(Contry And Area Code)
          </label>
          <input className="form-control" type="" name="" value="" />
        </div>
        <div className="form-group mt-3">
          <label className="control-label mb-1" for="">
            Country
          </label>
          <select className="form-select ">
            <option selected value="">
              Choose an option
            </option>
            <option value="">Afghanistan</option>
            <option value="">Albania</option>
            <option value="">Algeria</option>
            <option value="">Iran</option>
            <option value="">Usa</option>
            <option value="">Iraq</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <label className="control-label mb-1" for="">
            Please enter the following text in the box below
          </label>
          <input className="form-control" type="" name="" value="" />
        </div>
        {/* <ReCAPTCHA
          sitekey="6LfM5PYjAAAAAKe30rzGSkkvSVzYibud01B3biFA"
          onChange={onChange}
        /> */}
        
      </div>
    </>
  );
};
export default Contact;
