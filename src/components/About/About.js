import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./About.css"

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('auth_token'))
    {
      navigate('/login');
    }  

  }, [navigate])

  return (
    <div className='aboutus'>
      <div>
        <h4>Let's Know Something About TextEditor</h4>
        <p>TextEditor is an simple text editor that performs desired operation on the provided text from the given option.</p> 
        <p>Technology used in this project-</p>
        <p>React JS, React Router, useEffect, HTML5, CSS3, JavaScript & Bootstrap 5,</p>
        <p> </p>
        <p>Please do check-out below my other projects as well.</p>
         
      </div>
      <div>
      <div className='projects'>
        <h5>MERN Stack Project - YourNootBook</h5> <a target={"blank"} href="https://yournotesbook.netlify.app/"><button>View</button></a>
      </div>

      <div className='projects'>
        <h5>QuickNews - Webapp using NEWS API</h5> <a target={"blank"} href="https://quickindiannews.netlify.app/"><button>View</button></a>
      </div>

      <div className='projects'>
        <h5>React JS Project - MI Store Clone</h5> <a target={"blank"} href="https://miclonebyrohit.netlify.app/"><button>View</button></a>
      </div>

      </div>
    </div>
  )
}

export default About