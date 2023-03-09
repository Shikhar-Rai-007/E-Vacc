import React from 'react'
import './style.css';
function Footer() {
  return (
    <div>
       <section className="footer">
        <div className="box-container">
            <div className="box">
                <h3>quick links</h3>
                <a href="#"> <i className="fas fa-chevron-right"></i> home</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> services</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> about</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> doctors</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> book</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> review</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> blogs</a>
            </div>
            <div className="box">
                <h3>our services</h3>
                <a href="#"> <i className="fas fa-chevron-right"></i> dental care</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> message therapy</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> cardioloty</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> diagnosis</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> ambulance service</a>
            </div>
            <div className="box">
                <h3>contact info</h3>
                <a href="#"> <i className="fas fa-phone"></i> +123-456-7859</a>
                <a href="#"> <i className="fas fa-phone"></i> +356-481-0286</a>
                <a href="#"> <i className="fas fa-envelope"></i> medcare.info.com</a>
                <a href="#"> <i className="fas fa-envelope"></i> medcare.info.@gmail.com</a>
                <a href="#"> <i className="fas fa-map-marker-alt"></i>  dhaka, Bangladesh - 1000</a>
            </div>
            <div className="box">
                <h3>follow us</h3>

                <a href="#"> <i className="fab fa-facebook-f"></i> facebook</a>
                <a href="#"> <i className="fab fa-twitter"></i> twitter</a>
                <a href="#"> <i className="fab fa-linkedin"></i> linkedin</a>
                <a href="#"> <i className="fab fa-instagram"></i> instagram</a>
                <a href="#"> <i className="fab fa-youtube"></i> youtube</a>
                <a href="#"> <i className="fab fa-pinterest"></i> pinterest</a>
            </div>
        </div>
        <div className="credit">created by <span>DCBisht</span> | all right reserved</div>
    </section>
    </div>
  )
}

export default Footer
