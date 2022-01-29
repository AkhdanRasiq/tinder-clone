import React from 'react';
import { render } from "@testing-library/react"

import Profile from "../../../src/components/Profile/Profile.jsx"

describe("Profile.jsx", () => {
  it("Render Profile.jsx", () => {
    const component = render(
      <Profile />
    )
    expect(component).toMatchSnapshot();
  })
})

// npm run build
// firebase deploy --only hosting

// TODO:
// 1. Remove Scrolling page vertical and horizontally 	(v)
// 2. Add animation for opening chat and profile 		(v)
// 3. Install Web Socket for chatting			(v)
// 4. Add Jest Test					(.)
// 5. Install JWT to FE and BE				(.)
// 6. Setting Profile Text Size to be smaller on low heigh	(.)
// 5. Add Storybook					(.)

// Helper:
// To get dinamycally style change, change the className Property with ternery if else

// 360-564