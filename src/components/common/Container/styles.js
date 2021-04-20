import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 993px) {
    .container {
      width: 70%;
    }
  }

  @media only screen and (min-width: 601px) {
    .container {
      width: 85%;
    }
  }
`

export default Container
