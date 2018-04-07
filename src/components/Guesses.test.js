import React from 'react'
import { shallow } from 'enzyme'
import { Guesses } from './Guesses.js'

describe('<Guesses />', () => {
  const newProgress = shallow(
    <Guesses />
  )

  it('renders a div with class Board', () => {
    expect(newProgress).toHaveTagName('div')
    expect(newProgress).toHaveClassName('Guesses')
  })
})
