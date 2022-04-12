import React from 'react';
import images from '../../constants/images'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G" /> 
      </div>

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content-h1'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="Spoon" className='spoon_img'/>
          <p className='p__opensans'>Lorem ipperiores unde quidem eos repudiandae
           dolorem nam ad amet pariatur laborum. Commodi maiores possimus voluptatum,
            expedita numquam hic necessitatibus exercitationem ut!</p>
            <button className='custom__button' type='button'>Know More</button>
        </div>

        <div className=' app__aboutus__content_kinfe flex__center'>
          <img src={images.knife} alt="Kinfe" />
        </div>

        <div className='app__aboutus-content-history'>
          <h1 className='headtext__cormorant'>our History Us</h1>
          <img src={images.spoon} alt="Spoon" className='spoon_img'/>
          <p className='p__opensans'>Lorem ipperiores unde quidem eos repudiandae
           dolorem nam ad amet pariatur laborum. Commodi maiores possimus voluptatum,
            expedita numquam hic necessitatibus exercitationem ut!</p>
            <button className='custom__button' type='button'>Know More</button>
        </div>
      </div>
  </div>
);

export default AboutUs;
