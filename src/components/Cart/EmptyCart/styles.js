import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 1.125rem;
  text-transform: uppercase;
`

export const Icon = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.75);
  display: flex;
  font-size: 2rem;
  height: 5rem;
  justify-content: center;
  margin: 2rem auto;
  width: 5rem;
`

export const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`
