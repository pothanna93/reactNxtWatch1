import styled from 'styled-components'

export const GamingAllContainer = styled.div`
  display: flex;
  background-color: ${props => (props.PageBgColor ? '#f9f9f9' : '#231f20')};
`

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SideDiv = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`
export const GamingItemsContainer = styled.div`
  width: 100%;
  margin: 5px;
  background-color: ${props => (props.itemsBgColor ? '#f1f5f9' : '#0f0f0f')};
`
export const TrendNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.navBg ? '#ebebeb' : '#181818')};
`
export const TrendHeading = styled.h1`
  font-family: 'Roboto';

  color: ${props => (props.trending ? '#1e293b' : '#fff')};
  font-size: 40px;
  margin-left: 16px;
`
export const UnOrderList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
`
export const TrendFailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
export const TrendFailureImg = styled.img`
  width: 340px;
  height: 320px;
`
export const TrendFailHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: ${props => (props.something ? '#212121' : ' #f9f9f9')};
`
export const TrendFailDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #475569;
`
export const TrendFailButton = styled.button`
  width: 120px;
  height: 38px;
  background-color: #4f46e5;
  color: #fff;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 16px;
`
