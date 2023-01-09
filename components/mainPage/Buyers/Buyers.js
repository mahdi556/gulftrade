import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "../../mainPage/Main.module.css";
import { useState } from "react";
import Item from "./Item";

const Buyers = () => {
  const [more, setMore] = useState(false);
  const ReedMore = () => {
    more ? setMore(false) : setMore(true);
  };
  return (
    <>
      <div className="d-flex flex-column mt-5 m-4">
        <div className="d-flex align-items-end">
          <h3>Food and Agricultural Product Buyers</h3>
          <h5 className="text-success ms-3">See more</h5>
        </div>
        <hr
          style={{
            width: "100%",
            height: 3,
          }}
        />
        <div className="row row-cols-2 gx-5 px-3">
          <div className="d-flex flex-column  ">
            <Item />
          </div>
          <div className="d-flex flex-column  ">
            <Item />
          </div>
          <div className="d-flex flex-column">
            <Item />
          </div>
          <div className="d-flex flex-column ">
            <Item />
          </div>
        </div>
      </div>
    </>
  );
};
export default Buyers;
