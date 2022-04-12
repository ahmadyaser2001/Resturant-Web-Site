import React from 'react';
import { images,data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';
const AwardCard=({award:{imgUrl,title,subtitle}})=>(
  <div className='app__laurels_award-card'>
    <img src={imgUrl} alt="" />
    <div className='app__laurels_award-card_content'>
      <div className='p__cormorant' style={{color:'#DCCA87'}}>{title}</div>
      <div className='p__cormorant' >{subtitle}</div>
    </div>
  </div>
)
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title="Awrad & recognition"/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className='app__laurels_award'>
        {data.awards.map((award)=> <AwardCard award={award} key={award.title}/>)}
      </div>
    </div>


    
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
