import React from 'react';
import './NavBar.css';
import house from './assets/house.avif';
import Button from './Button';

const Aside = () => {
  return (
    <div id='aside-section'>
        <div id='img-container'>
           <img src={house} alt='house'></img> 
        </div>
        <div id='info-container'>
            <div id='info-inner'>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <Button className='btn' text='Get in Touch' paddingVertical="14px" paddingSides="49px"/>
            </div>
        </div>
    </div>
  )
}

export default Aside