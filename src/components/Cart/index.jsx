import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Container, Title, Content, Totals, Vouchers, Voucher } from './styles'
import Product from './Product'
import Discount from './Discount'
import EmptyCart from './EmptyCart'

import { formatMoney } from '@/utils/format'

const Cart = () => {
  const {
    subtotal,
    shipping,
    discount,
    total,
    products,
    vouchers
  } = useSelector((state) => state.cart)

  const {
    subtotalFormatted,
    shippingFormatted,
    discountFormatted,
    totalFormatted
  } = useMemo(() => {
    return {
      subtotalFormatted: formatMoney(subtotal),
      shippingFormatted: formatMoney(shipping),
      discountFormatted: formatMoney(discount),
      totalFormatted: formatMoney(total)
    }
  }, [discount, shipping, subtotal, total])

  return (
    <Container>
      <Title>Shopping Cart</Title>
      {products?.length ? (
        <>
          <Content>
            <ul>
              {products.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </ul>

            <Discount />
          </Content>

          <Totals>
            <li>
              <span>Subtotal</span>
              <span data-testid="subtotal">$ {subtotalFormatted}</span>
            </li>
            <li>
              <span>Shipping</span>
              <span data-testid="shipping">$ {shippingFormatted}</span>
            </li>
            <Vouchers>
              <span>Discount</span>
              {vouchers?.map((voucher) => (
                <Voucher key={voucher.id}>{voucher.code}</Voucher>
              ))}
              <span data-testid="discount">$ {discountFormatted}</span>
            </Vouchers>
            <li>
              <span>Total</span>
              <span data-testid="total">$ {totalFormatted}</span>
            </li>
          </Totals>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  )
}

export default Cart
