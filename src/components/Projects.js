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
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>MoveIt HEP</p>
            </div>
            <a href='' target='_blank' rel='noreferrer' className='project-link'><img src={moveIt} alt='move it homepage'></img></a>
          </div>
          <div className='link-block'>

            <a href='' target='_blank' rel='noreferrer' className='project-github'>Demo</a>
            <a href='https://github.com/aschweik766/move-it-frontend' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          </div>
          <p className='project-description'><b>React, Node.js, custom API, Google Identity, MERN stack</b>
            <br></br>
            <br></br>
             this application features clinically sourced exercise data for Physical Therapists to utilize on the job when sharing home exercise programs. Search functionality is included where therapist users can find, favorite and share exercise plans and videos for treatment purposes. 
          </p>
        </div>

        <br></br>

        <div className='project-block' id='project2'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>Align</p>
            </div>
            <a href='' target='_blank' rel='noreferrer' className='project-link'><img src={align} alt='align homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <div className='link-block'>
            <a href='https://peaceful-sunshine-1cdc44.netlify.app/' target='_blank' rel='noreferrer' className='project-github'>Demo</a>
            <a href='https://github.com/aschweik766/breakfast-club-FrontEnd' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          </div>
          <p className='project-description'><b>Mongo, Express, React, Node.js, CSS</b>
            <br></br>
            an application that displays daily/monthly horoscope information, personal to the user, and includes a dating feature that utilizes swipe functionality
          </p>
        </div>

        <br></br>

        <div className='project-block' id='project3'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>GardenPlanner</p>
            </div>
            <a href='https://evening-fjord-81831.herokuapp.com/gardenPlanner/Plant' target='_blank' rel='noreferrer' className='project-link'><img src={gardenPlanner} alt='garden homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <div className='link-block'>
            <a href='https://evening-fjord-81831.herokuapp.com/gardenPlanner/Plant' target='_blank' rel='noreferrer' className='project-github'>Demo</a>
            <a href='https://github.com/aschweik766/gardenPlannerApp' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          </div>
          <p className='project-description'>
            <b>Mongo, Express, Node.js, EJS, Bootstrap</b>
            <br></br>
            an application that showcases a 'top picks' for gardening in containers database detailing the needs for plants to thrive during a garden season, how to plant, and where to shop.</p>
        </div>

        <br></br>
        <div className='project-block' id='project4'>
          <div className='project-item'>
            <div className='browser'>
              <div className='circle1'></div>
              <div className='circle2'></div>
              <div className='circle3'></div>
              <p className='project-title'>Sequence It</p>
            </div>
            <a href='https://aschweik766.github.io/sequenceItGame/startpage.html' target='_blank' rel='noreferrer' className='project-link'><img src={sequenceIt} alt='Sequence It homepage'></img></a>
          </div>
          {/* <p className='project-title'>TherapyReady</p> */}
          <div className='link-block'>
            <a href='https://aschweik766.github.io/sequenceItGame/startpage.html' target='_blank' rel='noreferrer' className='project-github'>Demo</a>
            <a href='https://github.com/aschweik766/sequenceItGame' target='_blank' rel='noreferrer' className='project-github'>Github</a>
          </div>
          <p className='project-description'>
            <b>JavaScript, HTML, CSS</b>
            <br></br>
            a drag and drop game using HTML, CSS, and Vanilla JavaScript. The application renders in the browser, implements DOM manipulation and is constructed by functions</p>
        </div>
      </div>
   

    </motion.div>

       <div class="h-line"></div>
    </>
  )
}

export default Projects