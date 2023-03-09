import React from 'react';
import './style.css';
export default function Home() {
  return (
    <section className="home" id="home">
        <div className="image">
            <img src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=2000" alt="home-img.svg"/>
        </div>
        <div className="content">
            <h3>stay safe, stay healthy</h3>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Sed Autem Vero? Magnam, Est Laboriosam!</p>
            <a href="/" className="btn">contact us <span className="fas fa-chevron-right"></span> </a>
        </div>
    </section>
  )
}
