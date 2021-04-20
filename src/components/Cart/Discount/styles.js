import styled from 'styled-components'

export const Container = styled.form`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;
  input {
    border: 0.0625rem solid rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    padding: 0.625rem 1rem;
    width: 100%;
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.text.secondary};
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.625rem 1rem;
    text-transform: uppercase;
    cursor: pointer;
  }
`
