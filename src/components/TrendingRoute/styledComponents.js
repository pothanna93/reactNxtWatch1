import styled from 'styled-components'

export const TrendingContainer = styled.div`
  border: 2px solid red;
`
export const UnOrderList = styled.ul`
  border: 3px solid green;
  padding-left: 0px;
`
export const TrendNav = styled.nav`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 20px;
`
export const TrendHeading = styled.h1`
  font-family: 'Roboto';
`
export const TrendFailureViewContainer = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => (props.failureItemBg ? '#f1f5f9' : '#0f0f0f')};
`
export const TrendFailureImg = styled.img`
  width: 300px;
  height: 320px;
`
export const TrendFailHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: ${props => (props.failHeading ? '#313131' : '#fff')};
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
