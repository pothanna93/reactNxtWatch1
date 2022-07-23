import styled from 'styled-components'

export const HomeViewContainer = styled.div`
  border: 4px solid green;
  margin-top: 6px;
`

export const SearchAndItemsContainer = styled.div`
  border: 3px solid green;
  min-height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.homeBgColor ? '#f1f5f9' : '#0f0f0f')};
`

export const SearchInputDiv = styled.div`
  display: flex;
  border: 1px solid #7e858e;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
export const InputElement = styled.input`
  padding: 10px;
  width: 100%;
  color: ${props => (props.fontColor ? '#7e858e' : '#fff')};
  background-color: transparent;
  outline: none;
  border: none;
`
export const SearchButton = styled.button`
  cursor: pointer;
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 0px;
  margin: 0px;
`
export const HomeFailureViewContainer = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const HomeFailureImg = styled.img`
  width: 300px;
  height: 320px;
`
export const HomeFailHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: ${props => (props.failHeading ? '#313131' : '#fff')};
`
export const HomeFailDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #475569;
`
export const HomeFailButton = styled.button`
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
export const NoSearchResultContainer = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => (props.failureItemBg ? '#f1f5f9' : '#0f0f0f')};
`
export const NoSearchFailureImg = styled.img`
  width: 300px;
  height: 320px;
`
export const NoSearchFailHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  color: ${props => (props.failHeading ? '#313131' : '#fff')};
`
export const NoSearchFailDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #475569;
`
export const NoSearchFailButton = styled.button`
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
