import Link from 'next/link';
import styles from '../header/Header.module.css'

const Help = () => {
    return (
        <>
             <ul className="dropdown-menu dropdown-menu-end"  >
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-question-circle-fill ${styles.subMenuIcon} `}></i>Contact Customer Support</Link></li>
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-chat-fill ${styles.subMenuIcon} `}></i>Your feedBack</Link></li>
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-unlock-fill ${styles.subMenuIcon} `}></i>Forgot Password</Link></li>
                <li><Link className={`dropdown-item ${styles.subMenuItem} `} href="#"> <i className={`bi bi-question-circle ${styles.subMenuIcon} `}></i>GulfTrade Q&A</Link></li>
            </ul>
        </>
    )
}
export default Help;