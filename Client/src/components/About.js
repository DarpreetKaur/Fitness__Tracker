import React from 'react';
import './About.css'

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h2 className='heading-about'>About Us</h2>
      <p></p>
      <div className='para'>
      <p>
        Welcome to our fitness tracker website! We are passionate about helping you achieve your fitness goals and live a healthy lifestyle.
      </p>
      <p>
        Our mission is to provide you with the tools and information you need to track your workouts, monitor your progress, and stay motivated on your fitness journey.
      </p>
      <p>
        Whether you're a seasoned athlete or just starting out, our user-friendly interface and advanced tracking features make it easy for you to stay on top of your fitness game.
      </p>
      <p>
        Join our community today and let's make every step count towards a healthier, happier you!
      </p>
      <h2 className='heading-about'>Check Us Out:</h2>
      <h2 className='heading-about'>Darpreet Kaur: <a style={{color:'black'}} href='https://github.com/DarpreetKaur'>https://github.com/DarpreetKaur</a></h2>
    

      </div>
    </div>
  );
};

export default AboutUsPage;
