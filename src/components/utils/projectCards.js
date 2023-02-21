import React from 'react';
import Flycast from '../assets/images/flycast.png';
import MyLibrary from '../assets/images/mylibrary.png';
import GitHubLogo from '../assets/images/github-mark.png';
import '../../styles/projectCards.css';

export default function ProjectCards() {
  return (
    <div className="portfolioWork" class="row">
      
      <div class="col-sm-6">
        <div className="projectCard" class="card">
          <img class="card-img" src={Flycast} alt="Flycast Trip Planner" />
          <div class="titleLink">
            <h2 class="text"><a href="https://zberkley88.github.io/flycast-trip-planner/" target="_blank" rel="noreferrer">FlyCast Trip Planner</a></h2>
            <a href="https://github.com/ZBerkley88/flycast-trip-planner" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo" class="githubCat"/></a>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div className="projectCard" class="card">
          <img class="card-img" src={MyLibrary} alt="My Library Program" />
          <div class="titleLink">
            <h2 class="text"><a href="https://secret-chamber-67759.herokuapp.com/" target="_blank" rel="noreferrer">Digital Library Collection</a></h2>
            <a href="https://github.com/madalynmm/library-ghost" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="GitHub Logo" class="githubCat"/></a>
          </div>
        </div>
      </div>

    </div>
  );
}
