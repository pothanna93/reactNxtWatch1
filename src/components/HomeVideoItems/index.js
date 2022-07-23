import ThemeContext from '../../context/ThemeContext'
import {
  ListItemContainer,
  ThumbnailImage,
  ProfileImgAndInfoContainer,
  ProfilePic,
  InfoContainer,
  Title,
  ViewsContainer,
  TitleOfVideo,
} from './styledComponents'

const HomeVideoItems = props => {
  const {videoItemDetails} = props
  const {
    thumbnailUrl,
    channel,
    title,
    publishedAt,
    viewCount,
  } = videoItemDetails
  const {profileImageUrl, name} = channel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <ListItemContainer>
            <ThumbnailImage alt="thumbnail" src={thumbnailUrl} />
            <ProfileImgAndInfoContainer>
              <ProfilePic src={profileImageUrl} alt="profile" />
              <InfoContainer>
                <TitleOfVideo videoHeading={isDarkTheme}>{title}</TitleOfVideo>
                <Title>{name}</Title>
                <ViewsContainer>
                  <Title>{viewCount} views</Title>
                  <Title>. {publishedAt}</Title>
                </ViewsContainer>
              </InfoContainer>
            </ProfileImgAndInfoContainer>
          </ListItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default HomeVideoItems
