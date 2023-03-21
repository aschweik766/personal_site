import React from 'react';
import  { motion } from 'framer-motion';
import introImg from '../assets/images/ash_daisy_glacier.jpg';
import introProfile from '../assets/images/Ashley_portrait.png';

const About = () => {
  return (
    <>
    <div class="h-line"></div>
    <motion.div className='banner' id='about'
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 1 }}>
    <div>
      <h2 className='title'>
        About Me
      </h2>
    </div>
  
    <div className='about-container'>
      <div className='about-text'>
      <h3 className='box1'>Engineering, art and education have been passion projects in my family from the beginning. I take pride in my drive to always find something new to learn about, grow knowledge and skills, and create spaces for people in my life to share and grow with. </h3>
      <br></br>
      <h3 className='box2'>
        As a developer, I delight in a good puzzle and efficient problem solving. My graduate education history in communication sciences and disorders, speech and language pathology, and immersive engineering training with General Assembly, continue to prepare my experiences and desire for efficient and collaborative work. My passion to improve and create better systems and contribute to accessible web development, fuels my continuous care about the impact of good applications and their functionality for users.
      </h3>
      <br></br>
      <h3 className='box3'>
        I spend most of my freetime outdoors. You can find me with my husband and pets watching movies, exploring trails, making art and music, gardening, and finding joy in the simple life with family and friends.
      </h3>
    </div>
    
    <div className='about-img'> 
      <img className='about-profile' src={introProfile} alt="Ashley smiling in pose"/> 
      <img className='about-fun' src={introImg} alt="Ashley kneeling with dog"/> 
    </div>
  </div>

  </motion.div>
  <div class="h-line"></div>
  </>
  )
}

export default About

   