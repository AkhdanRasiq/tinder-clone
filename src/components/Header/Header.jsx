import React from "react"
import { Person } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { Forum } from "@mui/icons-material"

import Sidebar from "../Sidebar/Sidebar"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bPersonIsActive: false,
      bMessageIsActive: false
    }
  }

  componentDidMount() {
    window.addEventListener("sidebarCover", this.handleEventSidebarCover);
  }

  componentWillUnmount() {
    window.removeEventListener("sidebarCover", this.handleEventSidebarCover);
  }

  handleEventSidebarCover = (event) => {
    this.setState({ bPersonIsActive: event.detail.bPersonIsActive, bMessageIsActive: event.detail.bMessageIsActive })
  }

  handlePersonSidebar = (event) => {
    this.setState({ bPersonIsActive: !this.state.bPersonIsActive })
  }

  handleMessageSidebar = (event) => {
    this.setState({ bMessageIsActive: !this.state.bMessageIsActive })
  }

  render() {
    return (
      <div className="header">
        <Sidebar
          a_bPersonIsActive={this.state.bPersonIsActive}
          a_bMessageIsActive={this.state.bMessageIsActive}  
        />

        <div className="headerContainer">
          <IconButton onClick={this.handlePersonSidebar}>
            <Person fontSize="large" className="headerIcon" />
          </IconButton>

          <img
            className="headerLogo"
            src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
            alt=""
          />

          <IconButton onClick={this.handleMessageSidebar}>
            <Forum fontSize="large" className="headerIcon" />
          </IconButton>
        </div>
      </div>
    )
  }
}

export default Header
