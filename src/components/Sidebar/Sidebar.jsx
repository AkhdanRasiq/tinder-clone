import React from 'react'

import Profile from '../Profile/Profile'
import Message from '../Message/Message'

import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';

import { wsRefreshConnection } from '../../utils/adapters'

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bPersonIsActive: false,
      bMessageIsActive: false
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

  handleRefreshWsConnection = () => {
    wsRefreshConnection()
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
            <Tooltip title='Refresh Websocket'>
              <IconButton onClick={this.handleRefreshWsConnection}>
                <RefreshIcon fontSize="large" className="headerIcon" />
              </IconButton>
            </Tooltip>
          </div>
          <Message />
        </div>
      </div>
    )
  }
}

export default Sidebar
