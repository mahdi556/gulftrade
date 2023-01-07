import styles from '../header/Header.module.css'

const Call = () => {
    return (
        <>

            <ul className={`${styles.callDropdown} dropdown-menu dropdown-menu-end `} >
                <div className='ms-3 mt-4'>
                    <li><h1 className='text-primary fs-5'>Call Us</h1></li>
                    <li><h1 className='text-black fw-bold fs-6 mt-3'>INDIA</h1></li>
                    <li><h1 className='text-success fs-6'>1-800-114-649</h1></li>
                    <li><h1 className='text-success fs-6'>+964-911-9564-22</h1></li>
                    <li><h1 className='text-success fs-6'>+964-911-9564-22</h1></li>
                    <li><h1 className='text-black fs-6'></h1>(Hours) 10 am to 6 pm IST</li>
                    <li><h1 className='text-primary fs-6'>Email Us</h1></li>
                    <li><h1 className='text-black fw-bold fs-6 mt-5'>USA</h1></li>
                    <li><h1 className='text-success fs-6'>1-800-114-649</h1></li>
                    <li><h1 className='text-success fs-6'>+964-911-9564-22</h1></li>
                    <li><h1 className='text-success fs-6'>+964-911-9564-22</h1></li>
                    <li><h1 className='text-black fs-6'></h1>(Hours) 10 am to 6 pm IST</li>
                    <li><h1 className='text-primary fs-6 mt-3'>Number For Other Locations </h1></li>
                </div>

            </ul>
        </>
    )
}
export default Call;