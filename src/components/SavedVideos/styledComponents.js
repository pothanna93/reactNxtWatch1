import styled from 'styled-components'

export const TrendingAllContainer = styled.div`
  border: 2px solid aqua;
  display: flex;
  background-color: ${props => (props.PageBgColor ? '#f9f9f9' : '#231f20')};
`
export const TrendSidDiv = styled.div`
  border: 2px solid black;
  margin: 5px;
  display: flex;
  flex-direction: column;
`
export const TrendingContainer = styled.div`
  border: 4px solid red;
`
export const NavAndTrendContainer = styled.div`
  border: 3px solid black;
  width: 100%;
  margin: 5px;
  background-color: ${props => (props.itemsBgColor ? '#f1f5f9' : '#0f0f0f')};
`
export const UnOrderList = styled.ul`
  border: 3px solid green;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`
export const TrendNav = styled.nav`
  border: 1px solid black;
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
export const TrendFailureViewContainer = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
