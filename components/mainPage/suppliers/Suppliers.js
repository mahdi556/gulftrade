import styles from '../../mainPage/Main.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemBox from './ItemBox';

const Suppliers = () => {
    return (
        <>
            <div className='d-flex flex-column mt-3 m-4  '
            style={{
                // overflowX:'hidden'
            }}>
                <div className={`d-flex align-items-center ${styles.catergoryTitleContainer} `}>
                    <span className={styles.catergoryTitle}>Food and Agricultural Product Suppliers</span>
                    <span className={styles.seeMore}>See more</span>
                </div>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    dotListClassName=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    className={styles.caresoul0}
                    containerClassName={styles.caresoul1}
                    itemClassName={styles.caresoul2}
                    sliderClassName={styles.caresoul3}
                    keyBoardControl
                    minimumTouchDrag={80}
                    partialVisible
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 5,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                >
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                </Carousel>
 
            </div>

        </>
    )
}
export default Suppliers;