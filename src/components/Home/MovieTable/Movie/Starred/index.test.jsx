import React from 'react'
import Starred from '.'
import { shallow } from 'enzyme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('Starred', () => {
  it('Should contain unfavoriteMovie, when no result data or isLoved', () => {
    const component = shallow(<Starred />)
    expect(component.find(FontAwesomeIcon).props().className).toEqual('')
  })

  it('Should contain unfavoriteMovie, when isLoved exists', () => {
    const component = shallow(<Starred isLoved={true} />)
    expect(component.find(FontAwesomeIcon).props().className).toEqual('font-star')
  })

  it('Should contain unfavoriteMovie, when ids match', () => {
    const component = shallow(
      <Starred favorites={[{ id: 'test' }]} movieData={{ id: 'test' }} />
    )
    expect(component.find(FontAwesomeIcon).props().className).toEqual('font-star')
  })
})
