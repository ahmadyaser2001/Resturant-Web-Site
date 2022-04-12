import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Chef.css';

const Chef = () => (
  <div className='app__bg  section__padding app__wrapper'>
       <div className='app__wrapper_img app__wrapper_img-reverse'>
         <img src={images.chef} alt="chef" />
       </div>

       <div className=' app__wrapper_info'>
         <SubHeading title="Chef's word"/>
         <h1 className='headtext__cormorant'>What we Believe In</h1>
         <div className='app__chef-content'>
           <div className='app__chef-content_qoute'>
              <img src={images.quote} alt="quote"/>
              <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem perferendis </p>
           </div>
           <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sapiente vel minus sint dolorem veritatis consectetur facere voluptatibus ad provident. Tenetur, velit praesentium! Ex omnis facere, sapiente enim fuga quos. velit dolor, sit recusandae numquam quis quam suscipit, debitis earum, aliquid soluta illum voluptatum quia consectetur repellat ex ab nobis.</p>
         </div>

         <div className='app__chef-sign'>
           <p>Ahmad Yaser</p>
           <p className='p__opensans'>Chef & Founder</p>
           <img src={images.sign} alt="sign" />
         </div>
       </div>
  </div>
);

export default Chef;
