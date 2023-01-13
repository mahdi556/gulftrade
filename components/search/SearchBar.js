import styles from "components/search/Search.module.css";
const SearchBar = () => {
  return (
    <>
      <div
        className={`d-flex  justify-content-center align-items-center py-3 col-12 ${styles.container}`}
      >
        <span className={` me-3 ${styles.title}`}>Search</span>
        <input id="search" className={`  form-control ${styles.search}`}  type="text" name="" value=""
        placeholder="Find WorlsWide Buyers,Suppliers and Products"
        />
        <button className={`ms-3 btn ${styles.btn}`} type="">
          Find Buyers
        </button>
        <button className={`ms-2 btn ${styles.btn}`} type="">
          Find Suppliers
        </button>
      </div>
    </>
  );
};
export default SearchBar;
