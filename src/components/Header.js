import React from 'react';
import ProfilePhoto from './assets/images/prof-pic-circle.png';
import '../styles/header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <img src={ProfilePhoto} alt="Madalyn Marino" />
        <h1 >Madalyn Marino</h1>
      </header>
    </div>
  );
}

export default Header;