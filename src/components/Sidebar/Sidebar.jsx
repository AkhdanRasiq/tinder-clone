import React from 'react'

import Profile from '../Profile/Profile'
import Message from '../Message/Message'

import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bPersonIsActive: false,
      bMessageIsActive: true
    }
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.a_bPersonIsActive !== prevProps.a_bPersonIsActive)
      this.setState({ bPersonIsActive: this.props.a_bPersonIsActive })

    if(this.props.a_bMessageIsActive !== prevProps.a_bMessageIsActive)
      this.setState({ bMessageIsActive: this.props.a_bMessageIsActive })
  }

  handleSidebarCoverHide = (event) => {
    this.setState({ bPersonIsActive: false, bMessageIsActive: false })
    const eventDispatch = new CustomEvent('sidebarCover', { detail: { bPersonIsActive: false, bMessageIsActive: false }});
    window.dispatchEvent(eventDispatch)
  }

  render() {
    const styleSidebarCoverShow = {
      '--display'                     : 'flex'
    }
    const styleSidebarCoverHide = {
      '--display'                     : 'none'
    }

    const styleProfileSidebarHide = getWindowDimensions() > 885 ? {
      '--margin-left'                 : '-30vw',
      '--margin-left-default'         : '-30vw',
      '--margin-left-default-mobile'  : '-100vw'
    } : {
      '--margin-left'                 : '-100vw',
      '--margin-left-default'         : '-30vw',
      '--margin-left-default-mobile'  : '-100vw'
    }
    const styleProfileSidebarShow = {
      '--margin-left'                 : '0vw'
    }

    const styleMessageSidebarHide = {
      '--margin-left'                 : '100vw',
      '--margin-left-default'         : '100vw',
      '--margin-left-default-mobile'  : '100vw'
    }
    const styleMessageSidebarShow = getWindowDimensions() > 885 ? {
      '--margin-left'                 : '70vw',
      '--margin-left-default'         : '100vw',
      '--margin-left-default-mobile'  : '100vw'
    } : {
      '--margin-left'                 : '0vw',
      '--margin-left-default'         : '100vw',
      '--margin-left-default-mobile'  : '100vw'
    }

    return (
      <div className='sidebar'>

        <div className='sidebarCover'
          style={(this.state.bPersonIsActive || this.state.bMessageIsActive) ? styleSidebarCoverShow : styleSidebarCoverHide}
          onClick={this.handleSidebarCoverHide}
        />
        <div className='sidebarCard' style={this.state.bPersonIsActive ? styleProfileSidebarShow : styleProfileSidebarHide}>
          <div className='sidebarProfileCloseContainer'>
            <IconButton onClick={this.handleSidebarCoverHide}>
              <CloseIcon fontSize="large" className="headerIcon" />
            </IconButton>
          </div>
          <Profile />
        </div>


        {/* MESSAGE SIDEBAR */}

        <div className='sidebarCard' style={this.state.bMessageIsActive ? styleMessageSidebarShow : styleMessageSidebarHide}>
          <div className='sidebarMessageCloseContainer'>
            <IconButton onClick={this.handleSidebarCoverHide}>
              <CloseIcon fontSize="large" className="headerIcon" />
            </IconButton>
          </div>
          <Message />
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
