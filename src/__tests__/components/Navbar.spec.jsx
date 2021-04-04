import React from 'react'
import { shallow } from 'enzyme'

import Navbar from '@/components/Header/Navbar'

describe('<Navbar>', () => {
  it('Should render Navbar component without fail and matches the snapshot', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper).toMatchSnapshot()
  })
})
