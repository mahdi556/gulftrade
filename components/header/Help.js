import styles from '../header/Header.module.css'

const Help = () => {
    return (
        <>
            <ul className="dropdown-menu dropdown-menu-end"  >
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-question-circle-fill ${styles.subMenuIcon} `}></i>Contact Customer Support</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-chat-fill ${styles.subMenuIcon} `}></i>Your feedBack</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-unlock-fill ${styles.subMenuIcon} `}></i>Forgot Password</a></li>
                <li><a className="dropdown-item" href="#"> <i className={`bi bi-question-circle ${styles.subMenuIcon} `}></i>GulfTrade Q&A</a></li>
            </ul>
        </>
    )
}
export default Help;