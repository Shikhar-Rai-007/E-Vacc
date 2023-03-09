import React from 'react'
import './style.css';
function About() {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading"><span>about</span> us</h1>
        <div className="row">
            <div className="image">
                <img src="https://cdn.who.int/media/images/default-source/2021-dha-images/the-survey-team-interviews-migrant-workers-for-the-survey-on-covid-19-vaccine-for-myanmar-migrant-workers-in-maesot-tak-17-november-2021-who-anat-duangjan.jpg?sfvrsn=5227af5c_6" alt=""/>
            </div>
            <div className="content">
                <h3>we take care of your healthy life</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Iure Ducimus, Quod Ex Cupiditate Ullam In Assumenda Maiores Et Culpa Odit Tempora Ipsam Qui, Quisquam Quis Facere Iste Fuga, Minus Nesciunt.</p>
                <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Natus Vero Ipsam Laborum Porro Voluptates Voluptatibus A Nihil Temporibus Deserunt Vel?</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
