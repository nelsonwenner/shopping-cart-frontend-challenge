import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { Container } from './styles'

import { getVouchers } from '@/services/api'

import { addVoucher } from '@/store/modules/cart/actions'

const Discount = () => {
  const dispatch = useDispatch()

  const [handlingSubmit, setHandlingSubmit] = useState(false)
  const [value, setValue] = useState('')

  const vouchers = useSelector((state) => state.cart.vouchers)

  const handleAddVoucher = useCallback(
    async (event) => {
      event.preventDefault()

      if (handlingSubmit) return

      setHandlingSubmit(true)

      try {
        const { data } = await getVouchers()
        const apiVouchers = data.vouchers

        const voucher = apiVouchers.find((voucher) => voucher.code === value)

        if (!voucher) {
          return toast.warning('No voucher was found with this code')
        }

        const exists = vouchers?.find(({ id }) => voucher.id == id)
        if (!exists) {
          dispatch(addVoucher(voucher))
          toast.success('Voucher added')
        } else {
          toast.warning('This voucher has already been added')
        }
      } catch (error) {
        toast.error('Something went wrong. Please try again')
      } finally {
        setHandlingSubmit(false)
      }
    },
    [dispatch, handlingSubmit, value, vouchers]
  )

  return (
    <Container onSubmit={handleAddVoucher}>
      <input
        type="text"
        placeholder="Discount code"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button type="submit">Apply</button>
    </Container>
  )
}

export default Discount
