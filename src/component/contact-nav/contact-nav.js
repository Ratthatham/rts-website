import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {IconContext} from 'react-icons';

import './contact-nav.css'

const ContactNav = () => {
    return(
        <IconContext.Provider value={{style:{color:'black' ,width: '20px', height: 'auto' }}}>
            <div className="contact-nav-container">
                <a href='mailto:ratthatham.siridol@gmail.com' target="_blank" rel='noreferrer'><AiOutlineMail/></a> 
                <a href='https://twitter.com/EarthSiridon' target="_blank" rel='noreferrer'><BsTwitter/></a> 
                <a href='https://www.notion.so/Glad-to-see-you-on-my-cloud-cee98db2d0334527bef09828437f4f6f' target="_blank" rel='noreferrer'><SiNotion/></a> 
                <a href='https://www.linkedin.com/in/ratthatham-siridol/EarthSiridon' target="_blank" rel='noreferrer'><FaLinkedin/></a> 
                <a href='https://github.com/Ratthatham' target="_blank" rel='noreferrer'><FaGithub/></a> 
            </div>
        </IconContext.Provider>
    )
}

export default ContactNav;

