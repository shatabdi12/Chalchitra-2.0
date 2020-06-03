import React from 'react'
import WatchList from '.'
import { shallow } from 'enzyme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('WatchList', () => {
  it('Should contain unwatchMovie, when no result data or addWatch', () => {
    const component = shallow(<WatchList />)
    expect(component.find(FontAwesomeIcon).props().className).toEqual('')
  })

  it('Should contain unwatchMovie, when addWatch exists', () => {
    const component = shallow(<WatchList addWatch={true} />)
    expect(component.find(FontAwesomeIcon).props().className).toEqual('font-clock')
  })

  it('Should contain unwatchMovie, when ids match', () => {
    const component = shallow(
      <WatchList watchLater={[{ id: 'test' }]} movieData={{ id: 'test' }} />
    )
    expect(component.find(FontAwesomeIcon).props().className).toEqual('font-clock')
  })
})
