import styled from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.main`
  margin: 0px auto;
  max-width: 70rem;
  padding: 4rem 1rem;
  width: 100%;
  > *:not(:last-child) {
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      margin-bottom: 0px;
    }
  }
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 2fr 1.875fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1.25fr;
  }
`

export const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.25rem;
  font-weight: 500;
  grid-column: 2 / 3;
  padding: 1rem;
  text-transform: uppercase;
  width: 100%;
`
