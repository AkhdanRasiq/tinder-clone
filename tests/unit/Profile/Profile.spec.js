import React from 'react'
import { render } from "@testing-library/react"

import Profile from "../../../src/components/Profile/Profile.jsx"

describe("Profile.jsx", () => {
  it("Render Profile.jsx Properly", async () => {
    const wrapper = render(
      <Profile />
    )
    await expect(wrapper).toMatchSnapshot()
  })
})
