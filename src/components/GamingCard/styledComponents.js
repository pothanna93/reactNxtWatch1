import styled from 'styled-components'

export const GamingCardItem = styled.li`
  margin: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 200px;
`
export const GameImg = styled.img`
  width: 100%;
  height: 300px;
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.gameTitle ? '#313131' : '#fff')};
  margin-top: 6px;
  margin-bottom: 0px;
  font-weight: 600;
`
export const GameViewCount = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 15px;
  font-weight: 500;
`
