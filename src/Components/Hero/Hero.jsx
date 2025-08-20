import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';

const Hero = () => {
  return (
   <section className="hero" id="home">
  <div className="fade-in">
    <img src={profile} alt="Tanisha Jain's Profile" className="hero-img" />

    <h1>
      <span>I am Tanisha</span>, Full stack Developer
    </h1>

    <p>
      Hi, I'm a creative mind with a passion for crafting beautiful, user-friendly web experiences...
    </p>
  </div>
</section>

  );
};

export default Hero;
