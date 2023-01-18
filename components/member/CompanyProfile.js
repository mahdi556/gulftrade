import SeoLinks from "components/buyLead/common/SeoLinks";
import SimilarWanted from "components/buyLead/SimilarWanted";
import Like from "components/member/Like";
import styles from "components/member/Member.module.css";
import Link from "next/link";

const CompanyProfile = () => {
  return (
    <>
      <div className={`pb-4 ${styles.bottomSection}`}>
        <h2 className={`${styles.h2Title}`}>Our Company</h2>
        <p className={`text-left ${styles.companyDiscription}`}>
          FABSLAB, headquartered in Ahmedabad, India, emerged with the objective
          of creating a new material category suitable for exterior and interior
          construction: kitchen and bath countertops, furniture, flooring and
          facades. The FABSLAB brand was launched as high-end compact surface
          with revolutionary physical and technical features. FABSLAB uses the
          best natural raw materials with state-of-the-art technology to create
          a high-tech slab. FABSLABÃ??Ã?Â¢??s product is created through the
          Italian technology, exposing minerals and other raw materials to
          extremely high pressure and temperature (over 1200 degrees
          Celsius/2200 degrees Fahrenheit), resembling the way natural stone
          forms over thousands of years, in just hours. The process gives the
          product outstanding physical and mechanical properties in terms of
          compaction, resistance and durability. The fabulous designs from our
          different collection will be a treat to your eyes and will add value
          to your luxury lifestyle. FABSLAB is one of the leading brands,
          providing a high-tech, versatile architectural solution with
          avant-garde properties.
        </p>
      </div>
      <div className={`pb-4 ${styles.bottomSection}`}>
        <h3 className={`${styles.h2Title}`}>Annual Sales And Certifications</h3>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <b className="text-black me-1">Established:</b> 2017
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Approximate Annual Sales:</b> 25
            million to 50 million USD
          </div>
          <div className="d-flex">
            <b className="text-black me-1">Certifications And Standards:</b> CE,
            ISO, FIEO, REX, CAPEXIL, SGS,
          </div>
        </div>
      </div>
      <div className={`pb-4 ${styles.bottomSection}`}>
        <h3 className={`${styles.h2Title}`}>
          {" "}
          Dealing In Products And Services
        </h3>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <b className="text-black mb-2 me-1">Our Primary Business:</b> 2017
          </div>
          <div className="mb-3">
            <b className="text-black  me-1 ">Buyer :</b> Tiles, ceramic tiles,
            porcelain tiles, floor tiles, wall tiles, vitrified tiles, big
            format porcelain slab tiles, soluble salt nano, gvt, pgvt, double
            charge tiles, parking tiles,
          </div>
          <div className="  mb-3">
            <b className="text-black me-1">Supplier :</b>Tiles, ceramic tiles,
            porcelain tiles, floor tiles, wall tiles, vitrified tiles, big
            format porcelain slab tiles, soluble salt nano, gvt, pgvt, double
            charge tiles, parking tiles,
          </div>
          <div className="  mb-3">
            <b className="text-black me-1">Services :</b>Exporters
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
      <div className="row mt-5">
        <h4
          className="text-black "
          style={{
            fontSize: 18,
          }}
        >
          More Items Similiar to: Wanted : Imitation Jewellery
        </h4>
      </div>
      <SimilarWanted />
      <SimilarWanted />
      <SimilarWanted />
      <SimilarWanted />
      <SimilarWanted />
    </>
  );
};
export default CompanyProfile;
