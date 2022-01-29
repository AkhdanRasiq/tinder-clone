import React from 'react';
import { render } from "@testing-library/react"
import { shallow, mount } from "enzyme"
// import { assert } from 'chai'

import Chatbox from "../../../src/components/Message/Chatbox.jsx"

describe("Chatbox.jsx", () => {
  it("Render Chatbox.jsx", async () => {
    const wrapper = shallow(
      <Chatbox
        a_messages={{
          text      : "Test",
          user      : "Admin",
          timestamp : 1643468925
        }}
      />
    )
    await expect(wrapper).toMatchSnapshot();
    const p_chatboxUser = wrapper.find('.chatbox_user')
    await expect(p_chatboxUser.length).toBe(1)
  })
})
