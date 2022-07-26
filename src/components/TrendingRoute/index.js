import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

import './index.css'

import {
  TrendingAllContainer,
  TrendSidDiv,
  TrendingContainer,
  UnOrderList,
  TrendNav,
  TrendHeading,
  TrendFailureViewContainer,
  TrendFailureImg,
  TrendFailHeading,
  TrendFailDescription,
  TrendFailButton,
  NavAndTrendContainer,
} from './styledComponents'
import TrendCard from '../TrendCard'
import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const trendingVideos = data.videos.map(eachVideos => ({
        publishedAt: eachVideos.published_at,
        id: eachVideos.id,
        thumbnailUrl: eachVideos.thumbnail_url,
        title: eachVideos.title,
        viewCount: eachVideos.view_count,
        channel: {
          name: eachVideos.channel.name,
          profileImageUrl: eachVideos.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideosList: trendingVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

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

  renderTrendingItems = () => {
    const {trendingVideosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const iconBg = isDarkTheme ? 'light-bg' : 'dark-bg'
          return (
            <TrendingContainer trendBgColor={isDarkTheme}>
              <TrendNav navBg={isDarkTheme}>
                <HiFire className={`trend-icon ${iconBg}`} />
                <TrendHeading trending={isDarkTheme}>Trending</TrendHeading>
              </TrendNav>
              <UnOrderList>
                {trendingVideosList.map(eachItem => (
                  <TrendCard
                    key={eachItem.id}
                    trendingVideoDetails={eachItem}
                  />
                ))}
              </UnOrderList>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingItems()
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
              <TrendingAllContainer PageBgColor={isDarkTheme}>
                <TrendSidDiv>
                  <SideBar />
                </TrendSidDiv>
                <NavAndTrendContainer itemsBgColor={isDarkTheme}>
                  {this.renderAll()}
                </NavAndTrendContainer>
              </TrendingAllContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default TrendingRoute
