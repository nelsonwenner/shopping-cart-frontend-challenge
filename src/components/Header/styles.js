import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.text.secondary};
  width: 100%;
  height: 5rem;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
