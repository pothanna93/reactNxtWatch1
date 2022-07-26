import styled from 'styled-components'

export const ListItemContainer = styled.li`
  list-style-type: none;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (min-width: 768px) {
    width: 300px;
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
`
export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;
`
export const Title = styled.p`
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 6px;
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
  display: flex;
  margin-top: 0px;
  padding-top: 0px;
`
