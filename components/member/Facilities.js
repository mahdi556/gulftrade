import SeoLinks from "components/buyLead/common/SeoLinks";
import SimilarWanted from "components/buyLead/SimilarWanted";
import Like from "components/member/Like";
import styles from "components/member/Member.module.css";
import Link from "next/link";

const Facilities = () => {
  return (
    <>
      <div className={`pb-4 my-2 ${styles.bottomSection}`}>
        <h3 className={`${styles.h2Title} mb-4`}>
          Facilities Site Advantage And Description
        </h3>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <b className="text-black me-1">Quality Control:</b> In House
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Production Lines:</b> 22
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Investment on Manufacturing:</b> Not
            Known
          </div>
          <div className="d-flex">
            <b className="text-black me-1">
              Percentage of revenue invested in R & D:
            </b>{" "}
            0 to 5%
          </div>
          <div className="d-flex mb-3">
            <b className="text-black me-1">Production Type:</b>Partially owned
          </div>

          <div className="d-flex">
            <b className="text-black me-1">Total Staff:</b> 26 to 50
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Staff Sales And Marketting:</b> 0 to
            10
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Staff Production:</b> 0 to 10
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Staff Quality Control:</b> 0 to 10
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Staff R&D:</b> 0 to 10
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Staff Engineering:</b> 0 to 10
          </div>
        </div>
      </div>

      <div className={` ${styles.bottomSection}`}>
        <h3 className={`${styles.h2Title}`}> Contact Details</h3>
        <div className="d-flex flex-column">
          Fabslab Navkar International 44/112, Gidc Pipodara, , Tal. Mangrol
          Dist. Surat 394110 - Gujarat Surat 394110 Gujarat India
          <div className="mb-3">
            <b className="text-black  me-1 ">Contact Person :</b> Tiles, ceramic
            tiles, porcelain tiles, floor tiles, wall tiles, vitrified tiles,
            big format porcelain slab tiles, soluble salt nano, gvt, pgvt,
            double charge tiles, parking tiles,
          </div>
          <Link href="#">http://www.fabslab.in</Link>
          <Like />
        </div>
      </div>
      <SeoLinks />
    </>
  );
};
export default Facilities;
