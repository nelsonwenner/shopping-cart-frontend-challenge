import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.5rem 0.5rem rgba(0, 0, 0, 0.125);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Title = styled.h2`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
  text-align: center;
`

export const Content = styled.div`
  padding: 1rem;
`

export const Totals = styled.ul`
  li {
    align-items: center;
    border-top: 0.0625rem solid rgba(0, 0, 0, 0.125);
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    padding: 1rem;
    &:last-child {
      font-weight: 700;
    }
  }
`

export const Vouchers = styled.li`
  height: 3.25rem;
  span:first-child {
    margin-right: auto;
  }
`

export const Voucher = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 0.75rem;
  margin-right: 0.5rem;
  padding: 0.375rem 0.5rem;
`
