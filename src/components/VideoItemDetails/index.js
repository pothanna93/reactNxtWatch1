import {Component} from 'react'

import {RiPlayListAddFill} from 'react-icons/ri'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  VideoItemContainer,
  VideoItemDetailsContainer,
  TrendFailureViewContainer,
  TrendFailureImg,
  TrendFailHeading,
  TrendFailDescription,
  TrendFailButton,
  SideDiv,
  GamingItemsContainer,
  TextContainer,
  VideoTitle,
  PublishedLikesContainer,
  PublishedDiv,
  LikesDiv,
  HorizontalLine,
  LikeDiv,
  ChannelContainer,
  UserProfileDiv,
  ChannelLogo,
  ChannelNameDiv,
  ChannelName,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetailsList: [],
    isVideoSaved: false,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchData = await response.json()

      const videoLists = {
        description: fetchData.video_details.description,
        id: fetchData.video_details.id,
        publishedAt: fetchData.video_details.published_at,
        thumbnailUrl: fetchData.video_details.thumbnail_url,
        title: fetchData.video_details.title,
        videoUrl: fetchData.video_details.video_url,
        viewCount: fetchData.video_details.view_count,
        channel: {
          name: fetchData.video_details.channel.name,
          profileImageUrl: fetchData.video_details.channel.profile_image_url,
          subscriberCount: fetchData.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetailsList: videoLists,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideoItems = () => (
    <ThemeContext.Consumer>
      {value => {
        const {videoDetailsList, isVideoSaved, isLiked, isDisliked} = this.state
        const {
          id,
          channel,
          description,
          viewCount,
          videoUrl,
          title,
          publishedAt,
          videoSaved,
        } = videoDetailsList
        const {name, profileImageUrl, subscriberCount} = channel
        const {addToSaveVideos, removeSaveVideos} = value

        const addOrRemoveItem = () => {
          if (isVideoSaved === true) {
            removeSaveVideos(id)
          } else {
            addToSaveVideos({...videoDetailsList, videoSaved: true})
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prev => ({isVideoSaved: !prev.isVideoSaved}),
            addOrRemoveItem,
          )
        }

        const onClickLikeButton = () => {
          this.setState(prev => ({isLiked: !prev.isLiked, isDisliked: false}))
        }

        const onClickDislikeButton = () => {
          this.setState(prev => ({
            isDisliked: !prev.isDisliked,
            isLiked: false,
          }))
        }

        const likeClass = isLiked ? '#2563eb' : '#64748b'
        const dislikeClass = isDisliked ? '#2563eb' : '#64748b'

        const likeIcon = isLiked ? <AiFillLike /> : <AiOutlineLike />
        const dislikeIcon = isDisliked ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike />
        )
        return (
          <VideoItemDetailsContainer>
            <ReactPlayer url={videoUrl} controls width="100%" height="450px" />
            <TextContainer>
              <VideoTitle>{title}</VideoTitle>
              <PublishedLikesContainer>
                <PublishedDiv>
                  <VideoTitle>{viewCount} views</VideoTitle>
                  <VideoTitle>{publishedAt}</VideoTitle>
                </PublishedDiv>
                <LikesDiv>
                  <LikeDiv
                    type="button"
                    color={likeClass}
                    onClick={onClickLikeButton}
                  >
                    {likeIcon}

                    <VideoTitle color={likeClass}>Like</VideoTitle>
                  </LikeDiv>
                  <LikeDiv
                    type="button"
                    color={dislikeClass}
                    onClick={onClickDislikeButton}
                  >
                    {dislikeIcon}
                    <VideoTitle color={dislikeClass}>DisLike</VideoTitle>
                  </LikeDiv>
                  <LikeDiv
                    color={videoSaved ? '#4f46e5' : '#181818'}
                    onClick={saveVideoToList}
                  >
                    <RiPlayListAddFill />
                    <VideoTitle color={videoSaved ? '#4f46e5' : '#181818'}>
                      {isVideoSaved ? 'Saved' : 'Save'}
                    </VideoTitle>
                  </LikeDiv>
                </LikesDiv>
              </PublishedLikesContainer>
            </TextContainer>
            <HorizontalLine />
            <ChannelContainer>
              <UserProfileDiv>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelNameDiv>
                  <ChannelName>{name}</ChannelName>
                  <ChannelName>{subscriberCount} Subscribers</ChannelName>
                </ChannelNameDiv>
              </UserProfileDiv>
              <ChannelName>{description}</ChannelName>
            </ChannelContainer>
          </VideoItemDetailsContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <div className="videos-loader-view" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderTrendingFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <TrendFailureViewContainer>
            <TrendFailureImg src={failImg} alt="failure" />
            <TrendFailHeading something={isDarkTheme}>
              Something went wrong
            </TrendFailHeading>
            <TrendFailDescription>we are having some</TrendFailDescription>
            <TrendFailButton>Retry</TrendFailButton>
          </TrendFailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItems()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <VideoItemContainer PageBgColor={isDarkTheme}>
                <SideDiv>
                  <SideBar />
                </SideDiv>
                <GamingItemsContainer itemsBgColor={isDarkTheme}>
                  {this.renderAll()}
                </GamingItemsContainer>
              </VideoItemContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
