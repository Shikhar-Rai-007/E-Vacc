import React from 'react'
import './style.css';
function Blogs() {
  return (
    <div>
       <section className="blogs" id="blogs">
        <h1 className="heading">our <span>blogs</span></h1>
        <div className="box-container">
            <div className="box">
                <div className="image">
                    <img src="./image/blog-1.jpg" alt=""/>
                </div>
                <div className="content">
                    <div className="icon">
                        <a href="#"><i className="fas fa-calendar"></i>1st may, 2021</a>
                        <a href="#"><i className="fas fa-user"></i> by admin</a>
                    </div>
                    <h3>blog title goes here</h3>
                    <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius</p>
                    <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="./image/blog-2.jpg" alt=""/>
                </div>
                <div className="content">
                    <div className="icon">
                        <a href="#"><i className="fas fa-calendar"></i> 1st may, 2021</a>
                        <a href="#"><i className="fas fa-user"></i> by admin</a>
                    </div>
                    <h3>blog title goes here</h3>
                    <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius</p>
                    <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
                </div>
            </div>
            <div className="box">
                <div className="image">
                    <img src="./image/blog-3.jpg" alt=""/>
                </div>
                <div className="content">
                    <div className="icon">
                        <a href="#"><i className="fas fa-calendar"></i> 1st may, 2021</a>
                        <a href="#"><i className="fas fa-user"></i> by admin</a>
                    </div>
                    <h3>blog title goes here</h3>
                    <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius</p>
                    <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blogs
