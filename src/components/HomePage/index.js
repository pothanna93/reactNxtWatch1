import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiSearch} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import HomeVideoItems from '../HomeVideoItems'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeViewContainer,
  SearchAndItemsContainer,
  SearchInputDiv,
  InputElement,
  SearchButton,
  HomeFailureViewContainer,
  HomeFailureImg,
  HomeFailHeading,
  HomeFailDescription,
  HomeFailButton,
  NoSearchResultContainer,
  NoSearchFailureImg,
  NoSearchFailHeading,
  NoSearchFailDescription,
  NoSearchFailButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomePage extends Component {
  state = {
    videosLists: {},
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        total: fetchedData.total,
        videoItem: fetchedData.videos.map(video => ({
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
          id: video.id,
          publishedAt: video.published_at,
          thumbnailUrl: video.thumbnail_url,
          title: video.title,
          viewCount: video.view_count,
        })),
      }

      this.setState({
        videosLists: updatedData,
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

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickSearchIcon = () => {
    this.getProducts()
  }

  onClickInput = event => {
    if (event.key === 'Enter') {
      this.getProducts()
    }
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const iconBg = isDarkTheme ? 'light-mode' : 'dark-mode'
          return (
            <SearchInputDiv>
              <InputElement
                type="search"
                fontColor={isDarkTheme}
                onChange={this.onChangeSearch}
                value={searchInput}
                onKeyDown={this.onClickInput}
              />
              <SearchButton onClick={this.onClickSearchIcon}>
                <BiSearch className={`search-icon ${iconBg}`} />
              </SearchButton>
            </SearchInputDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderHomeVideoFailureView = () => {
    const {searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const failImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          return (
            <HomeFailureViewContainer>
              <HomeFailureImg src={failImg} alt="failure" />
              <HomeFailHeading>Somthing went wrong</HomeFailHeading>
              <HomeFailDescription>we are having some</HomeFailDescription>
              <HomeFailButton>Retry</HomeFailButton>
            </HomeFailureViewContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderHomeItem = () => {
    const {videosLists, searchInput} = this.state
    const {videoItem} = videosLists
    const displayVideos = videoItem.length > 0
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const iconBg = isDarkTheme ? 'light-mode' : 'dark-mode'

          return displayVideos ? (
            <SearchAndItemsContainer homeBgColor={isDarkTheme}>
              <ul className="unordered-list">
                {videoItem.map(eachItem => (
                  <HomeVideoItems
                    key={eachItem.id}
                    videoItemDetails={eachItem}
                  />
                ))}
              </ul>
            </SearchAndItemsContainer>
          ) : (
            <NoSearchResultContainer>
              <NoSearchFailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="failure"
              />
              <NoSearchFailHeading failHeading={isDarkTheme}>
                No Search Results Found
              </NoSearchFailHeading>
              <NoSearchFailDescription FailDescription={isDarkTheme}>
                Try Different key words
              </NoSearchFailDescription>
              <NoSearchFailButton>Retry</NoSearchFailButton>
            </NoSearchResultContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeItem()
      case apiStatusConstants.failure:
        return this.renderHomeVideoFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeViewContainer>
        {this.renderSearchInput()}
        {this.renderAll()}
      </HomeViewContainer>
    )
  }
}
export default HomePage
