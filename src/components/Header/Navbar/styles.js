import styled from 'styled-components'

export const Wrapper = styled.header`
  color: ${({ theme }) => theme.text.secondary};
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1299px) {
    padding: 0 ${({ theme }) => theme.spacings.xsmall};
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.bold};
`

export const User = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  font-weight: ${({ theme }) => theme.font.bold};

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  img {
    height: ${({ theme }) => theme.font.sizes.medium};
    width: ${({ theme }) => theme.font.sizes.medium};

    border-radius: 50%;
    margin-right: 1rem;
  }
`
