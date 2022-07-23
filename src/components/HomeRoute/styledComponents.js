import styled from 'styled-components'

export const HomeContainer = styled.div`
  border: 4px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.homeBg ? '#fff' : '#231f20')};
  padding: 6px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const PopupAndItemsContainer = styled.div`
  border: 1px solid black;
  padding: 6px;
  margin: 5px;

  @media screen and (min-width: 768px) {
    order: 2;
    width: 80%;
    margin: 5px;
  }
`
export const SearchAndItemsContainer = styled.div`
  border: 3px solid green;
  min-height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
`
export const PopupContainer = styled.div`
  margin-bottom: 10px;
`
export const AddressAndHomeTrendingContainer = styled.div`
  border: 1px solid black;
  margin: 5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    order: 1;
    width: 20%;
    justify-content: space-between;
  }
`
export const UnOrderLists = styled.ul`
  list-style-type: none;
`
export const FailureViewContainer = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
export const FailureImg = styled.img`
  width: 300px;
  height: 320px;
`
export const FailHeading = styled.h1`
  font-size: 32px;
  font-family: 'Roboto';
`
export const FailDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
`
export const FailButton = styled.button`
  width: 120px;
  height: 38px;
`
export const SearchInputDiv = styled.div`
  display: flex;
  border: 1px solid #7e858e;
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
export const NoSearchResultsFoundContainer = styled.div`
  border: 2px solid red;
`
