import React from 'react'
import { shallow, mount } from "enzyme"
import { SocketIO, Server } from 'mock-socket'

// custom imports
import Message from "../../../src/components/Message/Message"


describe('Message.jsx', () => {
  let wrapper, shallowWrapper
  const mockServer = new Server('ws://test')
  window.io = SocketIO

  beforeEach(async () => {
    const mockUpObject = {
      focus: () => null,
    };
    global.document.getElementById = jest.fn(() => mockUpObject);

    wrapper = mount(<Message />)
    mockServer.on('connection', socket => {
      socket.emit('task', 'test message from mock server')
    })
    shallowWrapper = shallow(<Message />)
  })

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("has Message component", () => {
    expect(shallowWrapper.find('.messageContainer').length).toBe(1)
  })
})
