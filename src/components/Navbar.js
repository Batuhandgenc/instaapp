import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Uygulama Başlığı</h1>
      <ul>
        <li>Ana Sayfa</li>
        <li>Hakkında</li>
        <li>İletişim</li>
      </ul>
    </nav>
  );
};

export default Navbar;
