import styles from '../header/Header.module.css'

const ForSuppliers = () => {
    return (
        <>
            <ul className="dropdown-menu dropdown-menu-end"  >
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-window-desktop ${styles.subMenuIcon} `}></i>All Latest Buy Requirements</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-heart-fill ${styles.subMenuIcon} `}></i>Join Absolutely Free</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-tags-fill ${styles.subMenuIcon} `}></i>Display Your Products</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-hand-thumbs-up ${styles.subMenuIcon} `}></i>Become Premium Member</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-currency-dollar ${styles.subMenuIcon} `}></i>Premium Member Pricing</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-globe ${styles.subMenuIcon} `}></i>Trading Resources</a></li>
            </ul>
        </>
    )
}
export default ForSuppliers;