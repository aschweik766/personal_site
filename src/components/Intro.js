import React from 'react'

const Intro = () => {
  return (

      <header id="welcome-section">
        <div className="container">
          <h1>
            <span className="line">I do</span>
            <span className="line">web development</span>
            <span className="line">
              <span className="color">&</span> code.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>

  )
}

export default Intro