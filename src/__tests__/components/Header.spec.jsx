import React from 'react'
import { shallow } from 'enzyme'

import Header from '@/components/Header'

describe('<Header>', () => {
  it('Should render Header component without fail and matches the snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
