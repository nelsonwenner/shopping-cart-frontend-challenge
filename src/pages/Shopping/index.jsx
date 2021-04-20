import React, { useCallback } from 'react'
import { toast } from 'react-toastify'

import { Wrapper, Content, CheckoutButton } from './styles'

import Products from '@/components/Products'
import Cart from '@/components/Cart'

const Shopping = () => {
  const handleCheckout = useCallback(() => {
    toast.info('Checkout successfully done')
  }, [])

  return (
    <Wrapper>
      <Content>
        <Products />
        <Cart />
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
      </Content>
    </Wrapper>
  )
}

export default Shopping
