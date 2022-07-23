import styled from 'styled-components'

export const PopupContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  display: ${props => props.display};
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  height: 40vh;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const BannerImage = styled.img`
  object-fit: fill;
  width: 200px;
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  padding: 8px;
  color: #1e293b;
  width: 100px;
  margin-top: 12px;
  font-weight: 500;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
`
export const PremiumPlan = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #1e293b;
  width: 180px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
