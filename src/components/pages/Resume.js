import React from 'react';
import '../../styles/pages.css';

export default function Resume() {

  const onButtonClick = () => {
    fetch('Resume.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>Download my<button onClick={onButtonClick}>resume</button></p>
      <div className='skillsList'>
        <h3>Front-end Proficienies:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Boostrap</li>
          </ul>
          <h3>Back-end Proficienies:</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
      </div>
    </div>
  );
}
