import styled from 'styled-components'

export const Container = styled.li`
  border: 0.0625rem solid rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  height: 5rem;
  overflow: hidden;
  margin-bottom: 1rem;
  img {
    display: block;
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    object-position: center;
  }
`

export const Name = styled.h4`
  font-size: 1rem;
  font-weight: 700;
`

export const Content = styled.div`
  padding: 0.75rem;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: 400;
  justify-content: space-between;
`

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 3rem;
  button {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.25);
    border-left-width: 0.0625rem;
    border-style: solid;
    border-bottom-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    height: 2.5rem;
    cursor: pointer;
    &:first-of-type {
      border-bottom-width: 0.0625rem;
    }
  }
`
