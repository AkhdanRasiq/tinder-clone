import React from 'react'
import { shallow } from "enzyme"

import MessageHeader from "../../../src/components/Message/MessageHeader"

describe("MessageHeader.jsx", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <MessageHeader />
    )
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("renders user online", () => {
    wrapper.setState({ isOnline: true})

    expect(wrapper.state('isOnline')).toEqual(true)
    expect(wrapper.find('#userOnline').length).toBe(1)
  })

  it("renders user offline", () => {
    wrapper.setState({ isOnline: false})

    expect(wrapper.state('isOnline')).toEqual(false)
    expect(wrapper.find('#userOffline').length).toBe(1)
  })
})
