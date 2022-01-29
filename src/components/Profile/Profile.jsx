import React from 'react'

import { Avatar } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Profile() {
  return (
    <div>
      <Avatar className='sidebarProfileAvatar' alt="Avatar Image" src="https://media-exp1.licdn.com/dms/image/C5103AQHB1GRZq-arKg/profile-displayphoto-shrink_400_400/0/1535513202972?e=1648684800&v=beta&t=NFXC30MwzF0Y3zJUgVJk7d3FMAmAHKCdbnESGrOmpYE" />
      <p className='sidebarProfileName'>AKHDAN RASIQ GUMELAR</p>
      <p className='sidebarProfileAbout'>Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in Mobile Application Development, ReactJS, Python, and JavaScript. Strong engineering professional graduated from SMK Telkom Jakarta.</p>
      <div className='sidebarProfilePersonalInfoContainer'>
        <LocationOnIcon fontSize='large' className='sidebarProfilePersonalInfoIcon' />
        <p className='sidebarProfilePersonalInfoText'>Indonesia, Jakarta</p>
      </div>
      <div className='sidebarProfilePersonalInfoContainer'>
        <EmailIcon fontSize='large' className='sidebarProfilePersonalInfoIcon' />
        <p className='sidebarProfilePersonalInfoText'>akhdan.rasiq@gmail.com</p>
      </div>
      <div className='sidebarProfilePersonalInfoContainer'>
        <GitHubIcon fontSize='large' className='sidebarProfilePersonalInfoIcon' />
        <p className='sidebarProfilePersonalInfoText'>github.com/AkhdanRasiq</p>
      </div>
      <div className='sidebarProfilePersonalInfoContainer'>
        <LinkedInIcon fontSize='large' className='sidebarProfilePersonalInfoIcon' />
        <p className='sidebarProfilePersonalInfoText'>linkedin.com/in/AkhdanRasiq</p>
      </div>
    </div>
  )
}

export default Profile
