import React from 'react';

function LoginSection() {
  return (
    <div className="login-section">
      <button className="login-button">
        <img src="instagram-icon.png" alt="Instagram Logo" className="button-icon" />
        Instagram ile Giriş Yap
      </button>
    </div>
  );
}

export default LoginSection;

/*
import React from 'react';
import './LoginSection.css'; 

const LoginButton = () => {
  return (
    <div className="login-section">
      <button className="login-button">
        Instagram ile Giriş Yap
      </button>
    </div>
  );
};

export default LoginButton;
*/