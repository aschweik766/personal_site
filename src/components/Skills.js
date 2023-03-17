import React from 'react'
import { motion } from 'framer-motion'
import iconBootstrap from '../assets/icons/icons8-bootstrap.949a2d9fac9dae2aed1c949720c79c69.svg';
import iconJavascript from '../assets/icons/icons8-javascript.8458dcf49874aef72e8b6aaec52f269d.svg';
import iconCSS from '../assets/icons/icons8-css3.b1c98d18e5d92db4fcf179a7e27440a4.svg';
import iconHTML from '../assets/icons/icons8-html-5.a1f798eb176d380ccaf27a001f6b502f.svg';
import iconDjango from '../assets/icons/icons8-django.1c4f47d306a45af4d5b48c5c745356e4.svg';
import iconExpress from '../assets/icons/icons8-express-js.e392bea90d416e3bd004c275a4ecd39d.svg';
import iconMongo from '../assets/icons/icons8-mongoDB.png';
import iconNode from '../assets/icons/icons8-node-js.efbfe00ac9ccc59279f52e60f900843f.svg';
import iconPostgres from '../assets/icons/icons8-postgresql.f09f2c7ba748ac0734ed72ef3ff11312.svg';
import iconPython from '../assets/icons/icons8-python.30aff2213bbc7b666e89aa82fea0772b.svg';
import iconReact from '../assets/icons/icons8-react-native-color.7e7843c07a392a9e1fe5a45f83c8894b.svg';
import iconReactNative from '../assets/icons/icons8-react-native.svg';
import iconRedux from '../assets/icons/icons8-redux.svg';
import iconTypescript from '../assets/icons/icons8-typescript.svg';
import iconAngular from '../assets/icons/icons8-angularjs.svg';
import iconFigma from '../assets/icons/icons8-figma.svg';
import iconCPlus from '../assets/icons/icons8-c++.svg';
import iconHeroku from '../assets/icons/icons8-heroku.svg';

const Skills = () => {
  return (
   <motion.div 
   className='banner' id='skills'
   whileInView={{opacity: [0, 1]}}
   transition={{duration: 1}}>
    <div>
      <h2>Skills</h2>
    </div>

    <div className='skills-container'>
      <div className='icons'>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconBootstrap} alt='bootstrap icon'
            className='bootstrap-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconJavascript} alt='javascript icon'
            className='javascript-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconCSS} alt='css icon'
            className='css-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconHTML} alt='html icon'
            className='html-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconReact} alt='React icon'
            className='react-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconNode} alt='node icon'
            className='node-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconExpress} alt='express icon'
            className='express-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconPython} alt='python icon'
            className='python-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconDjango} alt='django icon'
            className='django-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconReactNative} alt='react native icon'
            className='react-native-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconRedux} alt='redux icon'
            className='redux-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconTypescript} alt='typescript icon'
            className='typescript-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconAngular} alt='angular icon'
            className='angular-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconMongo} alt='mongo icon'
            className='mongo-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconPostgres} alt='postgres icon'
            className='postgres-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconFigma} alt='figma icon'
            className='figma-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconCPlus} alt='cplus icon'
            className='cplus-icon'/>
        </motion.div>
        <motion.div
          initial={{ scale: 1}}
          whileHover={{ scale: 1.3}}
          className="icon-item">
            <img src={iconHeroku} alt='heroku icon'
            className='heroku-icon'/>
        </motion.div>
      </div>
    </div>

   </motion.div>
  )
}

export default Skills