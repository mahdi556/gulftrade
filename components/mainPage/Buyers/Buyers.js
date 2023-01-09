import "/node_modules/flag-icons/css/flag-icons.min.css";
import styles from "../../mainPage/Main.module.css";

const Buyers = () => {
    const ReedMore = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    return (
        <>
            <div className='d-flex flex-column mt-3 m-4'>
                <div className='d-flex align-items-end'>
                    <h3>Food and Agricultural Product Buyers</h3>
                    <h5 className='text-success ms-3'>See more</h5>
                </div>
                <hr style={{
                    width: "100%",
                    height: 3
                }} />
                <div className="d-flex flex-column col-6 ">
                    <div className="d-flex me-5 align-items-center">

                        <span className={`fi fi-gr ${styles.flag}`} ></span>
                        <div className="d-flex ms-4 me-auto">
                            <h5 className={`${styles.proRate} ms-1`}>Wanted :</h5>
                            <h6 className={`${styles.proRate} ms-1`}>Brass Honey Scrab</h6>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className={`${styles.proRate} me-1 bi bi-check-square-fill text-success`}></i>
                            <h4 className={`${styles.verified} me-1 `}>Verified</h4>
                            <i className="bi bi-question-circle"></i>
                        </div>

                    </div>
                    <div className="d-flex justify-content-between">
                        <h4 className="">Buyer From India</h4>
                        <h6>Jan-06-23</h6>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
                        nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula
                            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
                            aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                            sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed
                            dapibus pulvinar nibh tempor porta.</span></p>
                    <button onclick="myFunction()" id="myBtn">Read more</button>

                </div>

            </div>
        </>
    )
}
export default Buyers;