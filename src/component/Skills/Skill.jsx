import React from 'react'
import { motion } from 'framer-motion'
import './Skill.css'
import theme_pattern from '../../assets/theme_pattern.svg';

function Skill() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, type: "spring" }
    })
  }

  return (
    <div id='skill' className='skill'>
      <div className="skill-title">
        <h1>MY SKILLS</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="skill-row">
        {/* Frontend */}
        <motion.div 
          className="skill-card" 
          custom={0} 
          variants={cardVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <h2>Frontend</h2>
          <div className="popup">
            <p>React.js</p>
            <p>Redux</p>
            <p>JavaScript (ES6+)</p>
            <p>HTML5 & CSS3</p>
            <p>Tailwind CSS</p>
          </div>
        </motion.div>

        {/* Core Subjects */}
        <motion.div 
          className="skill-card" 
          custom={1} 
          variants={cardVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <h2>Core Subjects</h2>
          <div className="popup">
            <p>DBMS</p>
            <p>Computer Networks</p>
            <p>Operating System</p>
            <p>Computer Organization</p>
            <p>Compiler Design</p>
          </div>
        </motion.div>

        {/* DSA */}
        <motion.div 
          className="skill-card" 
          custom={2} 
          variants={cardVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <h2>DSA</h2>
          <div className="popup">
            <p>Arrays & Strings</p>
            <p>Linked List</p>
            <p>Trees & Graphs</p>
            <p>Dynamic Programming</p>
            <p>Sorting & Searching</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skill
