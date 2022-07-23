import styled from 'styled-components'

export const ListItemContainer = styled.li`
  border: 1px solid aqua;
  list-style-type: none;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (min-width: 768px) {
    width: 310px;
    flex-grow: 1;
    margin: 8px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
`
export const ProfileImgAndInfoContainer = styled.div`
  display: flex;
  margin-top: 6px;
  border: 1px solid red;
`
export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-left: 8px;
`
export const Title = styled.p`
  font-size: 16px;
  margin-top: 6px;
  margin-bottom: 2px;
  margin-right: 6px;
  font-family: 'Roboto';
  font-weight: 400;
  color: #475569;
`
export const TitleOfVideo = styled.p`
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  margin-right: 6px;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.7;

  color: ${props => (props.videoHeading ? '#1e293b' : '#fff')};
`
export const ViewsContainer = styled.div`
  border: 1px solid green;
  display: flex;
  margin-top: 0px;
  padding-top: 0px;
`
