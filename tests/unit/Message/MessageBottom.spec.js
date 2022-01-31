import React from 'react'
import { shallow } from "enzyme"

import MessageBottom from "../../../src/components/Message/MessageBottom"

const test_a_messages = {
  text      : "Test",
  user      : "Admin",
  timestamp : 1643468925
}

describe("MessageBottom.jsx", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <MessageBottom
        a_arrMessages={[{
            ...test_a_messages
        }]}
      />
    )
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("All Components is Exist", () => {
    const tf_message  = wrapper.find('.messageBottom_textfield')
    const btn_message = wrapper.find('.messageBottom_btnSend')

    expect(tf_message.length).toBe(1)
    expect(btn_message.length).toBe(1)
  })

  it("Typing Message", () => {
    const tf_message  = wrapper.find('.messageBottom_textfield').at(0)

    tf_message.simulate('change', { target: { value: 'Test test test' } })
    expect(wrapper.state('strMessage')).toEqual('Test test test')
  })
})
