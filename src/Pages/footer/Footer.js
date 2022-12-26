import React from 'react'
import './footer.css'
import Footersvg from '../../assets/footersvg'
import {FaLinkedinIn} from  "react-icons/fa";
import {SiLeetcode,SiHackerrank} from 'react-icons/si';
import {BsGithub} from 'react-icons/bs';
import {ImMail2} from 'react-icons/im';
import {FiPhoneCall} from 'react-icons/fi';
import { HashLink as Link } from 'react-router-hash-link';


const Footer = () => {
  return (
    <div id="footer">
      <div className='footerContainer'>
        <div className='footerlinkcontainer'>
          <div className='footerlinks'>
            <h3>External Links</h3>
            <p><ImMail2 className='icon' /> <span><a href="mailto:amitkumarsingh5785@gmail.com">amitkumarsingh5785@gmail.com</a></span></p>
            <p><FiPhoneCall className='icon' /> <span><a href="tel:+918585943026">8585943026</a></span></p>
            <p>
              <a href='https://www.linkedin.com/in/amit5785/' ><FaLinkedinIn className='icon'/></a> 
              <a href="https://github.com/amit5785" ><BsGithub className='icon' /></a>
              <a href='https://leetcode.com/amit5785/' ><SiLeetcode className='icon' /></a> 
              <a href='https://www.hackerrank.com/amit5785' ><SiHackerrank className='icon' /></a>
            </p>
            <div className='myresume'>
             <a href='https://drive.google.com/file/d/1ZAT1CnK9_dZte-4C8xOF4RUWmNOwdYPe/view?usp=share_link'>My Resume</a>
            </div>
          </div>
          <div className='footersvg'>
            <Footersvg />
          </div>
        </div>
        <div className='copyrightsection'>
          <p>Copyright © <span><Link to='#'>Amit</Link></span>. Made By Amit Kumar Singh.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;