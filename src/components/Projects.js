import React from 'react'
import align from '../assets/images/align.png'
import moveIt from '../assets/images/moveIt.png'
import sequenceIt from '../assets/images/sequenceIt.png'
import gardenPlanner from '../assets/images/gardenPlanner.png'
import { motion } from "framer-motion"


function Projects() {
  return (
    <>
    <motion.div className='banner' id='projects'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div>
        <h2 className='title' id='project-heading'>
          Projects
        </h2>
      </div>
      <div className='project-list'>

        <div className='project-block' id='project1'>
          <div className='project-item'>
            <div className='project-link'><img src={moveIt} alt='move it homepage'></img></div>
          </div>
          <div className='link-block'>
            <a href='https://github.com/aschweik766/move-it-frontend' target='_blank' rel='noreferrer' className='project-github'>Demo</a>
            <a href='https://github.com/aschweik766/move-it-frontend' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          </div>
          <p className='project-description'><span className='tools'>Mongo, Express, React, Node.js</span>
          <span className='info'>
             This application features clinically sourced exercise data for Physical Therapists to utilize on the job when sharing home exercise programs. Search functionality of my custom exercise API is included where therapist users can find, favorite and share exercise plans and videos for treatment purposes.</span>
          </p>
        </div>
        <br></br>
        <div className='project-block' id='project2'>
          <div className='project-item'>
            <div className='project-link'><img src={align} alt='move it homepage'></img></div>
          </div>
          <div className='link-block'>
            <a href='https://peaceful-sunshine-1cdc44.netlify.app/' target='_blank' rel='noreferrer' className='project-github'>Demo</a>
            <a href='https://github.com/aschweik766/breakfast-club-FrontEnd' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          </div>
          <p className='project-description'><span className='tools'>Mongo, Express, React, Node.js, CSS</span>
            <span className='info'>
            This application displays daily/monthly horoscope information personal to the user after account creation based on zodiac sign and birthdate information. It includes a dating feature that utilizes swipe functionality and suggests matches based on user's preferences and zodiac information.</span>
          </p>
        </div>
        <br></br>
        <div className='project-block' id='project3'>
          <div className='project-item'>
            <div className='project-link'><img src={gardenPlanner} alt='garden homepage'></img></div>
          </div>
          <div className='link-block'>
            <a href='https://evening-fjord-81831.herokuapp.com/gardenPlanner/Plant' target='_blank' rel='noreferrer' className='project-github'>Demo</a>
            <a href='https://github.com/aschweik766/gardenPlannerApp' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          </div>
          <p className='project-description'>
            <span className='tools'>Mongo, Express, Node.js, EJS, Bootstrap</span>
            <span className='info'>
            This application that showcases a 'top picks' for gardening in containers database detailing the needs for plants to thrive during a garden season, how to plant, and where to shop. Users can interact and edit varieties, delete or add new ones to the site.</span></p>
        </div>

        <br></br>
        <div className='project-block' id='project4'>
          <div className='project-item'>
            <div className='project-link'><img src={sequenceIt} alt='Sequence It homepage'></img></div>
          </div>
          <div className='link-block'>
            <a href='https://aschweik766.github.io/sequenceItGame/startpage.html' target='_blank' rel='noreferrer' className='project-github'>Demo</a>
            <a href='https://github.com/aschweik766/sequenceItGame' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          </div>
          <p className='project-description'>
            <span className='tools'>HTML, CSS, Vanilla Javascript</span>
            <span className='info'>This drag and drop education game uses HTML, CSS, and Vanilla JavaScript. The application renders in the browser, implements DOM manipulation and is constructed by functions. Designed for users learning safety tasks for daily living across 2 levels.
            </span>
            </p>
        </div>
      </div>
    </motion.div>
       <div class="h-line"></div>
    </>
  )
}

export default Projects