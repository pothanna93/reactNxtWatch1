import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  height: 100%;

  padding-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const UnOrderLists = styled.ul`
  list-style-type: none;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 0px;
  margin-left: 0px;
  width: 100%;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;

  background-color: ${props => props.isActive};
  width: 100%;
  cursor: pointer;
`
export const ContactPageContainer = styled.div`
  display: flex;

  flex-direction: column;
`
export const ContactPageHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.fontColor ? '#000' : '#fff')};
`
export const IconsItemsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ImageLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 16px;
`
export const ContactPageDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: ${props => (props.fontColor ? '#000' : '#fff')};
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${props => props.color};
`
export const ItemText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 150px;
  margin-left: 12px;
`
