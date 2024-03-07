import React from 'react';
import './NavBar.css';

const Thoughts = (props) => {
  return (
    <div id='thoughts-card'>
      <div id='thoughts-para'>
        <p>{props.text}</p>
      </div>
      <div id='thoughts-details'>
        <div id='thoughts-profile'></div>
        <div id='thoughts-userName'>
          <h4>Gladis Lennon</h4>
          <p>Head of SEO</p>
        </div>
      </div>
    </div>
  )
}

export default Thoughts