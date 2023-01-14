import styles from "components/buyLead/BuyLead.module.css";
import Link from "next/link";

const BePremium = () => {
  return (
    <>
      <div
        className={`row co1-10 mt-3 ps-3 pe-4 py-3 ${styles.PremiumContainer}`}
      >
        <span className={`co1-11 ${styles.PremiumText}`}>
          GOLD Premium members can contact unlimited buyers and SILVER Premium
          members can contact 50 buyers per week.
        </span>
        <Link href="#">Upgrade your account now</Link>
        <br />
        <br />
        <Link href="#">
          All plans come with 60 days, no question asked, money back guarantee
        </Link>
        <br />
        <br />
        <span className={`co1-11 ${styles.PremiumText}`}>
          Not a Premium member? No problem. You can still contact limited number
          of buyers absolutely FREE.
          <br />
        </span>
        <Link href="#">Click here to login</Link>
      </div>
    </>
  );
};
export default BePremium;
