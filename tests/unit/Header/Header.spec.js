import React from 'react'
import { shallow } from "enzyme"

import Header from "../../../src/components/Header/Header"

describe("Header.jsx", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Header />
    )
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  it("Person and ", () => {
    const btnPerson   = wrapper.find('#btnPerson')
    const btnMessage  = wrapper.find('#btnMessage')

    expect(btnPerson.length).toBe(1)
    expect(btnMessage.length).toBe(1)

    btnPerson.at(0).simulate('click')
    btnMessage.at(0).simulate('click')

    expect(wrapper.state('bPersonIsActive')).toBe(true)
    expect(wrapper.state('bMessageIsActive')).toBe(true)
  })
})
