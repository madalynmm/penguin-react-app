import React from 'react';
import ProfilePhoto from '../assets/images/prof-pic-circle.png';
import '../../styles/pages.css';

export default function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={ProfilePhoto} alt="Madalyn Marino" />
      <p>
        I am a recent graduate of the University of North Carolina at Chapel Hill where I majored in English with a concentration in Film and Media Studies. I minored in both Creative Writing and Writing for the Screen and Stage. After graduating, I worked as a Development Intern at Aureate Films through the UNC Hollywood Internship Program. I am currently enrolled in UNC's Fullstack Web Development Bootcamp and am looking to transition into a career in web development.
      </p>
    </div>
  );
}
