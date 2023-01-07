import Image from "next/image";
import slider1 from '../../../public/images/slider2.webp'
import styles from '../../mainPage/Main.module.css'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

const ItemBox = () => {
    return (
        <>
            <div className={styles.imgWrapper}>
                <Image src={slider1} style={{
                    objectFit: 'contain'
                }} fill={true} />
            </div>
            <div className="d-flex flex-column mt-2">
                <div>
                    <h5 className="text-primary">
                        Apple
                    </h5>

                </div>
                <Rate style={{
                    colorAdjust: "economy",
                    floodColor: 'ccc',
                    color: '#000',
                    colorInterpolation: '#000',



                }} />
            </div>
        </>
    )
}
export default ItemBox;