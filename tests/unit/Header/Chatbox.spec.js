import React from 'react';
import { render } from "@testing-library/react"

import Chatbox from "../../../src/components/Message/Chatbox.jsx"

jest.useFakeTimers()

describe("Chatbox.jsx", () => {
  it("Render Chatbox.jsx", async () => {
    const component = render(
      <Chatbox
        a_messages={{
          text      : "Test",
          user      : "Admin",
          timestamp : 1643468925
        }}
      />
    )
    await expect(component).toMatchSnapshot();
  })
})
