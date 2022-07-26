import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'

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
  renderLoadingView = () => (
    <div className="videos-loader-view" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderTrendingItems = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideos} = value
        const savedVideoLength = savedVideos.length === 0
        const iconBg = isDarkTheme ? 'light-bg' : 'dark-bg'

        return savedVideoLength ? (
          <TrendFailureViewContainer>
            <TrendFailureImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="failure"
            />
            <TrendFailHeading something={isDarkTheme}>
              Something went wrong
            </TrendFailHeading>
            <TrendFailDescription>No Saved Videos Found</TrendFailDescription>
          </TrendFailureViewContainer>
        ) : (
          <TrendingContainer trendBgColor={isDarkTheme}>
            <TrendNav navBg={isDarkTheme}>
              <HiFire className={`trend-icon ${iconBg}`} />
              <TrendHeading trending={isDarkTheme}>Saved Videos</TrendHeading>
            </TrendNav>
            <UnOrderList>
              {savedVideos.map(eachItem => (
                <TrendCard key={eachItem.id} trendingVideoDetails={eachItem} />
              ))}
            </UnOrderList>
          </TrendingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingItems()

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
                  {this.renderTrendingItems()}
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
