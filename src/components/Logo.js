import React from 'react';
import './Logo.css';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <p className="heading">Herkesi görmeye çok yakınsın!</p>
      <p className="subheading">
        Instagram hesabınla giriş yaparak keşfetmeye başlayabilirsin! 😍
      </p>
    </div>
  );
};

export default Logo;

/*
import React from 'react';
import './Logo.css';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
      <p className="heading">Herkesi görmeye çok yakınsın!</p>
      <p className="subheading">Instagram hesabınla giriş yaparak keşfetmeye başlayabilirsin! 😍</p>
    </div>
  );
};

export default Logo;
*/