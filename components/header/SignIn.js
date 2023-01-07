import styles from '../header/Header.module.css'

const SignIn = () => {
    return (
        <>
            <ul className="dropdown-menu dropdown-menu-end"  >
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-box-arrow-in-right ${styles.subMenuIcon} `}></i>Sign In</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi bi-pencil-square ${styles.subMenuIcon} `}></i>Not A Member? Free SignUp</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-box-arrow-right ${styles.subMenuIcon} `}></i>Sign Out</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-hand-thumbs-up ${styles.subMenuIcon} `}></i>Become Premium Member</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-globe ${styles.subMenuIcon} `}></i>Trading Resources</a></li>
            </ul>
        </>
    )
}
export default SignIn;