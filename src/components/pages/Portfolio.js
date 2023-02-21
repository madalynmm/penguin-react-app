import React from 'react';
import ProjectCards from '../utils/projectCards';
import '../../styles/pages.css';

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Recent Work</h1>
      <ProjectCards />
    </div>
  );
}
