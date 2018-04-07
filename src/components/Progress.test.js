import React from 'react'
import { shallow } from 'enzyme'
import { Progress } from './Progress.js'

const testValues = {
  word: "New",
  guesses: ["z","x","y"]
}


describe('<Progress />', () => {
  const newProgress = shallow(
    <Progress />
  )

  it('renders a div with class Board', () => {
    expect(newProgress).toHaveTagName('div')
    expect(newProgress).toHaveClassName('Guesses')
  })
})
