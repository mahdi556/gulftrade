import Link from 'next/link';
import styles from '../header/Header.module.css'

const ForSuppliers = () => {
    return (
        <>
            <ul className="dropdown-menu dropdown-menu-end"  >
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-window-desktop ${styles.subMenuIcon} `}></i>All Latest Buy Requirements</Link></li>
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-heart-fill ${styles.subMenuIcon} `}></i>Join Absolutely Free</Link></li>
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-tags-fill ${styles.subMenuIcon} `}></i>Display Your Products</Link></li>
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-hand-thumbs-up ${styles.subMenuIcon} `}></i>Become Premium Member</Link></li>
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-currency-dollar ${styles.subMenuIcon} `}></i>Premium Member Pricing</Link></li>
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-globe ${styles.subMenuIcon} `}></i>Trading Resources</Link></li>
            </ul>
        </>
    )
}
export default ForSuppliers;