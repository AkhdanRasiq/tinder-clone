import React from "react"
import '../../assets/css/Header.css'
import { Person } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { Forum } from "@mui/icons-material"

function Header() {
  return (
    <div className="header">
      <IconButton>
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
  )
}

export default Header
