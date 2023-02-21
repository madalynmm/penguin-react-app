import React from 'react';
import '../styles/footer.css';
import GitHubLogo from './assets/images/github-mark.png';
import LinkedInLogo from './assets/images/linkedin-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/madalynmm" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo"/></a>
      <a href="https://www.linkedin.com/in/madalyn-marino/" target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt="LinkedIn Logo"/></a>
    </footer>
  );
}

export default Footer;