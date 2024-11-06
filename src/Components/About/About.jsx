import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' />
            <img src={play_icon} className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative education journey with our
             university's comprehensive education programs. Our cutting-edge
             curriculum is designed to empower students with the knowledge,
             skills, and experiences needed to excel in the dynamic fiels of
             education.</p>
             <p>With a fodus on innovation, hands-on learning, and personalized
             mentorship, our programs pregrams prepare aspiring educators to make a 
             meaningful impact in classrooms, schools, and communities.</p>
             <p>Whether you aspire to become a teacher, administaractor,
             counselor, or educational leader, our diverse range of programs
             offers the perfect pathway to achieve your goals and Unlock your
             full potential in shaping the future of education.</p>
        </div> 
    </div>
  )
}

export default About
