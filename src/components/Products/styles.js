import styled, { keyframes } from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  @media (min-width: 768px) {
    margin-bottom: auto !important;
  }
`

export const Message = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #d44;
`

const rotate = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`

export const Loading = styled.div`
  animation: ${rotate} 0.5s linear infinite;
  border: 0.5rem solid ${({ theme }) => theme.colors.secondary};
  border-left-color: transparent;
  border-radius: 50%;
  border-top-color: transparent;
  height: 4rem;
  margin: auto;
  width: 4rem;
`
