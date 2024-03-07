import React from 'react';
import './NavBar.css';
import Button from './Button.js';

const Main = () => {
  return (
    <div className='hero-bg'>
        <div className='inner-div'>
            <div>
            <h1 id='h1'>Let us find your<br/><span className='span'>Forever Food.</span></h1>
            <h4 id='h4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Nesciunt illo tenetur fuga ducimus numquam ea!</h4>
            <div className='btn-container'>
                <Button className='btn' text="Search Now" bgColor="#BE123C" paddingVertical="14px" paddingSides="49px"/>
                <Button className='btn' text="Know more" bgColor="White" textColor="#BE123C" paddingVertical="14px" paddingSides="49px"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main