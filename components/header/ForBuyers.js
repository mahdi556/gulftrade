import styles from '../header/Header.module.css'

const ForBuers = () => {
    return (
        <>
            <ul className="dropdown-menu dropdown-menu-end"  >
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-window-desktop ${styles.subMenuIcon} `}></i>Buyers Dashboard</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-cart-dash-fill ${styles.subMenuIcon} `}></i>Get Quotes From Suppliers</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi bi-envelope-fill ${styles.subMenuIcon} `}></i>Post Your Buy Requiements</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-globe ${styles.subMenuIcon} `}></i>Trading Resources</a></li>
            </ul>
        </>
    )
}
export default ForBuers;