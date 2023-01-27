import styles from "components/user/User.module.css";
import Link from "next/link";

const VerifyEmail = ()=>{
    return(
        <>
          <div className="d-flex col-12">
        <div
          className={`mx-auto mt-5  pt-5 pb-3 px-5 d-flex flex-column align-items-center ${styles.veBox}`}
        >
          <h3 className={`${styles.veTitr}`}>Please Verify Your Email</h3>
          <span className={`${styles.veDis} mt-3 `}>
            you'r almost there! we sent an email to
          </span>
          <span className={`${styles.veDis} fw-bold`}>
            mahdihaghighati@gmail.com
          </span>
          <div className={`${styles.veDis} mt-3`}>
            Just click on the link in the email to complete your signup.
            <br />
            if you need to see it,you may need to <b>check your spam </b>folder
            <br />
            <br />
          </div>
          <span className={`${styles.veDis} my-2 text-center`}>Still can't find the email?</span>
          <button className="btn btn-success btn-sm" type="">Resend Email</button>
          <div className={`${styles.veDis} mt-3`}>
            Need help? <Link href="#"><button className="btn btn-link btn-sm" type="">Contact us</button> </Link>
          </div>
        </div>
      </div>
        </>
    )
}
export default VerifyEmail