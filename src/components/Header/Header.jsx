import React from "react"
import { Person } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { Forum } from "@mui/icons-material"

import Sidebar from "../Sidebar/Sidebar"

// let bIsActive = false

// const onPersonSidebarAction = (a_bIsActive) => {
//   if (a_bIsActive)
//     bIsActive = !bIsActive
// }

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bIsActive: false
    }
  }

  componentDidMount() {
    window.addEventListener("sidebarCover", this.handleEventSidebarCover);
  }

  componentWillUnmount() {
    window.removeEventListener("sidebarCover", this.handleEventSidebarCover);
  }

  handleEventSidebarCover = (event) => {
    this.setState({ bIsActive: event.bIsActive })
  }

  handlePersonSidebar = (event) => {
    this.setState({ bIsActive: !this.state.bIsActive })
  }

  render() {
    return (
      <div className="header">
        <Sidebar a_bIsActive={this.state.bIsActive} />

        <div className="headerContainer">
          <IconButton onClick={this.handlePersonSidebar}>
            <Person fontSize="large" className="headerIcon" />
          </IconButton>

          <img
            className="headerLogo"
            src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
            alt=""
          />

          <IconButton>
            <Forum fontSize="large" className="headerIcon" />
          </IconButton>
        </div>
      </div>
    )
  }
}

export default Header
