import React from 'react'
import './style.css';
function About() {
  return (
    <div>
      <section class="about" id="about">
        <h1 class="heading"><span>about</span> us</h1>
        <div class="row">
            <div class="image">
                <img src="./image/about-img.svg" alt=""/>
            </div>
            <div class="content">
                <h3>we take care of your healthy life</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Iure Ducimus, Quod Ex Cupiditate Ullam In Assumenda Maiores Et Culpa Odit Tempora Ipsam Qui, Quisquam Quis Facere Iste Fuga, Minus Nesciunt.</p>
                <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Natus Vero Ipsam Laborum Porro Voluptates Voluptatibus A Nihil Temporibus Deserunt Vel?</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span> </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
