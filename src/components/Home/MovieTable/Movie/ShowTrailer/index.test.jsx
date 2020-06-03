import React from 'react'
import ShowTrailer from '.'
import { shallow } from 'enzyme'

describe('ShowTrailer', () => {
  it('Should contain trailer-image', () => {
    const component = shallow(
      <ShowTrailer movieData={{ videos: { results: [{ key: null }] } }} />
    )
    expect(component.find('.trailer-image').exists()).toEqual(true)
  })

  it('Should contain react-player', () => {
    const component = shallow(
      <ShowTrailer movieData={{ videos: { results: [{ key: 'abc' }] } }} />
    )
    expect(component.find('.react-player').exists()).toEqual(true)
  })
})
