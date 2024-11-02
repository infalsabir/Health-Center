// src/pages/AboutUs.js
import React from 'react';


const About = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <h2>About Us</h2>
        <p>
          At our health center, we prioritize the well-being of our patients by
          providing high-quality and compassionate healthcare. Our dedicated
          team of medical professionals is committed to offering personalized
          care in a safe and welcoming environment.
        </p>
      </div>

      <div className="about-content">
        <h3 style={{textAlign:'center'}}>Our Mission</h3>
        <p>
          We strive to deliver top-notch healthcare services and enhance the
          quality of life for our community. Our goal is to support our
          patients' health journey with cutting-edge treatments, preventive
          care, and ongoing support.
        </p>

        <div className="team-section">
          <h3 style={{textAlign:'center'}}>Meet Our Team</h3>
          <div className="team-cards">
            <div className="team-card">
              <h4>Dr. Sarah Thompson</h4>
              <p>Chief Medical Officer</p>
            </div>

            <div className="team-card">
             
              <h4>Dr. Michael Lee</h4>
              <p>Cardiologist</p>
            </div>

            <div className="team-card">
              
              <h4>Nurse Emma Smith</h4>
              <p>Head Nurse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

