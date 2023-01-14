import Image from "next/image";
import "rsuite/dist/rsuite.min.css";
import slider1 from "../../../public/images/slider2.webp";
import styles from "../../mainPage/Main.module.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Rate } from "rsuite";
import TooltipBox from "./TooltipBox";
import { useEffect, useRef, useState } from "react";

const ItemBox = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  const [show, setShow] = useState(false);
  const [modalClass, setModalClass] = useState(styles.modalDialog);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    setModalClass(styles.modalDialog);
  }, []);

  return (
    <>
      <div className="position-relative " onMouseLeave={() => setIsOpen(false)}>
        {modalIsOpen && <TooltipBox />}
        <div className={styles.imgWrapper}>
          <Image
            src={slider1}
            style={{
              objectFit: "contain",
            }}
            fill={true}
          />
        </div>
        <div className="d-flex flex-column mt-2">
          <div>
            <h5 className={`${styles.proName}`}>Apple</h5>
          </div>
          <div
            className="d-flex align-items-start mt-3 "
            onMouseEnter={() => setIsOpen(true)}
          >
            <Rate
              defaultValue={3}
              size="xs"
              style={{
                fontSize: 12,
                width: 80,
              }}
              color="blue"
            />
            <h6 className={`${styles.proRate} ms-1`}>(4.6)</h6>
          </div>

          <div className="d-flex ">
            <span className={`fi fi-gr ${styles.flag}`}></span>
            <h6 className={`ms-1 ${styles.flag}`}>China</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemBox;
