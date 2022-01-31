import React from 'react'
import { shallow } from "enzyme"

import TinderCards from "../../../src/components/TinderCards/TinderCards"
import { fetchData } from '../../../src/utils/adapters'
import mockAxios from 'axios'

const response = {
  data: [
    {
        _id: "61ec99d6d030354b1c9ac2b9",
        name: "Test 1",
        imgUrl: "www.test.com",
        __v: 0
    },
    {
        _id: "61ec99d6d030354b1c9ac2ba",
        name: "Test 2",
        imgUrl: "www.test.com",
        __v: 0
    }
  ]
}

describe("TinderCards.jsx", () => {
  test('should fetch cards', async () => {
    mockAxios.get.mockImplementation(() => {
      return Promise.resolve(response)
    })

    fetchData().then(res => expect(res.data[0].name).toEqual('Test 1'))
    fetchData().then(res => expect(res.data[1].name).toEqual('Test 2'))
    
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
  })
})
