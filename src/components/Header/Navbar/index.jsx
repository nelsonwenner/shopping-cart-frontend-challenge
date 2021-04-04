import React from 'react'

import * as S from './styles'

import Container from '@/components/common/Container/styles'
import avatar from '@/assets/avatar/default.png'

const Navbar = () => (
  <S.Wrapper as={Container}>
    <S.Title>Shopping</S.Title>
    <S.User>
      <img alt="avatar" src={avatar} />
      <span>John Doe</span>
    </S.User>
  </S.Wrapper>
)

export default Navbar
