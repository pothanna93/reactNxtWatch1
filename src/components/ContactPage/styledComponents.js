import styled from 'styled-components'

export const ContactPageContainer = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
`
export const ContactPageHeading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  color: ${props => (props.fontColor ? '#000' : '#fff')};
`
export const IconsItemsContainer = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
`
export const ImageLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 16px;
`
export const ContactPageDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => (props.fontColor ? '#000' : '#fff')};
`
