import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  border: 1px solid red;
  background-color:${props => (props.bgColor ? '#f1f5f9' : '#0f0f0f')}
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 42px;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
`
export const NotFoundImg = styled.img`
  width: 300px;
  height: 320px;
`
