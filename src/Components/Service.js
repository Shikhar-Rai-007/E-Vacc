import React from 'react'
import './style.css';
function Service() {
  return (
    <div>
        <section className="services" id="services">
        <h1 className="heading">our <span>services</span></h1>
        <div className="box-container">
            <div className="box">
                <i className="fas fa-notes-medical"></i>
                <h3>free checkups</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
            <div className="box">
                <i className="fas fa-ambulance"></i>
                <h3>24/7 ambulance</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
            <div className="box">
                <i className="fas fa-user-md"></i>
                <h3>expert doctors</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
            <div className="box">
                <i className="fas fa-pills"></i>
                <h3>medicines</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
            <div className="box">
                <i className="fas fa-procedures"></i>
                <h3>bed facility</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
            <div className="box">
                <i className="fas fa-heartbeat"></i>
                <h3>total care</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Ad, Omnis.</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Service
