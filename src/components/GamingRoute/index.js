import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import Header from '../Header'
import GamingCard from '../GamingCard'

import {
  GamingContainer,
  SideDiv,
  GamingItemsContainer,
  TrendNav,
  TrendHeading,
  UnOrderList,
  TrendFailureViewContainer,
  TrendFailureImg,
  TrendFailHeading,
  TrendFailDescription,
  TrendFailButton,
  GamingAllContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingVideosList: fetchData,
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
            <TrendFailButton onClick={this.getGamingVideos}>
              Retry
            </TrendFailButton>
          </TrendFailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingItems = () => {
    const {gamingVideosList} = this.state
    console.log(gamingVideosList)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const iconBg = isDarkTheme ? 'light-bg' : 'dark-bg'
          return (
            <GamingContainer gameColor={isDarkTheme}>
              <TrendNav navBg={isDarkTheme}>
                <SiYoutubegaming className={`trend-icon ${iconBg}`} />
                <TrendHeading trending={isDarkTheme}>Gaming</TrendHeading>
              </TrendNav>
              <UnOrderList>
                {gamingVideosList.map(eachGame => (
                  <GamingCard key={eachGame.id} gamingVideoDetails={eachGame} />
                ))}
              </UnOrderList>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingItems()
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
              <GamingAllContainer PageBgColor={isDarkTheme}>
                <SideDiv>
                  <SideBar />
                </SideDiv>
                <GamingItemsContainer itemsBgColor={isDarkTheme}>
                  {this.renderAll()}
                </GamingItemsContainer>
              </GamingAllContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}
export default GamingRoute
