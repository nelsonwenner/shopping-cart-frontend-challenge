import React from 'react'

import { Container, Title, Icon, Subtitle } from './styles'

const EmptyCart = () => {
  return (
    <Container>
      <Title>Looks like your cart is empty</Title>
      <Icon>:/</Icon>
      <Subtitle>
        Try adding some products to your cart and they will show up here
      </Subtitle>
    </Container>
  )
}

export default EmptyCart
