import React from 'react'
import { Avatar } from '@mui/material'

import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bIsActive: false
    }
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.a_bIsActive !== prevProps.a_bIsActive)
        this.setState({ bIsActive: this.props.a_bIsActive })
  }

  handleSidebarCoverHide = (event) => {
    this.setState({ bIsActive: !this.state.bIsActive })
    const eventDispatch = new CustomEvent('sidebarCover', { bIsActive: !this.state.bIsActive });
    window.dispatchEvent(eventDispatch)
  }

  render() {
    const styleSidebarCoverShow = {
      '--display': 'flex'
    }
    const styleSidebarCoverHide = {
      '--display': 'none'
    }
    const styleProfileSidebarHide = getWindowDimensions() > 885 ? {
      '--margin-left': '-30vw'
    } : {
      '--margin-left': '-100vw'
    }
    const styleProfileSidebarShow = {
      '--margin-left': '0vw'
    }

    return (
      <div className='sidebar'>

        <div className='sidebarCover'
          style={this.state.bIsActive ? styleSidebarCoverShow : styleSidebarCoverHide}
          onClick={this.handleSidebarCoverHide}
        />
        <div className='sidebarCard' style={this.state.bIsActive ? styleProfileSidebarShow : styleProfileSidebarHide}>
          <div className='sidebarProfileCloseContainer'>
            <IconButton onClick={this.handleSidebarCoverHide}>
              <CloseIcon fontSize="large" className="headerIcon" />
            </IconButton>
          </div>

          <Avatar className='sidebarProfileAvatar' alt="Avatar Image" src="https://media-exp1.licdn.com/dms/image/C5103AQHB1GRZq-arKg/profile-displayphoto-shrink_400_400/0/1535513202972?e=1648684800&v=beta&t=NFXC30MwzF0Y3zJUgVJk7d3FMAmAHKCdbnESGrOmpYE" />
          <p className='sidebarProfileName'>AKHDAN RASIQ GUMELAR</p>
          <p className='sidebarProfileAbout'>Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in Mobile Application Development, ReactJS, Python, and JavaScript. Strong engineering professional graduated from SMK Telkom Jakarta.</p>
          <div className='sidebarProfilePersonalInfoContainer'>
            <LocationOnIcon fontSize='large' className='sidebarProfilePersonalInfoIcon'/>
            <p className='sidebarProfilePersonalInfoText'>Indonesia, Jakarta</p>
          </div>
          <div className='sidebarProfilePersonalInfoContainer'>
            <EmailIcon fontSize='large' className='sidebarProfilePersonalInfoIcon'/>
            <p className='sidebarProfilePersonalInfoText'>indan.gumelar20@gmail.com</p>
          </div>
          <div className='sidebarProfilePersonalInfoContainer'>
            <GitHubIcon fontSize='large' className='sidebarProfilePersonalInfoIcon'/>
            <p className='sidebarProfilePersonalInfoText'>github.com/AkhdanRasiq</p>
          </div>
          <div className='sidebarProfilePersonalInfoContainer'>
            <LinkedInIcon fontSize='large' className='sidebarProfilePersonalInfoIcon'/>
            <p className='sidebarProfilePersonalInfoText'>linkedin.com/in/AkhdanRasiq</p>
          </div>
        </div>

        {/* <div className='sidebarCover'
          style={styleSidebarCoverShow}
        />
        <div className='sidebarCard' style={styleProfileSidebarShow}>
          <Avatar className='sidebarProfileAvatar' alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C5103AQHB1GRZq-arKg/profile-displayphoto-shrink_400_400/0/1535513202972?e=1648684800&v=beta&t=NFXC30MwzF0Y3zJUgVJk7d3FMAmAHKCdbnESGrOmpYE" />
          <p className='sidebarProfileName'>AKHDAN RASIQ GUMELAR</p>
          <p className='sidebarProfileAbout'>Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in Mobile Application Development, ReactJS, Python, and JavaScript. Strong engineering professional graduated from SMK Telkom Jakarta.</p>
          <div className='sidebarProfilePersonalInfoContainer'>
            <LocationOnIcon fontSize='large'/>
            <p className='sidebarProfilePersonalInfoText'>Indonesia, Jakarta</p>
          </div>
          <div className='sidebarProfilePersonalInfoContainer'>
            <EmailIcon fontSize='large'/>
            <p className='sidebarProfilePersonalInfoText'>indan.gumelar20@gmail.com</p>
          </div>
          <div className='sidebarProfilePersonalInfoContainer'>
            <GitHubIcon fontSize='large'/>
            <p className='sidebarProfilePersonalInfoText'>github.com/AkhdanRasiq</p>
          </div>
          <div className='sidebarProfilePersonalInfoContainer'>
            <LinkedInIcon fontSize='large'/>
            <p className='sidebarProfilePersonalInfoText'>linkedin.com/in/AkhdanRasiq</p>
          </div>
        </div> */}

      </div>
    )
  }
}

export default Sidebar
