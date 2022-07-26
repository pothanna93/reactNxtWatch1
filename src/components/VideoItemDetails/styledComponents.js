import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  border: 2px solid aqua;
  display: flex;
  background-color: ${props => (props.PageBgColor ? '#f9f9f9' : '#231f20')};
`
export const VideoItemDetailsContainer = styled.div`
  border: 2px solid red;
`
export const SideDiv = styled.div`
  border: 2px solid black;
  margin: 5px;
  display: flex;
  flex-direction: column;
`
export const GamingItemsContainer = styled.div`
  border: 3px solid black;
  width: 100%;
  margin: 5px;
  padding: 20px;
  background-color: ${props => (props.itemsBgColor ? '#f1f5f9' : '#0f0f0f')};
`
export const TrendFailureViewContainer = styled.div`
  border: 1px solid yellow;
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
export const TextContainer = styled.div`
  border: 2px solid green;
  margin-top: 6px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  margin-left: 10px;
`
export const PublishedLikesContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const PublishedDiv = styled.div`
  border: 2px solid green;
  display: flex;
`
export const LikesDiv = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
`
export const HorizontalLine = styled.hr`
  background-color: yellow;
  border: 4px solid yellow;
`
export const LikeDiv = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  background-color: transparent;
  border: 0px none;
  color: ${props => props.color};
`
export const ChannelContainer = styled.div`
  border: 3px solid black;
`
export const UserProfileDiv = styled.div`
  border: 1px solid red;
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`
export const ChannelNameDiv = styled.div`
  border: 2px solid yellowgreen;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
`
