import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => (
  <div>
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title="Contact"/>
        <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>FindUs</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Afganistan, Herat, Tnak Meakaze </p>
          <p className='p__cormorant' style={{margin:'2rem 0',color:'#DCCA87'}}>Openning Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00am - 03:00 am </p>
        </div>
        <button className='custom__button' style={{marginTop:'2rem'}} type='button'>View More</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="FindUs" />
      </div>
    </div>
  </div>
);

export default FindUs;
