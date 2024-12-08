import React from 'react';
import Logo from './Logo';
import LoginSection from './LoginSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Logo />
      <LoginSection />
    </div>
  );
};

export default HomePage;
