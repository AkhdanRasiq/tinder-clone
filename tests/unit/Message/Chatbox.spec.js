import React from 'react'
import { render } from "@testing-library/react"

import Chatbox from "../../../src/components/Message/Chatbox.jsx"
import { timestampConverter } from '../../../src/utils/util'

const test_a_messages = {
  text      : "Test",
  user      : "Admin",
  timestamp : 1643468925
}

describe("Chatbox.jsx", () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(
      <Chatbox
        a_messages={{
          ...test_a_messages
        }}
      />
    )
  })

  it("renders properly when passed props", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("Passed props value renders properly", () => {
    const p_chatboxUser = wrapper.container.querySelector('.chatbox_user')
    const p_chatboxText = wrapper.container.querySelector('.chatbox_text')
    const p_chatboxTime = wrapper.container.querySelector('.chatbox_time')
    
    expect(p_chatboxUser.innerHTML).toBe(test_a_messages.user)
    expect(p_chatboxText.innerHTML).toBe(test_a_messages.text)
    expect(p_chatboxTime.innerHTML).toBe(timestampConverter(test_a_messages.timestamp))
  })
})
