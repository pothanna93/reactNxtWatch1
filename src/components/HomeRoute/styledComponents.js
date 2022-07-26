import styled from 'styled-components'

export const HomeContainer = styled.div`
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
  padding: 6px;
  margin: 5px;

  @media screen and (min-width: 768px) {
    order: 2;
    width: 80%;
    margin: 5px;
  }
`
export const HomeSearchAndItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${props => (props.homeItemsBg ? '#f1f5f9' : '#0f0f0f')};
  padding-left: 12px;
`

export const PopupContainer = styled.div`
  margin-bottom: 10px;
`
export const AddressAndHomeTrendingContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    order: 1;
    width: 20%;
    justify-content: space-between;
  }
`
