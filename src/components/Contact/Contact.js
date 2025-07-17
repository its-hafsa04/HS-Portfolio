
import './Contact.css'
import {FaLinkedin, FaMedium, FaDiscord} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import { FiInstagram } from "react-icons/fi";

function Contact  () {


  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title ' >STAY <span className='about_contact'>CONNECTED</span> </h2>

      <div id='cont'>
        <a href="https://www.linkedin.com/in/hafsa-sajid-38bb4627b/" target="_blank" aria-label='linkedin' className='link link--icon'> <FaLinkedin size={30}/> </a>
        <a href="https://github.com/its-hafsa04" target="_blank" aria-label='github' className='link link--icon'> <BsGithub  size={30}/> </a>      
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sajidhafsa23@gmail.com" aria-label="email" className='link link--icon'> <MdEmail  size={30}/> </a>
         <a href='https://discord.com/users/hafsa230146' aria-label="discord" className='link link--icon'> <FaDiscord size={30}/> </a>
         <a href='https://medium.com/@sajidhafsa23' aria-label="medium" className='link link--icon'> <FaMedium size={30}/> </a>
         <a href='https://www.instagram.com/hafsa_sajid23?igsh=aW53YjZhZzhhcHFo' aria-label="instagram" className='link link--icon'> <FiInstagram size={30}/> </a>
      </div>
     
    </section>
  )
}

export default Contact
