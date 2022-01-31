import React from 'react'
import { shallow } from "enzyme"

import MessageBody from "../../../src/components/Message/MessageBody"

const test_a_messages = {
  text      : "Test",
  user      : "Admin",
  timestamp : 1643468925
}

describe("MessageBody.jsx", () => {
  let wrapper

  beforeEach(() => {
    const mockUpObject = {
      focus: () => null,
    };
    global.document.getElementById = jest.fn(() => mockUpObject);
    
    wrapper = shallow(
      <MessageBody
        a_arrMessages={[{
            ...test_a_messages
        }]}
      />
    )
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
