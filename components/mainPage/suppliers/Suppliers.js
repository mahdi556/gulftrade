import Image from 'next/image'
import styles from '../../mainPage/Main.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemBox from './ItemBox';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const Suppliers = () => {
    return (
        <>
            <div className='d-flex flex-column mt-3 m-4'>
                <div className='d-flex align-items-end'>
                    <h3>Food and Agricultural Product Suppliers</h3>
                    <h5 className='text-success ms-3'>See more</h5>
                </div>
                <hr style={{
                    width: "100%",
                    height: 3
                }} />

                {/* <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    <div><ItemBox /></div>
                    
                </Carousel>; */}
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
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
                    sliderClass=""
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