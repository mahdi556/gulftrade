import Image from 'next/image'
import styles from '../mainPage/Main.module.css'
import slider1 from '../../public/images/slider1.webp'
import slider2 from '../../public/images/slider2.webp'
import slider6 from '../../public/images/slider6.jpg'
const Slider = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={slider1} className={`d-block ${styles.sliderImg}`} placeholder='blur' alt="..." />
                    </div>
                    <div className="carousel-item">
                        <Image src={slider2} className={`d-block ${styles.sliderImg}`} placeholder='blur' alt="..." />
                    </div>
                    <div className="carousel-item">
                        <Image src={slider6} className={`d-block ${styles.sliderImg}`} placeholder='blur' alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
export default Slider;