import React from 'react'
import { shallow } from "enzyme"

import Sidebar from "../../../src/components/Sidebar/Sidebar"
import Profile from "../../../src/components/Profile/Profile"
import Message from "../../../src/components/Message/Message"

describe("Sidebar.jsx", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Sidebar
        a_bPersonIsActive={false}
        a_bMessageIsActive={false}
      />
    )
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  it("Profile & Message renders properly", () => {
    expect(wrapper.contains(<Profile />)).toBe(true)
    expect(wrapper.contains(<Message />)).toBe(true)
  })
})
