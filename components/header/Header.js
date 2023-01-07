import Image from 'next/image';
import logo from '../../public/images/logo.jpg'
import styles from '../header/Header.module.css'
import Call from './Call';
import ForBuers from './ForBuyers';
import ForSuppliers from './ForSuppliers';
import Help from './Help';
import SignIn from './SignIn';
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white">
                <div className="container-fluid bg-white">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Image src={logo} placeholder='blur' width={152} height={50} />
                        </ul>
                        <div className='d-flex flex-column align-items-end'>
                            <div>
                                <div className='d-flex' >
                                    {/* <h3 className={styles.navItems} >Call : 1-100-200-000</h3> */}

                                    <div className="btn-group " >
                                        <button type="button"
                                            className={`btn ${styles.btnNav} border-0`}
                                            data-bs-toggle="dropdown" aria-expanded="false">

                                            <i className={`  bi bi-telephone-fill me-2`}></i>
                                            Call 1-800-900
                                            <i className={` bi bi-caret-down-fill ms-2`}></i>

                                        </button>
                                        <Call />
                                    </div>
                                    <div className="btn-group " >
                                        <button type="button"
                                            className={`btn ${styles.btnNav} border-0`}
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-question-circle-fill  me-2"></i>
                                            Help
                                            <i className={` bi bi-caret-down-fill ms-2`}></i>

                                        </button>
                                        <Help />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='d-flex' >
                                    {/* <h3 className={styles.navItems} >Call : 1-100-200-000</h3> */}

                                    <div className="btn-group " >
                                        <button type="button"
                                            className={`btn ${styles.btnNav} border-0`}
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-cart-dash-fill me-2"></i>

                                            For Buyers
                                            <i className={` bi bi-caret-down-fill ms-2`}></i>

                                        </button>
                                        <ForBuers />
                                    </div>
                                    <div className="btn-group " >
                                        <button type="button"
                                            className={`btn ${styles.btnNav} border-0`}
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-postage-fill me-2"></i>
                                            For Suppliers
                                            <i className={` bi bi-caret-down-fill ms-2`}></i>

                                        </button>
                                        <ForSuppliers />
                                    </div>
                                    <div className="btn-group " >
                                        <button type="button"
                                            className={`btn ${styles.btnNav} border-0`}
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-person-fill me-2"></i>
                                            Sign In
                                            <i className={` bi bi-caret-down-fill ms-2`}></i>

                                        </button>
                                        <SignIn />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;